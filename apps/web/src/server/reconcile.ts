import "server-only";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import * as s from "@/db/schema";
import { audit } from "./audit";
import { chain } from "./chain";

/**
 * Re-read a project's state from the escrow contract and overwrite the mirrored
 * columns. Used by the "Reconcile with chain" action; the indexer does the same
 * periodically. Returns the list of fields that had drifted.
 */
export async function reconcileProject(chainId: number, actor: string | null): Promise<string[]> {
  const db = getDb();
  const [row] = await db.select().from(s.projects).where(eq(s.projects.chainId, chainId)).limit(1);
  if (!row) return [];
  const c = chain();
  const [p, ms] = await Promise.all([c.getProject(chainId), c.getMilestones(chainId)]);
  const want = {
    status: p.status,
    funded: p.funded.toString(),
    released: p.released.toString(),
    refundPool: p.refundPool.toString(),
    currentMilestone: p.currentMilestone,
    maxAttempts: p.maxAttempts,
  };
  const drift = Object.entries(want)
    .filter(([k, v]) => String(row[k as keyof typeof row]) !== String(v))
    .map(([k]) => k);
  await db.update(s.projects).set({ ...want, lastReconciledAt: new Date(), updatedAt: new Date() }).where(eq(s.projects.id, row.id));
  const rows = await db.select().from(s.milestones).where(eq(s.milestones.projectId, row.id));
  for (const m of rows) {
    const cm = ms[m.index];
    if (!cm) continue;
    if (m.status !== cm.status || m.attempts !== cm.attempts || (m.currentRoundId ?? null) !== cm.currentRound) {
      drift.push(`milestone[${m.index}]`);
    }
    await db
      .update(s.milestones)
      .set({ status: cm.status, attempts: cm.attempts, currentRoundId: cm.currentRound, evidenceHash: cm.evidenceHash, updatedAt: new Date() })
      .where(eq(s.milestones.id, m.id));
  }
  await audit(actor, drift.length ? "reconcile_drift" : "reconcile_ok", "project", chainId, { fields: drift });
  return drift;
}
