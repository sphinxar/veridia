"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { isValidAmount, parseAmount, verifierProfileSchema } from "@veridia/domain";
import { sc, type VerifierState } from "@veridia/stellar-client";
import { Alert, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, FieldError, Input, Label, Spinner, Stat, Textarea } from "@veridia/ui";
import { Countdown, useNow, useRefreshAfterTx } from "@/components/bits";
import { useConfig, useWallet } from "@/components/providers";
import { money } from "@/lib/format";
import { useInvoke } from "@/lib/use-invoke";

type ProfileForm = z.input<typeof verifierProfileSchema>;

export function VerifierPanel({ address, profile }: { address: string; profile: { displayName: string; expertise: string } | null }) {
  const cfg = useConfig();
  const wallet = useWallet();
  const { invoke, pending } = useInvoke();
  const refresh = useRefreshAfterTx();
  const now = useNow(5000);
  const [v, setV] = React.useState<VerifierState | null | undefined>(undefined);
  const [balance, setBalance] = React.useState<bigint | null>(null);
  const [stakeAmt, setStakeAmt] = React.useState("");
  const [unstakeAmt, setUnstakeAmt] = React.useState("");
  const minStake = BigInt(String(cfg.params.registry.min_stake ?? "0"));
  const lockAmount = BigInt(String(cfg.params.registry.lock_amount ?? "0"));
  const walletMatches = wallet.address === address;

  const load = React.useCallback(async () => {
    try {
      const [ver, bal] = await Promise.all([wallet.client.getVerifier(address), wallet.client.tokenBalance(cfg.contracts.token, address)]);
      setV(ver);
      setBalance(bal);
    } catch {
      setV(null);
    }
  }, [wallet.client, address, cfg.contracts.token]);
  React.useEffect(() => {
    load();
  }, [load]);

  const form = useForm<ProfileForm>({ resolver: zodResolver(verifierProfileSchema), defaultValues: profile ?? { displayName: "", expertise: "" } });

  async function after(res: unknown) {
    if (res) {
      await load();
      refresh();
    }
  }

  async function register(values: ProfileForm) {
    const res = await fetch("/api/verifier/profile", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
    const body = await res.json();
    if (!res.ok) return toast.error("Could not save profile", { description: body.error });
    if (v) {
      toast.success("Profile updated");
      return;
    }
    await after(
      await invoke({ contract: "registry", method: "register", kind: "register_verifier", label: "Register as verifier", args: [sc.address(address), sc.bytes32(body.metadataHash)] }),
    );
  }

  const free = v ? v.stake - v.locked : 0n;
  const eligible = !!v && v.active && free >= (minStake > lockAmount ? minStake : lockAmount);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verifier</CardTitle>
        <CardDescription>
          Wallet <span className="font-mono text-xs">{address}</span> on {cfg.network}.{" "}
          {balance !== null && <>Balance {money(balance)}.</>}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {!walletMatches && <Alert tone="warning">Your connected wallet differs from the signed-in address. Reconnect the matching wallet to sign transactions.</Alert>}
        {v === undefined ? (
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Reading registry…</p>
        ) : (
          <>
            <form onSubmit={form.handleSubmit(register)} className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="displayName">Display name</Label>
                <Input id="displayName" {...form.register("displayName")} aria-invalid={!!form.formState.errors.displayName} />
                <FieldError message={form.formState.errors.displayName?.message} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="expertise">Expertise</Label>
                <Textarea id="expertise" className="min-h-[60px]" {...form.register("expertise")} placeholder="Domains you can evaluate (kept off-chain; only a hash is registered)" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={pending !== null} data-testid="register-verifier">
                  {pending === "register" && <Spinner />} {v ? "Save profile" : "Register as verifier"}
                </Button>
              </div>
            </form>

            {v && (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={v.active ? "success" : "neutral"}>{v.active ? "Active" : "Paused"}</Badge>
                  <Badge tone={eligible ? "success" : "warning"}>{eligible ? "Eligible for panels" : `Needs ≥ ${money(minStake > lockAmount ? minStake : lockAmount)} free stake`}</Badge>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Stat label="Staked" value={money(v.stake)} hint={`${money(v.locked)} locked in ${v.activeRounds} round(s)`} />
                  <Stat label="Unbonding" value={money(v.unbonding)} hint={v.unbonding > 0n ? <Countdown to={v.unbondAt} prefix="withdrawable in " done="withdrawable now" /> : "—"} />
                  <Stat label="Record" value={`${v.roundsRevealed}/${v.roundsAssigned}`} hint={`${v.noShows} no-shows · ${money(v.totalSlashed)} slashed`} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="stake">Add stake</Label>
                    <div className="flex gap-2">
                      <Input id="stake" value={stakeAmt} onChange={(e) => setStakeAmt(e.target.value)} placeholder="100" inputMode="decimal" data-testid="stake-amount" />
                      <Button
                        disabled={!isValidAmount(stakeAmt) || pending !== null}
                        data-testid="stake-submit"
                        onClick={async () => {
                          await after(await invoke({ contract: "registry", method: "deposit_stake", kind: "deposit_stake", label: `Stake ${stakeAmt} XLM`, args: [sc.address(address), sc.i128(parseAmount(stakeAmt))] }));
                          setStakeAmt("");
                        }}
                      >
                        Stake
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unstake">Request unstake (free stake: {money(free)})</Label>
                    <div className="flex gap-2">
                      <Input id="unstake" value={unstakeAmt} onChange={(e) => setUnstakeAmt(e.target.value)} placeholder="0" inputMode="decimal" />
                      <Button
                        variant="outline"
                        disabled={!isValidAmount(unstakeAmt) || parseAmount(unstakeAmt || "0") > free || pending !== null}
                        onClick={async () => {
                          await after(await invoke({ contract: "registry", method: "request_unstake", kind: "request_unstake", label: `Request unstake ${unstakeAmt} XLM`, args: [sc.address(address), sc.i128(parseAmount(unstakeAmt))] }));
                          setUnstakeAmt("");
                        }}
                      >
                        Unstake
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Locked stake cannot be unstaked while you have active rounds.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    disabled={v.unbonding === 0n || now < v.unbondAt || pending !== null}
                    onClick={async () => after(await invoke({ contract: "registry", method: "withdraw", kind: "withdraw_stake", label: "Withdraw unbonded stake", args: [sc.address(address)] }))}
                  >
                    Withdraw {money(v.unbonding)}
                  </Button>
                  <Button
                    variant="ghost"
                    disabled={pending !== null}
                    onClick={async () => after(await invoke({ contract: "registry", method: "set_active", kind: "set_active", label: v.active ? "Pause assignments" : "Resume assignments", args: [sc.address(address), sc.bool(!v.active)] }))}
                  >
                    {v.active ? "Pause new assignments" : "Resume assignments"}
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
