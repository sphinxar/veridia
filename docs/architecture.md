# Veridia Architecture

## 1. Overview

Veridia is a human-oracle protocol: independent, staked verifiers decide whether a
project milestone was achieved, and an escrow contract releases funds only on a final
on-chain approval.

```
 ┌──────────────────────────── Browser ────────────────────────────┐
 │  Next.js UI (apps/web)                                          │
 │   • Stellar Wallets Kit (Freighter)  ← signs; keys never leave  │
 │   • @veridia/stellar-client: build → simulate → sign → submit   │
 │   • commit secrets kept locally (salt), never sent to backend   │
 └───────────┬──────────────────────────────────┬──────────────────┘
             │ HTTPS (JSON, multipart)          │ Soroban RPC (JSON-RPC)
             ▼                                  ▼
 ┌──────────────────────────┐        ┌────────────────────────────────┐
 │ Next.js Route Handlers   │        │ Stellar network (local/testnet)│
 │  • wallet-signature auth │        │  ProjectEscrow ◄──► Verification│
 │  • project metadata      │        │        ▲               │        │
 │  • evidence upload/ACL   │        │        │ lock/unlock/  ▼        │
 │  • tx records            │        │        └──── VerifierRegistry   │
 └───────┬──────────┬───────┘        └──────────────┬─────────────────┘
         │          │                               │ getEvents / getTransaction
         ▼          ▼                               ▼
   PostgreSQL   S3-compatible            services/indexer (Node)
   (Drizzle)    object store  ◄────────  idempotent event ingestion,
                (private)                 projections, tx reconciliation
```

## 2. Sources of truth

| Data | Source of truth | Mirror |
|---|---|---|
| Balances, milestone status, votes, outcomes, stakes | Soroban contracts | `projects`, `milestones`, `verification_rounds`, … tables (indexer projections) |
| Project / milestone descriptions | PostgreSQL (hash committed on-chain as `metadata_hash`) | — |
| Evidence files | Object storage (private bucket) | SHA-256 in DB and bound on-chain to the round |
| Commit salts | The verifier's browser (localStorage + downloadable backup) | never stored server-side |

The UI always labels indexed data with its sync state; anything financial shown as
final has been confirmed by the indexer from contract events, and the project page offers
a "Reconcile with chain" action that reads contract state directly.

## 3. Repository layout

| Path | Responsibility |
|---|---|
| `contracts/project-escrow` | Projects, milestones, deposits, settlement, cancellation, refunds |
| `contracts/verifier-registry` | Verifier registration, stake, locks, unbonding, slashing, participation stats |
| `contracts/verification` | Rounds, panel selection, commit-reveal, outcomes, appeals, decisions |
| `packages/domain` | Shared TS types, enums, Zod schemas, state machine mirror, commitment hashing |
| `packages/stellar-client` | Network config, contract invocation (simulate/sign/submit/poll), typed read helpers, event decoding |
| `packages/ui` | shadcn/ui-style components (Tailwind) shared by the app |
| `apps/web` | Next.js App Router UI + Route Handlers (API) + Drizzle schema/migrations |
| `services/indexer` | Event ingestion and reconciliation worker |
| `scripts` | Local network bootstrap, contract build/deploy, demo seeding |

The Drizzle schema lives in `apps/web/src/db` and is imported by the indexer through the
`@veridia/web/db` export to keep a single schema definition.

## 4. Contract interaction

* **Escrow → Verification** `open_round(project_id, milestone, attempt, evidence_hash, creator)`
  — Verification requires the escrow contract's auth (it is the only caller allowed).
* **Escrow → Verification** `get_decision(round_id)` — read-only; used by `settle_milestone`.
* **Verification → Registry** `eligible`, `lock`, `release`, `slash`, `record_*` — Registry
  requires the Verification contract's auth for every state-changing call.
* **Verification → Escrow** `contribution_of(project_id, addr)` and `creator_of` — read-only;
  used to authorize appeals.

Contracts are initialised in a single bootstrap script after all three are deployed, since
they reference each other. `init` can be called once.

## 5. Transaction lifecycle (client)

1. UI calls `@veridia/stellar-client.invoke()` with the contract method and args.
2. The client builds the transaction with the connected wallet as source and runs
   `simulateTransaction` (fails fast with decoded contract errors; nothing is signed).
3. The assembled transaction (footprint + auth + fees) is signed by the wallet.
4. The client submits via `sendTransaction`, immediately `POST`s `/api/transactions`
   with the hash (status `pending`), and polls `getTransaction` until `SUCCESS`/`FAILED`.
5. The indexer independently reconciles every `pending` record against RPC, so a closed
   tab or lost connection never leaves a transaction in limbo; records not found after
   the validity window become `expired`.

The backend never signs contract transactions. It cannot approve a milestone because only
the Verification contract writes decisions and only votes from selected panel members count.

## 6. Authentication (off-chain API)

Wallet-based: `GET /api/auth/challenge` returns a single-use nonce message;
the wallet signs it with SEP-53 `signMessage`; `POST /api/auth/verify` verifies the
ed25519 signature against the address and sets an HTTP-only session cookie (JWT, HS256,
8 h). Authorization for evidence downloads is derived from indexed on-chain data
(creator, panel membership) — not from client claims.

## 7. Evidence pipeline

1. Creator uploads a file to `POST /api/projects/:id/milestones/:idx/evidence`
   (≤ 25 MB, allow-listed MIME types, magic-byte sniffing).
2. Server streams it to the private bucket under a content-addressed key, computes
   SHA-256, and stores an `evidence_versions` row (version n+1).
3. Creator calls `submit_for_verification(…, evidence_hash)` on-chain.
4. Verifiers download through `GET /api/evidence/:versionId` (ACL check; the server
   re-hashes the object and refuses to serve it on mismatch); the browser also
   re-hashes and compares with the round's on-chain `evidence_hash`.

## 8. Indexer

* Polls `getEvents` for the three contract IDs from a persisted cursor.
* Each event is stored in `contract_events` keyed by its RPC event id (`UNIQUE`), so
  re-delivery is a no-op; projections run in the same DB transaction as the insert.
* Projection handlers are pure functions of (event, current rows) and safe to re-run.
* Failures are retried with exponential backoff; the cursor only advances after commit.
* Every N cycles, open projects are reconciled by reading contract state (`get_project`,
  `get_round`), correcting drift and recording an `audit_events` entry when it does.

## 9. Environments

| Env | Stellar | DB / storage |
|---|---|---|
| local | `stellar container start local` (quickstart, port 8000) | docker compose: Postgres 16 (5544), SeaweedFS S3 (8333) |
| testnet | Stellar Testnet RPC | same local services or managed equivalents |
| tests | Soroban test env (Rust), PGlite (Vitest), local network (Playwright) | — |
