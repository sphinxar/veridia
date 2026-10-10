"use client";
import { Wallet } from "lucide-react";
import { Button, EmptyState, Spinner } from "@veridia/ui";
import { useWallet } from "./providers";

export function ConnectPrompt({ title, description }: { title: string; description: string }) {
  const w = useWallet();
  const busy = w.status === "connecting" || w.signingIn || w.status === "restoring";
  return (
    <EmptyState
      icon={<Wallet />}
      title={title}
      description={description}
      action={
        w.address && w.sessionAddress !== w.address ? (
          <Button onClick={() => w.signIn()} disabled={busy}>{busy && <Spinner />} Sign in with wallet</Button>
        ) : (
          <Button onClick={() => w.connect()} disabled={busy} data-testid="connect-prompt">{busy && <Spinner />} Connect wallet</Button>
        )
      }
    />
  );
}
