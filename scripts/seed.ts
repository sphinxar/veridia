/**
 * Seed DEV verifiers: creates (or reuses) keypairs in .data/keys/<network>.json,
 * funds them, registers them in the VerifierRegistry and stakes.
 *
 *   pnpm seed:local                   # 10 verifiers (enough for a disjoint appeal panel)
 *   tsx scripts/seed.ts --network testnet --count 10 --stake 150
 *
 * Optionally also funds an address you control in the browser wallet:
 *   tsx scripts/seed.ts --network local --fund G...
 */
import { metadataHash } from "../packages/domain/src/hashing";
import { sc } from "../packages/stellar-client/src/scval";
import { XLM, argValue, clientFor, fund, invokeAs, loadOrCreateKey } from "./lib";

const network = argValue("network", "local")!;
const count = Number(argValue("count", "10"));
const stake = BigInt(argValue("stake", "150")!) * XLM;

async function main() {
  const { client, n } = clientFor(network);
  const extra = argValue("fund");
  if (extra) {
    await fund(n, client.server, extra);
    console.log(`funded ${extra}`);
  }
  for (let i = 1; i <= count; i++) {
    const kp = loadOrCreateKey(network, `verifier-${i}`);
    await fund(n, client.server, kp.publicKey());
    const existing = await client.getVerifier(kp.publicKey());
    if (!existing) {
      const meta = await metadataHash({ displayName: `Demo verifier ${i}`, expertise: "seeded" });
      await invokeAs(client, kp, "registry", "register", [sc.address(kp.publicKey()), sc.bytes32(meta)]);
    }
    const current = (await client.getVerifier(kp.publicKey()))!;
    if (current.stake < stake) {
      await invokeAs(client, kp, "registry", "deposit_stake", [
        sc.address(kp.publicKey()),
        sc.i128(stake - current.stake),
      ]);
    }
    console.log(`verifier-${i} ${kp.publicKey()} staked`);
  }
  console.log(`eligible verifiers: ${(await client.eligibleVerifiers()).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
