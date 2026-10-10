import { CONTRACT_ERRORS, type ContractName } from "@veridia/domain";

export type KnownContract = ContractName | "token";

export class ContractCallError extends Error {
  constructor(
    message: string,
    public readonly contract: KnownContract | null,
    public readonly code: number | null,
    public readonly raw: string,
  ) {
    super(message);
    this.name = "ContractCallError";
  }
}

const TOKEN_ERRORS: Record<number, string> = {
  10: "Insufficient token balance",
  13: "Missing trustline for this token",
  9: "Insufficient allowance",
};

/**
 * Turn a simulation / transaction diagnostic string into a friendly error.
 * Errors are attributed to the contract that *raised* them (oldest error event in the
 * diagnostic log), so e.g. a failed token transfer inside `deposit` is not mistaken for
 * an escrow error with the same code.
 */
export function decodeContractError(
  raw: string,
  invoked: KnownContract | null,
  contractNames: Record<string, KnownContract> = {},
): ContractCallError {
  const re = /contract:(C[A-Z2-7]{55}),\s*topics:\[error, Error\(Contract, #(\d+)\)/g;
  let origin: { id: string; code: number } | null = null;
  for (const m of raw.matchAll(re)) origin = { id: m[1]!, code: Number(m[2]) }; // newest first → keep last
  let contract: KnownContract | null = invoked;
  let code: number | null = null;
  if (origin) {
    contract = contractNames[origin.id] ?? invoked;
    code = origin.code;
  } else {
    const m = /Error\(Contract, #(\d+)\)/.exec(raw);
    if (m) code = Number(m[1]);
  }
  if (code !== null) {
    const table: Record<number, string> | undefined =
      contract === "token" ? TOKEN_ERRORS : contract ? CONTRACT_ERRORS[contract] : undefined;
    return new ContractCallError(table?.[code] ?? `Contract error #${code}`, contract, code, raw);
  }
  if (/Error\(Auth, /.test(raw)) {
    return new ContractCallError("Authorization failed for this action", invoked, null, raw);
  }
  const firstLine = raw.split("\n")[0] ?? raw;
  return new ContractCallError(firstLine.slice(0, 300), invoked, null, raw);
}
