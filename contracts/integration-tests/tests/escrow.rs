//! ProjectEscrow: creation, funding, accounting, sequencing, settlement, refunds.
use soroban_sdk::{
    testutils::{Address as _, MockAuth, MockAuthInvoke},
    vec, Address, BytesN, IntoVal,
};
use veridia_integration_tests::*;

#[test]
fn create_project_validations() {
    let w = World::new(6);
    let meta = BytesN::from_array(&w.env, &[1; 32]);
    let fd = w.now() + 10;
    let bad_token = Address::generate(&w.env);
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &bad_token, &w.milestones(&[10]), &fd, &meta),
        EscrowError::TokenNotAllowed
    );
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &w.token.address, &vec![&w.env], &fd, &meta),
        EscrowError::InvalidMilestones
    );
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &w.token.address, &w.milestones(&[10, 0]), &fd, &meta),
        EscrowError::InvalidMilestones
    );
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &w.token.address, &w.milestones(&[10]), &w.now(), &meta),
        EscrowError::InvalidDeadline
    );
    let non_increasing = vec![
        &w.env,
        MilestoneInput { amount: 5, deadline: fd + 100 },
        MilestoneInput { amount: 5, deadline: fd + 100 },
    ];
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &w.token.address, &non_increasing, &fd, &meta),
        EscrowError::InvalidDeadline
    );
    let before_funding = vec![&w.env, MilestoneInput { amount: 5, deadline: fd }];
    assert_contract_err!(
        w.escrow.try_create_project(&w.creator, &w.token.address, &before_funding, &fd, &meta),
        EscrowError::InvalidDeadline
    );
    let id = w.create_project(&[300, 700]);
    let p = w.escrow.get_project(&id);
    assert_eq!((p.budget, p.funded, p.status), (1000, 0, ProjectStatus::Funding));
    assert_eq!(w.escrow.creator_of(&id), w.creator);
}

#[test]
fn create_project_requires_creator_auth() {
    let w = World::new(0);
    let other = Address::generate(&w.env);
    let ms = w.milestones(&[10]);
    let fd = w.now() + 10;
    let meta = BytesN::from_array(&w.env, &[1; 32]);
    w.env.mock_auths(&[MockAuth {
        address: &other,
        invoke: &MockAuthInvoke {
            contract: &w.escrow.address,
            fn_name: "create_project",
            args: (w.creator.clone(), w.token.address.clone(), ms.clone(), fd, meta.clone()).into_val(&w.env),
            sub_invokes: &[],
        },
    }]);
    assert!(w
        .escrow
        .try_create_project(&w.creator, &w.token.address, &ms, &fd, &meta)
        .is_err());
}

#[test]
fn deposits_are_capped_and_activate_project() {
    let w = World::new(6);
    let id = w.create_project(&[300, 700]);
    assert_contract_err!(w.escrow.try_deposit(&w.funders[0], &id, &0), EscrowError::InvalidAmount);
    w.escrow.deposit(&w.funders[0], &id, &400);
    assert_contract_err!(w.escrow.try_deposit(&w.funders[1], &id, &601), EscrowError::ExceedsBudget);
    w.escrow.deposit(&w.funders[1], &id, &600);
    let p = w.escrow.get_project(&id);
    assert_eq!((p.funded, p.status), (1000, ProjectStatus::Active));
    assert_eq!(w.token.balance(&w.escrow.address), 1000);
    assert_eq!(w.escrow.contribution_of(&id, &w.funders[0]), 400);
    // No more deposits once active.
    assert_contract_err!(w.escrow.try_deposit(&w.funders[2], &id, &1), EscrowError::InvalidState);
}

#[test]
fn deposit_after_funding_deadline_rejected_and_expiry_refunds() {
    let w = World::new(6);
    let id = w.create_project(&[1000]);
    w.escrow.deposit(&w.funders[0], &id, &250);
    assert_contract_err!(w.escrow.try_expire_funding(&id), EscrowError::DeadlineNotPassed);
    w.advance(50_001);
    assert_contract_err!(w.escrow.try_deposit(&w.funders[1], &id, &10), EscrowError::FundingClosed);
    w.escrow.expire_funding(&id);
    assert_eq!(w.escrow.get_project(&id).status, ProjectStatus::Cancelled);
    let before = w.token.balance(&w.funders[0]);
    assert_eq!(w.escrow.claim_refund(&w.funders[0], &id), 250);
    assert_eq!(w.token.balance(&w.funders[0]), before + 250);
    assert_contract_err!(w.escrow.try_claim_refund(&w.funders[0], &id), EscrowError::AlreadyRefunded);
    assert_contract_err!(w.escrow.try_claim_refund(&w.funders[2], &id), EscrowError::NothingToRefund);
}

#[test]
fn verification_requires_full_funding() {
    let w = World::new(6);
    let id = w.create_project(&[300, 700]);
    w.escrow.deposit(&w.funders[0], &id, &999);
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &0, &w.evidence(1)),
        EscrowError::InvalidState
    );
}

#[test]
fn milestones_are_sequential() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300, 700]);
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &1, &w.evidence(1)),
        EscrowError::NotSequential
    );
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &5, &w.evidence(1)),
        EscrowError::MilestoneNotFound
    );
    w.escrow.submit_for_verification(&id, &0, &w.evidence(1));
    // Already in verification: cannot resubmit.
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &0, &w.evidence(2)),
        EscrowError::InvalidState
    );
}

#[test]
fn only_creator_can_submit() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300]);
    let other = Address::generate(&w.env);
    w.env.mock_auths(&[MockAuth {
        address: &other,
        invoke: &MockAuthInvoke {
            contract: &w.escrow.address,
            fn_name: "submit_for_verification",
            args: (id, 0u32, w.evidence(1)).into_val(&w.env),
            sub_invokes: &[],
        },
    }]);
    assert!(w.escrow.try_submit_for_verification(&id, &0, &w.evidence(1)).is_err());
}

#[test]
fn approved_milestone_pays_exactly_once_after_appeal_window() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300, 700]);
    let creator_before = w.token.balance(&w.creator);
    let round = w.decide(id, 0, VOTE_APPROVE);
    assert_eq!(w.verification.get_round(&round).outcome, Outcome::Approved);

    // Appeal window still open → not final → cannot settle.
    let d = w.verification.get_decision(&round);
    assert!(!d.is_final);
    assert_eq!(d.outcome, Outcome::Approved);
    assert_contract_err!(w.escrow.try_settle_milestone(&id, &0), EscrowError::NotFinal);

    w.advance(APPEAL + 1);
    assert!(w.verification.get_decision(&round).is_final);
    assert_eq!(w.escrow.settle_milestone(&id, &0), MilestoneStatus::Paid);
    assert_eq!(w.token.balance(&w.creator), creator_before + 300);
    assert_eq!(w.token.balance(&w.escrow.address), 700);
    let p = w.escrow.get_project(&id);
    assert_eq!((p.released, p.current_milestone, p.status), (300, 1, ProjectStatus::Active));

    // Double payment is impossible.
    assert_contract_err!(w.escrow.try_settle_milestone(&id, &0), EscrowError::InvalidState);
    assert_eq!(w.token.balance(&w.creator), creator_before + 300);

    // Final milestone completes the project.
    w.decide(id, 1, VOTE_APPROVE);
    w.advance(APPEAL + 1);
    w.escrow.settle_milestone(&id, &1);
    let p = w.escrow.get_project(&id);
    assert_eq!((p.released, p.status), (1000, ProjectStatus::Completed));
    assert_eq!(w.token.balance(&w.escrow.address), 0);
    assert_eq!(w.token.balance(&w.creator), creator_before + 1000);
}

#[test]
fn escrow_accounting_is_per_project() {
    let w = World::new(6);
    let a = w.create_funded_project(&[300]);
    let b = w.create_funded_project(&[500]);
    assert_eq!(w.token.balance(&w.escrow.address), 800);
    w.decide(a, 0, VOTE_APPROVE);
    w.advance(APPEAL + 1);
    w.escrow.settle_milestone(&a, &0);
    assert_eq!(w.escrow.get_project(&a).released, 300);
    assert_eq!(w.escrow.get_project(&b).released, 0);
    assert_eq!(w.token.balance(&w.escrow.address), 500);
}

#[test]
fn rejection_reopens_then_fails_at_max_attempts_with_prorata_refunds() {
    let w = World::new(6);
    let id = w.create_funded_project(&[1000, 500]); // funders[0]=900, funders[1]=600
    for attempt in 1..=3u32 {
        let round = w.decide(id, 0, VOTE_REJECT);
        assert_eq!(w.verification.get_round(&round).attempt, attempt);
        w.advance(APPEAL + 1);
        let status = w.escrow.settle_milestone(&id, &0);
        if attempt < 3 {
            assert_eq!(status, MilestoneStatus::Pending);
            assert_eq!(w.escrow.get_milestone(&id, &0).attempts, attempt);
        } else {
            assert_eq!(status, MilestoneStatus::Failed);
        }
    }
    let p = w.escrow.get_project(&id);
    assert_eq!((p.status, p.refund_pool), (ProjectStatus::Failed, 1500));
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &0, &w.evidence(1)),
        EscrowError::InvalidState
    );
    let b0 = w.token.balance(&w.funders[0]);
    assert_eq!(w.escrow.claim_refund(&w.funders[0], &id), 900);
    assert_eq!(w.escrow.claim_refund(&w.funders[1], &id), 600);
    assert_eq!(w.token.balance(&w.funders[0]), b0 + 900);
    assert_eq!(w.token.balance(&w.escrow.address), 0);
}

#[test]
fn refunds_after_partial_release_are_prorata_of_remaining() {
    let w = World::new(6);
    let id = w.create_funded_project(&[400, 600]); // 600 / 400 split
    w.decide(id, 0, VOTE_APPROVE);
    w.advance(APPEAL + 1);
    w.escrow.settle_milestone(&id, &0);
    w.escrow.cancel(&id);
    let p = w.escrow.get_project(&id);
    assert_eq!((p.status, p.refund_pool), (ProjectStatus::Cancelled, 600));
    assert_eq!(w.escrow.claim_refund(&w.funders[0], &id), 360);
    assert_eq!(w.escrow.claim_refund(&w.funders[1], &id), 240);
}

#[test]
fn cancel_rules() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300, 700]);
    w.escrow.submit_for_verification(&id, &0, &w.evidence(1));
    assert_contract_err!(w.escrow.try_cancel(&id), EscrowError::InvalidState);

    let funding = w.create_project(&[100]);
    w.escrow.cancel(&funding);
    assert_contract_err!(w.escrow.try_cancel(&funding), EscrowError::InvalidState);
    assert_contract_err!(w.escrow.try_deposit(&w.funders[0], &funding, &1), EscrowError::InvalidState);
}

#[test]
fn expired_milestone_fails_project() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300]);
    let deadline = w.escrow.get_milestone(&id, &0).deadline;
    assert_contract_err!(w.escrow.try_expire_milestone(&id, &0), EscrowError::DeadlineNotPassed);
    w.advance(deadline - w.now() + 1);
    assert_contract_err!(
        w.escrow.try_submit_for_verification(&id, &0, &w.evidence(1)),
        EscrowError::DeadlinePassed
    );
    w.escrow.expire_milestone(&id, &0);
    assert_eq!(w.escrow.get_project(&id).status, ProjectStatus::Failed);
    assert_eq!(w.escrow.claim_refund(&w.funders[0], &id), 180);
}

#[test]
fn settle_requires_milestone_in_verification() {
    let w = World::new(6);
    let id = w.create_funded_project(&[300]);
    assert_contract_err!(w.escrow.try_settle_milestone(&id, &0), EscrowError::InvalidState);
}

#[test]
fn admin_only_token_allowlist() {
    let w = World::new(0);
    let t = Address::generate(&w.env);
    let other = Address::generate(&w.env);
    w.env.mock_auths(&[MockAuth {
        address: &other,
        invoke: &MockAuthInvoke {
            contract: &w.escrow.address,
            fn_name: "set_token_allowed",
            args: (t.clone(), true).into_val(&w.env),
            sub_invokes: &[],
        },
    }]);
    assert!(w.escrow.try_set_token_allowed(&t, &true).is_err());
    assert!(!w.escrow.is_token_allowed(&t));
}

#[test]
fn init_only_once() {
    let w = World::new(0);
    assert_contract_err!(
        w.escrow.try_init(&w.admin, &w.verification.address, &3),
        EscrowError::AlreadyInitialized
    );
}
