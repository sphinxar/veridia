"use client";
import * as React from "react";
import Link from "next/link";
import { CircleDollarSign, Clock, RefreshCcw, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import {
  MilestoneStatus,
  Outcome,
  ProjectStatus,
  formatAmount,
  isValidAmount,
  parseAmount,
  refundAmount,
  submitBlocker,
} from "@veridia/domain";
import { sc, type DecisionState } from "@veridia/stellar-client";
import { Alert, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Spinner, cn } from "@veridia/ui";
import { Countdown, MilestoneStatusBadge, OutcomeBadge, TxLink, useNow, useRefreshAfterTx } from "@/components/bits";
import { EvidencePanel } from "@/components/evidence-panel";
import { useWallet } from "@/components/providers";
import { dateTime, money, relative } from "@/lib/format";
import { useInvoke } from "@/lib/use-invoke";

// ---------------------------------------------------------------- reconcile

export function ReconcileButton({ projectId, lastReconciledAt }: { projectId: number; lastReconciledAt: string | null }) {
  const refresh = useRefreshAfterTx();
  const [busy, setBusy] = React.useState(false);
  return (
    <div className="flex flex-col items-start gap-1 lg:items-end">
      <Button
        variant="outline"
        size="sm"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          try {
            const res = await fetch(`/api/projects/${projectId}/reconcile`, { method: "POST" });
            const body = await res.json();
            if (!res.ok) throw new Error(body.error);
            toast.success(body.drift.length ? `Corrected ${body.drift.length} field(s) from chain` : "Database matches on-chain state");
            refresh();
          } catch (e) {
            toast.error("Reconciliation failed", { description: e instanceof Error ? e.message : String(e) });
          } finally {
            setBusy(false);
          }
        }}
      >
        {busy ? <Spinner /> : <RefreshCcw />} Reconcile with chain
      </Button>
      <span className="text-xs text-muted-foreground" suppressHydrationWarning>
        {lastReconciledAt ? `Last checked ${relative(lastReconciledAt)}` : "Not yet reconciled"}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------- funding

export function FundingPanel({
  project,
}: {
  project: { id: number; chainId: number | null; status: number | null; budget: string; funded: string; fundingDeadline: number; symbol: string };
}) {
  const { invoke, pending } = useInvoke();
  const wallet = useWallet();
  const refresh = useRefreshAfterTx();
  const now = useNow(5000);
  const [amount, setAmount] = React.useState("");
  const remaining = BigInt(project.budget) - BigInt(project.funded);
  const open = project.status === ProjectStatus.Funding && now <= project.fundingDeadline && project.chainId !== null;
  const valid = isValidAmount(amount) && parseAmount(amount) <= remaining;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fund this project</CardTitle>
        <CardDescription>
          {open ? (
            <>
              {money(remaining, project.symbol)} remaining · closes in <Countdown to={project.fundingDeadline} />
            </>
          ) : project.status === ProjectStatus.Funding ? (
            "Funding period has ended."
          ) : (
            "Funding is closed for this project."
          )}
        </CardDescription>
      </CardHeader>
      {open && (
        <CardContent className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="deposit">Amount ({project.symbol})</Label>
            <div className="flex gap-2">
              <Input id="deposit" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" data-testid="deposit-amount" />
              <Button type="button" variant="outline" size="sm" className="h-10" onClick={() => setAmount(formatAmount(remaining, 7, { maxFraction: 7, grouping: false }))}>
                Max
              </Button>
            </div>
            {amount && !valid && <p className="text-xs text-danger">Enter a positive amount up to the remaining budget.</p>}
          </div>
          <Button
            className="w-full"
            disabled={!valid || pending !== null}
            data-testid="deposit-submit"
            onClick={async () => {
              const funder = await wallet.ensureConnected().catch(() => null);
              if (!funder) return;
              const res = await invoke({
                contract: "escrow",
                method: "deposit",
                kind: "deposit",
                projectId: project.chainId!,
                label: `Deposit ${amount} ${project.symbol}`,
                args: [sc.address(funder), sc.u64(project.chainId!), sc.i128(parseAmount(amount))],
              });
              if (res) {
                setAmount("");
                refresh();
              }
            }}
          >
            {pending === "deposit" ? <Spinner /> : <CircleDollarSign />} Deposit into escrow
          </Button>
          <p className="text-xs text-muted-foreground">Deposits are held by the escrow contract and can only leave via verified milestone payments or refunds.</p>
        </CardContent>
      )}
    </Card>
  );
}

// ---------------------------------------------------------------- project actions

export function ProjectActions({
  project,
  contributions,
}: {
  project: {
    id: number;
    chainId: number | null;
    creator: string;
    status: number | null;
    fundingDeadline: number;
    funded: string;
    refundPool: string;
    anyInVerification: boolean;
    symbol: string;
  };
  contributions: { funder: string; amount: string; refunded: boolean }[];
}) {
  const { invoke, pending } = useInvoke();
  const wallet = useWallet();
  const refresh = useRefreshAfterTx();
  const now = useNow(5000);
  if (!project.chainId) return null;
  const id = project.chainId;
  const isCreator = wallet.address === project.creator;
  const mine = contributions.find((c) => c.funder === wallet.address);
  const refundable = project.status === ProjectStatus.Cancelled || project.status === ProjectStatus.Failed;
  const canCancel = isCreator && (project.status === ProjectStatus.Funding || (project.status === ProjectStatus.Active && !project.anyInVerification));
  const canExpire = project.status === ProjectStatus.Funding && now > project.fundingDeadline;
  const myRefund = mine ? refundAmount(BigInt(mine.amount), BigInt(project.refundPool), BigInt(project.funded)) : 0n;

  if (!canCancel && !canExpire && !(refundable && mine)) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {refundable && mine && (
          <div className="space-y-2">
            <Alert tone="info" title="Refund available">
              Your pro-rata share of unreleased funds: <strong className="tabular">{money(myRefund, project.symbol)}</strong>
            </Alert>
            <Button
              className="w-full"
              disabled={mine.refunded || pending !== null}
              data-testid="claim-refund"
              onClick={async () => {
                const funder = await wallet.ensureConnected().catch(() => null);
                if (!funder) return;
                const res = await invoke({ contract: "escrow", method: "claim_refund", kind: "claim_refund", projectId: id, label: "Claim refund", args: [sc.address(funder), sc.u64(id)] });
                if (res) refresh();
              }}
            >
              {mine.refunded ? "Refund claimed" : "Claim refund"}
            </Button>
          </div>
        )}
        {canExpire && (
          <Button
            variant="outline"
            className="w-full"
            disabled={pending !== null}
            onClick={async () => {
              const res = await invoke({ contract: "escrow", method: "expire_funding", kind: "expire_funding", projectId: id, label: "Close expired funding", args: [sc.u64(id)] });
              if (res) refresh();
            }}
          >
            <Clock /> Close expired funding (enables refunds)
          </Button>
        )}
        {canCancel && (
          <Button
            variant="danger"
            className="w-full"
            disabled={pending !== null}
            onClick={async () => {
              if (!window.confirm("Cancel this project? Unreleased funds become refundable to funders. This cannot be undone.")) return;
              const res = await invoke({ contract: "escrow", method: "cancel", kind: "cancel", projectId: id, label: "Cancel project", args: [sc.u64(id)] });
              if (res) refresh();
            }}
          >
            Cancel project
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------- milestones

interface ProjectLite {
  id: number;
  chainId: number | null;
  creator: string;
  status: number | null;
  currentMilestone: number;
  maxAttempts: number;
  funded: string;
  released: string;
  symbol: string;
}

interface MilestoneLite {
  index: number;
  title: string;
  description: string;
  amount: string;
  deadline: number;
  status: number;
  attempts: number;
  currentRoundId: number | null;
  evidenceHash: string | null;
  paidTx: string | null;
}

const BLOCKER_TEXT: Record<string, string> = {
  "project-not-active": "The project must be fully funded (Active) first.",
  "not-current-milestone": "Previous milestones must be paid first.",
  "not-pending": "Milestone is not pending.",
  "deadline-passed": "The milestone deadline has passed.",
  "max-attempts": "Maximum verification attempts reached.",
  "insufficient-balance": "Escrow balance is insufficient.",
};

export function MilestoneList({ project, milestones }: { project: ProjectLite; milestones: MilestoneLite[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Milestones</CardTitle>
        <CardDescription>Each milestone is released only after a final on-chain approval.</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-6 border-l-2 border-border pl-6">
          {milestones.map((m) => (
            <MilestoneItem key={m.index} project={project} m={m} />
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function MilestoneItem({ project, m }: { project: ProjectLite; m: MilestoneLite }) {
  const wallet = useWallet();
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  const now = useNow(5000);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [decision, setDecision] = React.useState<DecisionState | null>(null);
  const isCreator = wallet.address === project.creator;
  const isCurrent = project.currentMilestone === m.index;
  const chainId = project.chainId;

  // Poll the authoritative decision while the milestone is under verification.
  React.useEffect(() => {
    if (m.status !== MilestoneStatus.InVerification || !m.currentRoundId) return;
    let stop = false;
    const tick = () =>
      wallet.client
        .getDecision(m.currentRoundId!)
        .then((d) => !stop && setDecision(d))
        .catch(() => {});
    tick();
    const t = setInterval(tick, 5000);
    return () => {
      stop = true;
      clearInterval(t);
    };
  }, [m.status, m.currentRoundId, wallet.client]);

  const blocker =
    project.status === null
      ? "project-not-active"
      : submitBlocker(
          { status: project.status as 0, currentMilestone: project.currentMilestone, maxAttempts: project.maxAttempts, funded: BigInt(project.funded), released: BigInt(project.released) },
          { status: m.status as 0, deadline: m.deadline, attempts: m.attempts, amount: BigInt(m.amount) },
          m.index,
          now,
        );
  const dot = { 0: "bg-white/30", 1: "bg-warning", 2: "bg-success", 3: "bg-danger" }[m.status] ?? "bg-white/30";

  return (
    <li className="relative" data-testid={`milestone-item-${m.index}`}>
      <span className={cn("absolute -left-[33px] top-1 size-4 rounded-full border-4 border-surface", dot)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-foreground">
            {m.index + 1}. {m.title}
          </p>
          <p className="text-xs text-muted-foreground">
            Deadline {dateTime(m.deadline)} · Attempts {m.attempts}/{project.maxAttempts}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="tabular font-semibold text-foreground">{money(m.amount, project.symbol)}</span>
          <MilestoneStatusBadge status={m.status} />
        </div>
      </div>
      {m.description && <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">{m.description}</p>}

      {m.status === MilestoneStatus.Paid && (
        <p className="mt-2 flex items-center gap-1.5 text-sm text-success">
          <ShieldCheck className="size-4" /> Released to creator after final approval. Tx <TxLink hash={m.paidTx} />
        </p>
      )}

      {m.status === MilestoneStatus.InVerification && m.currentRoundId && (
        <div className="mt-3 space-y-2 rounded-md bg-muted/60 p-3 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              Under verification in <Link href={`/verify/${m.currentRoundId}`} className="font-medium text-primary hover:underline">round #{m.currentRoundId}</Link>
            </span>
            {decision && decision.outcome !== Outcome.Pending && <OutcomeBadge outcome={decision.outcome} provisional={!decision.isFinal} />}
          </div>
          {decision && !decision.isFinal && decision.underAppeal && <p className="text-xs text-muted-foreground">An appeal is in progress; the appeal panel&apos;s outcome will be final.</p>}
          {decision && !decision.isFinal && !decision.underAppeal && decision.appealableUntil > 0 && (
            <p className="text-xs text-muted-foreground">
              Appeal window closes in <Countdown to={decision.appealableUntil} />. Funds cannot move until then.
            </p>
          )}
          {decision?.isFinal && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-muted-foreground">
                {decision.outcome === Outcome.Approved
                  ? "Decision is final. Anyone can trigger the release."
                  : "Decision is final (not approved). Settling reopens the milestone or fails the project at the attempt limit."}
              </p>
              <Button
                size="sm"
                disabled={pending !== null}
                data-testid={`settle-${m.index}`}
                onClick={async () => {
                  const res = await invoke({
                    contract: "escrow",
                    method: "settle_milestone",
                    kind: "settle_milestone",
                    projectId: chainId!,
                    label: decision.outcome === Outcome.Approved ? `Release ${money(m.amount, project.symbol)}` : "Settle milestone",
                    args: [sc.u64(chainId!), sc.u32(m.index)],
                  });
                  if (res) refresh();
                }}
              >
                {pending === "settle_milestone" && <Spinner />}
                {decision.outcome === Outcome.Approved ? "Release funds" : "Settle"}
              </Button>
            </div>
          )}
        </div>
      )}

      {chainId && (isCurrent || m.evidenceHash) && m.status !== MilestoneStatus.Failed && (
        <details className="mt-3 rounded-md border border-border p-3" open={isCreator && isCurrent && m.status === MilestoneStatus.Pending}>
          <summary className="cursor-pointer text-sm font-medium text-foreground">Evidence</summary>
          <div className="mt-3 space-y-3">
            <EvidencePanel
              projectId={project.id}
              milestoneIndex={m.index}
              canUpload={isCreator && m.status === MilestoneStatus.Pending}
              onChainHash={m.evidenceHash}
              selected={selected}
              onSelect={isCreator && m.status === MilestoneStatus.Pending ? setSelected : undefined}
            />
            {isCreator && isCurrent && m.status === MilestoneStatus.Pending && (
              <div className="space-y-2 border-t border-border pt-3">
                {blocker && <Alert tone="warning">{BLOCKER_TEXT[blocker]}</Alert>}
                <Button
                  disabled={!!blocker || !selected || pending !== null}
                  data-testid={`submit-verification-${m.index}`}
                  onClick={async () => {
                    const res = await invoke({
                      contract: "escrow",
                      method: "submit_for_verification",
                      kind: "submit_for_verification",
                      projectId: chainId,
                      label: `Submit milestone ${m.index + 1} for verification`,
                      args: [sc.u64(chainId), sc.u32(m.index), sc.bytes32(selected!)],
                    });
                    if (res) refresh();
                  }}
                >
                  {pending === "submit_for_verification" ? <Spinner /> : <Send />} Submit selected evidence for verification
                </Button>
                <p className="text-xs text-muted-foreground">The selected file&apos;s SHA-256 is bound immutably to the new round. A panel of verifiers is drawn on-chain.</p>
              </div>
            )}
          </div>
        </details>
      )}

      {m.status === MilestoneStatus.Pending && project.status === ProjectStatus.Active && isCurrent && now > m.deadline && (
        <div className="mt-3">
          <Button
            variant="outline"
            size="sm"
            disabled={pending !== null}
            onClick={async () => {
              const res = await invoke({ contract: "escrow", method: "expire_milestone", kind: "expire_milestone", projectId: chainId!, label: "Mark milestone expired", args: [sc.u64(chainId!), sc.u32(m.index)] });
              if (res) refresh();
            }}
          >
            <Clock /> Deadline passed — mark expired (enables refunds)
          </Button>
        </div>
      )}
    </li>
  );
}
