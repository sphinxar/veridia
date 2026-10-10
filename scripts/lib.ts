/**
 * Shared helpers for deployment / seeding scripts. These scripts hold DEV keys in
 * `.data/keys/` (git-ignored). They are never used by the web app or the indexer.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  Asset,
  BASE_FEE,
  Keypair,
  TransactionBuilder,
  rpc,
  type xdr,
  type Operation,
} from "@stellar/stellar-sdk";
import { networkConfig, type ContractIds, type NetworkConfig } from "../packages/stellar-client/src/networks";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const KEYS_DIR = join(ROOT, ".data", "keys");
/** Override with DEPLOYMENTS_DIR (used by the E2E suite for an isolated deployment). */
export const DEPLOYMENTS_DIR = process.env.DEPLOYMENTS_DIR ?? join(ROOT, "deployments");

export interface Deployment {
  network: string;
  rpcUrl: string;
  passphrase: string;
  contracts: ContractIds;
  admin: string;
  treasury: string;
  startLedger: number;
  deployedAt: string;
  wasmHashes: Record<string, string>;
  params: Record<string, unknown>;
}

export function argValue(name: string, fallback?: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1];
  return fallback;
}

export function getNetwork(): NetworkConfig {
  const name = argValue("network", process.env.STELLAR_NETWORK ?? "local")!;
  return networkConfig(name, process.env.STELLAR_RPC_URL || undefined);
}

export function rpcServer(n: NetworkConfig) {
  return new rpc.Server(n.rpcUrl, { allowHttp: n.rpcUrl.startsWith("http://") });
}

export function loadOrCreateKey(network: string, name: string): Keypair {
  mkdirSync(KEYS_DIR, { recursive: true });
  const file = join(KEYS_DIR, `${network}.json`);
  const keys: Record<string, string> = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : {};
  if (!keys[name]) {
    keys[name] = Keypair.random().secret();
    writeFileSync(file, JSON.stringify(keys, null, 2), { mode: 0o600 });
  }
  return Keypair.fromSecret(keys[name]!);
}

export async function fund(n: NetworkConfig, server: rpc.Server, address: string) {
  try {
    await server.getAccount(address);
    return; // already exists
  } catch {
    /* not found → fund */
  }
  if (!n.friendbotUrl) throw new Error(`Account ${address} is not funded and no friendbot is configured`);
  for (let attempt = 0; attempt < 30; attempt++) {
    const res = await fetch(`${n.friendbotUrl}?addr=${encodeURIComponent(address)}`);
    if (res.ok) return;
    const body = await res.text();
    if (body.includes("createAccountAlreadyExist") || body.includes("op_already_exists")) return;
    await new Promise((r) => setTimeout(r, 2000)); // local friendbot may still be starting
  }
  throw new Error(`Friendbot failed for ${address}`);
}

/** Simulate, assemble, sign and submit a single Soroban operation; returns retval. */
export async function submitOp(
  n: NetworkConfig,
  server: rpc.Server,
  signer: Keypair,
  op: xdr.Operation<Operation>,
): Promise<{ hash: string; retval: xdr.ScVal | undefined; ledger: number }> {
  const account = await server.getAccount(signer.publicKey());
  const tx = new TransactionBuilder(account, { fee: BASE_FEE, networkPassphrase: n.passphrase })
    .addOperation(op)
    .setTimeout(120)
    .build();
  const prepared = await server.prepareTransaction(tx);
  prepared.sign(signer);
  const sent = await server.sendTransaction(prepared);
  if (sent.status === "ERROR") throw new Error(`send failed: ${sent.errorResult?.result.type}`);
  for (let i = 0; i < 120; i++) {
    const res = await server.getTransaction(sent.hash);
    if (res.status === rpc.Api.GetTransactionStatus.SUCCESS) {
      return { hash: sent.hash, retval: res.returnValue, ledger: res.ledger };
    }
    if (res.status === rpc.Api.GetTransactionStatus.FAILED) throw new Error(`tx ${sent.hash} failed`);
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`tx ${sent.hash} not confirmed`);
}

export function nativeTokenId(n: NetworkConfig): string {
  return Asset.native().contractId(n.passphrase);
}

export function deploymentPath(network: string) {
  return join(DEPLOYMENTS_DIR, `${network}.json`);
}

export function loadDeployment(network: string): Deployment {
  const p = deploymentPath(network);
  if (!existsSync(p)) throw new Error(`No deployment for "${network}". Run: pnpm deploy:${network}`);
  return JSON.parse(readFileSync(p, "utf8"));
}

export function saveDeployment(d: Deployment) {
  mkdirSync(DEPLOYMENTS_DIR, { recursive: true });
  writeFileSync(deploymentPath(d.network), JSON.stringify(d, null, 2) + "\n");
}

export const XLM = 10_000_000n;

import { VeridiaClient, keypairSigner } from "../packages/stellar-client/src/client";
import type { xdr as XdrNs } from "@stellar/stellar-sdk";

export function clientFor(network: string) {
  const d = loadDeployment(network);
  const n = networkConfig(network, process.env.STELLAR_RPC_URL || undefined);
  return { d, n, client: new VeridiaClient(n, d.contracts) };
}

/** Invoke a contract method signed by a dev keypair. */
export async function invokeAs(
  client: VeridiaClient,
  kp: Keypair,
  contract: "escrow" | "registry" | "verification" | "token",
  method: string,
  args: XdrNs.ScVal[],
) {
  return client.invoke({ contract, method, args, source: kp.publicKey(), sign: keypairSigner(kp) });
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Wait until the network's latest ledger close time passes `ts` (seconds). */
export async function waitForLedgerTime(server: rpc.Server, ts: number) {
  for (;;) {
    const latest = await server.getLatestLedger();
    const closeTime = Number((latest as unknown as { closeTime?: string }).closeTime ?? 0);
    const now = closeTime || Math.floor(Date.now() / 1000);
    if (now > ts) return;
    await sleep(Math.min(5000, Math.max(1000, (ts - now) * 1000)));
  }
}
