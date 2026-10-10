import { OUTCOME_LABEL, PROJECT_STATUS_LABEL, type Outcome, type ProjectStatus } from "@veridia/domain";
import { money, shortAddress } from "./format";

/** Human-readable one-liner for an indexed contract event. */
export function describeEvent(name: string, topics: unknown[], data: Record<string, unknown>): string {
  const t = (i: number) => String(topics[i] ?? "");
  switch (name) {
    case "project_created": return `Project #${t(0)} created by ${shortAddress(t(1))} with budget ${money(String(data.budget))}`;
    case "deposited": return `${shortAddress(t(1))} deposited ${money(String(data.amount))} into project #${t(0)}`;
    case "project_status_changed": return `Project #${t(0)} is now ${PROJECT_STATUS_LABEL[Number(data.status) as ProjectStatus]}`;
    case "milestone_submitted": return `Milestone ${Number(t(1)) + 1} of project #${t(0)} submitted (round #${data.round_id}, attempt ${data.attempt})`;
    case "milestone_paid": return `Milestone ${Number(t(1)) + 1} of project #${t(0)} paid: ${money(String(data.amount))}`;
    case "milestone_reopened": return `Milestone ${Number(t(1)) + 1} of project #${t(0)} reopened after ${OUTCOME_LABEL[Number(data.outcome) as Outcome]}`;
    case "milestone_failed": return `Milestone ${Number(t(1)) + 1} of project #${t(0)} failed (${Number(data.reason) === 1 ? "attempt limit" : "deadline"})`;
    case "refund_claimed": return `${shortAddress(t(1))} claimed a ${money(String(data.amount))} refund from project #${t(0)}`;
    case "round_opened": return `Round #${t(0)} opened for project #${t(1)} with a panel of ${(data.panel as unknown[])?.length ?? 0}`;
    case "vote_committed": return `${shortAddress(t(1))} committed a vote in round #${t(0)}`;
    case "vote_revealed": return `${shortAddress(t(1))} revealed ${Number(data.vote) === 1 ? "Approve" : "Reject"} in round #${t(0)}`;
    case "round_finalized": return `Round #${t(0)} finalized: ${OUTCOME_LABEL[Number(data.outcome) as Outcome]} (${data.approvals}✓/${data.rejections}✗)`;
    case "appeal_filed": return `Appeal of round #${t(0)} filed by ${shortAddress(String(data.appellant))} (appeal round #${t(1)})`;
    case "appeal_resolved": return `Appeal round #${t(1)} resolved: final ${OUTCOME_LABEL[Number(data.final_outcome) as Outcome]}${data.overturned ? " (overturned)" : ""}`;
    case "verifier_registered": return `Verifier ${shortAddress(t(0))} registered`;
    case "stake_deposited": return `${shortAddress(t(0))} staked ${money(String(data.amount))}`;
    case "unstake_requested": return `${shortAddress(t(0))} requested unstake of ${money(String(data.amount))}`;
    case "stake_withdrawn": return `${shortAddress(t(0))} withdrew ${money(String(data.amount))}`;
    case "stake_locked": return `${money(String(data.amount))} of ${shortAddress(t(0))}'s stake locked for round #${t(1)}`;
    case "stake_released": return `${shortAddress(t(0))}'s lock for round #${t(1)} released${String(data.slashed) !== "0" ? `, slashed ${money(String(data.slashed))}` : ""}`;
    case "verifier_status_changed": return `Verifier ${shortAddress(t(0))} ${data.active ? "activated" : "paused"}`;
    case "token_allowed": return `Token ${shortAddress(t(0))} ${data.allowed ? "allowed" : "removed"} for funding`;
    default: return name.replace(/_/g, " ");
  }
}
