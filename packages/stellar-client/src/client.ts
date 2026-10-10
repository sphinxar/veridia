import {
  Account,
  BASE_FEE,
  Contract,
  Keypair,
  TransactionBuilder,
  rpc,
  scValToNative,
  type xdr,
} from "@stellar/stellar-sdk";
import type { ContractIds, NetworkConfig } from "./networks";
import { ContractCallError, decodeContractError, type KnownContract } from "./errors";
import {
  decodeDecision,
  decodeMilestone,
  decodeProject,
  decodeRound,
  decodeVerifier,
  decodeVote,
  sc,
} from "./scval";

/** Signs a transaction envelope (base64 XDR) and returns the signed envelope. */
export type SignTransaction = (
  txXdr: string,
  opts: { networkPassphrase: string; address: string },
) => Promise<string>;

export type TxProgress =
  | { stage: "simulating" }
  | { stage: "signing" }
  | { stage: "submitted"; hash: string }
  | { stage: "confirmed"; hash: string; ledger: number }
  | { stage: "failed"; hash?: string; error: string };

export interface InvokeOptions {
  contract: KnownContract;
  method: string;
  args: xdr.ScVal[];
  source: string;
  sign: SignTransaction;
  onProgress?: (p: TxProgress) => void;
  timeoutMs?: number;
}

export interface InvokeResult<T = unknown> {
  hash: string;
  ledger: number;
  returnValue: T;
}

/** Source used only for read-only simulations; never signs anything. */
// Public key of a throwaway seed (0x01…01); simulation does not require it to exist.
const READ_SOURCE = "GCFIRY65OQE7DFP5KLNS2PF2LVZMUZYJX4OZIEQ36N2IQANUB5XVYOJR";

export class VeridiaClient {
  readonly server: rpc.Server;
  private readonly names: Record<string, KnownContract>;

  constructor(
    readonly network: NetworkConfig,
    readonly contracts: ContractIds,
  ) {
    this.server = new rpc.Server(network.rpcUrl, { allowHttp: network.rpcUrl.startsWith("http://") });
    this.names = {
      [contracts.escrow]: "escrow",
      [contracts.registry]: "registry",
      [contracts.verification]: "verification",
      [contracts.token]: "token",
    };
  }

  contractId(c: KnownContract): string {
    return this.contracts[c === "token" ? "token" : c];
  }

  /** Read-only call via simulation. Nothing is signed or submitted. */
  async read<T = unknown>(contract: KnownContract, method: string, args: xdr.ScVal[] = []): Promise<T> {
    const tx = new TransactionBuilder(new Account(READ_SOURCE, "0"), {
      fee: BASE_FEE,
      networkPassphrase: this.network.passphrase,
    })
      .addOperation(new Contract(this.contractId(contract)).call(method, ...args))
      .setTimeout(30)
      .build();
    const sim = await this.server.simulateTransaction(tx);
    if (rpc.Api.isSimulationError(sim)) throw decodeContractError(sim.error, contract, this.names);
    const retval = sim.result?.retval;
    return (retval ? scValToNative(retval) : undefined) as T;
  }

  /** Build → simulate → sign (wallet) → submit → wait for confirmation. */
  async invoke<T = unknown>(o: InvokeOptions): Promise<InvokeResult<T>> {
    const progress = o.onProgress ?? (() => {});
    progress({ stage: "simulating" });
    const account = await this.server.getAccount(o.source);
    const tx = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: this.network.passphrase,
    })
      .addOperation(new Contract(this.contractId(o.contract)).call(o.method, ...o.args))
      .setTimeout(120)
      .build();
    const sim = await this.server.simulateTransaction(tx);
    if (rpc.Api.isSimulationError(sim)) {
      const err = decodeContractError(sim.error, o.contract, this.names);
      progress({ stage: "failed", error: err.message });
      throw err;
    }
    const prepared = rpc.assembleTransaction(tx, sim).build();

    progress({ stage: "signing" });
    const signedXdr = await o.sign(prepared.toXDR(), {
      networkPassphrase: this.network.passphrase,
      address: o.source,
    });
    const signed = TransactionBuilder.fromXDR(signedXdr, this.network.passphrase);

    const sent = await this.server.sendTransaction(signed);
    if (sent.status === "ERROR" || sent.status === "TRY_AGAIN_LATER") {
      const detail = sent.errorResult?.result.type ?? sent.status;
      const error = `Transaction rejected by the network: ${detail}`;
      progress({ stage: "failed", hash: sent.hash, error });
      throw new ContractCallError(error, o.contract, null, detail);
    }
    progress({ stage: "submitted", hash: sent.hash });

    const res = await this.waitForTransaction(sent.hash, o.timeoutMs ?? 60_000);
    if (res.status !== rpc.Api.GetTransactionStatus.SUCCESS) {
      const diag =
        res.status === rpc.Api.GetTransactionStatus.FAILED
          ? (res.diagnosticEventsXdr ?? []).map((e) => e.toXDR("base64")).join("\n")
          : "";
      const error =
        res.status === rpc.Api.GetTransactionStatus.NOT_FOUND
          ? "Transaction not confirmed in time; it will be reconciled automatically"
          : "Transaction failed on-chain";
      progress({ stage: "failed", hash: sent.hash, error });
      throw new ContractCallError(error, o.contract, null, diag);
    }
    progress({ stage: "confirmed", hash: sent.hash, ledger: res.ledger });
    return {
      hash: sent.hash,
      ledger: res.ledger,
      returnValue: (res.returnValue ? scValToNative(res.returnValue) : undefined) as T,
    };
  }

  async waitForTransaction(hash: string, timeoutMs = 60_000): Promise<rpc.Api.GetTransactionResponse> {
    const start = Date.now();
    let delay = 500;
    for (;;) {
      const res = await this.server.getTransaction(hash);
      if (res.status !== rpc.Api.GetTransactionStatus.NOT_FOUND) return res;
      if (Date.now() - start > timeoutMs) return res;
      await new Promise((r) => setTimeout(r, delay));
      delay = Math.min(delay * 1.5, 3000);
    }
  }

  // ---------------------------------------------------------------- typed reads

  async getProject(id: number) {
    return decodeProject(await this.read("escrow", "get_project", [sc.u64(id)]));
  }
  async getMilestones(id: number) {
    return ((await this.read<unknown[]>("escrow", "get_milestones", [sc.u64(id)])) ?? []).map(decodeMilestone);
  }
  async projectCount() {
    return Number(await this.read<bigint>("escrow", "project_count"));
  }
  async contributionOf(projectId: number, funder: string) {
    return BigInt(await this.read<bigint>("escrow", "contribution_of", [sc.u64(projectId), sc.address(funder)]));
  }
  async hasRefunded(projectId: number, funder: string) {
    return Boolean(await this.read("escrow", "has_refunded", [sc.u64(projectId), sc.address(funder)]));
  }
  async isTokenAllowed(token: string) {
    return Boolean(await this.read("escrow", "is_token_allowed", [sc.address(token)]));
  }
  async getRound(id: number) {
    return decodeRound(await this.read("verification", "get_round", [sc.u64(id)]));
  }
  async getDecision(roundId: number) {
    return decodeDecision(await this.read("verification", "get_decision", [sc.u64(roundId)]));
  }
  async getPhase(roundId: number) {
    return Number(await this.read("verification", "get_phase", [sc.u64(roundId)]));
  }
  async getVote(roundId: number, voter: string) {
    return decodeVote(await this.read("verification", "get_vote", [sc.u64(roundId), sc.address(voter)]));
  }
  async roundCount() {
    return Number(await this.read<bigint>("verification", "round_count"));
  }
  async getVerifier(addr: string) {
    return decodeVerifier(await this.read("registry", "get_verifier", [sc.address(addr)]));
  }
  async eligibleVerifiers() {
    return ((await this.read<string[]>("registry", "eligible")) ?? []).map(String);
  }
  async tokenBalance(token: string, addr: string): Promise<bigint> {
    const tx = new TransactionBuilder(new Account(READ_SOURCE, "0"), {
      fee: BASE_FEE,
      networkPassphrase: this.network.passphrase,
    })
      .addOperation(new Contract(token).call("balance", sc.address(addr)))
      .setTimeout(30)
      .build();
    const sim = await this.server.simulateTransaction(tx);
    if (rpc.Api.isSimulationError(sim)) return 0n;
    return sim.result?.retval ? BigInt(scValToNative(sim.result.retval) as bigint) : 0n;
  }
  async getVerificationConfig() {
    return this.read<Record<string, unknown>>("verification", "get_config");
  }
  async getRegistryConfig() {
    return this.read<Record<string, unknown>>("registry", "get_config");
  }
}

/** Signer backed by a local keypair — for scripts and tests only, never the web UI. */
export function keypairSigner(kp: Keypair): SignTransaction {
  return async (txXdr, { networkPassphrase }) => {
    const tx = TransactionBuilder.fromXDR(txXdr, networkPassphrase);
    tx.sign(kp);
    return tx.toXDR();
  };
}
