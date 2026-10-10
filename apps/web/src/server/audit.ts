import "server-only";
import { getDb } from "@/db";
import { auditEvents } from "@/db/schema";

export async function audit(actor: string | null, action: string, entityType: string, entityId: string | number, details: Record<string, unknown> = {}) {
  await getDb().insert(auditEvents).values({ actorAddress: actor, action, entityType, entityId: String(entityId), details });
}
