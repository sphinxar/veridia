import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { getDb } from "@/db";
import { verificationRounds } from "@/db/schema";
import { PageHeader } from "@/components/app-shell";
import { AutoRefresh, Countdown } from "@/components/bits";
import { MyAssignments, FinalizeButton } from "./verify-client";

export const metadata = { title: "Verify" };

export default async function VerifyPage() {
  const open = await getDb()
    .select()
    .from(verificationRounds)
    .where(eq(verificationRounds.finalized, false))
    .orderBy(desc(verificationRounds.id))
    .limit(50);
  const now = Math.floor(Date.now() / 1000);
  return (
    <>
      <AutoRefresh everyMs={8000} />
      <PageHeader title="Verification" description="Review evidence for rounds you were assigned to and vote with commit-reveal. Your vote stays hidden until the reveal phase." />
      <div className="space-y-6">
        <MyAssignments />
        <Card>
          <CardHeader>
            <CardTitle>Open rounds</CardTitle>
            <CardDescription>All rounds still in progress. Anyone may finalize a round once its reveal deadline passes — missing reveals can never block a round.</CardDescription>
          </CardHeader>
          <CardContent>
            {open.length === 0 ? (
              <p className="text-sm text-muted-foreground">No open rounds.</p>
            ) : (
              <Table>
                <THead>
                  <TR>
                    <TH>Round</TH>
                    <TH>Project / milestone</TH>
                    <TH>Phase</TH>
                    <TH>Progress</TH>
                    <TH />
                  </TR>
                </THead>
                <TBody>
                  {open.map((r) => {
                    const phase = now <= r.commitDeadline ? "Commit" : now <= r.revealDeadline && r.reveals < r.commits ? "Reveal" : "Ready to finalize";
                    return (
                      <TR key={r.id}>
                        <TD>
                          <Link href={`/verify/${r.id}`} className="font-medium text-primary hover:underline">#{r.id}</Link>
                          {r.kind === 1 && <span className="ml-1 text-xs text-muted-foreground">(appeal)</span>}
                        </TD>
                        <TD>Project #{r.projectChainId} · M{r.milestoneIndex + 1}</TD>
                        <TD>
                          {phase}
                          {phase !== "Ready to finalize" && (
                            <span className="ml-1 text-xs text-muted-foreground">
                              (<Countdown to={phase === "Commit" ? r.commitDeadline : r.revealDeadline} prefix="ends in " />)
                            </span>
                          )}
                        </TD>
                        <TD className="tabular text-xs">{r.commits} committed · {r.reveals} revealed</TD>
                        <TD className="text-right">{phase === "Ready to finalize" && <FinalizeButton roundId={r.id} />}</TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
