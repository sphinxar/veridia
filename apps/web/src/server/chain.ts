import "server-only";
import { VeridiaClient, networkConfig } from "@veridia/stellar-client";
import { publicConfig } from "./config";
import { env } from "./env";

let client: VeridiaClient | null = null;

/** Read-only chain access for the server (no signing keys exist server-side). */
export function chain(): VeridiaClient {
  if (!client) {
    const cfg = publicConfig();
    client = new VeridiaClient(networkConfig(cfg.network, env().STELLAR_RPC_URL || undefined), cfg.contracts);
  }
  return client;
}
