import "server-only";
import { and, desc, eq, inArray, isNotNull, or, sql } from "drizzle-orm";
import { getDb } from "@/db";
import * as s from "@/db/schema";

export type ProjectRow = typeof s.projects.$inferSelect;
export type MilestoneRow = typeof s.milestones.$inferSelect;
export type RoundRow = typeof s.verificationRounds.$inferSelect;

export async function listProjects(opts: { viewer?: string | null; filter?: "all" | "funding" | "active" | "mine" | "closed" } = {}) {
  const db = getDb();
  const f = opts.filter ?? "all";
  const visible = opts.viewer
    ? or(isNotNull(s.projects.chainId), eq(s.projects.creatorAddress, opts.viewer))
    : isNotNull(s.projects.chainId);
  const conds = [visible];
  if (f === "funding") conds.push(eq(s.projects.status, 0));
  if (f === "active") conds.push(eq(s.projects.status, 1));
  if (f === "closed") conds.push(inArray(s.projects.status, [2, 3, 4]));
  if (f === "mine" && opts.viewer) conds.push(eq(s.projects.creatorAddress, opts.viewer));
  return db.select().from(s.projects).where(and(...conds)).orderBy(desc(s.projects.createdAt)).limit(100);
}

export async function getProject(id: number) {
  const db = getDb();
  const [project] = await db.select().from(s.projects).where(eq(s.projects.id, id)).limit(1);
  if (!project) return null;
  const milestones = await db.select().from(s.milestones).where(eq(s.milestones.projectId, id)).orderBy(s.milestones.index);
  const contributions = await db
    .select()
    .from(s.contributions)
    .where(eq(s.contributions.projectId, id))
    .orderBy(desc(s.contributions.amount));
  const rounds = project.chainId
    ? await db
        .select()
        .from(s.verificationRounds)
        .where(eq(s.verificationRounds.projectChainId, project.chainId))
        .orderBy(desc(s.verificationRounds.id))
    : [];
  const outcomes = project.chainId
    ? await db.select().from(s.finalOutcomes).where(eq(s.finalOutcomes.projectChainId, project.chainId))
    : [];
  const appeals = project.chainId
    ? await db.select().from(s.appeals).where(eq(s.appeals.projectChainId, project.chainId))
    : [];
  return { project, milestones, contributions, rounds, outcomes, appeals };
}

export async function getProjectByChainId(chainId: number) {
  const [p] = await getDb().select().from(s.projects).where(eq(s.projects.chainId, chainId)).limit(1);
  return p ?? null;
}

/** Evidence ACL: creator, funders, and verifiers assigned to any round of the milestone. */
export async function canViewEvidence(address: string, project: ProjectRow, milestoneIndex: number): Promise<boolean> {
  if (address === project.creatorAddress) return true;
  const db = getDb();
  const [funder] = await db
    .select()
    .from(s.contributions)
    .where(and(eq(s.contributions.projectId, project.id), eq(s.contributions.funderAddress, address)))
    .limit(1);
  if (funder && BigInt(funder.amount) > 0n) return true;
  if (!project.chainId) return false;
  const [assigned] = await db
    .select({ r: s.panelAssignments.roundId })
    .from(s.panelAssignments)
    .innerJoin(s.verificationRounds, eq(s.verificationRounds.id, s.panelAssignments.roundId))
    .where(
      and(
        eq(s.panelAssignments.verifierAddress, address),
        eq(s.verificationRounds.projectChainId, project.chainId),
        eq(s.verificationRounds.milestoneIndex, milestoneIndex),
      ),
    )
    .limit(1);
  return Boolean(assigned);
}

export async function evidenceVersions(projectId: number, milestoneIndex: number) {
  const db = getDb();
  const [ev] = await db
    .select()
    .from(s.evidence)
    .where(and(eq(s.evidence.projectId, projectId), eq(s.evidence.milestoneIndex, milestoneIndex)))
    .limit(1);
  if (!ev) return [];
  return db.select().from(s.evidenceVersions).where(eq(s.evidenceVersions.evidenceId, ev.id)).orderBy(desc(s.evidenceVersions.version));
}

export async function getRoundDetail(roundId: number) {
  const db = getDb();
  const [round] = await db.select().from(s.verificationRounds).where(eq(s.verificationRounds.id, roundId)).limit(1);
  if (!round) return null;
  const panel = await db.select().from(s.panelAssignments).where(eq(s.panelAssignments.roundId, roundId)).orderBy(s.panelAssignments.position);
  const votes = await db.select().from(s.voteCommitments).where(eq(s.voteCommitments.roundId, roundId));
  const project = await getProjectByChainId(round.projectChainId);
  const milestone = project
    ? (
        await db
          .select()
          .from(s.milestones)
          .where(and(eq(s.milestones.projectId, project.id), eq(s.milestones.index, round.milestoneIndex)))
          .limit(1)
      )[0] ?? null
    : null;
  const [appeal] = await db
    .select()
    .from(s.appeals)
    .where(or(eq(s.appeals.roundId, roundId), eq(s.appeals.appealRoundId, roundId)))
    .limit(1);
  return { round, panel, votes, project, milestone, appeal: appeal ?? null };
}

export async function assignmentsFor(address: string) {
  const db = getDb();
  const rows = await db
    .select({ round: s.verificationRounds, assignment: s.panelAssignments })
    .from(s.panelAssignments)
    .innerJoin(s.verificationRounds, eq(s.verificationRounds.id, s.panelAssignments.roundId))
    .where(eq(s.panelAssignments.verifierAddress, address))
    .orderBy(desc(s.verificationRounds.id))
    .limit(100);
  const votes = await db.select().from(s.voteCommitments).where(eq(s.voteCommitments.verifierAddress, address));
  const voteByRound = new Map(votes.map((v) => [v.roundId, v]));
  const chainIds = [...new Set(rows.map((r) => r.round.projectChainId))];
  const projects = chainIds.length
    ? await db.select().from(s.projects).where(inArray(s.projects.chainId, chainIds))
    : [];
  const byChain = new Map(projects.map((p) => [p.chainId!, p]));
  return rows.map((r) => ({ ...r, vote: voteByRound.get(r.round.id) ?? null, project: byChain.get(r.round.projectChainId) ?? null }));
}

export async function listAppeals() {
  const db = getDb();
  const rows = await db.select().from(s.appeals).orderBy(desc(s.appeals.createdAt)).limit(100);
  const roundIds = rows.flatMap((a) => [a.roundId, a.appealRoundId]);
  const rounds = roundIds.length ? await db.select().from(s.verificationRounds).where(inArray(s.verificationRounds.id, roundIds)) : [];
  const byId = new Map(rounds.map((r) => [r.id, r]));
  const chainIds = [...new Set(rows.map((a) => a.projectChainId))];
  const projects = chainIds.length ? await db.select().from(s.projects).where(inArray(s.projects.chainId, chainIds)) : [];
  const pById = new Map(projects.map((p) => [p.chainId!, p]));
  return rows.map((a) => ({ appeal: a, original: byId.get(a.roundId) ?? null, appealRound: byId.get(a.appealRoundId) ?? null, project: pById.get(a.projectChainId) ?? null }));
}

/** Decisive original rounds still inside their appeal window (appealable now). */
export async function appealableRounds(nowSecs: number) {
  const db = getDb();
  const rows = await db
    .select()
    .from(s.verificationRounds)
    .where(
      and(
        eq(s.verificationRounds.kind, 0),
        eq(s.verificationRounds.finalized, true),
        inArray(s.verificationRounds.outcome, [1, 2]),
        sql`${s.verificationRounds.appealRoundId} is null`,
        sql`${s.verificationRounds.appealableUntil} >= ${nowSecs}`,
      ),
    )
    .orderBy(desc(s.verificationRounds.id));
  const chainIds = [...new Set(rows.map((r) => r.projectChainId))];
  const projects = chainIds.length ? await db.select().from(s.projects).where(inArray(s.projects.chainId, chainIds)) : [];
  const pById = new Map(projects.map((p) => [p.chainId!, p]));
  return rows.map((r) => ({ round: r, project: pById.get(r.projectChainId) ?? null }));
}

export async function listActivity(opts: { address?: string | null; limit?: number } = {}) {
  const db = getDb();
  const limit = opts.limit ?? 100;
  const events = await db
    .select()
    .from(s.contractEvents)
    .where(
      opts.address
        ? or(
            sql`${s.contractEvents.topics} @> ${JSON.stringify([opts.address])}::jsonb`,
            sql`${s.contractEvents.data}->>'appellant' = ${opts.address}`,
            sql`${s.contractEvents.data}->>'recipient' = ${opts.address}`,
            sql`${s.contractEvents.data}->'panel' @> ${JSON.stringify([opts.address])}::jsonb`,
          )
        : undefined,
    )
    .orderBy(desc(s.contractEvents.ledger), desc(s.contractEvents.id))
    .limit(limit);
  const txs = await db
    .select()
    .from(s.transactions)
    .where(opts.address ? eq(s.transactions.sourceAddress, opts.address) : undefined)
    .orderBy(desc(s.transactions.submittedAt))
    .limit(limit);
  const audits = await db
    .select()
    .from(s.auditEvents)
    .where(opts.address ? eq(s.auditEvents.actorAddress, opts.address) : undefined)
    .orderBy(desc(s.auditEvents.createdAt))
    .limit(limit);
  return { events, txs, audits };
}

export async function getVerifierProfile(address: string) {
  const db = getDb();
  const [profile] = await db.select().from(s.verifierProfiles).where(eq(s.verifierProfiles.address, address)).limit(1);
  const stakes = await db
    .select()
    .from(s.stakeRecords)
    .where(eq(s.stakeRecords.address, address))
    .orderBy(desc(s.stakeRecords.ledger))
    .limit(50);
  const assignments = await assignmentsFor(address);
  return { profile: profile ?? null, stakes, assignments };
}

export async function dashboardFor(address: string) {
  const db = getDb();
  const created = await db.select().from(s.projects).where(eq(s.projects.creatorAddress, address)).orderBy(desc(s.projects.createdAt));
  const funded = await db
    .select({ project: s.projects, contribution: s.contributions })
    .from(s.contributions)
    .innerJoin(s.projects, eq(s.projects.id, s.contributions.projectId))
    .where(eq(s.contributions.funderAddress, address));
  const assignments = await assignmentsFor(address);
  const pendingTxs = await db
    .select()
    .from(s.transactions)
    .where(and(eq(s.transactions.sourceAddress, address), eq(s.transactions.status, "pending")));
  const createdIds = created.map((p) => p.id);
  const myMilestones = createdIds.length
    ? await db.select().from(s.milestones).where(inArray(s.milestones.projectId, createdIds))
    : [];
  return { created, funded, assignments, pendingTxs, myMilestones };
}
