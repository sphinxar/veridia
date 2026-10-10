"use client";
import * as React from "react";
import Link from "next/link";
import { ClipboardCheck, Wallet } from "lucide-react";
import { sc } from "@veridia/stellar-client";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, EmptyState, Spinner, TBody, TD, TH, THead, TR, Table } from "@veridia/ui";
import { Countdown, OutcomeBadge, useNow, useRefreshAfterTx } from "@/components/bits";
import { useWallet } from "@/components/providers";
import { useInvoke } from "@/lib/use-invoke";

interface AssignmentRow {
  round: { id: number; kind: number; projectChainId: number; milestoneIndex: number; commitDeadline: number; revealDeadline: number; commits: number; reveals: number; finalized: boolean; outcome: number };
  assignment: { conduct: number | null; slashed: string };
  vote: { revealed: boolean; vote: number | null } | null;
  project: { id: number; title: string } | null;
}

export function FinalizeButton({ roundId }: { roundId: number }) {
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  return (
    <Button
      size="sm"
      variant="navy"
      disabled={pending !== null}
      data-testid={`finalize-${roundId}`}
      onClick={async () => {
        const res = await invoke({ contract: "verification", method: "finalize_round", kind: "finalize_round", roundId, label: `Finalize round #${roundId}`, args: [sc.u64(roundId)] });
        if (res) refresh();
      }}
    >
      {pending && <Spinner />} Finalize
    </Button>
  );
}

function actionFor(r: AssignmentRow, now: number): { label: string; tone: "warning" | "info" | "neutral" | "success" | "danger" } {
  const { round, vote } = r;
  if (round.finalized) {
    if (r.assignment.conduct === 1 || r.assignment.conduct === 2) return { label: "Missed (slashed)", tone: "danger" };
    return { label: "Completed", tone: "success" };
  }
  if (now <= round.commitDeadline) return vote ? { label: "Committed", tone: "info" } : { label: "Commit needed", tone: "warning" };
  if (now <= round.revealDeadline) {
    if (!vote) return { label: "Missed commit", tone: "danger" };
    return vote.revealed ? { label: "Revealed", tone: "success" } : { label: "Reveal needed", tone: "warning" };
  }
  return { label: "Awaiting finalization", tone: "neutral" };
}

export function MyAssignments() {
  const wallet = useWallet();
  const now = useNow(5000);
  const [rows, setRows] = React.useState<AssignmentRow[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!wallet.address) return;
    let stop = false;
    const load = () =>
      fetch(`/api/assignments?address=${wallet.address}`)
        .then(async (r) => {
          const b = await r.json();
          if (!r.ok) throw new Error(b.error);
          if (!stop) setRows(b.assignments);
        })
        .catch((e) => !stop && setError(String(e.message ?? e)));
    load();
    const t = setInterval(load, 8000);
    return () => {
      stop = true;
      clearInterval(t);
    };
  }, [wallet.address]);

  if (!wallet.address) {
    return (
      <EmptyState
        icon={<Wallet />}
        title="Connect your wallet to see your assignments"
        description="Panels are drawn on-chain from registered, staked verifiers."
        action={<Button onClick={() => wallet.connect()}>Connect wallet</Button>}
      />
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>My assignments</CardTitle>
        <CardDescription>
          Rounds where your address was selected. Not registered yet? <Link href="/profile" className="text-primary hover:underline">Become a verifier</Link>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <p className="text-sm text-danger">{error}</p>
        ) : rows === null ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Loading…</p>
        ) : rows.length === 0 ? (
          <EmptyState icon={<ClipboardCheck />} title="No assignments yet" description="When a milestone you are eligible for is submitted, you may be drawn onto its panel." />
        ) : (
          <Table data-testid="assignments">
            <THead>
              <TR>
                <TH>Round</TH>
                <TH>Project</TH>
                <TH>Status</TH>
                <TH>Deadline</TH>
                <TH>Outcome</TH>
              </TR>
            </THead>
            <TBody>
              {rows.map((r) => {
                const a = actionFor(r, now);
                const deadline = now <= r.round.commitDeadline ? r.round.commitDeadline : r.round.revealDeadline;
                return (
                  <TR key={r.round.id}>
                    <TD>
                      <Link href={`/verify/${r.round.id}`} className="font-medium text-primary hover:underline" data-testid={`assignment-${r.round.id}`}>
                        #{r.round.id}
                      </Link>
                      {r.round.kind === 1 && <span className="ml-1 text-xs text-muted-foreground">(appeal)</span>}
                    </TD>
                    <TD>{r.project ? `${r.project.title} · M${r.round.milestoneIndex + 1}` : `Project #${r.round.projectChainId}`}</TD>
                    <TD>
                      <Badge tone={a.tone}>{a.label}</Badge>
                    </TD>
                    <TD className="text-xs">{r.round.finalized ? "—" : <Countdown to={deadline} prefix="in " done="passed" />}</TD>
                    <TD>{r.round.finalized ? <OutcomeBadge outcome={r.round.outcome} /> : "—"}</TD>
                  </TR>
                );
              })}
            </TBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
