/**
 * Deploy and initialize the three Veridia contracts.
 *
 *   pnpm deploy:local                 # quickstart network on :8000
 *   pnpm deploy:testnet               # Stellar Testnet
 *   tsx scripts/deploy.ts --network local --commit 120 --reveal 120 --appeal 120
 *
 * Contracts reference each other, so all three are deployed first and initialized
 * afterwards (registry → escrow → verification, since verification reads the stake
 * token from the registry during init).
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import { execSync } from "node:child_process";
import { Address, Asset, Contract, Operation, scValToNative } from "@stellar/stellar-sdk";
import { sc } from "../packages/stellar-client/src/scval";
import {
  ROOT,
  XLM,
  argValue,
  fund,
  getNetwork,
  loadOrCreateKey,
  nativeTokenId,
  rpcServer,
  saveDeployment,
  submitOp,
} from "./lib";

const n = getNetwork();
const server = rpcServer(n);
const isLocal = n.name === "local";
const secs = (flag: string, def: number) => Number(argValue(flag, String(def)));

const params = {
  verification: {
    panel_size: Number(argValue("panel", "5")),
    quorum: Number(argValue("quorum", "4")),
    approval_threshold_bps: 6000,
    commit_period_secs: secs("commit", isLocal ? 120 : 300),
    reveal_period_secs: secs("reveal", isLocal ? 120 : 300),
    appeal_window_secs: secs("appeal", isLocal ? 120 : 300),
    appeal_panel_size: Number(argValue("panel", "5")),
    appeal_bond: 10n * XLM,
    no_show_slash_bps: 1000,
  },
  registry: { min_stake: 100n * XLM, lock_amount: 100n * XLM, unbonding_secs: 60 },
  escrow: { max_attempts: 3 },
};

const WASM_DIR = join(ROOT, "contracts", "target", "wasm32v1-none", "release");
const CONTRACTS = {
  escrow: "veridia_project_escrow.wasm",
  registry: "veridia_verifier_registry.wasm",
  verification: "veridia_verification.wasm",
} as const;

async function main() {
  console.log(`▶ Deploying Veridia to ${n.name} (${n.rpcUrl})`);
  if (!Object.values(CONTRACTS).every((f) => existsSync(join(WASM_DIR, f))) || process.argv.includes("--build")) {
    console.log("  building contracts…");
    execSync("stellar contract build", { cwd: join(ROOT, "contracts"), stdio: "inherit" });
  }

  const admin = loadOrCreateKey(n.name, "admin");
  const treasury = loadOrCreateKey(n.name, "treasury");
  await fund(n, server, admin.publicKey());
  await fund(n, server, treasury.publicKey());
  console.log(`  admin    ${admin.publicKey()}`);
  console.log(`  treasury ${treasury.publicKey()}`);
  const startLedger = (await server.getLatestLedger()).sequence;

  // Native XLM Stellar Asset Contract (exists on testnet; may need deploying locally).
  const token = nativeTokenId(n);
  try {
    const probe = await server.getLedgerEntries(new Contract(token).getFootprint());
    if (probe.entries.length === 0) throw new Error("missing");
  } catch {
    console.log("  deploying native XLM asset contract…");
    await submitOp(n, server, admin, Operation.createStellarAssetContract({ asset: Asset.native() }));
  }
  console.log(`  token    ${token} (native XLM SAC)`);

  const wasmHashes: Record<string, string> = {};
  const ids: Record<string, string> = {};
  for (const [name, file] of Object.entries(CONTRACTS)) {
    const wasm = readFileSync(join(WASM_DIR, file));
    const up = await submitOp(n, server, admin, Operation.uploadContractWasm({ wasm }));
    const hash = Buffer.from(scValToNative(up.retval!) as Uint8Array);
    wasmHashes[name] = hash.toString("hex");
    const created = await submitOp(
      n,
      server,
      admin,
      Operation.createCustomContract({
        address: Address.fromString(admin.publicKey()),
        wasmHash: hash,
        salt: randomBytes(32),
      }),
    );
    ids[name] = Address.fromScVal(created.retval!).toString();
    console.log(`  ${name.padEnd(12)} ${ids[name]}`);
  }

  const call = (contract: string, method: string, ...args: Parameters<Contract["call"]>[1][]) =>
    submitOp(n, server, admin, new Contract(contract).call(method, ...args));

  const v = params.verification;
  const r = params.registry;
  await call(
    ids.registry!,
    "init",
    sc.address(admin.publicKey()),
    sc.address(ids.verification!),
    sc.address(token),
    sc.address(treasury.publicKey()),
    sc.struct({
      min_stake: sc.i128(r.min_stake),
      lock_amount: sc.i128(r.lock_amount),
      unbonding_secs: sc.u64(r.unbonding_secs),
    }),
  );
  await call(
    ids.escrow!,
    "init",
    sc.address(admin.publicKey()),
    sc.address(ids.verification!),
    sc.u32(params.escrow.max_attempts),
  );
  await call(
    ids.verification!,
    "init",
    sc.address(admin.publicKey()),
    sc.address(ids.escrow!),
    sc.address(ids.registry!),
    sc.address(treasury.publicKey()),
    sc.struct({
      panel_size: sc.u32(v.panel_size),
      quorum: sc.u32(v.quorum),
      approval_threshold_bps: sc.u32(v.approval_threshold_bps),
      commit_period_secs: sc.u64(v.commit_period_secs),
      reveal_period_secs: sc.u64(v.reveal_period_secs),
      appeal_window_secs: sc.u64(v.appeal_window_secs),
      appeal_panel_size: sc.u32(v.appeal_panel_size),
      appeal_bond: sc.i128(v.appeal_bond),
      no_show_slash_bps: sc.u32(v.no_show_slash_bps),
    }),
  );
  await call(ids.escrow!, "set_token_allowed", sc.address(token), sc.bool(true));
  console.log("  initialized all contracts; XLM allow-listed for funding");

  saveDeployment({
    network: n.name,
    rpcUrl: n.rpcUrl,
    passphrase: n.passphrase,
    contracts: {
      escrow: ids.escrow!,
      registry: ids.registry!,
      verification: ids.verification!,
      token,
    },
    admin: admin.publicKey(),
    treasury: treasury.publicKey(),
    startLedger,
    deployedAt: new Date().toISOString(),
    wasmHashes,
    params: JSON.parse(JSON.stringify(params, (_k, val) => (typeof val === "bigint" ? val.toString() : val))),
  });
  console.log(`✔ Wrote deployments/${n.name}.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
