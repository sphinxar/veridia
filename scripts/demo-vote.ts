/**
 * DEMO ONLY: make the seeded dev verifiers on a round's panel commit and reveal votes,
 * so a single person can walk through the whole workflow. Real verifiers vote from
 * the web UI with their own wallets.
 *
 *   tsx scripts/demo-vote.ts --network local --round 1 --approve 5
 *   tsx scripts/demo-vote.ts --round 2 --approve 2 --reject 2 --no-reveal 1
 *   tsx scripts/demo-vote.ts --round 1 --phase commit     # only commit
 *   tsx scripts/demo-vote.ts --round 1 --phase reveal     # only reveal (salts from .data)
 *
 * Panel members that are not seeded keys (e.g. your browser wallet) are skipped.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Keypair } from "@stellar/stellar-sdk";
import { fromHex, randomSalt, toHex } from "../packages/domain/src/hashing";
import { computeCommitment } from "../packages/stellar-client/src/commitment";
import { sc } from "../packages/stellar-client/src/scval";
import { KEYS_DIR, ROOT, argValue, clientFor, invokeAs, waitForLedgerTime } from "./lib";

const network = argValue("network", "local")!;
const roundId = Number(argValue("round"));
const approve = Number(argValue("approve", "0"));
const reject = Number(argValue("reject", "0"));
const noReveal = Number(argValue("no-reveal", "0"));
const phase = argValue("phase", "both");
if (!roundId) throw new Error("--round is required");

const SALTS = join(ROOT, ".data", `demo-salts-${network}.json`);

async function main() {
  const { client } = clientFor(network);
  const round = await client.getRound(roundId);
  const keys: Record<string, string> = JSON.parse(readFileSync(join(KEYS_DIR, `${network}.json`), "utf8"));
  const byAddress = new Map(
    Object.values(keys).map((s) => {
      const kp = Keypair.fromSecret(s);
      return [kp.publicKey(), kp] as const;
    }),
  );
  const seeded = round.panel.filter((a) => byAddress.has(a));
  console.log(`round ${roundId}: panel ${round.panel.length}, seeded members ${seeded.length}`);
  const salts: Record<string, { vote: 1 | 2; salt: string; reveal: boolean }> = existsSync(SALTS)
    ? JSON.parse(readFileSync(SALTS, "utf8"))
    : {};

  if (phase !== "reveal") {
    const plan: (1 | 2)[] = [...Array(approve).fill(1), ...Array(reject).fill(2)];
    for (const [i, addr] of seeded.entries()) {
      const vote = plan[i];
      if (!vote) break;
      if (await client.getVote(roundId, addr)) continue;
      const salt = randomSalt();
      const c = await computeCommitment(roundId, addr, vote, salt);
      await invokeAs(client, byAddress.get(addr)!, "verification", "commit", [
        sc.address(addr),
        sc.u64(roundId),
        sc.bytes32(c),
      ]);
      salts[`${roundId}:${addr}`] = { vote, salt: toHex(salt), reveal: i < plan.length - noReveal };
      console.log(`  committed ${vote === 1 ? "approve" : "reject"} for ${addr.slice(0, 8)}…`);
    }
    mkdirSync(join(ROOT, ".data"), { recursive: true });
    writeFileSync(SALTS, JSON.stringify(salts, null, 2), { mode: 0o600 });
  }

  if (phase !== "commit") {
    console.log(`  waiting for reveal phase (commit deadline ${new Date(round.commitDeadline * 1000).toISOString()})…`);
    await waitForLedgerTime(client.server, round.commitDeadline);
    for (const addr of seeded) {
      const s = salts[`${roundId}:${addr}`];
      if (!s || !s.reveal) continue;
      const v = await client.getVote(roundId, addr);
      if (!v || v.revealed) continue;
      await invokeAs(client, byAddress.get(addr)!, "verification", "reveal", [
        sc.address(addr),
        sc.u64(roundId),
        sc.u32(s.vote),
        sc.bytes32(fromHex(s.salt)),
      ]);
      console.log(`  revealed for ${addr.slice(0, 8)}…`);
    }
  }
  const r = await client.getRound(roundId);
  console.log(`done: commits ${r.commits}, reveals ${r.reveals} (approve ${r.approvals} / reject ${r.rejections})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
