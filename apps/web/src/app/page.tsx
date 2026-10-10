import Link from "next/link";
import { ArrowRight, FileCheck2, Lock, Scale, ShieldCheck, Users, Vote } from "lucide-react";
import { Button, Card, CardContent } from "@veridia/ui";

const steps = [
  { icon: Lock, title: "Fund into escrow", text: "Funders deposit a Stellar token into a project's escrow. Funds are locked by the ProjectEscrow contract — nobody, including Veridia, can move them arbitrarily." },
  { icon: FileCheck2, title: "Submit evidence", text: "The creator uploads milestone evidence to private storage. Its SHA-256 hash is bound on-chain to a new verification round." },
  { icon: Vote, title: "Staked panel votes", text: "Five staked verifiers are drawn on-chain. They commit hidden votes, then reveal them. Missing reveals can never block a round." },
  { icon: Scale, title: "Final, appealable outcome", text: "A quorum decides. After the appeal window (or one appeal with a fresh panel), escrow releases exactly the milestone amount — once." },
];

export default function Landing() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 py-6 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-primary-soft px-3 py-1 text-xs font-medium text-emerald-800">
            <ShieldCheck className="size-3.5" /> Human oracle protocol on Stellar Soroban
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Release funds when milestones are <span className="text-primary">independently verified</span>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Veridia holds grant and crowdfunding money in escrow and pays out in stages, only after a staked panel of verifiers approves each milestone through commit-reveal voting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore projects <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects/new">Create a project</Link>
            </Button>
          </div>
        </div>
        <Card className="bg-navy-900 text-white">
          <CardContent className="space-y-4 p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">What the contracts guarantee</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {[
                "Payments only follow a final on-chain decision — never a backend flag.",
                "Each milestone pays out exactly once; balances are tracked per project.",
                "Votes are hidden until reveal and bound to round, voter and evidence hash.",
                "Verifiers are penalised only for verifiable no-shows, never for disagreeing.",
                "One appeal per attempt, decided by a disjoint panel. Decisions are never overwritten.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="border-t border-white/10 pt-4 text-xs text-slate-400">
              MVP status: contracts are unaudited. Panel randomness uses Soroban&apos;s PRNG and is not manipulation-proof — see the threat model.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="how">
        <h2 id="how" className="text-xl font-semibold text-navy-900">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Card key={s.title}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">STEP {i + 1}</span>
                </div>
                <h3 className="font-semibold text-navy-900">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-3 p-6">
            <h2 className="text-lg font-semibold text-navy-900">Integrity is not truth</h2>
            <p className="text-sm text-muted-foreground">
              A matching file hash proves the evidence verifiers reviewed is byte-for-byte the evidence the creator submitted. It does <strong>not</strong> prove the real-world event happened. That judgement is made by humans — the verifier panel — and the interface always keeps the two separate.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 p-6">
            <Users className="size-6 text-primary" />
            <h2 className="text-lg font-semibold text-navy-900">Become a verifier</h2>
            <p className="text-sm text-muted-foreground">Register, stake, and review evidence for assigned rounds.</p>
            <Button asChild variant="navy" size="sm">
              <Link href="/profile">Set up verifier profile</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
