import { rpc, scValToNative } from "@stellar/stellar-sdk";
import type { KnownContract } from "./errors";
import { toJsonSafe } from "./scval";

export interface DecodedEvent {
  /** RPC event id — globally unique, used for idempotent ingestion. */
  id: string;
  ledger: number;
  ledgerClosedAt: string;
  txHash: string;
  contractId: string;
  contract: KnownContract | "unknown";
  /** First topic: the event name in snake_case (e.g. "round_opened"). */
  name: string;
  /** Remaining topics, JSON-safe. */
  topics: unknown[];
  /** Event data (a map for #[contractevent] structs), JSON-safe. */
  data: Record<string, unknown>;
}

export function decodeEvent(
  ev: rpc.Api.EventResponse,
  names: Record<string, KnownContract>,
): DecodedEvent | null {
  if (!ev.contractId || ev.topic.length === 0) return null;
  const contractId = ev.contractId.contractId();
  const [first, ...rest] = ev.topic.map((t) => scValToNative(t));
  const value = scValToNative(ev.value);
  return {
    id: ev.id,
    ledger: ev.ledger,
    ledgerClosedAt: ev.ledgerClosedAt,
    txHash: ev.txHash,
    contractId,
    contract: names[contractId] ?? "unknown",
    name: String(first),
    topics: rest.map(toJsonSafe),
    data: (value && typeof value === "object" && !Array.isArray(value)
      ? toJsonSafe(value)
      : { value: toJsonSafe(value) }) as Record<string, unknown>,
  };
}

export interface EventPage {
  events: DecodedEvent[];
  cursor: string;
  latestLedger: number;
  oldestLedger: number;
}

/** Fetch one page of contract events, by cursor or from a start ledger. */
export async function fetchEvents(
  server: rpc.Server,
  contractIds: string[],
  names: Record<string, KnownContract>,
  from: { cursor: string } | { startLedger: number },
  limit = 200,
): Promise<EventPage> {
  const filters: rpc.Api.EventFilter[] = [{ type: "contract", contractIds }];
  const res =
    "cursor" in from
      ? await server.getEvents({ filters, cursor: from.cursor, limit })
      : await server.getEvents({ filters, startLedger: from.startLedger, limit });
  const events = res.events
    .filter((e) => e.inSuccessfulContractCall !== false)
    .map((e) => decodeEvent(e, names))
    .filter((e): e is DecodedEvent => e !== null);
  return { events, cursor: res.cursor, latestLedger: res.latestLedger, oldestLedger: res.oldestLedger };
}
