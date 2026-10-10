CREATE TABLE "appeals" (
	"id" serial PRIMARY KEY NOT NULL,
	"round_id" integer NOT NULL,
	"appeal_round_id" integer NOT NULL,
	"project_chain_id" integer NOT NULL,
	"milestone_index" integer NOT NULL,
	"appellant" text NOT NULL,
	"bond" numeric(39, 0) NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"appeal_outcome" smallint,
	"final_outcome" smallint,
	"overturned" boolean,
	"filed_tx" text NOT NULL,
	"filed_ledger" integer NOT NULL,
	"resolved_tx" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "appeals_round_id_unique" UNIQUE("round_id"),
	CONSTRAINT "appeals_appeal_round_id_unique" UNIQUE("appeal_round_id")
);
--> statement-breakpoint
CREATE TABLE "audit_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"actor_address" text,
	"action" text NOT NULL,
	"entity_type" text NOT NULL,
	"entity_id" text NOT NULL,
	"details" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "auth_nonces" (
	"nonce" text PRIMARY KEY NOT NULL,
	"address" text NOT NULL,
	"message" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"used_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contract_events" (
	"id" text PRIMARY KEY NOT NULL,
	"ledger" integer NOT NULL,
	"ledger_closed_at" timestamp with time zone NOT NULL,
	"tx_hash" text NOT NULL,
	"contract" text NOT NULL,
	"contract_id" text NOT NULL,
	"name" text NOT NULL,
	"topics" jsonb NOT NULL,
	"data" jsonb NOT NULL,
	"processed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contributions" (
	"project_id" integer NOT NULL,
	"funder_address" text NOT NULL,
	"amount" numeric(39, 0) DEFAULT '0' NOT NULL,
	"refunded" boolean DEFAULT false NOT NULL,
	"refund_amount" numeric(39, 0),
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contributions_project_id_funder_address_pk" PRIMARY KEY("project_id","funder_address")
);
--> statement-breakpoint
CREATE TABLE "escrow_configs" (
	"id" serial PRIMARY KEY NOT NULL,
	"network" text NOT NULL,
	"escrow_contract" text NOT NULL,
	"registry_contract" text NOT NULL,
	"verification_contract" text NOT NULL,
	"default_token" text NOT NULL,
	"params" jsonb NOT NULL,
	"start_ledger" integer NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "evidence" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"milestone_index" integer NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "evidence_versions" (
	"id" serial PRIMARY KEY NOT NULL,
	"evidence_id" integer NOT NULL,
	"version" integer NOT NULL,
	"storage_key" text NOT NULL,
	"file_name" text NOT NULL,
	"mime_type" text NOT NULL,
	"size_bytes" integer NOT NULL,
	"sha256" text NOT NULL,
	"note" text DEFAULT '' NOT NULL,
	"uploaded_by" text NOT NULL,
	"submitted_round_id" integer,
	"uploaded_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "final_outcomes" (
	"round_id" integer PRIMARY KEY NOT NULL,
	"project_chain_id" integer NOT NULL,
	"milestone_index" integer NOT NULL,
	"outcome" smallint NOT NULL,
	"effect" text NOT NULL,
	"amount" numeric(39, 0),
	"tx_hash" text NOT NULL,
	"ledger" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "indexer_state" (
	"key" text PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "milestones" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"index" integer NOT NULL,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"amount" numeric(39, 0) NOT NULL,
	"deadline" bigint NOT NULL,
	"status" smallint DEFAULT 0 NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"current_round_id" integer,
	"evidence_hash" text,
	"paid_at" bigint,
	"paid_tx" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "panel_assignments" (
	"round_id" integer NOT NULL,
	"verifier_address" text NOT NULL,
	"position" integer NOT NULL,
	"conduct" smallint,
	"slashed" numeric(39, 0) DEFAULT '0' NOT NULL,
	CONSTRAINT "panel_assignments_round_id_verifier_address_pk" PRIMARY KEY("round_id","verifier_address")
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"chain_id" integer,
	"creator_address" text NOT NULL,
	"token" text NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"category" text DEFAULT 'general' NOT NULL,
	"metadata" jsonb NOT NULL,
	"metadata_hash" text NOT NULL,
	"budget" numeric(39, 0) NOT NULL,
	"funded" numeric(39, 0) DEFAULT '0' NOT NULL,
	"released" numeric(39, 0) DEFAULT '0' NOT NULL,
	"refund_pool" numeric(39, 0) DEFAULT '0' NOT NULL,
	"funding_deadline" bigint NOT NULL,
	"max_attempts" smallint,
	"status" smallint,
	"current_milestone" integer DEFAULT 0 NOT NULL,
	"sync_status" text DEFAULT 'draft' NOT NULL,
	"created_tx" text,
	"last_reconciled_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "projects_chain_id_unique" UNIQUE("chain_id")
);
--> statement-breakpoint
CREATE TABLE "stake_records" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" text NOT NULL,
	"address" text NOT NULL,
	"kind" text NOT NULL,
	"amount" numeric(39, 0) NOT NULL,
	"round_id" integer,
	"tx_hash" text NOT NULL,
	"ledger" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "stake_records_event_id_unique" UNIQUE("event_id")
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"hash" text PRIMARY KEY NOT NULL,
	"kind" text NOT NULL,
	"contract" text NOT NULL,
	"method" text NOT NULL,
	"source_address" text NOT NULL,
	"project_chain_id" integer,
	"round_id" integer,
	"status" text DEFAULT 'pending' NOT NULL,
	"ledger" integer,
	"error" text,
	"check_attempts" integer DEFAULT 0 NOT NULL,
	"submitted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"confirmed_at" timestamp with time zone,
	"last_checked_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"address" text NOT NULL,
	"display_name" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_login_at" timestamp with time zone,
	CONSTRAINT "users_address_unique" UNIQUE("address")
);
--> statement-breakpoint
CREATE TABLE "verification_rounds" (
	"id" integer PRIMARY KEY NOT NULL,
	"project_chain_id" integer NOT NULL,
	"milestone_index" integer NOT NULL,
	"attempt" integer NOT NULL,
	"kind" smallint NOT NULL,
	"parent_round_id" integer,
	"evidence_hash" text NOT NULL,
	"commit_deadline" bigint NOT NULL,
	"reveal_deadline" bigint NOT NULL,
	"commits" integer DEFAULT 0 NOT NULL,
	"reveals" integer DEFAULT 0 NOT NULL,
	"approvals" integer DEFAULT 0 NOT NULL,
	"rejections" integer DEFAULT 0 NOT NULL,
	"finalized" boolean DEFAULT false NOT NULL,
	"outcome" smallint DEFAULT 0 NOT NULL,
	"finalized_at" bigint,
	"appealable_until" bigint,
	"appeal_round_id" integer,
	"opened_tx" text NOT NULL,
	"opened_ledger" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verifier_profiles" (
	"address" text PRIMARY KEY NOT NULL,
	"display_name" text,
	"expertise" text DEFAULT '' NOT NULL,
	"metadata_hash" text,
	"registered" boolean DEFAULT false NOT NULL,
	"registered_at" bigint,
	"active" boolean DEFAULT false NOT NULL,
	"stake" numeric(39, 0) DEFAULT '0' NOT NULL,
	"locked" numeric(39, 0) DEFAULT '0' NOT NULL,
	"unbonding" numeric(39, 0) DEFAULT '0' NOT NULL,
	"unbond_at" bigint,
	"rounds_assigned" integer DEFAULT 0 NOT NULL,
	"rounds_revealed" integer DEFAULT 0 NOT NULL,
	"no_shows" integer DEFAULT 0 NOT NULL,
	"total_slashed" numeric(39, 0) DEFAULT '0' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vote_commitments" (
	"round_id" integer NOT NULL,
	"verifier_address" text NOT NULL,
	"commitment" text NOT NULL,
	"committed_tx" text NOT NULL,
	"committed_ledger" integer NOT NULL,
	"revealed" boolean DEFAULT false NOT NULL,
	"vote" smallint,
	"revealed_tx" text,
	"revealed_ledger" integer,
	CONSTRAINT "vote_commitments_round_id_verifier_address_pk" PRIMARY KEY("round_id","verifier_address")
);
--> statement-breakpoint
ALTER TABLE "contributions" ADD CONSTRAINT "contributions_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "evidence" ADD CONSTRAINT "evidence_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "evidence_versions" ADD CONSTRAINT "evidence_versions_evidence_id_evidence_id_fk" FOREIGN KEY ("evidence_id") REFERENCES "public"."evidence"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestones" ADD CONSTRAINT "milestones_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "panel_assignments" ADD CONSTRAINT "panel_assignments_round_id_verification_rounds_id_fk" FOREIGN KEY ("round_id") REFERENCES "public"."verification_rounds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vote_commitments" ADD CONSTRAINT "vote_commitments_round_id_verification_rounds_id_fk" FOREIGN KEY ("round_id") REFERENCES "public"."verification_rounds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "audit_entity_idx" ON "audit_events" USING btree ("entity_type","entity_id");--> statement-breakpoint
CREATE INDEX "audit_created_idx" ON "audit_events" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "contract_events_ledger_idx" ON "contract_events" USING btree ("ledger");--> statement-breakpoint
CREATE INDEX "contract_events_name_idx" ON "contract_events" USING btree ("name");--> statement-breakpoint
CREATE INDEX "contributions_funder_idx" ON "contributions" USING btree ("funder_address");--> statement-breakpoint
CREATE UNIQUE INDEX "escrow_configs_network_escrow" ON "escrow_configs" USING btree ("network","escrow_contract");--> statement-breakpoint
CREATE UNIQUE INDEX "evidence_project_milestone" ON "evidence" USING btree ("project_id","milestone_index");--> statement-breakpoint
CREATE UNIQUE INDEX "evidence_versions_evidence_version" ON "evidence_versions" USING btree ("evidence_id","version");--> statement-breakpoint
CREATE INDEX "evidence_versions_sha_idx" ON "evidence_versions" USING btree ("sha256");--> statement-breakpoint
CREATE UNIQUE INDEX "milestones_project_index" ON "milestones" USING btree ("project_id","index");--> statement-breakpoint
CREATE INDEX "panel_verifier_idx" ON "panel_assignments" USING btree ("verifier_address");--> statement-breakpoint
CREATE INDEX "projects_creator_idx" ON "projects" USING btree ("creator_address");--> statement-breakpoint
CREATE INDEX "projects_metadata_hash_idx" ON "projects" USING btree ("metadata_hash");--> statement-breakpoint
CREATE INDEX "stake_records_address_idx" ON "stake_records" USING btree ("address");--> statement-breakpoint
CREATE INDEX "transactions_source_idx" ON "transactions" USING btree ("source_address");--> statement-breakpoint
CREATE INDEX "transactions_status_idx" ON "transactions" USING btree ("status");--> statement-breakpoint
CREATE INDEX "rounds_project_idx" ON "verification_rounds" USING btree ("project_chain_id","milestone_index");