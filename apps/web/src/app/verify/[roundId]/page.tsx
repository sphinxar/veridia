import Link from "next/link";
import { notFound } from "next/navigation";
import { Alert, Card, CardContent, CardDescription, CardHeader, CardTitle, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { Address, AutoRefresh, OutcomeBadge, TxLink } from "@/components/bits";
import { dateTime, money } from "@/lib/format";
import { getRoundDetail } from "@/server/queries";
import { RoundLive } from "./round-client";

export default async function RoundPage({ params }: { params: Promise<{ roundId: string }> }) {
  const roundId = Number((await params).roundId);
  if (!Number.isInteger(roundId) || roundId <= 0) notFound();
  const data = await getRoundDetail(roundId);
  if (!data) {
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <AutoRefresh everyMs={3000} />
        <Alert tone="info" title={`Round #${roundId} is not indexed yet`}>
          If it was just opened, it will appear within a few seconds.
        </Alert>
      </div>
    );
  }
  const { round: r, panel, votes, project, milestone, appeal } = data;
  const voteBy = new Map(votes.map((v) => [v.verifierAddress, v]));
  const conductLabel = (c: number | null) => (c === null ? "—" : c === 0 ? "Revealed" : c === 1 ? "No commit (slashed)" : "No reveal (slashed)");

  return (
    <div className="space-y-6">
      <AutoRefresh enabled={!r.finalized || (appeal?.status === "pending")} everyMs={4000} />
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          {project ? (
            <Link href={`/projects/${project.id}`} className="text-primary hover:underline">{project.title}</Link>
          ) : (
            `Project #${r.projectChainId}`
          )}{" "}
          · Milestone {r.milestoneIndex + 1} · Attempt {r.attempt}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Round #{r.id} {r.kind === 1 && <span className="text-base font-normal text-muted-foreground">— appeal of <Link className="text-primary hover:underline" href={`/verify/${r.parentRoundId}`}>#{r.parentRoundId}</Link></span>}
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <RoundLive
            round={{
              id: r.id,
              kind: r.kind,
              parentRoundId: r.parentRoundId,
              projectId: project?.id ?? null,
              projectChainId: r.projectChainId,
              milestoneIndex: r.milestoneIndex,
              evidenceHash: r.evidenceHash,
              commitDeadline: r.commitDeadline,
              revealDeadline: r.revealDeadline,
              commits: r.commits,
              reveals: r.reveals,
              finalized: r.finalized,
              outcome: r.outcome,
              appealableUntil: r.appealableUntil,
              appealRoundId: r.appealRoundId,
              creator: project?.creatorAddress ?? null,
              panel: panel.map((p) => p.verifierAddress),
              milestoneTitle: milestone?.title ?? null,
              milestoneCriteria: milestone?.description ?? null,
              amount: milestone?.amount ?? null,
            }}
          />

          <Card>
            <CardHeader>
              <CardTitle>Panel</CardTitle>
              <CardDescription>Selected on-chain at round opening (Soroban PRNG; see threat model). Votes are visible only after reveal.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table data-testid="panel-table">
                <THead>
                  <TR>
                    <TH>Verifier</TH>
                    <TH>Commit</TH>
                    <TH>Reveal</TH>
                    <TH>Conduct</TH>
                  </TR>
                </THead>
                <TBody>
                  {panel.map((p) => {
                    const v = voteBy.get(p.verifierAddress);
                    return (
                      <TR key={p.verifierAddress}>
                        <TD><Address value={p.verifierAddress} /></TD>
                        <TD>{v ? <TxLink hash={v.committedTx} /> : <span className="text-xs text-muted-foreground">—</span>}</TD>
                        <TD>
                          {v?.revealed ? (
                            <span className={v.vote === 1 ? "text-success" : "text-danger"}>{v.vote === 1 ? "Approve" : "Reject"}</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">{v ? "Hidden" : "—"}</span>
                          )}
                        </TD>
                        <TD className="text-xs">
                          {conductLabel(p.conduct)}
                          {p.slashed !== "0" && <span className="ml-1 text-danger">−{money(p.slashed)}</span>}
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Round facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Row label="Opened">
                <TxLink hash={r.openedTx} />
              </Row>
              <Row label="Commit deadline">{dateTime(r.commitDeadline)}</Row>
              <Row label="Reveal deadline">{dateTime(r.revealDeadline)}</Row>
              <Row label="Tally">
                <span className="tabular">{r.approvals} approve · {r.rejections} reject</span>
              </Row>
              <Row label="Outcome">{r.finalized ? <OutcomeBadge outcome={r.outcome} /> : "Pending"}</Row>
              {r.appealableUntil && <Row label="Appealable until">{dateTime(r.appealableUntil)}</Row>}
              {appeal && (
                <Row label="Appeal">
                  <Link className="text-primary hover:underline" href={`/verify/${appeal.appealRoundId === r.id ? appeal.roundId : appeal.appealRoundId}`}>
                    {appeal.appealRoundId === r.id ? `of round #${appeal.roundId}` : `round #${appeal.appealRoundId}`}
                  </Link>{" "}
                  <span className="text-xs text-muted-foreground">({appeal.status})</span>
                </Row>
              )}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">Evidence hash bound to this round</p>
                <p className="break-all font-mono text-[11px] text-foreground" data-testid="round-evidence-hash">{r.evidenceHash}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right">{children}</span>
    </div>
  );
}
