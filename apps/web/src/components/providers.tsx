"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { VeridiaClient, networkConfig } from "@veridia/stellar-client";
import type { PublicConfig } from "@/server/config";
import { createKitAdapter, createTestAdapter, type WalletAdapter } from "@/lib/wallet";

// ---------------------------------------------------------------- config

const ConfigContext = React.createContext<PublicConfig | null>(null);

export function useConfig(): PublicConfig {
  const c = React.useContext(ConfigContext);
  if (!c) throw new Error("useConfig outside <Providers>");
  return c;
}

// ---------------------------------------------------------------- wallet

type WalletStatus = "restoring" | "disconnected" | "connecting" | "connected";

interface WalletState {
  status: WalletStatus;
  address: string | null;
  /** Address with a valid signed API session (may differ if the wallet switched account). */
  sessionAddress: string | null;
  signingIn: boolean;
  networkMismatch: boolean;
  client: VeridiaClient;
  connect(): Promise<string | null>;
  disconnect(): Promise<void>;
  signIn(): Promise<boolean>;
  /** Returns a connected address, prompting the wallet if needed. */
  ensureConnected(): Promise<string>;
  signTransaction(xdr: string, opts: { networkPassphrase: string; address: string }): Promise<string>;
}

const WalletContext = React.createContext<WalletState | null>(null);

export function useWallet(): WalletState {
  const w = React.useContext(WalletContext);
  if (!w) throw new Error("useWallet outside <Providers>");
  return w;
}

async function apiJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, headers: { "content-type": "application/json", ...(init?.headers ?? {}) } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((body as { error?: string }).error ?? `Request failed (${res.status})`);
  return body as T;
}

export function Providers({ config, children }: { config: PublicConfig; children: React.ReactNode }) {
  const router = useRouter();
  const client = React.useMemo(() => new VeridiaClient(networkConfig(config.network, config.rpcUrl), config.contracts), [config]);
  const adapterRef = React.useRef<Promise<WalletAdapter> | null>(null);
  const [status, setStatus] = React.useState<WalletStatus>("restoring");
  const [address, setAddress] = React.useState<string | null>(null);
  const [sessionAddress, setSessionAddress] = React.useState<string | null>(null);
  const [signingIn, setSigningIn] = React.useState(false);
  const [networkMismatch, setNetworkMismatch] = React.useState(false);

  const adapter = React.useCallback(() => {
    adapterRef.current ??= config.e2eTestWallet ? Promise.resolve(createTestAdapter()) : createKitAdapter(config.passphrase);
    return adapterRef.current;
  }, [config]);

  const checkNetwork = React.useCallback(async () => {
    const pass = await (await adapter()).getNetworkPassphrase();
    setNetworkMismatch(pass !== null && pass !== config.passphrase);
  }, [adapter, config.passphrase]);

  // Restore wallet + session on load.
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ session }, restored] = await Promise.all([
        apiJson<{ session: { address: string } | null }>("/api/auth/session").catch(() => ({ session: null })),
        adapter()
          .then((a) => a.restore())
          .catch(() => null),
      ]);
      if (cancelled) return;
      setSessionAddress(session?.address ?? null);
      setAddress(restored);
      setStatus(restored ? "connected" : "disconnected");
      if (restored) checkNetwork().catch(() => {});
    })();
    return () => {
      cancelled = true;
    };
  }, [adapter, checkNetwork]);

  const signIn = React.useCallback(
    async (addr?: string) => {
      const who = addr ?? address;
      if (!who) return false;
      setSigningIn(true);
      try {
        const { nonce, message } = await apiJson<{ nonce: string; message: string }>(`/api/auth/challenge?address=${who}`);
        const signature = await (await adapter()).signMessage(message, { networkPassphrase: config.passphrase, address: who });
        await apiJson("/api/auth/verify", { method: "POST", body: JSON.stringify({ address: who, nonce, signature }) });
        setSessionAddress(who);
        router.refresh(); // server components render per-session data
        return true;
      } catch (e) {
        toast.error("Sign-in failed", { description: e instanceof Error ? e.message : String(e) });
        return false;
      } finally {
        setSigningIn(false);
      }
    },
    [address, adapter, config.passphrase, router],
  );

  const connect = React.useCallback(async () => {
    setStatus("connecting");
    try {
      const addr = await (await adapter()).connect();
      setAddress(addr);
      setStatus("connected");
      checkNetwork().catch(() => {});
      if (sessionAddress !== addr) await signIn(addr);
      return addr;
    } catch (e) {
      setStatus(address ? "connected" : "disconnected");
      toast.error("Wallet not connected", { description: e instanceof Error ? e.message : String(e) });
      return null;
    }
  }, [adapter, address, checkNetwork, sessionAddress, signIn]);

  const disconnect = React.useCallback(async () => {
    await (await adapter()).disconnect();
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    setAddress(null);
    setSessionAddress(null);
    setStatus("disconnected");
    router.refresh();
  }, [adapter, router]);

  const ensureConnected = React.useCallback(async () => {
    if (address) return address;
    const a = await connect();
    if (!a) throw new Error("Connect a wallet to continue");
    return a;
  }, [address, connect]);

  const signTransaction = React.useCallback(
    async (xdr: string, opts: { networkPassphrase: string; address: string }) => (await adapter()).signTransaction(xdr, opts),
    [adapter],
  );

  const value: WalletState = {
    status,
    address,
    sessionAddress,
    signingIn,
    networkMismatch,
    client,
    connect,
    disconnect,
    signIn: () => signIn(),
    ensureConnected,
    signTransaction,
  };

  return (
    <ConfigContext.Provider value={config}>
      <WalletContext.Provider value={value}>
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </WalletContext.Provider>
    </ConfigContext.Provider>
  );
}
