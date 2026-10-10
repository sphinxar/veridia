import { Address } from "@stellar/stellar-sdk";
import { sha256 } from "@veridia/domain";
import type { Vote } from "@veridia/domain";

export const COMMITMENT_DOMAIN = "VERIDIA-V1";

/**
 * Mirrors `commitment_of` in contracts/verification:
 * SHA-256("VERIDIA-V1" ‖ round_id u64 BE ‖ XDR(ScVal::Address(voter)) ‖ vote u8 ‖ salt[32])
 */
export async function computeCommitment(
  roundId: number | bigint,
  voter: string,
  vote: Vote,
  salt: Uint8Array,
): Promise<Uint8Array> {
  if (salt.length !== 32) throw new Error("Salt must be 32 bytes");
  if (vote !== 1 && vote !== 2) throw new Error("Vote must be 1 (approve) or 2 (reject)");
  const domain = new TextEncoder().encode(COMMITMENT_DOMAIN);
  const round = new Uint8Array(8);
  new DataView(round.buffer).setBigUint64(0, BigInt(roundId), false);
  const voterXdr = new Uint8Array(Address.fromString(voter).toScVal().toXDR());
  const buf = new Uint8Array(domain.length + 8 + voterXdr.length + 1 + 32);
  let o = 0;
  buf.set(domain, o);
  o += domain.length;
  buf.set(round, o);
  o += 8;
  buf.set(voterXdr, o);
  o += voterXdr.length;
  buf[o++] = vote;
  buf.set(salt, o);
  return sha256(buf);
}
