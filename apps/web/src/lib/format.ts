import { formatAmount } from "@veridia/domain";

export const shortAddress = (a?: string | null, n = 4) => (a ? `${a.slice(0, n + 1)}…${a.slice(-n)}` : "—");

export function tokenSymbol(token: string, defaultToken: string): string {
  return token === defaultToken ? "XLM" : shortAddress(token);
}

export function money(v: bigint | string | number | null | undefined, symbol = "XLM", maxFraction = 2): string {
  if (v === null || v === undefined) return "—";
  return `${formatAmount(BigInt(v), 7, { maxFraction })} ${symbol}`;
}

export function dateTime(secs: number | null | undefined): string {
  if (!secs) return "—";
  return new Date(secs * 1000).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export function date(secs: number | null | undefined): string {
  if (!secs) return "—";
  return new Date(secs * 1000).toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function duration(totalSecs: number): string {
  const s = Math.max(0, Math.floor(totalSecs));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${sec}s`;
  return `${sec}s`;
}

export function relative(d: Date | string | number): string {
  const t = typeof d === "number" ? d * 1000 : new Date(d).getTime();
  const diff = (Date.now() - t) / 1000;
  if (Math.abs(diff) < 60) return "just now";
  const past = diff > 0;
  const txt = duration(Math.abs(diff));
  return past ? `${txt} ago` : `in ${txt}`;
}
