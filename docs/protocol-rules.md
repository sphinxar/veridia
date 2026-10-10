# Veridia Protocol Rules (v1, MVP)

This document is the normative specification for the Veridia contracts. The Soroban
contracts in `contracts/` implement exactly these rules; the TypeScript mirror lives in
`packages/domain/src/state-machine.ts`. If code and this document disagree, that is a bug.

All times are Stellar ledger timestamps (seconds). All token amounts are `i128` in the
token's smallest unit. "Anyone" means any account may submit the transaction; the
contract still validates every precondition.

---

## 1. Actors

| Actor | Identity | Powers |
|---|---|---|
| **Creator** | Stellar address that called `create_project` | Configures project, submits milestones for verification, cancels before activation, appeals a rejection |
| **Funder** | Any address that deposited into a project | Deposits, claims refunds, appeals an approval |
| **Verifier** | Address registered in `VerifierRegistry` with sufficient free stake | Commits and reveals votes on assigned rounds |
| **Admin** | Address set at contract initialization | Updates protocol parameters and the token allow-list. **Cannot** move escrowed funds, cast votes, choose panels, or set outcomes |
| **Treasury** | Address set at initialization | Receives slashed stake and forfeited appeal bonds |
| **Backend / Indexer** | No on-chain role | Read-only with respect to contracts. Holds no keys that contracts trust |

---

## 2. Protocol parameters

Parameters are stored on-chain and changeable only by the admin. Changes apply to rounds
**opened after** the change; each round snapshots the parameters it needs at creation.

| Parameter | Contract | MVP default | Notes |
|---|---|---|---|
| `panel_size` | Verification | 5 | Verifiers selected per round |
| `quorum` | Verification | 4 | Minimum valid reveals for a decisive outcome |
| `approval_threshold_bps` | Verification | 6000 (60 %) | Share of valid reveals needed for Approve **or** Reject |
| `commit_period_secs` | Verification | 300 (demo) | Production suggestion: 3 days |
| `reveal_period_secs` | Verification | 300 (demo) | Production suggestion: 2 days |
| `appeal_window_secs` | Verification | 300 (demo) | Production suggestion: 3 days |
| `appeal_panel_size` | Verification | 5 | Appeal panel excludes the original panel |
| `appeal_bond` | Verification | 0 (demo) | Paid in the stake token; refunded if the appeal overturns |
| `no_show_slash_bps` | Verification | 1000 (10 %) | Applied to the stake locked for that round |
| `min_stake` | Registry | 100 tokens | Minimum free stake to be eligible |
| `lock_amount` | Registry | 100 tokens | Stake locked per assignment |
| `unbonding_secs` | Registry | 60 (demo) | Delay between unstake request and withdrawal |
| `max_attempts` | Escrow | 3 | Verification rounds per milestone before it fails |
| `allowed_tokens` | Escrow | admin-curated | SEP-41 tokens accepted for funding |

---

## 3. Project state machine (`ProjectEscrow`)

```
               deposit (total < budget)
                 ┌──────┐
                 ▼      │
 create ──► FUNDING ────┘
               │  ├── deposit makes total == budget ──────────► ACTIVE
               │  ├── creator cancel ─────────────────────────► CANCELLED
               │  └── funding_deadline passed (anyone expire) ─► CANCELLED
 ACTIVE ──── last milestone PAID ─────────────────────────────► COMPLETED
 ACTIVE ──── milestone FAILED (attempts / deadline) ─────────► FAILED
 ACTIVE ──── creator cancel (no milestone in verification) ──► CANCELLED
```

* Deposits are accepted only in `FUNDING`, and never beyond `budget` (excess reverts).
* `budget = Σ milestone.amount`, fixed at creation. Milestone amounts must be > 0,
  deadlines strictly increasing and after `funding_deadline`. 1 ≤ milestones ≤ 10.
* In `CANCELLED` and `FAILED`, the contract snapshots `refund_pool = balance` (funds not
  yet released) and each funder may claim exactly once:
  `refund = contribution × refund_pool ÷ total_funded` (integer division; dust of at
  most `funders − 1` units remains in the contract and is documented, not swept).
* `COMPLETED`, `CANCELLED`, `FAILED` are terminal.

## 4. Milestone state machine (`ProjectEscrow`)

Milestones are processed **sequentially**: milestone *i* may be submitted only when
milestone *i − 1* is `PAID`.

```
 PENDING ── submit_for_verification ──► IN_VERIFICATION
 IN_VERIFICATION ── settle (decision Approved & final) ──► PAID   (transfer exactly once)
 IN_VERIFICATION ── settle (decision not approved & final)
        ├── attempts < max_attempts ──► PENDING  (resubmission allowed)
        └── attempts ≥ max_attempts ──► FAILED   (project → FAILED)
 PENDING ── deadline passed (anyone expire_milestone) ──► FAILED (project → FAILED)
```

`submit_for_verification(project, index, evidence_hash)` preconditions (Rule 1):
creator auth · project `ACTIVE` · milestone `PENDING` · previous milestone `PAID` ·
`now ≤ milestone.deadline` · `attempts < max_attempts` · escrow balance ≥ milestone amount.
The escrow then calls `Verification.open_round`, which only the escrow may call.

`settle_milestone` may be called by anyone. It reads the decision from the Verification
contract (never from the caller) and is a no-op-revert unless the decision is final.
The milestone is marked `PAID` **before** the token transfer, and `PAID` is terminal, so a
second call reverts with `InvalidState` (double-payment prevention).

Note: the milestone deadline gates *submission*, not settlement; a round opened before
the deadline may finish after it.

## 5. Verification round state machine (`Verification`)

```
 open_round ──► COMMIT ──(now > commit_deadline)──► REVEAL ──(now > reveal_deadline
                                                              or all committed revealed)──► finalize ──► FINALIZED(outcome)
```

Phases are derived from time, not from transactions, so no one has to "advance" them:

* `COMMIT`: `opened_at ≤ now ≤ commit_deadline`
* `REVEAL`: `commit_deadline < now ≤ reveal_deadline`
* finalizable: `now > reveal_deadline`, **or** during `REVEAL` once every verifier who
  committed has revealed (early finalization). Anyone may call `finalize_round`.

### 5.1 Panel selection

At `open_round` the contract asks the registry for verifiers that are active and have
free stake ≥ `lock_amount`, removes the project creator (and, for appeals, every member
of the original panel), shuffles the remainder with Soroban's on-chain PRNG
(`env.prng()`), and takes the first `panel_size`. Each selected verifier gets
`lock_amount` locked. If fewer than `panel_size` are eligible, `open_round` reverts with
`NotEnoughVerifiers`. The panel is stored on-chain and emitted in the `round_opened`
event, so every assignment is auditable. See the threat model for PRNG limitations — this
is **not** a trustless randomness beacon.

### 5.2 Commit-reveal (Rules 2–4)

```
commitment = SHA-256( "VERIDIA-V1" ‖ round_id (u64, big-endian) ‖ XDR(ScVal::Address(voter))
                      ‖ vote (u8: 1 = Approve, 2 = Reject) ‖ salt (32 bytes) )
```

* The **evidence hash is bound to the round** at `open_round` and stored immutably in the
  round. A verifier's vote therefore refers to exactly one evidence version.
* Binding `round_id` prevents replaying a commitment in another round; binding the voter
  address prevents copying another verifier's commitment and replaying their reveal.
* `commit` — panel member only, `COMMIT` phase only, once per verifier (`AlreadyCommitted`).
* `reveal(vote, salt)` — `REVEAL` phase only, must have committed, once
  (`AlreadyRevealed`); the recomputed hash must equal the stored commitment
  (`CommitmentMismatch`). Votes other than 1 or 2 revert (`InvalidVote`).

### 5.3 Outcome rules (Rules 5–7)

Let `A` = valid Approve reveals, `R` = valid Reject reveals, `N = A + R`.

| Condition (evaluated in order) | Outcome |
|---|---|
| `N < quorum` | `NoQuorum` |
| `A × 10000 ≥ approval_threshold_bps × N` | `Approved` |
| `R × 10000 ≥ approval_threshold_bps × N` | `Rejected` |
| otherwise (includes exact ties such as 2–2) | `Inconclusive` |

`approval_threshold_bps` must be > 5000 so that Approved and Rejected are mutually
exclusive. Missing reveals simply do not count (Rule 5): after `reveal_deadline` the round
is always finalizable.

`NoQuorum` and `Inconclusive` are **failed rounds**: they are final immediately (there is
nothing to appeal), consume one milestone attempt, and the milestone returns to `PENDING`
(or `FAILED` at `max_attempts`).

### 5.4 Stake consequences (Rule 10)

Penalties apply only to objectively verifiable, on-chain misconduct:

| Behaviour | Consequence |
|---|---|
| Assigned, did not commit | slash `no_show_slash_bps` of the locked amount |
| Committed, did not reveal before `reveal_deadline` | slash `no_show_slash_bps` of the locked amount |
| Revealed (any vote, including minority) | **no penalty**; lock released |

Voting with the minority is never penalised. On finalization every panel member's lock is
released (minus any slash). Slashed tokens go to the treasury.

## 6. Decisions, appeals and finality (Rules 8–9)

Every attempt has exactly one *original* round. The escrow stores that round's id on the
milestone and reads the **decision** via `Verification.get_decision(round_id)`, which
derives `(final, outcome)` from the original round and its optional appeal round.

```
 round FINALIZED
   ├── NoQuorum / Inconclusive ──► decision FINAL (not approved)
   └── Approved / Rejected ──► APPEALABLE until finalized_at + appeal_window_secs
          ├── window passes without appeal ──► FINAL (round outcome)
          └── appeal filed ──► UNDER_APPEAL ──► appeal round finalized
                    ├── appeal outcome Approved / Rejected ──► FINAL (appeal outcome)
                    └── appeal NoQuorum / Inconclusive ──► FINAL (original outcome stands)
```

* **One appeal per milestone attempt.** Appeal rounds are not themselves appealable.
* Who may appeal: the **creator** may appeal `Rejected`; any **funder** (recorded
  contribution > 0, checked against the escrow) may appeal `Approved`.
* Filing requires `appeal_bond` in the stake token. The bond is returned if the appeal
  round's outcome differs from the original outcome, otherwise it goes to the treasury.
* The appeal round binds the **same evidence hash** as the original round. New evidence
  requires a new attempt, not an appeal.
* A decision is never overwritten in place: the original round keeps its outcome; the
  appeal round is a separate record and the decision stores both `round_id` and
  `appeal_round_id`. The final outcome is derived from both by the rules above.
* Funds are released only when `get_decision` reports `final = true` and
  `outcome = Approved` (Rule 8).

## 7. Error and edge cases

| Situation | Behaviour |
|---|---|
| Deposit after `FUNDING` or beyond budget | revert |
| Submit when previous milestone not paid | revert `InvalidState` |
| Settle before decision final | revert `NotFinal` |
| Settle twice | revert `InvalidState` |
| Vote by non-panel address | revert `NotOnPanel` |
| Commit after `commit_deadline` / reveal outside `REVEAL` | revert `WrongPhase` |
| Verifier unstake while locked | only free (unlocked, not unbonding) stake can be requested |
| Admin changes parameters mid-round | no effect on the open round (snapshot) |

## 8. Assumptions made where the brief was silent

1. Projects must be **fully funded** before any milestone can be verified (safest reading
   of Rule 1; avoids partially funded projects consuming verifier work).
2. Milestones are sequential.
3. Evidence for one attempt is a single file; the on-chain hash is its SHA-256. Multiple
   files can be bundled into an archive.
4. Failed rounds consume an attempt so that a creator cannot spam rounds.
5. Appeal bonds and stakes use the registry's stake token, independent of project tokens.
6. Refund rounding dust stays in the escrow contract.
