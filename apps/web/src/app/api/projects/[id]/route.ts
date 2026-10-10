import { HttpError, handler, intParam, json } from "@/server/http";
import { getProject } from "@/server/queries";

export const GET = handler(async (_req: Request, ctx: { params: Promise<{ id: string }> }) => {
  const data = await getProject(intParam((await ctx.params).id));
  if (!data) throw new HttpError(404, "Project not found");
  return json(data);
});
