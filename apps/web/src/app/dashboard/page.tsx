import Link from "next/link";
import { ArrowRight, Bell, FolderPlus } from "lucide-react";
import { MilestoneStatus, ProjectStatus } from "@veridia/domain";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, EmptyState, Stat, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { PageHeader } from "@/components/app-shell";
import { AutoRefresh, ProjectStatusBadge } from "@/components/bits";
import { ConnectPrompt } from "@/components/connect-prompt";
import { money, tokenSymbol } from "@/lib/format";
import { publicConfig } from "@/server/config";
import { dashboardFor } from "@/server/queries";
import { getSession } from "@/server/session";

export const metadata = { title: "Dashboard" };

interface Action {
  href: string;
  label: string;
  detail: string;
  tone: "warning" | "info" | "success";
}

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) return <ConnectPrompt title="Your dashboard" description="Connect and sign in with your wallet to see your projects, funds and required actions." />;
  const cfg = publicConfig();
  const d = await dashboardFor(session.address);
  const now = Math.floor(Date.now() / 1000);

  const actions: Action[] = [];
  for (const p of d.created) {
    if (p.syncStatus !== "confirmed") actions.push({ href: `/projects/${p.id}`, label: `“${p.title}” is not confirmed on-chain`, detail: "Waiting for the creation transaction or still a draft.", tone: "info" });
    const ms = d.myMilestones.filter((m) => m.projectId === p.id);
    const cur = ms.find((m) => m.index === p.currentMilestone);
    if (p.status === ProjectStatus.Active && cur?.status === MilestoneStatus.Pending)
      actions.push({ href: `/projects/${p.id}`, label: `Submit milestone ${cur.index + 1} of “${p.title}”`, detail: "Upload evidence and request verification.", tone: "warning" });
    if (cur?.status === MilestoneStatus.InVerification && cur.currentRoundId)
      actions.push({ href: `/verify/${cur.currentRoundId}`, label: `Milestone ${cur.index + 1} of “${p.title}” is under verification`, detail: `Round #${cur.currentRoundId}. Settle once the decision is final.`, tone: "info" });
  }
  for (const f of d.funded) {
    if ((f.project.status === ProjectStatus.Cancelled || f.project.status === ProjectStatus.Failed) && !f.contribution.refunded)
      actions.push({ href: `/projects/${f.project.id}`, label: `Claim your refund from “${f.project.title}”`, detail: "The project was cancelled or failed.", tone: "warning" });
  }
  for (const a of d.assignments) {
    if (a.round.finalized) continue;
    if (now <= a.round.commitDeadline && !a.vote) actions.push({ href: `/verify/${a.round.id}`, label: `Commit your vote in round #${a.round.id}`, detail: "Commit phase is open.", tone: "warning" });
    else if (now > a.round.commitDeadline && now <= a.round.revealDeadline && a.vote && !a.vote.revealed)
      actions.push({ href: `/verify/${a.round.id}`, label: `Reveal your vote in round #${a.round.id}`, detail: "Reveal before the deadline to avoid slashing.", tone: "warning" });
  }
  if (d.pendingTxs.length) actions.push({ href: "/activity", label: `${d.pendingTxs.length} transaction(s) pending confirmation`, detail: "They are reconciled automatically.", tone: "info" });

  const raised = d.created.reduce((s, p) => s + BigInt(p.funded), 0n);
  const released = d.created.reduce((s, p) => s + BigInt(p.released), 0n);
  const contributed = d.funded.reduce((s, f) => s + BigInt(f.contribution.amount), 0n);
  const openAssignments = d.assignments.filter((a) => !a.round.finalized).length;

  return (
    <>
      <AutoRefresh everyMs={8000} />
      <PageHeader
        title="Dashboard"
        description="Projects, funds and actions that need your attention."
        actions={
          <Button asChild>
            <Link href="/projects/new"><FolderPlus /> New project</Link>
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Raised by my projects" value={money(raised)} hint={`${d.created.length} project(s)`} />
        <Stat label="Released to me" value={money(released)} hint="After final approvals" />
        <Stat label="I have funded" value={money(contributed)} hint={`${d.funded.length} project(s)`} />
        <Stat label="Open assignments" value={openAssignments} hint="As a verifier" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell className="size-4" /> Required actions</CardTitle>
          </CardHeader>
          <CardContent>
            {actions.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing needs your attention right now.</p>
            ) : (
              <ul className="space-y-2" data-testid="required-actions">
                {actions.map((a, i) => (
                  <li key={i}>
                    <Link href={a.href} className="flex items-start justify-between gap-2 rounded-md border border-border p-3 hover:bg-muted">
                      <span>
                        <span className="block text-sm font-medium text-navy-900">{a.label}</span>
                        <span className="text-xs text-muted-foreground">{a.detail}</span>
                      </span>
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader><CardTitle>My projects</CardTitle></CardHeader>
            <CardContent>
              {d.created.length === 0 ? (
                <EmptyState title="No projects yet" description="Create a project to raise funds against verifiable milestones." action={<Button asChild variant="outline" size="sm"><Link href="/projects/new">Create project</Link></Button>} />
              ) : (
                <Table>
                  <THead><TR><TH>Project</TH><TH>Status</TH><TH>Funded</TH><TH>Released</TH></TR></THead>
                  <TBody>
                    {d.created.map((p) => {
                      const sym = tokenSymbol(p.token, cfg.contracts.token);
                      return (
                        <TR key={p.id}>
                          <TD><Link href={`/projects/${p.id}`} className="font-medium text-primary hover:underline">{p.title}</Link></TD>
                          <TD><ProjectStatusBadge status={p.status} sync={p.syncStatus} /></TD>
                          <TD className="tabular">{money(p.funded, sym)} / {money(p.budget, sym)}</TD>
                          <TD className="tabular">{money(p.released, sym)}</TD>
                        </TR>
                      );
                    })}
                  </TBody>
                </Table>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Projects I funded</CardTitle></CardHeader>
            <CardContent>
              {d.funded.length === 0 ? (
                <p className="text-sm text-muted-foreground">You have not funded any project yet. <Link href="/projects?filter=funding" className="text-primary hover:underline">Browse projects in funding</Link>.</p>
              ) : (
                <Table>
                  <THead><TR><TH>Project</TH><TH>Status</TH><TH>My contribution</TH><TH /></TR></THead>
                  <TBody>
                    {d.funded.map(({ project: p, contribution: c }) => (
                      <TR key={p.id}>
                        <TD><Link href={`/projects/${p.id}`} className="font-medium text-primary hover:underline">{p.title}</Link></TD>
                        <TD><ProjectStatusBadge status={p.status} /></TD>
                        <TD className="tabular">{money(c.amount, tokenSymbol(p.token, cfg.contracts.token))}</TD>
                        <TD>{c.refunded && <Badge tone="neutral">Refunded</Badge>}</TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
