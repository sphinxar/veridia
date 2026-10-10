import { and, eq, max } from "drizzle-orm";
import { MilestoneStatus } from "@veridia/domain";
import { getDb } from "@/db";
import { evidence, evidenceVersions, milestones, projects } from "@/db/schema";
import { audit } from "@/server/audit";
import { safeFileName, validateEvidenceFile } from "@/server/file-validation";
import { HttpError, handler, json, requireSession } from "@/server/http";
import { canViewEvidence, evidenceVersions as listVersions } from "@/server/queries";
import { putEvidence, sha256Hex } from "@/server/storage";

type Ctx = { params: Promise<{ id: string; idx: string }> };

async function load(ctx: Ctx) {
  const { id, idx } = await ctx.params;
  const projectId = Number(id);
  const index = Number(idx);
  if (!Number.isInteger(projectId) || !Number.isInteger(index) || index < 0) throw new HttpError(400, "Invalid path");
  const db = getDb();
  const [project] = await db.select().from(projects).where(eq(projects.id, projectId)).limit(1);
  if (!project) throw new HttpError(404, "Project not found");
  const [milestone] = await db
    .select()
    .from(milestones)
    .where(and(eq(milestones.projectId, projectId), eq(milestones.index, index)))
    .limit(1);
  if (!milestone) throw new HttpError(404, "Milestone not found");
  return { project, milestone, index };
}

/** List evidence versions (metadata only). Restricted to creator, funders and assigned verifiers. */
export const GET = handler(async (_req: Request, ctx: Ctx) => {
  const session = await requireSession();
  const { project, index } = await load(ctx);
  if (!(await canViewEvidence(session.address, project, index))) {
    throw new HttpError(403, "Evidence is visible only to the creator, funders and assigned verifiers");
  }
  const versions = await listVersions(project.id, index);
  return json({ versions: versions.map(({ storageKey: _k, ...v }) => v) });
});

/** Upload a new evidence version (creator only, milestone not under verification). */
export const POST = handler(async (req: Request, ctx: Ctx) => {
  const session = await requireSession();
  const { project, milestone, index } = await load(ctx);
  if (project.creatorAddress !== session.address) throw new HttpError(403, "Only the project creator can upload evidence");
  if (!project.chainId) throw new HttpError(409, "Project is not confirmed on-chain yet");
  if (milestone.status !== MilestoneStatus.Pending) {
    throw new HttpError(409, "Evidence can only be added while the milestone is pending (not during verification)");
  }
  const form = await req.formData().catch(() => {
    throw new HttpError(400, "Expected multipart/form-data");
  });
  const file = form.get("file");
  if (!(file instanceof File)) throw new HttpError(422, "Missing file");
  const note = String(form.get("note") ?? "").slice(0, 500);
  const bytes = new Uint8Array(await file.arrayBuffer());
  const check = validateEvidenceFile(bytes, file.type, file.name);
  if (!check.ok) throw new HttpError(422, check.error);

  const sha = sha256Hex(bytes);
  const db = getDb();
  const [group] = await db
    .insert(evidence)
    .values({ projectId: project.id, milestoneIndex: index, createdBy: session.address })
    .onConflictDoUpdate({ target: [evidence.projectId, evidence.milestoneIndex], set: { createdBy: evidence.createdBy } })
    .returning();
  const [{ v } = { v: 0 }] = await db
    .select({ v: max(evidenceVersions.version) })
    .from(evidenceVersions)
    .where(eq(evidenceVersions.evidenceId, group!.id));
  const version = (v ?? 0) + 1;
  const storageKey = `evidence/p${project.id}/m${index}/v${version}-${sha}`;
  await putEvidence(storageKey, bytes, check.mime, sha);
  const [row] = await db
    .insert(evidenceVersions)
    .values({
      evidenceId: group!.id,
      version,
      storageKey,
      fileName: safeFileName(file.name),
      mimeType: check.mime,
      sizeBytes: bytes.length,
      sha256: sha,
      note,
      uploadedBy: session.address,
    })
    .returning();
  await audit(session.address, "evidence_uploaded", "project", project.id, { milestone: index, version, sha256: sha });
  const { storageKey: _k, ...pub } = row!;
  return json({ version: pub }, 201);
});
