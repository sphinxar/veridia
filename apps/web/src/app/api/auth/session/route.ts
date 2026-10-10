import { getSession } from "@/server/session";
import { handler, json } from "@/server/http";

export const GET = handler(async () => json({ session: await getSession() }));
