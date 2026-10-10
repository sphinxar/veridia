import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { projects } from "@/db/schema";
import { HttpError, handler, intParam, json } from "@/server/http";
import { reconcileProject } from "@/server/reconcile";
import { getSession } from "@/server/session";

export const POST = handler(async (_req: Request, ctx: { params: Promise<{ id: string }> }) => {
  const id = intParam((await ctx.params).id);
  const [p] = await getDb().select().from(projects).where(eq(projects.id, id)).limit(1);
  if (!p?.chainId) throw new HttpError(404, "Project is not on-chain yet");
  const drift = await reconcileProject(p.chainId, (await getSession())?.address ?? null);
  return json({ drift });
});
