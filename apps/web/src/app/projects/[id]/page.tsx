import Link from "next/link";
import { notFound } from "next/navigation";
import { percent } from "@veridia/domain";
import { Alert, Card, CardContent, CardHeader, CardTitle, Progress, Stat, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { Address, AutoRefresh, OutcomeBadge, ProjectStatusBadge, TxLink } from "@/components/bits";
import { dateTime, money, tokenSymbol } from "@/lib/format";
import { publicConfig } from "@/server/config";
import { getProject } from "@/server/queries";
import { FundingPanel, MilestoneList, ProjectActions, ReconcileButton } from "./project-client";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();
  const data = await getProject(id);
  if (!data) notFound();
  const { project: p, milestones, contributions, rounds, appeals } = data;
  const cfg = publicConfig();
  const sym = tokenSymbol(p.token, cfg.contracts.token);
  const escrowed = BigInt(p.funded) - BigInt(p.released);
  const pct = percent(BigInt(p.funded), BigInt(p.budget));
  const live = p.syncStatus !== "confirmed" || milestones.some((m) => m.status === 1) || p.status === 0;

  return (
    <div className="space-y-6">
      <AutoRefresh enabled={live} everyMs={5000} />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <ProjectStatusBadge status={p.status} sync={p.syncStatus} />
            {p.chainId && <span className="text-xs text-muted-foreground">On-chain #{p.chainId}</span>}
            <span className="text-xs text-muted-foreground">· {p.category}</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground" data-testid="project-title">{p.title}</h1>
          <p className="max-w-3xl text-muted-foreground">{p.summary}</p>
          <p className="text-xs text-muted-foreground">
            Creator <Address value={p.creatorAddress} /> · Token <Address value={p.token} /> · Metadata hash <span className="font-mono">{p.metadataHash.slice(0, 12)}…</span>
          </p>
        </div>
        {p.chainId && <ReconcileButton projectId={p.id} lastReconciledAt={p.lastReconciledAt?.toISOString() ?? null} />}
      </div>

      {p.syncStatus !== "confirmed" && (
        <Alert tone="warning" title={p.syncStatus === "pending" ? "Waiting for on-chain confirmation" : "Draft — not on-chain"}>
          {p.syncStatus === "pending"
            ? "The creation transaction was submitted. This page updates automatically once the indexer sees it."
            : "This draft has not been created on-chain. Only you can see it."}
          {p.createdTx && (
            <span className="ml-1">
              Tx <TxLink hash={p.createdTx} />
            </span>
          )}
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Budget" value={money(p.budget, sym)} hint={`${milestones.length} milestones`} />
        <Stat label="Funded" value={money(p.funded, sym)} hint={<Progress value={pct} label="Funding progress" className="mt-2" />} />
        <Stat label="Released" value={money(p.released, sym)} hint="Paid to creator after final approvals" />
        <Stat label="In escrow" value={money(escrowed, sym)} hint={p.status === 3 || p.status === 4 ? `Refund pool ${money(p.refundPool, sym)}` : "Locked in the escrow contract"} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <MilestoneList
            project={{
              id: p.id,
              chainId: p.chainId,
              creator: p.creatorAddress,
              status: p.status,
              currentMilestone: p.currentMilestone,
              maxAttempts: p.maxAttempts ?? 3,
              funded: p.funded,
              released: p.released,
              symbol: sym,
            }}
            milestones={milestones.map((m) => ({
              index: m.index,
              title: m.title,
              description: m.description,
              amount: m.amount,
              deadline: m.deadline,
              status: m.status,
              attempts: m.attempts,
              currentRoundId: m.currentRoundId,
              evidenceHash: m.evidenceHash,
              paidTx: m.paidTx,
            }))}
          />

          <Card>
            <CardHeader>
              <CardTitle>Verification history</CardTitle>
            </CardHeader>
            <CardContent>
              {rounds.length === 0 ? (
                <p className="text-sm text-muted-foreground">No verification rounds yet.</p>
              ) : (
                <Table>
                  <THead>
                    <TR>
                      <TH>Round</TH>
                      <TH>Milestone</TH>
                      <TH>Type</TH>
                      <TH>Votes</TH>
                      <TH>Outcome</TH>
                    </TR>
                  </THead>
                  <TBody>
                    {rounds.map((r) => (
                      <TR key={r.id}>
                        <TD>
                          <Link className="font-medium text-primary hover:underline" href={`/verify/${r.id}`}>#{r.id}</Link>
                        </TD>
                        <TD>
                          {r.milestoneIndex + 1} · attempt {r.attempt}
                        </TD>
                        <TD>{r.kind === 1 ? `Appeal of #${r.parentRoundId}` : "Original"}</TD>
                        <TD className="tabular">
                          {r.approvals}✓ / {r.rejections}✗ <span className="text-muted-foreground">({r.reveals}/{r.commits} revealed)</span>
                        </TD>
                        <TD>{r.finalized ? <OutcomeBadge outcome={r.outcome} /> : <span className="text-xs text-muted-foreground">In progress</span>}</TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              )}
              {appeals.length > 0 && (
                <p className="mt-3 text-xs text-muted-foreground">
                  {appeals.length} appeal(s) filed. <Link href="/disputes" className="text-primary hover:underline">View disputes</Link>
                </p>
              )}
            </CardContent>
          </Card>

          {p.description && (
            <Card>
              <CardHeader>
                <CardTitle>About this project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <FundingPanel
            project={{
              id: p.id,
              chainId: p.chainId,
              status: p.status,
              budget: p.budget,
              funded: p.funded,
              fundingDeadline: p.fundingDeadline,
              symbol: sym,
            }}
          />
          <ProjectActions
            project={{
              id: p.id,
              chainId: p.chainId,
              creator: p.creatorAddress,
              status: p.status,
              fundingDeadline: p.fundingDeadline,
              funded: p.funded,
              refundPool: p.refundPool,
              anyInVerification: milestones.some((m) => m.status === 1),
              symbol: sym,
            }}
            contributions={contributions.map((c) => ({ funder: c.funderAddress, amount: c.amount, refunded: c.refunded }))}
          />
          <Card>
            <CardHeader>
              <CardTitle>Funders</CardTitle>
            </CardHeader>
            <CardContent>
              {contributions.length === 0 ? (
                <p className="text-sm text-muted-foreground">No deposits yet.</p>
              ) : (
                <ul className="divide-y divide-border text-sm">
                  {contributions.map((c) => (
                    <li key={c.funderAddress} className="flex items-center justify-between py-2">
                      <Address value={c.funderAddress} />
                      <span className="tabular font-medium text-foreground">
                        {money(c.amount, sym)}
                        {c.refunded && <span className="ml-1 text-xs text-muted-foreground">(refunded)</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 text-xs text-muted-foreground">Funding deadline: {dateTime(p.fundingDeadline)}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
