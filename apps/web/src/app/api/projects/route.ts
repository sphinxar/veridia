import { randomBytes } from "node:crypto";
import { metadataHash, projectDraftSchema } from "@veridia/domain";
import { getDb } from "@/db";
import { milestones, projects } from "@/db/schema";
import { audit } from "@/server/audit";
import { chain } from "@/server/chain";
import { HttpError, handler, json, parseJson, requireSession } from "@/server/http";
import { listProjects } from "@/server/queries";
import { getSession } from "@/server/session";

export const GET = handler(async (req: Request) => {
  const filter = (new URL(req.url).searchParams.get("filter") ?? "all") as "all";
  const session = await getSession();
  return json({ projects: await listProjects({ viewer: session?.address, filter }) });
});

/**
 * Register an off-chain project draft before the creator signs `create_project`.
 * The server computes the canonical metadata hash that the creator commits on-chain;
 * the indexer later links the on-chain project to this draft by (hash, creator).
 */
export const POST = handler(async (req: Request) => {
  const session = await requireSession();
  const body = await parseJson(req, projectDraftSchema);
  if (body.metadata.milestones.length !== body.milestones.length) {
    throw new HttpError(422, "Milestone metadata and amounts must have the same length");
  }
  const now = Math.floor(Date.now() / 1000);
  if (body.fundingDeadline <= now) throw new HttpError(422, "Funding deadline must be in the future");
  let prev = body.fundingDeadline;
  for (const m of body.milestones) {
    if (m.deadline <= prev) throw new HttpError(422, "Milestone deadlines must be increasing and after the funding deadline");
    if (BigInt(m.amount) <= 0n) throw new HttpError(422, "Milestone amounts must be positive");
    prev = m.deadline;
  }
  if (!(await chain().isTokenAllowed(body.token))) throw new HttpError(422, "Token is not on the escrow allow-list");

  // A server nonce makes every draft's hash unique, so drafts can't be confused.
  const metadata = { ...body.metadata, nonce: randomBytes(16).toString("hex") };
  const hash = await metadataHash(metadata);
  const budget = body.milestones.reduce((acc, m) => acc + BigInt(m.amount), 0n);
  const db = getDb();
  const [row] = await db
    .insert(projects)
    .values({
      creatorAddress: session.address,
      token: body.token,
      title: body.metadata.title,
      summary: body.metadata.summary,
      description: body.metadata.description,
      category: body.metadata.category,
      metadata,
      metadataHash: hash,
      budget: budget.toString(),
      fundingDeadline: body.fundingDeadline,
      syncStatus: "draft",
    })
    .returning({ id: projects.id });
  await db.insert(milestones).values(
    body.milestones.map((m, i) => ({
      projectId: row!.id,
      index: i,
      title: body.metadata.milestones[i]!.title,
      description: body.metadata.milestones[i]!.description,
      amount: m.amount,
      deadline: m.deadline,
    })),
  );
  await audit(session.address, "project_draft_created", "project", row!.id, { metadataHash: hash });
  return json({ id: row!.id, metadataHash: hash }, 201);
});
