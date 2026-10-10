import Link from "next/link";
import { Scale } from "lucide-react";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, EmptyState, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { PageHeader } from "@/components/app-shell";
import { Address, AutoRefresh, Countdown, OutcomeBadge } from "@/components/bits";
import { money } from "@/lib/format";
import { appealableRounds, listAppeals } from "@/server/queries";

export const metadata = { title: "Disputes" };

export default async function DisputesPage() {
  const now = Math.floor(Date.now() / 1000);
  const [appeals, open] = await Promise.all([listAppeals(), appealableRounds(now)]);
  return (
    <>
      <AutoRefresh everyMs={8000} />
      <PageHeader
        title="Disputes"
        description="Each milestone attempt may be appealed once: by the creator against a rejection, or by a funder against an approval. A disjoint panel re-votes on the same evidence; its decisive outcome is final, otherwise the original stands."
      />
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Open appeal windows</CardTitle>
            <CardDescription>Decisive outcomes that can still be appealed. Funds cannot move until the window closes.</CardDescription>
          </CardHeader>
          <CardContent>
            {open.length === 0 ? (
              <p className="text-sm text-muted-foreground">No decisions are currently appealable.</p>
            ) : (
              <Table>
                <THead><TR><TH>Round</TH><TH>Project</TH><TH>Outcome</TH><TH>Window closes</TH></TR></THead>
                <TBody>
                  {open.map(({ round: r, project }) => (
                    <TR key={r.id}>
                      <TD><Link href={`/verify/${r.id}`} className="font-medium text-primary hover:underline">#{r.id}</Link></TD>
                      <TD>{project ? <Link href={`/projects/${project.id}`} className="hover:underline">{project.title}</Link> : `#${r.projectChainId}`} · M{r.milestoneIndex + 1}</TD>
                      <TD><OutcomeBadge outcome={r.outcome} provisional /></TD>
                      <TD><Countdown to={r.appealableUntil!} prefix="in " done="closed" /></TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Appeals</CardTitle></CardHeader>
          <CardContent>
            {appeals.length === 0 ? (
              <EmptyState icon={<Scale />} title="No appeals filed" description="Appeals appear here with their status and final outcome." />
            ) : (
              <Table data-testid="appeals-table">
                <THead><TR><TH>Project</TH><TH>Original</TH><TH>Appeal round</TH><TH>Appellant</TH><TH>Bond</TH><TH>Status</TH><TH>Final</TH></TR></THead>
                <TBody>
                  {appeals.map(({ appeal: a, original, appealRound, project }) => (
                    <TR key={a.id}>
                      <TD>{project ? <Link href={`/projects/${project.id}`} className="hover:underline">{project.title}</Link> : `#${a.projectChainId}`} · M{a.milestoneIndex + 1}</TD>
                      <TD><Link href={`/verify/${a.roundId}`} className="text-primary hover:underline">#{a.roundId}</Link> {original && <OutcomeBadge outcome={original.outcome} />}</TD>
                      <TD>
                        <Link href={`/verify/${a.appealRoundId}`} className="text-primary hover:underline">#{a.appealRoundId}</Link>{" "}
                        {appealRound && !appealRound.finalized && <span className="text-xs text-muted-foreground">({appealRound.commits} committed)</span>}
                      </TD>
                      <TD><Address value={a.appellant} /></TD>
                      <TD className="tabular">{money(a.bond)}</TD>
                      <TD>
                        <Badge tone={a.status === "resolved" ? "neutral" : "warning"}>{a.status === "resolved" ? (a.overturned ? "Overturned" : "Upheld") : "In progress"}</Badge>
                      </TD>
                      <TD>{a.finalOutcome !== null ? <OutcomeBadge outcome={a.finalOutcome} /> : "—"}</TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
