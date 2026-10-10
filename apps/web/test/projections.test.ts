import { beforeEach, describe, expect, it } from "vitest";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { eq } from "drizzle-orm";
import { join } from "node:path";
import * as schema from "../src/db/schema";
import type { Db } from "../src/db";
import { applyEvent, type ChainEvent } from "../src/server/projections";

const CREATOR = "GCREATOR";
const FUNDER = "GFUNDER";
const V = ["GV1", "GV2", "GV3", "GV4", "GV5"];
const HASH = "ab".repeat(32);
const META = "cd".repeat(32);

let db: Db;
let seq = 0;
function ev(name: string, topics: unknown[], data: Record<string, unknown>, tx = "tx" + seq): ChainEvent {
  seq++;
  return {
    id: `0000${seq}-0000000001`,
    ledger: 100 + seq,
    ledgerClosedAt: new Date(1_700_000_000_000 + seq * 1000).toISOString(),
    txHash: tx,
    contractId: "C...",
    contract: "escrow",
    name,
    topics,
    data,
  };
}

beforeEach(async () => {
  const client = new PGlite();
  const d = drizzle(client, { schema });
  await migrate(d, { migrationsFolder: join(__dirname, "..", "drizzle") });
  db = d as unknown as Db;
  seq = 0;
});

async function seedDraft() {
  await db.insert(schema.projects).values({
    creatorAddress: CREATOR,
    token: "CTOKEN",
    title: "Solar",
    summary: "A solar project",
    metadata: { milestones: [{ title: "Survey" }, { title: "Install" }] },
    metadataHash: META,
    budget: "300",
    fundingDeadline: 10,
    syncStatus: "pending",
  });
}

const created = () =>
  ev("project_created", ["1", CREATOR], {
    token: "CTOKEN",
    budget: "300",
    funding_deadline: "1000",
    metadata_hash: META,
    milestones: [
      { amount: "100", deadline: "2000" },
      { amount: "200", deadline: "3000" },
    ],
  });

describe("projections", () => {
  it("links an on-chain project to its draft and creates milestones", async () => {
    await seedDraft();
    const r = await applyEvent(db, created());
    expect(r.applied).toBe(true);
    const [p] = await db.select().from(schema.projects);
    expect(p).toMatchObject({ chainId: 1, status: 0, syncStatus: "confirmed", title: "Solar", fundingDeadline: 1000 });
    const ms = await db.select().from(schema.milestones).orderBy(schema.milestones.index);
    expect(ms.map((m) => [m.title, m.amount])).toEqual([
      ["Survey", "100"],
      ["Install", "200"],
    ]);
  });

  it("creates a placeholder for projects created outside the UI", async () => {
    await applyEvent(db, created());
    const [p] = await db.select().from(schema.projects);
    expect(p!.title).toBe("Project #1");
    expect(p!.metadataHash).toBe(META);
  });

  it("is idempotent: duplicate event deliveries are ignored", async () => {
    await seedDraft();
    await applyEvent(db, created());
    const dep = ev("deposited", ["1", FUNDER], { amount: "120", funded: "120" });
    expect((await applyEvent(db, dep)).applied).toBe(true);
    expect((await applyEvent(db, dep)).applied).toBe(false);
    expect((await applyEvent(db, { ...dep })).applied).toBe(false);
    const [c] = await db.select().from(schema.contributions);
    expect(c!.amount).toBe("120");
    const events = await db.select().from(schema.contractEvents);
    expect(events).toHaveLength(2);
  });

  it("marks pending transactions as successful when their event is seen", async () => {
    await db.insert(schema.transactions).values({ hash: "txA", kind: "deposit", contract: "escrow", method: "deposit", sourceAddress: FUNDER });
    await seedDraft();
    await applyEvent(db, created());
    await applyEvent(db, ev("deposited", ["1", FUNDER], { amount: "1", funded: "1" }, "txA"));
    const [t] = await db.select().from(schema.transactions);
    expect(t!.status).toBe("success");
    expect(t!.ledger).toBeGreaterThan(0);
  });

  it("projects a full verification lifecycle", async () => {
    await seedDraft();
    await applyEvent(db, created());
    await applyEvent(db, ev("deposited", ["1", FUNDER], { amount: "300", funded: "300" }));
    await applyEvent(db, ev("project_status_changed", ["1"], { status: 1, refund_pool: "0" }));
    // Evidence uploaded through the API before submission
    const [p] = await db.select().from(schema.projects);
    const [e] = await db.insert(schema.evidence).values({ projectId: p!.id, milestoneIndex: 0, createdBy: CREATOR }).returning();
    await db.insert(schema.evidenceVersions).values({
      evidenceId: e!.id, version: 1, storageKey: "k", fileName: "f.pdf", mimeType: "application/pdf", sizeBytes: 1, sha256: HASH, uploadedBy: CREATOR,
    });

    for (const v of V) await applyEvent(db, ev("stake_locked", [v, "7"], { amount: "100" }, "txSubmit"));
    await applyEvent(db, ev("round_opened", ["7", "1"], {
      milestone: 0, attempt: 1, kind: 0, parent_round_id: null, evidence_hash: HASH, panel: V,
      commit_deadline: "5000", reveal_deadline: "6000",
    }, "txSubmit"));
    await applyEvent(db, ev("milestone_submitted", ["1", 0], { attempt: 1, round_id: "7", evidence_hash: HASH }, "txSubmit"));

    let [m] = await db.select().from(schema.milestones).where(eq(schema.milestones.index, 0));
    expect(m).toMatchObject({ status: 1, currentRoundId: 7, attempts: 1 });
    const [ver] = await db.select().from(schema.evidenceVersions);
    expect(ver!.submittedRoundId).toBe(7);
    expect(await db.select().from(schema.panelAssignments)).toHaveLength(5);

    for (const v of V.slice(0, 4)) await applyEvent(db, ev("vote_committed", ["7", v], { commitment: "ee".repeat(32) }));
    const votes = [1, 1, 1, 2];
    for (const [i, v] of V.slice(0, 4).entries()) await applyEvent(db, ev("vote_revealed", ["7", v], { vote: votes[i] }));
    let [round] = await db.select().from(schema.verificationRounds);
    expect(round).toMatchObject({ commits: 4, reveals: 4, approvals: 3, rejections: 1, finalized: false });

    await applyEvent(db, ev("round_finalized", ["7", "1"], { milestone: 0, outcome: 1, approvals: 3, rejections: 1, reveals: 4, appealable_until: "9999" }));
    for (const [i, v] of V.entries()) {
      const noShow = i === 4;
      await applyEvent(db, ev("stake_released", [v, "7"], { amount: "100", slashed: noShow ? "10" : "0", conduct: noShow ? 1 : 0 }));
    }
    [round] = await db.select().from(schema.verificationRounds);
    expect(round).toMatchObject({ finalized: true, outcome: 1, appealableUntil: 9999 });
    const [v5] = await db.select().from(schema.verifierProfiles).where(eq(schema.verifierProfiles.address, "GV5"));
    expect(v5).toMatchObject({ locked: "0", noShows: 1, totalSlashed: "10" });
    const slashes = await db.select().from(schema.stakeRecords).where(eq(schema.stakeRecords.kind, "slash"));
    expect(slashes).toHaveLength(1);

    await applyEvent(db, ev("milestone_paid", ["1", 0], { round_id: "7", recipient: CREATOR, amount: "100" }));
    [m] = await db.select().from(schema.milestones).where(eq(schema.milestones.index, 0));
    expect(m!.status).toBe(2);
    const [proj] = await db.select().from(schema.projects);
    expect(proj).toMatchObject({ released: "100", currentMilestone: 1 });
    const [fo] = await db.select().from(schema.finalOutcomes);
    expect(fo).toMatchObject({ roundId: 7, effect: "paid", amount: "100" });
  });

  it("projects appeals", async () => {
    await applyEvent(db, ev("round_opened", ["3", "1"], {
      milestone: 0, attempt: 1, kind: 0, parent_round_id: null, evidence_hash: HASH, panel: V,
      commit_deadline: "1", reveal_deadline: "2",
    }));
    await applyEvent(db, ev("appeal_filed", ["3", "4"], { appellant: CREATOR, bond: "50" }));
    await applyEvent(db, ev("appeal_resolved", ["3", "4"], { appeal_outcome: 1, final_outcome: 1, overturned: true }));
    const [a] = await db.select().from(schema.appeals);
    expect(a).toMatchObject({ roundId: 3, appealRoundId: 4, status: "resolved", overturned: true, finalOutcome: 1, projectChainId: 1 });
    const [r] = await db.select().from(schema.verificationRounds);
    expect(r!.appealRoundId).toBe(4);
  });

  it("rolls back the event row when a projection fails, so it can be retried", async () => {
    // round_opened with a missing required field makes the insert fail.
    const bad = ev("round_opened", ["9", "1"], { milestone: 0, attempt: 1, kind: 0, panel: [] });
    await expect(applyEvent(db, bad)).rejects.toThrow();
    expect(await db.select().from(schema.contractEvents)).toHaveLength(0);
  });
});
