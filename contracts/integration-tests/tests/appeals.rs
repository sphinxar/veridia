//! Appeals, appeal windows, bonds and decision finality.
use soroban_sdk::testutils::Address as _;
use soroban_sdk::Address;
use veridia_integration_tests::*;

fn rejected_round(w: &World) -> (u64, u64) {
    let id = w.create_funded_project(&[300]);
    let round = w.decide(id, 0, VOTE_REJECT);
    (id, round)
}

fn unanimous(w: &World, round: u64, vote: u32) {
    w.run_votes(round, &[Some((vote, true)); 5]);
    w.verification.finalize_round(&round);
}

#[test]
fn appeal_panel_is_disjoint_and_overturn_releases_funds() {
    let w = World::new(11);
    let (id, round) = rejected_round(&w);
    let original_panel = w.panel(round);
    let creator_before = w.token.balance(&w.creator);

    let appeal = w.verification.appeal(&w.creator, &round);
    assert_eq!(w.token.balance(&w.creator), creator_before - 50, "bond taken");
    let ar = w.verification.get_round(&appeal);
    assert_eq!(ar.kind, veridia_verification::RoundKind::Appeal);
    assert_eq!(ar.parent_round_id, Some(round));
    assert_eq!(ar.evidence_hash, w.verification.get_round(&round).evidence_hash);
    for m in ar.panel.iter() {
        assert!(!original_panel.contains(&m), "appeal panel must exclude original panel");
        assert_ne!(m, w.creator);
    }

    let d = w.verification.get_decision(&round);
    assert!(d.under_appeal && !d.is_final);
    assert_contract_err!(w.escrow.try_settle_milestone(&id, &0), EscrowError::NotFinal);

    unanimous(&w, appeal, VOTE_APPROVE);
    let d = w.verification.get_decision(&round);
    assert!(d.is_final);
    assert_eq!(d.outcome, Outcome::Approved);
    assert_eq!(d.appeal_round_id, Some(appeal));
    // Original result is preserved, not overwritten.
    assert_eq!(w.verification.get_round(&round).outcome, Outcome::Rejected);
    // Overturned → bond returned.
    assert_eq!(w.token.balance(&w.creator), creator_before);

    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Paid);
    assert_eq!(w.token.balance(&w.creator), creator_before + 300);
}

#[test]
fn upheld_appeal_forfeits_bond_to_treasury() {
    let w = World::new(11);
    let (id, round) = rejected_round(&w);
    let appeal = w.verification.appeal(&w.creator, &round);
    unanimous(&w, appeal, VOTE_REJECT);
    let d = w.verification.get_decision(&round);
    assert!(d.is_final);
    assert_eq!(d.outcome, Outcome::Rejected);
    assert_eq!(w.token.balance(&w.treasury), 50);
    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Pending);
}

#[test]
fn failed_appeal_round_keeps_original_outcome() {
    let w = World::new(11);
    let (_, round) = rejected_round(&w);
    let appeal = w.verification.appeal(&w.creator, &round);
    w.run_votes(appeal, &[Some((VOTE_APPROVE, true)), None, None, None, None]);
    assert_eq!(w.verification.finalize_round(&appeal), Outcome::NoQuorum);
    let d = w.verification.get_decision(&round);
    assert!(d.is_final);
    assert_eq!(d.outcome, Outcome::Rejected);
}

#[test]
fn who_may_appeal() {
    let w = World::new(11);
    let (_, rejected) = rejected_round(&w);
    // Only the creator may appeal a rejection.
    assert_contract_err!(
        w.verification.try_appeal(&w.funders[0], &rejected),
        VerificationError::NotAuthorizedToAppeal
    );

    let id = w.create_funded_project(&[300]);
    let approved = w.decide(id, 0, VOTE_APPROVE);
    // Creator cannot appeal own approval; outsiders cannot appeal.
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &approved),
        VerificationError::NotAuthorizedToAppeal
    );
    let outsider = Address::generate(&w.env);
    assert_contract_err!(
        w.verification.try_appeal(&outsider, &approved),
        VerificationError::NotAuthorizedToAppeal
    );
    // A funder may appeal an approval (bond in stake token).
    w.token_admin.mint(&w.funders[1], &0);
    let appeal = w.verification.appeal(&w.funders[1], &approved);
    assert!(appeal > approved);
}

#[test]
fn one_appeal_only_and_appeal_rounds_not_appealable() {
    let w = World::new(11);
    let (_, round) = rejected_round(&w);
    let appeal = w.verification.appeal(&w.creator, &round);
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &round),
        VerificationError::AlreadyAppealed
    );
    unanimous(&w, appeal, VOTE_REJECT);
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &appeal),
        VerificationError::NotAppealable
    );
    assert_contract_err!(
        w.verification.try_get_decision(&appeal),
        VerificationError::NotOriginalRound
    );
}

#[test]
fn appeal_window_enforced() {
    let w = World::new(11);
    let (id, round) = rejected_round(&w);
    let d = w.verification.get_decision(&round);
    assert_eq!(d.appealable_until, w.now() + APPEAL);
    w.advance(APPEAL); // exactly at the boundary: still appealable, not final
    assert!(!w.verification.get_decision(&round).is_final);
    w.advance(1);
    assert!(w.verification.get_decision(&round).is_final);
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &round),
        VerificationError::AppealWindowClosed
    );
    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Pending);
}

#[test]
fn cannot_appeal_unfinalized_round() {
    let w = World::new(11);
    let id = w.create_funded_project(&[300]);
    let round = w.escrow.submit_for_verification(&id, &0, &w.evidence(1));
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &round),
        VerificationError::NotAppealable
    );
}

#[test]
fn appeal_needs_enough_disjoint_verifiers() {
    let w = World::new(9); // 5 on original panel → only 4 left
    let (_, round) = rejected_round(&w);
    assert_contract_err!(
        w.verification.try_appeal(&w.creator, &round),
        VerificationError::NotEnoughVerifiers
    );
}

#[test]
fn end_to_end_two_milestones_with_appeal_on_second() {
    let w = World::new(11);
    let id = w.create_funded_project(&[400, 600]);
    w.decide(id, 0, VOTE_APPROVE);
    w.advance(APPEAL + 1);
    w.escrow.settle_milestone(&id, &0);

    let r = w.decide(id, 1, VOTE_APPROVE);
    // Funder disputes the approval; appeal panel rejects → milestone reopens.
    let appeal = w.verification.appeal(&w.funders[0], &r);
    unanimous(&w, appeal, VOTE_REJECT);
    assert_eq!(w.escrow.settle_milestone(&id, &1), MilestoneStatus::Pending);
    assert_eq!(w.token.balance(&w.escrow.address), 600);
    assert_eq!(w.token.balance(&w.treasury), 0, "bond returned: appeal overturned");
}
