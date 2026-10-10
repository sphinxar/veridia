import { Networks } from "@stellar/stellar-sdk";

export type NetworkName = "local" | "testnet";

export interface NetworkConfig {
  name: NetworkName;
  passphrase: string;
  rpcUrl: string;
  friendbotUrl?: string;
  explorerTxUrl?: (hash: string) => string;
}

export interface ContractIds {
  escrow: string;
  registry: string;
  verification: string;
  /** Default funding + stake token (a Stellar Asset Contract). */
  token: string;
}

export const NETWORKS: Record<NetworkName, NetworkConfig> = {
  local: {
    name: "local",
    passphrase: Networks.STANDALONE,
    rpcUrl: "http://localhost:8000/rpc",
    friendbotUrl: "http://localhost:8000/friendbot",
  },
  testnet: {
    name: "testnet",
    passphrase: Networks.TESTNET,
    rpcUrl: "https://soroban-testnet.stellar.org",
    friendbotUrl: "https://friendbot.stellar.org",
    explorerTxUrl: (h) => `https://stellar.expert/explorer/testnet/tx/${h}`,
  },
};

export function networkConfig(name: string, rpcUrlOverride?: string): NetworkConfig {
  const base = NETWORKS[name as NetworkName];
  if (!base) throw new Error(`Unknown network "${name}" (expected local | testnet)`);
  return rpcUrlOverride ? { ...base, rpcUrl: rpcUrlOverride } : base;
}
