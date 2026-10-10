"use client";
import * as React from "react";
import { toast } from "sonner";
import type { xdr } from "@stellar/stellar-sdk";
import type { TxKind } from "@veridia/domain";
import type { InvokeResult, KnownContract, TxProgress } from "@veridia/stellar-client";
import { useConfig, useWallet } from "@/components/providers";

export interface InvokeRequest {
  contract: KnownContract;
  method: string;
  args: xdr.ScVal[];
  kind: TxKind;
  /** Human label for toasts, e.g. "Deposit 100 XLM". */
  label: string;
  projectId?: number;
  roundId?: number;
  /** Called right after the network accepted the transaction (before confirmation). */
  onSubmitted?: (hash: string) => void | Promise<void>;
}

const STAGE_TEXT: Record<TxProgress["stage"], string> = {
  simulating: "Simulating transaction…",
  signing: "Waiting for wallet signature…",
  submitted: "Submitted — waiting for confirmation…",
  confirmed: "Confirmed",
  failed: "Failed",
};

/**
 * Explicit, observable contract invocation: simulate → wallet signs → submit → confirm.
 * Pending transactions are recorded server-side so the indexer can reconcile them even
 * if this tab is closed.
 */
export function useInvoke() {
  const wallet = useWallet();
  const config = useConfig();
  const [pending, setPending] = React.useState<string | null>(null);

  const invoke = React.useCallback(
    async <T = unknown>(req: InvokeRequest): Promise<InvokeResult<T> | null> => {
      let source: string;
      try {
        source = await wallet.ensureConnected();
      } catch (e) {
        toast.error(e instanceof Error ? e.message : String(e));
        return null;
      }
      if (wallet.networkMismatch) {
        toast.error("Wallet network mismatch", { description: `Switch your wallet to ${config.network}.` });
        return null;
      }
      const id = toast.loading(req.label, { description: STAGE_TEXT.simulating });
      setPending(req.method);
      try {
        const res = await wallet.client.invoke<T>({
          contract: req.contract,
          method: req.method,
          args: req.args,
          source,
          sign: wallet.signTransaction,
          onProgress: (p) => {
            toast.loading(req.label, { id, description: STAGE_TEXT[p.stage] });
            if (p.stage === "submitted") {
              if (wallet.sessionAddress === source) {
                fetch("/api/transactions", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    hash: p.hash,
                    kind: req.kind,
                    contract: req.contract,
                    method: req.method,
                    projectId: req.projectId,
                    roundId: req.roundId,
                  }),
                }).catch(() => {});
              }
              void req.onSubmitted?.(p.hash);
            }
          },
        });
        toast.success(req.label, {
          id,
          description: `Confirmed in ledger ${res.ledger}`,
          action: config.explorerTx
            ? { label: "View", onClick: () => window.open(`${config.explorerTx}${res.hash}`, "_blank", "noopener") }
            : undefined,
        });
        return res;
      } catch (e) {
        toast.error(req.label, { id, description: e instanceof Error ? e.message : String(e), duration: 10_000 });
        return null;
      } finally {
        setPending(null);
      }
    },
    [wallet, config],
  );

  return { invoke, pending };
}
