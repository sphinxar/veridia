import { describe, expect, it } from "vitest";
import {
  MilestoneStatus,
  Outcome,
  Phase,
  ProjectStatus,
  RoundKind,
  canAppeal,
  canonicalJson,
  createProjectFormSchema,
  decisionOf,
  formatAmount,
  metadataHash,
  parseAmount,
  percent,
  phaseOf,
  refundAmount,
  sha256Hex,
  submitBlocker,
  tally,
} from "../src";

describe("tally (mirrors contract tests)", () => {
  const t = 6000;
  it.each([
    [4, 0, Outcome.Approved],
    [3, 1, Outcome.Approved],
    [1, 3, Outcome.Rejected],
    [2, 2, Outcome.Inconclusive],
    [3, 2, Outcome.Approved],
    [2, 3, Outcome.Rejected],
    [3, 0, Outcome.NoQuorum],
    [0, 0, Outcome.NoQuorum],
  ])("%i approve / %i reject → %i", (a, r, expected) => {
    expect(tally(a, r, 4, t)).toBe(expected);
  });
});

describe("phaseOf", () => {
  const r = { commitDeadline: 100, revealDeadline: 200, commits: 3, reveals: 1, finalized: false };
  it("derives phases from time", () => {
    expect(phaseOf(r, 100)).toBe(Phase.Commit);
    expect(phaseOf(r, 101)).toBe(Phase.Reveal);
    expect(phaseOf(r, 201)).toBe(Phase.Finalizable);
    expect(phaseOf({ ...r, reveals: 3 }, 150)).toBe(Phase.Finalizable);
    expect(phaseOf({ ...r, finalized: true }, 50)).toBe(Phase.Finalized);
  });
});

describe("decisionOf", () => {
  const base = { kind: RoundKind.Original, finalized: true, finalizedAt: 1000, appealWindowSecs: 100 };
  it("is pending until finalized", () => {
    expect(decisionOf({ ...base, finalized: false, outcome: Outcome.Pending }, null, 0).isFinal).toBe(false);
  });
  it("failed rounds are final immediately", () => {
    const d = decisionOf({ ...base, outcome: Outcome.NoQuorum }, null, 1000);
    expect(d).toMatchObject({ isFinal: true, outcome: Outcome.NoQuorum });
  });
  it("decisive outcomes wait for the appeal window", () => {
    const o = { ...base, outcome: Outcome.Approved };
    expect(decisionOf(o, null, 1100).isFinal).toBe(false);
    expect(decisionOf(o, null, 1101)).toMatchObject({ isFinal: true, outcome: Outcome.Approved });
  });
  it("appeal outcome overrides only when decisive", () => {
    const o = { ...base, outcome: Outcome.Rejected };
    const pending = { ...base, kind: RoundKind.Appeal, finalized: false, outcome: Outcome.Pending };
    expect(decisionOf(o, pending, 5000)).toMatchObject({ isFinal: false, underAppeal: true });
    expect(decisionOf(o, { ...pending, finalized: true, outcome: Outcome.Approved }, 0).outcome).toBe(
      Outcome.Approved,
    );
    expect(decisionOf(o, { ...pending, finalized: true, outcome: Outcome.NoQuorum }, 0).outcome).toBe(
      Outcome.Rejected,
    );
  });
});

describe("submitBlocker", () => {
  const p = {
    status: ProjectStatus.Active,
    currentMilestone: 0,
    maxAttempts: 3,
    funded: 1000n,
    released: 0n,
  };
  const m = { status: MilestoneStatus.Pending, deadline: 500, attempts: 0, amount: 400n };
  it("allows a valid submission", () => expect(submitBlocker(p, m, 0, 100)).toBeNull());
  it("requires full funding (Active)", () =>
    expect(submitBlocker({ ...p, status: ProjectStatus.Funding }, m, 0, 100)).toBe("project-not-active"));
  it("is sequential", () => expect(submitBlocker(p, m, 1, 100)).toBe("not-current-milestone"));
  it("respects deadline and attempts", () => {
    expect(submitBlocker(p, m, 0, 501)).toBe("deadline-passed");
    expect(submitBlocker(p, { ...m, attempts: 3 }, 0, 100)).toBe("max-attempts");
    expect(submitBlocker(p, { ...m, status: MilestoneStatus.InVerification }, 0, 100)).toBe("not-pending");
  });
});

describe("canAppeal", () => {
  const a = {
    kind: RoundKind.Original,
    finalized: true,
    hasAppeal: false,
    appealableUntil: 100,
    now: 50,
    isCreator: false,
    isFunder: false,
  };
  it("creator appeals rejections, funders appeal approvals", () => {
    expect(canAppeal({ ...a, outcome: Outcome.Rejected, isCreator: true })).toBe(true);
    expect(canAppeal({ ...a, outcome: Outcome.Rejected, isFunder: true })).toBe(false);
    expect(canAppeal({ ...a, outcome: Outcome.Approved, isFunder: true })).toBe(true);
    expect(canAppeal({ ...a, outcome: Outcome.Approved, isFunder: true, now: 101 })).toBe(false);
    expect(canAppeal({ ...a, outcome: Outcome.Inconclusive, isCreator: true })).toBe(false);
    expect(canAppeal({ ...a, outcome: Outcome.Approved, isFunder: true, hasAppeal: true })).toBe(false);
  });
});

describe("amounts", () => {
  it("parses and formats 7-decimal amounts", () => {
    expect(parseAmount("1")).toBe(10_000_000n);
    expect(parseAmount("0.0000001")).toBe(1n);
    expect(parseAmount("1234.5")).toBe(12_345_000_000n);
    expect(() => parseAmount("1.00000001")).toThrow();
    expect(() => parseAmount("-1")).toThrow();
    expect(() => parseAmount("abc")).toThrow();
    expect(formatAmount(12_345_000_000n)).toBe("1,234.5");
    expect(formatAmount(1n, 7, { maxFraction: 7 })).toBe("0.0000001");
    expect(formatAmount(0n)).toBe("0");
  });
  it("percent and refunds use integer math", () => {
    expect(percent(1n, 3n)).toBe(33.3);
    expect(refundAmount(600n, 600n, 1000n)).toBe(360n);
    expect(refundAmount(1n, 2n, 3n)).toBe(0n);
  });
});

describe("hashing", () => {
  it("sha256 matches the known vector", async () => {
    expect(await sha256Hex("abc")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    );
  });
  it("canonical JSON is key-order independent", async () => {
    expect(canonicalJson({ b: 1, a: [{ d: 2, c: 3 }] })).toBe('{"a":[{"c":3,"d":2}],"b":1}');
    expect(await metadataHash({ x: 1, y: "z" })).toBe(await metadataHash({ y: "z", x: 1 }));
  });
});

describe("createProjectFormSchema", () => {
  const day = 86_400_000;
  const iso = (offsetDays: number) => new Date(Date.now() + offsetDays * day).toISOString();
  const valid = {
    title: "Solar microgrid",
    summary: "Install a 20kW microgrid for a rural school",
    description: "",
    category: "energy",
    token: "C" + "A".repeat(55),
    fundingDeadline: iso(7),
    milestones: [
      { title: "Site survey", description: "", amount: "100", deadline: iso(14) },
      { title: "Install", description: "", amount: "900.5", deadline: iso(30) },
    ],
  };
  it("accepts a valid project", () => expect(createProjectFormSchema.safeParse(valid).success).toBe(true));
  it("rejects non-increasing deadlines and bad amounts", () => {
    const bad = {
      ...valid,
      milestones: [
        { ...valid.milestones[0]!, deadline: iso(5) },
        { ...valid.milestones[1]!, amount: "0" },
      ],
    };
    const r = createProjectFormSchema.safeParse(bad);
    expect(r.success).toBe(false);
    const paths = r.error!.issues.map((i) => i.path.join("."));
    expect(paths).toContain("milestones.0.deadline");
    expect(paths).toContain("milestones.1.amount");
  });
});
