/**
 * ScVal argument builders and typed decoders for the Veridia contract types.
 * Field names match the Rust `#[contracttype]` structs exactly.
 */
import { Address, nativeToScVal, scValToNative, xdr } from "@stellar/stellar-sdk";
import { fromHex, toHex } from "@veridia/domain";
import type { MilestoneStatus, Outcome, ProjectStatus, RoundKind } from "@veridia/domain";

export const sc = {
  u32: (v: number) => nativeToScVal(v, { type: "u32" }),
  u64: (v: number | bigint) => nativeToScVal(BigInt(v), { type: "u64" }),
  i128: (v: bigint | string | number) => nativeToScVal(BigInt(v), { type: "i128" }),
  bool: (v: boolean) => xdr.ScVal.scvBool(v),
  address: (v: string) => Address.fromString(v).toScVal(),
  bytes32: (hex: string | Uint8Array) => {
    const b = typeof hex === "string" ? fromHex(hex) : hex;
    if (b.length !== 32) throw new Error("Expected 32 bytes");
    return xdr.ScVal.scvBytes(Buffer.from(b));
  },
  /** A `#[contracttype]` struct: ScMap with symbol keys sorted lexicographically. */
  struct: (fields: Record<string, xdr.ScVal>) =>
    xdr.ScVal.scvMap(
      Object.keys(fields)
        .sort()
        .map((k) => new xdr.ScMapEntry({ key: xdr.ScVal.scvSymbol(k), val: fields[k]! })),
    ),
  vec: (items: xdr.ScVal[]) => xdr.ScVal.scvVec(items),
};

export interface MilestoneInput {
  amount: bigint;
  deadline: number;
}

export const milestoneInputs = (ms: MilestoneInput[]) =>
  sc.vec(ms.map((m) => sc.struct({ amount: sc.i128(m.amount), deadline: sc.u64(m.deadline) })));

// ------------------------------------------------------------------ decoders

type Native = Record<string, unknown>;

const num = (v: unknown) => Number(v as bigint | number);
const big = (v: unknown) => BigInt(v as bigint | number);
const hex = (v: unknown) => (v == null ? null : toHex(new Uint8Array(v as Uint8Array)));
const opt = <T>(v: unknown, f: (x: unknown) => T): T | null => (v === null || v === undefined ? null : f(v));

export function native(v: xdr.ScVal): unknown {
  return scValToNative(v);
}

export interface ProjectState {
  id: number;
  creator: string;
  token: string;
  metadataHash: string;
  budget: bigint;
  funded: bigint;
  released: bigint;
  fundingDeadline: number;
  createdAt: number;
  status: ProjectStatus;
  milestoneCount: number;
  currentMilestone: number;
  maxAttempts: number;
  refundPool: bigint;
  refunded: bigint;
}

export function decodeProject(v: unknown): ProjectState {
  const p = v as Native;
  return {
    id: num(p.id),
    creator: String(p.creator),
    token: String(p.token),
    metadataHash: hex(p.metadata_hash)!,
    budget: big(p.budget),
    funded: big(p.funded),
    released: big(p.released),
    fundingDeadline: num(p.funding_deadline),
    createdAt: num(p.created_at),
    status: num(p.status) as ProjectStatus,
    milestoneCount: num(p.milestone_count),
    currentMilestone: num(p.current_milestone),
    maxAttempts: num(p.max_attempts),
    refundPool: big(p.refund_pool),
    refunded: big(p.refunded),
  };
}

export interface MilestoneState {
  amount: bigint;
  deadline: number;
  status: MilestoneStatus;
  attempts: number;
  currentRound: number | null;
  evidenceHash: string | null;
  paidAt: number;
}

export function decodeMilestone(v: unknown): MilestoneState {
  const m = v as Native;
  return {
    amount: big(m.amount),
    deadline: num(m.deadline),
    status: num(m.status) as MilestoneStatus,
    attempts: num(m.attempts),
    currentRound: opt(m.current_round, num),
    evidenceHash: hex(m.evidence_hash),
    paidAt: num(m.paid_at),
  };
}

export interface RoundState {
  id: number;
  kind: RoundKind;
  parentRoundId: number | null;
  projectId: number;
  milestone: number;
  attempt: number;
  evidenceHash: string;
  creator: string;
  panel: string[];
  openedAt: number;
  commitDeadline: number;
  revealDeadline: number;
  quorum: number;
  approvalThresholdBps: number;
  noShowSlashBps: number;
  appealWindowSecs: number;
  commits: number;
  reveals: number;
  approvals: number;
  rejections: number;
  finalized: boolean;
  outcome: Outcome;
  finalizedAt: number;
  appealRoundId: number | null;
  appellant: string | null;
  appealBond: bigint;
}

export function decodeRound(v: unknown): RoundState {
  const r = v as Native;
  return {
    id: num(r.id),
    kind: num(r.kind) as RoundKind,
    parentRoundId: opt(r.parent_round_id, num),
    projectId: num(r.project_id),
    milestone: num(r.milestone),
    attempt: num(r.attempt),
    evidenceHash: hex(r.evidence_hash)!,
    creator: String(r.creator),
    panel: (r.panel as unknown[]).map(String),
    openedAt: num(r.opened_at),
    commitDeadline: num(r.commit_deadline),
    revealDeadline: num(r.reveal_deadline),
    quorum: num(r.quorum),
    approvalThresholdBps: num(r.approval_threshold_bps),
    noShowSlashBps: num(r.no_show_slash_bps),
    appealWindowSecs: num(r.appeal_window_secs),
    commits: num(r.commits),
    reveals: num(r.reveals),
    approvals: num(r.approvals),
    rejections: num(r.rejections),
    finalized: Boolean(r.finalized),
    outcome: num(r.outcome) as Outcome,
    finalizedAt: num(r.finalized_at),
    appealRoundId: opt(r.appeal_round_id, num),
    appellant: opt(r.appellant, String),
    appealBond: big(r.appeal_bond),
  };
}

export interface DecisionState {
  roundId: number;
  isFinal: boolean;
  outcome: Outcome;
  underAppeal: boolean;
  appealableUntil: number;
  appealRoundId: number | null;
}

export function decodeDecision(v: unknown): DecisionState {
  const d = v as Native;
  return {
    roundId: num(d.round_id),
    isFinal: Boolean(d.is_final),
    outcome: num(d.outcome) as Outcome,
    underAppeal: Boolean(d.under_appeal),
    appealableUntil: num(d.appealable_until),
    appealRoundId: opt(d.appeal_round_id, num),
  };
}

export interface VerifierState {
  active: boolean;
  stake: bigint;
  locked: bigint;
  unbonding: bigint;
  unbondAt: number;
  registeredAt: number;
  metadataHash: string;
  roundsAssigned: number;
  roundsRevealed: number;
  noShows: number;
  activeRounds: number;
  totalSlashed: bigint;
}

export function decodeVerifier(v: unknown): VerifierState | null {
  if (v === null || v === undefined) return null;
  const r = v as Native;
  return {
    active: Boolean(r.active),
    stake: big(r.stake),
    locked: big(r.locked),
    unbonding: big(r.unbonding),
    unbondAt: num(r.unbond_at),
    registeredAt: num(r.registered_at),
    metadataHash: hex(r.metadata_hash)!,
    roundsAssigned: num(r.rounds_assigned),
    roundsRevealed: num(r.rounds_revealed),
    noShows: num(r.no_shows),
    activeRounds: num(r.active_rounds),
    totalSlashed: big(r.total_slashed),
  };
}

export interface VoteState {
  commitment: string;
  committedAt: number;
  revealed: boolean;
  vote: number;
}

export function decodeVote(v: unknown): VoteState | null {
  if (v === null || v === undefined) return null;
  const r = v as Native;
  return {
    commitment: hex(r.commitment)!,
    committedAt: num(r.committed_at),
    revealed: Boolean(r.revealed),
    vote: num(r.vote),
  };
}

/** JSON-safe conversion of decoded natives (bigint → string, bytes → hex). */
export function toJsonSafe(v: unknown): unknown {
  if (typeof v === "bigint") return v.toString();
  if (v instanceof Uint8Array) return toHex(v);
  if (Array.isArray(v)) return v.map(toJsonSafe);
  if (v && typeof v === "object") {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toJsonSafe(x)]));
  }
  return v;
}
