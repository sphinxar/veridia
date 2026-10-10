import { desc, eq } from "drizzle-orm";
import { recordTransactionSchema } from "@veridia/domain";
import { getDb } from "@/db";
import { transactions } from "@/db/schema";
import { handler, json, parseJson, requireSession } from "@/server/http";
import { getSession } from "@/server/session";

/** Record a submitted transaction as pending; the indexer reconciles its final status. */
export const POST = handler(async (req: Request) => {
  const session = await requireSession();
  const b = await parseJson(req, recordTransactionSchema);
  await getDb()
    .insert(transactions)
    .values({
      hash: b.hash,
      kind: b.kind,
      contract: b.contract,
      method: b.method,
      sourceAddress: session.address,
      projectChainId: b.projectId,
      roundId: b.roundId,
    })
    .onConflictDoNothing();
  return json({ ok: true }, 201);
});

export const GET = handler(async (req: Request) => {
  const mine = new URL(req.url).searchParams.get("mine") === "1";
  const session = await getSession();
  const rows = await getDb()
    .select()
    .from(transactions)
    .where(mine && session ? eq(transactions.sourceAddress, session.address) : undefined)
    .orderBy(desc(transactions.submittedAt))
    .limit(100);
  return json({ transactions: rows });
});
