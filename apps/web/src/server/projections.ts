/**
 * Event → database projections, used by the indexer.
 *
 * Idempotency: every event is first inserted into `contract_events` keyed by its RPC
 * event id. If the row already exists the event is skipped, so re-delivery (retries,
 * overlapping pages, restarts) never double-applies increments. The insert and the
 * projection run in the same DB transaction, so a failed projection leaves no trace and
 * is retried as a whole.
 */
import { and, eq, isNull, sql } from "drizzle-orm";
import type { Db } from "../db";
import * as s from "../db/schema";

/** Shape produced by @veridia/stellar-client `decodeEvent` (JSON-safe). */
export interface ChainEvent {
  id: string;
  ledger: number;
  ledgerClosedAt: string;
  txHash: string;
  contractId: string;
  contract: string;
  name: string;
  topics: unknown[];
  data: Record<string, unknown>;
}

export interface ApplyResult {
  applied: boolean;
  /** Entities whose on-chain state should be re-read for reconciliation. */
  touched: { projects: number[]; verifiers: string[]; rounds: number[] };
}

const n = (v: unknown) => Number(v);
const str = (v: unknown) => String(v);
const amt = (v: unknown) => BigInt(v as string | number | bigint).toString();
const toSecs = (iso: string) => Math.floor(Date.parse(iso) / 1000);

type Tx = Parameters<Parameters<Db["transaction"]>[0]>[0];

async function projectByChainId(tx: Tx, chainId: number) {
  const [p] = await tx.select().from(s.projects).where(eq(s.projects.chainId, chainId)).limit(1);
  return p ?? null;
}

async function stakeRecord(tx: Tx, ev: ChainEvent, address: string, kind: string, amount: string, roundId?: number) {
  await tx
    .insert(s.stakeRecords)
    .values({ eventId: `${ev.id}:${kind}`, address, kind, amount, roundId, txHash: ev.txHash, ledger: ev.ledger })
    .onConflictDoNothing();
}

async function ensureVerifier(tx: Tx, address: string) {
  await tx.insert(s.verifierProfiles).values({ address }).onConflictDoNothing();
}

/** Recompute round tallies from vote rows (safe under any ordering). */
async function recountRound(tx: Tx, roundId: number) {
  const rows = await tx.select().from(s.voteCommitments).where(eq(s.voteCommitments.roundId, roundId));
  await tx
    .update(s.verificationRounds)
    .set({
      commits: rows.length,
      reveals: rows.filter((r) => r.revealed).length,
      approvals: rows.filter((r) => r.revealed && r.vote === 1).length,
      rejections: rows.filter((r) => r.revealed && r.vote === 2).length,
      updatedAt: new Date(),
    })
    .where(eq(s.verificationRounds.id, roundId));
}

export async function applyEvent(db: Db, ev: ChainEvent): Promise<ApplyResult> {
  const touched: ApplyResult["touched"] = { projects: [], verifiers: [], rounds: [] };
  const applied = await db.transaction(async (tx) => {
    const inserted = await tx
      .insert(s.contractEvents)
      .values({
        id: ev.id,
        ledger: ev.ledger,
        ledgerClosedAt: new Date(ev.ledgerClosedAt),
        txHash: ev.txHash,
        contract: ev.contract,
        contractId: ev.contractId,
        name: ev.name,
        topics: ev.topics,
        data: ev.data,
      })
      .onConflictDoNothing()
      .returning({ id: s.contractEvents.id });
    if (inserted.length === 0) return false; // duplicate delivery

    await project(tx, ev, touched);

    // Any event proves its transaction succeeded.
    await tx
      .update(s.transactions)
      .set({ status: "success", ledger: ev.ledger, confirmedAt: new Date() })
      .where(and(eq(s.transactions.hash, ev.txHash), eq(s.transactions.status, "pending")));
    await tx.update(s.contractEvents).set({ processedAt: new Date() }).where(eq(s.contractEvents.id, ev.id));
    return true;
  });
  return { applied, touched };
}

async function project(tx: Tx, ev: ChainEvent, touched: ApplyResult["touched"]) {
  const d = ev.data;
  const t = ev.topics;
  switch (ev.name) {
    // ------------------------------------------------------------ escrow
    case "project_created": {
      const chainId = n(t[0]);
      const creator = str(t[1]);
      const metadataHash = str(d.metadata_hash);
      const ms = (d.milestones as { amount: string; deadline: string }[]) ?? [];
      const [draft] = await tx
        .select()
        .from(s.projects)
        .where(and(eq(s.projects.metadataHash, metadataHash), eq(s.projects.creatorAddress, creator), isNull(s.projects.chainId)))
        .limit(1);
      const chainFields = {
        chainId,
        token: str(d.token),
        budget: amt(d.budget),
        fundingDeadline: n(d.funding_deadline),
        status: 0,
        syncStatus: "confirmed",
        createdTx: ev.txHash,
        updatedAt: new Date(),
      };
      let projectId: number;
      if (draft) {
        await tx.update(s.projects).set(chainFields).where(eq(s.projects.id, draft.id));
        projectId = draft.id;
      } else {
        const existing = await projectByChainId(tx, chainId);
        if (existing) {
          projectId = existing.id;
        } else {
          // Created outside this UI: metadata unknown, keep the on-chain commitment.
          const [row] = await tx
            .insert(s.projects)
            .values({
              ...chainFields,
              creatorAddress: creator,
              title: `Project #${chainId}`,
              summary: "Created directly on-chain; off-chain metadata not available.",
              metadata: {},
              metadataHash,
            })
            .returning({ id: s.projects.id });
          projectId = row!.id;
        }
      }
      const meta = (draft?.metadata ?? {}) as { milestones?: { title: string; description?: string }[] };
      for (const [i, m] of ms.entries()) {
        await tx
          .insert(s.milestones)
          .values({
            projectId,
            index: i,
            title: meta.milestones?.[i]?.title ?? `Milestone ${i + 1}`,
            description: meta.milestones?.[i]?.description ?? "",
            amount: amt(m.amount),
            deadline: n(m.deadline),
          })
          .onConflictDoUpdate({
            target: [s.milestones.projectId, s.milestones.index],
            set: { amount: amt(m.amount), deadline: n(m.deadline), updatedAt: new Date() },
          });
      }
      touched.projects.push(chainId);
      return;
    }
    case "deposited": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      await tx.update(s.projects).set({ funded: amt(d.funded), updatedAt: new Date() }).where(eq(s.projects.id, p.id));
      await tx
        .insert(s.contributions)
        .values({ projectId: p.id, funderAddress: str(t[1]), amount: amt(d.amount) })
        .onConflictDoUpdate({
          target: [s.contributions.projectId, s.contributions.funderAddress],
          set: { amount: sql`${s.contributions.amount} + ${amt(d.amount)}`, updatedAt: new Date() },
        });
      touched.projects.push(p.chainId!);
      return;
    }
    case "project_status_changed": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      await tx
        .update(s.projects)
        .set({ status: n(d.status), refundPool: amt(d.refund_pool ?? 0), updatedAt: new Date() })
        .where(eq(s.projects.id, p.id));
      touched.projects.push(p.chainId!);
      return;
    }
    case "milestone_submitted": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      const idx = n(t[1]);
      const roundId = n(d.round_id);
      await tx
        .update(s.milestones)
        .set({ status: 1, attempts: n(d.attempt), currentRoundId: roundId, evidenceHash: str(d.evidence_hash), updatedAt: new Date() })
        .where(and(eq(s.milestones.projectId, p.id), eq(s.milestones.index, idx)));
      const [ev0] = await tx
        .select()
        .from(s.evidence)
        .where(and(eq(s.evidence.projectId, p.id), eq(s.evidence.milestoneIndex, idx)))
        .limit(1);
      if (ev0) {
        await tx
          .update(s.evidenceVersions)
          .set({ submittedRoundId: roundId })
          .where(and(eq(s.evidenceVersions.evidenceId, ev0.id), eq(s.evidenceVersions.sha256, str(d.evidence_hash))));
      }
      touched.projects.push(p.chainId!);
      return;
    }
    case "milestone_paid": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      const idx = n(t[1]);
      await tx
        .update(s.milestones)
        .set({ status: 2, paidAt: toSecs(ev.ledgerClosedAt), paidTx: ev.txHash, updatedAt: new Date() })
        .where(and(eq(s.milestones.projectId, p.id), eq(s.milestones.index, idx)));
      await tx
        .update(s.projects)
        .set({ released: sql`${s.projects.released} + ${amt(d.amount)}`, currentMilestone: idx + 1, updatedAt: new Date() })
        .where(eq(s.projects.id, p.id));
      await tx
        .insert(s.finalOutcomes)
        .values({ roundId: n(d.round_id), projectChainId: p.chainId!, milestoneIndex: idx, outcome: 1, effect: "paid", amount: amt(d.amount), txHash: ev.txHash, ledger: ev.ledger })
        .onConflictDoNothing();
      touched.projects.push(p.chainId!);
      return;
    }
    case "milestone_reopened": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      const idx = n(t[1]);
      await tx
        .update(s.milestones)
        .set({ status: 0, currentRoundId: null, attempts: n(d.attempts), updatedAt: new Date() })
        .where(and(eq(s.milestones.projectId, p.id), eq(s.milestones.index, idx)));
      await tx
        .insert(s.finalOutcomes)
        .values({ roundId: n(d.round_id), projectChainId: p.chainId!, milestoneIndex: idx, outcome: n(d.outcome), effect: "reopened", txHash: ev.txHash, ledger: ev.ledger })
        .onConflictDoNothing();
      touched.projects.push(p.chainId!);
      return;
    }
    case "milestone_failed": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      const idx = n(t[1]);
      const [m] = await tx
        .select()
        .from(s.milestones)
        .where(and(eq(s.milestones.projectId, p.id), eq(s.milestones.index, idx)))
        .limit(1);
      await tx
        .update(s.milestones)
        .set({ status: 3, updatedAt: new Date() })
        .where(and(eq(s.milestones.projectId, p.id), eq(s.milestones.index, idx)));
      if (n(d.reason) === 1 && m?.currentRoundId) {
        const [r] = await tx.select().from(s.verificationRounds).where(eq(s.verificationRounds.id, m.currentRoundId)).limit(1);
        await tx
          .insert(s.finalOutcomes)
          .values({ roundId: m.currentRoundId, projectChainId: p.chainId!, milestoneIndex: idx, outcome: r?.outcome ?? 2, effect: "failed", txHash: ev.txHash, ledger: ev.ledger })
          .onConflictDoNothing();
      }
      touched.projects.push(p.chainId!);
      return;
    }
    case "refund_claimed": {
      const p = await projectByChainId(tx, n(t[0]));
      if (!p) return;
      await tx
        .update(s.contributions)
        .set({ refunded: true, refundAmount: amt(d.amount), updatedAt: new Date() })
        .where(and(eq(s.contributions.projectId, p.id), eq(s.contributions.funderAddress, str(t[1]))));
      touched.projects.push(p.chainId!);
      return;
    }

    // ------------------------------------------------------------ registry
    case "verifier_registered": {
      const a = str(t[0]);
      await tx
        .insert(s.verifierProfiles)
        .values({ address: a, registered: true, active: true, metadataHash: str(d.metadata_hash), registeredAt: toSecs(ev.ledgerClosedAt) })
        .onConflictDoUpdate({
          target: s.verifierProfiles.address,
          set: { registered: true, active: true, metadataHash: str(d.metadata_hash), registeredAt: toSecs(ev.ledgerClosedAt), updatedAt: new Date() },
        });
      touched.verifiers.push(a);
      return;
    }
    case "stake_deposited": {
      const a = str(t[0]);
      await ensureVerifier(tx, a);
      await tx.update(s.verifierProfiles).set({ stake: amt(d.stake), updatedAt: new Date() }).where(eq(s.verifierProfiles.address, a));
      await stakeRecord(tx, ev, a, "deposit", amt(d.amount));
      touched.verifiers.push(a);
      return;
    }
    case "unstake_requested": {
      const a = str(t[0]);
      await ensureVerifier(tx, a);
      await tx
        .update(s.verifierProfiles)
        .set({
          stake: sql`${s.verifierProfiles.stake} - ${amt(d.amount)}`,
          unbonding: sql`${s.verifierProfiles.unbonding} + ${amt(d.amount)}`,
          unbondAt: n(d.unbond_at),
          updatedAt: new Date(),
        })
        .where(eq(s.verifierProfiles.address, a));
      await stakeRecord(tx, ev, a, "unstake_request", amt(d.amount));
      touched.verifiers.push(a);
      return;
    }
    case "stake_withdrawn": {
      const a = str(t[0]);
      await ensureVerifier(tx, a);
      await tx.update(s.verifierProfiles).set({ unbonding: "0", unbondAt: null, updatedAt: new Date() }).where(eq(s.verifierProfiles.address, a));
      await stakeRecord(tx, ev, a, "withdraw", amt(d.amount));
      touched.verifiers.push(a);
      return;
    }
    case "verifier_status_changed": {
      const a = str(t[0]);
      await ensureVerifier(tx, a);
      await tx.update(s.verifierProfiles).set({ active: Boolean(d.active), updatedAt: new Date() }).where(eq(s.verifierProfiles.address, a));
      touched.verifiers.push(a);
      return;
    }
    case "stake_locked": {
      const a = str(t[0]);
      await ensureVerifier(tx, a);
      await tx
        .update(s.verifierProfiles)
        .set({
          locked: sql`${s.verifierProfiles.locked} + ${amt(d.amount)}`,
          roundsAssigned: sql`${s.verifierProfiles.roundsAssigned} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(s.verifierProfiles.address, a));
      await stakeRecord(tx, ev, a, "lock", amt(d.amount), n(t[1]));
      touched.verifiers.push(a);
      return;
    }
    case "stake_released": {
      const a = str(t[0]);
      const roundId = n(t[1]);
      const conduct = n(d.conduct);
      const slashed = amt(d.slashed);
      await ensureVerifier(tx, a);
      await tx
        .update(s.verifierProfiles)
        .set({
          locked: sql`${s.verifierProfiles.locked} - ${amt(d.amount)}`,
          stake: sql`${s.verifierProfiles.stake} - ${slashed}`,
          totalSlashed: sql`${s.verifierProfiles.totalSlashed} + ${slashed}`,
          roundsRevealed: conduct === 0 ? sql`${s.verifierProfiles.roundsRevealed} + 1` : s.verifierProfiles.roundsRevealed,
          noShows: conduct === 0 ? s.verifierProfiles.noShows : sql`${s.verifierProfiles.noShows} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(s.verifierProfiles.address, a));
      await tx
        .update(s.panelAssignments)
        .set({ conduct, slashed })
        .where(and(eq(s.panelAssignments.roundId, roundId), eq(s.panelAssignments.verifierAddress, a)));
      await stakeRecord(tx, ev, a, "release", amt(d.amount), roundId);
      if (slashed !== "0") await stakeRecord(tx, ev, a, "slash", slashed, roundId);
      touched.verifiers.push(a);
      return;
    }

    // ------------------------------------------------------------ verification
    case "round_opened": {
      const roundId = n(t[0]);
      const panel = (d.panel as string[]) ?? [];
      await tx
        .insert(s.verificationRounds)
        .values({
          id: roundId,
          projectChainId: n(t[1]),
          milestoneIndex: n(d.milestone),
          attempt: n(d.attempt),
          kind: n(d.kind),
          parentRoundId: d.parent_round_id == null ? null : n(d.parent_round_id),
          evidenceHash: str(d.evidence_hash),
          commitDeadline: n(d.commit_deadline),
          revealDeadline: n(d.reveal_deadline),
          openedTx: ev.txHash,
          openedLedger: ev.ledger,
        })
        .onConflictDoNothing();
      for (const [i, addr] of panel.entries()) {
        await ensureVerifier(tx, addr);
        await tx.insert(s.panelAssignments).values({ roundId, verifierAddress: addr, position: i }).onConflictDoNothing();
      }
      touched.rounds.push(roundId);
      return;
    }
    case "vote_committed": {
      const roundId = n(t[0]);
      await tx
        .insert(s.voteCommitments)
        .values({ roundId, verifierAddress: str(t[1]), commitment: str(d.commitment), committedTx: ev.txHash, committedLedger: ev.ledger })
        .onConflictDoNothing();
      await recountRound(tx, roundId);
      return;
    }
    case "vote_revealed": {
      const roundId = n(t[0]);
      await tx
        .update(s.voteCommitments)
        .set({ revealed: true, vote: n(d.vote), revealedTx: ev.txHash, revealedLedger: ev.ledger })
        .where(and(eq(s.voteCommitments.roundId, roundId), eq(s.voteCommitments.verifierAddress, str(t[1]))));
      await recountRound(tx, roundId);
      return;
    }
    case "round_finalized": {
      const roundId = n(t[0]);
      await tx
        .update(s.verificationRounds)
        .set({
          finalized: true,
          outcome: n(d.outcome),
          approvals: n(d.approvals),
          rejections: n(d.rejections),
          reveals: n(d.reveals),
          finalizedAt: toSecs(ev.ledgerClosedAt),
          appealableUntil: n(d.appealable_until) || null,
          updatedAt: new Date(),
        })
        .where(eq(s.verificationRounds.id, roundId));
      touched.rounds.push(roundId);
      touched.projects.push(n(t[1]));
      return;
    }
    case "appeal_filed": {
      const roundId = n(t[0]);
      const appealRoundId = n(t[1]);
      const [r] = await tx.select().from(s.verificationRounds).where(eq(s.verificationRounds.id, roundId)).limit(1);
      await tx.update(s.verificationRounds).set({ appealRoundId, updatedAt: new Date() }).where(eq(s.verificationRounds.id, roundId));
      await tx
        .insert(s.appeals)
        .values({
          roundId,
          appealRoundId,
          projectChainId: r?.projectChainId ?? 0,
          milestoneIndex: r?.milestoneIndex ?? 0,
          appellant: str(d.appellant),
          bond: amt(d.bond),
          filedTx: ev.txHash,
          filedLedger: ev.ledger,
        })
        .onConflictDoNothing();
      touched.rounds.push(roundId);
      return;
    }
    case "appeal_resolved": {
      await tx
        .update(s.appeals)
        .set({
          status: "resolved",
          appealOutcome: n(d.appeal_outcome),
          finalOutcome: n(d.final_outcome),
          overturned: Boolean(d.overturned),
          resolvedTx: ev.txHash,
          updatedAt: new Date(),
        })
        .where(eq(s.appeals.roundId, n(t[0])));
      touched.rounds.push(n(t[0]));
      return;
    }
    default:
      // token_allowed, *_params_updated, unknown: stored in contract_events only.
      return;
  }
}
