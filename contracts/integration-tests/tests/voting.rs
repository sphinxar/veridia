//! Verification: panel selection, commit-reveal, deadlines, quorum, ties, stake effects.
use soroban_sdk::{
    testutils::{Address as _, MockAuth, MockAuthInvoke},
    Address, BytesN, IntoVal,
};
use veridia_integration_tests::*;

fn open(w: &World, amounts: &[i128]) -> (u64, u64) {
    let id = w.create_funded_project(amounts);
    let round = w.escrow.submit_for_verification(&id, &0, &w.evidence(1));
    (id, round)
}

#[test]
fn round_binds_evidence_and_selects_locked_panel() {
    let w = World::new(8);
    let (id, round) = open(&w, &[300]);
    let r = w.verification.get_round(&round);
    assert_eq!(r.evidence_hash, w.evidence(1));
    assert_eq!((r.project_id, r.milestone, r.attempt), (id, 0, 1));
    assert_eq!(r.panel.len(), 5);
    assert_eq!(r.commit_deadline, w.now() + COMMIT);
    assert_eq!(r.reveal_deadline, w.now() + COMMIT + REVEAL);
    for m in r.panel.iter() {
        assert!(w.verifiers.contains(&m));
        assert_eq!(w.registry.get_lock(&m, &round), LOCK);
        assert_eq!(w.registry.get_verifier(&m).unwrap().locked, LOCK);
    }
    // panel members are distinct
    let panel = w.panel(round);
    for i in 0..panel.len() {
        for j in i + 1..panel.len() {
            assert_ne!(panel[i], panel[j]);
        }
    }
    assert_eq!(w.escrow.get_milestone(&id, &0).current_round, Some(round));
}

#[test]
fn creator_is_never_on_the_panel() {
    let w = World::new(5);
    // Creator registers as a verifier too: pool of 6, but creator excluded.
    w.registry.register(&w.creator, &BytesN::from_array(&w.env, &[0; 32]));
    w.registry.deposit_stake(&w.creator, &500);
    let (_, round) = open(&w, &[300]);
    assert!(!w.panel(round).contains(&w.creator));
}

#[test]
fn not_enough_verifiers_blocks_round() {
    let w = World::new(4);
    let id = w.create_funded_project(&[300]);
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &0, &w.evidence(1)),
        VerificationError::NotEnoughVerifiers
    );
    // Revert is atomic: milestone untouched.
    assert_eq!(w.escrow.get_milestone(&id, &0).attempts, 0);
}

#[test]
fn open_round_only_callable_by_escrow() {
    let w = World::new(6);
    let attacker = Address::generate(&w.env);
    w.env.mock_auths(&[MockAuth {
        address: &attacker,
        invoke: &MockAuthInvoke {
            contract: &w.verification.address,
            fn_name: "open_round",
            args: (1u64, 0u32, 1u32, w.evidence(1), attacker.clone()).into_val(&w.env),
            sub_invokes: &[],
        },
    }]);
    assert!(w
        .verification
        .try_open_round(&1, &0, &1, &w.evidence(1), &attacker)
        .is_err());
}

#[test]
fn commit_rules() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    let outsider = w
        .verifiers
        .iter()
        .find(|v| !panel.contains(v))
        .unwrap()
        .clone();
    let c = BytesN::from_array(&w.env, &[1; 32]);
    assert_contract_err!(w.verification.try_commit(&outsider, &round, &c), VerificationError::NotOnPanel);
    w.verification.commit(&panel[0], &round, &c);
    assert_contract_err!(
        w.verification.try_commit(&panel[0], &round, &c),
        VerificationError::AlreadyCommitted
    );
    assert_eq!(w.verification.get_phase(&round), Phase::Commit);
    // Reveal during commit phase is rejected.
    assert_contract_err!(
        w.verification.try_reveal(&panel[0], &round, &VOTE_APPROVE, &w.salt(0)),
        VerificationError::WrongPhase
    );
    w.advance(COMMIT + 1);
    assert_contract_err!(
        w.verification.try_commit(&panel[1], &round, &c),
        VerificationError::WrongPhase
    );
    assert_contract_err!(w.verification.try_commit(&panel[0], &999, &c), VerificationError::RoundNotFound);
}

#[test]
fn commit_requires_voter_auth() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    let other = Address::generate(&w.env);
    let c = BytesN::from_array(&w.env, &[1; 32]);
    w.env.mock_auths(&[MockAuth {
        address: &other,
        invoke: &MockAuthInvoke {
            contract: &w.verification.address,
            fn_name: "commit",
            args: (panel[0].clone(), round, c.clone()).into_val(&w.env),
            sub_invokes: &[],
        },
    }]);
    assert!(w.verification.try_commit(&panel[0], &round, &c).is_err());
}

#[test]
fn reveal_rules() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    w.commit(round, &panel[0], 0, VOTE_APPROVE);
    w.commit(round, &panel[1], 1, VOTE_REJECT);
    // A commitment copied from another voter cannot be revealed by the copier.
    let copied = w.verification.get_vote(&round, &panel[0]).unwrap().commitment;
    w.verification.commit(&panel[2], &round, &copied);
    w.advance(COMMIT + 1);
    assert_eq!(w.verification.get_phase(&round), Phase::Reveal);

    // Wrong vote / wrong salt / invalid vote / never committed.
    assert_contract_err!(
        w.verification.try_reveal(&panel[0], &round, &VOTE_REJECT, &w.salt(0)),
        VerificationError::CommitmentMismatch
    );
    assert_contract_err!(
        w.verification.try_reveal(&panel[0], &round, &VOTE_APPROVE, &w.salt(1)),
        VerificationError::CommitmentMismatch
    );
    assert_contract_err!(
        w.verification.try_reveal(&panel[0], &round, &3, &w.salt(0)),
        VerificationError::InvalidVote
    );
    assert_contract_err!(
        w.verification.try_reveal(&panel[3], &round, &VOTE_APPROVE, &w.salt(3)),
        VerificationError::NotCommitted
    );
    assert_contract_err!(
        w.verification.try_reveal(&panel[2], &round, &VOTE_APPROVE, &w.salt(0)),
        VerificationError::CommitmentMismatch
    );

    w.verification.reveal(&panel[0], &round, &VOTE_APPROVE, &w.salt(0));
    assert_contract_err!(
        w.verification.try_reveal(&panel[0], &round, &VOTE_APPROVE, &w.salt(0)),
        VerificationError::AlreadyRevealed
    );
    let rec = w.verification.get_vote(&round, &panel[0]).unwrap();
    assert!(rec.revealed);
    assert_eq!(rec.vote, VOTE_APPROVE);

    // Reveal after the deadline is rejected.
    w.advance(REVEAL);
    assert_contract_err!(
        w.verification.try_reveal(&panel[1], &round, &VOTE_REJECT, &w.salt(1)),
        VerificationError::WrongPhase
    );
}

#[test]
fn finalize_timing_and_once() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    for (i, p) in panel.iter().enumerate() {
        w.commit(round, p, i, VOTE_APPROVE);
    }
    assert_contract_err!(w.verification.try_finalize_round(&round), VerificationError::NotFinalizable);
    w.advance(COMMIT + 1);
    for (i, p) in panel.iter().enumerate().take(4) {
        w.verification.reveal(p, &round, &VOTE_APPROVE, &w.salt(i));
    }
    // One reveal still outstanding and deadline not reached.
    assert_contract_err!(w.verification.try_finalize_round(&round), VerificationError::NotFinalizable);
    w.verification.reveal(&panel[4], &round, &VOTE_APPROVE, &w.salt(4));
    // Everyone who committed revealed → early finalization allowed.
    assert_eq!(w.verification.get_phase(&round), Phase::Finalizable);
    assert_eq!(w.verification.finalize_round(&round), Outcome::Approved);
    assert_contract_err!(w.verification.try_finalize_round(&round), VerificationError::AlreadyFinalized);
    assert_eq!(w.verification.get_phase(&round), Phase::Finalized);
}

#[test]
fn missing_reveals_cannot_block_round_and_cause_no_quorum() {
    let w = World::new(6);
    let (id, round) = open(&w, &[300]);
    // 3 reveal, 1 commits without revealing, 1 never commits.
    w.run_votes(
        round,
        &[
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, false)),
            None,
        ],
    );
    assert_eq!(w.verification.get_phase(&round), Phase::Finalizable);
    assert_eq!(w.verification.finalize_round(&round), Outcome::NoQuorum);
    // Failed round: final immediately and not appealable.
    let d = w.verification.get_decision(&round);
    assert!(d.is_final);
    assert_eq!(d.outcome, Outcome::NoQuorum);
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &round),
        VerificationError::NotAppealable
    );
    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Pending);
}

#[test]
fn tie_is_inconclusive_and_reopens_milestone() {
    let w = World::new(6);
    let (id, round) = open(&w, &[300]);
    w.run_votes(
        round,
        &[
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, true)),
            Some((VOTE_REJECT, true)),
            Some((VOTE_REJECT, true)),
            None,
        ],
    );
    assert_eq!(w.verification.finalize_round(&round), Outcome::Inconclusive);
    assert!(w.verification.get_decision(&round).is_final);
    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Pending);
    // Creator may resubmit with new evidence.
    let r2 = w.escrow.submit_for_verification(&id, &0, &w.evidence(7));
    assert_eq!(w.verification.get_round(&r2).attempt, 2);
    assert_eq!(w.verification.get_round(&r2).evidence_hash, w.evidence(7));
}

#[test]
fn slashing_only_for_no_shows_never_for_minority_votes() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    let treasury_before = w.token.balance(&w.treasury);
    w.run_votes(
        round,
        &[
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, true)),
            Some((VOTE_APPROVE, true)),
            Some((VOTE_REJECT, true)), // minority: no penalty
            Some((VOTE_APPROVE, false)), // committed, never revealed: slashed
        ],
    );
    assert_eq!(w.verification.finalize_round(&round), Outcome::Approved);
    for (i, m) in panel.iter().enumerate() {
        let v = w.registry.get_verifier(m).unwrap();
        assert_eq!(v.locked, 0, "all locks released");
        assert_eq!(w.registry.get_lock(m, &round), 0);
        if i == 4 {
            assert_eq!((v.stake, v.no_shows, v.total_slashed), (490, 1, 10));
        } else {
            assert_eq!((v.stake, v.rounds_revealed), (500, 1));
        }
    }
    assert_eq!(w.token.balance(&w.treasury), treasury_before + 10);
}

#[test]
fn no_commit_is_slashed() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    w.run_votes(round, &[Some((VOTE_APPROVE, true)), Some((VOTE_APPROVE, true)), Some((VOTE_APPROVE, true)), Some((VOTE_APPROVE, true)), None]);
    w.verification.finalize_round(&round);
    assert_eq!(w.registry.get_verifier(&panel[4]).unwrap().stake, 490);
}

#[test]
fn stake_locked_during_round_cannot_be_withdrawn() {
    let w = World::new(5); // pool == panel size: every verifier is selected
    let v = &w.verifiers[0];
    let (_, round) = open(&w, &[300]);
    assert!(w.panel(round).contains(v));
    // 500 staked, 100 locked: only 400 is free.
    assert_contract_err!(
        w.registry.try_request_unstake(v, &401),
        RegistryError::InsufficientFreeStake
    );
    w.registry.request_unstake(v, &400);
    assert_contract_err!(w.registry.try_request_unstake(v, &1), RegistryError::InsufficientFreeStake);
    // Unbonded part is withdrawable after the delay even while the lock persists.
    w.advance(51);
    assert_eq!(w.registry.withdraw(v), 400);
    // Round expires with no votes: v is slashed 10 % of the lock, then released.
    w.advance(COMMIT + REVEAL);
    w.verification.finalize_round(&round);
    let rec = w.registry.get_verifier(v).unwrap();
    assert_eq!((rec.stake, rec.locked), (90, 0));
    assert_contract_err!(w.registry.try_request_unstake(v, &91), RegistryError::InsufficientFreeStake);
    w.registry.request_unstake(v, &90);
}

#[test]
fn param_changes_do_not_affect_open_round() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let mut p = default_vparams();
    p.quorum = 1;
    w.verification.set_params(&p);
    assert_eq!(w.verification.get_round(&round).quorum, 4);
    w.run_votes(round, &[Some((VOTE_APPROVE, true)), None, None, None, None]);
    assert_eq!(w.verification.finalize_round(&round), Outcome::NoQuorum);
}

#[test]
fn invalid_params_rejected() {
    let w = World::new(0);
    let mut p = default_vparams();
    p.approval_threshold_bps = 5000; // would allow Approved and Rejected simultaneously
    assert_contract_err!(w.verification.try_set_params(&p), VerificationError::InvalidParams);
    let mut p = default_vparams();
    p.quorum = 6;
    assert_contract_err!(w.verification.try_set_params(&p), VerificationError::InvalidParams);
}

#[test]
fn commitment_helper_matches_contract_check() {
    let w = World::new(6);
    let (_, round) = open(&w, &[300]);
    let panel = w.panel(round);
    let salt = BytesN::from_array(&w.env, &[42; 32]);
    let c = w.verification.compute_commitment(&round, &panel[0], &VOTE_REJECT, &salt);
    w.verification.commit(&panel[0], &round, &c);
    w.advance(COMMIT + 1);
    w.verification.reveal(&panel[0], &round, &VOTE_REJECT, &salt);
}
