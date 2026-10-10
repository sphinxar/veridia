import { randomBytes } from "node:crypto";
import { accountAddress } from "@veridia/domain";
import { getDb } from "@/db";
import { authNonces } from "@/db/schema";
import { publicConfig } from "@/server/config";
import { HttpError, handler, json } from "@/server/http";
import { signInMessage } from "@/server/wallet-auth";

export const GET = handler(async (req: Request) => {
  const address = new URL(req.url).searchParams.get("address") ?? "";
  if (!accountAddress.safeParse(address).success) throw new HttpError(400, "Invalid address");
  const nonce = randomBytes(24).toString("hex");
  const issuedAt = new Date();
  const message = signInMessage(address, nonce, publicConfig().network, issuedAt);
  await getDb()
    .insert(authNonces)
    .values({ nonce, address, message, expiresAt: new Date(issuedAt.getTime() + 5 * 60_000) });
  return json({ nonce, message });
});
