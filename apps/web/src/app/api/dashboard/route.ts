import { handler, json, requireSession } from "@/server/http";
import { dashboardFor } from "@/server/queries";

export const GET = handler(async () => {
  const session = await requireSession();
  return json(await dashboardFor(session.address));
});
