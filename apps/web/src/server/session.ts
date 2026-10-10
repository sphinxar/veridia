import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { env } from "./env";

export const SESSION_COOKIE = "veridia_session";
const TTL_SECONDS = 8 * 3600;

export interface Session {
  address: string;
}

const key = () => new TextEncoder().encode(env().SESSION_SECRET);

export async function createSessionToken(address: string): Promise<string> {
  return new SignJWT({ sub: address })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TTL_SECONDS}s`)
    .setIssuer("veridia")
    .sign(key());
}

export async function verifySessionToken(token: string): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(token, key(), { issuer: "veridia", algorithms: ["HS256"] });
    return typeof payload.sub === "string" ? { address: payload.sub } : null;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return token ? verifySessionToken(token) : null;
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: TTL_SECONDS,
};
