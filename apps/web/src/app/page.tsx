import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Coins, FileCheck2, FilePlus2, Info, Lock, Scale, ShieldCheck, Vote } from "lucide-react";
import { Button, Card, CardContent } from "@veridia/ui";
import { InView } from "@/components/in-view";
import { OrbitMark, Ship } from "@/components/space";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const index = (i: number) => ({ "--i": i }) as CSSProperties;

/** Protocol defaults (see docs/protocol-rules.md). */
const facts = [
  { value: "5", label: "verifiers drawn on-chain for every round" },
  { value: "60%", label: "of revealed votes decides a milestone" },
  { value: "1", label: "appeal per attempt, heard by a fresh panel" },
  { value: "1×", label: "payment per milestone, never twice" },
];

const roles = [
  {
    icon: FilePlus2,
    title: "I have a project",
    text: "Describe your milestones, raise funds in escrow, and get paid each time a milestone is verified.",
    cta: "Create a project",
    href: "/projects/new",
  },
  {
    icon: Coins,
    title: "I want to fund one",
    text: "Back a project knowing your money only moves after independent verifiers approve real progress.",
    cta: "Browse projects",
    href: "/projects",
  },
  {
    icon: ShieldCheck,
    title: "I want to verify",
    text: "Stake XLM, review the evidence for the rounds you are assigned, and vote with a hidden commit-reveal.",
    cta: "Set up verifier profile",
    href: "/profile",
  },
];

const steps = [
  { icon: Lock, title: "Fund into escrow", text: "Funders deposit a Stellar token into a project's escrow. The contract locks it: nobody, including Veridia, can move it arbitrarily." },
  { icon: FileCheck2, title: "Submit evidence", text: "The creator uploads milestone evidence to private storage. Its SHA-256 hash is bound on-chain to a new verification round." },
  { icon: Vote, title: "Staked panel votes", text: "Five staked verifiers are drawn on-chain. They commit hidden votes, then reveal them. Missing reveals never block a round." },
  { icon: Scale, title: "Final, appealable outcome", text: "A quorum decides. After the appeal window (or one appeal with a fresh panel), escrow releases exactly the milestone amount, once." },
];

const guarantees = [
  "Payments only follow a final on-chain decision, never a backend flag.",
  "Each milestone pays out exactly once; balances are tracked per project.",
  "Votes are hidden until reveal and bound to round, voter and evidence hash.",
  "Verifiers are penalised only for verifiable no-shows, never for disagreeing.",
  "One appeal per attempt, decided by a disjoint panel. Decisions are never overwritten.",
];

export default function Landing() {
  return (
    <div className="space-y-24 pb-10">
      {/* First screen: headline centred, protocol facts anchored to the bottom edge. */}
      <section className="relative isolate flex min-h-[calc(100vh-10.5rem)] flex-col gap-10 overflow-hidden pt-4">
        <OrbitMark className="orbit-mark pointer-events-none absolute left-1/2 top-[40%] -z-10 w-[min(88vw,880px)] -translate-x-1/2 -translate-y-1/2 text-accent/[0.1]" />

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl text-balance text-7xl font-semibold leading-[1.04] tracking-[-0.04em] xl:text-[5.25rem]">
            <span className="reveal inline-block" style={delay(80)}>
              Fund
            </span>{" "}
            <span className="reveal inline-block" style={delay(200)}>
              <span className="text-sheen">progress,</span>
            </span>{" "}
            <span className="reveal inline-block" style={delay(340)}>
              not promises.
            </span>
          </h1>
          <p className="reveal mt-8 max-w-2xl text-balance text-xl font-light leading-relaxed text-muted-foreground" style={delay(540)}>
            Veridia keeps the money in escrow on Stellar and releases it milestone by milestone, only after independent verifiers confirm the work is done.
          </p>
          <div className="reveal mt-10 flex justify-center gap-4" style={delay(700)}>
            <Button asChild size="lg">
              <Link href="/projects/new">
                Create a project <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                Fund a project <ArrowRight />
              </Link>
            </Button>
          </div>
          <p className="reveal mt-7 text-sm text-muted-foreground" style={delay(860)}>
            Prefer to review evidence?{" "}
            <Link href="/profile" className="text-accent underline-offset-4 hover:underline">
              Become a verifier
            </Link>
          </p>
        </div>

        <div className="reveal space-y-2" style={delay(1000)}>
          <ul className="grid grid-cols-4 divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-surface/50">
            {facts.map((f) => (
              <li key={f.value} className="px-7 py-5">
                <p className="text-3xl font-semibold tracking-tight">{f.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
              </li>
            ))}
          </ul>
          <p className="text-center text-xs text-muted-foreground/70">Default protocol parameters</p>
        </div>
      </section>

      <section aria-labelledby="roles" className="space-y-8">
        <h2 id="roles" className="text-center text-3xl font-semibold tracking-tight">
          What do you want to do?
        </h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
            {roles.map((r) => (
              <div key={r.title} className="group flex flex-col gap-4 p-8 transition-colors hover:bg-white/[0.025]">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-accent">
                  <r.icon className="size-5" />
                </span>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
                <Link href={r.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {r.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="how" aria-labelledby="how-title" className="scroll-mt-28 space-y-12">
        <div className="space-y-3 text-center">
          <h2 id="how-title" className="text-3xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">Four steps from deposit to payment. Every step is recorded on-chain.</p>
        </div>
        <InView as="ol" className="steps relative grid grid-cols-4 gap-10">
          <div aria-hidden className="step-ship">
            <div className="ship">
              <Ship kind="dart" strokeWidth={1.4} />
            </div>
          </div>
          <div aria-hidden className="step-line absolute left-[12.5%] right-[12.5%] top-6 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center gap-4 text-center" style={index(i)}>
              <span className="step-node relative z-10 flex size-12 items-center justify-center rounded-full border border-accent/40 bg-surface-raised text-accent shadow-[0_0_24px_-6px_rgb(167_139_250/0.5)]">
                <s.icon className="size-5" />
              </span>
              <div className="step-body space-y-2">
                <p className="text-sm text-muted-foreground">Step {i + 1}</p>
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </InView>
      </section>

      <section aria-labelledby="guarantees" className="grid grid-cols-[1fr_1.1fr] items-start gap-14">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 id="guarantees" className="text-3xl font-semibold tracking-tight">
              What the contracts guarantee
            </h2>
            <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              The rules live in Soroban smart contracts on Stellar. They are enforced by the network, not by our servers.
            </p>
          </div>
          <div className="flex gap-4 rounded-2xl border border-accent/20 bg-primary-soft/40 p-5">
            <Info className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <div className="space-y-1.5">
              <h3 className="font-semibold tracking-tight">Integrity is not truth</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A matching file hash proves the evidence verifiers reviewed is byte-for-byte what the creator submitted. It does{" "}
                <strong className="font-semibold text-foreground">not</strong> prove the real-world event happened. That judgement is made by humans, the verifier panel, and the interface always keeps the two separate.
              </p>
            </div>
          </div>
        </div>
        <Card>
          <CardContent className="space-y-5 p-7">
            <InView as="ul" className="checks space-y-4">
              {guarantees.map((t, i) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed" style={index(i)}>
                  <ShieldCheck className="check-icon mt-0.5 size-5 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </InView>
            <p className="border-t border-white/[0.08] pt-5 text-xs leading-relaxed text-muted-foreground">
              MVP status: contracts are unaudited. Panel randomness uses Soroban&apos;s PRNG and is not manipulation-proof — see the threat model.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
