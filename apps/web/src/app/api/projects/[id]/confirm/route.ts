import { eq } from "drizzle-orm";
import { rpc, scValToNative } from "@stellar/stellar-sdk";
import { z } from "zod";
import { txHash } from "@veridia/domain";
import { getDb } from "@/db";
import { projects } from "@/db/schema";
import { audit } from "@/server/audit";
import { chain } from "@/server/chain";
import { HttpError, handler, intParam, json, parseJson, requireSession } from "@/server/http";

const body = z.object({ txHash, stage: z.enum(["submitted", "confirmed"]) });

/**
 * Fast-path linking of a draft to its on-chain project. The client's claim is never
 * trusted: the server fetches the transaction from RPC and checks the on-chain
 * project's creator and metadata hash against the draft. (The indexer performs the same
 * linking from events independently.)
 */
export const POST = handler(async (req: Request, ctx: { params: Promise<{ id: string }> }) => {
  const session = await requireSession();
  const id = intParam((await ctx.params).id);
  const { txHash: hash, stage } = await parseJson(req, body);
  const db = getDb();
  const [p] = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  if (!p) throw new HttpError(404, "Project not found");
  if (p.creatorAddress !== session.address) throw new HttpError(403, "Only the creator can confirm this project");
  if (p.chainId) return json({ chainId: p.chainId, syncStatus: p.syncStatus });

  if (stage === "submitted") {
    await db.update(projects).set({ syncStatus: "pending", createdTx: hash, updatedAt: new Date() }).where(eq(projects.id, id));
    return json({ syncStatus: "pending" });
  }

  const c = chain();
  const tx = await c.waitForTransaction(hash, 20_000);
  if (tx.status !== rpc.Api.GetTransactionStatus.SUCCESS || !tx.returnValue) {
    throw new HttpError(409, `Transaction is ${tx.status.toLowerCase()}`);
  }
  const chainId = Number(scValToNative(tx.returnValue));
  const onchain = await c.getProject(chainId);
  if (onchain.creator !== p.creatorAddress || onchain.metadataHash !== p.metadataHash) {
    throw new HttpError(409, "On-chain project does not match this draft");
  }
  await db
    .update(projects)
    .set({ chainId, syncStatus: "confirmed", status: onchain.status, createdTx: hash, updatedAt: new Date() })
    .where(eq(projects.id, id));
  await audit(session.address, "project_confirmed", "project", id, { chainId, txHash: hash });
  return json({ chainId, syncStatus: "confirmed" });
});
