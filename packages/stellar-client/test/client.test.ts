import { describe, expect, it } from "vitest";
import { scValToNative } from "@stellar/stellar-sdk";
import { toHex } from "@veridia/domain";
import { computeCommitment, decodeContractError, decodeProject, milestoneInputs, sc } from "../src";

describe("computeCommitment", () => {
  it("matches the Rust contract test vector", async () => {
    // Same inputs as contracts/verification/src/test.rs::commitment_encoding_is_stable
    const c = await computeCommitment(
      42,
      "GCZGW2FVKHT7JFZGTSKLQQBQC5MPX22BMFXJGYUEDDSQLTW34B6UNWA3",
      1,
      new Uint8Array(32).fill(7),
    );
    expect(toHex(c)).toBe("e25c11c9af23e9f3266703654f382d1d384b4b330f2206195cf8a8e5df51a628");
  });
  it("binds every input", async () => {
    const voter = "GCZGW2FVKHT7JFZGTSKLQQBQC5MPX22BMFXJGYUEDDSQLTW34B6UNWA3";
    const salt = new Uint8Array(32).fill(7);
    const base = toHex(await computeCommitment(42, voter, 1, salt));
    expect(toHex(await computeCommitment(43, voter, 1, salt))).not.toBe(base);
    expect(toHex(await computeCommitment(42, voter, 2, salt))).not.toBe(base);
    expect(toHex(await computeCommitment(42, voter, 1, new Uint8Array(32).fill(8)))).not.toBe(base);
  });
  it("validates inputs", async () => {
    const voter = "GCZGW2FVKHT7JFZGTSKLQQBQC5MPX22BMFXJGYUEDDSQLTW34B6UNWA3";
    await expect(computeCommitment(1, voter, 1, new Uint8Array(31))).rejects.toThrow();
    await expect(computeCommitment(1, voter, 3 as 1, new Uint8Array(32))).rejects.toThrow();
  });
});

describe("scval", () => {
  it("encodes structs with sorted symbol keys", () => {
    const v = milestoneInputs([{ amount: 5n, deadline: 100 }]);
    if (v.type !== "scvVec") throw new Error("expected vec");
    const first = v.vec![0]!;
    if (first.type !== "scvMap") throw new Error("expected map");
    const entries = first.map!;
    expect(entries.map((e) => scValToNative(e.key))).toEqual(["amount", "deadline"]);
    expect(entries.map((e) => e.val.type)).toEqual(["scvI128", "scvU64"]);
  });
  it("round-trips bytes32 and rejects wrong lengths", () => {
    const h = "ab".repeat(32);
    expect(toHex(scValToNative(sc.bytes32(h)))).toBe(h);
    expect(() => sc.bytes32("ab")).toThrow();
  });
  it("decodes a project struct", () => {
    const p = decodeProject({
      id: 3n, creator: "GA", token: "CB", metadata_hash: new Uint8Array(32), budget: 10n, funded: 5n,
      released: 0n, funding_deadline: 9n, created_at: 1n, status: 0, milestone_count: 2,
      current_milestone: 0, max_attempts: 3, refund_pool: 0n, refunded: 0n,
    });
    expect(p).toMatchObject({ id: 3, budget: 10n, funded: 5n, milestoneCount: 2, status: 0 });
    expect(p.metadataHash).toHaveLength(64);
  });
});

describe("decodeContractError", () => {
  const escrow = "C" + "E".repeat(55);
  const token = "C" + "T".repeat(55);
  it("maps codes using the invoked contract's table", () => {
    const e = decodeContractError("HostError: Error(Contract, #11)", "escrow");
    expect(e.message).toBe("Deposit exceeds the remaining budget");
    expect(e.code).toBe(11);
  });
  it("attributes errors to the contract that raised them", () => {
    const raw = `HostError: Error(Contract, #10)
Event log (newest first):
   0: [Diagnostic Event] contract:${escrow}, topics:[error, Error(Contract, #10)], data:"escalating"
   1: [Diagnostic Event] contract:${token}, topics:[error, Error(Contract, #10)], data:"balance is not sufficient"`;
    const e = decodeContractError(raw, "escrow", { [escrow]: "escrow", [token]: "token" });
    expect(e.contract).toBe("token");
    expect(e.message).toBe("Insufficient token balance");
  });
  it("recognizes auth failures", () => {
    expect(decodeContractError("HostError: Error(Auth, InvalidAction)", "escrow").message).toMatch(/Authorization/);
  });
});
