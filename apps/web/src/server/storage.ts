import "server-only";
import { createHash } from "node:crypto";
import {
  CreateBucketCommand,
  GetObjectCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { env } from "./env";

let client: S3Client | null = null;
let bucketReady: Promise<void> | null = null;

function s3(): S3Client {
  if (!client) {
    const e = env();
    client = new S3Client({
      endpoint: e.S3_ENDPOINT,
      region: e.S3_REGION,
      forcePathStyle: e.S3_FORCE_PATH_STYLE === "true",
      credentials: { accessKeyId: e.S3_ACCESS_KEY_ID, secretAccessKey: e.S3_SECRET_ACCESS_KEY },
    });
  }
  return client;
}

/** Create the private bucket on first use (no public ACLs are ever set). */
async function ensureBucket() {
  bucketReady ??= (async () => {
    const Bucket = env().S3_BUCKET;
    try {
      await s3().send(new HeadBucketCommand({ Bucket }));
    } catch {
      await s3().send(new CreateBucketCommand({ Bucket }));
    }
  })().catch((e) => {
    bucketReady = null;
    throw e;
  });
  return bucketReady;
}

export const sha256Hex = (b: Uint8Array) => createHash("sha256").update(b).digest("hex");

export async function putEvidence(key: string, body: Uint8Array, mime: string, sha256: string) {
  await ensureBucket();
  await s3().send(
    new PutObjectCommand({
      Bucket: env().S3_BUCKET,
      Key: key,
      Body: body,
      ContentType: mime,
      Metadata: { sha256 },
    }),
  );
}

/** Fetch an object and verify it still matches the recorded hash. */
export async function getEvidence(key: string, expectedSha256: string): Promise<{ body: Uint8Array; intact: boolean }> {
  await ensureBucket();
  const res = await s3().send(new GetObjectCommand({ Bucket: env().S3_BUCKET, Key: key }));
  const body = await res.Body!.transformToByteArray();
  return { body, intact: sha256Hex(body) === expectedSha256 };
}
