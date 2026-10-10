"use client";
import * as React from "react";
import { CheckCircle2, Download, EyeOff, Gavel, ShieldAlert, ThumbsDown, ThumbsUp, Upload } from "lucide-react";
import { toast } from "sonner";
import { Outcome, Phase, RoundKind, Vote, canAppeal, fromHex, phaseOf, randomSalt, toHex } from "@veridia/domain";
import { computeCommitment, sc, type DecisionState, type RoundState, type VoteState } from "@veridia/stellar-client";
import { Alert, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Spinner, cn } from "@veridia/ui";
import { Countdown, OutcomeBadge, PhaseBadge, useNow, useRefreshAfterTx } from "@/components/bits";
import { EvidencePanel } from "@/components/evidence-panel";
import { useConfig, useWallet } from "@/components/providers";
import { money } from "@/lib/format";
import { useInvoke } from "@/lib/use-invoke";
import { downloadBackup, loadSecret, parseBackup, saveSecret, type VoteSecret } from "@/lib/vote-secrets";

export interface RoundProps {
  id: number;
  kind: number;
  parentRoundId: number | null;
  projectId: number | null;
  projectChainId: number;
  milestoneIndex: number;
  evidenceHash: string;
  commitDeadline: number;
  revealDeadline: number;
  commits: number;
  reveals: number;
  finalized: boolean;
  outcome: number;
  appealableUntil: number | null;
  appealRoundId: number | null;
  creator: string | null;
  panel: string[];
  milestoneTitle: string | null;
  milestoneCriteria: string | null;
  amount: string | null;
}

/** Live round view: authoritative state polled from the contract, falling back to indexed props. */
export function RoundLive({ round }: { round: RoundProps }) {
  const wallet = useWallet();
  const now = useNow(1000);
  const [chainRound, setChainRound] = React.useState<RoundState | null>(null);
  const [decision, setDecision] = React.useState<DecisionState | null>(null);
  const [myVote, setMyVote] = React.useState<VoteState | null | undefined>(undefined);

  const poll = React.useCallback(async () => {
    try {
      const r = await wallet.client.getRound(round.id);
      setChainRound(r);
      if (r.kind === RoundKind.Original) setDecision(await wallet.client.getDecision(round.id));
      if (wallet.address && r.panel.includes(wallet.address)) setMyVote(await wallet.client.getVote(round.id, wallet.address));
      else setMyVote(null);
    } catch {
      /* RPC hiccup: keep showing indexed data */
    }
  }, [wallet.client, wallet.address, round.id]);

  React.useEffect(() => {
    poll();
    const t = setInterval(poll, 4000);
    return () => clearInterval(t);
  }, [poll]);

  const r = {
    commitDeadline: chainRound?.commitDeadline ?? round.commitDeadline,
    revealDeadline: chainRound?.revealDeadline ?? round.revealDeadline,
    commits: chainRound?.commits ?? round.commits,
    reveals: chainRound?.reveals ?? round.reveals,
    finalized: chainRound?.finalized ?? round.finalized,
  };
  const phase = phaseOf(r, now);
  const outcome = (chainRound?.outcome ?? round.outcome) as Outcome;
  const onPanel = !!wallet.address && round.panel.includes(wallet.address);

  return (
    <>
      <Card>
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <PhaseBadge phase={phase} />
              {r.finalized && <OutcomeBadge outcome={outcome} />}
            </div>
            <p className="text-sm text-muted-foreground" data-testid="phase-text">
              {phase === Phase.Commit && (
                <>Commit phase ends in <Countdown to={r.commitDeadline} />. Votes are hidden commitments.</>
              )}
              {phase === Phase.Reveal && (
                <>Reveal phase ends in <Countdown to={r.revealDeadline} />. Committed verifiers must reveal.</>
              )}
              {phase === Phase.Finalizable && "Voting closed. Anyone can finalize this round now."}
              {phase === Phase.Finalized && "This round is finalized. Its result can never be overwritten."}
            </p>
          </div>
          <div className="tabular text-sm text-muted-foreground">
            {r.commits}/{round.panel.length} committed · {r.reveals}/{r.commits} revealed
          </div>
        </CardContent>
      </Card>

      {onPanel && (
        <VotePanel round={round} phase={phase} myVote={myVote} onChange={poll} />
      )}

      {phase === Phase.Finalizable && <FinalizeCard roundId={round.id} onDone={poll} />}

      {round.kind === RoundKind.Original && r.finalized && decision && (
        <DecisionCard round={round} decision={decision} outcome={outcome} onChange={poll} />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Milestone & evidence</CardTitle>
          <CardDescription>
            {round.milestoneTitle ?? `Milestone ${round.milestoneIndex + 1}`}
            {round.amount && <> · {money(round.amount)} on approval</>}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {round.milestoneCriteria && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Acceptance criteria</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">{round.milestoneCriteria}</p>
            </div>
          )}
          <Alert tone="info" title="What the hash check proves">
            Downloads are re-hashed in your browser and compared with the hash bound to this round on-chain. A match proves the file is exactly what was submitted — not that its claims are true. That judgement is yours.
          </Alert>
          {round.projectId ? (
            <EvidencePanel projectId={round.projectId} milestoneIndex={round.milestoneIndex} canUpload={false} onChainHash={round.evidenceHash} />
          ) : (
            <p className="text-sm text-muted-foreground">Off-chain evidence for this project is not available in this deployment.</p>
          )}
        </CardContent>
      </Card>
    </>
  );
}

// ---------------------------------------------------------------- voting

function VotePanel({ round, phase, myVote, onChange }: { round: RoundProps; phase: Phase; myVote: VoteState | null | undefined; onChange: () => void }) {
  const cfg = useConfig();
  const wallet = useWallet();
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  const voter = wallet.address!;
  const [secret, setSecret] = React.useState<VoteSecret | null>(null);
  const [choice, setChoice] = React.useState<Vote | null>(null);
  const [reviewed, setReviewed] = React.useState(false);
  const fileRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setSecret(loadSecret(cfg.network, cfg.contracts.verification, round.id, voter));
  }, [cfg, round.id, voter]);

  const secretMatches = !!secret && !!myVote && secret.commitment === myVote.commitment;

  async function commit() {
    if (!choice) return;
    const salt = randomSalt();
    const commitment = toHex(await computeCommitment(round.id, voter, choice, salt));
    const s: VoteSecret = {
      v: 1,
      network: cfg.network,
      contract: cfg.contracts.verification,
      roundId: round.id,
      voter,
      vote: choice,
      salt: toHex(salt),
      commitment,
      createdAt: new Date().toISOString(),
    };
    // Persist the secret before sending anything: losing it means you cannot reveal.
    if (!saveSecret(s)) {
      downloadBackup(s);
      toast.warning("Browser storage unavailable — a backup file was downloaded instead. Keep it safe.");
    }
    setSecret(s);
    const res = await invoke({
      contract: "verification",
      method: "commit",
      kind: "commit",
      roundId: round.id,
      projectId: round.projectChainId,
      label: "Commit hidden vote",
      args: [sc.address(voter), sc.u64(round.id), sc.bytes32(commitment)],
    });
    if (res) {
      onChange();
      refresh();
    }
  }

  async function reveal() {
    if (!secret) return;
    const recomputed = toHex(await computeCommitment(round.id, voter, secret.vote, fromHex(secret.salt)));
    if (!myVote || recomputed !== myVote.commitment) {
      toast.error("Your saved secret does not match your on-chain commitment", { description: "Restore the correct backup file for this round." });
      return;
    }
    const res = await invoke({
      contract: "verification",
      method: "reveal",
      kind: "reveal",
      roundId: round.id,
      projectId: round.projectChainId,
      label: `Reveal vote (${secret.vote === Vote.Approve ? "approve" : "reject"})`,
      args: [sc.address(voter), sc.u64(round.id), sc.u32(secret.vote), sc.bytes32(secret.salt)],
    });
    if (res) {
      onChange();
      refresh();
    }
  }

  async function restore(file: File) {
    try {
      const s = parseBackup(await file.text());
      if (s.roundId !== round.id || s.voter !== voter || s.contract !== cfg.contracts.verification) {
        throw new Error("This backup belongs to a different round, wallet or deployment");
      }
      saveSecret(s);
      setSecret(s);
      toast.success("Vote secret restored");
    } catch (e) {
      toast.error("Could not restore backup", { description: e instanceof Error ? e.message : String(e) });
    }
  }

  const restoreUi = (
    <div className="flex flex-wrap items-center gap-2">
      <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && restore(e.target.files[0])} />
      <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()}>
        <Upload /> Restore backup
      </Button>
    </div>
  );

  return (
    <Card className="border-primary/40" data-testid="vote-panel">
      <CardHeader>
        <CardTitle>Your vote</CardTitle>
        <CardDescription>You are on this round&apos;s panel. Only verifiable no-shows are penalised — never voting with the minority.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {myVote === undefined ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Loading your on-chain vote…</p>
        ) : phase === Phase.Commit && !myVote ? (
          <>
            <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Vote">
              {[
                { v: Vote.Approve, label: "Approve", icon: ThumbsUp, cls: "border-success/60 bg-success-soft" },
                { v: Vote.Reject, label: "Reject", icon: ThumbsDown, cls: "border-danger/60 bg-danger-soft" },
              ].map((o) => (
                <button
                  key={o.v}
                  type="button"
                  role="radio"
                  aria-checked={choice === o.v}
                  data-testid={`vote-${o.label.toLowerCase()}`}
                  onClick={() => setChoice(o.v)}
                  className={cn("flex items-center gap-3 rounded-lg border-2 border-border p-4 text-left transition-colors", choice === o.v && o.cls)}
                >
                  <o.icon className="size-5" />
                  <span>
                    <span className="block font-semibold text-foreground">{o.label}</span>
                    <span className="text-xs text-muted-foreground">{o.v === Vote.Approve ? "Evidence shows the milestone was achieved" : "Evidence is insufficient or contradicts the claim"}</span>
                  </span>
                </button>
              ))}
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" checked={reviewed} onChange={(e) => setReviewed(e.target.checked)} data-testid="reviewed-checkbox" />
              I reviewed the evidence and understand I must return to reveal this vote before the reveal deadline.
            </label>
            <Button disabled={!choice || !reviewed || pending !== null} onClick={commit} data-testid="commit-vote">
              {pending === "commit" ? <Spinner /> : <EyeOff />} Commit hidden vote
            </Button>
            <p className="text-xs text-muted-foreground">
              A random 32-byte salt is generated in your browser and stored locally; only <code>sha256(round, address, vote, salt)</code> goes on-chain.
            </p>
          </>
        ) : phase === Phase.Commit && myVote ? (
          <>
            <Alert tone="success" title="Vote committed">
              Reveal opens in <Countdown to={round.commitDeadline} />. Come back during the reveal phase.
            </Alert>
            {secret && secretMatches ? (
              <Button size="sm" variant="outline" onClick={() => downloadBackup(secret)} data-testid="download-backup">
                <Download /> Download secret backup
              </Button>
            ) : (
              <>
                <Alert tone="warning" title="No matching secret on this device">
                  Restore your backup file to be able to reveal.
                </Alert>
                {restoreUi}
              </>
            )}
          </>
        ) : phase === Phase.Reveal && myVote && !myVote.revealed ? (
          secret && secretMatches ? (
            <>
              <Alert tone="warning" title="Reveal required">
                Your committed vote: <strong>{secret.vote === Vote.Approve ? "Approve" : "Reject"}</strong>. Reveal before the deadline (<Countdown to={round.revealDeadline} />) or part of your locked stake is slashed.
              </Alert>
              <Button onClick={reveal} disabled={pending !== null} data-testid="reveal-vote">
                {pending === "reveal" ? <Spinner /> : <CheckCircle2 />} Reveal vote
              </Button>
            </>
          ) : (
            <>
              <Alert tone="danger" title="Secret missing">
                This device has no secret matching your on-chain commitment. Restore the backup you downloaded when committing.
              </Alert>
              {restoreUi}
            </>
          )
        ) : myVote?.revealed ? (
          <Alert tone="success" title="Vote revealed" >
            You voted <strong>{myVote.vote === Vote.Approve ? "Approve" : "Reject"}</strong>. Your stake lock is released when the round is finalized.
          </Alert>
        ) : (
          <Alert tone="danger" title={myVote ? "Vote not revealed" : "No vote committed"}>
            {myVote ? "The reveal window has closed." : "The commit window has closed."} This counts as a no-show and part of the stake locked for this round is slashed at finalization.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

function FinalizeCard({ roundId, onDone }: { roundId: number; onDone: () => void }) {
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">Finalization tallies revealed votes against the quorum and threshold, releases stake locks and slashes no-shows.</p>
        <Button
          variant="navy"
          disabled={pending !== null}
          data-testid="finalize-round"
          onClick={async () => {
            const res = await invoke({ contract: "verification", method: "finalize_round", kind: "finalize_round", roundId, label: `Finalize round #${roundId}`, args: [sc.u64(roundId)] });
            if (res) {
              onDone();
              refresh();
            }
          }}
        >
          {pending ? <Spinner /> : <Gavel />} Finalize round
        </Button>
      </CardContent>
    </Card>
  );
}

function DecisionCard({ round, decision, outcome, onChange }: { round: RoundProps; decision: DecisionState; outcome: Outcome; onChange: () => void }) {
  const cfg = useConfig();
  const wallet = useWallet();
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  const now = useNow(1000);
  const [isFunder, setIsFunder] = React.useState(false);

  React.useEffect(() => {
    if (!wallet.address) return;
    wallet.client
      .contributionOf(round.projectChainId, wallet.address)
      .then((c) => setIsFunder(c > 0n))
      .catch(() => setIsFunder(false));
  }, [wallet.address, wallet.client, round.projectChainId]);

  const allowed = canAppeal({
    outcome,
    kind: round.kind as 0,
    finalized: true,
    hasAppeal: decision.appealRoundId !== null,
    appealableUntil: decision.appealableUntil,
    now,
    isCreator: wallet.address === round.creator,
    isFunder,
  });
  const bond = String(cfg.params.verification.appeal_bond ?? "0");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Decision</CardTitle>
        <CardDescription>The escrow reads this decision directly from the Verification contract.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-2" data-testid="decision">
          <OutcomeBadge outcome={decision.outcome} provisional={!decision.isFinal} />
          <span className="text-sm text-muted-foreground">
            {decision.isFinal
              ? "Final — the escrow can now settle this milestone."
              : decision.underAppeal
                ? `Under appeal (round #${decision.appealRoundId}).`
                : <>Appeal window closes in <Countdown to={decision.appealableUntil} />.</>}
          </span>
        </div>
        {(outcome === Outcome.NoQuorum || outcome === Outcome.Inconclusive) && (
          <Alert tone="warning" title="Failed round">
            {outcome === Outcome.NoQuorum ? "Too few valid reveals to reach quorum." : "Neither side reached the approval threshold (this includes ties)."} The milestone attempt is consumed; the creator may resubmit if attempts remain.
          </Alert>
        )}
        {allowed && (
          <div className="space-y-2 rounded-md border border-border p-3">
            <p className="text-sm text-foreground">
              You may file the single appeal for this decision. A new panel that excludes the original verifiers re-votes on the same evidence.
            </p>
            <p className="text-xs text-muted-foreground">
              Bond: {money(bond)} (returned if the appeal overturns the outcome, otherwise sent to the treasury).
            </p>
            <Button
              variant="outline"
              disabled={pending !== null}
              data-testid="file-appeal"
              onClick={async () => {
                const appellant = await wallet.ensureConnected().catch(() => null);
                if (!appellant) return;
                const res = await invoke({ contract: "verification", method: "appeal", kind: "appeal", roundId: round.id, projectId: round.projectChainId, label: "File appeal", args: [sc.address(appellant), sc.u64(round.id)] });
                if (res) {
                  onChange();
                  refresh();
                }
              }}
            >
              {pending ? <Spinner /> : <ShieldAlert />} File appeal
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
