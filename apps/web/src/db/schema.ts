/**
 * PostgreSQL schema (application + indexing layer).
 *
 * The chain is the source of truth for balances, statuses, votes and outcomes; the
 * columns mirroring on-chain state are written ONLY by the indexer from contract
 * events or direct contract reads. Token amounts are stored as numeric(39,0) strings
 * (base units) to avoid precision loss.
 */
import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  primaryKey,
  serial,
  smallint,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const amount = (name: string) => numeric(name, { precision: 39, scale: 0 });
const created = () => timestamp("created_at", { withTimezone: true }).notNull().defaultNow();
const updated = () => timestamp("updated_at", { withTimezone: true }).notNull().defaultNow();
/** Unix seconds (ledger timestamps). */
const secs = (name: string) => bigint(name, { mode: "number" });

// ---------------------------------------------------------------- users & auth

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  address: text("address").notNull().unique(),
  displayName: text("display_name"),
  createdAt: created(),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
});

export const authNonces = pgTable("auth_nonces", {
  nonce: text("nonce").primaryKey(),
  address: text("address").notNull(),
  message: text("message").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  usedAt: timestamp("used_at", { withTimezone: true }),
  createdAt: created(),
});

// ---------------------------------------------------------------- deployment / escrow config

export const escrowConfigs = pgTable("escrow_configs", {
  id: serial("id").primaryKey(),
  network: text("network").notNull(),
  escrowContract: text("escrow_contract").notNull(),
  registryContract: text("registry_contract").notNull(),
  verificationContract: text("verification_contract").notNull(),
  defaultToken: text("default_token").notNull(),
  params: jsonb("params").notNull(),
  startLedger: integer("start_ledger").notNull(),
  active: boolean("active").notNull().default(true),
  createdAt: created(),
}, (t) => [uniqueIndex("escrow_configs_network_escrow").on(t.network, t.escrowContract)]);

// ---------------------------------------------------------------- projects & milestones

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  /** On-chain project id; null while the creation tx is pending. */
  chainId: integer("chain_id").unique(),
  creatorAddress: text("creator_address").notNull(),
  token: text("token").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  description: text("description").notNull().default(""),
  category: text("category").notNull().default("general"),
  metadata: jsonb("metadata").notNull(),
  metadataHash: text("metadata_hash").notNull(),
  budget: amount("budget").notNull(),
  funded: amount("funded").notNull().default("0"),
  released: amount("released").notNull().default("0"),
  refundPool: amount("refund_pool").notNull().default("0"),
  fundingDeadline: secs("funding_deadline").notNull(),
  maxAttempts: smallint("max_attempts"),
  /** Mirrors ProjectStatus; null until confirmed on-chain. */
  status: smallint("status"),
  currentMilestone: integer("current_milestone").notNull().default(0),
  /** draft → pending (tx sent) → confirmed (seen on-chain). */
  syncStatus: text("sync_status").notNull().default("draft"),
  createdTx: text("created_tx"),
  lastReconciledAt: timestamp("last_reconciled_at", { withTimezone: true }),
  createdAt: created(),
  updatedAt: updated(),
}, (t) => [
  index("projects_creator_idx").on(t.creatorAddress),
  index("projects_metadata_hash_idx").on(t.metadataHash),
]);

export const milestones = pgTable("milestones", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
  index: integer("index").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  amount: amount("amount").notNull(),
  deadline: secs("deadline").notNull(),
  status: smallint("status").notNull().default(0),
  attempts: integer("attempts").notNull().default(0),
  currentRoundId: integer("current_round_id"),
  evidenceHash: text("evidence_hash"),
  paidAt: secs("paid_at"),
  paidTx: text("paid_tx"),
  updatedAt: updated(),
}, (t) => [uniqueIndex("milestones_project_index").on(t.projectId, t.index)]);

export const contributions = pgTable("contributions", {
  projectId: integer("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
  funderAddress: text("funder_address").notNull(),
  amount: amount("amount").notNull().default("0"),
  refunded: boolean("refunded").notNull().default(false),
  refundAmount: amount("refund_amount"),
  updatedAt: updated(),
}, (t) => [primaryKey({ columns: [t.projectId, t.funderAddress] }), index("contributions_funder_idx").on(t.funderAddress)]);

// ---------------------------------------------------------------- evidence

export const evidence = pgTable("evidence", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
  milestoneIndex: integer("milestone_index").notNull(),
  createdBy: text("created_by").notNull(),
  createdAt: created(),
}, (t) => [uniqueIndex("evidence_project_milestone").on(t.projectId, t.milestoneIndex)]);

export const evidenceVersions = pgTable("evidence_versions", {
  id: serial("id").primaryKey(),
  evidenceId: integer("evidence_id").notNull().references(() => evidence.id, { onDelete: "cascade" }),
  version: integer("version").notNull(),
  storageKey: text("storage_key").notNull(),
  fileName: text("file_name").notNull(),
  mimeType: text("mime_type").notNull(),
  sizeBytes: integer("size_bytes").notNull(),
  sha256: text("sha256").notNull(),
  note: text("note").notNull().default(""),
  uploadedBy: text("uploaded_by").notNull(),
  /** Set by the indexer when a round binds this hash on-chain. */
  submittedRoundId: integer("submitted_round_id"),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  uniqueIndex("evidence_versions_evidence_version").on(t.evidenceId, t.version),
  index("evidence_versions_sha_idx").on(t.sha256),
]);

// ---------------------------------------------------------------- verifiers & stake

export const verifierProfiles = pgTable("verifier_profiles", {
  address: text("address").primaryKey(),
  displayName: text("display_name"),
  expertise: text("expertise").notNull().default(""),
  metadataHash: text("metadata_hash"),
  registered: boolean("registered").notNull().default(false),
  registeredAt: secs("registered_at"),
  active: boolean("active").notNull().default(false),
  stake: amount("stake").notNull().default("0"),
  locked: amount("locked").notNull().default("0"),
  unbonding: amount("unbonding").notNull().default("0"),
  unbondAt: secs("unbond_at"),
  roundsAssigned: integer("rounds_assigned").notNull().default(0),
  roundsRevealed: integer("rounds_revealed").notNull().default(0),
  noShows: integer("no_shows").notNull().default(0),
  totalSlashed: amount("total_slashed").notNull().default("0"),
  updatedAt: updated(),
});

export const stakeRecords = pgTable("stake_records", {
  id: serial("id").primaryKey(),
  eventId: text("event_id").notNull().unique(),
  address: text("address").notNull(),
  kind: text("kind").notNull(), // deposit | unstake_request | withdraw | lock | release | slash
  amount: amount("amount").notNull(),
  roundId: integer("round_id"),
  txHash: text("tx_hash").notNull(),
  ledger: integer("ledger").notNull(),
  createdAt: created(),
}, (t) => [index("stake_records_address_idx").on(t.address)]);

// ---------------------------------------------------------------- verification

export const verificationRounds = pgTable("verification_rounds", {
  /** On-chain round id. */
  id: integer("id").primaryKey(),
  projectChainId: integer("project_chain_id").notNull(),
  milestoneIndex: integer("milestone_index").notNull(),
  attempt: integer("attempt").notNull(),
  kind: smallint("kind").notNull(), // 0 original, 1 appeal
  parentRoundId: integer("parent_round_id"),
  evidenceHash: text("evidence_hash").notNull(),
  commitDeadline: secs("commit_deadline").notNull(),
  revealDeadline: secs("reveal_deadline").notNull(),
  commits: integer("commits").notNull().default(0),
  reveals: integer("reveals").notNull().default(0),
  approvals: integer("approvals").notNull().default(0),
  rejections: integer("rejections").notNull().default(0),
  finalized: boolean("finalized").notNull().default(false),
  outcome: smallint("outcome").notNull().default(0),
  finalizedAt: secs("finalized_at"),
  appealableUntil: secs("appealable_until"),
  appealRoundId: integer("appeal_round_id"),
  openedTx: text("opened_tx").notNull(),
  openedLedger: integer("opened_ledger").notNull(),
  createdAt: created(),
  updatedAt: updated(),
}, (t) => [index("rounds_project_idx").on(t.projectChainId, t.milestoneIndex)]);

export const panelAssignments = pgTable("panel_assignments", {
  roundId: integer("round_id").notNull().references(() => verificationRounds.id, { onDelete: "cascade" }),
  verifierAddress: text("verifier_address").notNull(),
  position: integer("position").notNull(),
  /** Mirrors Conduct after finalization: 0 revealed, 1 no-commit, 2 no-reveal. */
  conduct: smallint("conduct"),
  slashed: amount("slashed").notNull().default("0"),
}, (t) => [primaryKey({ columns: [t.roundId, t.verifierAddress] }), index("panel_verifier_idx").on(t.verifierAddress)]);

export const voteCommitments = pgTable("vote_commitments", {
  roundId: integer("round_id").notNull().references(() => verificationRounds.id, { onDelete: "cascade" }),
  verifierAddress: text("verifier_address").notNull(),
  commitment: text("commitment").notNull(),
  committedTx: text("committed_tx").notNull(),
  committedLedger: integer("committed_ledger").notNull(),
  revealed: boolean("revealed").notNull().default(false),
  vote: smallint("vote"),
  revealedTx: text("revealed_tx"),
  revealedLedger: integer("revealed_ledger"),
}, (t) => [primaryKey({ columns: [t.roundId, t.verifierAddress] })]);

export const appeals = pgTable("appeals", {
  id: serial("id").primaryKey(),
  roundId: integer("round_id").notNull().unique(),
  appealRoundId: integer("appeal_round_id").notNull().unique(),
  projectChainId: integer("project_chain_id").notNull(),
  milestoneIndex: integer("milestone_index").notNull(),
  appellant: text("appellant").notNull(),
  bond: amount("bond").notNull(),
  status: text("status").notNull().default("pending"), // pending | resolved
  appealOutcome: smallint("appeal_outcome"),
  finalOutcome: smallint("final_outcome"),
  overturned: boolean("overturned"),
  filedTx: text("filed_tx").notNull(),
  filedLedger: integer("filed_ledger").notNull(),
  resolvedTx: text("resolved_tx"),
  createdAt: created(),
  updatedAt: updated(),
});

/** Settled milestone decisions (written when escrow applies a final decision). */
export const finalOutcomes = pgTable("final_outcomes", {
  roundId: integer("round_id").primaryKey(),
  projectChainId: integer("project_chain_id").notNull(),
  milestoneIndex: integer("milestone_index").notNull(),
  outcome: smallint("outcome").notNull(),
  /** paid | reopened | failed */
  effect: text("effect").notNull(),
  amount: amount("amount"),
  txHash: text("tx_hash").notNull(),
  ledger: integer("ledger").notNull(),
  createdAt: created(),
});

// ---------------------------------------------------------------- transactions, events, audit

export const transactions = pgTable("transactions", {
  hash: text("hash").primaryKey(),
  kind: text("kind").notNull(),
  contract: text("contract").notNull(),
  method: text("method").notNull(),
  sourceAddress: text("source_address").notNull(),
  projectChainId: integer("project_chain_id"),
  roundId: integer("round_id"),
  /** pending | success | failed | expired */
  status: text("status").notNull().default("pending"),
  ledger: integer("ledger"),
  error: text("error"),
  checkAttempts: integer("check_attempts").notNull().default(0),
  submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
  confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
  lastCheckedAt: timestamp("last_checked_at", { withTimezone: true }),
}, (t) => [index("transactions_source_idx").on(t.sourceAddress), index("transactions_status_idx").on(t.status)]);

export const contractEvents = pgTable("contract_events", {
  /** RPC event id (globally unique) — idempotency key. */
  id: text("id").primaryKey(),
  ledger: integer("ledger").notNull(),
  ledgerClosedAt: timestamp("ledger_closed_at", { withTimezone: true }).notNull(),
  txHash: text("tx_hash").notNull(),
  contract: text("contract").notNull(),
  contractId: text("contract_id").notNull(),
  name: text("name").notNull(),
  topics: jsonb("topics").notNull(),
  data: jsonb("data").notNull(),
  processedAt: timestamp("processed_at", { withTimezone: true }),
  createdAt: created(),
}, (t) => [index("contract_events_ledger_idx").on(t.ledger), index("contract_events_name_idx").on(t.name)]);

export const indexerState = pgTable("indexer_state", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: updated(),
});

export const auditEvents = pgTable("audit_events", {
  id: serial("id").primaryKey(),
  actorAddress: text("actor_address"),
  action: text("action").notNull(),
  entityType: text("entity_type").notNull(),
  entityId: text("entity_id").notNull(),
  details: jsonb("details").notNull().default(sql`'{}'::jsonb`),
  createdAt: created(),
}, (t) => [index("audit_entity_idx").on(t.entityType, t.entityId), index("audit_created_idx").on(t.createdAt)]);
