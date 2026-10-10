import { beforeEach, describe, expect, it, vi } from "vitest";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { join } from "node:path";
import * as schema from "@veridia/web/db/schema";
import type { Db } from "@veridia/web/db";
import type { ChainEvent } from "@veridia/web/server/projections";
import { Indexer, withRetry, type ChainReader, type EventPage, type EventSource } from "../src/indexer";

let db: Db;
const META = "cd".repeat(32);

function created(id = "e1"): ChainEvent {
  return {
    id, ledger: 10, ledgerClosedAt: new Date().toISOString(), txHash: "txCreate", contractId: "C", contract: "escrow",
    name: "project_created", topics: ["1", "GCREATOR"],
    data: { token: "CT", budget: "100", funding_deadline: "999", metadata_hash: META, milestones: [{ amount: "100", deadline: "2000" }] },
  };
}
function deposit(id: string, amount: string, funded: string): ChainEvent {
  return {
    id, ledger: 11, ledgerClosedAt: new Date().toISOString(), txHash: "tx" + id, contractId: "C", contract: "escrow",
    name: "deposited", topics: ["1", "GFUNDER"], data: { amount, funded },
  };
}

class FakeSource implements EventSource {
  pages: EventPage[] = [];
  calls: unknown[] = [];
  failNext = 0;
  async fetch(from: unknown) {
    this.calls.push(from);
    if (this.failNext > 0) {
      this.failNext--;
      throw new Error("rpc unavailable");
    }
    return this.pages.shift() ?? { events: [], cursor: "c-end", latestLedger: 20, oldestLedger: 1 };
  }
}

const chain: ChainReader = { getTransaction: async () => ({ status: "NOT_FOUND" }) };

beforeEach(async () => {
  const d = drizzle(new PGlite(), { schema });
  await migrate(d, { migrationsFolder: join(__dirname, "..", "..", "..", "apps", "web", "drizzle") });
  db = d as unknown as Db;
});

const opts = { stateKey: "test", startLedger: 5, retryBaseMs: 1, maxRetries: 2 };

describe("Indexer.ingest", () => {
  it("starts from the deployment ledger, then follows the cursor", async () => {
    const src = new FakeSource();
    src.pages.push({ events: [created()], cursor: "c1", latestLedger: 10, oldestLedger: 1 });
    const ix = new Indexer(db, src, chain, opts);
    const r1 = await ix.ingest();
    expect(r1.applied).toBe(1);
    expect(src.calls[0]).toEqual({ startLedger: 5 });
    await ix.ingest();
    expect(src.calls[1]).toEqual({ cursor: "c1" });
    expect(await ix.getCursor()).toBe("c-end");
  });

  it("skips duplicate events across overlapping pages", async () => {
    const src = new FakeSource();
    const d1 = deposit("e2", "40", "40");
    src.pages.push({ events: [created(), d1], cursor: "c1", latestLedger: 11, oldestLedger: 1 });
    src.pages.push({ events: [d1, deposit("e3", "60", "100")], cursor: "c2", latestLedger: 12, oldestLedger: 1 });
    const ix = new Indexer(db, src, chain, opts);
    await ix.ingest();
    const r = await ix.ingest();
    expect(r).toMatchObject({ applied: 1, duplicates: 1 });
    const [c] = await db.select().from(schema.contributions);
    expect(c!.amount).toBe("100");
  });

  it("retries transient RPC failures", async () => {
    const src = new FakeSource();
    src.failNext = 2;
    src.pages.push({ events: [created()], cursor: "c1", latestLedger: 10, oldestLedger: 1 });
    const ix = new Indexer(db, src, chain, opts);
    expect((await ix.ingest()).applied).toBe(1);
    expect(src.calls).toHaveLength(3);
  });

  it("does not advance the cursor when a cycle fails, and recovers on retry", async () => {
    const src = new FakeSource();
    const ix = new Indexer(db, src, chain, opts);
    src.pages.push({ events: [created()], cursor: "c1", latestLedger: 10, oldestLedger: 1 });
    await ix.ingest();
    // A page whose second event cannot be projected (missing data) → whole cycle fails.
    const bad: ChainEvent = { ...deposit("e5", "1", "1"), name: "round_opened", topics: ["9", "1"], data: {} };
    src.pages.push({ events: [deposit("e4", "10", "10"), bad], cursor: "c2", latestLedger: 12, oldestLedger: 1 });
    await expect(ix.ingest()).rejects.toThrow();
    expect(await ix.getCursor()).toBe("c1");
    // Re-delivery of the same range (fixed upstream) → e4 is not applied twice.
    src.pages.push({ events: [deposit("e4", "10", "10"), deposit("e6", "5", "15")], cursor: "c2", latestLedger: 12, oldestLedger: 1 });
    const r = await ix.ingest();
    expect(r).toMatchObject({ applied: 1, duplicates: 1 });
    const [c] = await db.select().from(schema.contributions);
    expect(c!.amount).toBe("15");
    expect(await ix.getCursor()).toBe("c2");
  });
});

describe("Indexer.reconcileTransactions", () => {
  it("resolves pending transactions: success, failed, expired, still pending", async () => {
    const now = Date.now();
    const rows = [
      { hash: "a", submittedAt: new Date(now) },
      { hash: "b", submittedAt: new Date(now) },
      { hash: "c", submittedAt: new Date(now - 10 * 60_000) },
      { hash: "d", submittedAt: new Date(now) },
    ];
    for (const r of rows) {
      await db.insert(schema.transactions).values({ ...r, kind: "deposit", contract: "escrow", method: "deposit", sourceAddress: "G" });
    }
    const reader: ChainReader = {
      getTransaction: vi.fn(async (h: string) =>
        h === "a" ? { status: "SUCCESS" as const, ledger: 7 } : h === "b" ? { status: "FAILED" as const, ledger: 8, error: "boom" } : { status: "NOT_FOUND" as const },
      ),
    };
    const ix = new Indexer(db, new FakeSource(), reader, opts);
    expect(await ix.reconcileTransactions()).toBe(3);
    const got = Object.fromEntries((await db.select().from(schema.transactions)).map((t) => [t.hash, t.status]));
    expect(got).toEqual({ a: "success", b: "failed", c: "expired", d: "pending" });
  });
});

describe("Indexer.reconcileProjects", () => {
  it("corrects drift from contract state and records an audit event", async () => {
    const src = new FakeSource();
    src.pages.push({ events: [created()], cursor: "c1", latestLedger: 10, oldestLedger: 1 });
    const reader: ChainReader = {
      ...chain,
      getProject: async () => ({
        status: 1, funded: 100n, released: 0n, refundPool: 0n, currentMilestone: 0, maxAttempts: 3,
        milestones: [{ status: 1, attempts: 1, currentRound: 4 }],
      }),
    };
    const ix = new Indexer(db, src, reader, opts);
    await ix.ingest();
    expect(await ix.reconcileProjects([1])).toBe(1);
    const [p] = await db.select().from(schema.projects);
    expect(p).toMatchObject({ status: 1, funded: "100", maxAttempts: 3 });
    const [m] = await db.select().from(schema.milestones);
    expect(m).toMatchObject({ status: 1, currentRoundId: 4 });
    const audits = await db.select().from(schema.auditEvents);
    expect(audits[0]).toMatchObject({ action: "reconcile_drift", entityId: "1" });
    // Second pass: no drift.
    expect(await ix.reconcileProjects([1])).toBe(0);
  });
});

describe("withRetry", () => {
  it("gives up after the configured retries", async () => {
    const fn = vi.fn(async () => {
      throw new Error("x");
    });
    await expect(withRetry(fn, 2, 1)).rejects.toThrow("x");
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
