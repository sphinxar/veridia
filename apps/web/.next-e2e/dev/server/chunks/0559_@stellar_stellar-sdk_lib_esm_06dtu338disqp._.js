(()=>{"use strict";module.exports = [
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/hashing.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hash",
    ()=>hash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/sha2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
;
;
function hash(data) {
    const bytes = typeof data === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"])(data) : data;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(bytes);
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/keypair.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keypair",
    ()=>Keypair
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ed25519@3.2.0/node_modules/@noble/ed25519/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/sha2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/signing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/strkey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$hashing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/hashing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$public$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/public-key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/muxed-account.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2d$med25519$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/muxed-account-med25519.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$decorated$2d$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/decorated-signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/signature.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashes"].sha512 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha512"];
const MESSAGE_PREFIX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"])("Stellar Signed Message:\n");
function isSignature(value) {
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"]) return true;
    if (typeof value !== "object" || value === null) return false;
    const ctor = value.constructor;
    if (ctor?.schema?.name !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"].schema.name) return false;
    return typeof value.toBytes === "function";
}
function toBytes(input) {
    return typeof input === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"])(input) : Uint8Array.from(input);
}
class Keypair {
    type;
    _publicKey;
    _secretSeed;
    _secretKey;
    /**
   * @param keys - at least one of keys must be provided.
   *   - `type`: public-key signature system name (currently only `ed25519` keys are supported)
   *   - `publicKey`: raw public key
   *   - `secretKey`: raw secret key (32-byte secret seed in ed25519)
   */ constructor(keys){
        if (keys.type !== "ed25519") {
            throw new Error("Invalid keys type");
        }
        this.type = keys.type;
        if ("secretKey" in keys) {
            const secretKey = toBytes(keys.secretKey);
            if (secretKey.length !== 32) {
                throw new Error("secretKey length is invalid");
            }
            this._secretSeed = secretKey;
            this._publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generate"])(secretKey);
            this._secretKey = secretKey;
            if (keys.publicKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areUint8ArraysEqual"])(this._publicKey, toBytes(keys.publicKey))) {
                throw new Error("secretKey does not match publicKey");
            }
        } else if ("publicKey" in keys) {
            this._publicKey = toBytes(keys.publicKey);
            if (this._publicKey.length !== 32) {
                throw new Error("publicKey length is invalid");
            }
        } else {
            throw new Error("At least one of publicKey or secretKey must be provided");
        }
    }
    /**
   * Creates a new `Keypair` instance from secret. This can either be secret key or secret seed depending
   * on underlying public-key signature system. Currently `Keypair` only supports ed25519.
   * @param secret - secret key (ex. `SDAK....`)
   */ static fromSecret(secret) {
        const rawSecret = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519SecretSeed(secret);
        return this.fromRawEd25519Seed(rawSecret);
    }
    /**
   * Creates a new `Keypair` object from ed25519 secret key seed raw bytes.
   *
   * @param rawSeed - raw 32-byte ed25519 secret key seed
   */ static fromRawEd25519Seed(rawSeed) {
        return new this({
            type: "ed25519",
            secretKey: rawSeed
        });
    }
    /**
   * Returns `Keypair` object representing network master key.
   * @param networkPassphrase - passphrase of the target stellar network (e.g. "Public Global Stellar Network ; September 2015")
   */ static master(networkPassphrase) {
        if (!networkPassphrase) {
            throw new Error("No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.");
        }
        return this.fromRawEd25519Seed((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$hashing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hash"])(networkPassphrase));
    }
    /**
   * Creates a new `Keypair` object from public key.
   * @param publicKey - public key (ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`)
   */ static fromPublicKey(publicKey) {
        const rawPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519PublicKey(publicKey);
        if (rawPublicKey.length !== 32) {
            throw new Error("Invalid Stellar public key");
        }
        return new this({
            type: "ed25519",
            publicKey: rawPublicKey
        });
    }
    /**
   * Create a random `Keypair` object.
   */ static random() {
        const secretKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].randomSecretKey();
        return this.fromRawEd25519Seed(secretKey);
    }
    /** Returns this public key as an xdr.AccountId. */ xdrAccountId() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$public$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicKey"].publicKeyTypeEd25519(this._publicKey);
    }
    /** Returns this public key as an xdr.PublicKey. */ xdrPublicKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$public$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicKey"].publicKeyTypeEd25519(this._publicKey);
    }
    /**
   * Creates a {@link xdr.MuxedAccount} object from the public key.
   *
   * You will get a different type of muxed account depending on whether or not
   * you pass an ID.
   *
   * @param id - stringified integer indicating the underlying muxed
   *     ID of the new account object
   */ xdrMuxedAccount(id) {
        if (typeof id !== "undefined") {
            if (typeof id !== "string") {
                throw new TypeError(`expected string for ID, got ${typeof id}`);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MuxedAccount"].keyTypeMuxedEd25519(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2d$med25519$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MuxedAccountMed25519"]({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Uint64"].fromString(id),
                ed25519: this._publicKey
            }));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MuxedAccount"].keyTypeEd25519(this._publicKey);
    }
    /**
   * Returns raw public key bytes
   */ rawPublicKey() {
        return this._publicKey;
    }
    /**
   * Returns the signature hint for this keypair.
   * The hint is the last 4 bytes of the account ID XDR representation.
   */ signatureHint() {
        const a = this.xdrAccountId().toXdr();
        return a.slice(a.length - 4);
    }
    /**
   * Returns public key associated with this `Keypair` object.
   */ publicKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519PublicKey(this._publicKey);
    }
    /**
   * Returns secret key associated with this `Keypair` object.
   *
   * The secret key is encoded in Stellar format (e.g., `SDAK....`).
   *
   * @throws if no secret key is available
   */ secret() {
        if (!this._secretSeed) {
            throw new Error("no secret key available");
        }
        if (this.type === "ed25519") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519SecretSeed(this._secretSeed);
        }
        throw new Error("Invalid Keypair type");
    }
    /**
   * Returns raw secret key bytes.
   *
   * @throws if no secret seed is available
   */ rawSecretKey() {
        if (!this._secretSeed) {
            throw new Error("no secret seed available");
        }
        return this._secretSeed;
    }
    /**
   * Returns `true` if this `Keypair` object contains secret key and can sign.
   */ canSign() {
        return !!this._secretKey;
    }
    /**
   * Signs data.
   *
   * @param data - data to sign
   * @throws if no secret key is available
   */ sign(data) {
        if (!this._secretKey) {
            throw new Error("cannot sign: no secret key available");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sign"])(data, this._secretKey);
    }
    /**
   * Verifies if `signature` for `data` is valid.
   *
   * A well-formed signature that doesn't match returns `false`; an argument of
   * an unaccepted type throws, because reporting it as an invalid signature
   * would be indistinguishable from a forgery.
   *
   * @param data - signed data
   * @param signature - signature to verify, either raw bytes or the
   *    `xdr.Signature` wrapper that `DecoratedSignature.signature` holds
   * @throws a `TypeError` if `data` is not a `Uint8Array`, or if `signature` is
   *    neither a `Uint8Array` nor an `xdr.Signature` — a hex/base64 string, a
   *    plain array of byte values, or the `xdr.DecoratedSignature` that
   *    `tx.signatures[0]` holds is rejected rather than reported as an invalid
   *    signature.
   */ verify(data, signature) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUint8Array"])(data)) {
            throw new TypeError(`expected Uint8Array for data, got ${typeof data}`);
        }
        const signatureBytes = isSignature(signature) ? signature.toBytes() : signature;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUint8Array"])(signatureBytes)) {
            throw new TypeError(`expected Uint8Array or xdr.Signature for signature, got ${typeof signature}`);
        }
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$signing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"])(data, signatureBytes, this._publicKey);
        } catch  {
            return false;
        }
    }
    /**
   * Signs an arbitrary message per SEP-53.
   *
   * The message is UTF-8 encoded (if a string), prefixed with the fixed
   * `"Stellar Signed Message:\n"` marker, hashed with SHA-256, and that hash is
   * signed with this keypair's ed25519 secret key.
   *
   * @param message - the message to sign (a UTF-8 string or raw bytes)
   * @returns the 64-byte ed25519 signature
   * @throws an `Error` if no secret key is available, or a `TypeError` if
   *    `message` is neither a string nor a `Uint8Array`
   * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
   */ signMessage(message) {
        return this.sign(this._hashMessage(message));
    }
    /**
   * Verifies a SEP-53 signed message against this keypair's public key.
   *
   * @param message - the original message (a UTF-8 string or raw bytes)
   * @param signature - the 64-byte signature to verify, either raw bytes or an
   *    `xdr.Signature` wrapper
   * @returns `true` if `signature` is valid for `message` and this key
   * @throws a `TypeError` if `message` is neither a string nor a `Uint8Array`,
   *    or if `signature` is neither a `Uint8Array` nor an `xdr.Signature` (e.g.
   *    a hex/base64 signature string): an unaccepted type is rejected rather
   *    than reported as an invalid signature.
   * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
   */ verifyMessage(message, signature) {
        return this.verify(this._hashMessage(message), signature);
    }
    /**
   * Computes the SEP-53 message hash:
   * `SHA-256("Stellar Signed Message:\n" + message)`.
   */ _hashMessage(message) {
        if (typeof message !== "string" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUint8Array"])(message)) {
            throw new TypeError(`expected string or Uint8Array for message, got ${typeof message}`);
        }
        const messageBytes = typeof message === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"])(message) : message;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$hashing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concatUint8Arrays"])([
            MESSAGE_PREFIX,
            messageBytes
        ]));
    }
    /**
   * Returns the decorated signature (hint+sig) for arbitrary data.
   *
   * The returned structure can be added directly to a transaction envelope.
   *
   * @param data - arbitrary data to sign
   *
   * @see TransactionBase.addDecoratedSignature
   */ signDecorated(data) {
        const signature = this.sign(data);
        const hint = this.signatureHint();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$decorated$2d$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DecoratedSignature"]({
            hint,
            signature
        });
    }
    /**
   * Returns the raw decorated signature (hint+sig) for a signed payload signer.
   *
   *  The hint is defined as the last 4 bytes of the signer key XORed with last
   *  4 bytes of the payload (zero-left-padded if necessary).
   *
   * @param data - data to both sign and treat as the payload
   *
   * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
   * @see TransactionBase.addDecoratedSignature
   */ signPayloadDecorated(data) {
        const signature = this.sign(data);
        const keyHint = this.signatureHint();
        const hint = new Uint8Array(4);
        hint.set(data.slice(-4), 0);
        for(let i = 0; i < hint.length; i++){
            hint[i] = hint[i] ^ keyHint[i];
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$decorated$2d$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DecoratedSignature"]({
            hint,
            signature
        });
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/signing.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generate",
    ()=>generate,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ed25519@3.2.0/node_modules/@noble/ed25519/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/sha2.js [app-route] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashes"].sha512 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha512"];
function generate(secretKey) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPublicKey"](secretKey);
}
function sign(data, rawSecret) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sign"](data, rawSecret);
}
function verify(data, signature, rawPublicKey) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ed25519$40$3$2e$2$2e$0$2f$node_modules$2f40$noble$2f$ed25519$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"](signature, data, rawPublicKey, {
        zip215: false
    });
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/strkey.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrKey",
    ()=>StrKey,
    "decodeCheck",
    ()=>decodeCheck,
    "encodeCheck",
    ()=>encodeCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/base32.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$checksum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/util/checksum.js [app-route] (ecmascript)");
;
;
;
const versionBytes = {
    ed25519PublicKey: 6 << 3,
    // G (when encoded in base32)
    ed25519SecretSeed: 18 << 3,
    // S
    med25519PublicKey: 12 << 3,
    // M
    preAuthTx: 19 << 3,
    // T
    sha256Hash: 23 << 3,
    // X
    signedPayload: 15 << 3,
    // P
    contract: 2 << 3,
    // C
    liquidityPool: 11 << 3,
    // L
    claimableBalance: 1 << 3
};
const strkeyTypes = {
    G: "ed25519PublicKey",
    S: "ed25519SecretSeed",
    M: "med25519PublicKey",
    T: "preAuthTx",
    X: "sha256Hash",
    P: "signedPayload",
    C: "contract",
    L: "liquidityPool",
    B: "claimableBalance"
};
function hasVersionByteName(versionByteName) {
    return Object.prototype.hasOwnProperty.call(versionBytes, versionByteName);
}
function encodedLengthRange(name) {
    switch(name){
        case "ed25519PublicKey":
        case "ed25519SecretSeed":
        case "preAuthTx":
        case "sha256Hash":
        case "contract":
        case "liquidityPool":
            return [
                56,
                56
            ];
        case "claimableBalance":
            return [
                58,
                58
            ];
        case "med25519PublicKey":
            return [
                69,
                69
            ];
        case "signedPayload":
            return [
                56,
                165
            ];
    }
}
function hasValidStrkeyFormat(versionByteName, encoded) {
    if (!hasVersionByteName(versionByteName)) {
        return false;
    }
    const [minLen, maxLen] = encodedLengthRange(versionByteName);
    return encoded.length >= minLen && encoded.length <= maxLen;
}
function strkeyFormatError(versionByteName, encoded) {
    if (!hasVersionByteName(versionByteName)) {
        return new Error(`${versionByteName} is not a valid version byte name. Expected one of ${Object.keys(versionBytes).join(", ")}`);
    }
    const [minLen, maxLen] = encodedLengthRange(versionByteName);
    return new Error(`invalid encoded string length: expected ${minLen === maxLen ? minLen : `${minLen}-${maxLen}`}, got ${encoded.length}`);
}
function assertSignedPayloadFraming(data) {
    if (data.length < 32 + 4) {
        throw new Error("signed payload: too short to carry a payload length");
    }
    const declared = new DataView(data.buffer, data.byteOffset, data.byteLength).getUint32(32);
    if (declared < 1 || declared > 64) {
        throw new Error(`signed payload: declared length ${declared} outside 1-64`);
    }
    const framed = 32 + 4 + Math.ceil(declared / 4) * 4;
    if (data.length !== framed) {
        throw new Error(`signed payload: declared length ${declared} needs ${framed} bytes, got ${data.length}`);
    }
    for(let i = 32 + 4 + declared; i < data.length; i++){
        if (data[i] !== 0) {
            throw new Error("signed payload: non-zero padding");
        }
    }
}
function assertClaimableBalanceDiscriminant(data) {
    if (data[0] !== 0) {
        throw new Error(`claimable balance: unknown discriminant ${data[0]}, expected 0 (CLAIMABLE_BALANCE_ID_TYPE_V0)`);
    }
}
class StrKey {
    static types = strkeyTypes;
    /**
   * Encodes `data` to strkey ed25519 public key.
   *
   * @param data - raw data to encode
   */ static encodeEd25519PublicKey(data) {
        return encodeCheck("ed25519PublicKey", data);
    }
    /**
   * Decodes strkey ed25519 public key to raw data.
   *
   * If the parameter is a muxed account key ("M..."), this will only encode it
   * as a basic Ed25519 key (as if in "G..." format).
   *
   * @param data - "G..." (or "M...") key representation to decode
   */ static decodeEd25519PublicKey(data) {
        return decodeCheck("ed25519PublicKey", data);
    }
    /**
   * Returns true if the given Stellar public key is a valid ed25519 public key.
   *
   * @param publicKey - public key to check
   */ static isValidEd25519PublicKey(publicKey) {
        return isValid("ed25519PublicKey", publicKey);
    }
    /**
   * Encodes data to strkey ed25519 seed.
   *
   * @param data - data to encode
   */ static encodeEd25519SecretSeed(data) {
        return encodeCheck("ed25519SecretSeed", data);
    }
    /**
   * Decodes strkey ed25519 seed to raw data.
   *
   * @param address - data to decode
   */ static decodeEd25519SecretSeed(address) {
        return decodeCheck("ed25519SecretSeed", address);
    }
    /**
   * Returns true if the given Stellar secret key is a valid ed25519 secret seed.
   *
   * @param seed - seed to check
   */ static isValidEd25519SecretSeed(seed) {
        return isValid("ed25519SecretSeed", seed);
    }
    /**
   * Encodes data to strkey med25519 public key.
   *
   * @param data - data to encode
   */ static encodeMed25519PublicKey(data) {
        return encodeCheck("med25519PublicKey", data);
    }
    /**
   * Decodes strkey med25519 public key to raw data.
   *
   * @param address - data to decode
   */ static decodeMed25519PublicKey(address) {
        return decodeCheck("med25519PublicKey", address);
    }
    /**
   * Returns true if the given Stellar public key is a valid med25519 public key.
   *
   * @param publicKey - public key to check
   */ static isValidMed25519PublicKey(publicKey) {
        return isValid("med25519PublicKey", publicKey);
    }
    /**
   * Encodes data to strkey preAuthTx.
   *
   * @param data - data to encode
   */ static encodePreAuthTx(data) {
        return encodeCheck("preAuthTx", data);
    }
    /**
   * Decodes strkey PreAuthTx to raw data.
   *
   * @param address - data to decode
   */ static decodePreAuthTx(address) {
        return decodeCheck("preAuthTx", address);
    }
    /**
   * Encodes data to strkey sha256 hash.
   *
   * @param data - data to encode
   */ static encodeSha256Hash(data) {
        return encodeCheck("sha256Hash", data);
    }
    /**
   * Decodes strkey sha256 hash to raw data.
   *
   * @param address - data to decode
   */ static decodeSha256Hash(address) {
        return decodeCheck("sha256Hash", address);
    }
    /**
   * Encodes raw data to strkey signed payload (P...).
   *
   * @param data - data to encode
   */ static encodeSignedPayload(data) {
        return encodeCheck("signedPayload", data);
    }
    /**
   * Decodes strkey signed payload (P...) to raw data.
   *
   * @param address - address to decode
   */ static decodeSignedPayload(address) {
        return decodeCheck("signedPayload", address);
    }
    /**
   * Checks validity of alleged signed payload (P...) strkey address.
   *
   * @param address - signer key to check
   */ static isValidSignedPayload(address) {
        return isValid("signedPayload", address);
    }
    /**
   * Encodes raw data to strkey contract (C...).
   *
   * @param data - data to encode
   */ static encodeContract(data) {
        return encodeCheck("contract", data);
    }
    /**
   * Decodes strkey contract (C...) to raw data.
   *
   * @param address - address to decode
   */ static decodeContract(address) {
        return decodeCheck("contract", address);
    }
    /**
   * Checks validity of alleged contract (C...) strkey address.
   *
   * @param address - signer key to check
   */ static isValidContract(address) {
        return isValid("contract", address);
    }
    /**
   * Encodes raw data to strkey claimable balance (B...).
   *
   * @param data - data to encode
   */ static encodeClaimableBalance(data) {
        return encodeCheck("claimableBalance", data);
    }
    /**
   * Decodes strkey claimable balance (B...) to raw data.
   *
   * @param address - balance to decode
   */ static decodeClaimableBalance(address) {
        return decodeCheck("claimableBalance", address);
    }
    /**
   * Checks validity of alleged claimable balance (B...) strkey address.
   *
   * @param address - balance to check
   */ static isValidClaimableBalance(address) {
        return isValid("claimableBalance", address);
    }
    /**
   * Encodes raw data to strkey liquidity pool (L...).
   *
   * @param data - data to encode
   */ static encodeLiquidityPool(data) {
        return encodeCheck("liquidityPool", data);
    }
    /**
   * Decodes strkey liquidity pool (L...) to raw data.
   *
   * @param address - address to decode
   */ static decodeLiquidityPool(address) {
        return decodeCheck("liquidityPool", address);
    }
    /**
   * Checks validity of alleged liquidity pool (L...) strkey address.
   *
   * @param address - pool to check
   */ static isValidLiquidityPool(address) {
        return isValid("liquidityPool", address);
    }
    /**
   * Returns the strkey type based on the prefix of the given strkey address,
   * or undefined if the prefix is invalid.
   *
   * @param address - the strkey address to check
   */ static getVersionByteForPrefix(address) {
        if (address.length < 1) {
            return void 0;
        }
        const prefix = address[0];
        return strkeyTypes[prefix];
    }
}
function isValid(versionByteName, encoded) {
    if (typeof encoded !== "string") {
        return false;
    }
    if (!hasValidStrkeyFormat(versionByteName, encoded)) {
        return false;
    }
    if (strkeyTypes[encoded[0]] !== versionByteName) {
        return false;
    }
    let decoded;
    try {
        decoded = decodeCheck(versionByteName, encoded);
    } catch  {
        return false;
    }
    switch(versionByteName){
        case "ed25519PublicKey":
        // falls through
        case "ed25519SecretSeed":
        // falls through
        case "preAuthTx":
        // falls through
        case "sha256Hash":
        // falls through
        case "contract":
        case "liquidityPool":
            return decoded.length === 32;
        case "claimableBalance":
            return decoded.length === 32 + 1;
        // +1 byte for discriminant
        case "med25519PublicKey":
            return decoded.length === 40;
        // +8 bytes for the ID
        case "signedPayload":
            return true;
        default:
            return false;
    }
}
function decodeCheck(versionByteName, encoded) {
    if (typeof encoded !== "string") {
        throw new TypeError("encoded argument must be of type String");
    }
    if (!hasValidStrkeyFormat(versionByteName, encoded)) {
        throw strkeyFormatError(versionByteName, encoded);
    }
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromBase32"])(encoded, {
        padding: false
    });
    const versionByte = decoded[0];
    const payload = decoded.slice(0, -2);
    const data = payload.slice(1);
    const checksum = decoded.slice(-2);
    if (encoded !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase32"])(decoded)) {
        throw new Error("invalid encoded string");
    }
    const expectedVersion = versionBytes[versionByteName];
    if (versionByte !== expectedVersion) {
        throw new Error(`invalid version byte. expected ${expectedVersion}, got ${versionByte}`);
    }
    const expectedChecksum = calculateChecksum(payload);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$checksum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyChecksum"])(expectedChecksum, checksum)) {
        throw new Error(`invalid checksum`);
    }
    if (versionByteName === "signedPayload") {
        assertSignedPayloadFraming(data);
    }
    if (versionByteName === "claimableBalance") {
        assertClaimableBalanceDiscriminant(data);
    }
    return data;
}
function encodeCheck(versionByteName, data) {
    if (data === null || data === void 0) {
        throw new Error("cannot encode null data");
    }
    if (!hasVersionByteName(versionByteName)) {
        throw new Error(`${versionByteName} is not a valid version byte name. Expected one of ${Object.keys(versionBytes).join(", ")}`);
    }
    const versionByte = versionBytes[versionByteName];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concatUint8Arrays"])([
        Uint8Array.of(versionByte),
        data
    ]);
    const unencoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concatUint8Arrays"])([
        payload,
        calculateChecksum(payload)
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase32"])(unencoded);
}
function calculateChecksum(payload) {
    const crcTable = [
        0,
        4129,
        8258,
        12387,
        16516,
        20645,
        24774,
        28903,
        33032,
        37161,
        41290,
        45419,
        49548,
        53677,
        57806,
        61935,
        4657,
        528,
        12915,
        8786,
        21173,
        17044,
        29431,
        25302,
        37689,
        33560,
        45947,
        41818,
        54205,
        50076,
        62463,
        58334,
        9314,
        13379,
        1056,
        5121,
        25830,
        29895,
        17572,
        21637,
        42346,
        46411,
        34088,
        38153,
        58862,
        62927,
        50604,
        54669,
        13907,
        9842,
        5649,
        1584,
        30423,
        26358,
        22165,
        18100,
        46939,
        42874,
        38681,
        34616,
        63455,
        59390,
        55197,
        51132,
        18628,
        22757,
        26758,
        30887,
        2112,
        6241,
        10242,
        14371,
        51660,
        55789,
        59790,
        63919,
        35144,
        39273,
        43274,
        47403,
        23285,
        19156,
        31415,
        27286,
        6769,
        2640,
        14899,
        10770,
        56317,
        52188,
        64447,
        60318,
        39801,
        35672,
        47931,
        43802,
        27814,
        31879,
        19684,
        23749,
        11298,
        15363,
        3168,
        7233,
        60846,
        64911,
        52716,
        56781,
        44330,
        48395,
        36200,
        40265,
        32407,
        28342,
        24277,
        20212,
        15891,
        11826,
        7761,
        3696,
        65439,
        61374,
        57309,
        53244,
        48923,
        44858,
        40793,
        36728,
        37256,
        33193,
        45514,
        41451,
        53516,
        49453,
        61774,
        57711,
        4224,
        161,
        12482,
        8419,
        20484,
        16421,
        28742,
        24679,
        33721,
        37784,
        41979,
        46042,
        49981,
        54044,
        58239,
        62302,
        689,
        4752,
        8947,
        13010,
        16949,
        21012,
        25207,
        29270,
        46570,
        42443,
        38312,
        34185,
        62830,
        58703,
        54572,
        50445,
        13538,
        9411,
        5280,
        1153,
        29798,
        25671,
        21540,
        17413,
        42971,
        47098,
        34713,
        38840,
        59231,
        63358,
        50973,
        55100,
        9939,
        14066,
        1681,
        5808,
        26199,
        30326,
        17941,
        22068,
        55628,
        51565,
        63758,
        59695,
        39368,
        35305,
        47498,
        43435,
        22596,
        18533,
        30726,
        26663,
        6336,
        2273,
        14466,
        10403,
        52093,
        56156,
        60223,
        64286,
        35833,
        39896,
        43963,
        48026,
        19061,
        23124,
        27191,
        31254,
        2801,
        6864,
        10931,
        14994,
        64814,
        60687,
        56684,
        52557,
        48554,
        44427,
        40424,
        36297,
        31782,
        27655,
        23652,
        19525,
        15522,
        11395,
        7392,
        3265,
        61215,
        65342,
        53085,
        57212,
        44955,
        49082,
        36825,
        40952,
        28183,
        32310,
        20053,
        24180,
        11923,
        16050,
        3793,
        7920
    ];
    let crc16 = 0;
    for(let i = 0; i < payload.length; i += 1){
        const byte = payload[i];
        if (byte === void 0) {
            continue;
        }
        const lookupIndex = crc16 >> 8 ^ byte;
        crc16 = crc16 << 8 ^ (crcTable[lookupIndex] ?? 0);
        crc16 &= 65535;
    }
    const checksum = new Uint8Array(2);
    checksum[0] = crc16 & 255;
    checksum[1] = crc16 >> 8 & 255;
    return checksum;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/util/base64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64
]);
function base64ToUint8Array(base64) {
    if (typeof base64 !== "string") {
        throw new TypeError(`Expected \`string\`, got \`${typeof base64}\``);
    }
    const normalized = base64.includes("-") || base64.includes("_") ? base64.replace(/-/g, "+").replace(/_/g, "/") : base64;
    const binary = atob(normalized);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i += 1){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
const ENCODE_CHUNK_SIZE = 65535;
function uint8ArrayToBase64(bytes) {
    if (!(bytes instanceof Uint8Array)) {
        throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof bytes}\``);
    }
    let base64 = "";
    for(let i = 0; i < bytes.length; i += ENCODE_CHUNK_SIZE){
        const chunk = bytes.subarray(i, i + ENCODE_CHUNK_SIZE);
        base64 += btoa(String.fromCharCode.apply(null, chunk));
    }
    return base64;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/util/checksum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyChecksum",
    ()=>verifyChecksum
]);
function verifyChecksum(expected, actual) {
    if (expected.length !== actual.length) {
        return false;
    }
    if (expected.length === 0) {
        return true;
    }
    for(let i = 0; i < expected.length; i += 1){
        if (expected[i] !== actual[i]) {
            return false;
        }
    }
    return true;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/crypto-key-type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CryptoKeyType",
    ()=>CryptoKeyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/enum-value.js [app-route] (ecmascript)");
;
;
class CryptoKeyType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EnumValue"] {
    static keyTypeEd25519 = new CryptoKeyType("keyTypeEd25519", 0);
    static keyTypePreAuthTx = new CryptoKeyType("keyTypePreAuthTx", 1);
    static keyTypeHashX = new CryptoKeyType("keyTypeHashX", 2);
    static keyTypeEd25519SignedPayload = new CryptoKeyType("keyTypeEd25519SignedPayload", 3);
    static keyTypeMuxedEd25519 = new CryptoKeyType("keyTypeMuxedEd25519", 256);
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMemberPrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"])("CryptoKeyType", {
        keyTypeEd25519: 0,
        keyTypePreAuthTx: 1,
        keyTypeHashX: 2,
        keyTypeEd25519SignedPayload: 3,
        keyTypeMuxedEd25519: 256
    }), "keyType");
    static fromValue(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumFromValue"])("CryptoKeyType", CryptoKeyType.schema, CryptoKeyType, value);
    }
    static fromName(name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumFromName"])("CryptoKeyType", CryptoKeyType, name);
    }
    static fromXdrObject(wire) {
        return CryptoKeyType.fromValue(wire);
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/decorated-signature.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecoratedSignature",
    ()=>DecoratedSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2d$hint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/signature-hint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/signature.js [app-route] (ecmascript)");
;
;
;
;
class DecoratedSignature extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    hint;
    signature;
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["struct"])("DecoratedSignature", {
        hint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2d$hint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureHint"].schema,
        signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"].schema
    });
    constructor(input){
        super();
        this.hint = input.hint instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2d$hint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureHint"] ? input.hint : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2d$hint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureHint"](input.hint);
        this.signature = input.signature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"] ? input.signature : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"](input.signature);
    }
    toXdrObject() {
        return {
            hint: this.hint.toXdrObject(),
            signature: this.signature.toXdrObject()
        };
    }
    static fromXdrObject(wire) {
        return new DecoratedSignature({
            hint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2d$hint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureHint"].fromXdrObject(wire.hint),
            signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signature"].fromXdrObject(wire.signature)
        });
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/muxed-account-med25519.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuxedAccountMed25519",
    ()=>MuxedAccountMed25519
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/uint256-bytes.js [app-route] (ecmascript)");
;
;
;
class MuxedAccountMed25519 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    id;
    ed25519;
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["struct"])("MuxedAccountMed25519", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint64"])(),
        ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].schema
    });
    constructor(input){
        super();
        this.id = input.id;
        this.ed25519 = input.ed25519 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"] ? input.ed25519 : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"](input.ed25519);
    }
    toXdrObject() {
        return {
            id: this.id,
            ed25519: this.ed25519.toXdrObject()
        };
    }
    static fromXdrObject(wire) {
        return new MuxedAccountMed25519({
            id: wire.id,
            ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].fromXdrObject(wire.ed25519)
        });
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/muxed-account.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuxedAccount",
    ()=>MuxedAccount,
    "MuxedAccountEd25519",
    ()=>MuxedAccountEd25519,
    "MuxedAccountMuxedEd25519",
    ()=>MuxedAccountMuxedEd25519
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$crypto$2d$key$2d$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/crypto-key-type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/uint256-bytes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2d$med25519$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/muxed-account-med25519.js [app-route] (ecmascript)");
;
;
;
;
;
class MuxedAccountBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    constructor(){
        super();
        if (new.target === MuxedAccountBase) {
            throw new TypeError("new xdr.MuxedAccount(...) is not supported: XDR unions are built from per-variant factories. Call xdr.MuxedAccount.keyTypeEd25519(...) (or another arm factory) instead.");
        }
    }
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["union"])("MuxedAccount", {
        switchOn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$crypto$2d$key$2d$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoKeyType"].schema,
        cases: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["case"])("keyTypeEd25519", 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["field"])("ed25519", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].schema)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["case"])("keyTypeMuxedEd25519", 256, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["field"])("med25519", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2d$med25519$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MuxedAccountMed25519"].schema))
        ]
    });
    static keyTypeEd25519(ed25519) {
        return new MuxedAccountEd25519(ed25519);
    }
    static keyTypeMuxedEd25519(med25519) {
        return new MuxedAccountMuxedEd25519(med25519);
    }
    static fromXdrObject(wire) {
        switch(wire.type){
            case 0:
                return new MuxedAccountEd25519(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].fromXdrObject(wire.ed25519));
            case 256:
                return new MuxedAccountMuxedEd25519(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$muxed$2d$account$2d$med25519$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MuxedAccountMed25519"].fromXdrObject(wire.med25519));
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`MuxedAccount: unknown type ${wire.type}`);
    }
    /**
   * Type guard narrowing an unknown value to a concrete MuxedAccount variant.
   * Use this instead of `instanceof MuxedAccount`: the exported `MuxedAccount` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `MuxedAccount.is(x)` narrows to the union.
   */ static is(value) {
        return value instanceof MuxedAccountBase;
    }
}
class MuxedAccountEd25519 extends MuxedAccountBase {
    type = "keyTypeEd25519";
    ed25519;
    constructor(ed25519){
        super();
        this.ed25519 = ed25519 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"] ? ed25519 : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"](ed25519);
    }
    get value() {
        return this.ed25519;
    }
    toXdrObject() {
        return {
            type: 0,
            ed25519: this.ed25519.toXdrObject()
        };
    }
}
class MuxedAccountMuxedEd25519 extends MuxedAccountBase {
    type = "keyTypeMuxedEd25519";
    med25519;
    constructor(med25519){
        super();
        this.med25519 = med25519;
    }
    get value() {
        return this.med25519;
    }
    toXdrObject() {
        return {
            type: 256,
            med25519: this.med25519.toXdrObject()
        };
    }
}
const MuxedAccount = MuxedAccountBase;
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/public-key-type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicKeyType",
    ()=>PublicKeyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/enum-value.js [app-route] (ecmascript)");
;
;
class PublicKeyType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EnumValue"] {
    static publicKeyTypeEd25519 = new PublicKeyType("publicKeyTypeEd25519", 0);
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"])("PublicKeyType", {
        publicKeyTypeEd25519: 0
    });
    static fromValue(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumFromValue"])("PublicKeyType", PublicKeyType.schema, PublicKeyType, value);
    }
    static fromName(name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$enum$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumFromName"])("PublicKeyType", PublicKeyType, name);
    }
    static fromXdrObject(wire) {
        return PublicKeyType.fromValue(wire);
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/public-key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicKey",
    ()=>PublicKey,
    "PublicKeyEd25519",
    ()=>PublicKeyEd25519
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$public$2d$key$2d$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/public-key-type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/uint256-bytes.js [app-route] (ecmascript)");
;
;
;
;
class PublicKeyBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    constructor(){
        super();
        if (new.target === PublicKeyBase) {
            throw new TypeError("new xdr.PublicKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PublicKey.publicKeyTypeEd25519(...) (or another arm factory) instead.");
        }
    }
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["union"])("PublicKey", {
        switchOn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$public$2d$key$2d$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicKeyType"].schema,
        cases: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["case"])("publicKeyTypeEd25519", 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["field"])("ed25519", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].schema))
        ]
    });
    static publicKeyTypeEd25519(ed25519) {
        return new PublicKeyEd25519(ed25519);
    }
    static fromXdrObject(wire) {
        switch(wire.type){
            case 0:
                return new PublicKeyEd25519(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"].fromXdrObject(wire.ed25519));
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`PublicKey: unknown type ${wire.type}`);
    }
    /**
   * Type guard narrowing an unknown value to a concrete PublicKey variant.
   * Use this instead of `instanceof PublicKey`: the exported `PublicKey` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PublicKey.is(x)` narrows to the union.
   */ static is(value) {
        return value instanceof PublicKeyBase;
    }
}
class PublicKeyEd25519 extends PublicKeyBase {
    type = "publicKeyTypeEd25519";
    ed25519;
    constructor(ed25519){
        super();
        this.ed25519 = ed25519 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"] ? ed25519 : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$generated$2f$uint256$2d$bytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Uint256Bytes"](ed25519);
    }
    get value() {
        return this.ed25519;
    }
    toXdrObject() {
        return {
            type: 0,
            ed25519: this.ed25519.toXdrObject()
        };
    }
}
const PublicKey = PublicKeyBase;
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/signature-hint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureHint",
    ()=>SignatureHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bytes-value.js [app-route] (ecmascript)");
;
;
class SignatureHint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BytesValue"] {
    static byteLength = 4;
    static encoding = "hex";
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["opaque"])(4, "SignatureHint");
    static fromXdrObject(wire) {
        return new SignatureHint(wire);
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/signature.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Signature",
    ()=>Signature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bytes-value.js [app-route] (ecmascript)");
;
;
class Signature extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BytesValue"] {
    static encoding = "hex";
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varOpaque"])(64, "Signature");
    static fromXdrObject(wire) {
        return new Signature(wire);
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/generated/uint256-bytes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Uint256Bytes",
    ()=>Uint256Bytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bytes-value.js [app-route] (ecmascript)");
;
;
class Uint256Bytes extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bytes$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BytesValue"] {
    static byteLength = 32;
    static encoding = "hex";
    static schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["opaque"])(32, "Uint256Bytes");
    static fromXdrObject(wire) {
        return new Uint256Bytes(wire);
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Int32",
    ()=>Int32,
    "Int64",
    ()=>Int64,
    "Uint32",
    ()=>Uint32,
    "Uint64",
    ()=>Uint64
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bigint-parts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Int64 = makeBigIntShim(true, 64);
const Uint64 = makeBigIntShim(false, 64);
const Int32 = makeIntShim(true, 32);
const Uint32 = makeIntShim(false, 32);
function makeBigIntShim(signed, bits) {
    const [min, max] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intRange"])(signed, bits);
    const name = signed ? `Int${bits}` : `Uint${bits}`;
    function Shim(v) {
        let value;
        if (Array.isArray(v) && v.length === 2) {
            const lo = BigInt.asUintN(32, BigInt(v[0]));
            const hi = BigInt(v[1]);
            const combined = hi << 32n | lo;
            value = signed ? BigInt.asIntN(64, combined) : BigInt.asUintN(64, combined);
        } else {
            value = typeof v === "bigint" ? v : BigInt(v);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, signed, bits, name);
        return value;
    }
    Shim.fromXdr = (input, format = "raw")=>{
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBytes"])(input, format);
        if (bytes.length !== 8) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}.fromXdr: expected exactly 8 bytes, got ${bytes.length}`);
        }
        let value = 0n;
        for (const byte of bytes){
            value = (value << 8n) + BigInt(byte);
        }
        return signed ? BigInt.asIntN(bits, value) : BigInt.asUintN(bits, value);
    };
    Shim.fromString = (s)=>{
        const value = BigInt(s);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, signed, bits, name);
        return value;
    };
    Shim.MAX_VALUE = max;
    Shim.MIN_VALUE = min;
    Object.defineProperty(Shim, "name", {
        value: name
    });
    return new Proxy(Shim, {
        construct (_target, args) {
            Shim(args[0]);
            throw new TypeError(`new xdr.${name}(...) is not supported: XDR ${name.toLowerCase()} values are native bigints. Call xdr.${name}(value) (no \`new\`) or pass a bigint literal instead.`);
        }
    });
}
function makeIntShim(signed, bits) {
    const max = signed ? 2 ** (bits - 1) - 1 : 2 ** bits - 1;
    const min = signed ? -2147483648 : 0;
    const name = signed ? `Int${bits}` : `Uint${bits}`;
    function Shim(v) {
        const value = typeof v === "number" ? v : Number(v);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertIntFits"])(value, signed, bits, name);
        return value;
    }
    Shim.fromXdr = (input, format = "raw")=>{
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBytes"])(input, format);
        if (bytes.length !== 4) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}.fromXdr: expected exactly 4 bytes, got ${bytes.length}`);
        }
        const value = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3];
        return signed ? value : value >>> 0;
    };
    Shim.fromString = (s)=>{
        const value = Number(s);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertIntFits"])(value, signed, bits, name);
        return value;
    };
    Shim.MAX_VALUE = max;
    Shim.MIN_VALUE = min;
    Object.defineProperty(Shim, "name", {
        value: name
    });
    return new Proxy(Shim, {
        construct (_target, args) {
            Shim(args[0]);
            throw new TypeError(`new xdr.${name}(...) is not supported: XDR ${name.toLowerCase()} values are native numbers. Call xdr.${name}(value) (no \`new\`) or pass a number literal instead.`);
        }
    });
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bigint-parts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertBigIntFits",
    ()=>assertBigIntFits,
    "assertDecimalDigitBudget",
    ()=>assertDecimalDigitBudget,
    "assertDecimalString",
    ()=>assertDecimalString,
    "assertIntFits",
    ()=>assertIntFits,
    "bigIntTo128Parts",
    ()=>bigIntTo128Parts,
    "bigIntTo256Parts",
    ()=>bigIntTo256Parts,
    "intRange",
    ()=>intRange,
    "partsTo128BigInt",
    ()=>partsTo128BigInt,
    "partsTo256BigInt",
    ()=>partsTo256BigInt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
;
const MASK_64 = (1n << 64n) - 1n;
const LOG10_OF_2 = 0.30103;
const DIGIT_BUDGET_SLACK = 2;
const MASK_HI_SIGNED_128 = 1n << 127n;
const MASK_HI_SIGNED_256 = 1n << 255n;
function intRange(signed, bits) {
    const width = BigInt(bits);
    if (signed) {
        const limit = 1n << width - 1n;
        return [
            -limit,
            limit - 1n
        ];
    }
    return [
        0n,
        (1n << width) - 1n
    ];
}
function assertBigIntFits(value, signed, bits, name) {
    const [min, max] = intRange(signed, bits);
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}: value ${value} out of range [${min}, ${max}]`);
    }
}
function assertDecimalDigitBudget(s, bits, name) {
    const maxDigits = Math.ceil(bits * LOG10_OF_2) + DIGIT_BUDGET_SLACK;
    if (s.length > maxDigits) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}: decimal string length ${s.length} exceeds the ${maxDigits}-character budget for a ${bits}-bit integer`);
    }
}
const DECIMAL_INTEGER = /^[+-]?[0-9]+$/;
function assertDecimalString(s, name) {
    if (!DECIMAL_INTEGER.test(s)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}: "${s}" is not a decimal integer string`);
    }
}
function assertIntFits(value, signed, bits, name) {
    if (!Number.isInteger(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}: value ${value} is not an integer`);
    }
    const max = signed ? 2 ** (bits - 1) - 1 : 2 ** bits - 1;
    const min = signed ? -2147483648 : 0;
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${name}: value ${value} out of range [${min}, ${max}]`);
    }
}
function bigIntTo128Parts(value, signed) {
    const unsigned = signed && value < 0n ? value + MASK_HI_SIGNED_128 * 2n : value;
    const lo = unsigned & MASK_64;
    const hiBits = unsigned >> 64n & MASK_64;
    const hi = signed ? toSigned64(hiBits) : hiBits;
    return {
        hi,
        lo
    };
}
function partsTo128BigInt(parts, signed) {
    const hi = signed ? to64Bits(parts.hi) : parts.hi;
    const combined = hi << 64n | parts.lo & MASK_64;
    return signed && combined >= MASK_HI_SIGNED_128 ? combined - MASK_HI_SIGNED_128 * 2n : combined;
}
function bigIntTo256Parts(value, signed) {
    const unsigned = signed && value < 0n ? value + MASK_HI_SIGNED_256 * 2n : value;
    const loLo = unsigned & MASK_64;
    const loHi = unsigned >> 64n & MASK_64;
    const hiLo = unsigned >> 128n & MASK_64;
    const hiHiBits = unsigned >> 192n & MASK_64;
    const hiHi = signed ? toSigned64(hiHiBits) : hiHiBits;
    return {
        hiHi,
        hiLo,
        loHi,
        loLo
    };
}
function partsTo256BigInt(parts, signed) {
    const hiHi = signed ? to64Bits(parts.hiHi) : parts.hiHi;
    const combined = hiHi << 192n | (parts.hiLo & MASK_64) << 128n | (parts.loHi & MASK_64) << 64n | parts.loLo & MASK_64;
    return signed && combined >= MASK_HI_SIGNED_256 ? combined - MASK_HI_SIGNED_256 * 2n : combined;
}
function toSigned64(bits) {
    return bits >= 1n << 63n ? bits - (1n << 64n) : bits;
}
function to64Bits(value) {
    return value < 0n ? value + (1n << 64n) : value;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bytes-value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BytesValue",
    ()=>BytesValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
;
;
;
function decodeBytesInput(input, encoding) {
    if (input instanceof Uint8Array) return input;
    if (encoding === "ascii") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToUint8Array"])(input);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBytes"])(input, encoding);
}
function encodeBytesOutput(bytes, encoding) {
    if (encoding === "ascii") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToString"])(bytes);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeBytes"])(bytes, encoding);
}
class BytesValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    value;
    constructor(value){
        super();
        const ctor = this.constructor;
        let bytes = decodeBytesInput(value, ctor.encoding);
        if (typeof value === "string" && ctor.padTo !== void 0 && bytes.length < ctor.padTo) {
            const padded = new Uint8Array(ctor.padTo);
            padded.set(bytes);
            bytes = padded;
        }
        if (ctor.byteLength !== void 0 && bytes.length !== ctor.byteLength) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${ctor.name}: expected ${ctor.byteLength} byte(s), got ${bytes.length}`);
        }
        this.value = bytes;
    }
    /**
   * Render the bytes in the class's declared `encoding`.
   *
   * For the XDR wire form regardless of the declared encoding, use
   * {@link XdrValue.toXdr | `toXdr("base64")`}.
   */ toString() {
        const ctor = this.constructor;
        return encodeBytesOutput(this.value, ctor.encoding);
    }
    toXdrObject() {
        return this.value;
    }
    // `toJson()` is inherited from `XdrValue` — the JSON walker dispatches
    // on schema name. With named-schema codegen for typedef-opaque aliases
    // (Hash, AssetCode4, PoolId, ContractId, …), the walker fires the
    // appropriate override; without one, falls through to the kind-based
    // default (`opaque`/`varOpaque` → hex per SEP-0051).
    toBytes() {
        return this.value;
    }
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/enum-value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnumValue",
    ()=>EnumValue,
    "enumFromName",
    ()=>enumFromName,
    "enumFromValue",
    ()=>enumFromValue,
    "withMemberPrefix",
    ()=>withMemberPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)");
;
;
class EnumValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrValue"] {
    name;
    value;
    constructor(name, value){
        super();
        this.name = name;
        this.value = value;
    }
    toXdrObject() {
        return this.value;
    }
}
function withMemberPrefix(schema, memberPrefix) {
    return Object.assign(schema, {
        memberPrefix
    });
}
function enumFromValue(className, schema, instances, value) {
    const name = schema.nameByValue.get(value);
    if (name === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${className}: unknown enum value ${value}`);
    }
    return enumFromName(className, instances, name);
}
function enumFromName(className, instances, name) {
    const instance = instances[name];
    if (!(instance instanceof EnumValue)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${className}: unknown name ${name}`);
    }
    return instance;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/json-names.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptedStructJsonKeys",
    ()=>acceptedStructJsonKeys,
    "enumJsonNames",
    ()=>enumJsonNames,
    "legacyStructFieldJsonName",
    ()=>legacyStructFieldJsonName,
    "structFieldJsonName",
    ()=>structFieldJsonName,
    "unionCaseNames",
    ()=>unionCaseNames
]);
function snakeCase(input) {
    let out = "";
    for(let i = 0; i < input.length; i += 1){
        const ch = input[i];
        const prev = i > 0 ? input[i - 1] : "";
        const next = i + 1 < input.length ? input[i + 1] : "";
        const isCamelBoundary = isUpperAscii(ch) && (isLowerAscii(prev) || isDigitAscii(prev));
        const isAcronymBoundary = isUpperAscii(ch) && isUpperAscii(prev) && isLowerAscii(next);
        if (i > 0 && (isCamelBoundary || isAcronymBoundary)) out += "_";
        out += ch.toLowerCase();
    }
    return out;
}
const RUST_KEYWORD_FIELDS = /* @__PURE__ */ new Set([
    "type",
    "ref",
    "move",
    "box",
    "self",
    "match",
    "loop",
    "fn",
    "mod",
    "in",
    "as"
]);
function structFieldJsonName(field) {
    return snakeCase(field);
}
function legacyStructFieldJsonName(field) {
    const name = snakeCase(field);
    return RUST_KEYWORD_FIELDS.has(name) ? `${name}_` : void 0;
}
const ENUM_NAME_CACHE = /* @__PURE__ */ new WeakMap();
const UNION_NAME_CACHE = /* @__PURE__ */ new WeakMap();
const ACCEPTED_KEY_CACHE = /* @__PURE__ */ new WeakMap();
function acceptedStructJsonKeys(entries) {
    const cached = ACCEPTED_KEY_CACHE.get(entries);
    if (cached) return cached;
    const accepted = /* @__PURE__ */ new Set();
    for (const [k] of entries){
        accepted.add(structFieldJsonName(k));
        const legacy = legacyStructFieldJsonName(k);
        if (legacy !== void 0) accepted.add(legacy);
    }
    ACCEPTED_KEY_CACHE.set(entries, accepted);
    return accepted;
}
function enumJsonNames(memberPrefix, nameByValue) {
    const cached = ENUM_NAME_CACHE.get(nameByValue);
    if (cached) return cached;
    const bySource = /* @__PURE__ */ new Map();
    const byJson = /* @__PURE__ */ new Map();
    for (const member of nameByValue.values()){
        const stripped = memberPrefix && member.startsWith(memberPrefix) ? member.slice(memberPrefix.length) : member;
        const jsonName = snakeCase(stripped);
        bySource.set(member, jsonName);
        byJson.set(jsonName, member);
    }
    const result = {
        bySource,
        byJson
    };
    ENUM_NAME_CACHE.set(nameByValue, result);
    return result;
}
function unionCaseNames(schema) {
    const cached = UNION_NAME_CACHE.get(schema);
    if (cached) return cached;
    const result = buildUnionCaseNames(schema);
    UNION_NAME_CACHE.set(schema, result);
    return result;
}
function buildUnionCaseNames(schema) {
    const switchOn = schema.switchOn;
    const bySource = /* @__PURE__ */ new Map();
    const byJson = /* @__PURE__ */ new Map();
    if (switchOn.kind === "enum" && switchOn.nameByValue) {
        const enumNames = enumJsonNames(switchOn.memberPrefix, switchOn.nameByValue);
        for (const c of schema.cases){
            const member = switchOn.nameByValue.get(c.discriminant);
            const jsonName = (member && enumNames.bySource.get(member)) ?? snakeCase(c.name);
            bySource.set(c.name, jsonName);
            byJson.set(jsonName, c.name);
        }
        return {
            bySource,
            byJson
        };
    }
    if (switchOn.kind === "int32" || switchOn.kind === "uint32") {
        for (const c of schema.cases){
            const jsonName = typeof c.discriminant === "number" ? `v${c.discriminant}` : snakeCase(c.name);
            bySource.set(c.name, jsonName);
            byJson.set(jsonName, c.name);
        }
        return {
            bySource,
            byJson
        };
    }
    for (const c of schema.cases){
        const jsonName = snakeCase(c.name);
        bySource.set(c.name, jsonName);
        byJson.set(jsonName, c.name);
    }
    return {
        bySource,
        byJson
    };
}
function isLowerAscii(ch) {
    return ch >= "a" && ch <= "z";
}
function isUpperAscii(ch) {
    return ch >= "A" && ch <= "Z";
}
function isDigitAscii(ch) {
    return ch >= "0" && ch <= "9";
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/to-json.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walkFromJson",
    ()=>walkFromJson,
    "walkToJson",
    ()=>walkToJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/json-names.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/bigint-parts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/strkey.js [app-route] (ecmascript)");
;
;
;
;
;
;
const OVERRIDES = /* @__PURE__ */ new Map();
function walkToJson(wire, schema) {
    const override = schema.name ? OVERRIDES.get(schema.name) : void 0;
    if (override) return override.toJson(wire);
    const s = schema;
    switch(s.kind){
        case "bool":
            return wire;
        case "void":
            return null;
        case "int32":
        case "uint32":
            return wire;
        case "float":
        case "double":
            return wire;
        case "int64":
        case "uint64":
            return wire.toString();
        case "string":
            return wire.toJson();
        case "opaque":
        case "varOpaque":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToHex"])(wire);
        case "enum":
            {
                const e = s;
                const name = e.nameByValue.get(wire);
                if (name === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "enum"}: unknown enum value ${String(wire)}`);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumJsonNames"])(e.memberPrefix, e.nameByValue).bySource.get(name) ?? name;
            }
        case "option":
            return wire === null ? null : walkToJson(wire, s.element);
        case "array":
        case "fixedArray":
            return wire.map((v)=>walkToJson(v, s.element));
        case "struct":
            {
                const rec = wire;
                const out = {};
                for (const [k, fieldSchema] of s.entries){
                    out[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["structFieldJsonName"])(k)] = walkToJson(rec[k], fieldSchema);
                }
                return out;
            }
        case "union":
            {
                const rec = wire;
                const disc = rec[s.switchKey];
                const matched = s.cases.find((c)=>c.discriminant === disc);
                if (matched === void 0) {
                    if (s.defaultArm !== void 0) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: default arms are not supported in JSON`);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: no case for discriminator ${String(disc)}`);
                }
                const arm = matched.arm;
                const names = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unionCaseNames"])(s);
                const jsonKey = names.bySource.get(matched.name) ?? matched.name;
                if (isFieldArm(arm)) {
                    return {
                        [jsonKey]: walkToJson(rec[arm.name], arm.schema)
                    };
                }
                return jsonKey;
            }
        case "lazy":
            return walkToJson(wire, s.getSchema());
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? schema.kind}: toJson unsupported for kind ${schema.kind}`);
    }
}
function walkFromJson(json, schema) {
    const override = schema.name ? OVERRIDES.get(schema.name) : void 0;
    if (override) return override.fromJson(json);
    const s = schema;
    switch(s.kind){
        case "bool":
            assertJsonType(json, "boolean", schema);
            return json;
        case "void":
            return void 0;
        case "int32":
        case "uint32":
            {
                assertJsonType(json, "number", schema);
                const value = json;
                const signed = s.kind === "int32";
                const min = signed ? -2147483648 : 0;
                const max = signed ? 2 ** 31 - 1 : 2 ** 32 - 1;
                if (!Number.isInteger(value) || value < min || value > max) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? s.kind}: value ${value} is not a valid ${s.kind}`);
                }
                return value;
            }
        case "float":
        case "double":
            assertJsonType(json, "number", schema);
            return json;
        case "int64":
        case "uint64":
            {
                assertJsonType(json, "string", schema);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalDigitBudget"])(json, 64, schema.name ?? s.kind);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalString"])(json, schema.name ?? s.kind);
                let value;
                try {
                    value = BigInt(json);
                } catch  {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? s.kind}: "${json}" is not a valid ${s.kind}`);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, s.kind === "int64", 64, schema.name ?? s.kind);
                return value;
            }
        case "string":
            {
                assertJsonType(json, "string", schema);
                const str = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"].fromJson(json);
                if (str.length > s.maxLength) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "string"}: length ${str.length} exceeds max ${s.maxLength}`);
                }
                return str;
            }
        case "opaque":
        case "varOpaque":
            {
                assertJsonType(json, "string", schema);
                let bytes;
                try {
                    bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToUint8Array"])(json);
                } catch  {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? s.kind}: expected a hex string`);
                }
                if (s.kind === "opaque" && bytes.length !== s.length) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "opaque"}: expected ${s.length} byte(s), got ${bytes.length}`);
                }
                if (s.kind === "varOpaque" && bytes.length > s.maxLength) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "varOpaque"}: length ${bytes.length} exceeds max ${s.maxLength}`);
                }
                return bytes;
            }
        case "enum":
            {
                const e = s;
                assertJsonType(json, "string", schema);
                const target = json;
                const names = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumJsonNames"])(e.memberPrefix, e.nameByValue);
                const sourceName = names.byJson.get(target);
                if (sourceName !== void 0) {
                    for (const [value, name] of e.nameByValue){
                        if (name === sourceName) return value;
                    }
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "enum"}: unknown enum name ${target}`);
            }
        case "option":
            return json === null ? null : walkFromJson(json, s.element);
        case "array":
            {
                if (!Array.isArray(json)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "array"}: expected JSON array, got ${typeof json}`);
                }
                if (json.length > s.maxLength) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "array"}: length ${json.length} exceeds max ${s.maxLength}`);
                }
                return json.map((v)=>walkFromJson(v, s.element));
            }
        case "fixedArray":
            {
                if (!Array.isArray(json)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "fixedArray"}: expected JSON array, got ${typeof json}`);
                }
                if (json.length !== s.length) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "fixedArray"}: expected length ${s.length}, got ${json.length}`);
                }
                return json.map((v)=>walkFromJson(v, s.element));
            }
        case "struct":
            {
                if (!isPlainObject(json)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "struct"}: expected JSON object`);
                }
                const rec = json;
                const out = {};
                const accepted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["acceptedStructJsonKeys"])(s.entries);
                for (const key of Object.keys(rec)){
                    if (!accepted.has(key)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "struct"}: unknown field ${key}`);
                    }
                }
                for (const [k, fieldSchema] of s.entries){
                    const snake = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["structFieldJsonName"])(k);
                    const legacy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["legacyStructFieldJsonName"])(k);
                    if (legacy !== void 0 && Object.hasOwn(rec, snake) && Object.hasOwn(rec, legacy)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "struct"}: field ${k} given as both ${snake} and ${legacy}`);
                    }
                    const lookupKey = Object.hasOwn(rec, snake) ? snake : legacy !== void 0 && Object.hasOwn(rec, legacy) ? legacy : void 0;
                    if (lookupKey === void 0) {
                        if (unwrapLazy(fieldSchema).kind === "option") {
                            out[k] = null;
                            continue;
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "struct"}: missing field ${snake}`);
                    }
                    out[k] = walkFromJson(rec[lookupKey], fieldSchema);
                }
                return out;
            }
        case "union":
            return unionFromJson(json, s);
        case "lazy":
            return walkFromJson(json, s.getSchema());
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? schema.kind}: fromJson unsupported for kind ${schema.kind}`);
    }
}
function unionFromJson(json, schema) {
    let jsonKey;
    let payload;
    if (typeof json === "string") {
        jsonKey = json;
    } else if (isPlainObject(json)) {
        const keys = Object.keys(json);
        if (keys.length !== 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: expected single-key object, got ${keys.length}`);
        }
        jsonKey = keys[0];
        payload = json[jsonKey];
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: expected string or single-key object`);
    }
    const names = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$json$2d$names$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unionCaseNames"])(schema);
    const sourceName = names.byJson.get(jsonKey);
    const matched = sourceName === void 0 ? void 0 : schema.cases.find((c)=>c.name === sourceName);
    if (matched === void 0) {
        if (schema.defaultArm !== void 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: default arms are not supported in JSON`);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}: unknown case ${jsonKey}`);
    }
    const arm = matched.arm;
    const discriminant = matched.discriminant;
    const out = {
        [schema.switchKey]: discriminant
    };
    if (isFieldArm(arm)) {
        if (payload === void 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}.${jsonKey}: missing arm payload`);
        }
        out[arm.name] = walkFromJson(payload, arm.schema);
    } else if (payload !== void 0 && payload !== null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? "union"}.${jsonKey}: unexpected payload for void arm`);
    }
    return out;
}
function isFieldArm(arm) {
    return typeof arm === "object" && arm !== null && "schema" in arm;
}
function unwrapLazy(schema) {
    let s = schema;
    while(s.kind === "lazy"){
        s = s.getSchema();
    }
    return s;
}
function assertJsonType(json, expected, schema) {
    if (typeof json !== expected) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${schema.name ?? schema.kind}: expected JSON ${expected}, got ${typeof json}`);
    }
}
function isPlainObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Uint8Array);
}
function asDataView(bytes) {
    return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}
function med25519ToStrkey(w) {
    const payload = new Uint8Array(40);
    payload.set(w.ed25519, 0);
    asDataView(payload).setBigUint64(32, w.id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeMed25519PublicKey(payload);
}
function med25519FromStrkey(json) {
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeMed25519PublicKey(json);
    return {
        id: asDataView(raw).getBigUint64(32),
        ed25519: raw.subarray(0, 32)
    };
}
function signedPayloadToStrkey(w) {
    const buf = new Uint8Array(32 + 4 + roundUp4(w.payload.length));
    buf.set(w.ed25519, 0);
    asDataView(buf).setUint32(32, w.payload.length);
    buf.set(w.payload, 36);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeSignedPayload(buf);
}
function signedPayloadFromStrkey(json) {
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeSignedPayload(json);
    return {
        ed25519: raw.subarray(0, 32),
        payload: raw.subarray(36, 36 + asDataView(raw).getUint32(32))
    };
}
OVERRIDES.set("PublicKey", {
    toJson (wire) {
        const w = wire;
        if (w.type !== 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`PublicKey: unsupported variant ${w.type} for JSON output`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519PublicKey(w.ed25519);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("PublicKey: expected G-strkey string");
        }
        return {
            type: 0,
            ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519PublicKey(json)
        };
    }
});
OVERRIDES.set("MuxedAccount", {
    toJson (wire) {
        const w = wire;
        if (w.type === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519PublicKey(w.ed25519);
        }
        return med25519ToStrkey(w.med25519);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("MuxedAccount: expected strkey string");
        }
        if (json.startsWith("G")) {
            return {
                type: 0,
                ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519PublicKey(json)
            };
        }
        if (json.startsWith("M")) {
            return {
                type: 256,
                med25519: med25519FromStrkey(json)
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`MuxedAccount: unsupported strkey prefix in ${json}`);
    }
});
const MED25519_OVERRIDE = {
    toJson (wire) {
        return med25519ToStrkey(wire);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("med25519 account: expected M-strkey string");
        }
        return med25519FromStrkey(json);
    }
};
OVERRIDES.set("MuxedEd25519Account", MED25519_OVERRIDE);
OVERRIDES.set("MuxedAccountMed25519", MED25519_OVERRIDE);
OVERRIDES.set("SignerKey", {
    toJson (wire) {
        const w = wire;
        switch(w.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519PublicKey(w.ed25519);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodePreAuthTx(w.preAuthTx);
            case 2:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeSha256Hash(w.hashX);
            case 3:
                return signedPayloadToStrkey(w.ed25519SignedPayload);
        }
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("SignerKey: expected strkey string");
        }
        if (json.startsWith("G")) {
            return {
                type: 0,
                ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519PublicKey(json)
            };
        }
        if (json.startsWith("T")) {
            return {
                type: 1,
                preAuthTx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodePreAuthTx(json)
            };
        }
        if (json.startsWith("X")) {
            return {
                type: 2,
                hashX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeSha256Hash(json)
            };
        }
        if (json.startsWith("P")) {
            return {
                type: 3,
                ed25519SignedPayload: signedPayloadFromStrkey(json)
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`SignerKey: unsupported strkey prefix in ${json}`);
    }
});
OVERRIDES.set("SignerKeyEd25519SignedPayload", {
    toJson (wire) {
        return signedPayloadToStrkey(wire);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("SignerKeyEd25519SignedPayload: expected P-strkey string");
        }
        return signedPayloadFromStrkey(json);
    }
});
OVERRIDES.set("ScAddress", {
    toJson (wire) {
        const w = wire;
        switch(w.type){
            case 0:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeEd25519PublicKey(w.accountId.ed25519);
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeContract(w.contractId);
            case 2:
                return med25519ToStrkey(w.muxedAccount);
            case 3:
                {
                    const cb = w.claimableBalanceId;
                    const raw = new Uint8Array(1 + 32);
                    raw.set(cb.v0, 1);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeClaimableBalance(raw);
                }
            case 4:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeLiquidityPool(w.liquidityPoolId);
        }
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("ScAddress: expected strkey string");
        }
        if (json.startsWith("G")) {
            return {
                type: 0,
                accountId: {
                    type: 0,
                    ed25519: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeEd25519PublicKey(json)
                }
            };
        }
        if (json.startsWith("C")) {
            return {
                type: 1,
                contractId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeContract(json)
            };
        }
        if (json.startsWith("M")) {
            return {
                type: 2,
                muxedAccount: med25519FromStrkey(json)
            };
        }
        if (json.startsWith("B")) {
            const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeClaimableBalance(json);
            return {
                type: 3,
                claimableBalanceId: {
                    type: raw[0],
                    v0: raw.subarray(1)
                }
            };
        }
        if (json.startsWith("L")) {
            return {
                type: 4,
                liquidityPoolId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeLiquidityPool(json)
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`ScAddress: unsupported strkey prefix in ${json}`);
    }
});
OVERRIDES.set("ClaimableBalanceId", {
    toJson (wire) {
        const w = wire;
        const raw = new Uint8Array(1 + 32);
        raw.set(w.v0, 1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeClaimableBalance(raw);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("ClaimableBalanceId: expected B-strkey string");
        }
        const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeClaimableBalance(json);
        return {
            type: raw[0],
            v0: raw.subarray(1)
        };
    }
});
OVERRIDES.set("PoolId", {
    toJson (wire) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeLiquidityPool(wire);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("PoolId: expected L-strkey string");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeLiquidityPool(json);
    }
});
OVERRIDES.set("ContractId", {
    toJson (wire) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].encodeContract(wire);
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("ContractId: expected C-strkey string");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$strkey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StrKey"].decodeContract(json);
    }
});
OVERRIDES.set("AssetCode4", {
    toJson (wire) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"](trimTrailingZeros(wire, 0)).toJson();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("AssetCode4: expected escaped-string JSON");
        }
        return padRightZeros(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"].fromJson(json).bytes, 4);
    }
});
OVERRIDES.set("AssetCode12", {
    toJson (wire) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"](trimTrailingZeros(wire, 5)).toJson();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("AssetCode12: expected escaped-string JSON");
        }
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"].fromJson(json).bytes;
        if (bytes.length < 5) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("AssetCode12: code must be at least 5 bytes; use AssetCode4 for shorter codes");
        }
        return padRightZeros(bytes, 12);
    }
});
OVERRIDES.set("AssetCode", {
    toJson (wire) {
        const w = wire;
        return w.assetCode4 !== void 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"](trimTrailingZeros(w.assetCode4, 0)).toJson() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"](trimTrailingZeros(w.assetCode12, 5)).toJson();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("AssetCode: expected escaped-string JSON");
        }
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$xdr$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrString"].fromJson(json).bytes;
        return bytes.length <= 4 ? {
            type: 1,
            assetCode4: padRightZeros(bytes, 4)
        } : {
            type: 2,
            assetCode12: padRightZeros(bytes, 12)
        };
    }
});
function trimTrailingZeros(bytes, minLen) {
    let end = bytes.length;
    while(end > minLen && bytes[end - 1] === 0)end -= 1;
    return end === bytes.length ? bytes : bytes.slice(0, end);
}
function padRightZeros(bytes, length) {
    if (bytes.length >= length) return bytes;
    const out = new Uint8Array(length);
    out.set(bytes);
    return out;
}
OVERRIDES.set("Int128Parts", {
    toJson (wire) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["partsTo128BigInt"])(wire, true).toString();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("Int128Parts: expected decimal string");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalDigitBudget"])(json, 128, "Int128Parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalString"])(json, "Int128Parts");
        const value = BigInt(json);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, true, 128, "Int128Parts");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigIntTo128Parts"])(value, true);
    }
});
OVERRIDES.set("Uint128Parts", {
    toJson (wire) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["partsTo128BigInt"])(wire, false).toString();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("Uint128Parts: expected decimal string");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalDigitBudget"])(json, 128, "Uint128Parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalString"])(json, "Uint128Parts");
        const value = BigInt(json);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, false, 128, "Uint128Parts");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigIntTo128Parts"])(value, false);
    }
});
OVERRIDES.set("Int256Parts", {
    toJson (wire) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["partsTo256BigInt"])(wire, true).toString();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("Int256Parts: expected decimal string");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalDigitBudget"])(json, 256, "Int256Parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalString"])(json, "Int256Parts");
        const value = BigInt(json);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, true, 256, "Int256Parts");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigIntTo256Parts"])(value, true);
    }
});
OVERRIDES.set("Uint256Parts", {
    toJson (wire) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["partsTo256BigInt"])(wire, false).toString();
    },
    fromJson (json) {
        if (typeof json !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("Uint256Parts: expected decimal string");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalDigitBudget"])(json, 256, "Uint256Parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDecimalString"])(json, "Uint256Parts");
        const value = BigInt(json);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertBigIntFits"])(value, false, 256, "Uint256Parts");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$bigint$2d$parts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigIntTo256Parts"])(value, false);
    }
});
function roundUp4(n) {
    return n + (4 - n % 4) % 4;
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XdrString",
    ()=>XdrString,
    "xdrString",
    ()=>xdrString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
;
;
const HEX = "0123456789abcdef";
class XdrString {
    bytes;
    constructor(input){
        if (input instanceof XdrString) {
            this.bytes = input.bytes.slice();
        } else if (typeof input === "string") {
            this.bytes = new TextEncoder().encode(input);
        } else if (input instanceof Uint8Array) {
            this.bytes = input;
        } else {
            throw new TypeError("XdrString: expected string, Uint8Array, or XdrString");
        }
    }
    get length() {
        return this.bytes.length;
    }
    /**
   * Strict UTF-8 decode. Throws if the bytes aren't valid UTF-8.
   * Use this when you know the content is text and want to fail loudly
   * if a binary payload sneaks in. Note that implicit JS string coercion
   * (e.g. template literals) calls the lenient `toString()` instead.
   */ toStringStrict() {
        return new TextDecoder("utf-8", {
            fatal: true,
            ignoreBOM: true
        }).decode(this.bytes);
    }
    /**
   * Lenient UTF-8 decode. Invalid sequences are replaced with U+FFFD, but no error is thrown. Use this when you want to be resilient to binary payloads
   * and just want something readable out of the bytes, even if it's not the
   * original intended string.
   */ toString() {
        return new TextDecoder("utf-8", {
            fatal: false,
            ignoreBOM: true
        }).decode(this.bytes);
    }
    /**
   * Best-effort decode. Returns a JS string if the bytes are valid UTF-8,
   * otherwise returns the raw bytes. Lets callers pattern-match on what
   * came back without try/catch.
   */ asStringOrBytes() {
        try {
            return this.toStringStrict();
        } catch  {
            return this.bytes;
        }
    }
    /**
   * SEP-0051 escape form — printable ASCII passes through, control bytes
   * and high bytes are escaped (`\0` `\t` `\n` `\r` `\\` `\xNN`). Suitable
   * for log lines and JSON embedding; reversible via `XdrString.fromJson`.
   */ toJson() {
        let out = "";
        for(let i = 0; i < this.bytes.length; i += 1){
            const b = this.bytes[i];
            switch(b){
                case 0:
                    out += "\\0";
                    break;
                case 9:
                    out += "\\t";
                    break;
                case 10:
                    out += "\\n";
                    break;
                case 13:
                    out += "\\r";
                    break;
                case 92:
                    out += "\\\\";
                    break;
                default:
                    if (b >= 32 && b <= 126) {
                        out += String.fromCharCode(b);
                    } else {
                        out += "\\x" + HEX[b >> 4 & 15] + HEX[b & 15];
                    }
            }
        }
        return out;
    }
    /**
   * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
   * call that instead. (Duplicated from `XdrValue` because `XdrString` does
   * not extend it.)
   */ toJSON() {
        return this.toJson();
    }
    /** Inverse of `toJson` — parse a SEP-0051 escape string to an XdrString. */ static fromJson(escaped) {
        const out = [];
        for(let i = 0; i < escaped.length; i += 1){
            const ch = escaped.charCodeAt(i);
            if (ch === 92) {
                const next = escaped.charCodeAt(i + 1);
                switch(next){
                    case 92:
                        out.push(92);
                        i += 1;
                        break;
                    case 48:
                        out.push(0);
                        i += 1;
                        break;
                    case 116:
                        out.push(9);
                        i += 1;
                        break;
                    case 110:
                        out.push(10);
                        i += 1;
                        break;
                    case 114:
                        out.push(13);
                        i += 1;
                        break;
                    case 120:
                    case 88:
                        {
                            if (i + 3 >= escaped.length) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`XdrString: truncated \\x escape at index ${i}`);
                            }
                            const hi = hexDigit(escaped.charCodeAt(i + 2));
                            const lo = hexDigit(escaped.charCodeAt(i + 3));
                            if (hi < 0 || lo < 0) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`XdrString: invalid \\x escape "${escaped.slice(i, i + 4)}"`);
                            }
                            out.push(hi << 4 | lo);
                            i += 3;
                            break;
                        }
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`XdrString: unsupported escape \\${escaped[i + 1] ?? ""}`);
                }
            } else if (ch >= 32 && ch <= 126) {
                out.push(ch);
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`XdrString: non-ASCII char (code 0x${ch.toString(16)}) at index ${i}`);
            }
        }
        return new XdrString(Uint8Array.from(out));
    }
    equals(other) {
        if (this === other) return true;
        if (!(other instanceof XdrString)) return false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areUint8ArraysEqual"])(this.bytes, other.bytes);
    }
}
function hexDigit(code) {
    if (code >= 48 && code <= 57) return code - 48;
    if (code >= 65 && code <= 70) return code - 65 + 10;
    if (code >= 97 && code <= 102) return code - 97 + 10;
    return -1;
}
class XdrStringType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseType"] {
    kind = "string";
    maxLength;
    #inner;
    constructor(maxLength){
        super();
        this.maxLength = maxLength;
        this.#inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"])(maxLength);
    }
    _read(reader, path) {
        return new XdrString(this.#inner._read(reader, path));
    }
    _write(value, writer, path) {
        if (!(value instanceof XdrString) && typeof value !== "string" && !(value instanceof Uint8Array)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${path}: expected string, Uint8Array, or XdrString`);
        }
        const xs = value instanceof XdrString ? value : new XdrString(value);
        this.#inner._write(xs.bytes, writer, path);
    }
}
function xdrString(maxLength) {
    return new XdrStringType(maxLength);
}
;
}),
"[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/xdr-value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XdrValue",
    ()=>XdrValue,
    "decodeArray",
    ()=>decodeArray,
    "decodeBytes",
    ()=>decodeBytes,
    "decodeStream",
    ()=>decodeStream,
    "encodeArray",
    ()=>encodeArray,
    "encodeBytes",
    ()=>encodeBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/util/base64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$to$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/values/to-json.js [app-route] (ecmascript)");
;
;
;
;
class XdrValue {
    toXdr(format = "raw") {
        const ctor = this.constructor;
        if (!ctor.schema) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${ctor.name}: missing static schema`);
        }
        const bytes = ctor.schema.encode(this.toXdrObject());
        return encodeBytes(bytes, format);
    }
    toXDR(format = "raw") {
        return encodeBytes(this.toXdr(), format);
    }
    toString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToBase64"])(this.toXdr());
    }
    toJson() {
        const ctor = this.constructor;
        if (!ctor.schema) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`${ctor.name}: missing static schema`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$to$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["walkToJson"])(this.toXdrObject(), ctor.schema);
    }
    /**
   * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
   * call that instead. Without this hook, stringify would throw on bigint
   * fields (`int64`/`uint64`) and dump raw byte internals. To substitute a
   * custom encoding, pass a replacer to `JSON.stringify` (its `this[key]` is
   * the original instance).
   */ toJSON() {
        return this.toJson();
    }
    // Widened to `XdrValue` (not `this`): polymorphic `this` in parameter
    // position intersects a union's arms to `never`, making equals uncallable
    // on union-typed values (ScVal, Memo, ...). Cross-type calls return false.
    equals(other) {
        if (this === other) return true;
        if (other == null || !(other instanceof XdrValue)) return false;
        if (this.constructor !== other.constructor) return false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areUint8ArraysEqual"])(this.toXdr(), other.toXdr());
    }
    static fromXdr(input, format) {
        assertXdrType(this, "fromXdr", true);
        const bytes = decodeBytes(input, format);
        return this.fromXdrObject(this.schema.decode(bytes));
    }
    /**
   * @deprecated Use {@link XdrValue.fromXdr} instead.
   * Deprecated in version v17.0.0
   */ static fromXDR(input, format) {
        const bytes = decodeBytes(input, format);
        return this.fromXdrObject(this.schema.decode(bytes));
    }
    static validateXdr(input, format) {
        assertXdrType(this, "validateXdr");
        let bytes;
        try {
            bytes = decodeBytes(input, format);
        } catch  {
            return false;
        }
        return this.schema.validateXdr(bytes);
    }
    /**
   * @deprecated Use {@link XdrValue.validateXdr} instead.
   * Deprecated in version v17.0.0
   */ static validateXDR(input, format) {
        let bytes;
        try {
            bytes = decodeBytes(input, format);
        } catch  {
            return false;
        }
        return this.schema.validateXdr(bytes);
    }
    static fromJson(json) {
        assertXdrType(this, "fromJson", true);
        return this.fromXdrObject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$values$2f$to$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["walkFromJson"])(json, this.schema));
    }
}
function decodeStream(type, input, format) {
    assertXdrType(type, "decodeStream", true);
    const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Reader"](decodeBytes(input, format));
    const path = type.schema.name ?? type.name;
    const out = [];
    while(reader.remaining > 0){
        out.push(type.fromXdrObject(type.schema._read(reader, path)));
    }
    return out;
}
function encodeArray(type, values, formatOrOptions, maybeOptions) {
    const [format, options] = splitArrayArgs(formatOrOptions, maybeOptions);
    assertXdrType(type, "encodeArray");
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["array"])(type.schema, options.maxLength ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNBOUNDED_MAX_LENGTH"]);
    const bytes = codec.encode(values.map((v)=>v.toXdrObject()), {
        maxDepth: options.maxDepth
    });
    return encodeBytes(bytes, format ?? "raw");
}
function decodeArray(type, input, formatOrOptions, maybeOptions) {
    const [format, options] = splitArrayArgs(formatOrOptions, maybeOptions);
    assertXdrType(type, "decodeArray", true);
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["array"])(type.schema, options.maxLength ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNBOUNDED_MAX_LENGTH"]);
    const wires = codec.decode(decodeBytes(input, format), {
        maxDepth: options.maxDepth
    });
    return wires.map((w)=>type.fromXdrObject(w));
}
function describeType(type) {
    if (typeof type === "function") {
        return type.name || "an anonymous function or class";
    }
    if (type === null || type === void 0) return String(type);
    if (typeof type === "object") {
        return `an instance of ${type.constructor?.name || "an anonymous object"}`;
    }
    return typeof type === "string" ? `the string "${type}"` : `the ${typeof type} ${String(type)}`;
}
function assertXdrType(type, fn, needsFromXdrObject = false) {
    if (!type?.schema) {
        throw new TypeError(`${fn}: ${describeType(type)} has no static schema, so it is not a usable XDR type. Pass a generated class such as xdr.ScVal, or declare \`static readonly schema\` on a class of your own.`);
    }
    if (needsFromXdrObject && typeof type.fromXdrObject !== "function") {
        throw new TypeError(`${fn}: ${describeType(type)} has a static schema but no static fromXdrObject, so it can encode but not decode. Declare \`static fromXdrObject(wire)\` on it.`);
    }
}
function splitArrayArgs(formatOrOptions, maybeOptions) {
    return typeof formatOrOptions === "string" ? [
        formatOrOptions,
        maybeOptions ?? {}
    ] : [
        void 0,
        formatOrOptions ?? maybeOptions ?? {}
    ];
}
function encodeBytes(bytes, format) {
    switch(format){
        case "raw":
            return bytes;
        case "hex":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToHex"])(bytes);
        case "base64":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint8ArrayToBase64"])(bytes);
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`toXdr: unknown format "${String(format)}"`);
    }
}
function decodeBytes(input, format) {
    if (input instanceof Uint8Array) return input;
    if (typeof input !== "string") {
        throw new TypeError(`fromXdr: expected a string or Uint8Array, got ${typeof input}`);
    }
    if (format === void 0 || format === "raw") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"]("fromXdr: string input requires format ('hex' | 'base64')");
    }
    if (format === "hex" || format === "base64") {
        try {
            return format === "hex" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8array$2d$extras$40$1$2e$6$2e$0$2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToUint8Array"])(input) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$util$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64ToUint8Array"])(input);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`invalid ${format} input`);
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$js$2d$xdr$40$5$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$dist$2f$js$2d$xdr$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XdrError"](`fromXdr: unknown format "${String(format)}"`);
}
;
}),
];})()

//# sourceMappingURL=0559_%40stellar_stellar-sdk_lib_esm_06dtu338disqp._.js.map