//! ProjectEscrow: project creation, funding, sequential milestone verification requests,
//! settlement driven exclusively by the Verification contract's final decision,
//! cancellation and pro-rata refunds.
//!
//! See docs/protocol-rules.md §3–§4 for the normative rules implemented here.
#![no_std]

use soroban_sdk::{
    contract, contracterror, contractevent, contractimpl, contracttype, panic_with_error, token,
    Address, BytesN, Env, Vec,
};
use veridia_common::{
    bump_instance, Outcome, VerificationClient, PERSISTENT_BUMP, PERSISTENT_THRESHOLD,
};

pub const MAX_MILESTONES: u32 = 10;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    AlreadyInitialized = 1,
    NotInitialized = 2,
    InvalidParams = 3,
    TokenNotAllowed = 4,
    InvalidMilestones = 5,
    InvalidDeadline = 6,
    ProjectNotFound = 7,
    MilestoneNotFound = 8,
    InvalidState = 9,
    InvalidAmount = 10,
    ExceedsBudget = 11,
    FundingClosed = 12,
    DeadlineNotPassed = 13,
    DeadlinePassed = 14,
    NotSequential = 15,
    MaxAttemptsReached = 16,
    InsufficientBalance = 17,
    NotFinal = 18,
    NothingToRefund = 19,
    AlreadyRefunded = 20,
}

#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum ProjectStatus {
    Funding = 0,
    Active = 1,
    Completed = 2,
    Cancelled = 3,
    Failed = 4,
}

#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum MilestoneStatus {
    Pending = 0,
    InVerification = 1,
    Paid = 2,
    Failed = 3,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct MilestoneInput {
    pub amount: i128,
    pub deadline: u64,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Milestone {
    pub amount: i128,
    pub deadline: u64,
    pub status: MilestoneStatus,
    pub attempts: u32,
    pub current_round: Option<u64>,
    pub evidence_hash: Option<BytesN<32>>,
    pub paid_at: u64,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Project {
    pub id: u64,
    pub creator: Address,
    pub token: Address,
    /// Commitment to off-chain metadata (title, description, milestone texts).
    pub metadata_hash: BytesN<32>,
    pub budget: i128,
    pub funded: i128,
    pub released: i128,
    pub funding_deadline: u64,
    pub created_at: u64,
    pub status: ProjectStatus,
    pub milestone_count: u32,
    /// Index of the next milestone to be verified/paid.
    pub current_milestone: u32,
    /// Snapshot of `max_attempts` at creation.
    pub max_attempts: u32,
    /// Funds available for refunds, snapshotted on cancel/fail.
    pub refund_pool: i128,
    pub refunded: i128,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Config {
    pub admin: Address,
    pub verification: Address,
    pub max_attempts: u32,
}

#[contracttype]
#[derive(Clone)]
enum DataKey {
    Config,
    ProjectCount,
    Project(u64),
    Milestones(u64),
    Contribution(u64, Address),
    Refunded(u64, Address),
    AllowedToken(Address),
}

// ---------------------------------------------------------------- events

#[contractevent]
pub struct ProjectCreated {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub creator: Address,
    pub token: Address,
    pub budget: i128,
    pub funding_deadline: u64,
    pub metadata_hash: BytesN<32>,
    pub milestones: Vec<MilestoneInput>,
}

#[contractevent]
pub struct Deposited {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub funder: Address,
    pub amount: i128,
    pub funded: i128,
}

#[contractevent]
pub struct ProjectStatusChanged {
    #[topic]
    pub project_id: u64,
    pub status: ProjectStatus,
    pub refund_pool: i128,
}

#[contractevent]
pub struct MilestoneSubmitted {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub milestone: u32,
    pub attempt: u32,
    pub round_id: u64,
    pub evidence_hash: BytesN<32>,
}

#[contractevent]
pub struct MilestonePaid {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub milestone: u32,
    pub round_id: u64,
    pub recipient: Address,
    pub amount: i128,
}

#[contractevent]
pub struct MilestoneReopened {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub milestone: u32,
    pub round_id: u64,
    pub outcome: Outcome,
    pub attempts: u32,
}

#[contractevent]
pub struct MilestoneFailed {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub milestone: u32,
    pub reason: u32, // 1 = max attempts reached, 2 = deadline expired
}

#[contractevent]
pub struct RefundClaimed {
    #[topic]
    pub project_id: u64,
    #[topic]
    pub funder: Address,
    pub amount: i128,
}

#[contractevent]
pub struct TokenAllowed {
    #[topic]
    pub token: Address,
    pub allowed: bool,
}

// ---------------------------------------------------------------- helpers

fn config(env: &Env) -> Config {
    env.storage()
        .instance()
        .get(&DataKey::Config)
        .unwrap_or_else(|| panic_with_error!(env, Error::NotInitialized))
}

fn bump(env: &Env, key: &DataKey) {
    env.storage()
        .persistent()
        .extend_ttl(key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
}

fn load_project(env: &Env, id: u64) -> Project {
    let key = DataKey::Project(id);
    let p: Project = env
        .storage()
        .persistent()
        .get(&key)
        .unwrap_or_else(|| panic_with_error!(env, Error::ProjectNotFound));
    bump(env, &key);
    p
}

fn save_project(env: &Env, p: &Project) {
    let key = DataKey::Project(p.id);
    env.storage().persistent().set(&key, p);
    bump(env, &key);
}

fn load_milestones(env: &Env, id: u64) -> Vec<Milestone> {
    let key = DataKey::Milestones(id);
    let m: Vec<Milestone> = env
        .storage()
        .persistent()
        .get(&key)
        .unwrap_or_else(|| panic_with_error!(env, Error::ProjectNotFound));
    bump(env, &key);
    m
}

fn save_milestones(env: &Env, id: u64, m: &Vec<Milestone>) {
    let key = DataKey::Milestones(id);
    env.storage().persistent().set(&key, m);
    bump(env, &key);
}

fn contribution(env: &Env, project_id: u64, funder: &Address) -> i128 {
    env.storage()
        .persistent()
        .get(&DataKey::Contribution(project_id, funder.clone()))
        .unwrap_or(0)
}

/// Escrow balance attributable to this project.
fn available(p: &Project) -> i128 {
    p.funded - p.released
}

/// Move to a terminal refundable status and snapshot the refund pool.
fn close_for_refunds(env: &Env, p: &mut Project, status: ProjectStatus) {
    p.status = status;
    p.refund_pool = available(p);
    ProjectStatusChanged {
        project_id: p.id,
        status,
        refund_pool: p.refund_pool,
    }
    .publish(env);
}

// ---------------------------------------------------------------- contract

#[contract]
pub struct ProjectEscrow;

#[contractimpl]
impl ProjectEscrow {
    pub fn init(env: Env, admin: Address, verification: Address, max_attempts: u32) {
        if env.storage().instance().has(&DataKey::Config) {
            panic_with_error!(&env, Error::AlreadyInitialized);
        }
        admin.require_auth();
        if max_attempts == 0 {
            panic_with_error!(&env, Error::InvalidParams);
        }
        env.storage().instance().set(
            &DataKey::Config,
            &Config {
                admin,
                verification,
                max_attempts,
            },
        );
        env.storage().instance().set(&DataKey::ProjectCount, &0u64);
        bump_instance(&env);
    }

    pub fn set_token_allowed(env: Env, token: Address, allowed: bool) {
        config(&env).admin.require_auth();
        let key = DataKey::AllowedToken(token.clone());
        if allowed {
            env.storage().persistent().set(&key, &true);
            bump(&env, &key);
        } else {
            env.storage().persistent().remove(&key);
        }
        TokenAllowed { token, allowed }.publish(&env);
    }

    /// Applies to projects created afterwards (each project snapshots it).
    pub fn set_max_attempts(env: Env, max_attempts: u32) {
        let mut cfg = config(&env);
        cfg.admin.require_auth();
        if max_attempts == 0 {
            panic_with_error!(&env, Error::InvalidParams);
        }
        cfg.max_attempts = max_attempts;
        env.storage().instance().set(&DataKey::Config, &cfg);
        bump_instance(&env);
    }

    pub fn create_project(
        env: Env,
        creator: Address,
        token: Address,
        milestones: Vec<MilestoneInput>,
        funding_deadline: u64,
        metadata_hash: BytesN<32>,
    ) -> u64 {
        creator.require_auth();
        let cfg = config(&env);
        if !Self::is_token_allowed(env.clone(), token.clone()) {
            panic_with_error!(&env, Error::TokenNotAllowed);
        }
        let n = milestones.len();
        if n == 0 || n > MAX_MILESTONES {
            panic_with_error!(&env, Error::InvalidMilestones);
        }
        let now = env.ledger().timestamp();
        if funding_deadline <= now {
            panic_with_error!(&env, Error::InvalidDeadline);
        }
        let mut budget: i128 = 0;
        let mut prev_deadline = funding_deadline;
        let mut stored = Vec::new(&env);
        for m in milestones.iter() {
            if m.amount <= 0 {
                panic_with_error!(&env, Error::InvalidMilestones);
            }
            if m.deadline <= prev_deadline {
                panic_with_error!(&env, Error::InvalidDeadline);
            }
            prev_deadline = m.deadline;
            budget = budget
                .checked_add(m.amount)
                .unwrap_or_else(|| panic_with_error!(&env, Error::InvalidMilestones));
            stored.push_back(Milestone {
                amount: m.amount,
                deadline: m.deadline,
                status: MilestoneStatus::Pending,
                attempts: 0,
                current_round: None,
                evidence_hash: None,
                paid_at: 0,
            });
        }

        let id: u64 = env
            .storage()
            .instance()
            .get::<_, u64>(&DataKey::ProjectCount)
            .unwrap_or(0)
            + 1;
        env.storage().instance().set(&DataKey::ProjectCount, &id);
        bump_instance(&env);

        let p = Project {
            id,
            creator: creator.clone(),
            token: token.clone(),
            metadata_hash: metadata_hash.clone(),
            budget,
            funded: 0,
            released: 0,
            funding_deadline,
            created_at: now,
            status: ProjectStatus::Funding,
            milestone_count: n,
            current_milestone: 0,
            max_attempts: cfg.max_attempts,
            refund_pool: 0,
            refunded: 0,
        };
        save_project(&env, &p);
        save_milestones(&env, id, &stored);
        ProjectCreated {
            project_id: id,
            creator,
            token,
            budget,
            funding_deadline,
            metadata_hash,
            milestones,
        }
        .publish(&env);
        id
    }

    /// Deposit into a project in `Funding`. Deposits beyond the remaining budget revert.
    pub fn deposit(env: Env, funder: Address, project_id: u64, amount: i128) {
        funder.require_auth();
        if amount <= 0 {
            panic_with_error!(&env, Error::InvalidAmount);
        }
        let mut p = load_project(&env, project_id);
        if p.status != ProjectStatus::Funding {
            panic_with_error!(&env, Error::InvalidState);
        }
        if env.ledger().timestamp() > p.funding_deadline {
            panic_with_error!(&env, Error::FundingClosed);
        }
        if amount > p.budget - p.funded {
            panic_with_error!(&env, Error::ExceedsBudget);
        }
        p.funded += amount;
        let key = DataKey::Contribution(project_id, funder.clone());
        let c = contribution(&env, project_id, &funder) + amount;
        env.storage().persistent().set(&key, &c);
        bump(&env, &key);
        if p.funded == p.budget {
            p.status = ProjectStatus::Active;
        }
        save_project(&env, &p);

        token::Client::new(&env, &p.token).transfer(
            &funder,
            &env.current_contract_address(),
            &amount,
        );
        Deposited {
            project_id,
            funder,
            amount,
            funded: p.funded,
        }
        .publish(&env);
        if p.status == ProjectStatus::Active {
            ProjectStatusChanged {
                project_id,
                status: ProjectStatus::Active,
                refund_pool: 0,
            }
            .publish(&env);
        }
    }

    /// Creator cancels: allowed while `Funding`, or while `Active` if no milestone is
    /// currently in verification. Unreleased funds become refundable.
    pub fn cancel(env: Env, project_id: u64) {
        let mut p = load_project(&env, project_id);
        p.creator.require_auth();
        match p.status {
            ProjectStatus::Funding => {}
            ProjectStatus::Active => {
                let ms = load_milestones(&env, project_id);
                let cur = ms.get(p.current_milestone).unwrap();
                if cur.status == MilestoneStatus::InVerification {
                    panic_with_error!(&env, Error::InvalidState);
                }
            }
            _ => panic_with_error!(&env, Error::InvalidState),
        }
        close_for_refunds(&env, &mut p, ProjectStatus::Cancelled);
        save_project(&env, &p);
    }

    /// Anyone: a project not fully funded by its deadline is cancelled.
    pub fn expire_funding(env: Env, project_id: u64) {
        let mut p = load_project(&env, project_id);
        if p.status != ProjectStatus::Funding {
            panic_with_error!(&env, Error::InvalidState);
        }
        if env.ledger().timestamp() <= p.funding_deadline {
            panic_with_error!(&env, Error::DeadlineNotPassed);
        }
        close_for_refunds(&env, &mut p, ProjectStatus::Cancelled);
        save_project(&env, &p);
    }

    /// Creator submits milestone `index` with the SHA-256 of its evidence. Opens a
    /// verification round bound to that hash.
    pub fn submit_for_verification(
        env: Env,
        project_id: u64,
        index: u32,
        evidence_hash: BytesN<32>,
    ) -> u64 {
        let cfg = config(&env);
        let p = load_project(&env, project_id);
        p.creator.require_auth();
        if p.status != ProjectStatus::Active {
            panic_with_error!(&env, Error::InvalidState);
        }
        let mut ms = load_milestones(&env, project_id);
        let mut m = ms
            .get(index)
            .unwrap_or_else(|| panic_with_error!(&env, Error::MilestoneNotFound));
        // Sequential: only the current milestone (all previous ones are Paid).
        if index != p.current_milestone {
            panic_with_error!(&env, Error::NotSequential);
        }
        if m.status != MilestoneStatus::Pending {
            panic_with_error!(&env, Error::InvalidState);
        }
        if env.ledger().timestamp() > m.deadline {
            panic_with_error!(&env, Error::DeadlinePassed);
        }
        if m.attempts >= p.max_attempts {
            panic_with_error!(&env, Error::MaxAttemptsReached);
        }
        if available(&p) < m.amount {
            panic_with_error!(&env, Error::InsufficientBalance);
        }
        m.attempts += 1;
        let round_id = VerificationClient::new(&env, &cfg.verification).open_round(
            &project_id,
            &index,
            &m.attempts,
            &evidence_hash,
            &p.creator,
        );
        m.status = MilestoneStatus::InVerification;
        m.current_round = Some(round_id);
        m.evidence_hash = Some(evidence_hash.clone());
        ms.set(index, m.clone());
        save_milestones(&env, project_id, &ms);
        MilestoneSubmitted {
            project_id,
            milestone: index,
            attempt: m.attempts,
            round_id,
            evidence_hash,
        }
        .publish(&env);
        round_id
    }

    /// Anyone: apply the Verification contract's *final* decision for the milestone's
    /// current round. Approved → pay exactly once. Otherwise → reopen or fail.
    pub fn settle_milestone(env: Env, project_id: u64, index: u32) -> MilestoneStatus {
        let cfg = config(&env);
        let mut p = load_project(&env, project_id);
        if p.status != ProjectStatus::Active {
            panic_with_error!(&env, Error::InvalidState);
        }
        let mut ms = load_milestones(&env, project_id);
        let mut m = ms
            .get(index)
            .unwrap_or_else(|| panic_with_error!(&env, Error::MilestoneNotFound));
        if m.status != MilestoneStatus::InVerification {
            panic_with_error!(&env, Error::InvalidState);
        }
        let round_id = m.current_round.unwrap();
        let decision = VerificationClient::new(&env, &cfg.verification).get_decision(&round_id);
        if !decision.is_final {
            panic_with_error!(&env, Error::NotFinal);
        }

        if decision.outcome == Outcome::Approved {
            if available(&p) < m.amount {
                panic_with_error!(&env, Error::InsufficientBalance);
            }
            // Effects before interaction; Paid is terminal → no double payment.
            m.status = MilestoneStatus::Paid;
            m.paid_at = env.ledger().timestamp();
            ms.set(index, m.clone());
            p.released += m.amount;
            p.current_milestone += 1;
            let completed = p.current_milestone == p.milestone_count;
            if completed {
                p.status = ProjectStatus::Completed;
            }
            save_milestones(&env, project_id, &ms);
            save_project(&env, &p);
            token::Client::new(&env, &p.token).transfer(
                &env.current_contract_address(),
                &p.creator,
                &m.amount,
            );
            MilestonePaid {
                project_id,
                milestone: index,
                round_id,
                recipient: p.creator.clone(),
                amount: m.amount,
            }
            .publish(&env);
            if completed {
                ProjectStatusChanged {
                    project_id,
                    status: ProjectStatus::Completed,
                    refund_pool: 0,
                }
                .publish(&env);
            }
            return MilestoneStatus::Paid;
        }

        // Rejected / Inconclusive / NoQuorum.
        if m.attempts >= p.max_attempts {
            m.status = MilestoneStatus::Failed;
            ms.set(index, m.clone());
            save_milestones(&env, project_id, &ms);
            MilestoneFailed {
                project_id,
                milestone: index,
                reason: 1,
            }
            .publish(&env);
            close_for_refunds(&env, &mut p, ProjectStatus::Failed);
            save_project(&env, &p);
            MilestoneStatus::Failed
        } else {
            m.status = MilestoneStatus::Pending;
            m.current_round = None;
            ms.set(index, m.clone());
            save_milestones(&env, project_id, &ms);
            MilestoneReopened {
                project_id,
                milestone: index,
                round_id,
                outcome: decision.outcome,
                attempts: m.attempts,
            }
            .publish(&env);
            MilestoneStatus::Pending
        }
    }

    /// Anyone: a pending (not in verification) milestone past its deadline fails the
    /// project, making unreleased funds refundable.
    pub fn expire_milestone(env: Env, project_id: u64, index: u32) {
        let mut p = load_project(&env, project_id);
        if p.status != ProjectStatus::Active {
            panic_with_error!(&env, Error::InvalidState);
        }
        let mut ms = load_milestones(&env, project_id);
        let mut m = ms
            .get(index)
            .unwrap_or_else(|| panic_with_error!(&env, Error::MilestoneNotFound));
        if m.status != MilestoneStatus::Pending {
            panic_with_error!(&env, Error::InvalidState);
        }
        if env.ledger().timestamp() <= m.deadline {
            panic_with_error!(&env, Error::DeadlineNotPassed);
        }
        m.status = MilestoneStatus::Failed;
        ms.set(index, m);
        save_milestones(&env, project_id, &ms);
        MilestoneFailed {
            project_id,
            milestone: index,
            reason: 2,
        }
        .publish(&env);
        close_for_refunds(&env, &mut p, ProjectStatus::Failed);
        save_project(&env, &p);
    }

    /// Funder claims `contribution × refund_pool ÷ funded`, once.
    pub fn claim_refund(env: Env, funder: Address, project_id: u64) -> i128 {
        funder.require_auth();
        let mut p = load_project(&env, project_id);
        if p.status != ProjectStatus::Cancelled && p.status != ProjectStatus::Failed {
            panic_with_error!(&env, Error::InvalidState);
        }
        let c = contribution(&env, project_id, &funder);
        if c <= 0 {
            panic_with_error!(&env, Error::NothingToRefund);
        }
        let rkey = DataKey::Refunded(project_id, funder.clone());
        if env.storage().persistent().has(&rkey) {
            panic_with_error!(&env, Error::AlreadyRefunded);
        }
        let amount = c * p.refund_pool / p.funded;
        env.storage().persistent().set(&rkey, &amount);
        bump(&env, &rkey);
        p.refunded += amount;
        save_project(&env, &p);
        if amount > 0 {
            token::Client::new(&env, &p.token).transfer(
                &env.current_contract_address(),
                &funder,
                &amount,
            );
        }
        RefundClaimed {
            project_id,
            funder,
            amount,
        }
        .publish(&env);
        amount
    }

    // ------------------------------------------------------------ views

    pub fn get_project(env: Env, project_id: u64) -> Project {
        load_project(&env, project_id)
    }

    pub fn get_milestones(env: Env, project_id: u64) -> Vec<Milestone> {
        load_milestones(&env, project_id)
    }

    pub fn get_milestone(env: Env, project_id: u64, index: u32) -> Milestone {
        load_milestones(&env, project_id)
            .get(index)
            .unwrap_or_else(|| panic_with_error!(&env, Error::MilestoneNotFound))
    }

    pub fn contribution_of(env: Env, project_id: u64, funder: Address) -> i128 {
        contribution(&env, project_id, &funder)
    }

    pub fn has_refunded(env: Env, project_id: u64, funder: Address) -> bool {
        env.storage()
            .persistent()
            .has(&DataKey::Refunded(project_id, funder))
    }

    pub fn creator_of(env: Env, project_id: u64) -> Address {
        load_project(&env, project_id).creator
    }

    pub fn project_count(env: Env) -> u64 {
        env.storage()
            .instance()
            .get(&DataKey::ProjectCount)
            .unwrap_or(0)
    }

    pub fn is_token_allowed(env: Env, token: Address) -> bool {
        env.storage()
            .persistent()
            .has(&DataKey::AllowedToken(token))
    }

    pub fn get_config(env: Env) -> Config {
        config(&env)
    }
}
