import "server-only";
import { z } from "zod";

const schema = z.object({
  STELLAR_NETWORK: z.enum(["local", "testnet"]).default("local"),
  STELLAR_RPC_URL: z.string().optional(),
  DATABASE_URL: z.string().min(1),
  S3_ENDPOINT: z.string().url(),
  S3_REGION: z.string().default("us-east-1"),
  S3_BUCKET: z.string().min(3),
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_FORCE_PATH_STYLE: z.string().default("true"),
  SESSION_SECRET: z.string().min(32, "SESSION_SECRET must be at least 32 characters"),
  DEPLOYMENTS_DIR: z.string().optional(),
});

let cached: z.infer<typeof schema> | null = null;

/** Server-only environment. Never imported by client components. */
export function env() {
  if (!cached) {
    const parsed = schema.safeParse(process.env);
    if (!parsed.success) {
      throw new Error(`Invalid server environment: ${parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
    }
    cached = parsed.data;
  }
  return cached;
}
