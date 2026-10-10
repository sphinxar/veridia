/**
 * End-to-end smoke test against a live network (local or testnet), using dev keys:
 * create → fund → submit evidence → commit/reveal (seeded verifiers) → finalize →
 * appeal window → settle → assert exactly-once payment.
 *
 *   tsx scripts/smoke.ts --network local
 *
 * Requires: deployed contracts (pnpm deploy:local) and seeded verifiers (pnpm seed:local).
 * Tip: deploy with short periods for a fast run:
 *   tsx scripts/deploy.ts --network local --commit 15 --reveal 15 --appeal 15
 */
import { Keypair } from "@stellar/stellar-sdk";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { MilestoneStatus, ProjectStatus, Outcome } from "../packages/domain/src/enums";
import { metadataHash, randomSalt, sha256Hex } from "../packages/domain/src/hashing";
import { computeCommitment } from "../packages/stellar-client/src/commitment";
import { ContractCallError } from "../packages/stellar-client/src/errors";
import { milestoneInputs, sc } from "../packages/stellar-client/src/scval";
import { KEYS_DIR, XLM, argValue, clientFor, fund, invokeAs, loadOrCreateKey, waitForLedgerTime } from "./lib";

const network = argValue("network", "local")!;
const assert = (cond: unknown, msg: string) => {
  if (!cond) throw new Error(`ASSERTION FAILED: ${msg}`);
  console.log(`  ✔ ${msg}`);
};

async function main() {
  const { client, n, d } = clientFor(network);
  const token = d.contracts.token;
  const creator = loadOrCreateKey(network, "demo-creator");
  const funder = loadOrCreateKey(network, "demo-funder");
  await fund(n, client.server, creator.publicKey());
  await fund(n, client.server, funder.publicKey());

  const latest = await client.server.getLatestLedger();
  const now = Number(latest.closeTime);
  const meta = { title: "Smoke test project", summary: "Automated end-to-end check", milestones: [{ title: "M1" }, { title: "M2" }] };
  const amounts = [10n * XLM, 20n * XLM];

  console.log("1. create project");
  const created = await invokeAs(client, creator, "escrow", "create_project", [
    sc.address(creator.publicKey()),
    sc.address(token),
    milestoneInputs([
      { amount: amounts[0]!, deadline: now + 7200 },
      { amount: amounts[1]!, deadline: now + 14400 },
    ]),
    sc.u64(now + 3600),
    sc.bytes32(await metadataHash(meta)),
  ]);
  const projectId = Number(created.returnValue);
  console.log(`   project ${projectId} (tx ${created.hash})`);

  console.log("2. fund");
  await invokeAs(client, funder, "escrow", "deposit", [sc.address(funder.publicKey()), sc.u64(projectId), sc.i128(30n * XLM)]);
  let p = await client.getProject(projectId);
  assert(p.status === ProjectStatus.Active && p.funded === 30n * XLM, "project fully funded and active");

  console.log("3. submit evidence for milestone 0");
  const evidence = await sha256Hex(`evidence for project ${projectId} at ${Date.now()}`);
  const sub = await invokeAs(client, creator, "escrow", "submit_for_verification", [sc.u64(projectId), sc.u32(0), sc.bytes32(evidence)]);
  const roundId = Number(sub.returnValue);
  const round = await client.getRound(roundId);
  assert(round.evidenceHash === evidence, `round ${roundId} bound to evidence hash`);
  assert(!round.panel.includes(creator.publicKey()), "creator not on panel");

  console.log("4. commit (5 × approve)");
  const keys: Record<string, string> = JSON.parse(readFileSync(join(KEYS_DIR, `${network}.json`), "utf8"));
  const kps = new Map(Object.values(keys).map((s) => [Keypair.fromSecret(s).publicKey(), Keypair.fromSecret(s)]));
  const salts = new Map<string, Uint8Array>();
  for (const member of round.panel) {
    const kp = kps.get(member);
    if (!kp) throw new Error(`panel member ${member} is not a seeded key`);
    const salt = randomSalt();
    salts.set(member, salt);
    await invokeAs(client, kp, "verification", "commit", [sc.address(member), sc.u64(roundId), sc.bytes32(await computeCommitment(roundId, member, 1, salt))]);
  }
  console.log("   waiting for reveal phase…");
  await waitForLedgerTime(client.server, round.commitDeadline);

  console.log("5. reveal");
  for (const member of round.panel) {
    await invokeAs(client, kps.get(member)!, "verification", "reveal", [sc.address(member), sc.u64(roundId), sc.u32(1), sc.bytes32(salts.get(member)!)]);
  }

  console.log("6. finalize (early: all revealed)");
  await invokeAs(client, funder, "verification", "finalize_round", [sc.u64(roundId)]);
  const fin = await client.getRound(roundId);
  assert(fin.outcome === Outcome.Approved, "outcome Approved");
  let decision = await client.getDecision(roundId);
  assert(!decision.isFinal, "not final during appeal window");
  try {
    await invokeAs(client, funder, "escrow", "settle_milestone", [sc.u64(projectId), sc.u32(0)]);
    throw new Error("settle should have failed");
  } catch (e) {
    assert(e instanceof ContractCallError && e.code === 18, "settle rejected before final (NotFinal)");
  }

  console.log("   waiting for appeal window…");
  await waitForLedgerTime(client.server, decision.appealableUntil);
  decision = await client.getDecision(roundId);
  assert(decision.isFinal && decision.outcome === Outcome.Approved, "decision final: Approved");

  console.log("7. settle");
  const before = await client.tokenBalance(token, creator.publicKey());
  const settled = await invokeAs(client, funder, "escrow", "settle_milestone", [sc.u64(projectId), sc.u32(0)]);
  const after = await client.tokenBalance(token, creator.publicKey());
  assert(after - before === amounts[0], `creator received exactly ${amounts[0]! / XLM} XLM (tx ${settled.hash})`);
  const ms = await client.getMilestones(projectId);
  p = await client.getProject(projectId);
  assert(ms[0]!.status === MilestoneStatus.Paid && p.released === amounts[0], "milestone paid, released updated");
  try {
    await invokeAs(client, funder, "escrow", "settle_milestone", [sc.u64(projectId), sc.u32(0)]);
    throw new Error("double settle should fail");
  } catch (e) {
    assert(e instanceof ContractCallError && e.code === 9, "second settle rejected (no double payment)");
  }
  console.log(`\n✔ Smoke test passed on ${network}: project ${projectId}, round ${roundId}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
