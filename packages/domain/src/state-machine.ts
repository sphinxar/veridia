/**
 * TypeScript mirror of docs/protocol-rules.md. Used by the UI to explain state and by
 * the indexer to derive projections. The contracts remain authoritative: these
 * functions never decide anything that is then trusted on-chain.
 */
import { MilestoneStatus, Outcome, Phase, ProjectStatus, RoundKind } from "./enums";

export const BPS = 10_000;

/** protocol-rules §5.3 */
export function tally(
  approvals: number,
  rejections: number,
  quorum: number,
  thresholdBps: number,
): Outcome {
  const n = approvals + rejections;
  if (n < quorum) return Outcome.NoQuorum;
  if (approvals * BPS >= thresholdBps * n) return Outcome.Approved;
  if (rejections * BPS >= thresholdBps * n) return Outcome.Rejected;
  return Outcome.Inconclusive;
}

export const isDecisive = (o: Outcome) => o === Outcome.Approved || o === Outcome.Rejected;

export interface RoundTiming {
  commitDeadline: number;
  revealDeadline: number;
  commits: number;
  reveals: number;
  finalized: boolean;
}

/** protocol-rules §5: phases are derived from time, never "advanced" by a transaction. */
export function phaseOf(r: RoundTiming, now: number): Phase {
  if (r.finalized) return Phase.Finalized;
  if (now <= r.commitDeadline) return Phase.Commit;
  if (now <= r.revealDeadline && r.reveals < r.commits) return Phase.Reveal;
  return Phase.Finalizable;
}

export interface RoundResult {
  kind: RoundKind;
  finalized: boolean;
  outcome: Outcome;
  finalizedAt: number;
  appealWindowSecs: number;
}

export interface DecisionView {
  isFinal: boolean;
  outcome: Outcome;
  underAppeal: boolean;
  appealableUntil: number;
}

/** protocol-rules §6: derive the decision of an original round (+ optional appeal). */
export function decisionOf(
  original: RoundResult,
  appeal: RoundResult | null,
  now: number,
): DecisionView {
  const d: DecisionView = {
    isFinal: false,
    outcome: Outcome.Pending,
    underAppeal: false,
    appealableUntil: 0,
  };
  if (!original.finalized) return d;
  d.outcome = original.outcome;
  if (!isDecisive(original.outcome)) {
    d.isFinal = true;
    return d;
  }
  d.appealableUntil = original.finalizedAt + original.appealWindowSecs;
  if (appeal) {
    if (appeal.finalized) {
      d.isFinal = true;
      if (isDecisive(appeal.outcome)) d.outcome = appeal.outcome;
    } else {
      d.underAppeal = true;
    }
  } else {
    d.isFinal = now > d.appealableUntil;
  }
  return d;
}

export interface MilestoneLike {
  status: MilestoneStatus;
  deadline: number;
  attempts: number;
  amount: bigint;
}

export interface ProjectLike {
  status: ProjectStatus;
  currentMilestone: number;
  maxAttempts: number;
  funded: bigint;
  released: bigint;
}

export type SubmitBlocker =
  | "project-not-active"
  | "not-current-milestone"
  | "not-pending"
  | "deadline-passed"
  | "max-attempts"
  | "insufficient-balance";

/** protocol-rules §4 Rule 1 preconditions for `submit_for_verification`. */
export function submitBlocker(
  p: ProjectLike,
  m: MilestoneLike,
  index: number,
  now: number,
): SubmitBlocker | null {
  if (p.status !== ProjectStatus.Active) return "project-not-active";
  if (index !== p.currentMilestone) return "not-current-milestone";
  if (m.status !== MilestoneStatus.Pending) return "not-pending";
  if (now > m.deadline) return "deadline-passed";
  if (m.attempts >= p.maxAttempts) return "max-attempts";
  if (p.funded - p.released < m.amount) return "insufficient-balance";
  return null;
}

/** protocol-rules §3 refund formula (integer division, like the contract). */
export function refundAmount(contribution: bigint, refundPool: bigint, funded: bigint): bigint {
  if (funded === 0n) return 0n;
  return (contribution * refundPool) / funded;
}

export function canAppeal(args: {
  outcome: Outcome;
  kind: RoundKind;
  finalized: boolean;
  hasAppeal: boolean;
  appealableUntil: number;
  now: number;
  isCreator: boolean;
  isFunder: boolean;
}): boolean {
  if (args.kind !== RoundKind.Original || !args.finalized || args.hasAppeal) return false;
  if (args.now > args.appealableUntil) return false;
  if (args.outcome === Outcome.Rejected) return args.isCreator;
  if (args.outcome === Outcome.Approved) return args.isFunder;
  return false;
}
