import { cookies } from "next/headers";
import { handler, json } from "@/server/http";
import { SESSION_COOKIE } from "@/server/session";

export const POST = handler(async () => {
  (await cookies()).delete(SESSION_COOKIE);
  return json({ ok: true });
});
