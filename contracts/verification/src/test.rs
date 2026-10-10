#![cfg(test)]
extern crate std;

use super::*;
use soroban_sdk::{Address, BytesN, Env, String};

#[test]
fn tally_rules() {
    // threshold 60%, quorum 4
    let t = 6000;
    assert_eq!(tally(4, 0, 4, t), Outcome::Approved);
    assert_eq!(tally(3, 1, 4, t), Outcome::Approved);
    assert_eq!(tally(1, 3, 4, t), Outcome::Rejected);
    assert_eq!(tally(2, 2, 4, t), Outcome::Inconclusive, "ties are inconclusive");
    assert_eq!(tally(3, 2, 4, t), Outcome::Approved, "3/5 = 60% meets threshold");
    assert_eq!(tally(2, 3, 4, t), Outcome::Rejected);
    assert_eq!(tally(3, 0, 4, t), Outcome::NoQuorum);
    assert_eq!(tally(0, 0, 4, t), Outcome::NoQuorum);
    // unanimity threshold
    assert_eq!(tally(4, 1, 4, 10_000), Outcome::Inconclusive);
    assert_eq!(tally(5, 0, 4, 10_000), Outcome::Approved);
}

#[test]
fn commitment_encoding_is_stable() {
    let env = Env::default();
    let voter = Address::from_string(&String::from_str(
        &env,
        "GCZGW2FVKHT7JFZGTSKLQQBQC5MPX22BMFXJGYUEDDSQLTW34B6UNWA3",
    ));
    let salt = BytesN::from_array(&env, &[7u8; 32]);
    let c = commitment_of(&env, 42, &voter, VOTE_APPROVE, &salt);
    // Shared test vector, also asserted by packages/domain (TypeScript) tests.
    let expected_hex = "e25c11c9af23e9f3266703654f382d1d384b4b330f2206195cf8a8e5df51a628";
    let got: std::string::String = c.to_array().iter().map(|b| std::format!("{:02x}", b)).collect();
    assert_eq!(got, expected_hex);
    // Any change of round, vote, voter or salt changes the commitment.
    assert_ne!(c, commitment_of(&env, 43, &voter, VOTE_APPROVE, &salt));
    assert_ne!(c, commitment_of(&env, 42, &voter, VOTE_REJECT, &salt));
    assert_ne!(c, commitment_of(&env, 42, &Address::generate_for_test(&env), VOTE_APPROVE, &salt));
    assert_ne!(c, commitment_of(&env, 42, &voter, VOTE_APPROVE, &BytesN::from_array(&env, &[8u8; 32])));
}

trait GenForTest {
    fn generate_for_test(env: &Env) -> Address;
}
impl GenForTest for Address {
    fn generate_for_test(env: &Env) -> Address {
        use soroban_sdk::testutils::Address as _;
        Address::generate(env)
    }
}
