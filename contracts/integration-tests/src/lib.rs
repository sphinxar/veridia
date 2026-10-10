//! Test fixture wiring the three Veridia contracts together with a Stellar Asset token.
extern crate std;

use soroban_sdk::{
    testutils::{Address as _, Ledger},
    token::{StellarAssetClient, TokenClient},
    vec, Address, BytesN, Env, Vec,
};
pub use veridia_common::{Decision, Outcome};
pub use veridia_project_escrow::{
    Error as EscrowError, MilestoneInput, MilestoneStatus, ProjectEscrow, ProjectEscrowClient,
    ProjectStatus,
};
pub use veridia_verification::{
    Error as VerificationError, Phase, Verification, VerificationClient, VerificationParams,
    VOTE_APPROVE, VOTE_REJECT,
};
pub use veridia_verifier_registry::{
    Error as RegistryError, RegistryParams, VerifierRegistry, VerifierRegistryClient,
};

pub const START: u64 = 1_000_000;
pub const COMMIT: u64 = 100;
pub const REVEAL: u64 = 100;
pub const APPEAL: u64 = 100;
pub const LOCK: i128 = 100;

#[macro_export]
macro_rules! assert_contract_err {
    ($call:expr, $err:expr) => {
        assert_eq!(
            $call.err().expect("expected contract error").ok(),
            Some(soroban_sdk::Error::from_contract_error($err as u32)),
            "unexpected result for {}",
            stringify!($call)
        )
    };
}

pub fn default_vparams() -> VerificationParams {
    VerificationParams {
        panel_size: 5,
        quorum: 4,
        approval_threshold_bps: 6000,
        commit_period_secs: COMMIT,
        reveal_period_secs: REVEAL,
        appeal_window_secs: APPEAL,
        appeal_panel_size: 5,
        appeal_bond: 50,
        no_show_slash_bps: 1000,
    }
}

pub struct World<'a> {
    pub env: Env,
    pub admin: Address,
    pub treasury: Address,
    pub creator: Address,
    pub funders: std::vec::Vec<Address>,
    pub verifiers: std::vec::Vec<Address>,
    pub token: TokenClient<'a>,
    pub token_admin: StellarAssetClient<'a>,
    pub escrow: ProjectEscrowClient<'a>,
    pub registry: VerifierRegistryClient<'a>,
    pub verification: VerificationClient<'a>,
}

impl<'a> World<'a> {
    pub fn new(n_verifiers: usize) -> Self {
        Self::with_params(n_verifiers, default_vparams())
    }

    pub fn with_params(n_verifiers: usize, vparams: VerificationParams) -> Self {
        let env = Env::default();
        env.mock_all_auths();
        env.ledger().set_timestamp(START);
        // Keep the test ledger alive across long simulated periods.
        env.ledger().with_mut(|l| {
            l.min_persistent_entry_ttl = 10_000_000;
            l.min_temp_entry_ttl = 10_000_000;
            l.max_entry_ttl = 20_000_000;
        });

        let admin = Address::generate(&env);
        let treasury = Address::generate(&env);
        let creator = Address::generate(&env);
        let sac = env.register_stellar_asset_contract_v2(admin.clone());
        let token = TokenClient::new(&env, &sac.address());
        let token_admin = StellarAssetClient::new(&env, &sac.address());

        let escrow_id = env.register(ProjectEscrow, ());
        let registry_id = env.register(VerifierRegistry, ());
        let verification_id = env.register(Verification, ());
        let escrow = ProjectEscrowClient::new(&env, &escrow_id);
        let registry = VerifierRegistryClient::new(&env, &registry_id);
        let verification = VerificationClient::new(&env, &verification_id);

        registry.init(
            &admin,
            &verification_id,
            &sac.address(),
            &treasury,
            &RegistryParams {
                min_stake: LOCK,
                lock_amount: LOCK,
                unbonding_secs: 50,
            },
        );
        escrow.init(&admin, &verification_id, &3);
        verification.init(&admin, &escrow_id, &registry_id, &treasury, &vparams);
        escrow.set_token_allowed(&sac.address(), &true);

        let mut verifiers = std::vec::Vec::new();
        for i in 0..n_verifiers {
            let v = Address::generate(&env);
            token_admin.mint(&v, &1_000);
            registry.register(&v, &BytesN::from_array(&env, &[i as u8; 32]));
            registry.deposit_stake(&v, &500);
            verifiers.push(v);
        }
        let funders = (0..3)
            .map(|_| {
                let f = Address::generate(&env);
                token_admin.mint(&f, &1_000_000);
                f
            })
            .collect();
        token_admin.mint(&creator, &1_000);

        World {
            env,
            admin,
            treasury,
            creator,
            funders,
            verifiers,
            token,
            token_admin,
            escrow,
            registry,
            verification,
        }
    }

    pub fn now(&self) -> u64 {
        self.env.ledger().timestamp()
    }

    pub fn advance(&self, secs: u64) {
        let t = self.now() + secs;
        self.env.ledger().set_timestamp(t);
    }

    pub fn milestones(&self, amounts: &[i128]) -> Vec<MilestoneInput> {
        let mut v = vec![&self.env];
        for (i, a) in amounts.iter().enumerate() {
            v.push_back(MilestoneInput {
                amount: *a,
                deadline: self.now() + 100_000 * (i as u64 + 2),
            });
        }
        v
    }

    pub fn create_project(&self, amounts: &[i128]) -> u64 {
        self.escrow.create_project(
            &self.creator,
            &self.token.address,
            &self.milestones(amounts),
            &(self.now() + 50_000),
            &BytesN::from_array(&self.env, &[9; 32]),
        )
    }

    /// Project funded by funders[0] (60 %) and funders[1] (40 %).
    pub fn create_funded_project(&self, amounts: &[i128]) -> u64 {
        let id = self.create_project(amounts);
        let budget: i128 = amounts.iter().sum();
        let a = budget * 6 / 10;
        self.escrow.deposit(&self.funders[0], &id, &a);
        self.escrow.deposit(&self.funders[1], &id, &(budget - a));
        id
    }

    pub fn evidence(&self, n: u8) -> BytesN<32> {
        BytesN::from_array(&self.env, &[n; 32])
    }

    pub fn salt(&self, voter_idx: usize) -> BytesN<32> {
        BytesN::from_array(&self.env, &[(voter_idx as u8).wrapping_add(100); 32])
    }

    pub fn panel(&self, round_id: u64) -> std::vec::Vec<Address> {
        self.verification.get_round(&round_id).panel.iter().collect()
    }

    pub fn commit(&self, round_id: u64, voter: &Address, idx: usize, vote: u32) {
        let c = self
            .verification
            .compute_commitment(&round_id, voter, &vote, &self.salt(idx));
        self.verification.commit(voter, &round_id, &c);
    }

    /// `votes[i]` for panel member i: None = no commit; Some((vote, reveal?)).
    /// Leaves the ledger after the reveal deadline when any reveal is missing.
    pub fn run_votes(&self, round_id: u64, votes: &[Option<(u32, bool)>]) {
        let panel = self.panel(round_id);
        for (i, v) in votes.iter().enumerate() {
            if let Some((vote, _)) = v {
                self.commit(round_id, &panel[i], i, *vote);
            }
        }
        self.advance(COMMIT + 1);
        for (i, v) in votes.iter().enumerate() {
            if let Some((vote, true)) = v {
                self.verification
                    .reveal(&panel[i], &round_id, vote, &self.salt(i));
            }
        }
        self.advance(REVEAL);
    }

    /// Submit milestone `index`, vote unanimously `vote`, finalize. Returns round id.
    pub fn decide(&self, project: u64, index: u32, vote: u32) -> u64 {
        let round = self
            .escrow
            .submit_for_verification(&project, &index, &self.evidence(index as u8 + 1));
        self.run_votes(round, &[Some((vote, true)); 5]);
        self.verification.finalize_round(&round);
        round
    }
}
