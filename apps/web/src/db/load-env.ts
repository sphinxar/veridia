/** Load .env files for CLI entrypoints (Next.js loads them itself). */
import { config } from "dotenv";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "..");
for (const f of [".env.local", ".env"]) {
  config({ path: join(root, f), quiet: true });
  config({ path: join(root, "apps", "web", f), quiet: true });
}
