(()=>{"use strict";module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/.pnpm/pg@8.23.1/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-ad45e98bb7b7a165");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/assert.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertEmptyRest",
    ()=>assertEmptyRest,
    "assertTypedArray",
    ()=>assertTypedArray,
    "assertUint8",
    ()=>assertUint8
]);
function assertEmptyRest(rest) {
    if (Object.keys(rest).length > 0) throw new TypeError('Unexpected extra options');
}
// eslint-disable-next-line sonarjs/no-nested-template-literals
const makeMessage = (name, extra)=>`Expected${name ? ` ${name} to be` : ''} an Uint8Array${extra}`;
const TypedArray = Object.getPrototypeOf(Uint8Array);
function assertTypedArray(arr) {
    if (arr && arr instanceof TypedArray) return;
    throw new TypeError('Expected a TypedArray instance');
}
function assertUint8(arr, options) {
    if (!options) {
        // fast path
        if (arr instanceof Uint8Array) return;
        throw new TypeError('Expected an Uint8Array');
    }
    const { name, length, ...rest } = options;
    assertEmptyRest(rest);
    if (arr instanceof Uint8Array && (length === undefined || arr.length === length)) return;
    throw new TypeError(makeMessage(name, length === undefined ? '' : ` of size ${Number(length)}`));
}
}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/base32.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromBase32",
    ()=>fromBase32,
    "fromBase32crockford",
    ()=>fromBase32crockford,
    "fromBase32hex",
    ()=>fromBase32hex,
    "toBase32",
    ()=>toBase32,
    "toBase32crockford",
    ()=>toBase32crockford,
    "toBase32hex",
    ()=>toBase32hex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$assert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/assert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/_utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/base32.js [app-route] (ecmascript)");
;
;
;
// See https://datatracker.ietf.org/doc/html/rfc4648
// 8 chars per 5 bytes
function fromBase32common(str, mode, padding, format, rest) {
    if (typeof str !== 'string') throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E_STRING"]);
    if (rest !== null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$assert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertEmptyRest"])(rest);
    if (padding === true) {
        if (str.length % 8 !== 0) throw new SyntaxError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E_PADDING"]);
    } else if (padding === false) {
        if (str.endsWith('=')) throw new SyntaxError('Did not expect padding in base32 input');
    } else if (padding !== 'both') {
        throw new TypeError('Invalid padding option');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromUint8"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromBase32"](str, mode), format);
}
// By default, valid padding is accepted but not required
const fromBase32wrap = (mode)=>(str, options)=>{
        if (!options) return fromBase32common(str, mode, 'both', 'uint8', null);
        const { format = 'uint8', padding = 'both', ...rest } = options;
        return fromBase32common(str, mode, padding, format, rest);
    };
const fromBase32 = fromBase32wrap(0);
const fromBase32hex = fromBase32wrap(1);
const fromBase32crockford = fromBase32wrap(2);
const toBase32 = (arr, { padding = false } = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase32"](arr, 0, padding);
const toBase32hex = (arr, { padding = false } = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase32"](arr, 1, padding);
const toBase32crockford = (arr, { padding = false } = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$base32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase32"](arr, 2, padding);
}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/_utils.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E_STRICT_UNICODE",
    ()=>E_STRICT_UNICODE,
    "E_STRING",
    ()=>E_STRING,
    "assert",
    ()=>assert,
    "assertU8",
    ()=>assertU8,
    "fromBuffer",
    ()=>fromBuffer,
    "fromUint8",
    ()=>fromUint8,
    "toBuf",
    ()=>toBuf
]);
;
const Buffer = /* @__PURE__ */ (()=>globalThis.Buffer)();
function assert(condition, msg) {
    if (!condition) throw new Error(msg);
}
function assertU8(arg) {
    if (arg && arg instanceof Uint8Array) return;
    throw new TypeError('Expected an Uint8Array');
}
const toBuf = (x)=>x.byteLength <= 64 && x.BYTES_PER_ELEMENT === 1 ? Buffer.from(x) : Buffer.from(x.buffer, x.byteOffset, x.byteLength);
const E_STRING = 'Input is not a string';
const E_STRICT_UNICODE = 'Input is not well-formed Unicode';
function fromUint8(arr, format) {
    switch(format){
        case 'uint8':
            if (arr.constructor !== Uint8Array) throw new Error('Unexpected');
            return arr;
        case 'arraybuffer':
            if (arr.byteLength !== arr.buffer.byteLength) throw new Error('Unexpected');
            return arr.buffer;
        case 'buffer':
            if (arr.length <= 64) return Buffer.from(arr);
            return Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    }
    throw new TypeError('Unexpected format');
}
function fromBuffer(arr, format) {
    switch(format){
        case 'uint8':
            // byteOffset check is slightly faster and covers most pooling, so it comes first
            if (arr.length <= 64 || arr.byteOffset !== 0 || arr.byteLength !== arr.buffer.byteLength) {
                return new Uint8Array(arr);
            }
            return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
        case 'arraybuffer':
            return arr.buffer.byteLength === arr.byteLength ? arr.buffer : arr.buffer.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        case 'buffer':
            if (arr.constructor !== Buffer) throw new Error('Unexpected');
            return arr;
    }
    throw new TypeError('Unexpected format');
}
}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/base32.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E_CHAR",
    ()=>E_CHAR,
    "E_LAST",
    ()=>E_LAST,
    "E_LENGTH",
    ()=>E_LENGTH,
    "E_PADDING",
    ()=>E_PADDING,
    "fromBase32",
    ()=>fromBase32,
    "toBase32",
    ()=>toBase32
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/_utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/platform.native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$latin1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/latin1.js [app-route] (ecmascript)");
;
;
;
// See https://datatracker.ietf.org/doc/html/rfc4648
const BASE32_HELPERS = [
    {},
    {},
    {}
];
const BASE32_ALPHABETS = [
    [
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
    ],
    [
        ...'0123456789ABCDEFGHIJKLMNOPQRSTUV'
    ],
    [
        ...'0123456789ABCDEFGHJKMNPQRSTVWXYZ'
    ]
];
const E_CHAR = 'Invalid character in base32 input';
const E_PADDING = 'Invalid base32 padding';
const E_LENGTH = 'Invalid base32 length';
const E_LAST = 'Invalid last chunk';
const useTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHermes"] // Faster on Hermes and JSC, but we use it only on Hermes
;
function toBase32(arr, mode, padding) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertU8"])(arr);
    const fullChunks = Math.floor(arr.length / 5);
    const fullChunksBytes = fullChunks * 5;
    let o = '';
    let i = 0;
    const alphabet = BASE32_ALPHABETS[mode];
    const helpers = BASE32_HELPERS[mode];
    if (!helpers.pairs) {
        helpers.pairs = [];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeDecoder"]) {
            // Lazy to save memory in case if this is not needed
            helpers.codepairs = new Uint16Array(32 * 32);
            const u16 = helpers.codepairs;
            const u8 = new Uint8Array(u16.buffer, u16.byteOffset, u16.byteLength) // write as 1-byte to ignore BE/LE difference
            ;
            for(let i = 0; i < 32; i++){
                const ic = alphabet[i].charCodeAt(0);
                for(let j = 0; j < 32; j++)u8[i << 6 | j << 1] = u8[j << 6 | (i << 1) + 1] = ic;
            }
        } else {
            const p = helpers.pairs;
            for(let i = 0; i < 32; i++){
                for(let j = 0; j < 32; j++)p.push(`${alphabet[i]}${alphabet[j]}`);
            }
        }
    }
    const { pairs, codepairs } = helpers;
    // Fast path for complete blocks
    // This whole loop can be commented out, the algorithm won't change, it's just an optimization of the next loop
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeDecoder"]) {
        const oa = new Uint16Array(fullChunks * 4);
        for(let j = 0; i < fullChunksBytes; i += 5){
            const a = arr[i];
            const b = arr[i + 1];
            const c = arr[i + 2];
            const d = arr[i + 3];
            const e = arr[i + 4];
            const x0 = a << 2 | b >> 6 // 8 + 8 - 5 - 5 = 6 left
            ;
            const x1 = (b & 0x3f) << 4 | c >> 4 // 6 + 8 - 5 - 5 = 4 left
            ;
            const x2 = (c & 0xf) << 6 | d >> 2 // 4 + 8 - 5 - 5 = 2 left
            ;
            const x3 = (d & 0x3) << 8 | e // 2 + 8 - 5 - 5 = 0 left
            ;
            oa[j] = codepairs[x0];
            oa[j + 1] = codepairs[x1];
            oa[j + 2] = codepairs[x2];
            oa[j + 3] = codepairs[x3];
            j += 4;
        }
        o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$latin1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeAscii"])(oa);
    } else if (useTemplates) {
        // Templates are faster only on Hermes and JSC. Browsers have TextDecoder anyway
        for(; i < fullChunksBytes; i += 5){
            const a = arr[i];
            const b = arr[i + 1];
            const c = arr[i + 2];
            const d = arr[i + 3];
            const e = arr[i + 4];
            const x0 = a << 2 | b >> 6 // 8 + 8 - 5 - 5 = 6 left
            ;
            const x1 = (b & 0x3f) << 4 | c >> 4 // 6 + 8 - 5 - 5 = 4 left
            ;
            const x2 = (c & 0xf) << 6 | d >> 2 // 4 + 8 - 5 - 5 = 2 left
            ;
            const x3 = (d & 0x3) << 8 | e // 2 + 8 - 5 - 5 = 0 left
            ;
            o += `${pairs[x0]}${pairs[x1]}${pairs[x2]}${pairs[x3]}`;
        }
    } else {
        for(; i < fullChunksBytes; i += 5){
            const a = arr[i];
            const b = arr[i + 1];
            const c = arr[i + 2];
            const d = arr[i + 3];
            const e = arr[i + 4];
            const x0 = a << 2 | b >> 6 // 8 + 8 - 5 - 5 = 6 left
            ;
            const x1 = (b & 0x3f) << 4 | c >> 4 // 6 + 8 - 5 - 5 = 4 left
            ;
            const x2 = (c & 0xf) << 6 | d >> 2 // 4 + 8 - 5 - 5 = 2 left
            ;
            const x3 = (d & 0x3) << 8 | e // 2 + 8 - 5 - 5 = 0 left
            ;
            o += pairs[x0];
            o += pairs[x1];
            o += pairs[x2];
            o += pairs[x3];
        }
    }
    // If we have something left, process it with a full algo
    let carry = 0;
    let shift = 3 // First byte needs to be shifted by 3 to get 5 bits
    ;
    for(; i < arr.length; i++){
        const x = arr[i];
        o += alphabet[carry | x >> shift]; // shift >= 3, so this fits
        if (shift >= 5) {
            shift -= 5;
            o += alphabet[x >> shift & 0x1f];
        }
        carry = x << 5 - shift & 0x1f;
        shift += 3; // Each byte prints 5 bits and leaves 3 bits
    }
    if (shift !== 3) o += alphabet[carry]; // shift 3 means we have no carry left
    if (padding) o += [
        '',
        '======',
        '====',
        '===',
        '='
    ][arr.length - fullChunksBytes];
    return o;
}
// TODO: can this be optimized? This only affects non-Hermes barebone engines though
const mapSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeEncoder"] ? 128 : 65_536 // we have to store 64 KiB map or recheck everything if we can't decode to byte array
;
function fromBase32(str, mode) {
    let inputLength = str.length;
    while(str[inputLength - 1] === '=')inputLength--;
    const paddingLength = str.length - inputLength;
    const tailLength = inputLength % 8;
    const mainLength = inputLength - tailLength // multiples of 8
    ;
    if (![
        0,
        2,
        4,
        5,
        7
    ].includes(tailLength)) throw new SyntaxError(E_LENGTH) // fast verification
    ;
    if (paddingLength > 7 || paddingLength !== 0 && str.length % 8 !== 0) {
        throw new SyntaxError(E_PADDING);
    }
    const alphabet = BASE32_ALPHABETS[mode];
    const helpers = BASE32_HELPERS[mode];
    if (!helpers.fromMap) {
        helpers.fromMap = new Int8Array(mapSize).fill(-1); // no regex input validation here, so we map all other bytes to -1 and recheck sign
        const m = helpers.fromMap;
        alphabet.forEach((c, i)=>{
            m[c.charCodeAt(0)] = m[c.toLowerCase().charCodeAt(0)] = i;
        });
        if (mode === 2) {
            // Extra Crockford mapping
            m[73] = m[76] = m[105] = m[108] = m[49]; // ILil -> 1
            m[79] = m[111] = m[48]; // Oo -> 0
        }
    }
    const m = helpers.fromMap;
    const arr = new Uint8Array(Math.floor(inputLength * 5 / 8));
    let at = 0;
    let i = 0;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeEncoder"]) {
        const codes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$latin1$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeAscii"])(str, E_CHAR);
        for(; i < mainLength; i += 8){
            // each 5 bits, grouped 5 * 4 = 20
            const x0 = codes[i];
            const x1 = codes[i + 1];
            const x2 = codes[i + 2];
            const x3 = codes[i + 3];
            const x4 = codes[i + 4];
            const x5 = codes[i + 5];
            const x6 = codes[i + 6];
            const x7 = codes[i + 7];
            const a = m[x0] << 15 | m[x1] << 10 | m[x2] << 5 | m[x3];
            const b = m[x4] << 15 | m[x5] << 10 | m[x6] << 5 | m[x7];
            if (a < 0 || b < 0) throw new SyntaxError(E_CHAR);
            arr[at] = a >> 12;
            arr[at + 1] = a >> 4 & 0xff;
            arr[at + 2] = a << 4 & 0xff | b >> 16;
            arr[at + 3] = b >> 8 & 0xff;
            arr[at + 4] = b & 0xff;
            at += 5;
        }
    } else {
        for(; i < mainLength; i += 8){
            // each 5 bits, grouped 5 * 4 = 20
            const x0 = str.charCodeAt(i);
            const x1 = str.charCodeAt(i + 1);
            const x2 = str.charCodeAt(i + 2);
            const x3 = str.charCodeAt(i + 3);
            const x4 = str.charCodeAt(i + 4);
            const x5 = str.charCodeAt(i + 5);
            const x6 = str.charCodeAt(i + 6);
            const x7 = str.charCodeAt(i + 7);
            const a = m[x0] << 15 | m[x1] << 10 | m[x2] << 5 | m[x3];
            const b = m[x4] << 15 | m[x5] << 10 | m[x6] << 5 | m[x7];
            if (a < 0 || b < 0) throw new SyntaxError(E_CHAR);
            arr[at] = a >> 12;
            arr[at + 1] = a >> 4 & 0xff;
            arr[at + 2] = a << 4 & 0xff | b >> 16;
            arr[at + 3] = b >> 8 & 0xff;
            arr[at + 4] = b & 0xff;
            at += 5;
        }
    }
    // Last block, valid tailLength: 0 2 4 5 7, checked already
    // We check last chunk to be strict
    if (tailLength < 2) return arr;
    const ab = m[str.charCodeAt(i++)] << 5 | m[str.charCodeAt(i++)];
    if (ab < 0) throw new SyntaxError(E_CHAR);
    arr[at++] = ab >> 2;
    if (tailLength < 4) {
        if (ab & 0x3) throw new SyntaxError(E_LAST);
        return arr;
    }
    const cd = m[str.charCodeAt(i++)] << 5 | m[str.charCodeAt(i++)];
    if (cd < 0) throw new SyntaxError(E_CHAR);
    arr[at++] = ab << 6 & 0xff | cd >> 4;
    if (tailLength < 5) {
        if (cd & 0xf) throw new SyntaxError(E_LAST);
        return arr;
    }
    const e = m[str.charCodeAt(i++)];
    if (e < 0) throw new SyntaxError(E_CHAR);
    arr[at++] = cd << 4 & 0xff | e >> 1; // 4 + 4
    if (tailLength < 7) {
        if (e & 0x1) throw new SyntaxError(E_LAST);
        return arr;
    }
    const fg = m[str.charCodeAt(i++)] << 5 | m[str.charCodeAt(i++)];
    if (fg < 0) throw new SyntaxError(E_CHAR);
    arr[at++] = e << 7 & 0xff | fg >> 3; // 1 + 5 + 2
    // Can't be 8, so no h
    if (fg & 0x7) throw new SyntaxError(E_LAST);
    return arr;
}
}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/latin1.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asciiPrefix",
    ()=>asciiPrefix,
    "decodeAscii",
    ()=>decodeAscii,
    "decodeLatin1",
    ()=>decodeLatin1,
    "decodeUCS2",
    ()=>decodeUCS2,
    "encodeAscii",
    ()=>encodeAscii,
    "encodeAsciiPrefix",
    ()=>encodeAsciiPrefix,
    "encodeLatin1",
    ()=>encodeLatin1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/platform.native.js [app-route] (ecmascript)");
;
const atob = /* @__PURE__ */ (()=>globalThis.atob)();
const web64 = /* @__PURE__ */ (()=>Uint8Array.prototype.toBase64)();
// See http://stackoverflow.com/a/22747272/680742, which says that lowest limit is in Chrome, with 0xffff args
// On Hermes, actual max is 0x20_000 minus current stack depth, 1/16 of that should be safe
const maxFunctionArgs = 0x20_00;
// toBase64+atob path is faster on everything where fromBase64 is fast
const useLatin1atob = web64 && atob;
function asciiPrefix(arr) {
    let p = 0 // verified ascii bytes
    ;
    const length = arr.length;
    // Threshold tested on Hermes (worse on <=48, better on >=52)
    // Also on v8 arrs of size <=64 might be on heap and using Uint32Array on them is unoptimal
    if (length > 64) {
        // Speedup with u32
        const u32start = (4 - (arr.byteOffset & 3)) % 4 // offset start by this many bytes for alignment
        ;
        for(; p < u32start; p++)if (arr[p] >= 0x80) return p;
        const u32length = (arr.byteLength - u32start) / 4 | 0;
        const u32 = new Uint32Array(arr.buffer, arr.byteOffset + u32start, u32length);
        let i = 0;
        for(const last3 = u32length - 3;; p += 16, i += 4){
            if (i >= last3) break; // loop is fast enough for moving this here to be _very_ useful, likely due to array access checks
            const a = u32[i];
            const b = u32[i + 1];
            const c = u32[i + 2];
            const d = u32[i + 3];
            // "(a | b | c | d) & mask" is slower on Hermes though faster on v8
            if (a & 0x80_80_80_80 || b & 0x80_80_80_80 || c & 0x80_80_80_80 || d & 0x80_80_80_80) break;
        }
        for(; i < u32length; p += 4, i++)if (u32[i] & 0x80_80_80_80) break;
    }
    for(; p < length; p++)if (arr[p] >= 0x80) return p;
    return length;
}
function decodeLatin1(arr, start = 0, stop = arr.length) {
    start |= 0;
    stop |= 0;
    const total = stop - start;
    if (total === 0) return '';
    if (useLatin1atob && total >= 256 && total < 1e8 && arr.toBase64 === web64 && arr.BYTES_PER_ELEMENT === 1) {
        const sliced = start === 0 && stop === arr.length ? arr : arr.subarray(start, stop);
        return atob(sliced.toBase64());
    }
    if (total > maxFunctionArgs) {
        let prefix = '';
        for(let i = start; i < stop;){
            const i1 = Math.min(stop, i + maxFunctionArgs);
            prefix += String.fromCharCode.apply(String, arr.subarray(i, i1));
            i = i1;
        }
        return prefix;
    }
    const sliced = start === 0 && stop === arr.length ? arr : arr.subarray(start, stop);
    return String.fromCharCode.apply(String, sliced);
}
const decodeUCS2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLE"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDeno"] ? (u16, stop = u16.length)=>{
    // TODO: fast path for BE, perhaps faster path for Deno. Note that decoder replaces, this function doesn't
    if (stop > 32) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"].from(u16.buffer, u16.byteOffset, stop * 2).ucs2Slice() // from 64 bytes, below are in heap
    ;
    return decodeLatin1(u16, 0, stop);
} : (u16, stop = u16.length)=>decodeLatin1(u16, 0, stop);
const decodeAscii = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"] ? (a)=>// Buffer is faster on Node.js (but only for long enough data), if we know that output is ascii
    a.byteLength >= 0x3_00 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDeno"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"].from(a.buffer, a.byteOffset, a.byteLength).latin1Slice(0, a.byteLength) // .latin1Slice is faster than .asciiSlice
     : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeDecoder"].decode(a) // On Node.js, utf8 decoder is faster than latin1
 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeDecoderLatin1"] ? (a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeDecoderLatin1"].decode(a) // On browsers (specifically WebKit), latin1 decoder is faster than utf8
 : (a)=>decodeLatin1(a instanceof Uint8Array ? a : new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
function encodeAsciiPrefix(x, s) {
    let i = 0;
    for(const len3 = s.length - 3; i < len3; i += 4){
        const x0 = s.charCodeAt(i), x1 = s.charCodeAt(i + 1), x2 = s.charCodeAt(i + 2), x3 = s.charCodeAt(i + 3) // prettier-ignore
        ;
        if ((x0 | x1 | x2 | x3) >= 128) break;
        x[i] = x0;
        x[i + 1] = x1;
        x[i + 2] = x2;
        x[i + 3] = x3;
    }
    return i;
}
const encodeLatin1 = (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeCharcodes"])(str, new Uint8Array(str.length));
// Expects nativeEncoder to be present
const useEncodeInto = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHermes"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeEncoder"]?.encodeInto)();
const encodeAscii = useEncodeInto ? (str, ERR)=>{
    // Much faster in Hermes
    const codes = new Uint8Array(str.length + 4) // overshoot by a full utf8 char
    ;
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeEncoder"].encodeInto(str, codes);
    if (info.read !== str.length || info.written !== str.length) throw new SyntaxError(ERR) // non-ascii
    ;
    return codes.subarray(0, str.length);
} : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"] ? (str, ERR)=>{
    // TextEncoder is slow on Node.js 24 / 25 (was ok on 22)
    // Node.js Buffer.from always returns 8-byte aligned allocations, this is safe for e.g. conversion to Uint32Array
    const codes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeBuffer"].from(str, 'utf8') // ascii/latin1 coerces, we need to check
    ;
    if (codes.length !== str.length) throw new SyntaxError(ERR) // non-ascii
    ;
    return new Uint8Array(codes.buffer, codes.byteOffset, codes.byteLength);
} : (str, ERR)=>{
    const codes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$exodus$2b$bytes$40$1$2e$16$2e$0_$40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$exodus$2f$bytes$2f$fallback$2f$platform$2e$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeEncoder"].encode(str);
    if (codes.length !== str.length) throw new SyntaxError(ERR) // non-ascii
    ;
    return codes;
};
}),
"[project]/node_modules/.pnpm/@exodus+bytes@1.16.0_@noble+hashes@2.4.0/node_modules/@exodus/bytes/fallback/platform.native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode2string",
    ()=>decode2string,
    "decodePartAddition",
    ()=>decodePartAddition,
    "decodePartTemplates",
    ()=>decodePartTemplates,
    "encodeCharcodes",
    ()=>encodeCharcodes,
    "encodeCharcodesPure",
    ()=>encodeCharcodesPure,
    "isDeno",
    ()=>isDeno,
    "isHermes",
    ()=>isHermes,
    "isLE",
    ()=>isLE,
    "nativeBuffer",
    ()=>nativeBuffer,
    "nativeDecoder",
    ()=>nativeDecoder,
    "nativeDecoderLatin1",
    ()=>nativeDecoderLatin1,
    "nativeEncoder",
    ()=>nativeEncoder
]);
const { Buffer } = globalThis;
const haveNativeBuffer = Buffer && !Buffer.TYPED_ARRAY_SUPPORT;
const nativeBuffer = haveNativeBuffer ? Buffer : null;
const isHermes = /* @__PURE__ */ (()=>!!globalThis.HermesInternal)();
const isDeno = /* @__PURE__ */ (()=>!!globalThis.Deno)();
const isLE = /* @__PURE__ */ (()=>new Uint8Array(Uint16Array.of(258).buffer)[0] === 2)();
// We consider Node.js TextDecoder/TextEncoder native
// Still needed in platform.native.js as this is re-exported to platform.js
let isNative = (x)=>x && (haveNativeBuffer || `${x}`.includes('[native code]'));
if (!haveNativeBuffer && isNative(()=>{})) isNative = ()=>false; // e.g. XS, we don't want false positives
const nativeEncoder = /* @__PURE__ */ (()=>isNative(globalThis.TextEncoder) ? new TextEncoder() : null)();
const nativeDecoder = /* @__PURE__ */ (()=>isNative(globalThis.TextDecoder) ? new TextDecoder('utf-8', {
        ignoreBOM: true
    }) : null)();
const nativeDecoderLatin1 = /* @__PURE__ */ (()=>{
    // Not all barebone engines with TextDecoder support something except utf-8, detect
    if (nativeDecoder) {
        try {
            return new TextDecoder('latin1', {
                ignoreBOM: true
            });
        } catch  {}
    }
    return null;
})();
function decodePartAddition(a, start, end, m) {
    let o = '';
    let i = start;
    for(const last3 = end - 3; i < last3; i += 4){
        const x0 = a[i];
        const x1 = a[i + 1];
        const x2 = a[i + 2];
        const x3 = a[i + 3];
        o += m[x0];
        o += m[x1];
        o += m[x2];
        o += m[x3];
    }
    while(i < end)o += m[a[i++]];
    return o;
}
function decodePartTemplates(a, start, end, m) {
    let o = '';
    let i = start;
    for(const last15 = end - 15; i < last15; i += 16){
        const x0 = a[i];
        const x1 = a[i + 1];
        const x2 = a[i + 2];
        const x3 = a[i + 3];
        const x4 = a[i + 4];
        const x5 = a[i + 5];
        const x6 = a[i + 6];
        const x7 = a[i + 7];
        const x8 = a[i + 8];
        const x9 = a[i + 9];
        const x10 = a[i + 10];
        const x11 = a[i + 11];
        const x12 = a[i + 12];
        const x13 = a[i + 13];
        const x14 = a[i + 14];
        const x15 = a[i + 15];
        o += `${m[x0]}${m[x1]}${m[x2]}${m[x3]}${m[x4]}${m[x5]}${m[x6]}${m[x7]}${m[x8]}${m[x9]}${m[x10]}${m[x11]}${m[x12]}${m[x13]}${m[x14]}${m[x15]}`;
    }
    while(i < end)o += m[a[i++]];
    return o;
}
const decodePart = isHermes ? decodePartTemplates : decodePartAddition;
function decode2string(arr, start, end, m) {
    if (end - start > 30_000) {
        // Limit concatenation to avoid excessive GC
        // Thresholds checked on Hermes for toHex
        const concat = [];
        for(let i = start; i < end;){
            const step = i + 500;
            const iNext = step > end ? end : step;
            concat.push(decodePart(arr, i, iNext, m));
            i = iNext;
        }
        const res = concat.join('');
        concat.length = 0;
        return res;
    }
    return decodePart(arr, start, end, m);
}
/* eslint-disable @exodus/mutable/no-param-reassign-prop-only */ function encodeCharcodesHermes(str, arr) {
    const length = str.length;
    if (length > 64) {
        const at = str.charCodeAt.bind(str) // faster on strings from ~64 chars on Hermes, but can be 10x slower on e.g. JSC
        ;
        for(let i = 0; i < length; i++)arr[i] = at(i);
    } else {
        for(let i = 0; i < length; i++)arr[i] = str.charCodeAt(i);
    }
    return arr;
}
function encodeCharcodesPure(str, arr) {
    const length = str.length;
    // Can be optimized with unrolling, but this is not used on non-Hermes atm
    for(let i = 0; i < length; i++)arr[i] = str.charCodeAt(i);
    return arr;
}
const encodeCharcodes = isHermes ? encodeCharcodesHermes : encodeCharcodesPure;
}),
"[project]/node_modules/.pnpm/@noble+ed25519@3.2.0/node_modules/@noble/ed25519/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point,
    "etc",
    ()=>etc,
    "getPublicKey",
    ()=>getPublicKey,
    "getPublicKeyAsync",
    ()=>getPublicKeyAsync,
    "hash",
    ()=>hash,
    "hashes",
    ()=>hashes,
    "keygen",
    ()=>keygen,
    "keygenAsync",
    ()=>keygenAsync,
    "sign",
    ()=>sign,
    "signAsync",
    ()=>signAsync,
    "utils",
    ()=>utils,
    "verify",
    ()=>verify,
    "verifyAsync",
    ()=>verifyAsync
]);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ /**
 * 5KB JS implementation of ed25519 EdDSA signatures.
 * Targets RFC8032, FIPS 186-5, and ZIP215 behavior.
 * @module
 * @example
 * ```js
import * as ed from '@noble/ed25519';
(async () => {
  const secretKey = ed.utils.randomSecretKey();
  const message = Uint8Array.from([0xab, 0xbc, 0xcd, 0xde]);
  const pubKey = await ed.getPublicKeyAsync(secretKey); // Sync methods are also present
  const signature = await ed.signAsync(message, secretKey);
  const isValid = await ed.verifyAsync(signature, message, pubKey);
})();
```
 */ /**
 * Curve params. edwards25519 uses the RFC equation `-x² + y² = 1 + dx²y²`.
 * The stored `a` literal below is `p - 1`, i.e. the field-element encoding of RFC `a = -1`.
 * * P = `2n**255n - 19n` // field over which calculations are done
 * * N = `2n**252n + 27742317777372353535851937790883648493n` // prime-order subgroup order
 * * h = 8 // cofactor
 * * a = `Fp.create(BigInt(-1))` // equation param, stored here as `p - 1`
 * * d = -121665/121666 a.k.a. `Fp.neg(121665 * Fp.inv(121666))` // equation param
 * * Gx, Gy are coordinates of Generator / base point
 *
 * Mirror noble-curves: Point.CURVE() exposes shared params, but callers must not be able to mutate
 * that shared view and desynchronize it from the arithmetic constants captured below.
 */ const freeze = Object.freeze;
const P = 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn;
const N = 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn;
const _d = 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n;
const Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an;
const Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n;
const _a = P - 1n; // field-element encoding of RFC `a = -1`
const ed25519_CURVE = freeze({
    p: P,
    n: N,
    h: 8n,
    a: _a,
    d: _d,
    Gx,
    Gy
});
// Shared 32-byte encoded width for Ed25519 points, scalars, signatures/2, and keys. Named LEN
// rather than RFC 8032's `L`, which names the group order (stored here as `N`).
const LEN = 32;
// Helpers and Precomputes sections are reused between libraries
// ## Helpers
// ----------
/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */ const isBytes = (a)=>{
    // Plain `instanceof Uint8Array` is too strict for some Buffer / proxy / cross-realm cases.
    // The fallback still requires a real ArrayBuffer view, so plain
    // JSON-deserialized `{ constructor: ... }` spoofing is rejected, and
    // `BYTES_PER_ELEMENT === 1` keeps the fallback on byte-oriented views.
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array' && a.BYTES_PER_ELEMENT === 1;
};
/** Asserts something is Bytes. */ const abytes = (value, length, title = '')=>{
    // Success path first: this runs at the start of every update() / digestInto(), and the
    // common `abytes(data)` form must not pay for length handling it does not use.
    if (isBytes(value) && (length === undefined || value.length === length)) return value;
    // Error path: recompute freely to build the exact message.
    const bytes = isBytes(value);
    const ofLen = length !== undefined ? ` of length ${length}` : '';
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = (title ? `"${title}" ` : '') + 'expected Uint8Array' + ofLen + ', got ' + got;
    if (!bytes) throw new TypeError(message);
    throw new RangeError(message);
};
// Validate, then take one owned copy, so later caller mutation cannot be observed — e.g. cannot
// make sign()'s nonce derivation and challenge derivation see different messages.
const snapshotBytes = (value, title = '', length)=>Uint8Array.from(abytes(value, length, title));
// Callers keep values non-negative and within the requested width; padStart() won't truncate over-wide inputs.
const padh = (n, pad)=>n.toString(16).padStart(pad, '0');
/** Convert byte array to hex string. */ const bytesToHex = (bytes)=>{
    let hex = '';
    for (const byte of abytes(bytes))hex += padh(byte, 2);
    return hex;
};
/** Convert hex string to byte array. */ const hexToBytes = (hex)=>{
    const e = 'hex invalid'; // Strict ASCII hex only, with one generic error for parse failures.
    if (typeof hex !== 'string') throw new TypeError(e);
    if (hex.length % 2 || !/^[\da-f]*$/i.test(hex)) throw new RangeError(e);
    const array = new Uint8Array(hex.length / 2);
    for(let ai = 0, hi = 0; ai < array.length; ai++, hi += 2){
        const n1 = hex.charCodeAt(hi);
        const n2 = hex.charCodeAt(hi + 1);
        // Regex guarantees ASCII. For 0..9/A..F/a..f, this maps char codes to 0..15.
        array[ai] = ((n1 & 15) + (n1 >> 6) * 9) * 16 + (n2 & 15) + (n2 >> 6) * 9;
    }
    return array;
};
// WebCrypto is available in all modern environments
/** Copies several Uint8Arrays into one. */ const concatBytes = (...arrays)=>{
    let sum = 0;
    for (const a of arrays)sum += abytes(a).length;
    const res = new Uint8Array(sum);
    let pad = 0;
    for (const a of arrays){
        res.set(a, pad);
        pad += a.length;
    }
    return res;
};
/**
 * WebCrypto OS-level CSPRNG (random number generator).
 * Will throw when not available; large-request ceilings are delegated to getRandomValues().
 */ const randomBytes = (len = LEN)=>{
    const c = globalThis?.crypto;
    if (typeof c?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined, consider polyfill');
    return c.getRandomValues(new Uint8Array(len));
};
/** Inclusive-lower, exclusive-upper bigint range assertion. */ const arange = (n, min, max, msg = 'bad number: out of range')=>{
    if (typeof n !== 'bigint') throw new TypeError(msg);
    if (min <= n && n < max) return n;
    throw new RangeError(msg);
};
/** Canonical modular reduction. Callers must provide a positive modulus. */ const mod = (a, b = P)=>(a %= b) >= 0n ? a : b + a;
// Low-255-bit mask used by the `2^255 - 19` fast reduction in `modP(...)`.
const P_MASK = (1n << 255n) - 1n;
// Fast reduction for the special prime `2^255 - 19`. This path assumes nonnegative inputs; the
// generic fallback would simply be `mod(num, P)`.
const modP = (num)=>{
    if (num < 0n) throw new RangeError('negative coordinate');
    let r = (num >> 255n) * 19n + (num & P_MASK);
    r = (r >> 255n) * 19n + (r & P_MASK);
    return r % P;
};
// Reduce modulo the subgroup order stored in implementation constant `N` (RFC 8032's `L`).
const modN = (a)=>mod(a, N);
/** Modular inversion using extended euclidean GCD. Variable-time (non-CT). */ const invert = (number, modulo)=>{
    if (number === 0n) throw new Error('invert: expected non-zero number');
    // modulo = 1 is the zero ring: gcd(x, 1) = 1 makes the loop below "succeed" and return the
    // useless inverse 0. Reject it like pow() and invertCt() do.
    if (modulo <= 1n) throw new Error('invert: expected modulus > 1, got ' + modulo);
    // This is variable-time: the loop count depends on `number`.
    let a = mod(number, modulo);
    let b = modulo;
    // Only the Bézout coefficient of `number` (x/u chain) is tracked; the coefficient of `modulo`
    // never affects the output, so it is not computed.
    // prettier-ignore
    let x = 0n, u = 1n;
    while(a !== 0n){
        const q = b / a;
        const r = b - a * q;
        const m = x - u * q;
        // prettier-ignore
        b = a, a = r, x = u, u = m;
    }
    const gcd = b;
    if (gcd !== 1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
};
// Dynamic lookup keeps sync/async hash providers configurable at runtime. Both exported slots are
// caller-owned and may be unset; wrapper helpers use this lookup first and then enforce the digest
// contract instead of trusting provider output.
const _hash = (name)=>{
    // @ts-ignore
    const fn = hashes[name];
    if (typeof fn !== 'function') throw new Error('hashes.' + name + ' not set');
    return fn;
};
// All exported provider slots are caller-configurable and may be unset or return arbitrary values,
// so wrapper helpers must enforce the exact 64-byte SHA-512 digest contract instead of trusting providers.
const callHash = (name, ...m)=>abytes(_hash(name)(concatBytes(...m)), 64, 'digest');
const callHashAsync = async (name, ...m)=>abytes(await _hash(name)(concatBytes(...m)), 64, 'digest');
/**
 * SHA-512 helper used by the synchronous API.
 * @param msg - Message bytes to hash.
 * @returns 64-byte SHA-512 digest.
 * @example
 * Hash message bytes after wiring the synchronous SHA-512 implementation.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const digest = ed.hash(new Uint8Array([1, 2, 3]));
 * ```
 */ // Public helper validates the message boundary explicitly; the configured provider is still looked
// up dynamically and its output is checked with `callHash(...)`.
const hash = (msg)=>callHash('sha512', abytes(msg, undefined, 'message'));
// Runtime class guard: this is `instanceof Point`, so cross-realm / duplicate-bundle Point objects
// are rejected even if they are structurally identical.
const apoint = (p)=>{
    if (p instanceof Point) return p;
    throw new TypeError('Point expected');
};
// ## End of Helpers
// -----------------
// Exclusive upper bound `2^256` used by 32-byte decode/serialization range checks.
const B256 = 2n ** 256n;
/**
 * Point in XYZT extended coordinates.
 * @param X - X coordinate.
 * @param Y - Y coordinate.
 * @param Z - Projective Z coordinate.
 * @param T - Cached cross-product term.
 * @example
 * Do point arithmetic with the built-in base point and encode the result as hex.
 *
 * ```ts
 * const hex = Point.BASE.double().toHex();
 * ```
 */ class Point {
    static BASE;
    static ZERO;
    X;
    Y;
    Z;
    T;
    // Constructor only bounds-checks and freezes XYZT coordinates; it does not prove the point is
    // on-curve or that T matches X*Y/Z.
    constructor(X, Y, Z, T){
        const max = B256;
        this.X = arange(X, 0n, max);
        this.Y = arange(Y, 0n, max);
        this.Z = arange(Z, 1n, max);
        this.T = arange(T, 0n, max);
        freeze(this);
    }
    static CURVE() {
        return ed25519_CURVE;
    }
    static fromAffine(p) {
        return new Point(p.x, p.y, 1n, modP(p.x * p.y));
    }
    /** RFC8032 5.1.3: Uint8Array to Point. */ static fromBytes(bytes, zip215 = false) {
        const normed = snapshotBytes(bytes, 'point', LEN); // owned copy: sign-bit mask below mutates it
        // adjust first LE byte = last BE byte
        const lastByte = normed[31];
        normed[31] = lastByte & ~0x80;
        const y = bytesToNumberLE(normed);
        // After clearing the sign bit, parsed `y` is always < 2^255. ZIP-215 still accepts the full
        // post-mask range here, while strict RFC8032 decoding further requires `y < p`.
        if (!zip215) arange(y, 0n, P);
        const y2 = modP(y * y); // y²
        const u = mod(y2 - 1n); // u=y²-1
        const v = modP(_d * y2 + 1n); // v=dy²+1
        let { isValid, value: x } = uvRatio(u, v); // (uv³)(uv⁷)^(p-5)/8; square root
        if (!isValid) throw new Error('bad point: y not sqrt'); // not square root: bad point
        const isLastByteOdd = !!(lastByte & 0x80); // x_0, last bit
        // ZIP-215-compatible decoding keeps the x=0 / sign-bit=1 encoding accepted; strict RFC 8032
        // rejects it, but the vendored ZIP-215 compliance vectors include this form in A/R bytes.
        if (!zip215 && x === 0n && isLastByteOdd) throw new Error('bad point: x==0, isLastByteOdd'); // x=0, x_0=1
        if (isLastByteOdd !== !!(x & 1n)) x = mod(-x); // adjust sign of x coordinate
        return new Point(x, y, 1n, modP(x * y)); // Z=1, T=xy
    }
    static fromHex(hex, zip215) {
        return Point.fromBytes(hexToBytes(hex), zip215);
    }
    get x() {
        return this.toAffine().x;
    }
    get y() {
        return this.toAffine().y;
    }
    /** Checks if the point is valid and on-curve. */ assertValidity() {
        const a = _a;
        const d = _d;
        const p = this;
        // Intentional stricter-than-on-curve policy: reject ZERO by default because many protocols
        // require a non-zero point, and silently accepting identity points is a common caller mistake.
        if (p.is0()) throw new Error('bad point: ZERO');
        // Equation in affine coordinates: ax² + y² = 1 + dx²y²
        // Equation in projective coordinates (X/Z, Y/Z, Z):  (aX² + Y²)Z² = Z⁴ + dX²Y²
        const { X, Y, Z, T } = p;
        const X2 = modP(X * X); // X²
        const Y2 = modP(Y * Y); // Y²
        const Z2 = modP(Z * Z); // Z²
        const Z4 = modP(Z2 * Z2); // Z⁴
        const aX2 = modP(X2 * a); // aX²
        const left = modP(Z2 * (aX2 + Y2)); // (aX² + Y²)Z²
        const right = mod(Z4 + modP(d * modP(X2 * Y2))); // Z⁴ + dX²Y²
        if (left !== right) throw new Error('bad point: equation left != right (1)');
        // In Extended coordinates we also have T, which is x*y=T/Z: check X*Y == Z*T
        const XY = modP(X * Y);
        const ZT = modP(Z * T);
        if (XY !== ZT) throw new Error('bad point: equation left != right (2)');
        return this;
    }
    /** Equality check: compare points P&Q. */ equals(other) {
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const { X: X2, Y: Y2, Z: Z2 } = apoint(other); // checks class equality
        return modP(X1 * Z2) === modP(X2 * Z1) && modP(Y1 * Z2) === modP(Y2 * Z1);
    }
    is0() {
        return this.equals(I);
    }
    /** Flip point over y coordinate. */ negate() {
        return new Point(mod(-this.X), this.Y, this.Z, mod(-this.T));
    }
    /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */ double() {
        const { X: X1, Y: Y1, Z: Z1 } = this;
        const a = _a;
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
        const A = modP(X1 * X1);
        const B = modP(Y1 * Y1);
        const C = modP(2n * Z1 * Z1);
        const D = modP(a * A);
        const x1y1 = mod(X1 + Y1);
        const E = mod(modP(x1y1 * x1y1) - A - B);
        const G = mod(D + B);
        const F = mod(G - C);
        const H = mod(D - B);
        const X3 = modP(E * F);
        const Y3 = modP(G * H);
        const T3 = modP(E * H);
        const Z3 = modP(F * G);
        return new Point(X3, Y3, Z3, T3);
    }
    /** Point addition. Complete formula. Cost: `9M + 1*a + 1*d + 7add`. */ add(other) {
        const { X: X1, Y: Y1, Z: Z1, T: T1 } = this;
        const { X: X2, Y: Y2, Z: Z2, T: T2 } = apoint(other); // doesn't check if other on-curve
        const a = _a;
        const d = _d;
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
        const A = modP(X1 * X2);
        const B = modP(Y1 * Y2);
        const C = modP(modP(T1 * d) * T2);
        const D = modP(Z1 * Z2);
        const E = mod(modP(mod(X1 + Y1) * mod(X2 + Y2)) - A - B);
        const F = mod(D - C);
        const G = mod(D + C);
        const H = mod(B - modP(a * A));
        const X3 = modP(E * F);
        const Y3 = modP(G * H);
        const T3 = modP(E * H);
        const Z3 = modP(F * G);
        return new Point(X3, Y3, Z3, T3);
    }
    subtract(other) {
        return this.add(apoint(other).negate());
    }
    /**
     * Point-by-scalar multiplication. Safe mode requires `1 <= n < CURVE.n`.
     * Unsafe mode additionally permits `n = 0` and returns the identity point for that case.
     * Uses {@link wNAF} for base point.
     * Uses fake point to mitigate side-channel leakage.
     * @param n - scalar by which point is multiplied
     * @param safe - safe mode guards against timing attacks; unsafe mode is faster
     */ multiply(n, safe = true) {
        // Mirror noble-curves: unsafe mode still validates scalar range first, but intentionally keeps
        // `n = 0` as the one extra accepted case used by verification-style callers.
        if (!safe && n === 0n) return I;
        arange(n, 1n, N);
        if (!safe && this.is0()) return I;
        if (n === 1n) return this;
        if (this.equals(G)) return wNAF(n).p;
        // init result point & fake point
        let p = I;
        let f = G;
        let d = this;
        // Safe mode always runs 256 iterations so ladder length can't leak the scalar's
        // leading zero bits; unsafe mode stops at the top set bit for speed.
        for(let i = 0; safe ? i < 256 : n > 0n; i++){
            // if bit is present, add to point
            // if not present, add to fake, for timing safety
            if (n & 1n) p = p.add(d);
            else if (safe) f = f.add(d);
            d = d.double();
            n >>= 1n;
        }
        return p;
    }
    multiplyUnsafe(scalar) {
        return this.multiply(scalar, false);
    }
    /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */ toAffine() {
        const { X, Y, Z } = this;
        // Fast-path only for the identity point; all other inputs still go through inversion.
        if (this.equals(I)) return {
            x: 0n,
            y: 1n
        };
        const iz = invert(Z, P);
        // (Z * Z^-1) must be 1, otherwise bad math
        if (modP(Z * iz) !== 1n) throw new Error('invalid inverse');
        // x = X*Z^-1; y = Y*Z^-1
        return {
            x: modP(X * iz),
            y: modP(Y * iz)
        };
    }
    toBytes() {
        const { x, y } = this.toAffine();
        const b = numTo32bLE(y);
        // store sign in first LE byte
        b[31] |= x & 1n ? 0x80 : 0;
        return b;
    }
    toHex() {
        return bytesToHex(this.toBytes());
    }
    clearCofactor() {
        return this.multiply(8n, false); // h = 8
    }
    isSmallOrder() {
        return this.clearCofactor().is0();
    }
    isTorsionFree() {
        // Multiply by big number N. We can't `mul(N)` because of checks. Instead, we `mul(N/2)*2+1`;
        // N is odd, so N/2 truncates and the final `add(this)` is always needed.
        return this.multiply(N / 2n, false).double().add(this).is0();
    }
}
/** Generator / base point */ const G = new Point(Gx, Gy, 1n, mod(Gx * Gy));
/** Identity / zero point */ const I = new Point(0n, 1n, 1n, 0n);
// Static aliases
Point.BASE = G;
Point.ZERO = I;
const numTo32bLE = (num)=>hexToBytes(padh(arange(num, 0n, B256), 64)).reverse();
// Caller-enforced width: some sites require 32-byte RFC encodings, while others intentionally feed
// wider SHA-512 output chunks through the same little-endian parser.
const bytesToNumberLE = (b)=>BigInt('0x' + bytesToHex(Uint8Array.from(abytes(b)).reverse()));
const pow2 = (x, power)=>{
    // pow2(x, 4) == x^(2^4)
    // Negative `power` values are not rejected here and currently leave `x` unchanged.
    let r = x;
    while(power-- > 0){
        r = modP(r * r);
    }
    return r;
};
// prettier-ignore
const pow_2_252_3 = (x)=>{
    const x2 = modP(x * x); // x^2,       bits 1
    const b2 = modP(x2 * x); // x^3,       bits 11
    const b4 = modP(pow2(b2, 2) * b2); // x^(2^4-1), bits 1111
    const b5 = modP(pow2(b4, 1) * x); // x^(2^5-1), bits 11111
    const b10 = modP(pow2(b5, 5) * b5); // x^(2^10-1)
    const b20 = modP(pow2(b10, 10) * b10); // x^(2^20-1)
    const b40 = modP(pow2(b20, 20) * b20); // x^(2^40-1)
    const b80 = modP(pow2(b40, 40) * b40); // x^(2^80-1)
    const b160 = modP(pow2(b80, 80) * b80); // x^(2^160-1)
    const b240 = modP(pow2(b160, 80) * b80); // x^(2^240-1)
    const b250 = modP(pow2(b240, 10) * b10); // x^(2^250-1)
    return modP(pow2(b250, 2) * x); // x^((p-5)/8), used by RFC8032 point decode
};
const RM1 = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n; // 2^((p-1)/4) = sqrt(-1)
// RFC8032 §5.1.3 square-root helper for point decompression. `value` is only meaningful when
// `isValid` is true; callers are also expected to pass canonical field elements with non-zero `v`.
// prettier-ignore
const uvRatio = (u, v)=>{
    const v3 = modP(v * modP(v * v)); // v³
    const v7 = modP(modP(v3 * v3) * v); // v⁷
    const pow = pow_2_252_3(modP(u * v7)); // (uv⁷)^(p-5)/8
    let x = modP(u * modP(v3 * pow)); // (uv³)(uv⁷)^(p-5)/8
    const vx2 = modP(v * modP(x * x)); // vx²
    const root1 = x; // First root candidate
    const root2 = modP(x * RM1); // Second root candidate; RM1 is √-1
    const useRoot1 = vx2 === u; // If vx² = u (mod p), x is a square root
    const useRoot2 = vx2 === mod(-u); // If vx² = -u, set x <-- x * 2^((p-1)/4)
    const noRoot = vx2 === mod(-u * RM1); // There is no valid root, vx² = -u√-1
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2; // We return root2 anyway, for const-time
    if ((mod(x) & 1n) === 1n) x = mod(-x); // edIsNegative
    return {
        isValid: useRoot1 || useRoot2,
        value: x
    };
};
// Reduce a little-endian byte string modulo the subgroup order `N` (RFC 8032's `L`); the `hash`
// param name reflects the common caller shape, not an input restriction.
const modL_LE = (hash)=>modN(bytesToNumberLE(hash));
// RFC8032 5.1.5. Split the 64-byte hashed seed into the clamped scalar half and nonce prefix.
const hashedToExtK = (hashed)=>{
    // slice creates a copy, unlike subarray
    const copy = snapshotBytes(hashed);
    const head = copy.slice(0, 32);
    head[0] &= 248; // Clamp bits: 0b1111_1000
    head[31] &= 127; // 0b0111_1111
    head[31] |= 64; // 0b0100_0000
    const prefix = copy.slice(32); // secret key "prefix"
    // RFC words this as `[s]B`; reducing the clamped little-endian scalar modulo `N` is equivalent
    // for base-point multiplication because `G` already has subgroup order `N`.
    const scalar = modL_LE(head);
    const point = G.multiply(scalar); // public key point
    const pointBytes = point.toBytes(); // point serialized to Uint8Array
    return {
        head,
        prefix,
        scalar,
        point,
        pointBytes
    };
};
// RFC8032 5.1.5; getPublicKey async, sync. Hash secret key and extract point.
const getExtendedPublicKeyAsync = (secretKey)=>callHashAsync('sha512Async', abytes(secretKey, LEN, 'secretKey')).then(hashedToExtK);
const getExtendedPublicKey = (secretKey)=>hashedToExtK(callHash('sha512', abytes(secretKey, LEN, 'secretKey')));
/**
 * Creates a 32-byte Ed25519 public key from the RFC 8032 32-byte secret-key seed. Async.
 * @param secretKey - 32-byte RFC 8032 secret-key seed, not a 64-byte expanded secret key.
 * @returns 32-byte public key.
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Derive the public key bytes for a newly generated signer secret.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 *
 * const secretKey = ed.utils.randomSecretKey();
 * const publicKey = await ed.getPublicKeyAsync(secretKey);
 * ```
 */ const getPublicKeyAsync = (secretKey)=>getExtendedPublicKeyAsync(secretKey).then((p)=>p.pointBytes);
/**
 * Creates a 32-byte Ed25519 public key from the RFC 8032 32-byte secret-key seed.
 * To use, set `hashes.sha512` first.
 * @param secretKey - 32-byte RFC 8032 secret-key seed, not a 64-byte expanded secret key.
 * @returns 32-byte public key.
 * @throws If synchronous SHA-512 has not been configured in `hashes`. {@link Error}
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Derive the public key entirely through the synchronous API.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const secretKey = ed.utils.randomSecretKey();
 * const publicKey = ed.getPublicKey(secretKey);
 * ```
 */ const getPublicKey = (secretKey)=>getExtendedPublicKey(secretKey).pointBytes;
const hashFinishAsync = async (res)=>res[1](await callHashAsync('sha512Async', res[0]));
const hashFinishSync = (res)=>res[1](callHash('sha512', res[0]));
// Code, shared between sync & async sign
const _sign = (e, rBytes, msg)=>{
    const { pointBytes: A, scalar: s } = e;
    const r = modL_LE(rBytes); // r was created outside, reduce it modulo L
    // RFC 8032 5.1.6 allows r mod L = 0, and SUPERCOP ref10 accepts the resulting identity-point
    // signature.
    // We intentionally keep the safe multiply() rejection here so a miswired all-zero SHA-512 provider
    // fails loudly instead of silently producing a degenerate signature.
    const R = G.multiply(r).toBytes(); // R = [r]B
    const hashable = concatBytes(R, A, msg); // dom2(F, C) || R || A || PH(M)
    const finish = (hashed)=>{
        // k = SHA512(dom2(F, C) || R || A || PH(M))
        const S = modN(r + modL_LE(hashed) * s); // S = (r + k * s) mod L; 0 <= s < l
        return abytes(concatBytes(R, numTo32bLE(S)), 64); // 64-byte sig: 32-byte encoded R point || 32-byte LE(S)
    };
    return [
        hashable,
        finish
    ];
};
/**
 * Signs message using secret key. Async.
 * Follows RFC8032 5.1.6.
 * @param message - Message bytes to sign.
 * @param secretKey - 32-byte RFC 8032 secret-key seed, not a 64-byte expanded secret key.
 * @returns 64-byte Ed25519 signature.
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Sign an arbitrary message with a fresh Ed25519 secret key.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 *
 * const secretKey = ed.utils.randomSecretKey();
 * const message = new Uint8Array([1, 2, 3]);
 * const signature = await ed.signAsync(message, secretKey);
 * ```
 */ const signAsync = async (message, secretKey)=>{
    const m = snapshotBytes(message, 'message');
    const e = await getExtendedPublicKeyAsync(secretKey);
    // r = SHA512(dom2(F, C) || prefix || PH(M)); then generate R, k, S and the signature.
    return hashFinishAsync(_sign(e, await callHashAsync('sha512Async', e.prefix, m), m));
};
/**
 * Signs message using secret key. To use, set `hashes.sha512` first.
 * Follows RFC8032 5.1.6.
 * @param message - Message bytes to sign.
 * @param secretKey - 32-byte RFC 8032 secret-key seed, not a 64-byte expanded secret key.
 * @returns 64-byte Ed25519 signature.
 * @throws If synchronous SHA-512 has not been configured in `hashes`. {@link Error}
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Use the sync API when you've wired a SHA-512 implementation yourself.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const secretKey = ed.utils.randomSecretKey();
 * const signature = ed.sign(new Uint8Array([1, 2, 3]), secretKey);
 * ```
 */ const sign = (message, secretKey)=>{
    const m = snapshotBytes(message, 'message');
    const e = getExtendedPublicKey(secretKey);
    // r = SHA512(dom2(F, C) || prefix || PH(M)); then generate R, k, S and the signature.
    return hashFinishSync(_sign(e, callHash('sha512', e.prefix, m), m));
};
// Exported defaults favor ZIP-215 interoperability semantics; callers must opt into the stricter
// branch with `{ zip215: false }`.
// Preserves the exported ZIP-215 default for `{}` / `{ zip215: undefined }`, not just omitted opts.
const getZip215 = (options)=>{
    if (options === null || typeof options !== 'object') throw new TypeError('expected valid options object');
    return options.zip215 ?? true;
};
const _verify = (sig, msg, publicKey, options)=>{
    sig = abytes(sig, 64, 'signature'); // Signature hex str/Bytes, must be 64 bytes
    msg = abytes(msg, undefined, 'message'); // Message hex str/Bytes
    publicKey = abytes(publicKey, LEN, 'publicKey');
    const zip215 = getZip215(options);
    // zip215=false keeps the library's stricter branch, which still canonicalizes `R` / `A` before
    // hashing and rejects small-order public keys earlier than pure RFC8032 text would require.
    const r = sig.subarray(0, LEN);
    const s = bytesToNumberLE(sig.subarray(LEN, 64)); // Decode second half as an integer S;
    let A, R, SB;
    let hashable = Uint8Array.of();
    let finished = false;
    try {
        // zip215=true is good for consensus-critical apps. =false follows RFC8032 / NIST186-5.
        // zip215=true:  0 <= y < MASK (2^256 for ed25519)
        // zip215=false: 0 <= y < P (2^255-19 for ed25519)
        A = Point.fromBytes(publicKey, zip215);
        R = Point.fromBytes(r, zip215);
        SB = G.multiply(s, false); // 0 <= s < l is done inside
        // ZIP-215 accepts noncanonical / unreduced point encodings, so the challenge hash must use the
        // exact signature/public-key bytes rather than canonicalized re-encodings of the decoded points.
        hashable = concatBytes(r, publicKey, msg); // dom2(F, C) || R || A || PH(M)
        finished = true;
    } catch (error) {}
    const finish = (hashed)=>{
        if (!finished) return false;
        // Policy: strict mode intentionally rejects all small-order public keys, even though the raw RFC
        // equation text is looser here. This matches libsodium and avoids weak / ambiguous verification
        // outcomes where unusual low-order public keys can make distinct key/signature combinations verify.
        if (!zip215 && A.isSmallOrder()) return false;
        // k = SHA512(dom2(F, C) || R || A || PH(M))
        const k = modL_LE(hashed);
        const RkA = R.add(A.multiply(k, false));
        // Extended group equation
        // [8][S]B = [8]R + [8][k]A'
        return RkA.subtract(SB).clearCofactor().is0();
    };
    return [
        hashable,
        finish
    ];
};
/**
 * Verifies a signature on message and public key. Async.
 * The implementation is based on RFC8032 5.1.7, but default opts use ZIP-215 semantics; pass
 * `{ zip215: false }` for the library's stricter branch.
 * @param signature - 64-byte signature.
 * @param message - Signed message bytes.
 * @param publicKey - 32-byte public key.
 * @param opts - Verification options. Defaults to ZIP-215 semantics. See {@link EdDSAVerifyOpts}.
 * @returns `true` when the signature is valid.
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Verify the signature against the same message and derived public key.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 *
 * const secretKey = ed.utils.randomSecretKey();
 * const message = new Uint8Array([1, 2, 3]);
 * const publicKey = await ed.getPublicKeyAsync(secretKey);
 * const signature = await ed.signAsync(message, secretKey);
 * const isValid = await ed.verifyAsync(signature, message, publicKey);
 * ```
 */ const verifyAsync = async (signature, message, publicKey, opts = {})=>hashFinishAsync(_verify(signature, message, publicKey, opts));
/**
 * Verifies a signature on message and public key using the synchronous hash path.
 * The implementation is based on RFC8032 5.1.7, but default opts use ZIP-215 semantics; pass
 * `{ zip215: false }` for the library's stricter branch.
 * @param signature - 64-byte signature.
 * @param message - Signed message bytes.
 * @param publicKey - 32-byte public key.
 * @param opts - Verification options. Defaults to ZIP-215 semantics. See {@link EdDSAVerifyOpts}.
 * @returns `true` when the signature is valid.
 * @throws If synchronous SHA-512 has not been configured in `hashes`. {@link Error}
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Verify a signature entirely through the synchronous API.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const secretKey = ed.utils.randomSecretKey();
 * const message = new Uint8Array([1, 2, 3]);
 * const publicKey = ed.getPublicKey(secretKey);
 * const signature = ed.sign(message, secretKey);
 * const isValid = ed.verify(signature, message, publicKey);
 * ```
 */ const verify = (signature, message, publicKey, opts = {})=>hashFinishSync(_verify(signature, message, publicKey, opts));
/**
 * Math, hex, byte helpers. Not in `utils` because utils share API with noble-curves.
 * Exposes the same low-level field-default `mod` reducer and non-CT `invert` helper used
 * internally.
 * @example
 * Convert bytes to a hex string with the low-level helper namespace.
 *
 * ```ts
 * const hex = etc.bytesToHex(new Uint8Array([1, 2, 3]));
 * ```
 */ const etc = /* @__PURE__ */ freeze({
    bytesToHex,
    hexToBytes,
    concatBytes,
    mod,
    invert,
    randomBytes
});
/**
 * Hash implementations used by the synchronous API plus the default async WebCrypto provider.
 * Both slots are configurable API surface; wrapper helpers revalidate that providers still return
 * 64-byte SHA-512 digests.
 * @example
 * Provide a SHA-512 implementation before calling synchronous helpers.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const { publicKey } = ed.keygen();
 * ```
 */ const hashes = {
    sha512Async: async (message)=>{
        const s = globalThis?.crypto?.subtle;
        if (!s) throw new Error('crypto.subtle must be defined, consider polyfill');
        return new Uint8Array(await s.digest('SHA-512', concatBytes(message)));
    },
    sha512: undefined
};
// Returns the final 32-byte Ed25519 secret-key seed verbatim, generating fresh random bytes only
// when omitted.
const randomSecretKey = (seed)=>{
    return abytes(seed === undefined ? randomBytes() : seed, LEN, 'seed');
};
/**
 * Generates a secret/public keypair.
 * @param seed - Optional 32-byte Ed25519 secret-key seed, returned verbatim as `secretKey`.
 * @returns Keypair with `secretKey` and `publicKey`.
 * @throws If synchronous SHA-512 has not been configured in `hashes`. {@link Error}
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Generate a new keypair through the synchronous API after wiring SHA-512.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 * import { sha512 } from '@noble/hashes/sha2.js';
 *
 * ed.hashes.sha512 = sha512;
 * const { secretKey, publicKey } = ed.keygen();
 * ```
 */ const keygen = (seed)=>{
    const secretKey = randomSecretKey(seed);
    const publicKey = getPublicKey(secretKey);
    return {
        secretKey,
        publicKey
    };
};
/**
 * Generates a secret/public keypair asynchronously.
 * @param seed - Optional 32-byte Ed25519 secret-key seed, returned verbatim as `secretKey`.
 * @returns Keypair with `secretKey` and `publicKey`.
 * @throws On wrong argument types. {@link TypeError}
 * @throws On wrong argument ranges or values. {@link RangeError}
 * @example
 * Generate a new keypair through the asynchronous WebCrypto-backed path.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 *
 * const { secretKey, publicKey } = await ed.keygenAsync();
 * ```
 */ const keygenAsync = async (seed)=>{
    const secretKey = randomSecretKey(seed);
    const publicKey = await getPublicKeyAsync(secretKey);
    return {
        secretKey,
        publicKey
    };
};
/**
 * Ed25519-specific key utilities.
 * `utils.getExtendedPublicKey*` expose secret-derived internals (`head`, `prefix`, `scalar`, and
 * point objects), not just public-key bytes.
 * @example
 * Generate a new Ed25519 secret key and derive the matching public key.
 *
 * ```ts
 * import * as ed from '@noble/ed25519';
 *
 * const secretKey = ed.utils.randomSecretKey();
 * const publicKey = await ed.getPublicKeyAsync(secretKey);
 * ```
 */ const utils = /* @__PURE__ */ freeze({
    getExtendedPublicKeyAsync,
    getExtendedPublicKey,
    randomSecretKey
});
// ## Precomputes
// --------------
// Fixed W=8 window: 33 windows (ceil(256/8) + 1, NOT 32 - see wNAF loop), 128 points per window.
// Layout is grouped by window: each block stores the positive multiples `1*base .. 128*base` for
// that window, and the extra `+1` window absorbs carries from signed-digit recoding.
const precompute = ()=>{
    const points = [];
    let p = G;
    let b;
    for(let w = 0; w < 33; w++){
        b = p;
        points.push(b);
        for(let i = 1; i < 128; i++){
            b = b.add(p);
            points.push(b);
        } // i=1, bc we skip 0
        p = b.double();
    }
    return points;
};
let Gpows = undefined; // shared process-wide cache of base-point precomputes
// Branch-based negate helper used for JS/JIT mitigation symmetry, not a strict constant-time claim.
const ctneg = (cnd, p)=>{
    const n = p.negate();
    return cnd ? n : p;
};
/**
 * Precomputes give 12x faster getPublicKey(), 10x sign(), 2x verify() by
 * caching multiples of G (base point). Cache is stored in 32MB of RAM.
 * Any time `G.multiply` is done, precomputes are used.
 * Not used for getSharedSecret, which instead multiplies random pubkey `P.multiply`.
 *
 * w-ary non-adjacent form (wNAF) precomputation method is 10% slower than windowed method,
 * but takes 2x less RAM. RAM reduction is possible by utilizing `.subtract`.
 * Returns the real accumulator `p` plus a fake accumulator `f`; callers only care about `p`, while
 * `f` exists to keep similar work in zero-digit branches as a JS/JIT side-channel mitigation.
 *
 * !! Precomputes can be disabled by commenting-out call of the wNAF() inside Point#multiply().
 */ const wNAF = (n)=>{
    const comp = Gpows || (Gpows = precompute());
    let p = I;
    let f = G; // f must be G, or could become I in the end
    for(let w = 0; w < 33; w++){
        let wbits = Number(n & 255n); // extract W=8 bits.
        n >>= 8n; // shift number by W=8 bits.
        // We use negative indexes to reduce size of precomputed table by 2x.
        // Instead of needing precomputes 0..256, we only calculate them for 0..128.
        // If an index > 128 is found, we do (256-index) - where 256 is next window.
        // Naive: index +127 => 127, +224 => 224
        // Optimized: index +127 => 127, +224 => 256-32
        if (wbits > 128) {
            wbits -= 256;
            n += 1n;
        }
        const off = w * 128; // offset of this window's block; also the fake-add index
        const offP = off + Math.abs(wbits) - 1; // real-add index; both offsets always evaluated
        const isOddW = w % 2 !== 0; // conditions, evaluate both; alternates fake-add sign per window
        const isNeg = wbits < 0;
        if (wbits === 0) {
            // wbits == 0 means the real index would be I: can't add it. Add window offset `off` instead.
            f = f.add(ctneg(isOddW, comp[off])); // bits are 0: add garbage to fake point
        } else {
            p = p.add(ctneg(isNeg, comp[offP])); // bits are 1: add to result point
        }
    }
    if (n !== 0n) throw new Error('invalid wnaf');
    return {
        p,
        f
    }; // return both real and fake points for JIT/leakage-shape symmetry
};
;
}),
"[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_md.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chi",
    ()=>Chi,
    "HashMD",
    ()=>HashMD,
    "Maj",
    ()=>Maj,
    "SHA224_IV",
    ()=>SHA224_IV,
    "SHA256_IV",
    ()=>SHA256_IV,
    "SHA384_IV",
    ()=>SHA384_IV,
    "SHA512_IV",
    ()=>SHA512_IV
]);
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_u64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
;
;
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD {
    blockLen;
    outputLen;
    canXOF = false;
    padOffset;
    isLE;
    // For partial updates less than block size
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE){
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        let processed = false;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path only when there is no buffered partial block: `take === blockLen` implies
            // `this.pos === 0`, so we can process full blocks directly from the input view.
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                processed = true;
                continue;
            }
            // When the whole input is buffered in one go (common for short messages), passing `data`
            // directly avoids allocating a subarray view.
            buffer.set(pos === 0 && take === len ? data : data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
                processed = true;
            }
        }
        this.length += data.length;
        // Shared schedule buffers only pick up input-derived words inside process(); if everything
        // was buffered without processing, there is nothing to zero.
        if (processed) this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message, then zero-pad the rest of the block
        buffer[pos++] = 0b10000000;
        buffer.fill(0, pos);
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            buffer.fill(0);
        }
        // `padOffset` reserves the whole length field. For SHA-384/512 the high 64 bits stay zero from
        // the padding fill above, and JS will overflow before user input can make that half non-zero.
        // So we only need to write the low 64 bits here (`length * 8` only scales the exponent of an
        // integer below 2**53, so the split inside the helper stays exact).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setU64FromNum"])(view, blockLen - 8, this.length * 8, isLE);
        this.process(view, 0);
        // The final block above is processed outside update(), so the shared message-schedule
        // buffers (e.g. SHA256_W) would otherwise retain input-derived words after digest().
        this.roundClean();
        // digest() passes our own `buffer` as `out`; reuse its cached view instead of allocating one.
        const oview = out === buffer ? view : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which must be fused in single op with modulo by JIT
        const outLen = len / 4;
        const state = this.get();
        // Subclass-misconfiguration invariant: outputLen must be 32-bit aligned and fit the state.
        if (len % 4 || outLen > state.length) throw new Error('invalid outputLen');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        // Copy before destroy(): subclasses wipe `buffer` during cleanup, but `digest()` must return
        // fresh bytes to the caller.
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneIntoMeta(to) {
        const { buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        // Only partial-block bytes need copying: when `length % blockLen === 0`, `pos === 0` and
        // later `update()` / `digestInto()` overwrite `to.buffer` from the start before reading it.
        if (pos) to.buffer.set(buffer); // Avoid a hot modulo guard.
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]);
}),
"[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_u64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "fromBig",
    ()=>fromBig,
    "fromNumH",
    ()=>fromNumH,
    "fromNumL",
    ()=>fromNumL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "setU64FromNum",
    ()=>setU64FromNum,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ (()=>BigInt(2 ** 32 - 1))();
const _32n = /* @__PURE__ */ BigInt(32);
// Split bigint into two 32-bit halves. With `le=true`, returned fields become `{ h: low, l: high
// }` to match little-endian word order rather than the property names.
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
// Split bigint list into `[highWords, lowWords]` when `le=false`; with `le=true`, the first array
// holds the low halves because `fromBig(...)` swaps the semantic meaning of `h` and `l`.
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
// Combine explicit `(high, low)` 32-bit halves into a bigint; `>>> 0` normalizes signed JS
// bitwise results back to uint32 first, and little-endian callers must swap.
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// Split a JS number into u32 halves without a BigInt allocation. Exact only for integers
// `0 <= n < 2**53`; callers use it on byte / bit counters, which JS length math caps far below
// that (an ArrayBuffer cannot exceed 2**53 - 1 bytes).
const fromNumH = (n)=>n / 2 ** 32 | 0;
const fromNumL = (n)=>n >>> 0;
// Drop-in replacement for `view.setBigUint64(byteOffset, BigInt(n), isLE)` without the per-call
// BigInt allocation. Same `n < 2**53` precondition as `fromNumH`/`fromNumL`.
function setU64FromNum(view, byteOffset, n, isLE) {
    const h = fromNumH(n);
    const l = fromNumL(n);
    view.setUint32(byteOffset, isLE ? l : h, isLE);
    view.setUint32(byteOffset + 4, isLE ? h : l, isLE);
}
// High 32-bit half of a 64-bit logical right shift for `s` in `0..31`.
const shrSH = (h, _l, s)=>h >>> s;
// Low 32-bit half of a 64-bit logical right shift, valid for `s` in `1..31`.
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// High 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped low half.
const rotr32H = (_h, l)=>l;
// Low 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped high half.
const rotr32L = (h, _l)=>h;
// 64-bit left rotates (rotl*) are not defined here: sha3.ts, their only consumer, keeps
// local copies so V8 inlines them into keccakP.
// Add two split 64-bit words and return the split `{ h, l }` sum.
// JS uses 32-bit signed integers for bitwise operations, so we cannot simply shift the carry out
// of the low sum and instead use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
// Unmasked low-word accumulator for 3-way addition; pass the raw result into `add3H(...)`.
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
// High-word finalize step for 3-way addition; `low` must be the untruncated output of `add3L(...)`.
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 4-way addition; pass the raw result into `add4H(...)`.
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
// High-word finalize step for 4-way addition; `low` must be the untruncated output of `add4L(...)`.
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 5-way addition; pass the raw result into `add5H(...)`.
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
// High-word finalize step for 5-way addition; `low` must be the untruncated output of `add5L(...)`.
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
}),
"[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/sha2.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SHA224",
    ()=>_SHA224,
    "_SHA256",
    ()=>_SHA256,
    "_SHA384",
    ()=>_SHA384,
    "_SHA512",
    ()=>_SHA512,
    "_SHA512_224",
    ()=>_SHA512_224,
    "_SHA512_256",
    ()=>_SHA512_256,
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256,
    "sha384",
    ()=>sha384,
    "sha512",
    ()=>sha512,
    "sha512_224",
    ()=>sha512_224,
    "sha512_256",
    ()=>sha512_256
]);
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out {@link https://www.rfc-editor.org/rfc/rfc4634 | RFC 4634} and
 * {@link https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf | FIPS 180-4}.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_md.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_u64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
;
;
;
/**
 * SHA-224 / SHA-256 round constants from RFC 6234 §5.1: the first 32 bits
 * of the cube roots of the first 64 primes (2..311).
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable SHA-224 / SHA-256 message schedule buffer `W_t` from RFC 6234 §6.2 step 1. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
/** Internal SHA-224 / SHA-256 compression engine from RFC 6234 §6.2. */ class SHA2_32B extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HashMD"] {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    // Numeric initializers matter: starting the fields as `undefined` changes
    // V8's field representation and makes sha256 3x slower (measured).
    A = 0;
    B = 0;
    C = 0;
    D = 0;
    E = 0;
    F = 0;
    G = 0;
    H = 0;
    constructor(outputLen, IV){
        super(64, outputLen, 8, false);
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    _cloneInto(to) {
        (to ||= new this.constructor()).set(...this.get());
        return this._cloneIntoMeta(to);
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        // HashMD callers route post-destroy usability through `destroyed`; zeroizing alone still leaves
        // update()/digest() callable on reused instances.
        this.destroyed = true;
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class _SHA256 extends SHA2_32B {
    constructor(){
        super(32, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHA256_IV"]);
    }
}
class _SHA224 extends SHA2_32B {
    constructor(){
        super(28, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHA224_IV"]);
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// SHA-384 / SHA-512 round constants from RFC 6234 §5.2:
// 80 full 64-bit words split into high/low halves.
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["split"]([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable high-half schedule buffer for the RFC 6234 §6.4 64-bit `W_t` words.
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
// Reusable low-half schedule buffer for the RFC 6234 §6.4 64-bit `W_t` words.
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
/** Internal SHA-384 / SHA-512 compression engine from RFC 6234 §6.4. */ class SHA2_64B extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HashMD"] {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    // h -- high 32 bits, l -- low 32 bits
    // Numeric initializers matter: starting the fields as `undefined` changes
    // V8's field representation and slows hashing down (measured on sha256).
    Ah = 0;
    Al = 0;
    Bh = 0;
    Bl = 0;
    Ch = 0;
    Cl = 0;
    Dh = 0;
    Dl = 0;
    Eh = 0;
    El = 0;
    Fh = 0;
    Fl = 0;
    Gh = 0;
    Gl = 0;
    Hh = 0;
    Hl = 0;
    constructor(outputLen, IV){
        super(128, outputLen, 16, false);
        this.Ah = IV[0] | 0;
        this.Al = IV[1] | 0;
        this.Bh = IV[2] | 0;
        this.Bl = IV[3] | 0;
        this.Ch = IV[4] | 0;
        this.Cl = IV[5] | 0;
        this.Dh = IV[6] | 0;
        this.Dl = IV[7] | 0;
        this.Eh = IV[8] | 0;
        this.El = IV[9] | 0;
        this.Fh = IV[10] | 0;
        this.Fl = IV[11] | 0;
        this.Gh = IV[12] | 0;
        this.Gl = IV[13] | 0;
        this.Hh = IV[14] | 0;
        this.Hl = IV[15] | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    _cloneInto(to) {
        (to ||= new this.constructor()).set(...this.get());
        return this._cloneIntoMeta(to);
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shrSH"](W15h, W15l, 7);
            const s0l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shrSL"](W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBH"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shrSH"](W2h, W2l, 6);
            const s1l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBL"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shrSL"](W2h, W2l, 6);
            // SHA512_W[i] = s0 + s1 + SHA512_W[i - 7] + SHA512_W[i - 16];
            const SUMl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add4L"](s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add4H"](SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBH"](Eh, El, 41);
            const sigma1l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBL"](Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add5L"](Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add5H"](T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSH"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 39);
            const sigma0l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrSL"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add3L"](T1l, sigma0l, MAJl);
            Ah = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add3H"](All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["add"](this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        // HashMD callers route post-destroy usability through `destroyed`; zeroizing alone still leaves
        // update()/digest() callable on reused instances.
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class _SHA512 extends SHA2_64B {
    constructor(){
        super(64, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHA512_IV"]);
    }
}
class _SHA384 extends SHA2_64B {
    constructor(){
        super(48, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$_md$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHA384_IV"]);
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See the repo-side derivation recipe in `test/misc/sha2-gen-iv.js`.
 * These IV literals are checked against that script rather than a dedicated
 * local RFC section.
 */ /** SHA-512/224 IV derived by the SHA-512/t recipe in `test/misc/sha2-gen-iv.js` and
 * stored as sixteen big-endian 32-bit halves. */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA-512/256 IV derived by the SHA-512/t recipe in `test/misc/sha2-gen-iv.js` and
 * stored as sixteen big-endian 32-bit halves. */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class _SHA512_224 extends SHA2_64B {
    constructor(){
        super(28, T224_IV);
    }
}
class _SHA512_256 extends SHA2_64B {
    constructor(){
        super(32, T256_IV);
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x01));
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x04));
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x03));
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA384(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x02));
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_256(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x06));
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new _SHA512_224(), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x05));
}),
"[project]/node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if something is Uint8Array. Be careful: nodejs Buffer will return true.
 * @param a - value to test
 * @returns `true` when the value is a Uint8Array-compatible view.
 * @example
 * Check whether a value is a Uint8Array-compatible view.
 * ```ts
 * isBytes(new Uint8Array([1, 2, 3]));
 * ```
 */ __turbopack_context__.s([
    "abool",
    ()=>abool,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "copyBytes",
    ()=>copyBytes,
    "createHasher",
    ()=>createHasher,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "oidNist",
    ()=>oidNist,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "validateObject",
    ()=>validateObject
]);
function isBytes(a) {
    // Plain `instanceof Uint8Array` is too strict for some Buffer / proxy / cross-realm cases.
    // The fallback still requires a real ArrayBuffer view, so plain
    // JSON-deserialized `{ constructor: ... }` spoofing is rejected, and
    // `BYTES_PER_ELEMENT === 1` keeps the fallback on byte-oriented views.
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array' && 'BYTES_PER_ELEMENT' in a && a.BYTES_PER_ELEMENT === 1;
}
// Shared error-message prefix builder. Only called on throw paths, so assert
// success paths never pay for the string concatenation.
const atitle = (title)=>title ? `"${title}" ` : '';
function anumber(n, title = '') {
    if (typeof n !== 'number') throw new TypeError(atitle(title) + 'expected number, got ' + typeof n);
    if (!Number.isSafeInteger(n) || n < 0) throw new RangeError(atitle(title) + 'expected integer >= 0, got ' + n);
    return n;
}
function abool(value, title = '') {
    if (typeof value !== 'boolean') throw new TypeError(atitle(title) + 'expected boolean, got type=' + typeof value);
    return value;
}
function abytes(value, length, title = '') {
    // Success path first: this runs at the start of every update() / digestInto(), and the
    // common `abytes(data)` form must not pay for length handling it does not use.
    if (isBytes(value) && (length === undefined || value.length === length)) return value;
    // Error path: recompute freely to build the exact message.
    if (length !== undefined) anumber(length, 'length');
    const bytes = isBytes(value);
    const ofLen = length !== undefined ? ` of length ${length}` : '';
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = atitle(title) + 'expected Uint8Array' + ofLen + ', got ' + got;
    if (!bytes) throw new TypeError(message);
    throw new RangeError(message);
}
function copyBytes(bytes) {
    // `Uint8Array.from(...)` would also accept arrays / other typed arrays. Keep this helper strict
    // because callers use it at byte-validation boundaries before mutating the detached copy.
    return Uint8Array.from(abytes(bytes));
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new TypeError('expected hash wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
    // HMAC and KDF callers treat these as real byte lengths; allowing zero lets fake wrappers pass
    // validation and can produce empty outputs instead of failing fast.
    if (h.outputLen < 1 || h.blockLen < 1) throw new Error('hash blockLen / outputLen must be >= 1');
}
const aobject = (value, label)=>{
    if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new TypeError((label === 'object' ? '' : `"${label}" `) + 'expected object, got type=' + typeof value);
};
const aopts = (value, label)=>{
    aobject(value, label);
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null) throw new TypeError(`"${label}" expected plain object`);
    // Object.assign() treats an own "__proto__" source key as a write to the target's legacy
    // prototype setter. Reject it before merging so inherited option values cannot be injected.
    if (Object.hasOwn(value, '__proto__')) throw new TypeError(`"${label}.__proto__" is not allowed`);
};
function aexists(instance, checkFinished = true) {
    // Runs on every update()/digestInto(); the flags are library-owned booleans, so only their
    // truthiness is checked - re-validating their type per call was pure hot-path overhead.
    if (instance.destroyed) throw new Error('hash was destroyed');
    if (checkFinished && instance.finished) throw new Error('digest() was already called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'output');
    // `outputLen` is a library-owned readonly number; the negated comparison keeps failing fast
    // when it is missing/NaN (comparisons with undefined/NaN are false) without an anumber() call.
    const min = instance.outputLen;
    if (!(out.length >= min)) {
        throw new RangeError('"output" expected length >= ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n) >>> 0;
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// Strict ASCII nibble parser: non-ASCII hex lookalikes are rejected as undefined.
// ASCII codes: '0'..'9' = 48..57, 'A'..'F' = 65..70, 'a'..'f' = 97..102.
// prettier-ignore
function asciiToBase16(ch) {
    return ch >= 48 && ch <= 57 ? ch - 48 // '2' => 50-48
     : ch >= 65 && ch <= 70 ? ch - (65 - 10) // 'B' => 66-(65-10)
     : ch >= 97 && ch <= 102 ? ch - (97 - 10) // 'b' => 98-(97-10)
     : undefined;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hex string expected, got ' + typeof hex);
    if (hasHexBuiltin) {
        try {
            return Uint8Array.fromHex(hex);
        } catch (error) {
            if (error instanceof SyntaxError) throw new RangeError(error.message);
            throw error;
        }
    }
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new RangeError('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi)); // parse first char, multiply it by 16
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1)); // parse second char
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // example: 'A9' => 10*16 + 9
    }
    return array;
}
function nextTick(onReject) {
    const host = globalThis;
    if (typeof host.scheduler?.yield === 'function') {
        const promise = host.scheduler.yield();
        // Keep the original scheduler rejection; this handler exists only for cleanup.
        if (onReject) promise.catch(onReject);
        return promise;
    }
    return new Promise((resolve)=>host.setTimeout(resolve, 0));
}
async function asyncLoop(iters, tick, cb, onReject) {
    anumber(iters, 'iters');
    anumber(tick, 'tick');
    if (typeof cb !== 'function') throw new TypeError('callback must be a function');
    // Callback is synchronous by contract; asyncLoop only yields between sync work windows.
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick(onReject);
        // Track only synchronous work time; scheduler delay after yielding is outside our budget.
        ts = Date.now();
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new TypeError('string expected');
    const encoded = new TextEncoder().encode(str);
    try {
        // Copy into the current realm for Firefox extension contexts. Callers that own the returned
        // buffer can then wipe it independently of TextEncoder's temporary result.
        return new Uint8Array(encoded); // https://bugzil.la/1681809
    } finally{
        clean(encoded);
    }
}
function kdfInputToBytes(data, errorTitle = '') {
    if (typeof data === 'string') return utf8ToBytes(data);
    return abytes(data, undefined, errorTitle);
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
const validateObject = (object, fields = {}, optFields = {}, title = 'object')=>{
    aobject(object, title);
    aobject(fields, 'fields');
    aobject(optFields, 'optFields');
    function checkField(fieldName, expectedType, isOpt) {
        const label = title === 'object' ? `param "${String(fieldName)}"` : `"${title}.${String(fieldName)}"`;
        // Config fields must be explicit own properties. Optional inherited values are rejected too
        // because callers keep reading the same options object after validation.
        const val = object[fieldName];
        // Runtime objects such as Field instances intentionally satisfy required method slots
        // via their shared prototype.
        if (!Object.hasOwn(object, fieldName) && (isOpt ? val !== undefined : expectedType !== 'function')) {
            throw new TypeError(`${label} is invalid: expected own property`);
        }
        if (isOpt && val === undefined) return;
        const current = typeof val;
        if (current !== expectedType || val === null) throw new TypeError(`${label} is invalid: expected ${expectedType}, got ${current}`);
    }
    const iter = (f, isOpt)=>Object.entries(f).forEach(([k, v])=>checkField(k, v, isOpt));
    iter(fields, false);
    iter(optFields, true);
};
function checkOpts(defaults, opts, title = 'opts') {
    aopts(defaults, 'defaults');
    if (opts !== undefined) aopts(opts, title);
    // Callers read optional fields directly, so omitted values must not fall through to ambient
    // Object.prototype pollution (for example a forged `dkLen` changing SHAKE's default output).
    const merged = Object.assign(Object.create(null), defaults, opts);
    return merged;
}
function createHasher(hashCons, info = {}) {
    if (typeof hashCons !== 'function') throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
    info = checkOpts({}, info, 'info');
    const hashC = (msg, opts)=>hashCons(opts).update(msg).digest();
    const tmp = hashCons(undefined);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts)=>hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
}
function randomBytes(bytesLength = 32) {
    // Match the repo's other length-taking helpers instead of relying on Uint8Array coercion.
    anumber(bytesLength, 'bytesLength');
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    // Web Cryptography API Level 2 §10.1.1:
    // if `byteLength > 65536`, throw `QuotaExceededError`.
    // Keep the guard explicit so callers can see the quota in code
    // instead of discovering it by reading the spec or host errors.
    // This wrapper surfaces the same quota as a stable library RangeError.
    if (bytesLength > 65536) throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix)=>({
        // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
        // Larger suffix values would need base-128 OID encoding and a different length byte.
        oid: Uint8Array.from([
            0x06,
            0x09,
            0x60,
            0x86,
            0x48,
            0x01,
            0x65,
            0x03,
            0x04,
            0x02,
            suffix
        ])
    });
}),
"[project]/node_modules/.pnpm/@stellar+js-xdr@5.0.0/node_modules/@stellar/js-xdr/dist/js-xdr.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseType",
    ()=>BaseType,
    "Reader",
    ()=>Reader,
    "UNBOUNDED_MAX_LENGTH",
    ()=>UNBOUNDED_MAX_LENGTH,
    "Writer",
    ()=>Writer,
    "XdrError",
    ()=>XdrError,
    "array",
    ()=>array,
    "bool",
    ()=>bool,
    "case",
    ()=>case_,
    "double",
    ()=>double,
    "enumType",
    ()=>enumType,
    "field",
    ()=>field,
    "fixedArray",
    ()=>fixedArray,
    "float",
    ()=>float,
    "int32",
    ()=>int32,
    "int64",
    ()=>int64,
    "lazy",
    ()=>lazy,
    "opaque",
    ()=>opaque,
    "option",
    ()=>option,
    "string",
    ()=>string_,
    "struct",
    ()=>struct,
    "uint32",
    ()=>uint32,
    "uint64",
    ()=>uint64,
    "union",
    ()=>union,
    "unionCase",
    ()=>case_,
    "varOpaque",
    ()=>varOpaque,
    "void",
    ()=>void_,
    "voidType",
    ()=>void_
]);
const BRAND = "XdrError";
class XdrError extends Error {
    constructor(message){
        super(message);
        this.name = BRAND;
    }
    /**
   * Brand-based `instanceof` so the check keeps working when the ESM and CJS
   * builds of this package coexist in one dependency graph (each build has its
   * own class identity, so a reference-equality `instanceof` would fail).
   */ static [Symbol.hasInstance](value) {
        return value instanceof Error && value.name === BRAND;
    }
}
function paddingLength(length) {
    return (4 - length % 4) % 4;
}
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function assertLength(value, name) {
    if (!Number.isInteger(value) || value < 0 || value > 4294967295) {
        throw new XdrError(`${name}: expected uint32 length`);
    }
}
function assertIntRange(value, min, max, path) {
    if (typeof value !== "number" || !Number.isInteger(value) || value < min || value > max) {
        throw new XdrError(`${path}: expected integer in range ${min}..${max}`);
    }
}
function assertBigIntRange(value, min, max, path) {
    if (typeof value !== "bigint" || value < min || value > max) {
        throw new XdrError(`${path}: expected bigint in range ${min}..${max}`);
    }
}
function assertNumber(value, path) {
    if (typeof value !== "number") {
        throw new XdrError(`${path}: expected number`);
    }
}
function assertUint8Array(value, path) {
    if (!(value instanceof Uint8Array)) {
        throw new XdrError(`${path}: expected Uint8Array`);
    }
    try {
        Uint8Array.prototype.at.call(value, 0);
    } catch  {
        throw new XdrError(`${path}: Uint8Array is detached or out of bounds`);
    }
}
function assertArray(value, path) {
    if (!Array.isArray(value)) {
        throw new XdrError(`${path}: expected array`);
    }
}
const DEFAULT_MAX_DEPTH = 1500;
class Reader {
    #offset = 0;
    #depth = 0;
    #maxDepth;
    /**
   * One view over the whole input, reused by every scalar read. Building a
   * fresh `DataView` per read (over a fresh `slice()` of the bytes) costs two
   * allocations per integer, which dominates decoding for union- and
   * struct-heavy schemas like Stellar's.
   */ #view;
    /**
   * Input length, snapshot from the view. Bounds checks must use this rather
   * than the live `bytes.length`: over a resizable ArrayBuffer the two can
   * disagree after a resize, and a check that passes against bytes the view
   * cannot see turns into a raw RangeError from the scalar read.
   */ #length;
    bytes;
    constructor(bytes, maxDepth = DEFAULT_MAX_DEPTH){
        if (maxDepth < 0 || !Number.isInteger(maxDepth)) {
            throw new XdrError(`invalid maxDepth ${maxDepth}`);
        }
        this.#maxDepth = maxDepth;
        if (!ArrayBuffer.isView(bytes) || bytes.BYTES_PER_ELEMENT !== 1) {
            throw new TypeError("Reader expects a Uint8Array");
        }
        this.bytes = Object.getPrototypeOf(bytes) === Uint8Array.prototype ? bytes : bytes.byteLength === 0 ? new Uint8Array(0) : new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        this.#view = this.bytes.buffer?.detached ? new DataView(new ArrayBuffer(0)) : new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength);
        this.#length = this.#view.byteLength;
    }
    /**
   * Reserve `size` bytes for an in-place scalar read and return the offset to
   * read them from.
   */ #takeScalar(size, path) {
        if (this.remaining < size) {
            throw new XdrError(`${path}: incomplete XDR data at offset ${this.#offset}, expected ${size} byte(s)`);
        }
        const at = this.#offset;
        this.#offset += size;
        return at;
    }
    get offset() {
        return this.#offset;
    }
    get remaining() {
        return this.#length - this.#offset;
    }
    enter(path) {
        this.#depth += 1;
        if (this.#depth > this.#maxDepth) {
            this.#depth -= 1;
            throw new XdrError(`${path}: max recursion depth ${this.#maxDepth} exceeded`);
        }
    }
    exit() {
        this.#depth -= 1;
    }
    done(path) {
        if (this.remaining !== 0) {
            throw new XdrError(`${path}: trailing ${this.remaining} byte(s) after XDR value`);
        }
    }
    readBytes(length, path) {
        if (length < 0 || !Number.isInteger(length)) {
            throw new XdrError(`${path}: invalid byte length ${length}`);
        }
        if (this.remaining < length) {
            throw new XdrError(`${path}: incomplete XDR data at offset ${this.#offset}, expected ${length} byte(s)`);
        }
        const result = this.bytes.slice(this.#offset, this.#offset + length);
        if (result.length !== length) {
            throw new XdrError(`${path}: input shrank during decode`);
        }
        this.#offset += length;
        return result;
    }
    skipPadding(length, path) {
        if (length < 0 || !Number.isInteger(length)) {
            throw new XdrError(`${path}: invalid byte length ${length}`);
        }
        const padding = paddingLength(length);
        if (padding === 0) {
            return;
        }
        const at = this.#takeScalar(padding, path);
        for(let i = 0; i < padding; i++){
            if (this.bytes[at + i] !== 0) {
                this.#offset = at;
                throw new XdrError(`${path}: non-zero XDR padding`);
            }
        }
    }
    readInt32(path) {
        return this.#view.getInt32(this.#takeScalar(4, path), false);
    }
    readUint32(path) {
        return this.#view.getUint32(this.#takeScalar(4, path), false);
    }
    readBigInt64(path) {
        return this.#view.getBigInt64(this.#takeScalar(8, path), false);
    }
    readBigUint64(path) {
        return this.#view.getBigUint64(this.#takeScalar(8, path), false);
    }
    readFloat32(path) {
        return this.#view.getFloat32(this.#takeScalar(4, path), false);
    }
    readFloat64(path) {
        return this.#view.getFloat64(this.#takeScalar(8, path), false);
    }
}
const INITIAL_BUFFER_SIZE = 8192;
class Writer {
    #buffer = new Uint8Array(INITIAL_BUFFER_SIZE);
    /**
   * View over `#buffer`, reused by every scalar write and rebuilt only when
   * the buffer grows. Writing through a per-call `Uint8Array` + `DataView`
   * pair costs two allocations and a copy per integer.
   */ #view = new DataView(this.#buffer.buffer);
    #offset = 0;
    #depth = 0;
    #maxDepth;
    constructor(maxDepth = DEFAULT_MAX_DEPTH){
        if (maxDepth < 0 || !Number.isInteger(maxDepth)) {
            throw new XdrError(`invalid maxDepth ${maxDepth}`);
        }
        this.#maxDepth = maxDepth;
    }
    get offset() {
        return this.#offset;
    }
    enter(path) {
        this.#depth += 1;
        if (this.#depth > this.#maxDepth) {
            this.#depth -= 1;
            throw new XdrError(`${path}: max recursion depth ${this.#maxDepth} exceeded`);
        }
    }
    exit() {
        this.#depth -= 1;
    }
    writeBytes(bytes) {
        this.#ensureCapacity(bytes.length);
        this.#buffer.set(bytes, this.#offset);
        this.#offset += bytes.length;
    }
    writePadding(length) {
        const padding = paddingLength(length);
        if (padding > 0) {
            this.#ensureCapacity(padding);
            this.#buffer.fill(0, this.#offset, this.#offset + padding);
            this.#offset += padding;
        }
    }
    writeInt32(value) {
        const offset = this.#prepareScalar(4);
        this.#view.setInt32(offset, value, false);
        this.#offset += 4;
    }
    writeUint32(value) {
        const offset = this.#prepareScalar(4);
        this.#view.setUint32(offset, value, false);
        this.#offset += 4;
    }
    writeBigInt64(value) {
        const offset = this.#prepareScalar(8);
        this.#view.setBigInt64(offset, value, false);
        this.#offset += 8;
    }
    writeBigUint64(value) {
        const offset = this.#prepareScalar(8);
        this.#view.setBigUint64(offset, value, false);
        this.#offset += 8;
    }
    writeFloat32(value) {
        const offset = this.#prepareScalar(4);
        this.#view.setFloat32(offset, value, false);
        this.#offset += 4;
    }
    writeFloat64(value) {
        const offset = this.#prepareScalar(8);
        this.#view.setFloat64(offset, value, false);
        this.#offset += 8;
    }
    /**
   * Ensure a scalar fits and return its starting offset without advancing.
   * Callers commit the offset only after the DataView write succeeds.
   */ #prepareScalar(size) {
        this.#ensureCapacity(size);
        return this.#offset;
    }
    toUint8Array() {
        return this.#buffer.slice(0, this.#offset);
    }
    #ensureCapacity(additionalBytes) {
        const requiredLength = this.#offset + additionalBytes;
        if (requiredLength <= this.#buffer.length) {
            return;
        }
        let nextLength = this.#buffer.length;
        while(nextLength < requiredLength){
            nextLength *= 2;
        }
        const nextBuffer = new Uint8Array(nextLength);
        nextBuffer.set(this.#buffer);
        this.#buffer = nextBuffer;
        this.#view = new DataView(nextBuffer.buffer);
    }
}
const UNBOUNDED_MAX_LENGTH = 4294967295;
class BaseType {
    name;
    constructor(name = void 0){
        this.name = name;
    }
    encode(value, options) {
        const writer = new Writer(options?.maxDepth);
        this._write(value, writer, this.name ?? this.kind);
        return writer.toUint8Array();
    }
    decode(input, options) {
        const reader = new Reader(input, options?.maxDepth);
        const value = this._read(reader, this.name ?? this.kind);
        reader.done(this.name ?? this.kind);
        return value;
    }
    validateXdr(input, options) {
        try {
            this.decode(input, options);
            return true;
        } catch (error) {
            if (error instanceof XdrError) {
                return false;
            }
            throw error;
        }
    }
    validate(value) {
        try {
            const writer = new Writer();
            this._write(value, writer, this.name ?? this.kind);
            return true;
        } catch (error) {
            if (error instanceof XdrError) {
                return false;
            }
            throw error;
        }
    }
}
class ArrayType extends BaseType {
    kind = "array";
    element;
    maxLength;
    constructor(element, maxLength){
        super();
        assertLength(maxLength, "array maxLength");
        this.element = element;
        this.maxLength = maxLength;
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            const length = reader.readUint32(path);
            if (length > this.maxLength) {
                throw new XdrError(`${path}: array length ${length} exceeds maximum ${this.maxLength}`);
            }
            if (length > reader.remaining) {
                throw new XdrError(`${path}: array length ${length} exceeds remaining ${reader.remaining} byte(s)`);
            }
            return readArray(reader, length, this.element, path);
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            assertArray(value, path);
            if (value.length > this.maxLength) {
                throw new XdrError(`${path}: array length ${value.length} exceeds maximum ${this.maxLength}`);
            }
            writer.writeUint32(value.length);
            writeArray(value, writer, this.element, path);
        } finally{
            writer.exit();
        }
    }
}
function array(element, maxLength) {
    return new ArrayType(element, maxLength);
}
function readArray(reader, length, element, path) {
    const values = [];
    for(let i = 0; i < length; i += 1){
        const before = reader.offset;
        const value = element._read(reader, `${path}[${i}]`);
        if (reader.offset === before) {
            throw new XdrError(`${path}[${i}]: element type '${element.name ?? element.kind}' consumed no input; an array element must encode to at least one byte`);
        }
        values.push(value);
    }
    return values;
}
function writeArray(values, writer, element, path) {
    let i = 0;
    for (const value of values){
        const before = writer.offset;
        element._write(value, writer, `${path}[${i}]`);
        if (writer.offset === before) {
            throw new XdrError(`${path}[${i}]: element type '${element.name ?? element.kind}' encoded to zero bytes; an array element must encode to at least one byte`);
        }
        i += 1;
    }
}
class BoolType extends BaseType {
    kind = "bool";
    _read(reader, path) {
        const value = reader.readUint32(path);
        if (value === 0) return false;
        if (value === 1) return true;
        throw new XdrError(`${path}: invalid bool discriminant ${value}`);
    }
    _write(value, writer, path) {
        if (typeof value !== "boolean") {
            throw new XdrError(`${path}: expected boolean`);
        }
        writer.writeUint32(value ? 1 : 0);
    }
}
const BOOL_TYPE = new BoolType();
function bool() {
    return BOOL_TYPE;
}
class DoubleType extends BaseType {
    kind = "double";
    _read(reader, path) {
        return reader.readFloat64(path);
    }
    _write(value, writer, path) {
        assertNumber(value, path);
        writer.writeFloat64(value);
    }
}
function double() {
    return new DoubleType();
}
const RESERVED_ENUM_MEMBER_NAMES = /* @__PURE__ */ new Set([
    // Assigning '__proto__' onto the schema would invoke the inherited prototype
    // setter instead of defining a member constant.
    "__proto__",
    "name",
    "kind",
    "encode",
    "decode",
    "validate",
    "_read",
    "_write",
    "nameByValue"
]);
class EnumType extends BaseType {
    kind = "enum";
    // Maps wire value → declared member name. Public so the generic toJson
    // walker can render numeric enums as their string names.
    nameByValue;
    #valuesSet = /* @__PURE__ */ new Set();
    constructor(name, values){
        super(name);
        const nameByValue = /* @__PURE__ */ new Map();
        for (const [memberName, memberValue] of Object.entries(values)){
            assertIntRange(memberValue, -2147483648, 2147483647, `${name}.${memberName}`);
            if (this.#valuesSet.has(memberValue)) {
                throw new XdrError(`${name}: duplicate enum value ${memberValue}`);
            }
            this.#valuesSet.add(memberValue);
            nameByValue.set(memberValue, memberName);
        }
        this.nameByValue = nameByValue;
    }
    _read(reader, path) {
        const value = reader.readInt32(path);
        if (!this.#valuesSet.has(value)) {
            throw new XdrError(`${path}: unknown enum value ${value}`);
        }
        return value;
    }
    _write(value, writer, path) {
        if (typeof value !== "number" || !this.#valuesSet.has(value)) {
            throw new XdrError(`${path}: unknown enum value ${String(value)}`);
        }
        writer.writeInt32(value);
    }
}
function enumType(name, values) {
    for (const memberName of Object.getOwnPropertyNames(values)){
        if (RESERVED_ENUM_MEMBER_NAMES.has(memberName)) {
            throw new XdrError(`${name}: enum member name ${memberName} collides with reserved property`);
        }
    }
    const schema = new EnumType(name, values);
    return Object.assign(schema, values);
}
class FixedArrayType extends BaseType {
    kind = "fixedArray";
    element;
    length;
    constructor(element, length){
        super();
        assertLength(length, "fixedArray length");
        this.element = element;
        this.length = length;
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            if (this.length > reader.remaining) {
                throw new XdrError(`${path}: array length ${this.length} exceeds remaining ${reader.remaining} byte(s)`);
            }
            return readArray(reader, this.length, this.element, path);
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            assertArray(value, path);
            if (value.length !== this.length) {
                throw new XdrError(`${path}: expected array length ${this.length}, got ${value.length}`);
            }
            writeArray(value, writer, this.element, path);
        } finally{
            writer.exit();
        }
    }
}
function fixedArray(element, length) {
    return new FixedArrayType(element, length);
}
class FloatType extends BaseType {
    kind = "float";
    _read(reader, path) {
        return reader.readFloat32(path);
    }
    _write(value, writer, path) {
        assertNumber(value, path);
        writer.writeFloat32(value);
    }
}
function float() {
    return new FloatType();
}
class IntType extends BaseType {
    kind = "int32";
    _read(reader, path) {
        return reader.readInt32(path);
    }
    _write(value, writer, path) {
        assertIntRange(value, -2147483648, 2147483647, path);
        writer.writeInt32(value);
    }
}
function int32() {
    return new IntType();
}
class HyperType extends BaseType {
    kind = "int64";
    _read(reader, path) {
        return reader.readBigInt64(path);
    }
    _write(value, writer, path) {
        assertBigIntRange(value, -(1n << 63n), (1n << 63n) - 1n, path);
        writer.writeBigInt64(value);
    }
}
function int64() {
    return new HyperType();
}
class LazyType extends BaseType {
    kind = "lazy";
    getSchema;
    constructor(getSchema){
        super();
        this.getSchema = getSchema;
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            return this.getSchema()._read(reader, path);
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            this.getSchema()._write(value, writer, path);
        } finally{
            writer.exit();
        }
    }
}
function lazy(getSchema) {
    return new LazyType(()=>getSchema());
}
class OpaqueType extends BaseType {
    constructor(length, name){
        super(name);
        this.length = length;
        assertLength(length, "opaque length");
    }
    length;
    kind = "opaque";
    _read(reader, path) {
        const bytes = reader.readBytes(this.length, path);
        reader.skipPadding(this.length, path);
        return bytes;
    }
    _write(value, writer, path) {
        assertUint8Array(value, path);
        if (value.length !== this.length) {
            throw new XdrError(`${path}: expected ${this.length} byte(s), got ${value.length}`);
        }
        writer.writeBytes(value);
        writer.writePadding(value.length);
    }
}
function opaque(length, name) {
    return new OpaqueType(length, name);
}
class OptionType extends BaseType {
    kind = "option";
    element;
    constructor(element){
        super();
        this.element = element;
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            const present = BOOL_TYPE._read(reader, `${path}.present`);
            if (!present) {
                return null;
            }
            const value = this.element._read(reader, `${path}.value`);
            if (value === null) {
                throw new XdrError(`${path}: present option decoded to null, which is how an absent option is represented; wrap the element in a single-field struct to distinguish the two`);
            }
            return value;
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            BOOL_TYPE._write(value !== null, writer, `${path}.present`);
            if (value !== null) {
                this.element._write(value, writer, `${path}.value`);
            }
        } finally{
            writer.exit();
        }
    }
}
function option(element) {
    if (element.kind === "option") {
        throw new XdrError("option: cannot nest option directly inside option, since an absent outer option and a present-but-absent inner one are both `null`; wrap the inner option in a single-field struct instead");
    }
    return new OptionType(element);
}
class StringType extends BaseType {
    constructor(maxLength){
        super();
        this.maxLength = maxLength;
        assertLength(maxLength, "string maxLength");
    }
    maxLength;
    kind = "string";
    _read(reader, path) {
        const length = reader.readUint32(path);
        if (length > this.maxLength) {
            throw new XdrError(`${path}: string byte length ${length} exceeds maximum ${this.maxLength}`);
        }
        const bytes = reader.readBytes(length, path);
        reader.skipPadding(length, path);
        return bytes;
    }
    _write(value, writer, path) {
        assertUint8Array(value, path);
        if (value.length > this.maxLength) {
            throw new XdrError(`${path}: string byte length ${value.length} exceeds maximum ${this.maxLength}`);
        }
        writer.writeUint32(value.length);
        writer.writeBytes(value);
        writer.writePadding(value.length);
    }
}
function string_(maxLength) {
    return new StringType(maxLength);
}
class StructType extends BaseType {
    kind = "struct";
    // Ordered [fieldName, schema] pairs. Public so the generic toJson/fromJson
    // walker can introspect struct shape without going through internals.
    entries;
    constructor(name, fields){
        super(name);
        if (Object.getOwnPropertyNames(fields).includes("__proto__")) {
            throw new XdrError(`${name}: struct field name '__proto__' is not allowed`);
        }
        this.entries = Object.entries(fields);
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            const value = {};
            for (const [key, schema] of this.entries){
                value[key] = schema._read(reader, `${path}.${key}`);
            }
            return value;
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            if (!isPlainObject(value)) {
                throw new XdrError(`${path}: expected plain object`);
            }
            const record = value;
            for (const [key, schema] of this.entries){
                if (!Object.prototype.hasOwnProperty.call(record, key)) {
                    throw new XdrError(`${path}.${key}: missing struct field`);
                }
                schema._write(record[key], writer, `${path}.${key}`);
            }
        } finally{
            writer.exit();
        }
    }
}
function struct(name, fields) {
    return new StructType(name, fields);
}
class UIntType extends BaseType {
    kind = "uint32";
    _read(reader, path) {
        return reader.readUint32(path);
    }
    _write(value, writer, path) {
        assertIntRange(value, 0, 4294967295, path);
        writer.writeUint32(value);
    }
}
function uint32() {
    return new UIntType();
}
class UHyperType extends BaseType {
    kind = "uint64";
    _read(reader, path) {
        return reader.readBigUint64(path);
    }
    _write(value, writer, path) {
        assertBigIntRange(value, 0n, (1n << 64n) - 1n, path);
        writer.writeBigUint64(value);
    }
}
function uint64() {
    return new UHyperType();
}
const DEFAULT_CASE_NAME = "default";
class UnionType extends BaseType {
    kind = "union";
    // Exposed publicly so the generic toJson/fromJson walker can introspect
    // union shape (discriminator schema, case list, default arm, switch field).
    switchOn;
    cases;
    defaultArm;
    switchKey;
    #casesByDiscriminant = /* @__PURE__ */ new Map();
    constructor(name, switchOn, cases, defaultArm, switchKey){
        super(name);
        if (switchKey === "__proto__") {
            throw new XdrError(`${name}: switchKey '__proto__' is not allowed`);
        }
        this.switchOn = switchOn;
        this.cases = cases;
        this.defaultArm = defaultArm;
        this.switchKey = switchKey;
        if (cases.length === 0 && defaultArm === void 0) {
            throw new XdrError(`${name}: union needs at least one case or a default arm`);
        }
        const names = /* @__PURE__ */ new Set();
        for (const unionCase of cases){
            if (!switchOn.validate(unionCase.discriminant)) {
                throw new XdrError(`${name}.${unionCase.name}: case discriminator ${String(unionCase.discriminant)} is not a valid ${switchOn.name ?? switchOn.kind} value`);
            }
            if (names.has(unionCase.name)) {
                throw new XdrError(`${name}: duplicate union case name ${unionCase.name}`);
            }
            names.add(unionCase.name);
            if (this.#casesByDiscriminant.has(unionCase.discriminant)) {
                throw new XdrError(`${name}: duplicate union discriminator ${String(unionCase.discriminant)}`);
            }
            assertArmPayloadName(name, unionCase.name, unionCase.arm, switchKey);
            this.#casesByDiscriminant.set(unionCase.discriminant, unionCase);
        }
        if (defaultArm !== void 0) {
            assertArmPayloadName(name, DEFAULT_CASE_NAME, defaultArm, switchKey);
        }
    }
    _read(reader, path) {
        reader.enter(path);
        try {
            const discriminant = this.switchOn._read(reader, `${path}.${this.switchKey}`);
            const unionCase = this.#casesByDiscriminant.get(discriminant);
            const arm = unionCase?.arm ?? this.defaultArm;
            if (arm === void 0) {
                throw new XdrError(`${path}: no case for union discriminator ${String(discriminant)}`);
            }
            return readUnionArm(discriminant, arm, this.switchKey, reader, `${path}.${unionCase?.name ?? DEFAULT_CASE_NAME}`);
        } finally{
            reader.exit();
        }
    }
    _write(value, writer, path) {
        writer.enter(path);
        try {
            if (!isPlainObject(value) || !Object.prototype.hasOwnProperty.call(value, this.switchKey)) {
                throw new XdrError(`${path}: expected union object with ${this.switchKey} discriminator`);
            }
            const unionValue = value;
            const switchValue = unionValue[this.switchKey];
            const unionCase = this.#casesByDiscriminant.get(switchValue);
            const arm = unionCase?.arm ?? this.defaultArm;
            if (arm === void 0) {
                throw new XdrError(`${path}: no case for union discriminator ${String(switchValue)}`);
            }
            this.switchOn._write(switchValue, writer, `${path}.${this.switchKey}`);
            writeUnionArm(unionValue, arm, writer, `${path}.${unionCase?.name ?? DEFAULT_CASE_NAME}`);
        } finally{
            writer.exit();
        }
    }
}
function field(name, schema) {
    return {
        kind: "field",
        name,
        schema
    };
}
function case_(name, discriminant, arm) {
    return {
        name,
        discriminant,
        arm
    };
}
function union(name, options) {
    const switchKey = options.switchKey ?? "type";
    return new UnionType(name, options.switchOn, options.cases, options.defaultArm, switchKey);
}
function readUnionArm(discriminant, arm, switchKey, reader, path) {
    const result = {};
    result[switchKey] = discriminant;
    if (isFieldArm(arm)) {
        result[arm.name] = arm.schema._read(reader, `${path}.${arm.name}`);
        return result;
    }
    arm._read(reader, path);
    return result;
}
function writeUnionArm(value, arm, writer, path) {
    if (isFieldArm(arm)) {
        if (!Object.prototype.hasOwnProperty.call(value, arm.name)) {
            throw new XdrError(`${path}.${arm.name}: missing union arm payload`);
        }
        arm.schema._write(value[arm.name], writer, `${path}.${arm.name}`);
        return;
    }
    arm._write(void 0, writer, path);
}
function assertArmPayloadName(unionName, caseName, arm, switchKey) {
    if (isFieldArm(arm) && arm.name === switchKey) {
        throw new XdrError(`${unionName}.${caseName}: union arm payload field must not be named ${switchKey}`);
    }
    if (isFieldArm(arm) && arm.name === "__proto__") {
        throw new XdrError(`${unionName}.${caseName}: union arm payload field name '__proto__' is not allowed`);
    }
}
function isFieldArm(arm) {
    return "schema" in arm;
}
class VarOpaqueType extends BaseType {
    constructor(maxLength, name){
        super(name);
        this.maxLength = maxLength;
        assertLength(maxLength, "varOpaque maxLength");
    }
    maxLength;
    kind = "varOpaque";
    _read(reader, path) {
        const length = reader.readUint32(path);
        if (length > this.maxLength) {
            throw new XdrError(`${path}: opaque length ${length} exceeds maximum ${this.maxLength}`);
        }
        const bytes = reader.readBytes(length, path);
        reader.skipPadding(length, path);
        return bytes;
    }
    _write(value, writer, path) {
        assertUint8Array(value, path);
        if (value.length > this.maxLength) {
            throw new XdrError(`${path}: opaque length ${value.length} exceeds maximum ${this.maxLength}`);
        }
        writer.writeUint32(value.length);
        writer.writeBytes(value);
        writer.writePadding(value.length);
    }
}
function varOpaque(maxLength, name) {
    return new VarOpaqueType(maxLength, name);
}
class VoidType extends BaseType {
    kind = "void";
    _read() {
        return void 0;
    }
    _write(value, _writer, path) {
        if (value !== void 0) {
            throw new XdrError(`${path}: expected void`);
        }
    }
}
function void_() {
    return new VoidType();
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignJWT",
    ()=>SignJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)");
;
;
;
;
const SignJWT_base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimsBuilder"];
class SignJWT extends SignJWT_base {
    #protectedHeader;
    setProtectedHeader(protectedHeader) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNotSet"])(this.#protectedHeader, "setProtectedHeader"), this.#protectedHeader = protectedHeader, this;
    }
    async sign(key, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCompactSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtData"])(this), this.#protectedHeader, options?.crit, key, ()=>{
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]("JWTs MUST NOT use unencoded payload");
        });
    }
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtVerify",
    ()=>jwtVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
;
;
;
async function jwtVerify(jwt, key, options) {
    const [verified, b64] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyCompact"])(jwt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareVerify"])(options), key);
    if (!b64) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]("JWTs MUST NOT use unencoded payload");
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateClaimsSet"])(verified.protectedHeader, verified.payload, options);
    return {
        ...verified,
        payload
    };
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat,
    "decodeBase64",
    ()=>decodeBase64,
    "decoder",
    ()=>decoder,
    "digest",
    ()=>digest,
    "encode",
    ()=>encode,
    "encodeBase64",
    ()=>encodeBase64,
    "encoder",
    ()=>encoder,
    "strictDecoder",
    ()=>strictDecoder,
    "uint32be",
    ()=>uint32be,
    "uint64be",
    ()=>uint64be
]);
const encoder = new TextEncoder(), decoder = new TextDecoder(), strictDecoder = new TextDecoder("utf-8", {
    fatal: !0
}), MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0), buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers)buf.set(buffer, i), i += buffer.length;
    return buf;
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 255
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32), low = value % MAX_INT32, buf = new Uint8Array(8);
    return writeUInt32BE(buf, high, 0), writeUInt32BE(buf, low, 4), buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    return writeUInt32BE(buf, value), buf;
}
const NON_ASCII = /[^\x00-\x7f]/;
function encode(string) {
    if (typeof string == "string" && string.length >= 128) {
        if (NON_ASCII.test(string)) throw new TypeError("non-ASCII string encountered in encode()");
        return encoder.encode(string);
    }
    const bytes = new Uint8Array(string.length);
    for(let i = 0; i < string.length; i++){
        const code = string.charCodeAt(i);
        if (code > 127) throw new TypeError("non-ASCII string encountered in encode()");
        bytes[i] = code;
    }
    return bytes;
}
function encodeBase64(input, url = !1) {
    if (Uint8Array.prototype.toBase64) return input.toBase64({
        alphabet: url ? "base64url" : "base64",
        omitPadding: url
    });
    const CHUNK_SIZE = 32768, arr = [];
    for(let i = 0; i < input.length; i += CHUNK_SIZE)arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
    const encoded = btoa(arr.join(""));
    return url ? encoded.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") : encoded;
}
function decodeBase64(encoded, url = !1) {
    if (Uint8Array.fromBase64) return Uint8Array.fromBase64(encoded, {
        alphabet: url ? "base64url" : "base64"
    });
    if (url) {
        if (encoded.includes("+") || encoded.includes("/")) throw new TypeError("Invalid base64url");
        encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
    }
    const binary = atob(encoded), bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
}
async function digest(algorithm, data) {
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await crypto.subtle.digest(subtleDigest, data));
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_algorithms.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWS",
    ()=>JWS,
    "jwsAlgorithm",
    ()=>jwsAlgorithm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key_descriptor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/key_descriptor.js [app-route] (ecmascript)");
;
;
const sig = [
    [
        "verify"
    ],
    [
        "sign"
    ]
];
function hmac(bits) {
    const subtle = {
        name: "HMAC",
        hash: `SHA-${bits}`
    };
    return {
        kty: [
            "oct"
        ],
        secret: !0,
        subtle,
        signing: subtle,
        usages: sig
    };
}
function rsa(bits, saltLength) {
    const subtle = {
        name: saltLength ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
        hash: `SHA-${bits}`
    };
    return {
        kty: [
            "RSA"
        ],
        subtle,
        signing: saltLength ? {
            ...subtle,
            saltLength
        } : subtle,
        usages: sig,
        minRsaBits: 2048
    };
}
function ecdsa(crv, bits) {
    return {
        kty: [
            "EC"
        ],
        crv,
        subtle: {
            name: "ECDSA",
            namedCurve: crv
        },
        signing: {
            name: "ECDSA",
            hash: `SHA-${bits}`
        },
        usages: sig
    };
}
function eddsa() {
    const subtle = {
        name: "Ed25519"
    };
    return {
        kty: [
            "OKP"
        ],
        crv: "Ed25519",
        subtle,
        signing: subtle,
        usages: sig
    };
}
function mldsa(bits) {
    const subtle = {
        name: `ML-DSA-${bits}`
    };
    return {
        kty: [
            "AKP"
        ],
        subtle,
        signing: subtle,
        usages: sig
    };
}
const JWS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key_descriptor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["table"])({
    HS256: hmac(256),
    HS384: hmac(384),
    HS512: hmac(512),
    RS256: rsa(256),
    RS384: rsa(384),
    RS512: rsa(512),
    PS256: rsa(256, 32),
    PS384: rsa(384, 48),
    PS512: rsa(512, 64),
    ES256: ecdsa("P-256", 256),
    ES384: ecdsa("P-384", 384),
    ES512: ecdsa("P-521", 512),
    EdDSA: eddsa(),
    Ed25519: eddsa(),
    "ML-DSA-44": mldsa(44),
    "ML-DSA-65": mldsa(65),
    "ML-DSA-87": mldsa(87)
});
function jwsAlgorithm(alg) {
    const entry = typeof alg == "string" ? JWS[alg] : void 0;
    if (!entry) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    return entry;
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCompactSignature",
    ()=>createCompactSignature,
    "createSignature",
    ()=>createSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_algorithms.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/key.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function createSignature(input, key, rejectUnencoded) {
    let [payload, protectedHeader, unprotectedHeader, crit] = input, protectedHeaderString = "";
    if (protectedHeader !== void 0) {
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serializeJoseHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], protectedHeader);
        protectedHeader = normalized[0], protectedHeaderString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(normalized[1]);
    }
    if (unprotectedHeader !== void 0 && (unprotectedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serializeJoseHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], unprotectedHeader)[0]), !protectedHeader && !unprotectedHeader) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDisjoint"])(protectedHeader, unprotectedHeader)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    const joseHeader = {
        ...protectedHeader,
        ...unprotectedHeader
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCritDuplicates"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], protectedHeader);
    const b64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateB64"])(protectedHeader, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCrit"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWS_RECOGNIZED"], crit, protectedHeader, joseHeader));
    b64 || rejectUnencoded?.();
    const { alg } = joseHeader;
    if (typeof alg != "string" || !alg) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwsAlgorithm"])(alg);
    let payloadS = "", payloadB = payload, data;
    if (b64) {
        const encoded = input[4];
        encoded ? (payloadS = encoded[0] ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payload), payloadB = encoded[1] ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payloadS)) : (payloadS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payload), data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(`${protectedHeaderString}.${payloadS}`));
    }
    data ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(protectedHeaderString), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])("."), payloadB);
    const k = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rawKey"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareKey"])(entry, key, "sign"), entry.subtle, "sign");
    entry.minRsaBits && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkModulusLength"])(entry.alg, k);
    const jws = {
        signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(new Uint8Array(await crypto.subtle.sign(entry.signing, k, data))),
        payload: payloadS
    };
    return protectedHeader && (jws.protected = protectedHeaderString), unprotectedHeader && (jws.header = unprotectedHeader), [
        jws,
        b64
    ];
}
async function createCompactSignature(payload, protectedHeader, crit, key, rejectUnencoded) {
    const [jws] = await createSignature([
        payload,
        protectedHeader,
        void 0,
        crit
    ], key, rejectUnencoded);
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_verify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeJsonUnencodedPayload",
    ()=>encodeJsonUnencodedPayload,
    "parseProtectedHeader",
    ()=>parseProtectedHeader,
    "prepareVerify",
    ()=>prepareVerify,
    "snapshotJws",
    ()=>snapshotJws,
    "verifyCompact",
    ()=>verifyCompact,
    "verifySignature",
    ()=>verifySignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jws_algorithms.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/key.js [app-route] (ecmascript)");
;
;
;
;
;
function snapshotJws(jws, sharedPayload) {
    const encodedProtected = jws.protected, inputHeader = jws.header, header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(inputHeader) ? {
        ...inputHeader
    } : inputHeader;
    let payload = sharedPayload ? sharedPayload[0] : jws.payload;
    !sharedPayload && payload instanceof Uint8Array && (payload = new Uint8Array(payload));
    const signature = jws.signature, snapshot = {
        payload,
        signature
    };
    if (encodedProtected !== void 0 && (snapshot.protected = encodedProtected), inputHeader !== void 0 && (snapshot.header = header), encodedProtected === void 0 && header === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    if (encodedProtected !== void 0 && typeof encodedProtected != "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Protected Header incorrect type");
    if (payload === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Payload missing");
    if (typeof signature != "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Signature missing or incorrect type");
    if (header !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(header)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Unprotected Header incorrect type");
    return snapshot;
}
function prepareVerify(options) {
    return [
        options && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAlgorithms"])("algorithms", options.algorithms),
        options?.crit
    ];
}
function parseProtectedHeader(encodedProtected) {
    return encodedProtected === void 0 ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJoseHeader"])(encodedProtected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], "JWS Protected Header is invalid");
}
function encodeJsonUnencodedPayload(payload) {
    const invalid = /[\p{Cs}\p{Cn}]/u.exec(payload)?.[0];
    if (invalid !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"](/\p{Cs}/u.test(invalid) ? "JWS Payload must be a well-formed Unicode string" : "JWS Payload must not contain unassigned Unicode code points");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(payload);
}
function encodeCompactUnencodedPayload(payload) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payload);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Compact Serialization payload must use only ASCII characters");
    }
}
async function verifySignature(jws, shared, key, encodeUnencodedPayload, parsedProtected) {
    const { protected: encodedProtected, header, payload: inputPayload } = jws, parsedProt = parsedProtected ?? parseProtectedHeader(encodedProtected);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDisjoint"])(parsedProt, header)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    const joseHeader = {
        ...parsedProt,
        ...header
    }, b64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateB64"])(parsedProt, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCrit"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWS_RECOGNIZED"], shared[1], parsedProt, joseHeader)), { alg } = joseHeader;
    if (typeof alg != "string" || !alg) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    if (shared[0] && !shared[0].has(alg)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    if (b64) {
        if (typeof inputPayload != "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Payload must be a string");
    } else if (typeof inputPayload != "string" && !(inputPayload instanceof Uint8Array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("JWS Payload must be a string or an Uint8Array instance");
    const signingPayload = b64 || typeof inputPayload != "string" ? inputPayload : encodeUnencodedPayload(inputPayload);
    let resolvedKey = !1;
    typeof key == "function" && (key = await key(parsedProt, jws), resolvedKey = !0);
    const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jws_algorithms$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwsAlgorithm"])(alg), data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(encodedProtected !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(encodedProtected) : new Uint8Array(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])("."), typeof signingPayload == "string" ? shared[2] ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeBase64url"])(signingPayload, "payload", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]) : signingPayload), signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64url"])(jws.signature, "signature", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]), k = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareKey"])(entry, key, "verify"), cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rawKey"])(k, entry.subtle, "verify");
    entry.minRsaBits && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkModulusLength"])(entry.alg, cryptoKey);
    let verified = !1;
    try {
        verified = await crypto.subtle.verify(entry.signing, cryptoKey, signature, data);
    } catch  {}
    if (!verified) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
    const result = {
        payload: typeof signingPayload == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64url"])(signingPayload, "payload", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]) : signingPayload
    };
    return encodedProtected !== void 0 && (result.protectedHeader = parsedProt), header !== void 0 && (result.unprotectedHeader = header), resolvedKey ? [
        {
            ...result,
            key: k
        },
        b64
    ] : [
        result,
        b64
    ];
}
async function verifyCompact(jws, shared, key) {
    if (jws instanceof Uint8Array && (jws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(jws)), typeof jws != "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("Compact JWS must be a string or Uint8Array");
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
    if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]("Invalid Compact JWS");
    return verifySignature({
        payload,
        protected: protectedHeader,
        signature
    }, shared, key, encodeCompactUnencodedPayload);
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWTClaimsBuilder",
    ()=>JWTClaimsBuilder,
    "jwtClaim",
    ()=>jwtClaim,
    "jwtData",
    ()=>jwtData,
    "secs",
    ()=>secs,
    "validateClaimsSet",
    ()=>validateClaimsSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)");
;
;
;
const epoch = (date)=>Math.floor(date.getTime() / 1e3), multipliers = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
    w: 604800,
    y: 31557600
}, REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i, checkFailed = "check_failed";
function invalidDuration() {
    throw new TypeError("Invalid time period format");
}
function secs(str) {
    typeof str != "string" && invalidDuration();
    const matched = REGEX.exec(str);
    (!matched || matched[4] && matched[1]) && invalidDuration();
    const value = parseFloat(matched[2]), numericDate2 = Math.round(value * multipliers[matched[3][0].toLowerCase()]);
    return Number.isFinite(numericDate2) || invalidDuration(), matched[1] === "-" || matched[4] === "ago" ? -numericDate2 : numericDate2;
}
function validateInput(label, input) {
    if (!Number.isFinite(input)) throw new TypeError(`Invalid ${label} input`);
    return input;
}
function validateStringClaim(claim, value) {
    if (typeof value != "string") throw new TypeError(`"${claim}" claim must be a string`);
}
function validateAudienceClaim(value) {
    if (typeof value != "string" && (!Array.isArray(value) || Array.from(value).some((member)=>typeof member != "string"))) throw new TypeError('"aud" claim must be a string or an array of strings');
}
function numericDate(value, label) {
    return typeof value == "number" ? validateInput(label, value) : value instanceof Date ? validateInput(label, epoch(value)) : epoch(/* @__PURE__ */ new Date()) + secs(value);
}
const normalizeTyp = (value)=>{
    const normalized = value.toLowerCase();
    return value.includes("/") ? normalized : `application/${normalized}`;
}, checkAudiencePresence = (audPayload, audOption)=>typeof audPayload == "string" ? audOption.includes(audPayload) : Array.isArray(audPayload) ? audOption.some((aud)=>audPayload.includes(aud)) : !1;
function validateNumericDate(payload, claim, required = !1) {
    const value = payload[claim];
    if (!(value === void 0 && !required)) {
        if (typeof value != "number") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`"${claim}" claim must be a number`, payload, claim, "invalid");
        return value;
    }
}
function unexpectedClaim(payload, claim) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`unexpected "${claim}" claim value`, payload, claim, checkFailed);
}
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["strictDecoder"].decode(encodedPayload));
    } catch  {}
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(payload)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]("JWT Claims Set must be a top-level JSON object");
    const { typ } = options;
    if (typ !== void 0 && (typeof protectedHeader.typ != "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', payload, "typ", checkFailed);
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options, presenceCheck = [
        ...requiredClaims
    ];
    maxTokenAge !== void 0 && presenceCheck.push("iat"), audience !== void 0 && presenceCheck.push("aud"), subject !== void 0 && presenceCheck.push("sub"), issuer !== void 0 && presenceCheck.push("iss");
    for (const claim of new Set(presenceCheck.reverse()))if (!Object.hasOwn(payload, claim)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, payload, claim, "missing");
    issuer !== void 0 && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss) && unexpectedClaim(payload, "iss"), subject !== void 0 && payload.sub !== subject && unexpectedClaim(payload, "sub"), audience !== void 0 && !checkAudiencePresence(payload.aud, typeof audience == "string" ? [
        audience
    ] : audience) && unexpectedClaim(payload, "aud");
    const { clockTolerance } = options;
    let tolerance = 0;
    if (typeof clockTolerance == "string") tolerance = secs(clockTolerance);
    else if (clockTolerance !== void 0) {
        if (typeof clockTolerance != "number") throw new TypeError("Invalid clockTolerance option type");
        tolerance = clockTolerance;
    }
    validateInput("clockTolerance option", tolerance);
    const { currentDate } = options, now = validateInput("currentDate option", epoch(currentDate === void 0 ? /* @__PURE__ */ new Date() : currentDate)), iat = validateNumericDate(payload, "iat", maxTokenAge !== void 0), nbf = validateNumericDate(payload, "nbf");
    if (nbf !== void 0 && nbf > now + tolerance) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', payload, "nbf", checkFailed);
    const exp = validateNumericDate(payload, "exp");
    if (exp !== void 0 && exp <= now - tolerance) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', payload, "exp", checkFailed);
    if (maxTokenAge !== void 0) {
        const age = now - iat, max = validateInput("maxTokenAge option", typeof maxTokenAge == "number" ? maxTokenAge : secs(maxTokenAge));
        if (age - tolerance > max) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', payload, "iat", checkFailed);
        if (age < -tolerance) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", checkFailed);
    }
    return payload;
}
let producerPayloads;
function producerPayload(producer) {
    return producerPayloads.get(producer);
}
function jwtData(producer) {
    const payload = producerPayload(producer);
    for (const claim of [
        "iat",
        "nbf",
        "exp"
    ]){
        const value = payload[claim];
        if (typeof value == "number" && !Number.isFinite(value)) throw new TypeError(`"${claim}" claim must be a finite number`);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(payload));
}
function jwtClaim(producer, claim) {
    return producerPayload(producer)[claim];
}
class JWTClaimsBuilder {
    constructor(payload = {}){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(payload)) throw new TypeError("JWT Claims Set MUST be an object");
        (producerPayloads ||= /* @__PURE__ */ new WeakMap()).set(this, structuredClone(payload));
    }
    setIssuer(value) {
        return validateStringClaim("iss", value), producerPayload(this).iss = value, this;
    }
    setSubject(value) {
        return validateStringClaim("sub", value), producerPayload(this).sub = value, this;
    }
    setAudience(value) {
        return validateAudienceClaim(value), producerPayload(this).aud = value, this;
    }
    setJti(value) {
        return validateStringClaim("jti", value), producerPayload(this).jti = value, this;
    }
    setNotBefore(value) {
        return producerPayload(this).nbf = numericDate(value, "setNotBefore"), this;
    }
    setExpirationTime(value) {
        return producerPayload(this).exp = numericDate(value, "setExpirationTime"), this;
    }
    setIssuedAt(value) {
        const payload = producerPayload(this);
        return value === void 0 ? payload.iat = epoch(/* @__PURE__ */ new Date()) : typeof value == "string" ? payload.iat = validateInput("setIssuedAt", epoch(/* @__PURE__ */ new Date()) + secs(value)) : payload.iat = numericDate(value, "setIssuedAt"), this;
    }
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCryptoKey",
    ()=>assertCryptoKey,
    "checkCryptoKey",
    ()=>checkCryptoKey,
    "checkModulusLength",
    ()=>checkModulusLength,
    "checkUsage",
    ()=>checkUsage,
    "invalidKeyInput",
    ()=>invalidKeyInput,
    "isCryptoKey",
    ()=>isCryptoKey,
    "isKeyLike",
    ()=>isKeyLike,
    "isKeyObject",
    ()=>isKeyObject,
    "jwkToKey",
    ()=>jwkToKey,
    "normalizeJwk",
    ()=>normalizeJwk,
    "prepareKey",
    ()=>prepareKey,
    "rawKey",
    ()=>rawKey,
    "snapshotJwk",
    ()=>snapshotJwk,
    "validateExtractableOption",
    ()=>validateExtractableOption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
;
;
;
const tag = (key)=>key[Symbol.toStringTag], jwkMatchesOp = (entry, key, usage)=>{
    const { alg } = entry;
    if (key.use !== void 0) {
        const expected = usage === "sign" || usage === "verify" ? "sig" : "enc";
        if (key.use !== expected) throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
    if (key.alg !== void 0 && key.alg !== alg) throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
    if (Array.isArray(key.key_ops)) {
        const expectedKeyOp = usage === "encrypt" || usage === "decrypt" ? entry.ops?.[usage === "encrypt" ? 0 : 1] : usage;
        if (expectedKeyOp && !key.key_ops.includes(expectedKeyOp)) throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
};
async function prepareKey(entry, key, usage) {
    const { alg, secret } = entry, privateKey = usage === "decrypt" || usage === "sign";
    if (secret && key instanceof Uint8Array) return key;
    let normalized, keyObject;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(key)) {
        if (normalized = normalizeJwk(key), typeof normalized.kty != "string") throw invalidKeyType(alg, key, secret);
        if (!(secret ? normalized.kty === "oct" && typeof normalized.k == "string" : normalized.kty !== "oct" && (privateKey ? normalized.kty === "AKP" && typeof normalized.priv == "string" || typeof normalized.d == "string" : normalized.d === void 0 && normalized.priv === void 0))) throw new TypeError(secret ? 'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present' : `JSON Web Key for this operation must be a ${privateKey ? "private" : "public"} JWK`);
        if (jwkMatchesOp(entry, normalized, usage), normalized.kty === "oct") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(normalized.k);
        if (!Object.isFrozen(key)) {
            const { key_ops } = key;
            Array.isArray(key_ops) && Object.freeze(key_ops), Object.freeze(key);
        }
    } else {
        if (!isKeyLike(key)) throw invalidKeyType(alg, key, secret);
        const expectedType = secret ? "secret" : privateKey ? "private" : "public";
        if (key.type !== expectedType && (secret || [
            "secret",
            "public",
            "private"
        ].includes(key.type))) throw new TypeError(`${tag(key)} instances must be of type "${expectedType}" for the ${alg} algorithm`);
        if (isCryptoKey(key)) return key;
        if (keyObject = key, keyObject.type === "secret") return keyObject.export();
    }
    cache ||= /* @__PURE__ */ new WeakMap();
    const cacheKey = key;
    let cached = cache.get(cacheKey);
    if (cached?.[alg]) return cached[alg];
    if (cached || cache.set(cacheKey, cached = {}), keyObject && typeof keyObject.toCryptoKey == "function") {
        const isPublic = keyObject.type === "public", crv = nist[keyObject.asymmetricKeyDetails?.namedCurve], params = entry.resolve?.({
            crv,
            asymmetricKeyType: keyObject.asymmetricKeyType
        }) ?? entry.subtle;
        return cached[alg] = keyObject.toCryptoKey(params, isPublic, entry.usages[isPublic ? 0 : 1]);
    }
    return normalized ??= keyObject.export({
        format: "jwk"
    }), normalized.alg = alg, cached[alg] = await jwkToKey(entry, normalized);
}
let cache;
const nist = {
    __proto__: null,
    prime256v1: "P-256",
    secp384r1: "P-384",
    secp521r1: "P-521"
};
function assertCryptoKey(key) {
    if (!isCryptoKey(key)) throw new Error("CryptoKey instance expected");
}
const isCryptoKey = (key)=>{
    if (key?.[Symbol.toStringTag] === "CryptoKey") return !0;
    try {
        return key instanceof CryptoKey;
    } catch  {
        return !1;
    }
}, isKeyObject = (key)=>key?.[Symbol.toStringTag] === "KeyObject", isKeyLike = (key)=>isCryptoKey(key) || isKeyObject(key);
function message(msg, actual, ...types) {
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(", ")}, or ${last}.`;
    } else types.length === 2 ? msg += `one of type ${types[0]} or ${types[1]}.` : msg += `of type ${types[0]}.`;
    return actual == null ? msg += ` Received ${actual}` : typeof actual == "function" && actual.name ? msg += ` Received function ${actual.name}` : typeof actual == "object" && actual != null && actual.constructor?.name && (msg += ` Received an instance of ${actual.constructor.name}`), msg;
}
const invalidKeyInput = (actual, ...types)=>message("Key must be ", actual, ...types);
function invalidKeyType(alg, actual, secret) {
    const types = [
        "CryptoKey",
        "KeyObject",
        "JSON Web Key"
    ];
    return secret && types.push("Uint8Array"), new TypeError(message(`Key for the ${alg} algorithm must be `, actual, ...types));
}
const unusable = (name, prop = "algorithm.name")=>new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
function checkUsage(key, usage) {
    if (usage && !key.usages.includes(usage)) throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
}
function checkModulusLength(alg, key) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength != "number" || modulusLength < 2048) throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
}
function checkCryptoKey(key, expected, usage) {
    const algorithm = key.algorithm;
    if (algorithm.name !== expected.name) throw unusable(expected.name);
    if (expected.hash && algorithm.hash?.name !== expected.hash) throw unusable(expected.hash, "algorithm.hash");
    if (expected.namedCurve && algorithm.namedCurve !== expected.namedCurve) throw unusable(expected.namedCurve, "algorithm.namedCurve");
    if (expected.length !== void 0 && algorithm.length !== expected.length) throw unusable(expected.length, "algorithm.length");
    checkUsage(key, usage);
}
function snapshotJwk(jwk) {
    return {
        __proto__: null,
        ...jwk
    };
}
function normalizeJwk(jwk) {
    const normalized = snapshotJwk(jwk);
    if (normalized.ext !== void 0 && typeof normalized.ext != "boolean") throw new TypeError('"ext" (Extractable) Parameter must be a boolean');
    if (normalized.key_ops !== void 0) {
        const value = normalized.key_ops, keyOps = Array.isArray(value) ? [
            ...value
        ] : void 0;
        if (!keyOps || keyOps.some((operation)=>typeof operation != "string") || new Set(keyOps).size !== keyOps.length) throw new TypeError('"key_ops" (Key Operations) Parameter must be an array of unique strings');
        normalized.key_ops = keyOps;
    }
    return normalized;
}
function validateExtractableOption(extractable) {
    if (extractable !== void 0 && typeof extractable != "boolean") throw new TypeError('"extractable" option must be a boolean');
    return extractable;
}
async function jwkToKey(entry, jwk, extractable) {
    if (!entry.kty.includes(jwk.kty)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    const algorithm = entry.resolve?.({
        kty: jwk.kty,
        crv: jwk.crv
    }) ?? entry.subtle, isPrivate = !!(jwk.d || jwk.priv), keyData = {
        ...jwk,
        ext: extractable ?? jwk.ext
    };
    return keyData.kty !== "AKP" && delete keyData.alg, delete keyData.use, crypto.subtle.importKey("jwk", keyData, algorithm, keyData.ext ?? !isPrivate, jwk.key_ops ?? entry.usages[isPrivate ? 1 : 0]);
}
async function rawKey(key, expected, usage, extractable = !1) {
    return key instanceof Uint8Array && (key = await crypto.subtle.importKey("raw", key, expected, extractable, [
        usage
    ])), checkCryptoKey(key, expected, usage), key;
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/key_descriptor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "table",
    ()=>table
]);
function table(entries) {
    const out = {
        __proto__: null
    };
    for(const alg in entries)out[alg] = {
        ...entries[alg],
        alg
    };
    return out;
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWE_RECOGNIZED",
    ()=>JWE_RECOGNIZED,
    "JWS_RECOGNIZED",
    ()=>JWS_RECOGNIZED,
    "assertNotSet",
    ()=>assertNotSet,
    "assertUint8Array",
    ()=>assertUint8Array,
    "decodeBase64url",
    ()=>decodeBase64url,
    "encodeBase64url",
    ()=>encodeBase64url,
    "isDisjoint",
    ()=>isDisjoint,
    "isJwkSet",
    ()=>isJwkSet,
    "isObject",
    ()=>isObject,
    "parseJoseHeader",
    ()=>parseJoseHeader,
    "serializeJoseHeader",
    ()=>serializeJoseHeader,
    "validateAlgorithms",
    ()=>validateAlgorithms,
    "validateB64",
    ()=>validateB64,
    "validateCrit",
    ()=>validateCrit,
    "validateCritDuplicates",
    ()=>validateCritDuplicates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
;
;
;
function assertUint8Array(input, label) {
    if (!(input instanceof Uint8Array)) throw new TypeError(`${label} must be an instance of Uint8Array`);
}
function isObject(input) {
    if (typeof input != "object" || input === null || Object.prototype.toString.call(input) !== "[object Object]") return !1;
    const prototype = Object.getPrototypeOf(input);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
}
function isJwkSet(input) {
    return isObject(input) && Array.isArray(input.keys) && Array.from(input.keys).every(isObject);
}
function isDisjoint(...headers) {
    const parameters = /* @__PURE__ */ new Set();
    for (const header of headers)if (header) for (const parameter of Object.keys(header)){
        if (parameters.has(parameter)) return !1;
        parameters.add(parameter);
    }
    return !0;
}
function assertNotSet(value, name) {
    if (value !== void 0) throw new TypeError(`${name} can only be called once`);
}
function decodeBase64url(value, label, ErrorClass) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(value);
    } catch  {
        throw new ErrorClass(`Failed to base64url decode the ${label}`);
    }
}
function encodeBase64url(value, label, ErrorClass) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(value);
    } catch  {
        throw new ErrorClass(`The ${label} is not a valid base64url string`);
    }
}
function parseJoseHeader(b64, ErrorClass, message) {
    let parsed;
    try {
        parsed = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["strictDecoder"].decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(b64)));
    } catch  {
        throw new ErrorClass(message);
    }
    if (!isObject(parsed)) throw new ErrorClass(message);
    return parsed;
}
const JWS_RECOGNIZED = {
    __proto__: null,
    b64: !0
}, JWE_RECOGNIZED = {
    __proto__: null
};
function validateAlgorithms(option, algorithms) {
    if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s != "string"))) throw new TypeError(`"${option}" option must be an array of strings`);
    return algorithms === void 0 ? void 0 : new Set(algorithms);
}
function validateCritDuplicates(Err, protectedHeader) {
    const { crit } = protectedHeader ?? {};
    if (Array.isArray(crit) && new Set(crit).size !== crit.length) throw new Err('"crit" (Critical) Header Parameter MUST NOT contain duplicate values');
}
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    if (!protectedHeader || protectedHeader.crit === void 0) return [];
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input != "string" || input.length === 0)) throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    const recognized = recognizedOption === void 0 ? recognizedDefault : {
        __proto__: null,
        ...recognizedOption,
        ...recognizedDefault
    };
    for (const parameter of protectedHeader.crit){
        if (!(parameter in recognized)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        if (!Object.hasOwn(joseHeader, parameter) || joseHeader[parameter] === void 0) throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        if (recognized[parameter] && (!Object.hasOwn(protectedHeader, parameter) || protectedHeader[parameter] === void 0)) throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
    return protectedHeader.crit;
}
function validateB64(protectedHeader, extensions) {
    if (extensions.includes("b64")) {
        const b64 = protectedHeader.b64;
        if (typeof b64 != "boolean") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        return b64;
    }
    return !0;
}
function serializeJoseHeader(Err, header) {
    let serialized, parsed;
    try {
        serialized = JSON.stringify(header), parsed = JSON.parse(serialized);
    } catch (cause) {
        throw new Err("JOSE Header is not valid JSON", {
            cause
        });
    }
    if (!isObject(parsed)) throw new Err("JOSE Header is not a JSON object");
    return [
        parsed,
        serialized
    ];
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-route] (ecmascript)");
;
const invalid = "The input to be decoded is not correctly encoded.";
function decode(input) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeBase64"])(typeof input == "string" ? input : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(input), !0);
    } catch (cause) {
        throw new TypeError(invalid, {
            cause
        });
    }
}
function encode(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodeBase64"])(typeof input == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(input) : input, !0);
}
;
}),
"[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/util/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEAlgNotAllowed",
    ()=>JOSEAlgNotAllowed,
    "JOSEError",
    ()=>JOSEError,
    "JOSENotSupported",
    ()=>JOSENotSupported,
    "JWEDecryptionFailed",
    ()=>JWEDecryptionFailed,
    "JWEInvalid",
    ()=>JWEInvalid,
    "JWKInvalid",
    ()=>JWKInvalid,
    "JWKSInvalid",
    ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys",
    ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey",
    ()=>JWKSNoMatchingKey,
    "JWKSTimeout",
    ()=>JWKSTimeout,
    "JWSInvalid",
    ()=>JWSInvalid,
    "JWSSignatureVerificationFailed",
    ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed",
    ()=>JWTClaimValidationFailed,
    "JWTExpired",
    ()=>JWTExpired,
    "JWTInvalid",
    ()=>JWTInvalid
]);
class JOSEError extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(message, options){
        super(message, options), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    payload;
    constructor(message, payload, claim = "unspecified", reason = "unspecified"){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        }), this.claim = claim, this.reason = reason, this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = "ERR_JWT_EXPIRED";
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    payload;
    constructor(message, payload, claim = "unspecified", reason = "unspecified"){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        }), this.claim = claim, this.reason = reason, this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = "ERR_JOSE_ALG_NOT_ALLOWED";
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
}
class JOSENotSupported extends JOSEError {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
}
class JWEDecryptionFailed extends JOSEError {
    static code = "ERR_JWE_DECRYPTION_FAILED";
    code = "ERR_JWE_DECRYPTION_FAILED";
    constructor(message = "decryption operation failed", options){
        super(message, options);
    }
}
class JWEInvalid extends JOSEError {
    static code = "ERR_JWE_INVALID";
    code = "ERR_JWE_INVALID";
}
class JWSInvalid extends JOSEError {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
}
class JWTInvalid extends JOSEError {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
}
class JWKInvalid extends JOSEError {
    static code = "ERR_JWK_INVALID";
    code = "ERR_JWK_INVALID";
}
class JWKSInvalid extends JOSEError {
    static code = "ERR_JWKS_INVALID";
    code = "ERR_JWKS_INVALID";
}
class JWKSNoMatchingKey extends JOSEError {
    static code = "ERR_JWKS_NO_MATCHING_KEY";
    code = "ERR_JWKS_NO_MATCHING_KEY";
    constructor(message = "no applicable key found in the JSON Web Key Set", options){
        super(message, options);
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator] = async function*() {};
    static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    constructor(message = "multiple matching keys found in the JSON Web Key Set", options){
        super(message, options);
    }
}
class JWKSTimeout extends JOSEError {
    static code = "ERR_JWKS_TIMEOUT";
    code = "ERR_JWKS_TIMEOUT";
    constructor(message = "request timed out", options){
        super(message, options);
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    constructor(message = "signature verification failed", options){
        super(message, options);
    }
}
;
}),
"[project]/node_modules/.pnpm/uint8array-extras@1.6.0/node_modules/uint8array-extras/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areUint8ArraysEqual",
    ()=>areUint8ArraysEqual,
    "assertUint8Array",
    ()=>assertUint8Array,
    "assertUint8ArrayOrArrayBuffer",
    ()=>assertUint8ArrayOrArrayBuffer,
    "base64ToString",
    ()=>base64ToString,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "compareUint8Arrays",
    ()=>compareUint8Arrays,
    "concatUint8Arrays",
    ()=>concatUint8Arrays,
    "getUintBE",
    ()=>getUintBE,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "includes",
    ()=>includes,
    "indexOf",
    ()=>indexOf,
    "isUint8Array",
    ()=>isUint8Array,
    "stringToBase64",
    ()=>stringToBase64,
    "stringToUint8Array",
    ()=>stringToUint8Array,
    "toUint8Array",
    ()=>toUint8Array,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "uint8ArrayToString",
    ()=>uint8ArrayToString
]);
const objectToString = Object.prototype.toString;
const uint8ArrayStringified = '[object Uint8Array]';
const arrayBufferStringified = '[object ArrayBuffer]';
function isType(value, typeConstructor, typeStringified) {
    if (!value) {
        return false;
    }
    if (value.constructor === typeConstructor) {
        return true;
    }
    return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
    return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
    return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isUint8ArrayOrArrayBuffer(value) {
    return isUint8Array(value) || isArrayBuffer(value);
}
function toUint8ArrayIfArrayBuffer(value) {
    return isArrayBuffer(value) ? new Uint8Array(value) : value;
}
function assertUint8Array(value) {
    if (!isUint8Array(value)) {
        throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
    }
}
function assertUint8ArrayOrArrayBuffer(value) {
    if (!isUint8ArrayOrArrayBuffer(value)) {
        throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
    }
}
function toUint8Array(value) {
    if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
    }
    if (ArrayBuffer.isView(value)) {
        return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }
    throw new TypeError(`Unsupported value, got \`${typeof value}\`.`);
}
function concatUint8Arrays(arrays, totalLength) {
    if (arrays.length === 0) {
        return new Uint8Array(0);
    }
    totalLength ??= arrays.reduce((accumulator, currentValue)=>accumulator + currentValue.byteLength, 0);
    const returnValue = new Uint8Array(totalLength);
    let offset = 0;
    for (let array of arrays){
        assertUint8ArrayOrArrayBuffer(array);
        array = toUint8ArrayIfArrayBuffer(array);
        returnValue.set(array, offset);
        offset += array.length;
    }
    return returnValue;
}
function areUint8ArraysEqual(a, b) {
    assertUint8ArrayOrArrayBuffer(a);
    assertUint8ArrayOrArrayBuffer(b);
    a = toUint8ArrayIfArrayBuffer(a);
    b = toUint8ArrayIfArrayBuffer(b);
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < a.length; index++){
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}
function compareUint8Arrays(a, b) {
    assertUint8ArrayOrArrayBuffer(a);
    assertUint8ArrayOrArrayBuffer(b);
    a = toUint8ArrayIfArrayBuffer(a);
    b = toUint8ArrayIfArrayBuffer(b);
    const length = Math.min(a.length, b.length);
    for(let index = 0; index < length; index++){
        const diff = a[index] - b[index];
        if (diff !== 0) {
            return Math.sign(diff);
        }
    }
    // At this point, all the compared elements are equal.
    // The shorter array should come first if the arrays are of different lengths.
    return Math.sign(a.length - b.length);
}
const cachedDecoders = {
    utf8: new globalThis.TextDecoder('utf8')
};
function uint8ArrayToString(array, encoding = 'utf8') {
    assertUint8ArrayOrArrayBuffer(array);
    cachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);
    return cachedDecoders[encoding].decode(array);
}
function assertString(value) {
    if (typeof value !== 'string') {
        throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
    }
}
const cachedEncoder = new globalThis.TextEncoder();
function stringToUint8Array(string) {
    assertString(string);
    return cachedEncoder.encode(string);
}
function base64ToBase64Url(base64) {
    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function base64UrlToBase64(base64url) {
    const base64 = base64url.replaceAll('-', '+').replaceAll('_', '/');
    const padding = (4 - base64.length % 4) % 4;
    return base64 + '='.repeat(padding);
}
// Reference: https://phuoc.ng/collection/this-vs-that/concat-vs-push/
// Important: Keep this value divisible by 3 so intermediate chunks produce no Base64 padding.
const MAX_BLOCK_SIZE = 65_535;
function uint8ArrayToBase64(array, { urlSafe = false } = {}) {
    assertUint8ArrayOrArrayBuffer(array);
    array = toUint8ArrayIfArrayBuffer(array);
    let base64 = '';
    for(let index = 0; index < array.length; index += MAX_BLOCK_SIZE){
        const chunk = array.subarray(index, index + MAX_BLOCK_SIZE);
        // Required as `btoa` and `atob` don't properly support Unicode: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
        base64 += globalThis.btoa(String.fromCodePoint.apply(undefined, chunk));
    }
    return urlSafe ? base64ToBase64Url(base64) : base64;
}
function base64ToUint8Array(base64String) {
    assertString(base64String);
    return Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), (x)=>x.codePointAt(0));
}
function stringToBase64(string, { urlSafe = false } = {}) {
    assertString(string);
    return uint8ArrayToBase64(stringToUint8Array(string), {
        urlSafe
    });
}
function base64ToString(base64String) {
    assertString(base64String);
    return uint8ArrayToString(base64ToUint8Array(base64String));
}
const byteToHexLookupTable = Array.from({
    length: 256
}, (_, index)=>index.toString(16).padStart(2, '0'));
function uint8ArrayToHex(array) {
    assertUint8ArrayOrArrayBuffer(array);
    array = toUint8ArrayIfArrayBuffer(array);
    // Concatenating a string is faster than using an array.
    let hexString = '';
    // eslint-disable-next-line unicorn/no-for-loop -- Max performance is critical.
    for(let index = 0; index < array.length; index++){
        hexString += byteToHexLookupTable[array[index]];
    }
    return hexString;
}
const hexToDecimalLookupTable = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};
function hexToUint8Array(hexString) {
    assertString(hexString);
    if (hexString.length % 2 !== 0) {
        throw new Error('Invalid Hex string length.');
    }
    const resultLength = hexString.length / 2;
    const bytes = new Uint8Array(resultLength);
    for(let index = 0; index < resultLength; index++){
        const highNibble = hexToDecimalLookupTable[hexString[index * 2]];
        const lowNibble = hexToDecimalLookupTable[hexString[index * 2 + 1]];
        if (highNibble === undefined || lowNibble === undefined) {
            throw new Error(`Invalid Hex character encountered at position ${index * 2}`);
        }
        bytes[index] = highNibble << 4 | lowNibble; // eslint-disable-line no-bitwise
    }
    return bytes;
}
function getUintBE(view) {
    const { byteLength } = view;
    if (byteLength === 6) {
        return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
    }
    if (byteLength === 5) {
        return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
    }
    if (byteLength === 4) {
        return view.getUint32(0);
    }
    if (byteLength === 3) {
        return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
    }
    if (byteLength === 2) {
        return view.getUint16(0);
    }
    if (byteLength === 1) {
        return view.getUint8(0);
    }
}
function indexOf(array, value) {
    array = toUint8ArrayIfArrayBuffer(array);
    value = toUint8ArrayIfArrayBuffer(value);
    const arrayLength = array.length;
    const valueLength = value.length;
    if (valueLength === 0) {
        return -1;
    }
    if (valueLength > arrayLength) {
        return -1;
    }
    const validOffsetLength = arrayLength - valueLength;
    for(let index = 0; index <= validOffsetLength; index++){
        let isMatch = true;
        for(let index2 = 0; index2 < valueLength; index2++){
            if (array[index + index2] !== value[index2]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return index;
        }
    }
    return -1;
}
function includes(array, value) {
    return indexOf(array, value) !== -1;
}
}),
];})()

//# sourceMappingURL=%5Broot-of-the-server%5D__0ctiz1umhauwx._.js.map