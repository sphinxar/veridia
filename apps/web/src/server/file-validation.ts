import { EVIDENCE_MAX_BYTES, EVIDENCE_MIME_TYPES, type EvidenceMime } from "@veridia/domain";

const startsWith = (b: Uint8Array, sig: number[], offset = 0) => sig.every((x, i) => b[offset + i] === x);

/**
 * Determine the file type from its content (magic bytes), never from the client's
 * declared type or extension. Text types are accepted only if declared as such and
 * the content is valid UTF-8 without NUL bytes.
 */
export function sniffMime(bytes: Uint8Array, declared: string): EvidenceMime | null {
  if (startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d])) return "application/pdf"; // %PDF-
  if (startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return "image/png";
  if (startsWith(bytes, [0xff, 0xd8, 0xff])) return "image/jpeg";
  if (startsWith(bytes, [0x52, 0x49, 0x46, 0x46]) && startsWith(bytes, [0x57, 0x45, 0x42, 0x50], 8)) return "image/webp";
  if (startsWith(bytes, [0x66, 0x74, 0x79, 0x70], 4)) return "video/mp4"; // ....ftyp
  if (startsWith(bytes, [0x50, 0x4b, 0x03, 0x04])) return "application/zip";
  if (declared === "text/plain" || declared === "text/csv") {
    if (bytes.includes(0)) return null;
    try {
      new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      return declared;
    } catch {
      return null;
    }
  }
  return null;
}

export type ValidationResult = { ok: true; mime: EvidenceMime } | { ok: false; error: string };

export function validateEvidenceFile(bytes: Uint8Array, declared: string, name: string): ValidationResult {
  if (bytes.length === 0) return { ok: false, error: "File is empty" };
  if (bytes.length > EVIDENCE_MAX_BYTES) return { ok: false, error: `File exceeds ${EVIDENCE_MAX_BYTES / 1024 / 1024} MB` };
  if (name.length > 200 || /[\\/\u0000]/.test(name)) return { ok: false, error: "Invalid file name" };
  const mime = sniffMime(bytes, declared);
  if (!mime || !(EVIDENCE_MIME_TYPES as readonly string[]).includes(mime)) {
    return { ok: false, error: `Unsupported file type. Allowed: ${EVIDENCE_MIME_TYPES.join(", ")}` };
  }
  return { ok: true, mime };
}

export function safeFileName(name: string): string {
  return name.replace(/[^\w.\- ]+/g, "_").slice(0, 120) || "evidence";
}
