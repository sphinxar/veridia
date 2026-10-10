import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const E2E_PORT = 3100;
export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
export const E2E_DATABASE_URL = process.env.E2E_DATABASE_URL ?? "postgres://veridia:veridia@localhost:5544/veridia_e2e";
export const ADMIN_DATABASE_URL = process.env.E2E_ADMIN_DATABASE_URL ?? "postgres://veridia:veridia@localhost:5544/veridia";
export const E2E_DEPLOYMENTS_DIR = join(ROOT, ".data", "e2e-deployments");
export const INDEXER_PID_FILE = join(ROOT, ".data", "e2e-indexer.pid");
/** Short periods so the whole commit → reveal → appeal window flow fits in a test run. */
export const PERIODS = { commit: 45, reveal: 45, appeal: 20 };
