"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy, LogOut, Menu, ShieldCheck, Wallet, X, KeyRound } from "lucide-react";
import { Badge, Button, Spinner, cn } from "@veridia/ui";
import { toast } from "sonner";
import { useConfig, useWallet } from "./providers";
import { shortAddress } from "@/lib/format";

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/verify", label: "Verify" },
  { href: "/disputes", label: "Disputes" },
  { href: "/activity", label: "Activity" },
  { href: "/profile", label: "Profile" },
];

export function NetworkBadge() {
  const { network } = useConfig();
  return (
    <Badge tone={network === "testnet" ? "info" : "warning"} data-testid="network-badge" title="Current Stellar network">
      <span className={cn("size-1.5 rounded-full", network === "testnet" ? "bg-blue-600" : "bg-amber-600")} />
      {network === "testnet" ? "Testnet" : "Local network"}
    </Badge>
  );
}

export function WalletButton() {
  const w = useWallet();
  const [open, setOpen] = React.useState(false);
  if (w.status === "restoring") {
    return (
      <Button variant="outline" size="sm" disabled>
        <Spinner /> Wallet
      </Button>
    );
  }
  if (!w.address) {
    return (
      <Button size="sm" onClick={() => w.connect()} disabled={w.status === "connecting"} data-testid="connect-wallet">
        {w.status === "connecting" ? <Spinner /> : <Wallet />} Connect wallet
      </Button>
    );
  }
  const signedIn = w.sessionAddress === w.address;
  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setOpen((o) => !o)} aria-expanded={open} data-testid="wallet-menu">
        <span className={cn("size-2 rounded-full", signedIn ? "bg-emerald-500" : "bg-amber-500")} aria-hidden />
        <span className="font-mono text-xs" data-testid="connected-address">
          {shortAddress(w.address)}
        </span>
      </Button>
      {open && (
        <div className="absolute right-0 z-40 mt-2 w-72 rounded-lg border border-border bg-surface p-3 shadow-lg" onMouseLeave={() => setOpen(false)}>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Connected wallet</p>
          <p className="mt-1 break-all font-mono text-xs text-navy-900">{w.address}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {signedIn ? "Signed in — off-chain actions (drafts, evidence) enabled." : "Not signed in — sign a message to upload evidence or create drafts."}
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => {
                navigator.clipboard.writeText(w.address!).then(() => toast.success("Address copied"));
              }}
            >
              <Copy /> Copy address
            </Button>
            {!signedIn && (
              <Button variant="ghost" size="sm" className="justify-start" onClick={() => w.signIn()} disabled={w.signingIn}>
                {w.signingIn ? <Spinner /> : <KeyRound />} Sign in
              </Button>
            )}
            <Button variant="ghost" size="sm" className="justify-start text-danger" onClick={() => w.disconnect()}>
              <LogOut /> Disconnect
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const w = useWallet();
  const { network } = useConfig();
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => setMenu(false), [pathname]);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-navy-900">
            <span className="flex size-8 items-center justify-center rounded-md bg-navy-900 text-white">
              <ShieldCheck className="size-5" />
            </span>
            Veridia
          </Link>
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-navy-900",
                  pathname.startsWith(n.href) && "bg-muted text-navy-900",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <NetworkBadge />
            <WalletButton />
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" onClick={() => setMenu((m) => !m)}>
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-border px-4 py-2 lg:hidden" aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={cn("block rounded-md px-3 py-2 text-sm font-medium", pathname.startsWith(n.href) ? "bg-muted text-navy-900" : "text-muted-foreground")}>
                {n.label}
              </Link>
            ))}
          </nav>
        )}
        {w.networkMismatch && (
          <div role="alert" className="border-t border-amber-200 bg-warning-soft px-4 py-2 text-center text-sm text-amber-900">
            Your wallet is on a different network. Switch it to <strong>{network === "testnet" ? "Testnet" : "the local standalone network"}</strong> before signing.
          </div>
        )}
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Veridia MVP — unaudited contracts on {network}. Do not use with real funds.</p>
          <p>Evidence hashes prove file integrity, not the truth of real-world claims.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, description, actions }: { title: string; description?: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-navy-900">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
