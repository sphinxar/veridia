//! Types and cross-contract interfaces shared by the Veridia contracts.
//!
//! Each contract only depends on the *interface* of its peers (generated clients),
//! never on their implementation, so responsibilities stay separated.
#![no_std]

use soroban_sdk::{contractclient, contracttype, Address, BytesN, Env, Vec};

/// Result of a verification round. Discriminants are part of the public ABI.
#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Outcome {
    Pending = 0,
    Approved = 1,
    Rejected = 2,
    Inconclusive = 3,
    NoQuorum = 4,
}

impl Outcome {
    /// Approved and Rejected are decisive (and appealable); the rest are failed rounds.
    pub fn is_decisive(&self) -> bool {
        matches!(self, Outcome::Approved | Outcome::Rejected)
    }
}

/// How a panel member behaved in a round. Only `NoCommit` and `NoReveal` are misconduct.
#[contracttype]
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Conduct {
    Revealed = 0,
    NoCommit = 1,
    NoReveal = 2,
}

/// The decision for one milestone attempt, derived from the original round and its
/// optional appeal round. Escrow releases funds only for `is_final && Approved`.
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Decision {
    pub round_id: u64,
    pub is_final: bool,
    /// Provisional while `is_final` is false (e.g. during the appeal window).
    pub outcome: Outcome,
    pub under_appeal: bool,
    /// 0 when the round is not finalized or not appealable.
    pub appealable_until: u64,
    pub appeal_round_id: Option<u64>,
}

/// Interface of the Verification contract used by ProjectEscrow.
#[contractclient(name = "VerificationClient")]
pub trait VerificationInterface {
    fn open_round(
        env: Env,
        project_id: u64,
        milestone: u32,
        attempt: u32,
        evidence_hash: BytesN<32>,
        creator: Address,
    ) -> u64;
    fn get_decision(env: Env, round_id: u64) -> Decision;
}

/// Interface of ProjectEscrow used by Verification (read-only).
#[contractclient(name = "EscrowClient")]
pub trait EscrowInterface {
    fn contribution_of(env: Env, project_id: u64, funder: Address) -> i128;
    fn creator_of(env: Env, project_id: u64) -> Address;
}

/// Interface of VerifierRegistry used by Verification.
#[contractclient(name = "RegistryClient")]
pub trait RegistryInterface {
    fn eligible(env: Env) -> Vec<Address>;
    fn lock(env: Env, verifier: Address, round_id: u64) -> i128;
    fn release(env: Env, verifier: Address, round_id: u64, conduct: Conduct, slash_bps: u32)
        -> i128;
    fn stake_token(env: Env) -> Address;
}

/// Basis-point denominator.
pub const BPS: u32 = 10_000;

/// TTL management for persistent entries (~30 days at 5s ledgers; extend when < ~15 days).
pub const PERSISTENT_BUMP: u32 = 518_400;
pub const PERSISTENT_THRESHOLD: u32 = 259_200;
pub const INSTANCE_BUMP: u32 = 518_400;
pub const INSTANCE_THRESHOLD: u32 = 259_200;

pub fn bump_instance(env: &Env) {
    env.storage()
        .instance()
        .extend_ttl(INSTANCE_THRESHOLD, INSTANCE_BUMP);
}

/// `amount * bps / 10000`, rounding down. Panics on overflow (overflow-checks on).
pub fn apply_bps(amount: i128, bps: u32) -> i128 {
    amount * (bps as i128) / (BPS as i128)
}
