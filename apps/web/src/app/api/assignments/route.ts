import { accountAddress } from "@veridia/domain";
import { HttpError, handler, json } from "@/server/http";
import { assignmentsFor } from "@/server/queries";

/** Panel assignments are public on-chain data; no session required. */
export const GET = handler(async (req: Request) => {
  const address = new URL(req.url).searchParams.get("address") ?? "";
  if (!accountAddress.safeParse(address).success) throw new HttpError(400, "Invalid address");
  return json({ assignments: await assignmentsFor(address) });
});
