import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { evidence, evidenceVersions, projects } from "@/db/schema";
import { audit } from "@/server/audit";
import { HttpError, handler, intParam, requireSession } from "@/server/http";
import { canViewEvidence } from "@/server/queries";
import { getEvidence } from "@/server/storage";

/** Authenticated download. Refuses to serve an object whose hash no longer matches. */
export const GET = handler(async (_req: Request, ctx: { params: Promise<{ versionId: string }> }) => {
  const session = await requireSession();
  const id = intParam((await ctx.params).versionId, "versionId");
  const db = getDb();
  const [row] = await db
    .select({ v: evidenceVersions, e: evidence, p: projects })
    .from(evidenceVersions)
    .innerJoin(evidence, eq(evidence.id, evidenceVersions.evidenceId))
    .innerJoin(projects, eq(projects.id, evidence.projectId))
    .where(eq(evidenceVersions.id, id))
    .limit(1);
  if (!row) throw new HttpError(404, "Evidence not found");
  if (!(await canViewEvidence(session.address, row.p, row.e.milestoneIndex))) throw new HttpError(403, "Not authorized to view this evidence");
  const { body, intact } = await getEvidence(row.v.storageKey, row.v.sha256);
  if (!intact) {
    await audit(session.address, "evidence_integrity_failure", "evidence_version", id, { expected: row.v.sha256 });
    throw new HttpError(409, "Stored file failed its integrity check and will not be served");
  }
  await audit(session.address, "evidence_downloaded", "evidence_version", id);
  return new Response(Buffer.from(body), {
    headers: {
      "Content-Type": row.v.mimeType,
      "Content-Disposition": `attachment; filename="${row.v.fileName.replace(/"/g, "")}"`,
      "Content-Length": String(body.length),
      "X-Evidence-SHA256": row.v.sha256,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, no-store",
    },
  });
});
