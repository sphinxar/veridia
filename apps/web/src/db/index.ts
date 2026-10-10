import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import type { PgDatabase, PgQueryResultHKT } from "drizzle-orm/pg-core";
import pg from "pg";
import * as schema from "./schema";

export { schema };

/** Any Drizzle Postgres database using our schema (node-postgres in prod, PGlite in tests). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Db = PgDatabase<PgQueryResultHKT, typeof schema, any>;

const globalForDb = globalThis as unknown as { __veridiaPool?: pg.Pool; __veridiaDb?: NodePgDatabase<typeof schema> };

export function getDb(): NodePgDatabase<typeof schema> {
  if (!globalForDb.__veridiaDb) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    globalForDb.__veridiaPool = new pg.Pool({ connectionString: url, max: 10 });
    globalForDb.__veridiaDb = drizzle(globalForDb.__veridiaPool, { schema });
  }
  return globalForDb.__veridiaDb;
}

export async function closeDb() {
  await globalForDb.__veridiaPool?.end();
  globalForDb.__veridiaPool = undefined;
  globalForDb.__veridiaDb = undefined;
}
