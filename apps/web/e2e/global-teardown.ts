import { existsSync, readFileSync, rmSync } from "node:fs";
import { INDEXER_PID_FILE } from "./env";

export default async function globalTeardown() {
  if (!existsSync(INDEXER_PID_FILE)) return;
  const pid = Number(readFileSync(INDEXER_PID_FILE, "utf8"));
  try {
    process.kill(-pid, "SIGTERM"); // whole process group (npx → tsx → node)
  } catch {
    /* already stopped */
  }
  rmSync(INDEXER_PID_FILE, { force: true });
}
