//! Verification: verification rounds, panel selection, commit-reveal voting, quorum
//! outcomes, one appeal per milestone attempt, and final decisions read by the escrow.
//!
//! See docs/protocol-rules.md §5–§6 for the normative rules implemented here.
#![no_std]

use soroban_sdk::{
    contract, contracterror, contractevent, contractimpl, contracttype, panic_with_error, token,
    xdr::ToXdr, Address, Bytes, BytesN, Env, Vec,
};
use veridia_common::{
    bump_instance, Conduct, Decision, EscrowClient, Outcome, RegistryClient, BPS, PERSISTENT_BUMP,
    PERSISTENT_THRESHOLD,
};

pub const VOTE_APPROVE: u32 = 1;
pub const VOTE_REJECT: u32 = 2;
pub const COMMITMENT_DOMAIN: &[u8] = b"VERIDIA-V1";
pub const MAX_PANEL_SIZE: u32 = 21;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    AlreadyInitialized = 1,
    NotInitialized = 2,
    InvalidParams = 3,
    RoundNotFound = 4,
    NotEnoughVerifiers = 5,
    WrongPhase = 6,
    NotOnPanel = 7,
    AlreadyCommitted = 8,
    NotCommitted = 9,
    AlreadyRevealed = 10,
    CommitmentMismatch = 11,
    InvalidVote = 12,
    AlreadyFinalized = 13,
    NotFinalizable = 14,
    NotAppealable = 15,
    AlreadyAppealed = 16,
    AppealWindowClosed = 17,
    NotAuthorizedToAppeal = 18,
    NotOriginalRound = 19,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct VerificationParams {
    pub panel_size: u32,
    pub quorum: u32,
    pub approval_threshold_bps: u32,
    pub commit_period_secs: u64,
    pub reveal_period_secs: u64,
    pub appeal_window_secs: u64,
    pub appeal_panel_size: u32,
    pub appeal_bond: i128,
    pub no_show_slash_bps: u32,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Config {
    pub admin: Address,
    pub escrow: Address,
    pub registry: Address,
    pub treasury: Address,
    pub stake_token: Address,
    pub params: VerificationParams,
}

#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum RoundKind {
    Original = 0,
    Appeal = 1,
}

#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Phase {
    Commit = 0,
    Reveal = 1,
    Finalizable = 2,
    Finalized = 3,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Round {
    pub id: u64,
    pub kind: RoundKind,
    /// For appeal rounds: the original round being appealed.
    pub parent_round_id: Option<u64>,
    pub project_id: u64,
    pub milestone: u32,
    pub attempt: u32,
    /// Immutable: the exact evidence version this round votes on.
    pub evidence_hash: BytesN<32>,
    pub creator: Address,
    pub panel: Vec<Address>,
    pub opened_at: u64,
    pub commit_deadline: u64,
    pub reveal_deadline: u64,
    // Parameter snapshot (admin changes never affect an open round).
    pub quorum: u32,
    pub approval_threshold_bps: u32,
    pub no_show_slash_bps: u32,
    pub appeal_window_secs: u64,
    // Tallies.
    pub commits: u32,
    pub reveals: u32,
    pub approvals: u32,
    pub rejections: u32,
    // Result.
    pub finalized: bool,
    pub outcome: Outcome,
    pub finalized_at: u64,
    // Appeal (original rounds only).
    pub appeal_round_id: Option<u64>,
    pub appellant: Option<Address>,
    pub appeal_bond: i128,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct VoteRecord {
    pub commitment: BytesN<32>,
    pub committed_at: u64,
    pub revealed: bool,
    /// 0 until revealed.
    pub vote: u32,
}

#[contracttype]
#[derive(Clone)]
enum DataKey {
    Config,
    RoundCount,
    Round(u64),
    Vote(u64, Address),
}

// ---------------------------------------------------------------- events

#[contractevent]
pub struct RoundOpened {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub project_id: u64,
    pub milestone: u32,
    pub attempt: u32,
    pub kind: RoundKind,
    pub parent_round_id: Option<u64>,
    pub evidence_hash: BytesN<32>,
    pub panel: Vec<Address>,
    pub commit_deadline: u64,
    pub reveal_deadline: u64,
}

#[contractevent]
pub struct VoteCommitted {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub voter: Address,
    pub commitment: BytesN<32>,
}

#[contractevent]
pub struct VoteRevealed {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub voter: Address,
    pub vote: u32,
}

#[contractevent]
pub struct RoundFinalized {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub project_id: u64,
    pub milestone: u32,
    pub outcome: Outcome,
    pub approvals: u32,
    pub rejections: u32,
    pub reveals: u32,
    pub appealable_until: u64,
}

#[contractevent]
pub struct AppealFiled {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub appeal_round_id: u64,
    pub appellant: Address,
    pub bond: i128,
}

#[contractevent]
pub struct AppealResolved {
    #[topic]
    pub round_id: u64,
    #[topic]
    pub appeal_round_id: u64,
    pub appeal_outcome: Outcome,
    pub final_outcome: Outcome,
    pub overturned: bool,
}

#[contractevent]
pub struct VerificationParamsUpdated {
    pub params: VerificationParams,
}

// ---------------------------------------------------------------- helpers

fn config(env: &Env) -> Config {
    env.storage()
        .instance()
        .get(&DataKey::Config)
        .unwrap_or_else(|| panic_with_error!(env, Error::NotInitialized))
}

fn validate_params(env: &Env, p: &VerificationParams) {
    let ok = p.panel_size >= 1
        && p.panel_size <= MAX_PANEL_SIZE
        && p.appeal_panel_size >= 1
        && p.appeal_panel_size <= MAX_PANEL_SIZE
        && p.quorum >= 1
        && p.quorum <= p.panel_size
        && p.quorum <= p.appeal_panel_size
        && p.approval_threshold_bps > BPS / 2
        && p.approval_threshold_bps <= BPS
        && p.no_show_slash_bps <= BPS
        && p.commit_period_secs > 0
        && p.reveal_period_secs > 0
        && p.appeal_window_secs > 0
        && p.appeal_bond >= 0;
    if !ok {
        panic_with_error!(env, Error::InvalidParams);
    }
}

fn load_round(env: &Env, id: u64) -> Round {
    let key = DataKey::Round(id);
    let r: Round = env
        .storage()
        .persistent()
        .get(&key)
        .unwrap_or_else(|| panic_with_error!(env, Error::RoundNotFound));
    env.storage()
        .persistent()
        .extend_ttl(&key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
    r
}

fn save_round(env: &Env, r: &Round) {
    let key = DataKey::Round(r.id);
    env.storage().persistent().set(&key, r);
    env.storage()
        .persistent()
        .extend_ttl(&key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
}

fn load_vote(env: &Env, round_id: u64, voter: &Address) -> Option<VoteRecord> {
    env.storage()
        .persistent()
        .get(&DataKey::Vote(round_id, voter.clone()))
}

fn save_vote(env: &Env, round_id: u64, voter: &Address, v: &VoteRecord) {
    let key = DataKey::Vote(round_id, voter.clone());
    env.storage().persistent().set(&key, v);
    env.storage()
        .persistent()
        .extend_ttl(&key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
}

fn phase_of(env: &Env, r: &Round) -> Phase {
    let now = env.ledger().timestamp();
    if r.finalized {
        Phase::Finalized
    } else if now <= r.commit_deadline {
        Phase::Commit
    } else if now <= r.reveal_deadline && r.reveals < r.commits {
        Phase::Reveal
    } else {
        // Reveal deadline passed, or every committed vote is already revealed.
        Phase::Finalizable
    }
}

/// Deterministic outcome rule (protocol-rules §5.3).
pub fn tally(approvals: u32, rejections: u32, quorum: u32, threshold_bps: u32) -> Outcome {
    let n = approvals + rejections;
    if n < quorum {
        return Outcome::NoQuorum;
    }
    let n = n as u64;
    let t = threshold_bps as u64;
    if approvals as u64 * BPS as u64 >= t * n {
        Outcome::Approved
    } else if rejections as u64 * BPS as u64 >= t * n {
        Outcome::Rejected
    } else {
        Outcome::Inconclusive
    }
}

fn commitment_of(env: &Env, round_id: u64, voter: &Address, vote: u32, salt: &BytesN<32>) -> BytesN<32> {
    let mut b = Bytes::from_slice(env, COMMITMENT_DOMAIN);
    b.extend_from_array(&round_id.to_be_bytes());
    b.append(&voter.clone().to_xdr(env));
    b.push_back(vote as u8);
    b.extend_from_array(&salt.to_array());
    env.crypto().sha256(&b).to_bytes()
}

fn contains(v: &Vec<Address>, a: &Address) -> bool {
    v.iter().any(|x| x == *a)
}

fn decision_of(env: &Env, r: &Round) -> Decision {
    let mut d = Decision {
        round_id: r.id,
        is_final: false,
        outcome: Outcome::Pending,
        under_appeal: false,
        appealable_until: 0,
        appeal_round_id: r.appeal_round_id,
    };
    if !r.finalized {
        return d;
    }
    d.outcome = r.outcome;
    if !r.outcome.is_decisive() {
        // NoQuorum / Inconclusive: failed round, final immediately, nothing to appeal.
        d.is_final = true;
        return d;
    }
    d.appealable_until = r.finalized_at + r.appeal_window_secs;
    match r.appeal_round_id {
        Some(appeal_id) => {
            let a = load_round(env, appeal_id);
            if a.finalized {
                d.is_final = true;
                if a.outcome.is_decisive() {
                    d.outcome = a.outcome;
                }
            } else {
                d.under_appeal = true;
            }
        }
        None => {
            d.is_final = env.ledger().timestamp() > d.appealable_until;
        }
    }
    d
}

// ---------------------------------------------------------------- contract

#[contract]
pub struct Verification;

#[contractimpl]
impl Verification {
    pub fn init(
        env: Env,
        admin: Address,
        escrow: Address,
        registry: Address,
        treasury: Address,
        params: VerificationParams,
    ) {
        if env.storage().instance().has(&DataKey::Config) {
            panic_with_error!(&env, Error::AlreadyInitialized);
        }
        admin.require_auth();
        validate_params(&env, &params);
        let stake_token = RegistryClient::new(&env, &registry).stake_token();
        env.storage().instance().set(
            &DataKey::Config,
            &Config {
                admin,
                escrow,
                registry,
                treasury,
                stake_token,
                params,
            },
        );
        env.storage().instance().set(&DataKey::RoundCount, &0u64);
        bump_instance(&env);
    }

    pub fn set_params(env: Env, params: VerificationParams) {
        let mut cfg = config(&env);
        cfg.admin.require_auth();
        validate_params(&env, &params);
        cfg.params = params.clone();
        env.storage().instance().set(&DataKey::Config, &cfg);
        bump_instance(&env);
        VerificationParamsUpdated { params }.publish(&env);
    }

    /// Open the original round for a milestone attempt. Only callable by the escrow,
    /// which has already validated funding and milestone state.
    pub fn open_round(
        env: Env,
        project_id: u64,
        milestone: u32,
        attempt: u32,
        evidence_hash: BytesN<32>,
        creator: Address,
    ) -> u64 {
        let cfg = config(&env);
        cfg.escrow.require_auth();
        let mut excluded = Vec::new(&env);
        excluded.push_back(creator.clone());
        let round = Self::create_round(
            &env,
            &cfg,
            RoundKind::Original,
            None,
            project_id,
            milestone,
            attempt,
            evidence_hash,
            creator,
            &excluded,
            cfg.params.panel_size,
        );
        round.id
    }

    pub fn commit(env: Env, voter: Address, round_id: u64, commitment: BytesN<32>) {
        voter.require_auth();
        let mut r = load_round(&env, round_id);
        if phase_of(&env, &r) != Phase::Commit {
            panic_with_error!(&env, Error::WrongPhase);
        }
        if !contains(&r.panel, &voter) {
            panic_with_error!(&env, Error::NotOnPanel);
        }
        if load_vote(&env, round_id, &voter).is_some() {
            panic_with_error!(&env, Error::AlreadyCommitted);
        }
        save_vote(
            &env,
            round_id,
            &voter,
            &VoteRecord {
                commitment: commitment.clone(),
                committed_at: env.ledger().timestamp(),
                revealed: false,
                vote: 0,
            },
        );
        r.commits += 1;
        save_round(&env, &r);
        VoteCommitted {
            round_id,
            voter,
            commitment,
        }
        .publish(&env);
    }

    pub fn reveal(env: Env, voter: Address, round_id: u64, vote: u32, salt: BytesN<32>) {
        voter.require_auth();
        let mut r = load_round(&env, round_id);
        if phase_of(&env, &r) != Phase::Reveal {
            panic_with_error!(&env, Error::WrongPhase);
        }
        if vote != VOTE_APPROVE && vote != VOTE_REJECT {
            panic_with_error!(&env, Error::InvalidVote);
        }
        let mut rec = load_vote(&env, round_id, &voter)
            .unwrap_or_else(|| panic_with_error!(&env, Error::NotCommitted));
        if rec.revealed {
            panic_with_error!(&env, Error::AlreadyRevealed);
        }
        if commitment_of(&env, round_id, &voter, vote, &salt) != rec.commitment {
            panic_with_error!(&env, Error::CommitmentMismatch);
        }
        rec.revealed = true;
        rec.vote = vote;
        save_vote(&env, round_id, &voter, &rec);
        r.reveals += 1;
        if vote == VOTE_APPROVE {
            r.approvals += 1;
        } else {
            r.rejections += 1;
        }
        save_round(&env, &r);
        VoteRevealed {
            round_id,
            voter,
            vote,
        }
        .publish(&env);
    }

    /// Anyone may finalize once the round is finalizable. Releases every panel lock,
    /// slashing only verifiable no-shows, and resolves appeal bonds for appeal rounds.
    pub fn finalize_round(env: Env, round_id: u64) -> Outcome {
        let cfg = config(&env);
        let mut r = load_round(&env, round_id);
        match phase_of(&env, &r) {
            Phase::Finalized => panic_with_error!(&env, Error::AlreadyFinalized),
            Phase::Commit | Phase::Reveal => panic_with_error!(&env, Error::NotFinalizable),
            Phase::Finalizable => {}
        }
        let outcome = tally(r.approvals, r.rejections, r.quorum, r.approval_threshold_bps);
        let now = env.ledger().timestamp();
        r.finalized = true;
        r.outcome = outcome;
        r.finalized_at = now;
        save_round(&env, &r);

        let registry = RegistryClient::new(&env, &cfg.registry);
        for member in r.panel.iter() {
            let conduct = match load_vote(&env, round_id, &member) {
                None => Conduct::NoCommit,
                Some(v) if !v.revealed => Conduct::NoReveal,
                Some(_) => Conduct::Revealed,
            };
            registry.release(&member, &round_id, &conduct, &r.no_show_slash_bps);
        }

        let appealable_until = if r.kind == RoundKind::Original && outcome.is_decisive() {
            now + r.appeal_window_secs
        } else {
            0
        };
        RoundFinalized {
            round_id,
            project_id: r.project_id,
            milestone: r.milestone,
            outcome,
            approvals: r.approvals,
            rejections: r.rejections,
            reveals: r.reveals,
            appealable_until,
        }
        .publish(&env);

        if r.kind == RoundKind::Appeal {
            let parent_id = r.parent_round_id.unwrap();
            let parent = load_round(&env, parent_id);
            let overturned = outcome.is_decisive() && outcome != parent.outcome;
            let final_outcome = if outcome.is_decisive() {
                outcome
            } else {
                parent.outcome
            };
            if parent.appeal_bond > 0 {
                let to = if overturned {
                    parent.appellant.clone().unwrap()
                } else {
                    cfg.treasury.clone()
                };
                token::Client::new(&env, &cfg.stake_token).transfer(
                    &env.current_contract_address(),
                    &to,
                    &parent.appeal_bond,
                );
            }
            AppealResolved {
                round_id: parent_id,
                appeal_round_id: round_id,
                appeal_outcome: outcome,
                final_outcome,
                overturned,
            }
            .publish(&env);
        }
        outcome
    }

    /// File the single appeal allowed for an original round with a decisive outcome.
    /// Creator may appeal `Rejected`; a funder of the project may appeal `Approved`.
    pub fn appeal(env: Env, appellant: Address, round_id: u64) -> u64 {
        appellant.require_auth();
        let cfg = config(&env);
        let mut r = load_round(&env, round_id);
        if r.kind != RoundKind::Original || !r.finalized || !r.outcome.is_decisive() {
            panic_with_error!(&env, Error::NotAppealable);
        }
        if r.appeal_round_id.is_some() {
            panic_with_error!(&env, Error::AlreadyAppealed);
        }
        if env.ledger().timestamp() > r.finalized_at + r.appeal_window_secs {
            panic_with_error!(&env, Error::AppealWindowClosed);
        }
        let allowed = match r.outcome {
            Outcome::Rejected => appellant == r.creator,
            Outcome::Approved => {
                EscrowClient::new(&env, &cfg.escrow).contribution_of(&r.project_id, &appellant) > 0
            }
            _ => false,
        };
        if !allowed {
            panic_with_error!(&env, Error::NotAuthorizedToAppeal);
        }
        let bond = cfg.params.appeal_bond;
        if bond > 0 {
            token::Client::new(&env, &cfg.stake_token).transfer(
                &appellant,
                &env.current_contract_address(),
                &bond,
            );
        }
        let mut excluded = r.panel.clone();
        excluded.push_back(r.creator.clone());
        let appeal_round = Self::create_round(
            &env,
            &cfg,
            RoundKind::Appeal,
            Some(round_id),
            r.project_id,
            r.milestone,
            r.attempt,
            r.evidence_hash.clone(),
            r.creator.clone(),
            &excluded,
            cfg.params.appeal_panel_size,
        );
        r.appeal_round_id = Some(appeal_round.id);
        r.appellant = Some(appellant.clone());
        r.appeal_bond = bond;
        save_round(&env, &r);
        AppealFiled {
            round_id,
            appeal_round_id: appeal_round.id,
            appellant,
            bond,
        }
        .publish(&env);
        appeal_round.id
    }

    // ------------------------------------------------------------ views

    pub fn get_decision(env: Env, round_id: u64) -> Decision {
        let r = load_round(&env, round_id);
        if r.kind != RoundKind::Original {
            panic_with_error!(&env, Error::NotOriginalRound);
        }
        decision_of(&env, &r)
    }

    pub fn get_round(env: Env, round_id: u64) -> Round {
        load_round(&env, round_id)
    }

    pub fn get_phase(env: Env, round_id: u64) -> Phase {
        phase_of(&env, &load_round(&env, round_id))
    }

    pub fn get_vote(env: Env, round_id: u64, voter: Address) -> Option<VoteRecord> {
        load_vote(&env, round_id, &voter)
    }

    pub fn round_count(env: Env) -> u64 {
        env.storage()
            .instance()
            .get(&DataKey::RoundCount)
            .unwrap_or(0)
    }

    pub fn get_config(env: Env) -> Config {
        config(&env)
    }

    /// Pure helper so clients can check their commitment encoding against the contract.
    pub fn compute_commitment(
        env: Env,
        round_id: u64,
        voter: Address,
        vote: u32,
        salt: BytesN<32>,
    ) -> BytesN<32> {
        commitment_of(&env, round_id, &voter, vote, &salt)
    }
}

impl Verification {
    #[allow(clippy::too_many_arguments)]
    fn create_round(
        env: &Env,
        cfg: &Config,
        kind: RoundKind,
        parent_round_id: Option<u64>,
        project_id: u64,
        milestone: u32,
        attempt: u32,
        evidence_hash: BytesN<32>,
        creator: Address,
        excluded: &Vec<Address>,
        panel_size: u32,
    ) -> Round {
        let registry = RegistryClient::new(env, &cfg.registry);
        let mut pool = Vec::new(env);
        for a in registry.eligible().iter() {
            if !contains(excluded, &a) {
                pool.push_back(a);
            }
        }
        if pool.len() < panel_size {
            panic_with_error!(env, Error::NotEnoughVerifiers);
        }
        // NOTE: Soroban PRNG is not manipulation-resistant; see docs/threat-model.md T8.
        env.prng().shuffle(&mut pool);
        let panel = pool.slice(0..panel_size);

        let id = Self::round_count(env.clone()) + 1;
        env.storage().instance().set(&DataKey::RoundCount, &id);
        bump_instance(env);
        for member in panel.iter() {
            registry.lock(&member, &id);
        }

        let now = env.ledger().timestamp();
        let p = &cfg.params;
        let r = Round {
            id,
            kind,
            parent_round_id,
            project_id,
            milestone,
            attempt,
            evidence_hash,
            creator,
            panel,
            opened_at: now,
            commit_deadline: now + p.commit_period_secs,
            reveal_deadline: now + p.commit_period_secs + p.reveal_period_secs,
            quorum: p.quorum,
            approval_threshold_bps: p.approval_threshold_bps,
            no_show_slash_bps: p.no_show_slash_bps,
            appeal_window_secs: p.appeal_window_secs,
            commits: 0,
            reveals: 0,
            approvals: 0,
            rejections: 0,
            finalized: false,
            outcome: Outcome::Pending,
            finalized_at: 0,
            appeal_round_id: None,
            appellant: None,
            appeal_bond: 0,
        };
        save_round(env, &r);
        RoundOpened {
            round_id: id,
            project_id,
            milestone,
            attempt,
            kind,
            parent_round_id,
            evidence_hash: r.evidence_hash.clone(),
            panel: r.panel.clone(),
            commit_deadline: r.commit_deadline,
            reveal_deadline: r.reveal_deadline,
        }
        .publish(env);
        r
    }
}

#[cfg(test)]
mod test;
