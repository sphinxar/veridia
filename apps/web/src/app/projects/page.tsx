import Link from "next/link";
import { FolderOpen, Plus } from "lucide-react";
import { percent } from "@veridia/domain";
import { Badge, Button, Card, CardContent, EmptyState, Progress, cn } from "@veridia/ui";
import { PageHeader } from "@/components/app-shell";
import { ProjectStatusBadge } from "@/components/bits";
import { date, money, tokenSymbol } from "@/lib/format";
import { publicConfig } from "@/server/config";
import { listProjects } from "@/server/queries";
import { getSession } from "@/server/session";

export const metadata = { title: "Projects" };

const FILTERS = [
  { key: "all", label: "All" },
  { key: "funding", label: "Funding" },
  { key: "active", label: "Active" },
  { key: "closed", label: "Closed" },
  { key: "mine", label: "Mine" },
] as const;

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  const { filter = "all" } = await searchParams;
  const session = await getSession();
  const cfg = publicConfig();
  const rows = await listProjects({ viewer: session?.address, filter: filter as "all" });
  return (
    <>
      <PageHeader
        title="Projects"
        description="Milestone-based projects with funds held in escrow until verified."
        actions={
          <Button asChild>
            <Link href="/projects/new">
              <Plus /> New project
            </Link>
          </Button>
        }
      />
      <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <Link
            key={f.key}
            href={`/projects?filter=${f.key}`}
            role="tab"
            aria-selected={filter === f.key}
            className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors", filter === f.key ? "border-accent/50 bg-primary-soft text-accent" : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:text-foreground")}
          >
            {f.label}
          </Link>
        ))}
      </div>
      {rows.length === 0 ? (
        <EmptyState
          icon={<FolderOpen />}
          title="No projects here yet"
          description={filter === "mine" && !session ? "Connect and sign in with your wallet to see your projects." : "Create the first project to start raising funds against verifiable milestones."}
          action={<Button asChild variant="outline"><Link href="/projects/new">Create project</Link></Button>}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((p) => {
            const sym = tokenSymbol(p.token, cfg.contracts.token);
            const pct = percent(BigInt(p.funded), BigInt(p.budget));
            return (
              <Link key={p.id} href={`/projects/${p.id}`} className="group" data-testid="project-card">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardContent className="flex h-full flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <Badge tone="neutral">{p.category}</Badge>
                      <ProjectStatusBadge status={p.status} sync={p.syncStatus} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground group-hover:text-primary">{p.title}</h2>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.summary}</p>
                    </div>
                    <div className="mt-auto space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span className="tabular">{money(p.funded, sym)} of {money(p.budget, sym)}</span>
                        <span className="tabular">{pct}%</span>
                      </div>
                      <Progress value={pct} label="Funding progress" />
                      <p className="text-xs text-muted-foreground">
                        Released <span className="tabular font-medium text-foreground">{money(p.released, sym)}</span> · Funding until {date(p.fundingDeadline)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
