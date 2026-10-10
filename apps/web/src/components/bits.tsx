"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import {
  MILESTONE_STATUS_LABEL,
  OUTCOME_LABEL,
  PHASE_LABEL,
  PROJECT_STATUS_LABEL,
  type MilestoneStatus,
  type Outcome,
  type Phase,
  type ProjectStatus,
} from "@veridia/domain";
import { Badge } from "@veridia/ui";
import { duration, shortAddress } from "@/lib/format";
import { useConfig } from "./providers";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "navy";

export function ProjectStatusBadge({ status, sync }: { status: number | null; sync?: string }) {
  if (status === null || status === undefined) {
    return <Badge tone="neutral">{sync === "pending" ? "Pending confirmation" : "Draft"}</Badge>;
  }
  const tone: Record<number, Tone> = { 0: "info", 1: "success", 2: "navy", 3: "neutral", 4: "danger" };
  return <Badge tone={tone[status]}>{PROJECT_STATUS_LABEL[status as ProjectStatus]}</Badge>;
}

export function MilestoneStatusBadge({ status }: { status: number }) {
  const tone: Record<number, Tone> = { 0: "neutral", 1: "warning", 2: "success", 3: "danger" };
  return <Badge tone={tone[status]}>{MILESTONE_STATUS_LABEL[status as MilestoneStatus]}</Badge>;
}

export function OutcomeBadge({ outcome, provisional }: { outcome: number; provisional?: boolean }) {
  const tone: Record<number, Tone> = { 0: "neutral", 1: "success", 2: "danger", 3: "warning", 4: "warning" };
  return (
    <Badge tone={tone[outcome]}>
      {OUTCOME_LABEL[outcome as Outcome]}
      {provisional ? " (provisional)" : ""}
    </Badge>
  );
}

export function PhaseBadge({ phase }: { phase: number }) {
  const tone: Record<number, Tone> = { 0: "info", 1: "warning", 2: "navy", 3: "neutral" };
  return <Badge tone={tone[phase]}>{PHASE_LABEL[phase as Phase]}</Badge>;
}

export function Address({ value, full = false }: { value: string | null | undefined; full?: boolean }) {
  if (!value) return <span className="text-muted-foreground">—</span>;
  return (
    <span className="inline-flex items-center gap-1 font-mono text-xs">
      <span title={value}>{full ? value : shortAddress(value)}</span>
      <button
        type="button"
        aria-label="Copy address"
        className="text-muted-foreground hover:text-foreground"
        onClick={() => navigator.clipboard.writeText(value).then(() => toast.success("Copied"))}
      >
        <Copy className="size-3" />
      </button>
    </span>
  );
}

export function TxLink({ hash }: { hash: string | null | undefined }) {
  const { explorerTx } = useConfig();
  if (!hash) return <span className="text-muted-foreground">—</span>;
  const short = `${hash.slice(0, 8)}…${hash.slice(-6)}`;
  if (!explorerTx) return <span className="font-mono text-xs" title={hash}>{short}</span>;
  return (
    <a href={`${explorerTx}${hash}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline" title={hash}>
      {short}
      <ExternalLink className="size-3" />
    </a>
  );
}

export function useNow(intervalMs = 1000) {
  const [now, setNow] = React.useState(() => Math.floor(Date.now() / 1000));
  React.useEffect(() => {
    const t = setInterval(() => setNow(Math.floor(Date.now() / 1000)), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

export function Countdown({ to, prefix, done = "now" }: { to: number; prefix?: string; done?: string }) {
  const now = useNow();
  const left = to - now;
  return (
    <span className="tabular" suppressHydrationWarning>
      {left > 0 ? `${prefix ?? ""}${duration(left)}` : done}
    </span>
  );
}

/** Periodically refresh server-rendered data while something is in flight. */
export function AutoRefresh({ everyMs = 4000, enabled = true }: { everyMs?: number; enabled?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (!enabled) return;
    const t = setInterval(() => router.refresh(), everyMs);
    return () => clearInterval(t);
  }, [router, everyMs, enabled]);
  return null;
}

/** Refresh soon after a transaction, accounting for indexer latency. */
export function useRefreshAfterTx() {
  const router = useRouter();
  return React.useCallback(() => {
    router.refresh();
    setTimeout(() => router.refresh(), 2500);
    setTimeout(() => router.refresh(), 6000);
  }, [router]);
}
