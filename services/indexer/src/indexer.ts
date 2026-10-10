/**
 * Veridia indexer: ingests contract events idempotently, reconciles projections with
 * contract state, and resolves pending transactions.
 */
import { and, eq, inArray, lt, sql } from "drizzle-orm";
import type { Db } from "@veridia/web/db";
import * as s from "@veridia/web/db/schema";
import { applyEvent, type ChainEvent } from "@veridia/web/server/projections";

export interface EventPage {
  events: ChainEvent[];
  cursor: string;
  latestLedger: number;
  oldestLedger: number;
}

export interface EventSource {
  fetch(from: { cursor: string } | { startLedger: number }): Promise<EventPage>;
}

export type TxStatus =
  | { status: "SUCCESS"; ledger: number }
  | { status: "FAILED"; ledger: number; error: string }
  | { status: "NOT_FOUND" };

/** Contract state reader used for reconciliation (absolute values). */
export interface ChainReader {
  getTransaction(hash: string): Promise<TxStatus>;
  getProject?(chainId: number): Promise<{
    status: number;
    funded: bigint;
    released: bigint;
    refundPool: bigint;
    currentMilestone: number;
    maxAttempts: number;
    milestones: { status: number; attempts: number; currentRound: number | null }[];
  }>;
  getVerifier?(address: string): Promise<{
    active: boolean;
    stake: bigint;
    locked: bigint;
    unbonding: bigint;
    unbondAt: number;
    roundsAssigned: number;
    roundsRevealed: number;
    noShows: number;
    totalSlashed: bigint;
  } | null>;
}

export interface IndexerOptions {
  /** Distinguishes cursors when one DB indexes several deployments. */
  stateKey: string;
  startLedger: number;
  maxRetries?: number;
  retryBaseMs?: number;
  /** Pending transactions older than this become `expired` if never found. */
  txExpiryMs?: number;
  log?: (msg: string, extra?: unknown) => void;
}

export interface CycleResult {
  fetched: number;
  applied: number;
  duplicates: number;
  reconciled: number;
  txUpdated: number;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function withRetry<T>(fn: () => Promise<T>, retries: number, baseMs: number, onRetry?: (e: unknown, attempt: number) => void): Promise<T> {
  let attempt = 0;
  for (;;) {
    try {
      return await fn();
    } catch (e) {
      if (attempt >= retries) throw e;
      onRetry?.(e, attempt + 1);
      await sleep(baseMs * 2 ** attempt);
      attempt++;
    }
  }
}

export class Indexer {
  private readonly retries: number;
  private readonly retryBaseMs: number;
  private readonly log: NonNullable<IndexerOptions["log"]>;

  constructor(
    private readonly db: Db,
    private readonly source: EventSource,
    private readonly chain: ChainReader,
    private readonly opts: IndexerOptions,
  ) {
    this.retries = opts.maxRetries ?? 3;
    this.retryBaseMs = opts.retryBaseMs ?? 500;
    this.log = opts.log ?? (() => {});
  }

  private cursorKey() {
    return `cursor:${this.opts.stateKey}`;
  }

  async getCursor(): Promise<string | null> {
    const [row] = await this.db.select().from(s.indexerState).where(eq(s.indexerState.key, this.cursorKey())).limit(1);
    return row?.value ?? null;
  }

  private async setCursor(value: string) {
    await this.db
      .insert(s.indexerState)
      .values({ key: this.cursorKey(), value })
      .onConflictDoUpdate({ target: s.indexerState.key, set: { value, updatedAt: new Date() } });
  }

  /** One ingestion cycle. The cursor advances only after every event is committed. */
  async ingest(): Promise<Omit<CycleResult, "txUpdated" | "reconciled"> & { touched: { projects: Set<number>; verifiers: Set<string> } }> {
    const cursor = await this.getCursor();
    const from = cursor ? { cursor } : { startLedger: this.opts.startLedger };
    const page = await withRetry(() => this.source.fetch(from), this.retries, this.retryBaseMs, (e, a) =>
      this.log(`getEvents failed (attempt ${a})`, String(e)),
    );
    let applied = 0;
    let duplicates = 0;
    const touched = { projects: new Set<number>(), verifiers: new Set<string>() };
    for (const ev of page.events) {
      const res = await withRetry(() => applyEvent(this.db, ev), this.retries, this.retryBaseMs, (e, a) =>
        this.log(`projection of ${ev.name} ${ev.id} failed (attempt ${a})`, String(e)),
      );
      if (res.applied) applied++;
      else duplicates++;
      res.touched.projects.forEach((p) => touched.projects.add(p));
      res.touched.verifiers.forEach((v) => touched.verifiers.add(v));
    }
    if (page.cursor) await this.setCursor(page.cursor);
    return { fetched: page.events.length, applied, duplicates, touched };
  }

  /** Resolve `pending` transaction records against the network. */
  async reconcileTransactions(): Promise<number> {
    const pending = await this.db.select().from(s.transactions).where(eq(s.transactions.status, "pending")).limit(100);
    let updated = 0;
    const expiry = this.opts.txExpiryMs ?? 5 * 60_000;
    for (const t of pending) {
      let res: TxStatus;
      try {
        res = await this.chain.getTransaction(t.hash);
      } catch (e) {
        this.log(`getTransaction ${t.hash} failed`, String(e));
        continue;
      }
      const base = { checkAttempts: t.checkAttempts + 1, lastCheckedAt: new Date() };
      if (res.status === "SUCCESS") {
        await this.db.update(s.transactions).set({ ...base, status: "success", ledger: res.ledger, confirmedAt: new Date() }).where(eq(s.transactions.hash, t.hash));
        updated++;
      } else if (res.status === "FAILED") {
        await this.db.update(s.transactions).set({ ...base, status: "failed", ledger: res.ledger, error: res.error }).where(eq(s.transactions.hash, t.hash));
        updated++;
      } else if (Date.now() - t.submittedAt.getTime() > expiry) {
        await this.db.update(s.transactions).set({ ...base, status: "expired", error: "Not found on the network before expiry" }).where(eq(s.transactions.hash, t.hash));
        updated++;
      } else {
        await this.db.update(s.transactions).set(base).where(eq(s.transactions.hash, t.hash));
      }
    }
    return updated;
  }

  /** Re-read contract state for the given projects and correct any drift. */
  async reconcileProjects(chainIds: Iterable<number>): Promise<number> {
    if (!this.chain.getProject) return 0;
    let fixed = 0;
    for (const chainId of chainIds) {
      const [row] = await this.db.select().from(s.projects).where(eq(s.projects.chainId, chainId)).limit(1);
      if (!row) continue;
      let onchain;
      try {
        onchain = await this.chain.getProject(chainId);
      } catch (e) {
        this.log(`reconcile project ${chainId} failed`, String(e));
        continue;
      }
      const want = {
        status: onchain.status,
        funded: onchain.funded.toString(),
        released: onchain.released.toString(),
        refundPool: onchain.refundPool.toString(),
        currentMilestone: onchain.currentMilestone,
        maxAttempts: onchain.maxAttempts,
      };
      const drift = Object.entries(want).filter(([k, v]) => String(row[k as keyof typeof row]) !== String(v));
      await this.db.update(s.projects).set({ ...want, lastReconciledAt: new Date() }).where(eq(s.projects.id, row.id));
      const ms = await this.db.select().from(s.milestones).where(eq(s.milestones.projectId, row.id));
      for (const m of ms) {
        const c = onchain.milestones[m.index];
        if (!c) continue;
        if (m.status !== c.status || m.attempts !== c.attempts || (m.currentRoundId ?? null) !== c.currentRound) {
          drift.push([`milestone[${m.index}]`, c]);
          await this.db
            .update(s.milestones)
            .set({ status: c.status, attempts: c.attempts, currentRoundId: c.currentRound, updatedAt: new Date() })
            .where(eq(s.milestones.id, m.id));
        }
      }
      if (drift.length > 0) {
        fixed++;
        await this.db.insert(s.auditEvents).values({
          action: "reconcile_drift",
          entityType: "project",
          entityId: String(chainId),
          details: { fields: drift.map(([k]) => k) },
        });
      }
    }
    return fixed;
  }

  async reconcileVerifiers(addresses: Iterable<string>): Promise<number> {
    if (!this.chain.getVerifier) return 0;
    let n = 0;
    for (const address of addresses) {
      let v;
      try {
        v = await this.chain.getVerifier(address);
      } catch (e) {
        this.log(`reconcile verifier ${address} failed`, String(e));
        continue;
      }
      if (!v) continue;
      await this.db
        .update(s.verifierProfiles)
        .set({
          registered: true,
          active: v.active,
          stake: v.stake.toString(),
          locked: v.locked.toString(),
          unbonding: v.unbonding.toString(),
          unbondAt: v.unbondAt || null,
          roundsAssigned: v.roundsAssigned,
          roundsRevealed: v.roundsRevealed,
          noShows: v.noShows,
          totalSlashed: v.totalSlashed.toString(),
          updatedAt: new Date(),
        })
        .where(eq(s.verifierProfiles.address, address));
      n++;
    }
    return n;
  }

  /** Projects that are not terminal (Funding / Active) or still pending creation. */
  async openProjectIds(): Promise<number[]> {
    const rows = await this.db
      .select({ chainId: s.projects.chainId })
      .from(s.projects)
      .where(and(inArray(s.projects.status, [0, 1]), sql`${s.projects.chainId} is not null`));
    return rows.map((r) => r.chainId!);
  }

  /** Delete stale, never-used auth nonces. */
  async housekeeping() {
    await this.db.delete(s.authNonces).where(lt(s.authNonces.expiresAt, new Date(Date.now() - 3600_000)));
  }

  async cycle(opts: { fullReconcile?: boolean } = {}): Promise<CycleResult> {
    const ing = await this.ingest();
    let reconciled = await this.reconcileProjects(ing.touched.projects);
    reconciled += await this.reconcileVerifiers(ing.touched.verifiers);
    if (opts.fullReconcile) {
      reconciled += await this.reconcileProjects(await this.openProjectIds());
      await this.housekeeping();
    }
    const txUpdated = await this.reconcileTransactions();
    return { fetched: ing.fetched, applied: ing.applied, duplicates: ing.duplicates, reconciled, txUpdated };
  }
}
