import type { BrowserContext } from "@playwright/test";
import { Keypair, TransactionBuilder } from "@stellar/stellar-sdk";
import { signSep53 } from "../src/server/wallet-auth";

/**
 * Inject a test wallet into every page of the context. The private key never enters
 * the browser: signing requests are proxied to this Node process via exposeBinding.
 * The app only uses it when built with NEXT_PUBLIC_E2E_TEST_WALLET=1.
 */
export async function attachWallet(context: BrowserContext, kp: Keypair) {
  await context.exposeBinding("__veridiaWalletBridge", async (_source, op: string, a?: string, b?: string) => {
    if (op === "address") return kp.publicKey();
    if (op === "signTx") {
      const tx = TransactionBuilder.fromXDR(a!, b!);
      tx.sign(kp);
      return tx.toXDR();
    }
    if (op === "signMessage") return signSep53(kp, a!);
    throw new Error(`unknown wallet op ${op}`);
  });
  await context.addInitScript(() => {
    const bridge = (window as unknown as { __veridiaWalletBridge: (op: string, a?: string, b?: string) => Promise<string> }).__veridiaWalletBridge;
    (window as unknown as { __veridiaTestWallet: unknown }).__veridiaTestWallet = {
      getAddress: () => bridge("address"),
      signTransaction: (xdr: string, pass: string) => bridge("signTx", xdr, pass),
      signMessage: (m: string) => bridge("signMessage", m),
    };
  });
}
