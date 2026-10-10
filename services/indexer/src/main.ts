/**
 * Indexer entrypoint.  pnpm indexer   (or: pnpm --filter @veridia/indexer once)
 */
import "@veridia/web/db/load-env";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { rpc } from "@stellar/stellar-sdk";
import { VeridiaClient, fetchEvents, networkConfig, type ContractIds, type KnownContract } from "@veridia/stellar-client";
import { closeDb, getDb } from "@veridia/web/db";
import * as s from "@veridia/web/db/schema";
import { Indexer, type ChainReader, type EventSource } from "./indexer";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const network = process.env.STELLAR_NETWORK ?? "local";
const deploymentsDir = process.env.DEPLOYMENTS_DIR ?? join(ROOT, "deployments");
const deployment = JSON.parse(readFileSync(join(deploymentsDir, `${network}.json`), "utf8")) as {
  contracts: ContractIds;
  startLedger: number;
  params: unknown;
};
const n = networkConfig(network, process.env.STELLAR_RPC_URL || undefined);
const client = new VeridiaClient(n, deployment.contracts);
const c = deployment.contracts;
const names: Record<string, KnownContract> = {
  [c.escrow]: "escrow",
  [c.registry]: "registry",
  [c.verification]: "verification",
};
const log = (msg: string, extra?: unknown) =>
  console.log(`[indexer ${new Date().toISOString()}] ${msg}`, extra === undefined ? "" : extra);

const source: EventSource = {
  async fetch(from) {
    try {
      return await fetchEvents(client.server, [c.escrow, c.registry, c.verification], names, from);
    } catch (e) {
      // Start ledger outside RPC retention: resume from the oldest available ledger.
      const m = /ledger range: (\d+) - (\d+)/.exec(String(e)) ?? /must be between the oldest ledger: (\d+)/.exec(String(e));
      if ("startLedger" in from && m) {
        log(`start ledger ${from.startLedger} outside retention; resuming at ${m[1]} (full reconciliation will run)`);
        return fetchEvents(client.server, [c.escrow, c.registry, c.verification], names, { startLedger: Number(m[1]) });
      }
      throw e;
    }
  },
};

const chain: ChainReader = {
  async getTransaction(hash) {
    const r = await client.server.getTransaction(hash);
    if (r.status === rpc.Api.GetTransactionStatus.SUCCESS) return { status: "SUCCESS", ledger: r.ledger };
    if (r.status === rpc.Api.GetTransactionStatus.FAILED) return { status: "FAILED", ledger: r.ledger, error: "Transaction failed on-chain" };
    return { status: "NOT_FOUND" };
  },
  async getProject(chainId) {
    const [p, ms] = await Promise.all([client.getProject(chainId), client.getMilestones(chainId)]);
    return {
      status: p.status,
      funded: p.funded,
      released: p.released,
      refundPool: p.refundPool,
      currentMilestone: p.currentMilestone,
      maxAttempts: p.maxAttempts,
      milestones: ms.map((m) => ({ status: m.status, attempts: m.attempts, currentRound: m.currentRound })),
    };
  },
  getVerifier: (address) => client.getVerifier(address),
};

async function main() {
  const db = getDb();
  await db
    .insert(s.escrowConfigs)
    .values({
      network,
      escrowContract: c.escrow,
      registryContract: c.registry,
      verificationContract: c.verification,
      defaultToken: c.token,
      params: deployment.params as object,
      startLedger: deployment.startLedger,
    })
    .onConflictDoNothing();

  const indexer = new Indexer(db, source, chain, {
    stateKey: `${network}:${c.escrow}`,
    startLedger: deployment.startLedger,
    log,
  });
  const pollMs = Number(process.env.INDEXER_POLL_MS ?? 2000);
  const reconcileEvery = Number(process.env.INDEXER_RECONCILE_EVERY ?? 15);
  const once = process.argv.includes("--once");
  log(`starting on ${network} (escrow ${c.escrow}), poll ${pollMs}ms`);

  let stop = false;
  process.on("SIGINT", () => (stop = true));
  process.on("SIGTERM", () => (stop = true));
  let cycle = 0;
  let backoff = pollMs;
  while (!stop) {
    try {
      const r = await indexer.cycle({ fullReconcile: cycle % reconcileEvery === 0 });
      if (r.applied || r.reconciled || r.txUpdated) log("cycle", r);
      backoff = pollMs;
      cycle++;
      if (once && r.fetched === 0) break;
    } catch (e) {
      backoff = Math.min(backoff * 2, 60_000);
      log(`cycle failed, retrying in ${backoff}ms`, e instanceof Error ? e.message : e);
    }
    if (!once) await new Promise((r) => setTimeout(r, backoff));
  }
  await closeDb();
}

main().catch(async (e) => {
  console.error(e);
  await closeDb();
  process.exit(1);
});
