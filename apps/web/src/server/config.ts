import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { NETWORKS, type ContractIds } from "@veridia/stellar-client";
import { env } from "./env";

/** Configuration that is safe to send to the browser (no secrets). */
export interface PublicConfig {
  network: "local" | "testnet";
  passphrase: string;
  rpcUrl: string;
  contracts: ContractIds;
  params: {
    verification: Record<string, string | number>;
    registry: Record<string, string | number>;
    escrow: Record<string, string | number>;
  };
  explorerTx: string | null;
  e2eTestWallet: boolean;
}

let cached: PublicConfig | null = null;

export function publicConfig(): PublicConfig {
  if (cached) return cached;
  const e = env();
  const dir = e.DEPLOYMENTS_DIR ?? join(process.cwd(), "..", "..", "deployments");
  const d = JSON.parse(readFileSync(join(dir, `${e.STELLAR_NETWORK}.json`), "utf8"));
  const net = NETWORKS[e.STELLAR_NETWORK];
  cached = {
    network: e.STELLAR_NETWORK,
    passphrase: net.passphrase,
    // The browser talks to the public RPC endpoint directly (no secrets involved).
    rpcUrl: net.rpcUrl,
    contracts: d.contracts,
    params: d.params,
    explorerTx: e.STELLAR_NETWORK === "testnet" ? "https://stellar.expert/explorer/testnet/tx/" : null,
    e2eTestWallet: process.env.NEXT_PUBLIC_E2E_TEST_WALLET === "1",
  };
  return cached;
}
