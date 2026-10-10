import "server-only";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { getSession, type Session } from "./session";

export class HttpError extends Error {
  constructor(public status: number, message: string, public details?: unknown) {
    super(message);
  }
}

export const json = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });

/** Wrap a route handler: maps HttpError/unknown errors to JSON responses. */
export function handler<A extends unknown[]>(fn: (...args: A) => Promise<Response>) {
  return async (...args: A): Promise<Response> => {
    try {
      return await fn(...args);
    } catch (e) {
      if (e instanceof HttpError) return json({ error: e.message, details: e.details }, e.status);
      console.error("[api]", e);
      return json({ error: "Internal server error" }, 500);
    }
  };
}

export async function requireSession(): Promise<Session> {
  const s = await getSession();
  if (!s) throw new HttpError(401, "Sign in with your wallet first");
  return s;
}

export async function parseJson<T extends z.ZodType>(req: Request, schema: T): Promise<z.infer<T>> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    throw new HttpError(400, "Invalid JSON body");
  }
  const r = schema.safeParse(body);
  if (!r.success) throw new HttpError(422, "Validation failed", r.error.issues);
  return r.data;
}

export function intParam(v: string, name = "id"): number {
  const n = Number(v);
  if (!Number.isInteger(n) || n <= 0) throw new HttpError(400, `Invalid ${name}`);
  return n;
}
