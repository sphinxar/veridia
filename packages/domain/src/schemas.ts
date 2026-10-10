import { z } from "zod";
import { isValidAmount } from "./amounts";

export const STELLAR_ACCOUNT_RE = /^G[A-Z2-7]{55}$/;
export const STELLAR_CONTRACT_RE = /^C[A-Z2-7]{55}$/;
export const HEX32_RE = /^[0-9a-f]{64}$/;

export const accountAddress = z.string().regex(STELLAR_ACCOUNT_RE, "Invalid Stellar account address");
export const contractAddress = z.string().regex(STELLAR_CONTRACT_RE, "Invalid contract address");
export const hex32 = z.string().toLowerCase().regex(HEX32_RE, "Expected a 32-byte hex string");
export const txHash = hex32;

export const MAX_MILESTONES = 10;

/** Off-chain project metadata; its canonical SHA-256 is committed on-chain. */
export const projectMetadataSchema = z.object({
  title: z.string().trim().min(3).max(120),
  summary: z.string().trim().min(10).max(280),
  description: z.string().trim().max(5000).default(""),
  category: z.string().trim().max(60).default("general"),
  milestones: z
    .array(
      z.object({
        title: z.string().trim().min(3).max(120),
        description: z.string().trim().max(2000).default(""),
      }),
    )
    .min(1)
    .max(MAX_MILESTONES),
});
export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

const dateString = z
  .string()
  .min(1, "Required")
  .refine((s) => !Number.isNaN(Date.parse(s)), "Invalid date");

export const toEpochSeconds = (s: string) => Math.floor(Date.parse(s) / 1000);

/** The project creation form (UI) — validated again on the server. */
export const createProjectFormSchema = z
  .object({
    title: z.string().trim().min(3, "At least 3 characters").max(120),
    summary: z.string().trim().min(10, "At least 10 characters").max(280),
    description: z.string().trim().max(5000),
    category: z.string().trim().max(60),
    token: contractAddress,
    fundingDeadline: dateString,
    milestones: z
      .array(
        z.object({
          title: z.string().trim().min(3, "At least 3 characters").max(120),
          description: z.string().trim().max(2000),
          amount: z.string().refine((s) => isValidAmount(s), "Enter a positive amount (max 7 decimals)"),
          deadline: dateString,
        }),
      )
      .min(1, "Add at least one milestone")
      .max(MAX_MILESTONES, `At most ${MAX_MILESTONES} milestones`),
  })
  .superRefine((v, ctx) => {
    const fd = Date.parse(v.fundingDeadline);
    if (fd <= Date.now()) {
      ctx.addIssue({ code: "custom", path: ["fundingDeadline"], message: "Must be in the future" });
    }
    let prev = fd;
    v.milestones.forEach((m, i) => {
      const d = Date.parse(m.deadline);
      if (!(d > prev)) {
        ctx.addIssue({
          code: "custom",
          path: ["milestones", i, "deadline"],
          message: i === 0 ? "Must be after the funding deadline" : "Must be after the previous milestone",
        });
      }
      prev = d;
    });
  });
export type CreateProjectForm = z.infer<typeof createProjectFormSchema>;

/** Server: register a project draft before the on-chain call. */
export const projectDraftSchema = z.object({
  metadata: projectMetadataSchema,
  token: contractAddress,
  fundingDeadline: z.number().int().positive(),
  milestones: z
    .array(z.object({ amount: z.string().regex(/^\d+$/), deadline: z.number().int().positive() }))
    .min(1)
    .max(MAX_MILESTONES),
});
export type ProjectDraftInput = z.infer<typeof projectDraftSchema>;

export const TX_KINDS = [
  "create_project",
  "deposit",
  "cancel",
  "expire_funding",
  "submit_for_verification",
  "settle_milestone",
  "expire_milestone",
  "claim_refund",
  "register_verifier",
  "deposit_stake",
  "request_unstake",
  "withdraw_stake",
  "set_active",
  "commit",
  "reveal",
  "finalize_round",
  "appeal",
  "other",
] as const;
export type TxKind = (typeof TX_KINDS)[number];

export const recordTransactionSchema = z.object({
  hash: txHash,
  kind: z.enum(TX_KINDS),
  contract: z.enum(["escrow", "registry", "verification", "token"]),
  method: z.string().min(1).max(64),
  projectId: z.number().int().positive().optional(),
  roundId: z.number().int().positive().optional(),
});
export type RecordTransactionInput = z.infer<typeof recordTransactionSchema>;

export const authVerifySchema = z.object({
  address: accountAddress,
  nonce: z.string().min(16).max(128),
  signature: z.string().min(1).max(256),
});

export const verifierProfileSchema = z.object({
  displayName: z.string().trim().min(2).max(60),
  expertise: z.string().trim().max(280).default(""),
});

export const EVIDENCE_MAX_BYTES = 25 * 1024 * 1024;
export const EVIDENCE_MIME_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "video/mp4",
  "application/zip",
  "text/plain",
  "text/csv",
] as const;
export type EvidenceMime = (typeof EVIDENCE_MIME_TYPES)[number];
