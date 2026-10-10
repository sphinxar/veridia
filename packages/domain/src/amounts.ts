/** Fixed-point token amount helpers. Amounts are always bigint in the token's base unit. */

export const DEFAULT_DECIMALS = 7; // Stellar assets use 7 decimals

const DECIMAL_RE = /^\d+(\.\d+)?$/;

export function parseAmount(input: string, decimals = DEFAULT_DECIMALS): bigint {
  const s = input.trim().replace(/_/g, "");
  if (!DECIMAL_RE.test(s)) throw new Error(`Invalid amount: "${input}"`);
  const [whole = "0", frac = ""] = s.split(".");
  if (frac.length > decimals) throw new Error(`Too many decimal places (max ${decimals})`);
  return BigInt(whole) * 10n ** BigInt(decimals) + BigInt(frac.padEnd(decimals, "0") || "0");
}

export function isValidAmount(input: string, decimals = DEFAULT_DECIMALS): boolean {
  try {
    return parseAmount(input, decimals) > 0n;
  } catch {
    return false;
  }
}

export function formatAmount(
  value: bigint | string | number,
  decimals = DEFAULT_DECIMALS,
  opts: { maxFraction?: number; grouping?: boolean } = {},
): string {
  const v = typeof value === "bigint" ? value : BigInt(value);
  const neg = v < 0n;
  const abs = neg ? -v : v;
  const base = 10n ** BigInt(decimals);
  const whole = abs / base;
  let frac = (abs % base).toString().padStart(decimals, "0");
  const maxFraction = opts.maxFraction ?? 2;
  frac = frac.slice(0, Math.max(maxFraction, 0)).replace(/0+$/, "");
  const wholeStr =
    opts.grouping === false ? whole.toString() : whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${neg ? "-" : ""}${wholeStr}${frac ? `.${frac}` : ""}`;
}

/** Percentage (0–100) of part/total with one decimal, safe for bigint. */
export function percent(part: bigint, total: bigint): number {
  if (total <= 0n) return 0;
  return Number((part * 1000n) / total) / 10;
}
