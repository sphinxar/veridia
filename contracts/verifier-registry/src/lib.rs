//! VerifierRegistry: verifier registration, stake, per-round locks, unbonding and
//! slashing for verifiable misconduct. State-changing calls that affect obligations
//! (`lock`, `release`) can only be made by the Verification contract set at `init`.
#![no_std]

use soroban_sdk::{
    contract, contracterror, contractevent, contractimpl, contracttype, panic_with_error, token,
    Address, BytesN, Env, Map, Vec,
};
use veridia_common::{apply_bps, bump_instance, Conduct, BPS, PERSISTENT_BUMP, PERSISTENT_THRESHOLD};

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    AlreadyInitialized = 1,
    NotInitialized = 2,
    InvalidParams = 3,
    AlreadyRegistered = 4,
    NotRegistered = 5,
    InvalidAmount = 6,
    InsufficientFreeStake = 7,
    NothingToWithdraw = 8,
    UnbondingNotElapsed = 9,
    NotEligible = 10,
    AlreadyLocked = 11,
    LockNotFound = 12,
    InvalidSlash = 13,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct RegistryParams {
    /// Minimum free stake required to be selectable.
    pub min_stake: i128,
    /// Stake locked per round assignment.
    pub lock_amount: i128,
    /// Delay between `request_unstake` and `withdraw`.
    pub unbonding_secs: u64,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Config {
    pub admin: Address,
    pub verification: Address,
    pub stake_token: Address,
    pub treasury: Address,
    pub params: RegistryParams,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Verifier {
    pub active: bool,
    /// Bonded stake, including the locked part.
    pub stake: i128,
    /// Part of `stake` locked by active round assignments.
    pub locked: i128,
    /// Amount waiting for `unbond_at`; no longer counts as stake.
    pub unbonding: i128,
    pub unbond_at: u64,
    pub registered_at: u64,
    /// Hash of off-chain profile metadata (no personal data on-chain).
    pub metadata_hash: BytesN<32>,
    pub rounds_assigned: u32,
    pub rounds_revealed: u32,
    pub no_shows: u32,
    pub active_rounds: u32,
    pub total_slashed: i128,
}

/// Stake locked for one round's panel.
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct RoundLock {
    pub amount: i128,
    pub members: Vec<Address>,
}

/// Storage layout: all verifier records live in ONE map entry and locks are keyed by
/// round id only, so the storage footprint of `lock_panel` / `release_panel` does not
/// depend on which verifiers the PRNG selected (see RegistryInterface docs).
/// Trade-off: the registry is bounded by the max entry size (≈ a few hundred verifiers).
#[contracttype]
#[derive(Clone)]
enum DataKey {
    Config,
    Verifiers,
    RoundLock(u64),
}

// ---------------------------------------------------------------- events

#[contractevent]
pub struct VerifierRegistered {
    #[topic]
    pub verifier: Address,
    pub metadata_hash: BytesN<32>,
}

#[contractevent]
pub struct StakeDeposited {
    #[topic]
    pub verifier: Address,
    pub amount: i128,
    pub stake: i128,
}

#[contractevent]
pub struct UnstakeRequested {
    #[topic]
    pub verifier: Address,
    pub amount: i128,
    pub unbond_at: u64,
}

#[contractevent]
pub struct StakeWithdrawn {
    #[topic]
    pub verifier: Address,
    pub amount: i128,
}

#[contractevent]
pub struct VerifierStatusChanged {
    #[topic]
    pub verifier: Address,
    pub active: bool,
}

#[contractevent]
pub struct StakeLocked {
    #[topic]
    pub verifier: Address,
    #[topic]
    pub round_id: u64,
    pub amount: i128,
}

#[contractevent]
pub struct StakeReleased {
    #[topic]
    pub verifier: Address,
    #[topic]
    pub round_id: u64,
    pub amount: i128,
    pub slashed: i128,
    pub conduct: Conduct,
}

#[contractevent]
pub struct RegistryParamsUpdated {
    pub params: RegistryParams,
}

// ---------------------------------------------------------------- helpers

fn config(env: &Env) -> Config {
    env.storage()
        .instance()
        .get(&DataKey::Config)
        .unwrap_or_else(|| panic_with_error!(env, Error::NotInitialized))
}

fn validate_params(env: &Env, p: &RegistryParams) {
    if p.lock_amount <= 0 || p.min_stake < 0 {
        panic_with_error!(env, Error::InvalidParams);
    }
}

fn all_verifiers(env: &Env) -> Map<Address, Verifier> {
    let key = DataKey::Verifiers;
    match env.storage().persistent().get(&key) {
        Some(m) => {
            env.storage()
                .persistent()
                .extend_ttl(&key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
            m
        }
        None => Map::new(env),
    }
}

fn save_all(env: &Env, m: &Map<Address, Verifier>) {
    let key = DataKey::Verifiers;
    env.storage().persistent().set(&key, m);
    env.storage()
        .persistent()
        .extend_ttl(&key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
}

fn get_or_fail(env: &Env, m: &Map<Address, Verifier>, who: &Address) -> Verifier {
    m.get(who.clone())
        .unwrap_or_else(|| panic_with_error!(env, Error::NotRegistered))
}

fn required_free_stake(p: &RegistryParams) -> i128 {
    if p.min_stake > p.lock_amount {
        p.min_stake
    } else {
        p.lock_amount
    }
}

fn is_eligible(v: &Verifier, p: &RegistryParams) -> bool {
    v.active && v.stake - v.locked >= required_free_stake(p)
}

// ---------------------------------------------------------------- contract

#[contract]
pub struct VerifierRegistry;

#[contractimpl]
impl VerifierRegistry {
    pub fn init(
        env: Env,
        admin: Address,
        verification: Address,
        stake_token: Address,
        treasury: Address,
        params: RegistryParams,
    ) {
        if env.storage().instance().has(&DataKey::Config) {
            panic_with_error!(&env, Error::AlreadyInitialized);
        }
        admin.require_auth();
        validate_params(&env, &params);
        env.storage().instance().set(
            &DataKey::Config,
            &Config {
                admin,
                verification,
                stake_token,
                treasury,
                params,
            },
        );
        bump_instance(&env);
    }

    pub fn set_params(env: Env, params: RegistryParams) {
        let mut cfg = config(&env);
        cfg.admin.require_auth();
        validate_params(&env, &params);
        cfg.params = params.clone();
        env.storage().instance().set(&DataKey::Config, &cfg);
        bump_instance(&env);
        RegistryParamsUpdated { params }.publish(&env);
    }

    // ------------------------------------------------------------ verifier actions

    pub fn register(env: Env, verifier: Address, metadata_hash: BytesN<32>) {
        verifier.require_auth();
        config(&env);
        let mut all = all_verifiers(&env);
        if all.contains_key(verifier.clone()) {
            panic_with_error!(&env, Error::AlreadyRegistered);
        }
        let v = Verifier {
            active: true,
            stake: 0,
            locked: 0,
            unbonding: 0,
            unbond_at: 0,
            registered_at: env.ledger().timestamp(),
            metadata_hash: metadata_hash.clone(),
            rounds_assigned: 0,
            rounds_revealed: 0,
            no_shows: 0,
            active_rounds: 0,
            total_slashed: 0,
        };
        all.set(verifier.clone(), v);
        save_all(&env, &all);
        bump_instance(&env);
        VerifierRegistered {
            verifier,
            metadata_hash,
        }
        .publish(&env);
    }

    pub fn deposit_stake(env: Env, verifier: Address, amount: i128) {
        verifier.require_auth();
        if amount <= 0 {
            panic_with_error!(&env, Error::InvalidAmount);
        }
        let cfg = config(&env);
        let mut all = all_verifiers(&env);
        let mut v = get_or_fail(&env, &all, &verifier);
        v.stake += amount;
        all.set(verifier.clone(), v.clone());
        save_all(&env, &all);
        token::Client::new(&env, &cfg.stake_token).transfer(
            &verifier,
            &env.current_contract_address(),
            &amount,
        );
        StakeDeposited {
            verifier,
            amount,
            stake: v.stake,
        }
        .publish(&env);
    }

    /// Opt in/out of new assignments. Existing locks are unaffected.
    pub fn set_active(env: Env, verifier: Address, active: bool) {
        verifier.require_auth();
        let mut all = all_verifiers(&env);
        let mut v = get_or_fail(&env, &all, &verifier);
        v.active = active;
        all.set(verifier.clone(), v.clone());
        save_all(&env, &all);
        VerifierStatusChanged { verifier, active }.publish(&env);
    }

    /// Move free (unlocked) stake into unbonding. Locked stake can never be requested.
    /// A new request resets the unbonding timer for the whole unbonding amount.
    pub fn request_unstake(env: Env, verifier: Address, amount: i128) {
        verifier.require_auth();
        if amount <= 0 {
            panic_with_error!(&env, Error::InvalidAmount);
        }
        let cfg = config(&env);
        let mut all = all_verifiers(&env);
        let mut v = get_or_fail(&env, &all, &verifier);
        if amount > v.stake - v.locked {
            panic_with_error!(&env, Error::InsufficientFreeStake);
        }
        v.stake -= amount;
        v.unbonding += amount;
        v.unbond_at = env.ledger().timestamp() + cfg.params.unbonding_secs;
        all.set(verifier.clone(), v.clone());
        save_all(&env, &all);
        UnstakeRequested {
            verifier,
            amount,
            unbond_at: v.unbond_at,
        }
        .publish(&env);
    }

    pub fn withdraw(env: Env, verifier: Address) -> i128 {
        verifier.require_auth();
        let cfg = config(&env);
        let mut all = all_verifiers(&env);
        let mut v = get_or_fail(&env, &all, &verifier);
        if v.unbonding <= 0 {
            panic_with_error!(&env, Error::NothingToWithdraw);
        }
        if env.ledger().timestamp() < v.unbond_at {
            panic_with_error!(&env, Error::UnbondingNotElapsed);
        }
        let amount = v.unbonding;
        v.unbonding = 0;
        v.unbond_at = 0;
        all.set(verifier.clone(), v.clone());
        save_all(&env, &all);
        token::Client::new(&env, &cfg.stake_token).transfer(
            &env.current_contract_address(),
            &verifier,
            &amount,
        );
        StakeWithdrawn { verifier, amount }.publish(&env);
        amount
    }

    // ------------------------------------------------------------ verification-only

    /// Lock `lock_amount` of each panel member's stake for `round_id`.
    pub fn lock_panel(env: Env, round_id: u64, panel: Vec<Address>) -> i128 {
        let cfg = config(&env);
        cfg.verification.require_auth();
        let lock_key = DataKey::RoundLock(round_id);
        if env.storage().persistent().has(&lock_key) {
            panic_with_error!(&env, Error::AlreadyLocked);
        }
        let amount = cfg.params.lock_amount;
        let mut all = all_verifiers(&env);
        for member in panel.iter() {
            let mut v = get_or_fail(&env, &all, &member);
            if !is_eligible(&v, &cfg.params) {
                panic_with_error!(&env, Error::NotEligible);
            }
            v.locked += amount;
            v.rounds_assigned += 1;
            v.active_rounds += 1;
            all.set(member.clone(), v);
            StakeLocked {
                verifier: member,
                round_id,
                amount,
            }
            .publish(&env);
        }
        save_all(&env, &all);
        env.storage().persistent().set(
            &lock_key,
            &RoundLock {
                amount,
                members: panel,
            },
        );
        env.storage()
            .persistent()
            .extend_ttl(&lock_key, PERSISTENT_THRESHOLD, PERSISTENT_BUMP);
        amount
    }

    /// Release the panel locks for `round_id`. `conducts[i]` is the conduct of the i-th
    /// locked member. Misconduct (`NoCommit` / `NoReveal`) is slashed by `slash_bps` of
    /// the locked amount and sent to the treasury. Returns the total slashed.
    pub fn release_panel(env: Env, round_id: u64, conducts: Vec<Conduct>, slash_bps: u32) -> i128 {
        let cfg = config(&env);
        cfg.verification.require_auth();
        if slash_bps > BPS {
            panic_with_error!(&env, Error::InvalidSlash);
        }
        let lock_key = DataKey::RoundLock(round_id);
        let lock: RoundLock = env
            .storage()
            .persistent()
            .get(&lock_key)
            .unwrap_or_else(|| panic_with_error!(&env, Error::LockNotFound));
        if conducts.len() != lock.members.len() {
            panic_with_error!(&env, Error::InvalidParams);
        }
        env.storage().persistent().remove(&lock_key);

        let mut all = all_verifiers(&env);
        let mut total_slashed: i128 = 0;
        for (i, member) in lock.members.iter().enumerate() {
            let conduct = conducts.get(i as u32).unwrap();
            let mut v = get_or_fail(&env, &all, &member);
            let slashed = match conduct {
                Conduct::Revealed => 0,
                Conduct::NoCommit | Conduct::NoReveal => apply_bps(lock.amount, slash_bps),
            };
            v.locked -= lock.amount;
            v.stake -= slashed;
            v.active_rounds -= 1;
            v.total_slashed += slashed;
            match conduct {
                Conduct::Revealed => v.rounds_revealed += 1,
                _ => v.no_shows += 1,
            }
            all.set(member.clone(), v);
            total_slashed += slashed;
            StakeReleased {
                verifier: member,
                round_id,
                amount: lock.amount,
                slashed,
                conduct,
            }
            .publish(&env);
        }
        save_all(&env, &all);
        if total_slashed > 0 {
            token::Client::new(&env, &cfg.stake_token).transfer(
                &env.current_contract_address(),
                &cfg.treasury,
                &total_slashed,
            );
        }
        total_slashed
    }

    // ------------------------------------------------------------ views

    /// Verifiers that can currently be assigned to a round.
    pub fn eligible(env: Env) -> Vec<Address> {
        let cfg = config(&env);
        let mut out = Vec::new(&env);
        for (addr, v) in all_verifiers(&env).iter() {
            if is_eligible(&v, &cfg.params) {
                out.push_back(addr);
            }
        }
        out
    }

    pub fn get_verifier(env: Env, verifier: Address) -> Option<Verifier> {
        all_verifiers(&env).get(verifier)
    }

    pub fn verifiers(env: Env) -> Vec<Address> {
        all_verifiers(&env).keys()
    }

    /// Amount locked for `verifier` in `round_id` (0 if none).
    pub fn get_lock(env: Env, verifier: Address, round_id: u64) -> i128 {
        let lock: Option<RoundLock> = env.storage().persistent().get(&DataKey::RoundLock(round_id));
        match lock {
            Some(l) if l.members.iter().any(|m| m == verifier) => l.amount,
            _ => 0,
        }
    }

    pub fn stake_token(env: Env) -> Address {
        config(&env).stake_token
    }

    pub fn get_config(env: Env) -> Config {
        config(&env)
    }
}

#[cfg(test)]
mod test;
