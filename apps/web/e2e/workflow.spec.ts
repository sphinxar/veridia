/**
 * Full milestone lifecycle through the real UI on a local Stellar network:
 * create project → fund → upload evidence → submit → commit/reveal → finalize →
 * appeal window → release funds exactly once.
 *
 * One panel member votes through the UI (commit-reveal with local salt); the other
 * seeded verifiers vote directly against the contract in parallel to fit the window.
 */
import { expect, test, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Keypair } from "@stellar/stellar-sdk";
import { Outcome, Phase, randomSalt } from "@veridia/domain";
import { ContractCallError, VeridiaClient, computeCommitment, keypairSigner, networkConfig, sc } from "@veridia/stellar-client";
import { E2E_DEPLOYMENTS_DIR, ROOT } from "./env";
import { attachWallet } from "./wallet";

const XLM = 10_000_000n;
const deployment = JSON.parse(readFileSync(join(E2E_DEPLOYMENTS_DIR, "local.json"), "utf8"));
const client = new VeridiaClient(networkConfig("local"), deployment.contracts);
const seeded = new Map(
  Object.values(JSON.parse(readFileSync(join(ROOT, ".data", "keys", "local.json"), "utf8")) as Record<string, string>).map((s) => {
    const kp = Keypair.fromSecret(s);
    return [kp.publicKey(), kp] as const;
  }),
);

async function friendbot(address: string) {
  for (let i = 0; i < 10; i++) {
    const r = await fetch(`http://localhost:8000/friendbot?addr=${address}`);
    if (r.ok) return;
    await new Promise((res) => setTimeout(res, 1000));
  }
  throw new Error("friendbot failed");
}

async function until<T>(fn: () => Promise<T>, ok: (v: T) => boolean, timeoutMs = 120_000): Promise<T> {
  const start = Date.now();
  for (;;) {
    const v = await fn().catch(() => undefined as T);
    if (v !== undefined && ok(v)) return v;
    if (Date.now() - start > timeoutMs) throw new Error("condition not met in time");
    await new Promise((r) => setTimeout(r, 1000));
  }
}

async function asUser(browser: import("@playwright/test").Browser, kp: Keypair): Promise<Page> {
  const ctx = await browser.newContext();
  await attachWallet(ctx, kp);
  return ctx.newPage();
}

test("project creation, funding, evidence, commit-reveal verification and escrow release", async ({ browser }) => {
  const creator = Keypair.random();
  const funder = Keypair.random();
  await Promise.all([friendbot(creator.publicKey()), friendbot(funder.publicKey())]);
  const title = `E2E Solar Microgrid ${Date.now()}`;

  // ------------------------------------------------------------ 1. create
  const cp = await asUser(browser, creator);
  await cp.goto("/projects/new");
  await expect(cp.getByTestId("network-badge")).toHaveText(/Local network/);
  await expect(cp.getByTestId("connected-address")).toBeVisible();
  await cp.getByLabel("Title", { exact: true }).first().fill(title);
  await cp.getByLabel("Summary").fill("Install a 20 kW solar microgrid for a rural school");
  await cp.getByRole("button", { name: "Remove milestone 2" }).click();
  await cp.locator("#m0title").fill("Panels installed");
  await cp.locator("#m0desc").fill("Photos and commissioning report of installed panels");
  await cp.locator("#m0amount").fill("10");
  await expect(cp.getByTestId("budget-total")).toHaveText("10 XLM");
  await cp.getByTestId("create-project").click();
  await cp.waitForURL(/\/projects\/\d+$/, { timeout: 90_000 });
  const projectUrl = new URL(cp.url()).pathname;
  await expect(cp.getByTestId("project-title")).toHaveText(title);
  await expect(cp.getByText("Funding", { exact: true }).first()).toBeVisible({ timeout: 60_000 });

  const projectId = await until(() => client.projectCount(), (n) => n >= 1);
  const onchain = await client.getProject(projectId);
  expect(onchain.creator).toBe(creator.publicKey());
  expect(onchain.budget).toBe(10n * XLM);

  // Rule 1: cannot submit before full funding.
  await expect(cp.getByText("The project must be fully funded (Active) first.")).toBeVisible();

  // ------------------------------------------------------------ 2. fund
  const fp = await asUser(browser, funder);
  await fp.goto(projectUrl);
  await fp.getByTestId("deposit-amount").fill("10");
  await fp.getByTestId("deposit-submit").click();
  await expect(fp.getByText("Active", { exact: true }).first()).toBeVisible({ timeout: 60_000 });
  expect((await client.getProject(projectId)).funded).toBe(10n * XLM);

  // ------------------------------------------------------------ 3. evidence + submit
  await cp.reload();
  const pdf = Buffer.from("%PDF-1.4\n% Veridia E2E commissioning report\n1 0 obj <<>> endobj\ntrailer <<>>\n%%EOF\n");
  await cp.getByTestId("evidence-file-0").setInputFiles({ name: "commissioning-report.pdf", mimeType: "application/pdf", buffer: pdf });
  await cp.getByTestId("evidence-upload-0").click();
  await expect(cp.getByText("v1 · commissioning-report.pdf")).toBeVisible();
  await cp.getByTestId("submit-verification-0").click();
  const roundLink = cp.getByRole("link", { name: /round #\d+/ });
  await expect(roundLink).toBeVisible({ timeout: 60_000 });
  const roundId = Number((await roundLink.textContent())!.match(/#(\d+)/)![1]);
  const round = await client.getRound(roundId);
  expect(round.panel).toHaveLength(5);
  expect(round.panel).not.toContain(creator.publicKey());

  // ------------------------------------------------------------ 4. commit
  const [uiVoterAddr, ...others] = round.panel;
  const uiVoter = seeded.get(uiVoterAddr!)!;
  const vp = await asUser(browser, uiVoter);
  await vp.goto(`/verify/${roundId}`);
  await expect(vp.getByTestId("vote-panel")).toBeVisible();
  await vp.getByTestId("vote-approve").click();
  await vp.getByTestId("reviewed-checkbox").check();
  const salts = new Map<string, Uint8Array>();
  await Promise.all([
    (async () => {
      await vp.getByTestId("commit-vote").click();
      await expect(vp.getByText("Vote committed")).toBeVisible({ timeout: 60_000 });
    })(),
    ...others.map(async (addr) => {
      const salt = randomSalt();
      salts.set(addr, salt);
      await client.invoke({
        contract: "verification",
        method: "commit",
        args: [sc.address(addr), sc.u64(roundId), sc.bytes32(await computeCommitment(roundId, addr, 1, salt))],
        source: addr,
        sign: keypairSigner(seeded.get(addr)!),
      });
    }),
  ]);
  expect((await client.getRound(roundId)).commits).toBe(5);

  // Verifier reviews evidence: browser re-hash must match the on-chain round hash.
  const evidence = vp.getByTestId("evidence-panel-0");
  if (await vp.getByRole("button", { name: "Sign in" }).first().isVisible()) {
    await vp.getByRole("button", { name: "Sign in" }).first().click();
  }
  await evidence.getByRole("button", { name: /Download & verify/ }).click();
  await expect(vp.getByTestId("integrity-ok")).toBeVisible();

  // ------------------------------------------------------------ 5. reveal
  await until(() => client.getPhase(roundId), (p) => p === Phase.Reveal, 120_000);
  await expect(vp.getByTestId("reveal-vote")).toBeVisible({ timeout: 30_000 });
  await Promise.all([
    (async () => {
      await vp.getByTestId("reveal-vote").click();
      await expect(vp.getByText("Vote revealed")).toBeVisible({ timeout: 60_000 });
    })(),
    ...others.map((addr) =>
      client.invoke({
        contract: "verification",
        method: "reveal",
        args: [sc.address(addr), sc.u64(roundId), sc.u32(1), sc.bytes32(salts.get(addr)!)],
        source: addr,
        sign: keypairSigner(seeded.get(addr)!),
      }),
    ),
  ]);

  // ------------------------------------------------------------ 6. finalize (anyone)
  await fp.goto(`/verify/${roundId}`);
  await fp.getByTestId("finalize-round").click();
  await expect(fp.getByTestId("decision")).toContainText("Approved", { timeout: 60_000 });
  const finalized = await client.getRound(roundId);
  expect(finalized.outcome).toBe(Outcome.Approved);
  expect(finalized.approvals).toBe(5);
  expect((await client.getDecision(roundId)).isFinal).toBe(false); // appeal window open

  // ------------------------------------------------------------ 7. release after appeal window
  await until(() => client.getDecision(roundId), (d) => d.isFinal, 120_000);
  const before = await client.tokenBalance(deployment.contracts.token, creator.publicKey());
  await fp.goto(projectUrl);
  await fp.getByTestId("settle-0").click();
  await expect(fp.getByText("Released to creator after final approval.")).toBeVisible({ timeout: 60_000 });
  await expect(fp.getByText("Completed", { exact: true }).first()).toBeVisible({ timeout: 30_000 });
  const after = await client.tokenBalance(deployment.contracts.token, creator.publicKey());
  expect(after - before).toBe(10n * XLM); // exactly the milestone amount

  const p = await client.getProject(projectId);
  expect(p.released).toBe(10n * XLM);
  const err = await client
    .invoke({ contract: "escrow", method: "settle_milestone", args: [sc.u64(projectId), sc.u32(0)], source: funder.publicKey(), sign: keypairSigner(funder) })
    .catch((e) => e);
  expect(err).toBeInstanceOf(ContractCallError);
  expect((err as ContractCallError).code).toBe(9); // InvalidState: no double payment

  // ------------------------------------------------------------ 8. audit trail
  await fp.goto("/activity");
  await expect(fp.getByTestId("events-table")).toContainText(`Milestone 1 of project #${projectId} paid`, { timeout: 30_000 });
});
