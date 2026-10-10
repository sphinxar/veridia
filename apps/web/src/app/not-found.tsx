import Link from "next/link";
import { Button, EmptyState } from "@veridia/ui";

export default function NotFound() {
  return <EmptyState title="Page not found" description="The page or record you requested does not exist or is not indexed yet." action={<Button asChild variant="outline"><Link href="/">Home</Link></Button>} />;
}
