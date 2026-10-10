import Link from "next/link";
import { Badge, Card, CardContent, CardHeader, CardTitle, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { PageHeader } from "@/components/app-shell";
import { OutcomeBadge, TxLink } from "@/components/bits";
import { ConnectPrompt } from "@/components/connect-prompt";
import { money } from "@/lib/format";
import { getVerifierProfile } from "@/server/queries";
import { getSession } from "@/server/session";
import { VerifierPanel } from "./profile-client";

export const metadata = { title: "Profile" };

export default async function ProfilePage() {
  const session = await getSession();
  if (!session) return <ConnectPrompt title="Your profile" description="Connect and sign in to manage your verifier registration and stake." />;
  const { profile, stakes, assignments } = await getVerifierProfile(session.address);
  return (
    <>
      <PageHeader title="Profile" description="Wallet, verifier status, stake and participation history." />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <VerifierPanel address={session.address} profile={profile ? { displayName: profile.displayName ?? "", expertise: profile.expertise } : null} />
          <Card>
            <CardHeader><CardTitle>Participation history</CardTitle></CardHeader>
            <CardContent>
              {assignments.length === 0 ? (
                <p className="text-sm text-muted-foreground">No rounds assigned yet.</p>
              ) : (
                <Table>
                  <THead><TR><TH>Round</TH><TH>Project</TH><TH>My vote</TH><TH>Conduct</TH><TH>Outcome</TH></TR></THead>
                  <TBody>
                    {assignments.map((a) => (
                      <TR key={a.round.id}>
                        <TD><Link href={`/verify/${a.round.id}`} className="text-primary hover:underline">#{a.round.id}</Link></TD>
                        <TD>{a.project?.title ?? `#${a.round.projectChainId}`} · M{a.round.milestoneIndex + 1}</TD>
                        <TD>{a.vote?.revealed ? (a.vote.vote === 1 ? "Approve" : "Reject") : a.vote ? "Committed" : "—"}</TD>
                        <TD>
                          {a.assignment.conduct === null ? "—" : a.assignment.conduct === 0 ? <Badge tone="success">Revealed</Badge> : <Badge tone="danger">No-show −{money(a.assignment.slashed)}</Badge>}
                        </TD>
                        <TD>{a.round.finalized ? <OutcomeBadge outcome={a.round.outcome} /> : "In progress"}</TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader><CardTitle>Stake history</CardTitle></CardHeader>
          <CardContent>
            {stakes.length === 0 ? (
              <p className="text-sm text-muted-foreground">No stake movements yet.</p>
            ) : (
              <ul className="divide-y divide-border text-sm">
                {stakes.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-2 py-2">
                    <span>
                      <span className="font-medium capitalize text-navy-900">{s.kind.replace("_", " ")}</span>
                      {s.roundId && <span className="text-xs text-muted-foreground"> · round #{s.roundId}</span>}
                      <div><TxLink hash={s.txHash} /></div>
                    </span>
                    <span className={s.kind === "slash" ? "tabular text-danger" : "tabular"}>{money(s.amount)}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
