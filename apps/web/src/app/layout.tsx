import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/app-shell";
import { publicConfig } from "@/server/config";

export const metadata: Metadata = {
  title: { default: "Veridia — human-verified milestone escrow", template: "%s · Veridia" },
  description: "Release escrowed project funds only after independent, staked verifiers approve each milestone.",
};

export const viewport: Viewport = { themeColor: "#0b1f3a", width: "device-width", initialScale: 1 };
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const config = publicConfig();
  return (
    <html lang="en">
      <body>
        <Providers config={config}>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
