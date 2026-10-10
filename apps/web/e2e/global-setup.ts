import { execSync, spawn } from "node:child_process";
import { mkdirSync, openSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import pg from "pg";
import { ADMIN_DATABASE_URL, E2E_DATABASE_URL, E2E_DEPLOYMENTS_DIR, INDEXER_PID_FILE, PERIODS, ROOT } from "./env";

export default async function globalSetup() {
  const rpc = await fetch("http://localhost:8000/rpc", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getHealth" }),
  }).catch(() => null);
  if (!rpc?.ok) throw new Error("Local Stellar network is not running. Start it with: pnpm infra:up");

  // Fresh, isolated database.
  const admin = new pg.Client({ connectionString: ADMIN_DATABASE_URL });
  await admin.connect();
  const dbName = new URL(E2E_DATABASE_URL).pathname.slice(1);
  await admin.query(`DROP DATABASE IF EXISTS "${dbName}" WITH (FORCE)`);
  await admin.query(`CREATE DATABASE "${dbName}"`);
  await admin.end();

  const env = { ...process.env, DATABASE_URL: E2E_DATABASE_URL, DEPLOYMENTS_DIR: E2E_DEPLOYMENTS_DIR, STELLAR_NETWORK: "local" };
  const run = (cmd: string, cwd = ROOT) => execSync(cmd, { cwd, env, stdio: "inherit" });
  run("npx tsx src/db/migrate.ts", join(ROOT, "apps", "web"));
  run(`npx tsx scripts/deploy.ts --network local --commit ${PERIODS.commit} --reveal ${PERIODS.reveal} --appeal ${PERIODS.appeal}`);
  run("npx tsx scripts/seed.ts --network local --count 6");

  mkdirSync(join(ROOT, ".data"), { recursive: true });
  const log = openSync(join(ROOT, ".data", "e2e-indexer.log"), "w");
  const indexer = spawn("npx", ["tsx", "src/main.ts"], {
    cwd: join(ROOT, "services", "indexer"),
    env: { ...env, INDEXER_POLL_MS: "1000" },
    stdio: ["ignore", log, log],
    detached: true,
  });
  indexer.unref();
  writeFileSync(INDEXER_PID_FILE, String(indexer.pid));
}
