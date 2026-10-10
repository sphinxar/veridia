/**
 * Enums mirroring the Soroban contracts' `#[repr(u32)]` types. The numeric values are
 * part of the contract ABI — never renumber.
 */

export const ProjectStatus = {
  Funding: 0,
  Active: 1,
  Completed: 2,
  Cancelled: 3,
  Failed: 4,
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const MilestoneStatus = {
  Pending: 0,
  InVerification: 1,
  Paid: 2,
  Failed: 3,
} as const;
export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus];

export const Outcome = {
  Pending: 0,
  Approved: 1,
  Rejected: 2,
  Inconclusive: 3,
  NoQuorum: 4,
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome];

export const Phase = {
  Commit: 0,
  Reveal: 1,
  Finalizable: 2,
  Finalized: 3,
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase];

export const RoundKind = { Original: 0, Appeal: 1 } as const;
export type RoundKind = (typeof RoundKind)[keyof typeof RoundKind];

export const Vote = { Approve: 1, Reject: 2 } as const;
export type Vote = (typeof Vote)[keyof typeof Vote];

export const Conduct = { Revealed: 0, NoCommit: 1, NoReveal: 2 } as const;
export type Conduct = (typeof Conduct)[keyof typeof Conduct];

const invert = <T extends Record<string, number>>(o: T) =>
  Object.fromEntries(Object.entries(o).map(([k, v]) => [v, k])) as Record<number, keyof T>;

export const projectStatusName = invert(ProjectStatus);
export const milestoneStatusName = invert(MilestoneStatus);
export const outcomeName = invert(Outcome);
export const phaseName = invert(Phase);

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  0: "Funding",
  1: "Active",
  2: "Completed",
  3: "Cancelled",
  4: "Failed",
};

export const MILESTONE_STATUS_LABEL: Record<MilestoneStatus, string> = {
  0: "Pending",
  1: "In verification",
  2: "Paid",
  3: "Failed",
};

export const OUTCOME_LABEL: Record<Outcome, string> = {
  0: "Pending",
  1: "Approved",
  2: "Rejected",
  3: "Inconclusive",
  4: "No quorum",
};

export const PHASE_LABEL: Record<Phase, string> = {
  0: "Commit",
  1: "Reveal",
  2: "Ready to finalize",
  3: "Finalized",
};

/** Contract error codes → human messages, keyed by contract. */
export const CONTRACT_ERRORS = {
  escrow: {
    1: "Already initialized",
    2: "Not initialized",
    3: "Invalid parameters",
    4: "Token is not on the allow-list",
    5: "Invalid milestones",
    6: "Invalid deadline",
    7: "Project not found",
    8: "Milestone not found",
    9: "Action not allowed in the current state",
    10: "Invalid amount",
    11: "Deposit exceeds the remaining budget",
    12: "Funding period is closed",
    13: "Deadline has not passed yet",
    14: "Milestone deadline has passed",
    15: "Milestones must be completed in order",
    16: "Maximum verification attempts reached",
    17: "Insufficient escrow balance",
    18: "Decision is not final yet (appeal window or appeal pending)",
    19: "Nothing to refund",
    20: "Refund already claimed",
  },
  registry: {
    1: "Already initialized",
    2: "Not initialized",
    3: "Invalid parameters",
    4: "Already registered",
    5: "Not registered as a verifier",
    6: "Invalid amount",
    7: "Insufficient free (unlocked) stake",
    8: "Nothing to withdraw",
    9: "Unbonding period has not elapsed",
    10: "Verifier not eligible",
    11: "Stake already locked for this round",
    12: "Lock not found",
    13: "Invalid slash",
  },
  verification: {
    1: "Already initialized",
    2: "Not initialized",
    3: "Invalid parameters",
    4: "Round not found",
    5: "Not enough eligible verifiers to form a panel",
    6: "Not allowed in the current phase",
    7: "You are not on this round's panel",
    8: "You already committed a vote",
    9: "You have not committed a vote",
    10: "You already revealed your vote",
    11: "Vote or salt does not match your commitment",
    12: "Invalid vote",
    13: "Round already finalized",
    14: "Round cannot be finalized yet",
    15: "This round cannot be appealed",
    16: "An appeal was already filed",
    17: "The appeal window has closed",
    18: "You are not allowed to appeal this decision",
    19: "Not an original round",
  },
} as const satisfies Record<string, Record<number, string>>;

export type ContractName = keyof typeof CONTRACT_ERRORS;
