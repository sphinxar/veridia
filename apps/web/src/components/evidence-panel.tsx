"use client";
import * as React from "react";
import { CheckCircle2, Download, FileUp, Lock, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { EVIDENCE_MAX_BYTES, EVIDENCE_MIME_TYPES, sha256Hex } from "@veridia/domain";
import { Alert, Badge, Button, Input, Label, Spinner } from "@veridia/ui";
import { useWallet } from "./providers";
import { relative } from "@/lib/format";

export interface EvidenceVersion {
  id: number;
  version: number;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  sha256: string;
  note: string;
  uploadedBy: string;
  uploadedAt: string;
  submittedRoundId: number | null;
}

const kb = (n: number) => (n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

/**
 * Evidence list + upload + integrity verification. `onChainHash` is the hash bound to
 * the relevant verification round (if any) — the browser re-hashes downloads and
 * compares against it.
 */
export function EvidencePanel({
  projectId,
  milestoneIndex,
  canUpload,
  onChainHash,
  selected,
  onSelect,
}: {
  projectId: number;
  milestoneIndex: number;
  canUpload: boolean;
  onChainHash: string | null;
  selected?: string | null;
  onSelect?: (sha: string) => void;
}) {
  const wallet = useWallet();
  const signedIn = !!wallet.sessionAddress && wallet.sessionAddress === wallet.address;
  const [versions, setVersions] = React.useState<EvidenceVersion[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [checks, setChecks] = React.useState<Record<number, "ok" | "mismatch" | "checking">>({});
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [note, setNote] = React.useState("");

  const load = React.useCallback(async () => {
    if (!signedIn) return;
    setError(null);
    const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneIndex}/evidence`);
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(body.error ?? "Could not load evidence");
      setVersions([]);
      return;
    }
    setVersions(body.versions);
    if (onSelect && body.versions[0] && !selected) onSelect(body.versions[0].sha256);
  }, [signedIn, projectId, milestoneIndex, onSelect, selected]);

  React.useEffect(() => {
    load();
  }, [load]);

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file) return toast.error("Choose a file first");
    if (file.size > EVIDENCE_MAX_BYTES) return toast.error("File is larger than 25 MB");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.set("file", file);
      fd.set("note", note);
      const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneIndex}/evidence`, { method: "POST", body: fd });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Upload failed");
      toast.success(`Evidence v${body.version.version} uploaded`, { description: `SHA-256 ${body.version.sha256.slice(0, 16)}…` });
      onSelect?.(body.version.sha256);
      if (fileRef.current) fileRef.current.value = "";
      setNote("");
      await load();
    } catch (err) {
      toast.error("Upload failed", { description: err instanceof Error ? err.message : String(err) });
    } finally {
      setUploading(false);
    }
  }

  async function download(v: EvidenceVersion) {
    setChecks((c) => ({ ...c, [v.id]: "checking" }));
    try {
      const res = await fetch(`/api/evidence/${v.id}`);
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? "Download failed");
      const buf = await res.arrayBuffer();
      const hash = await sha256Hex(buf);
      const ok = hash === v.sha256;
      setChecks((c) => ({ ...c, [v.id]: ok ? "ok" : "mismatch" }));
      if (!ok) {
        toast.error("Integrity check failed", { description: "The downloaded file does not match its recorded hash." });
        return;
      }
      const url = URL.createObjectURL(new Blob([buf], { type: v.mimeType }));
      const a = document.createElement("a");
      a.href = url;
      a.download = v.fileName;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch (err) {
      setChecks((c) => {
        const { [v.id]: _drop, ...rest } = c;
        return rest;
      });
      toast.error("Download failed", { description: err instanceof Error ? err.message : String(err) });
    }
  }

  if (!signedIn) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-md border border-dashed border-border p-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <Lock className="size-4" /> Evidence is private. Sign in with an authorized wallet to view it.
        </span>
        {wallet.address ? (
          <Button size="sm" variant="outline" onClick={() => wallet.signIn()}>Sign in</Button>
        ) : (
          <Button size="sm" variant="outline" onClick={() => wallet.connect()}>Connect</Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3" data-testid={`evidence-panel-${milestoneIndex}`}>
      {error && <Alert tone="warning">{error}</Alert>}
      {versions === null ? (
        <p className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Loading evidence…</p>
      ) : versions.length === 0 ? (
        !error && <p className="text-sm text-muted-foreground">No evidence uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {versions.map((v) => {
            const bound = onChainHash === v.sha256;
            return (
              <li key={v.id} className="rounded-md border border-border p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    {onSelect && (
                      <input type="radio" name={`ev-${projectId}-${milestoneIndex}`} checked={selected === v.sha256} onChange={() => onSelect(v.sha256)} aria-label={`Select version ${v.version}`} />
                    )}
                    v{v.version} · {v.fileName}
                    <span className="text-xs font-normal text-muted-foreground">({kb(v.sizeBytes)}, {relative(v.uploadedAt)})</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {bound && <Badge tone="success">Bound on-chain</Badge>}
                    {v.submittedRoundId && <Badge tone="info">Round #{v.submittedRoundId}</Badge>}
                    <Button size="sm" variant="outline" onClick={() => download(v)} disabled={checks[v.id] === "checking"}>
                      {checks[v.id] === "checking" ? <Spinner /> : <Download />} Download & verify
                    </Button>
                  </div>
                </div>
                <p className="mt-1 break-all font-mono text-[11px] text-muted-foreground">sha256 {v.sha256}</p>
                {v.note && <p className="mt-1 text-xs text-muted-foreground">{v.note}</p>}
                {checks[v.id] === "ok" && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-success" data-testid="integrity-ok">
                    <CheckCircle2 className="size-3.5" /> File re-hashed in your browser: matches{bound ? " the hash bound to the on-chain round" : " the recorded hash"}. This proves integrity, not that the claims in it are true.
                  </p>
                )}
                {checks[v.id] === "mismatch" && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-danger">
                    <ShieldAlert className="size-3.5" /> Hash mismatch — do not rely on this file.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {canUpload && (
        <form onSubmit={upload} className="space-y-2 rounded-md border border-dashed border-border p-3">
          <Label htmlFor={`file-${milestoneIndex}`}>Upload new evidence version</Label>
          <Input id={`file-${milestoneIndex}`} ref={fileRef} type="file" accept={EVIDENCE_MIME_TYPES.join(",")} data-testid={`evidence-file-${milestoneIndex}`} />
          <Input placeholder="Optional note for verifiers" value={note} onChange={(e) => setNote(e.target.value)} maxLength={500} />
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">PDF, images, MP4, ZIP, TXT, CSV · max 25 MB · stored privately</p>
            <Button size="sm" type="submit" disabled={uploading} data-testid={`evidence-upload-${milestoneIndex}`}>
              {uploading ? <Spinner /> : <FileUp />} Upload
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
