#![cfg(test)]
extern crate std;

use super::*;
use soroban_sdk::{
    testutils::{Address as _, AuthorizedFunction, Ledger, MockAuth, MockAuthInvoke},
    token::{StellarAssetClient, TokenClient},
    IntoVal,
};

fn ce(e: Error) -> soroban_sdk::Error {
    soroban_sdk::Error::from_contract_error(e as u32)
}

struct Setup<'a> {
    env: Env,
    admin: Address,
    verification: Address,
    treasury: Address,
    token: TokenClient<'a>,
    token_admin: StellarAssetClient<'a>,
    reg: VerifierRegistryClient<'a>,
}

fn params() -> RegistryParams {
    RegistryParams {
        min_stake: 100,
        lock_amount: 100,
        unbonding_secs: 60,
    }
}

fn setup<'a>() -> Setup<'a> {
    let env = Env::default();
    env.mock_all_auths();
    let admin = Address::generate(&env);
    let verification = Address::generate(&env);
    let treasury = Address::generate(&env);
    let sac = env.register_stellar_asset_contract_v2(admin.clone());
    let token = TokenClient::new(&env, &sac.address());
    let token_admin = StellarAssetClient::new(&env, &sac.address());
    let id = env.register(VerifierRegistry, ());
    let reg = VerifierRegistryClient::new(&env, &id);
    reg.init(&admin, &verification, &sac.address(), &treasury, &params());
    Setup {
        env,
        admin,
        verification,
        treasury,
        token,
        token_admin,
        reg,
    }
}

fn staked_verifier(s: &Setup, amount: i128) -> Address {
    let v = Address::generate(&s.env);
    s.token_admin.mint(&v, &1_000);
    s.reg.register(&v, &BytesN::from_array(&s.env, &[1; 32]));
    if amount > 0 {
        s.reg.deposit_stake(&v, &amount);
    }
    v
}

#[test]
fn init_only_once() {
    let s = setup();
    let r = s
        .reg
        .try_init(&s.admin, &s.verification, &s.token.address, &s.treasury, &params());
    assert_eq!(r, Err(Ok(ce(Error::AlreadyInitialized))));
}

#[test]
fn register_and_stake() {
    let s = setup();
    let v = staked_verifier(&s, 150);
    assert_eq!(
        s.env.auths()[0].0,
        v,
        "deposit_stake must be authorized by the verifier"
    );
    let rec = s.reg.get_verifier(&v).unwrap();
    assert_eq!(rec.stake, 150);
    assert!(rec.active);
    assert_eq!(s.token.balance(&v), 850);
    assert_eq!(s.token.balance(&s.reg.address), 150);
    assert_eq!(s.reg.eligible().len(), 1);
}

#[test]
fn duplicate_registration_rejected() {
    let s = setup();
    let v = staked_verifier(&s, 0);
    let r = s.reg.try_register(&v, &BytesN::from_array(&s.env, &[2; 32]));
    assert_eq!(r, Err(Ok(ce(Error::AlreadyRegistered))));
}

#[test]
fn invalid_deposit_amount() {
    let s = setup();
    let v = staked_verifier(&s, 0);
    assert_eq!(s.reg.try_deposit_stake(&v, &0), Err(Ok(ce(Error::InvalidAmount))));
    assert_eq!(s.reg.try_deposit_stake(&v, &-5), Err(Ok(ce(Error::InvalidAmount))));
}

#[test]
fn eligibility_requires_min_stake_and_active() {
    let s = setup();
    let low = staked_verifier(&s, 99);
    let ok = staked_verifier(&s, 100);
    let el = s.reg.eligible();
    assert_eq!(el.len(), 1);
    assert_eq!(el.get(0).unwrap(), ok);
    s.reg.set_active(&ok, &false);
    assert_eq!(s.reg.eligible().len(), 0);
    let _ = low;
}

fn panel(env: &Env, members: &[&Address]) -> Vec<Address> {
    let mut v = Vec::new(env);
    for m in members {
        v.push_back((*m).clone());
    }
    v
}

fn conducts(env: &Env, c: &[Conduct]) -> Vec<Conduct> {
    let mut v = Vec::new(env);
    for x in c {
        v.push_back(*x);
    }
    v
}

#[test]
fn lock_requires_verification_contract_auth() {
    let s = setup();
    let v = staked_verifier(&s, 200);
    let p = panel(&s.env, &[&v]);
    // Only the verifier (not the verification contract) authorizes: must fail.
    s.env.mock_auths(&[MockAuth {
        address: &v,
        invoke: &MockAuthInvoke {
            contract: &s.reg.address,
            fn_name: "lock_panel",
            args: (1u64, p.clone()).into_val(&s.env),
            sub_invokes: &[],
        },
    }]);
    assert!(s.reg.try_lock_panel(&1, &p).is_err());

    s.env.mock_all_auths();
    s.reg.lock_panel(&1, &p);
    let auths = s.env.auths();
    assert_eq!(auths[0].0, s.verification);
    assert_eq!(
        auths[0].1.function,
        AuthorizedFunction::Contract((
            s.reg.address.clone(),
            soroban_sdk::Symbol::new(&s.env, "lock_panel"),
            (1u64, p.clone()).into_val(&s.env)
        ))
    );
}

#[test]
fn release_requires_verification_contract_auth() {
    let s = setup();
    let v = staked_verifier(&s, 200);
    s.reg.lock_panel(&1, &panel(&s.env, &[&v]));
    let c = conducts(&s.env, &[Conduct::NoReveal]);
    s.env.mock_auths(&[MockAuth {
        address: &v,
        invoke: &MockAuthInvoke {
            contract: &s.reg.address,
            fn_name: "release_panel",
            args: (1u64, c.clone(), 0u32).into_val(&s.env),
            sub_invokes: &[],
        },
    }]);
    assert!(s.reg.try_release_panel(&1, &c, &0).is_err());
}

#[test]
fn lock_reduces_free_stake_and_blocks_unstake() {
    let s = setup();
    let v = staked_verifier(&s, 150);
    s.reg.lock_panel(&7, &panel(&s.env, &[&v]));
    let rec = s.reg.get_verifier(&v).unwrap();
    assert_eq!(rec.locked, 100);
    assert_eq!(rec.active_rounds, 1);
    assert_eq!(s.reg.get_lock(&v, &7), 100);
    // free stake is 50: below lock amount -> no longer eligible, cannot lock again
    assert_eq!(s.reg.eligible().len(), 0);
    assert_eq!(s.reg.try_lock_panel(&8, &panel(&s.env, &[&v])), Err(Ok(ce(Error::NotEligible))));
    assert_eq!(s.reg.try_lock_panel(&7, &panel(&s.env, &[&v])), Err(Ok(ce(Error::AlreadyLocked))));
    // cannot unstake locked stake
    assert_eq!(
        s.reg.try_request_unstake(&v, &51),
        Err(Ok(ce(Error::InsufficientFreeStake)))
    );
    s.reg.request_unstake(&v, &50);
}

#[test]
fn lock_unregistered_fails() {
    let s = setup();
    let stranger = Address::generate(&s.env);
    assert_eq!(
        s.reg.try_lock_panel(&1, &panel(&s.env, &[&stranger])),
        Err(Ok(ce(Error::NotRegistered)))
    );
}

#[test]
fn unbonding_delay_enforced() {
    let s = setup();
    let v = staked_verifier(&s, 300);
    s.env.ledger().set_timestamp(1_000);
    assert_eq!(s.reg.try_withdraw(&v), Err(Ok(ce(Error::NothingToWithdraw))));
    s.reg.request_unstake(&v, &200);
    let rec = s.reg.get_verifier(&v).unwrap();
    assert_eq!(rec.stake, 100);
    assert_eq!(rec.unbonding, 200);
    assert_eq!(rec.unbond_at, 1_060);
    s.env.ledger().set_timestamp(1_059);
    assert_eq!(s.reg.try_withdraw(&v), Err(Ok(ce(Error::UnbondingNotElapsed))));
    s.env.ledger().set_timestamp(1_060);
    assert_eq!(s.reg.withdraw(&v), 200);
    assert_eq!(s.token.balance(&v), 900);
    assert_eq!(s.reg.try_withdraw(&v), Err(Ok(ce(Error::NothingToWithdraw))));
}

#[test]
fn release_slashes_only_no_shows_to_treasury() {
    let s = setup();
    let a = staked_verifier(&s, 200);
    let b = staked_verifier(&s, 200);
    let c = staked_verifier(&s, 200);
    s.reg.lock_panel(&3, &panel(&s.env, &[&a, &b, &c]));
    let slashed = s.reg.release_panel(
        &3,
        &conducts(&s.env, &[Conduct::Revealed, Conduct::NoReveal, Conduct::NoCommit]),
        &1000,
    );
    assert_eq!(slashed, 20);
    let ra = s.reg.get_verifier(&a).unwrap();
    let rb = s.reg.get_verifier(&b).unwrap();
    assert_eq!((ra.stake, ra.locked, ra.rounds_revealed, ra.no_shows), (200, 0, 1, 0));
    assert_eq!((rb.stake, rb.locked, rb.no_shows, rb.total_slashed), (190, 0, 1, 10));
    assert_eq!(s.token.balance(&s.treasury), 20);
    assert_eq!(s.token.balance(&s.reg.address), 580);
    assert_eq!(s.reg.get_lock(&a, &3), 0);
    // Released once only.
    assert_eq!(
        s.reg.try_release_panel(&3, &conducts(&s.env, &[Conduct::Revealed; 3]), &0),
        Err(Ok(ce(Error::LockNotFound)))
    );
}

#[test]
fn release_validates_inputs() {
    let s = setup();
    let a = staked_verifier(&s, 200);
    s.reg.lock_panel(&3, &panel(&s.env, &[&a]));
    assert_eq!(
        s.reg.try_release_panel(&3, &conducts(&s.env, &[Conduct::NoCommit]), &10_001),
        Err(Ok(ce(Error::InvalidSlash)))
    );
    assert_eq!(
        s.reg.try_release_panel(&3, &conducts(&s.env, &[]), &0),
        Err(Ok(ce(Error::InvalidParams)))
    );
}

#[test]
fn set_params_admin_only_and_validated() {
    let s = setup();
    let other = Address::generate(&s.env);
    let p = RegistryParams {
        min_stake: 10,
        lock_amount: 10,
        unbonding_secs: 0,
    };
    s.env.mock_auths(&[MockAuth {
        address: &other,
        invoke: &MockAuthInvoke {
            contract: &s.reg.address,
            fn_name: "set_params",
            args: (p.clone(),).into_val(&s.env),
            sub_invokes: &[],
        },
    }]);
    assert!(s.reg.try_set_params(&p).is_err());
    s.env.mock_all_auths();
    s.reg.set_params(&p);
    assert_eq!(s.env.auths()[0].0, s.admin);
    let bad = RegistryParams {
        min_stake: 0,
        lock_amount: 0,
        unbonding_secs: 0,
    };
    assert_eq!(s.reg.try_set_params(&bad), Err(Ok(ce(Error::InvalidParams))));
}
