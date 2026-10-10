"use client";
/**
 * Wallet adapters. The app never sees private keys: signing happens inside the wallet
 * (Freighter, xBull, Albedo, Lobstr via Stellar Wallets Kit).
 *
 * The E2E adapter exists only for automated tests: when the build flag
 * NEXT_PUBLIC_E2E_TEST_WALLET=1 is set, the app delegates signing to
 * `window.__veridiaTestWallet`, which Playwright injects and backs with a key held in
 * the test runner process (never in the page).
 */

export interface WalletAdapter {
  readonly id: string;
  connect(): Promise<string>;
  disconnect(): Promise<void>;
  signTransaction(xdr: string, opts: { networkPassphrase: string; address: string }): Promise<string>;
  signMessage(message: string, opts: { networkPassphrase: string; address: string }): Promise<string>;
  getNetworkPassphrase(): Promise<string | null>;
  /** Silently restore a previous connection (no modal). */
  restore(): Promise<string | null>;
}

const WALLET_KEY = "veridia:wallet-id";
const safeStorage = {
  get: (k: string) => {
    try {
      return window.localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string | null) => {
    try {
      if (v === null) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, v);
    } catch {
      /* storage unavailable */
    }
  },
};

interface TestWallet {
  getAddress(): Promise<string>;
  signTransaction(xdr: string, passphrase: string): Promise<string>;
  signMessage(message: string): Promise<string>;
}

declare global {
  interface Window {
    __veridiaTestWallet?: TestWallet;
  }
}

function errorMessage(e: unknown): string {
  if (e && typeof e === "object" && "message" in e) return String((e as { message: unknown }).message);
  return String(e);
}

export async function createKitAdapter(networkPassphrase: string): Promise<WalletAdapter> {
  const [{ StellarWalletsKit }, { FreighterModule }, { xBullModule }, { AlbedoModule }, { LobstrModule }] = await Promise.all([
    import("@creit.tech/stellar-wallets-kit"),
    import("@creit.tech/stellar-wallets-kit/modules/freighter"),
    import("@creit.tech/stellar-wallets-kit/modules/xbull"),
    import("@creit.tech/stellar-wallets-kit/modules/albedo"),
    import("@creit.tech/stellar-wallets-kit/modules/lobstr"),
  ]);
  StellarWalletsKit.init({
    modules: [new FreighterModule(), new xBullModule(), new AlbedoModule(), new LobstrModule()],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    network: networkPassphrase as any,
  });
  return {
    id: "kit",
    async connect() {
      try {
        const { address } = await StellarWalletsKit.authModal();
        safeStorage.set(WALLET_KEY, StellarWalletsKit.selectedModule.productId);
        return address;
      } catch (e) {
        throw new Error(errorMessage(e) || "Wallet connection cancelled");
      }
    },
    async disconnect() {
      safeStorage.set(WALLET_KEY, null);
      await StellarWalletsKit.disconnect().catch(() => {});
    },
    async restore() {
      const id = safeStorage.get(WALLET_KEY);
      if (!id) return null;
      try {
        StellarWalletsKit.setWallet(id);
        const { address } = await StellarWalletsKit.getAddress();
        return address || null;
      } catch {
        return null;
      }
    },
    async signTransaction(xdr, opts) {
      try {
        const { signedTxXdr } = await StellarWalletsKit.signTransaction(xdr, opts);
        return signedTxXdr;
      } catch (e) {
        throw new Error(errorMessage(e) || "Signing rejected");
      }
    },
    async signMessage(message, opts) {
      try {
        const { signedMessage } = await StellarWalletsKit.signMessage(message, opts);
        return signedMessage;
      } catch (e) {
        throw new Error(errorMessage(e) || "Message signing rejected");
      }
    },
    async getNetworkPassphrase() {
      try {
        return (await StellarWalletsKit.getNetwork()).networkPassphrase;
      } catch {
        return null;
      }
    },
  };
}

export function createTestAdapter(): WalletAdapter {
  const w = () => {
    if (!window.__veridiaTestWallet) throw new Error("E2E test wallet not injected");
    return window.__veridiaTestWallet;
  };
  return {
    id: "e2e",
    connect: () => w().getAddress(),
    disconnect: async () => {},
    signTransaction: (xdr, { networkPassphrase }) => w().signTransaction(xdr, networkPassphrase),
    signMessage: (message) => w().signMessage(message),
    getNetworkPassphrase: async () => null,
    restore: async () => (window.__veridiaTestWallet ? window.__veridiaTestWallet.getAddress() : null),
  };
}
