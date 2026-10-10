"use client";
import { Alert, Button } from "@veridia/ui";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <Alert tone="danger" title="Something went wrong">
        {error.message || "Unexpected error"}. If you just sent a transaction, it will still be reconciled with the chain.
      </Alert>
      <Button variant="outline" onClick={reset}>Try again</Button>
    </div>
  );
}
