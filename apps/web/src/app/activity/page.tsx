import Link from "next/link";
import { Activity } from "lucide-react";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, EmptyState, TBody, TD, TH, THead, TR, Table, cn } from "@veridia/ui";
import { PageHeader } from "@/components/app-shell";
import { AutoRefresh, TxLink } from "@/components/bits";
import { describeEvent } from "@/lib/describe-event";
import { listActivity } from "@/server/queries";
import { getSession } from "@/server/session";

export const metadata = { title: "Activity" };

const TX_TONE = { pending: "warning", success: "success", failed: "danger", expired: "neutral" } as const;

export default async function ActivityPage({ searchParams }: { searchParams: Promise<{ scope?: string }> }) {
  const { scope = "all" } = await searchParams;
  const session = await getSession();
  const mine = scope === "mine" && !!session;
  const { events, txs, audits } = await listActivity({ address: mine ? session!.address : null });
  return (
    <>
      <AutoRefresh everyMs={6000} />
      <PageHeader
        title="Activity"
        description="Auditable history: contract events indexed from Stellar, transaction records reconciled with the network, and off-chain audit entries."
        actions={
          <div className="flex gap-2">
            {["all", "mine"].map((s) => (
              <Link key={s} href={`/activity?scope=${s}`} className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors", scope === s ? "border-accent/50 bg-primary-soft text-accent" : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:text-foreground")}>
                {s === "all" ? "All" : "Mine"}
              </Link>
            ))}
          </div>
        }
      />
      {scope === "mine" && !session && <p className="mb-4 text-sm text-muted-foreground">Sign in with your wallet to filter by your address.</p>}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>On-chain events</CardTitle>
            <CardDescription>Source of truth: Soroban contract events. Each row is ingested exactly once (keyed by RPC event id).</CardDescription>
          </CardHeader>
          <CardContent>
            {events.length === 0 ? (
              <EmptyState icon={<Activity />} title="No events indexed yet" description="Make sure the indexer is running (pnpm indexer)." />
            ) : (
              <Table data-testid="events-table">
                <THead><TR><TH>Ledger</TH><TH>Contract</TH><TH>Event</TH><TH>Transaction</TH></TR></THead>
                <TBody>
                  {events.map((e) => (
                    <TR key={e.id}>
                      <TD className="tabular text-xs">
                        {e.ledger}
                        <div className="text-muted-foreground">{e.ledgerClosedAt.toLocaleString()}</div>
                      </TD>
                      <TD><Badge tone="neutral">{e.contract}</Badge></TD>
                      <TD className="text-sm">{describeEvent(e.name, e.topics as unknown[], e.data as Record<string, unknown>)}</TD>
                      <TD><TxLink hash={e.txHash} /></TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>Submitted from this app; the indexer resolves pending ones against Stellar.</CardDescription>
            </CardHeader>
            <CardContent>
              {txs.length === 0 ? (
                <p className="text-sm text-muted-foreground">No transactions recorded.</p>
              ) : (
                <Table>
                  <THead><TR><TH>Method</TH><TH>Status</TH><TH>Hash</TH></TR></THead>
                  <TBody>
                    {txs.map((t) => (
                      <TR key={t.hash}>
                        <TD className="text-sm">{t.method}<div className="text-xs text-muted-foreground">{t.submittedAt.toLocaleString()}</div></TD>
                        <TD><Badge tone={TX_TONE[t.status as keyof typeof TX_TONE] ?? "neutral"}>{t.status}</Badge></TD>
                        <TD><TxLink hash={t.hash} /></TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Audit log</CardTitle>
              <CardDescription>Off-chain actions: sign-ins, drafts, evidence uploads/downloads, reconciliations.</CardDescription>
            </CardHeader>
            <CardContent>
              {audits.length === 0 ? (
                <p className="text-sm text-muted-foreground">No audit entries.</p>
              ) : (
                <ul className="divide-y divide-border text-sm">
                  {audits.map((a) => (
                    <li key={a.id} className="flex items-start justify-between gap-2 py-2">
                      <span>
                        <span className="font-medium text-foreground">{a.action.replace(/_/g, " ")}</span>{" "}
                        <span className="text-muted-foreground">{a.entityType} {a.entityId}</span>
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">{a.createdAt.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
