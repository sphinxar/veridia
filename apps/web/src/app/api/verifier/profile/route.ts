import { metadataHash, verifierProfileSchema } from "@veridia/domain";
import { getDb } from "@/db";
import { verifierProfiles } from "@/db/schema";
import { audit } from "@/server/audit";
import { handler, json, parseJson, requireSession } from "@/server/http";
import { getVerifierProfile } from "@/server/queries";

export const GET = handler(async () => {
  const session = await requireSession();
  return json(await getVerifierProfile(session.address));
});

/** Save off-chain profile; returns the hash to commit on-chain at registration. */
export const PUT = handler(async (req: Request) => {
  const session = await requireSession();
  const body = await parseJson(req, verifierProfileSchema);
  const hash = await metadataHash({ address: session.address, ...body });
  await getDb()
    .insert(verifierProfiles)
    .values({ address: session.address, displayName: body.displayName, expertise: body.expertise })
    .onConflictDoUpdate({
      target: verifierProfiles.address,
      set: { displayName: body.displayName, expertise: body.expertise, updatedAt: new Date() },
    });
  await audit(session.address, "verifier_profile_saved", "verifier", session.address);
  return json({ metadataHash: hash });
});
