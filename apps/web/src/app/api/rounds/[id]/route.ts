import { HttpError, handler, intParam, json } from "@/server/http";
import { getRoundDetail } from "@/server/queries";

export const GET = handler(async (_req: Request, ctx: { params: Promise<{ id: string }> }) => {
  const data = await getRoundDetail(intParam((await ctx.params).id));
  if (!data) throw new HttpError(404, "Round not indexed yet");
  return json(data);
});
