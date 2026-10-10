"use client";
/**
 * Local storage of commit-reveal secrets. The salt never leaves the verifier's device
 * unless they download a backup. It is saved BEFORE the commit transaction is sent so a
 * closed tab cannot lose it. Without the salt a vote cannot be revealed (and a no-show
 * is slashed), so the UI prompts for a backup and supports restoring one.
 */
export interface VoteSecret {
  v: 1;
  network: string;
  contract: string;
  roundId: number;
  voter: string;
  vote: 1 | 2;
  salt: string; // hex
  commitment: string; // hex
  createdAt: string;
}

const key = (network: string, contract: string, roundId: number, voter: string) =>
  `veridia:vote:${network}:${contract}:${roundId}:${voter}`;

export function loadSecret(network: string, contract: string, roundId: number, voter: string): VoteSecret | null {
  try {
    const raw = window.localStorage.getItem(key(network, contract, roundId, voter));
    return raw ? (JSON.parse(raw) as VoteSecret) : null;
  } catch {
    return null;
  }
}

export function saveSecret(s: VoteSecret): boolean {
  try {
    window.localStorage.setItem(key(s.network, s.contract, s.roundId, s.voter), JSON.stringify(s));
    return true;
  } catch {
    return false;
  }
}

export function downloadBackup(s: VoteSecret) {
  const blob = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `veridia-vote-round-${s.roundId}-${s.voter.slice(0, 6)}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export function parseBackup(text: string): VoteSecret {
  const s = JSON.parse(text) as VoteSecret;
  if (s.v !== 1 || !s.salt || !s.commitment || (s.vote !== 1 && s.vote !== 2) || !s.voter || !s.roundId) {
    throw new Error("Not a Veridia vote backup");
  }
  return s;
}
