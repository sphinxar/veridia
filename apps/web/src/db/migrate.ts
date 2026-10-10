/** Apply versioned SQL migrations from ./drizzle. Usage: pnpm db:migrate */
import "./load-env";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { closeDb, getDb } from "./index";

const folder = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "drizzle");

migrate(getDb(), { migrationsFolder: folder })
  .then(async () => {
    console.log("✔ migrations applied");
    await closeDb();
  })
  .catch(async (e) => {
    console.error(e);
    await closeDb();
    process.exit(1);
  });
