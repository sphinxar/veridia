import { createHash } from "node:crypto";
import { Keypair } from "@stellar/stellar-sdk";

export const SEP53_PREFIX = "Stellar Signed Message:\n";

export function signInMessage(address: string, nonce: string, network: string, issuedAt: Date): string {
  return [
    "Veridia sign-in",
    "",
    `Address: ${address}`,
    `Network: ${network}`,
    `Nonce: ${nonce}`,
    `Issued: ${issuedAt.toISOString()}`,
    "",
    "Signing proves you control this wallet. It does not authorize any transaction or transfer.",
  ].join("\n");
}

/**
 * Verify an ed25519 message signature for a Stellar account. Accepts SEP-53
 * signatures (sha256 of the prefixed message — Freighter ≥ 5) and, for older wallets,
 * signatures over the raw message bytes.
 */
export function verifyWalletSignature(address: string, message: string, signatureB64: string): boolean {
  let kp: Keypair;
  let sig: Buffer;
  try {
    kp = Keypair.fromPublicKey(address);
    sig = Buffer.from(signatureB64, "base64");
  } catch {
    return false;
  }
  if (sig.length !== 64) return false;
  const sep53 = createHash("sha256").update(Buffer.concat([Buffer.from(SEP53_PREFIX), Buffer.from(message, "utf8")])).digest();
  try {
    return kp.verify(sep53, sig) || kp.verify(Buffer.from(message, "utf8"), sig);
  } catch {
    return false;
  }
}

/** Test/dev helper: produce a SEP-53 signature (used by the E2E test wallet). */
export function signSep53(kp: Keypair, message: string): string {
  const hash = createHash("sha256").update(Buffer.concat([Buffer.from(SEP53_PREFIX), Buffer.from(message, "utf8")])).digest();
  return Buffer.from(kp.sign(hash)).toString("base64");
}
