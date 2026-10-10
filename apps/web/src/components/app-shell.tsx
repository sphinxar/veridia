"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy, LayoutDashboard, LogOut, Menu, UserRoundCheck, Wallet, X, KeyRound } from "lucide-react";
import { Badge, Button, Spinner, cn } from "@veridia/ui";
import { toast } from "sonner";
import { useConfig, useWallet } from "./providers";
import { shortAddress } from "@/lib/format";

/** Primary navigation. Dashboard and Profile live in the wallet menu (they need a connected wallet). */
const NAV = [
  { href: "/", label: "Home" },
  { href: "/#how", label: "How it works" },
  { href: "/projects", label: "Projects" },
  { href: "/verify", label: "Verify" },
  { href: "/disputes", label: "Disputes" },
  { href: "/activity", label: "Activity" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname.startsWith(href);
}

function BrandLogo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/veridia-logo-blanco.svg" alt="Veridia" width={326} height={92} className={cn("h-8 w-auto max-w-none min-[390px]:h-9 sm:h-12", className)} />
  );
}

export function NetworkBadge({ className }: { className?: string }) {
  const { network } = useConfig();
  return (
    <Badge tone={network === "testnet" ? "info" : "warning"} data-testid="network-badge" title="Current Stellar network" className={className}>
      <span className={cn("size-1.5 rounded-full", network === "testnet" ? "bg-info" : "bg-warning")} />
      {network === "testnet" ? "Testnet" : "Local network"}
    </Badge>
  );
}

export function WalletButton() {
  const w = useWallet();
  const [open, setOpen] = React.useState(false);
  const box = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (w.status === "restoring") {
    return (
      <Button variant="outline" size="sm" disabled>
        <Spinner /> Wallet
      </Button>
    );
  }
  if (!w.address) {
    return (
      <Button variant="outline" size="default" className="max-sm:h-9 max-sm:px-3.5 max-sm:text-[13px] max-[359px]:px-2.5" onClick={() => w.connect()} disabled={w.status === "connecting"} data-testid="connect-wallet">
        {w.status === "connecting" ? <Spinner /> : <Wallet />}
        <span className="max-[359px]:sr-only">Connect wallet</span>
      </Button>
    );
  }
  const signedIn = w.sessionAddress === w.address;
  return (
    <div className="relative" ref={box}>
      <Button variant="outline" className="max-sm:h-9 max-sm:px-3.5" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="menu" data-testid="wallet-menu">
        <span className={cn("size-2 rounded-full", signedIn ? "bg-success" : "bg-warning")} aria-hidden />
        <span className="font-mono text-xs" data-testid="connected-address">
          {shortAddress(w.address)}
        </span>
      </Button>
      {open && (
        <div role="menu" className="absolute right-0 z-40 mt-3 w-80 rounded-2xl border border-white/10 bg-surface-raised p-4 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.85)]">
          <p className="text-xs font-medium text-muted-foreground">Connected wallet</p>
          <p className="mt-1 break-all font-mono text-xs text-foreground">{w.address}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {signedIn ? "Signed in — off-chain actions (drafts, evidence) enabled." : "Not signed in — sign a message to upload evidence or create drafts."}
          </p>
          <div className="mt-3 flex flex-col gap-0.5 border-t border-white/[0.08] pt-3">
            <Button asChild variant="ghost" size="sm" className="justify-start">
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                <LayoutDashboard /> My dashboard
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="justify-start">
              <Link href="/profile" onClick={() => setOpen(false)}>
                <UserRoundCheck /> Verifier profile
              </Link>
            </Button>
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
            <Button variant="ghost" size="sm" className="justify-start text-danger hover:text-danger" onClick={() => w.disconnect()}>
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
      <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-background/55 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[88rem] items-center gap-4 px-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="Veridia — home" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <BrandLogo />
          </Link>
          <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => {
              const active = isActive(pathname, n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active && "text-foreground after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-accent",
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <NetworkBadge className="max-sm:hidden" />
            <WalletButton />
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-white/[0.06] px-4 py-3 lg:hidden" aria-label="Mobile">
            <div className="px-3 pb-2 sm:hidden">
              <NetworkBadge />
            </div>
            {[...NAV, { href: "/dashboard", label: "My dashboard" }, { href: "/profile", label: "Verifier profile" }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn("block rounded-xl px-3 py-2.5 text-[15px]", isActive(pathname, n.href) ? "bg-primary-soft text-accent" : "text-muted-foreground hover:text-foreground")}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
        {w.networkMismatch && (
          <div role="alert" className="border-t border-warning/25 bg-warning-soft px-4 py-2.5 text-center text-sm text-foreground">
            Your wallet is on a different network. Switch it to <strong>{network === "testnet" ? "Testnet" : "the local standalone network"}</strong> before signing.
          </div>
        )}
      </header>
      <main className="mx-auto w-full max-w-[88rem] flex-1 px-4 py-10 sm:px-6 lg:px-10">{children}</main>
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Veridia MVP — unaudited contracts on {network}. Do not use with real funds.</p>
          <p>Evidence hashes prove file integrity, not the truth of real-world claims.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, description, actions }: { title: string; description?: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
