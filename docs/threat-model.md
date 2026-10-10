# Veridia Threat Model (MVP)

> **Status: unaudited.** These contracts have not been reviewed by an independent
> security auditor. Do not use them with real value.

## 1. Assets

1. Escrowed project funds (per-project balances in `ProjectEscrow`).
2. Verifier stake and appeal bonds (`VerifierRegistry`, `Verification`).
3. Integrity of milestone decisions.
4. Confidential evidence files.
5. Verifier vote secrets (salts) before reveal.

## 2. Trust assumptions

| Component | Trusted for | Not trusted for |
|---|---|---|
| Soroban host / Stellar consensus | Correct execution, ordering, timestamps (± validator drift) | Unbiased randomness |
| Admin key | Setting parameters and the token allow-list, honestly | Funds or outcomes (contracts give it no such power) |
| SEP-41 token contracts | Correct `transfer` semantics | — only allow-listed tokens can fund projects |
| Backend / DB | Availability of metadata and evidence; access control on evidence | Balances, outcomes (always re-derivable from chain) |
| Object storage | Availability and confidentiality | Integrity (checked by hash) |
| Verifiers (individually) | Nothing | Assumed rational; honest majority of a panel is the security assumption |

## 3. Threats and mitigations

| # | Threat | Mitigation | Residual risk |
|---|---|---|---|
| T1 | Backend declares a milestone approved | No contract entrypoint accepts an approval from an off-chain party; escrow reads decisions only from the Verification contract address stored at init | Admin could redeploy & re-point a *new* deployment; existing deployments are immutable in wiring |
| T2 | Double payment of a milestone | Status set to `Paid` before transfer; `Paid` is terminal; tests cover repeat calls | — |
| T3 | Spending beyond balance | Per-project accounting (`funded − released`); deposits capped at budget; settlement checks balance | Fee-on-transfer / rebasing tokens break accounting → allow-list |
| T4 | Unauthorized calls to `open_round`, `lock`, `slash` | `require_auth` on the stored peer contract address | — |
| T5 | Vote copying / front-running | Commit-reveal; commitment binds round id **and** voter address | Reveals are public once submitted; late revealers can see earlier reveals (no effect on their committed vote) |
| T6 | Commitment brute force | 32-byte random salt (Web Crypto) | Loss of salt ⇒ cannot reveal ⇒ slashed. UI offers backup download |
| T7 | Round blocked by non-revealers | Phases are time-based; anyone can finalize after `reveal_deadline` | — |
| T8 | Panel manipulation | On-chain PRNG selection at `open_round`; panel emitted in events; creator excluded | **Soroban PRNG is seeded from ledger data and is not manipulation-proof.** A validator, or a creator who times submissions across ledgers, may bias selection. Sybil verifiers (one party, many addresses) are bounded only by stake cost. Production needs a VRF/drand-style beacon and identity/attestation |
| T9 | Bribery / collusion of a panel majority | Stake at risk only for no-shows; appeal with a disjoint panel | **Not mitigated economically.** Honest-majority assumption. No slashing for "wrong" votes by design (Rule 10) |
| T10 | Lazy voting (always Approve) | Not detectable on-chain | Reputation and rewards are future work |
| T11 | Verifier exits stake right before misconduct | Locked stake cannot be unstaked; unbonding delay | Slash is a fraction of `lock_amount`, not the whole stake |
| T12 | Appeal spam / griefing | One appeal per attempt; only creator (on Reject) or funders (on Approve); optional bond | Default demo bond is 0 |
| T13 | Evidence swapped after voting | Evidence hash immutable in round; server and browser re-hash on download | A valid hash proves the **file is unchanged, not that its content is true** |
| T14 | Evidence leakage | Private bucket, no public URLs; server ACL derived from indexed panel membership | Panel members can exfiltrate what they view. ACL depends on indexer freshness (fails closed) |
| T15 | Malicious token in project | Admin allow-list of tokens | Admin error |
| T16 | Session theft / CSRF | HTTP-only, SameSite=Lax cookie; single-use, expiring nonces; state-changing API uses JSON bodies | XSS would expose API (not keys or salts on other origins) |
| T17 | Indexer replays / duplicates | Unique RPC event id; projections idempotent | RPC event retention window (≈7 days on testnet) — longer outages require state reconciliation (implemented for projects/rounds) |
| T18 | Timestamp manipulation | Periods are minutes-to-days; validator drift is seconds | Very short demo periods are more sensitive |
| T19 | Refund rounding | Integer division, dust stays in contract | Up to `funders − 1` units per project remain locked |
| T21 | Panel selection vs. transaction footprint | The PRNG seed differs between simulation and execution, so the selected panel differs too. All verifier records live in one storage entry and locks are keyed by round id, making the footprint selection-independent | Registry size is bounded by the max ledger entry size (≈ a few hundred verifiers). Two rounds opened in the same ledger may race for the same round id; the loser fails and must be resubmitted |
| T22 | Simulation reveals the would-be panel | A creator can simulate `submit_for_verification` repeatedly to preview candidate panels, but the executed panel uses a different seed | Combined with T8, a determined creator may still time submissions |
| T20 | Storage TTL expiry (Soroban state archival) | Contracts extend TTL on every write/read of persistent entries | Long-idle projects may need `restore` operations; not automated in MVP |

## 4. Economic assumptions (to revisit before production)

* Verifiers are **not paid** in the MVP. Without rewards, participation relies on altruism
  or off-chain agreements; this is the largest gap for a real deployment.
* `lock_amount` and slashing are sized for griefing resistance, not to make bribery
  unprofitable. Bribery cost ≈ cost of convincing `ceil(0.6 × quorum)` verifiers.
* Panel of 5 with quorum 4 tolerates one no-show; two no-shows cause `NoQuorum` and burn a
  milestone attempt — creators bear liveness risk.

## 5. Known limitations / future work

* No verifier rewards, reputation, or identity attestation.
* Randomness is not secure (see T8).
* Single evidence file per attempt.
* No upgrade mechanism for contracts (intentional for the MVP: immutability simplifies
  reasoning, but bugs require redeployment and migration).
* No automated TTL restoration for archived entries.
