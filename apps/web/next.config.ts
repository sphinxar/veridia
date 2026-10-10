import type { NextConfig } from "next";
import { config as loadEnv } from "dotenv";

// The monorepo keeps a single .env at the repository root.
loadEnv({ path: "../../.env", quiet: true });
loadEnv({ path: "../../.env.local", quiet: true, override: true });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Separate build dir lets the E2E dev server run alongside a production build.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  transpilePackages: ["@veridia/domain", "@veridia/stellar-client", "@veridia/ui"],
  serverExternalPackages: ["pg"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
