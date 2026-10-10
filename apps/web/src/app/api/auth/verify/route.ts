import { and, eq, gt, isNull } from "drizzle-orm";
import { cookies } from "next/headers";
import { authVerifySchema } from "@veridia/domain";
import { getDb } from "@/db";
import { authNonces, users } from "@/db/schema";
import { audit } from "@/server/audit";
import { HttpError, handler, json, parseJson } from "@/server/http";
import { SESSION_COOKIE, createSessionToken, sessionCookieOptions } from "@/server/session";
import { verifyWalletSignature } from "@/server/wallet-auth";

export const POST = handler(async (req: Request) => {
  const body = await parseJson(req, authVerifySchema);
  const db = getDb();
  // Atomically consume the nonce: single use, unexpired, bound to the address.
  const [row] = await db
    .update(authNonces)
    .set({ usedAt: new Date() })
    .where(
      and(
        eq(authNonces.nonce, body.nonce),
        eq(authNonces.address, body.address),
        isNull(authNonces.usedAt),
        gt(authNonces.expiresAt, new Date()),
      ),
    )
    .returning();
  if (!row) throw new HttpError(401, "Sign-in challenge expired or already used");
  if (!verifyWalletSignature(body.address, row.message, body.signature)) {
    throw new HttpError(401, "Invalid wallet signature");
  }
  await db
    .insert(users)
    .values({ address: body.address, lastLoginAt: new Date() })
    .onConflictDoUpdate({ target: users.address, set: { lastLoginAt: new Date() } });
  (await cookies()).set(SESSION_COOKIE, await createSessionToken(body.address), sessionCookieOptions);
  await audit(body.address, "sign_in", "user", body.address);
  return json({ address: body.address });
});
