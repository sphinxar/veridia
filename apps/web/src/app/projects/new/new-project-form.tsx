"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { createProjectFormSchema, formatAmount, parseAmount, toEpochSeconds, type CreateProjectForm } from "@veridia/domain";
import { milestoneInputs, sc } from "@veridia/stellar-client";
import { Alert, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, FieldError, Input, Label, Select, Spinner, Textarea } from "@veridia/ui";
import { useConfig, useWallet } from "@/components/providers";
import { useInvoke } from "@/lib/use-invoke";

const toLocalInput = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
const inDays = (days: number) => toLocalInput(new Date(Date.now() + days * 86_400_000));

export function NewProjectForm() {
  const cfg = useConfig();
  const wallet = useWallet();
  const router = useRouter();
  const { invoke } = useInvoke();
  const [step, setStep] = React.useState<null | "draft" | "chain" | "confirm">(null);
  const form = useForm<CreateProjectForm>({
    resolver: zodResolver(createProjectFormSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      summary: "",
      description: "",
      category: "general",
      token: cfg.contracts.token,
      fundingDeadline: inDays(1),
      milestones: [
        { title: "", description: "", amount: "", deadline: inDays(7) },
        { title: "", description: "", amount: "", deadline: inDays(14) },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control: form.control, name: "milestones" });
  const errors = form.formState.errors;
  const watched = form.watch("milestones");
  const budget = watched.reduce((acc, m) => {
    try {
      return acc + parseAmount(m.amount || "0");
    } catch {
      return acc;
    }
  }, 0n);

  async function onSubmit(v: CreateProjectForm) {
    const creator = await wallet.ensureConnected().catch(() => null);
    if (!creator) return;
    if (wallet.sessionAddress !== creator && !(await wallet.signIn())) return;

    setStep("draft");
    const milestones = v.milestones.map((m) => ({ amount: parseAmount(m.amount), deadline: toEpochSeconds(m.deadline) }));
    const fundingDeadline = toEpochSeconds(v.fundingDeadline);
    const draftRes = await fetch("/api/projects", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        metadata: {
          title: v.title,
          summary: v.summary,
          description: v.description,
          category: v.category || "general",
          milestones: v.milestones.map((m) => ({ title: m.title, description: m.description })),
        },
        token: v.token,
        fundingDeadline,
        milestones: milestones.map((m) => ({ amount: m.amount.toString(), deadline: m.deadline })),
      }),
    });
    const draft = await draftRes.json();
    if (!draftRes.ok) {
      setStep(null);
      toast.error("Could not save project", { description: draft.error ?? "Validation failed" });
      return;
    }

    setStep("chain");
    const res = await invoke<bigint>({
      contract: "escrow",
      method: "create_project",
      kind: "create_project",
      label: "Create project on-chain",
      args: [sc.address(creator), sc.address(v.token), milestoneInputs(milestones), sc.u64(fundingDeadline), sc.bytes32(draft.metadataHash)],
      onSubmitted: (hash) =>
        void fetch(`/api/projects/${draft.id}/confirm`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ txHash: hash, stage: "submitted" }),
        }),
    });
    if (!res) {
      setStep(null);
      return;
    }
    setStep("confirm");
    await fetch(`/api/projects/${draft.id}/confirm`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ txHash: res.hash, stage: "confirmed" }),
    }).catch(() => {});
    router.push(`/projects/${draft.id}`);
  }

  const busy = step !== null;
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 lg:grid-cols-3" noValidate>
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Project</CardTitle>
            <CardDescription>Stored off-chain; its canonical SHA-256 hash is committed on-chain.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" aria-invalid={!!errors.title} {...form.register("title")} placeholder="Solar microgrid for Escuela Rural 12" />
              <FieldError message={errors.title?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="summary">Summary</Label>
              <Input id="summary" aria-invalid={!!errors.summary} {...form.register("summary")} placeholder="One sentence describing the outcome funders pay for" />
              <FieldError message={errors.summary?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...form.register("description")} placeholder="Scope, team, verification criteria…" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select id="category" {...form.register("category")}>
                  {["general", "energy", "education", "health", "infrastructure", "research", "open-source"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fundingDeadline">Funding deadline</Label>
                <Input id="fundingDeadline" type="datetime-local" aria-invalid={!!errors.fundingDeadline} {...form.register("fundingDeadline")} />
                <FieldError message={errors.fundingDeadline?.message} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="token">Funding token (SEP-41 contract)</Label>
              <Input id="token" className="font-mono text-xs" aria-invalid={!!errors.token} {...form.register("token")} />
              <p className="text-xs text-muted-foreground">Default: native XLM asset contract. Only tokens on the escrow allow-list are accepted.</p>
              <FieldError message={errors.token?.message} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Milestones</CardTitle>
            <CardDescription>Verified and paid sequentially. Deadlines must increase and fall after the funding deadline.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {fields.map((f, i) => (
              <div key={f.id} className="rounded-lg border border-border p-4" data-testid={`milestone-${i}`}>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Milestone {i + 1}</p>
                  {fields.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => remove(i)} aria-label={`Remove milestone ${i + 1}`}>
                      <Trash2 />
                    </Button>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor={`m${i}title`}>Title</Label>
                    <Input id={`m${i}title`} aria-invalid={!!errors.milestones?.[i]?.title} {...form.register(`milestones.${i}.title`)} />
                    <FieldError message={errors.milestones?.[i]?.title?.message} />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor={`m${i}desc`}>Acceptance criteria</Label>
                    <Textarea id={`m${i}desc`} className="min-h-[60px]" {...form.register(`milestones.${i}.description`)} placeholder="What evidence proves this milestone?" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`m${i}amount`}>Amount (XLM)</Label>
                    <Input id={`m${i}amount`} inputMode="decimal" aria-invalid={!!errors.milestones?.[i]?.amount} {...form.register(`milestones.${i}.amount`)} placeholder="100" />
                    <FieldError message={errors.milestones?.[i]?.amount?.message} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`m${i}deadline`}>Deadline</Label>
                    <Input id={`m${i}deadline`} type="datetime-local" aria-invalid={!!errors.milestones?.[i]?.deadline} {...form.register(`milestones.${i}.deadline`)} />
                    <FieldError message={errors.milestones?.[i]?.deadline?.message} />
                  </div>
                </div>
              </div>
            ))}
            <FieldError message={errors.milestones?.root?.message ?? errors.milestones?.message} />
            {fields.length < 10 && (
              <Button type="button" variant="outline" size="sm" onClick={() => append({ title: "", description: "", amount: "", deadline: inDays(7 * (fields.length + 1)) })}>
                <Plus /> Add milestone
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="lg:sticky lg:top-24">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total budget</span>
              <span className="tabular text-xl font-semibold text-foreground" data-testid="budget-total">{formatAmount(budget)} XLM</span>
            </div>
            <p className="text-sm text-muted-foreground">{fields.length} milestone(s), each released only after a final on-chain approval.</p>
            <Alert tone="info" title="Two steps">
              You will sign a message to save the draft, then sign the <code>create_project</code> transaction in your wallet.
            </Alert>
            <Button type="submit" className="w-full" disabled={busy} data-testid="create-project">
              {busy && <Spinner />}
              {step === "draft" ? "Saving draft…" : step === "chain" ? "Waiting for transaction…" : step === "confirm" ? "Confirming…" : "Create project"}
            </Button>
            <p className="flex gap-2 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-3.5 shrink-0" /> Projects must be fully funded before any milestone can be submitted for verification.
            </p>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
