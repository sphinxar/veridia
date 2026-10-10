import { handler, json } from "@/server/http";
import { listActivity } from "@/server/queries";
import { getSession } from "@/server/session";

export const GET = handler(async (req: Request) => {
  const mine = new URL(req.url).searchParams.get("mine") === "1";
  const session = await getSession();
  return json(await listActivity({ address: mine ? session?.address : null }));
});
