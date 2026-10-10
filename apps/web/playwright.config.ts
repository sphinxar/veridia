import { defineConfig, devices } from "@playwright/test";
import { E2E_DATABASE_URL, E2E_DEPLOYMENTS_DIR, E2E_PORT } from "./e2e/env";

/**
 * End-to-end tests against a real local Stellar network (docker quickstart),
 * an isolated Postgres database and a fresh contract deployment.
 * Prerequisites: `pnpm infra:up` (Stellar + Postgres + S3).
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 6 * 60_000,
  expect: { timeout: 30_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  globalSetup: "./e2e/global-setup.ts",
  globalTeardown: "./e2e/global-teardown.ts",
  use: {
    baseURL: `http://localhost:${E2E_PORT}`,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    ...devices["Desktop Chrome"],
  },
  webServer: {
    command: `npx next dev -p ${E2E_PORT}`,
    // Readiness probe that does not depend on the deployment created in global setup.
    url: `http://localhost:${E2E_PORT}/api/auth/session`,
    timeout: 180_000,
    reuseExistingServer: false,
    env: {
      DATABASE_URL: E2E_DATABASE_URL,
      DEPLOYMENTS_DIR: E2E_DEPLOYMENTS_DIR,
      NEXT_PUBLIC_E2E_TEST_WALLET: "1",
      NEXT_DIST_DIR: ".next-e2e",
      STELLAR_NETWORK: "local",
    },
  },
});
