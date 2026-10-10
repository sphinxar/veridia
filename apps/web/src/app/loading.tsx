import { Skeleton } from "@veridia/ui";

export default function Loading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading">
      <Skeleton className="h-8 w-64" />
      <div className="grid gap-4 sm:grid-cols-3">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
      <Skeleton className="h-64" />
    </div>
  );
}
