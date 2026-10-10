module.exports = [
(()=>{"use strict";return[
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "dynamic",
    ()=>dynamic,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@playwright+test@1.64.0_@types+node@22.20.5_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providers.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/app-shell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: {
        default: "Veridia — human-verified milestone escrow",
        template: "%s · Veridia"
    },
    description: "Release escrowed project funds only after independent, staked verifiers approve each milestone."
};
const viewport = {
    themeColor: "#0b1f3a",
    width: "device-width",
    initialScale: 1
};
const dynamic = "force-dynamic";
function RootLayout({ children }) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicConfig"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Providers"], {
                config: config,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppShell"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/layout.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/layout.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/layout.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/layout.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/components/app-shell.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell,
    "NetworkBadge",
    ()=>NetworkBadge,
    "PageHeader",
    ()=>PageHeader,
    "WalletButton",
    ()=>WalletButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@playwright+test@1.64.0_@types+node@22.20.5_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AppShell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppShell() from the server but AppShell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/app-shell.tsx", "AppShell");
const NetworkBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NetworkBadge() from the server but NetworkBadge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/app-shell.tsx", "NetworkBadge");
const PageHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PageHeader() from the server but PageHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/app-shell.tsx", "PageHeader");
const WalletButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WalletButton() from the server but WalletButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/app-shell.tsx", "WalletButton");
}),
"[project]/apps/web/src/components/app-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/app-shell.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$app$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/src/components/providers.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers,
    "useConfig",
    ()=>useConfig,
    "useWallet",
    ()=>useWallet
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@playwright+test@1.64.0_@types+node@22.20.5_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/providers.tsx", "Providers");
const useConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useConfig() from the server but useConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/providers.tsx", "useConfig");
const useWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWallet() from the server but useWallet is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/src/components/providers.tsx", "useWallet");
}),
"[project]/apps/web/src/components/providers.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providers.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/src/server/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicConfig",
    ()=>publicConfig
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/networks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/env.ts [app-rsc] (ecmascript)");
;
;
;
;
;
let cached = null;
function publicConfig() {
    if (cached) return cached;
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"])();
    const dir = e.DEPLOYMENTS_DIR ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), "..", "..", "deployments");
    const d = JSON.parse((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(dir, `${e.STELLAR_NETWORK}.json`), "utf8"));
    const net = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NETWORKS"][e.STELLAR_NETWORK];
    cached = {
        network: e.STELLAR_NETWORK,
        passphrase: net.passphrase,
        // The browser talks to the public RPC endpoint directly (no secrets involved).
        rpcUrl: net.rpcUrl,
        contracts: d.contracts,
        params: d.params,
        explorerTx: e.STELLAR_NETWORK === "testnet" ? "https://stellar.expert/explorer/testnet/tx/" : null,
        e2eTestWallet: ("TURBOPACK compile-time value", "1") === "1"
    };
    return cached;
}
}),
"[project]/apps/web/src/server/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    STELLAR_NETWORK: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "local",
        "testnet"
    ]).default("local"),
    STELLAR_RPC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    S3_REGION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().default("us-east-1"),
    S3_BUCKET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(3),
    S3_ACCESS_KEY_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_SECRET_ACCESS_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_FORCE_PATH_STYLE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().default("true"),
    SESSION_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(32, "SESSION_SECRET must be at least 32 characters"),
    DEPLOYMENTS_DIR: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
});
let cached = null;
function env() {
    if (!cached) {
        const parsed = schema.safeParse(process.env);
        if (!parsed.success) {
            throw new Error(`Invalid server environment: ${parsed.error.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join("; ")}`);
        }
        cached = parsed.data;
    }
    return cached;
}
}),
"[project]/packages/domain/src/amounts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Fixed-point token amount helpers. Amounts are always bigint in the token's base unit. */ __turbopack_context__.s([
    "DEFAULT_DECIMALS",
    ()=>DEFAULT_DECIMALS,
    "formatAmount",
    ()=>formatAmount,
    "isValidAmount",
    ()=>isValidAmount,
    "parseAmount",
    ()=>parseAmount,
    "percent",
    ()=>percent
]);
const DEFAULT_DECIMALS = 7; // Stellar assets use 7 decimals
const DECIMAL_RE = /^\d+(\.\d+)?$/;
function parseAmount(input, decimals = DEFAULT_DECIMALS) {
    const s = input.trim().replace(/_/g, "");
    if (!DECIMAL_RE.test(s)) throw new Error(`Invalid amount: "${input}"`);
    const [whole = "0", frac = ""] = s.split(".");
    if (frac.length > decimals) throw new Error(`Too many decimal places (max ${decimals})`);
    return BigInt(whole) * 10n ** BigInt(decimals) + BigInt(frac.padEnd(decimals, "0") || "0");
}
function isValidAmount(input, decimals = DEFAULT_DECIMALS) {
    try {
        return parseAmount(input, decimals) > 0n;
    } catch  {
        return false;
    }
}
function formatAmount(value, decimals = DEFAULT_DECIMALS, opts = {}) {
    const v = typeof value === "bigint" ? value : BigInt(value);
    const neg = v < 0n;
    const abs = neg ? -v : v;
    const base = 10n ** BigInt(decimals);
    const whole = abs / base;
    let frac = (abs % base).toString().padStart(decimals, "0");
    const maxFraction = opts.maxFraction ?? 2;
    frac = frac.slice(0, Math.max(maxFraction, 0)).replace(/0+$/, "");
    const wholeStr = opts.grouping === false ? whole.toString() : whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${neg ? "-" : ""}${wholeStr}${frac ? `.${frac}` : ""}`;
}
function percent(part, total) {
    if (total <= 0n) return 0;
    return Number(part * 1000n / total) / 10;
}
}),
"[project]/packages/domain/src/enums.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enums mirroring the Soroban contracts' `#[repr(u32)]` types. The numeric values are
 * part of the contract ABI — never renumber.
 */ __turbopack_context__.s([
    "CONTRACT_ERRORS",
    ()=>CONTRACT_ERRORS,
    "Conduct",
    ()=>Conduct,
    "MILESTONE_STATUS_LABEL",
    ()=>MILESTONE_STATUS_LABEL,
    "MilestoneStatus",
    ()=>MilestoneStatus,
    "OUTCOME_LABEL",
    ()=>OUTCOME_LABEL,
    "Outcome",
    ()=>Outcome,
    "PHASE_LABEL",
    ()=>PHASE_LABEL,
    "PROJECT_STATUS_LABEL",
    ()=>PROJECT_STATUS_LABEL,
    "Phase",
    ()=>Phase,
    "ProjectStatus",
    ()=>ProjectStatus,
    "RoundKind",
    ()=>RoundKind,
    "Vote",
    ()=>Vote,
    "milestoneStatusName",
    ()=>milestoneStatusName,
    "outcomeName",
    ()=>outcomeName,
    "phaseName",
    ()=>phaseName,
    "projectStatusName",
    ()=>projectStatusName
]);
const ProjectStatus = {
    Funding: 0,
    Active: 1,
    Completed: 2,
    Cancelled: 3,
    Failed: 4
};
const MilestoneStatus = {
    Pending: 0,
    InVerification: 1,
    Paid: 2,
    Failed: 3
};
const Outcome = {
    Pending: 0,
    Approved: 1,
    Rejected: 2,
    Inconclusive: 3,
    NoQuorum: 4
};
const Phase = {
    Commit: 0,
    Reveal: 1,
    Finalizable: 2,
    Finalized: 3
};
const RoundKind = {
    Original: 0,
    Appeal: 1
};
const Vote = {
    Approve: 1,
    Reject: 2
};
const Conduct = {
    Revealed: 0,
    NoCommit: 1,
    NoReveal: 2
};
const invert = (o)=>Object.fromEntries(Object.entries(o).map(([k, v])=>[
            v,
            k
        ]));
const projectStatusName = invert(ProjectStatus);
const milestoneStatusName = invert(MilestoneStatus);
const outcomeName = invert(Outcome);
const phaseName = invert(Phase);
const PROJECT_STATUS_LABEL = {
    0: "Funding",
    1: "Active",
    2: "Completed",
    3: "Cancelled",
    4: "Failed"
};
const MILESTONE_STATUS_LABEL = {
    0: "Pending",
    1: "In verification",
    2: "Paid",
    3: "Failed"
};
const OUTCOME_LABEL = {
    0: "Pending",
    1: "Approved",
    2: "Rejected",
    3: "Inconclusive",
    4: "No quorum"
};
const PHASE_LABEL = {
    0: "Commit",
    1: "Reveal",
    2: "Ready to finalize",
    3: "Finalized"
};
const CONTRACT_ERRORS = {
    escrow: {
        1: "Already initialized",
        2: "Not initialized",
        3: "Invalid parameters",
        4: "Token is not on the allow-list",
        5: "Invalid milestones",
        6: "Invalid deadline",
        7: "Project not found",
        8: "Milestone not found",
        9: "Action not allowed in the current state",
        10: "Invalid amount",
        11: "Deposit exceeds the remaining budget",
        12: "Funding period is closed",
        13: "Deadline has not passed yet",
        14: "Milestone deadline has passed",
        15: "Milestones must be completed in order",
        16: "Maximum verification attempts reached",
        17: "Insufficient escrow balance",
        18: "Decision is not final yet (appeal window or appeal pending)",
        19: "Nothing to refund",
        20: "Refund already claimed"
    },
    registry: {
        1: "Already initialized",
        2: "Not initialized",
        3: "Invalid parameters",
        4: "Already registered",
        5: "Not registered as a verifier",
        6: "Invalid amount",
        7: "Insufficient free (unlocked) stake",
        8: "Nothing to withdraw",
        9: "Unbonding period has not elapsed",
        10: "Verifier not eligible",
        11: "Stake already locked for this round",
        12: "Lock not found",
        13: "Invalid slash"
    },
    verification: {
        1: "Already initialized",
        2: "Not initialized",
        3: "Invalid parameters",
        4: "Round not found",
        5: "Not enough eligible verifiers to form a panel",
        6: "Not allowed in the current phase",
        7: "You are not on this round's panel",
        8: "You already committed a vote",
        9: "You have not committed a vote",
        10: "You already revealed your vote",
        11: "Vote or salt does not match your commitment",
        12: "Invalid vote",
        13: "Round already finalized",
        14: "Round cannot be finalized yet",
        15: "This round cannot be appealed",
        16: "An appeal was already filed",
        17: "The appeal window has closed",
        18: "You are not allowed to appeal this decision",
        19: "Not an original round"
    }
};
}),
"[project]/packages/domain/src/hashing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Hashing helpers that work identically in browsers and Node ≥ 20 (Web Crypto). */ __turbopack_context__.s([
    "canonicalJson",
    ()=>canonicalJson,
    "fromHex",
    ()=>fromHex,
    "metadataHash",
    ()=>metadataHash,
    "randomSalt",
    ()=>randomSalt,
    "sha256",
    ()=>sha256,
    "sha256Hex",
    ()=>sha256Hex,
    "toHex",
    ()=>toHex
]);
function toHex(bytes) {
    return Array.from(bytes, (b)=>b.toString(16).padStart(2, "0")).join("");
}
function fromHex(hex) {
    if (!/^([0-9a-fA-F]{2})*$/.test(hex)) throw new Error("Invalid hex");
    const out = new Uint8Array(hex.length / 2);
    for(let i = 0; i < out.length; i++)out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    return out;
}
async function sha256(data) {
    const bytes = typeof data === "string" ? new TextEncoder().encode(data) : data;
    const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
    return new Uint8Array(digest);
}
async function sha256Hex(data) {
    return toHex(await sha256(data));
}
function canonicalJson(value) {
    if (value === null || typeof value !== "object") return JSON.stringify(value);
    if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
    const entries = Object.entries(value).filter(([, v])=>v !== undefined).sort(([a], [b])=>a < b ? -1 : a > b ? 1 : 0);
    return `{${entries.map(([k, v])=>`${JSON.stringify(k)}:${canonicalJson(v)}`).join(",")}}`;
}
async function metadataHash(metadata) {
    return sha256Hex(canonicalJson(metadata));
}
function randomSalt() {
    const s = new Uint8Array(32);
    globalThis.crypto.getRandomValues(s);
    return s;
}
}),
"[project]/packages/domain/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$state$2d$machine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/state-machine.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/schemas.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/packages/domain/src/schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVIDENCE_MAX_BYTES",
    ()=>EVIDENCE_MAX_BYTES,
    "EVIDENCE_MIME_TYPES",
    ()=>EVIDENCE_MIME_TYPES,
    "HEX32_RE",
    ()=>HEX32_RE,
    "MAX_MILESTONES",
    ()=>MAX_MILESTONES,
    "STELLAR_ACCOUNT_RE",
    ()=>STELLAR_ACCOUNT_RE,
    "STELLAR_CONTRACT_RE",
    ()=>STELLAR_CONTRACT_RE,
    "TX_KINDS",
    ()=>TX_KINDS,
    "accountAddress",
    ()=>accountAddress,
    "authVerifySchema",
    ()=>authVerifySchema,
    "contractAddress",
    ()=>contractAddress,
    "createProjectFormSchema",
    ()=>createProjectFormSchema,
    "hex32",
    ()=>hex32,
    "projectDraftSchema",
    ()=>projectDraftSchema,
    "projectMetadataSchema",
    ()=>projectMetadataSchema,
    "recordTransactionSchema",
    ()=>recordTransactionSchema,
    "toEpochSeconds",
    ()=>toEpochSeconds,
    "txHash",
    ()=>txHash,
    "verifierProfileSchema",
    ()=>verifierProfileSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$amounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/amounts.ts [app-rsc] (ecmascript)");
;
;
const STELLAR_ACCOUNT_RE = /^G[A-Z2-7]{55}$/;
const STELLAR_CONTRACT_RE = /^C[A-Z2-7]{55}$/;
const HEX32_RE = /^[0-9a-f]{64}$/;
const accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(STELLAR_ACCOUNT_RE, "Invalid Stellar account address");
const contractAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(STELLAR_CONTRACT_RE, "Invalid contract address");
const hex32 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().toLowerCase().regex(HEX32_RE, "Expected a 32-byte hex string");
const txHash = hex32;
const MAX_MILESTONES = 10;
const projectMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3).max(120),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(10).max(280),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(5000).default(""),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(60).default("general"),
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3).max(120),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(2000).default("")
    })).min(1).max(MAX_MILESTONES)
});
const dateString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1, "Required").refine((s)=>!Number.isNaN(Date.parse(s)), "Invalid date");
const toEpochSeconds = (s)=>Math.floor(Date.parse(s) / 1000);
const createProjectFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3, "At least 3 characters").max(120),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(10, "At least 10 characters").max(280),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(5000),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(60),
    token: contractAddress,
    fundingDeadline: dateString,
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3, "At least 3 characters").max(120),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(2000),
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().refine((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$amounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidAmount"])(s), "Enter a positive amount (max 7 decimals)"),
        deadline: dateString
    })).min(1, "Add at least one milestone").max(MAX_MILESTONES, `At most ${MAX_MILESTONES} milestones`)
}).superRefine((v, ctx)=>{
    const fd = Date.parse(v.fundingDeadline);
    if (fd <= Date.now()) {
        ctx.addIssue({
            code: "custom",
            path: [
                "fundingDeadline"
            ],
            message: "Must be in the future"
        });
    }
    let prev = fd;
    v.milestones.forEach((m, i)=>{
        const d = Date.parse(m.deadline);
        if (!(d > prev)) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "milestones",
                    i,
                    "deadline"
                ],
                message: i === 0 ? "Must be after the funding deadline" : "Must be after the previous milestone"
            });
        }
        prev = d;
    });
});
const projectDraftSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    metadata: projectMetadataSchema,
    token: contractAddress,
    fundingDeadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive(),
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d+$/),
        deadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive()
    })).min(1).max(MAX_MILESTONES)
});
const TX_KINDS = [
    "create_project",
    "deposit",
    "cancel",
    "expire_funding",
    "submit_for_verification",
    "settle_milestone",
    "expire_milestone",
    "claim_refund",
    "register_verifier",
    "deposit_stake",
    "request_unstake",
    "withdraw_stake",
    "set_active",
    "commit",
    "reveal",
    "finalize_round",
    "appeal",
    "other"
];
const recordTransactionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    hash: txHash,
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(TX_KINDS),
    contract: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "escrow",
        "registry",
        "verification",
        "token"
    ]),
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(64),
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive().optional(),
    roundId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive().optional()
});
const authVerifySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    address: accountAddress,
    nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(16).max(128),
    signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(256)
});
const verifierProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    displayName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(60),
    expertise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(280).default("")
});
const EVIDENCE_MAX_BYTES = 25 * 1024 * 1024;
const EVIDENCE_MIME_TYPES = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/webp",
    "video/mp4",
    "application/zip",
    "text/plain",
    "text/csv"
];
}),
"[project]/packages/domain/src/state-machine.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BPS",
    ()=>BPS,
    "canAppeal",
    ()=>canAppeal,
    "decisionOf",
    ()=>decisionOf,
    "isDecisive",
    ()=>isDecisive,
    "phaseOf",
    ()=>phaseOf,
    "refundAmount",
    ()=>refundAmount,
    "submitBlocker",
    ()=>submitBlocker,
    "tally",
    ()=>tally
]);
/**
 * TypeScript mirror of docs/protocol-rules.md. Used by the UI to explain state and by
 * the indexer to derive projections. The contracts remain authoritative: these
 * functions never decide anything that is then trusted on-chain.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-rsc] (ecmascript)");
;
const BPS = 10_000;
function tally(approvals, rejections, quorum, thresholdBps) {
    const n = approvals + rejections;
    if (n < quorum) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].NoQuorum;
    if (approvals * BPS >= thresholdBps * n) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Approved;
    if (rejections * BPS >= thresholdBps * n) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Rejected;
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Inconclusive;
}
const isDecisive = (o)=>o === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Approved || o === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Rejected;
function phaseOf(r, now) {
    if (r.finalized) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Phase"].Finalized;
    if (now <= r.commitDeadline) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Phase"].Commit;
    if (now <= r.revealDeadline && r.reveals < r.commits) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Phase"].Reveal;
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Phase"].Finalizable;
}
function decisionOf(original, appeal, now) {
    const d = {
        isFinal: false,
        outcome: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Pending,
        underAppeal: false,
        appealableUntil: 0
    };
    if (!original.finalized) return d;
    d.outcome = original.outcome;
    if (!isDecisive(original.outcome)) {
        d.isFinal = true;
        return d;
    }
    d.appealableUntil = original.finalizedAt + original.appealWindowSecs;
    if (appeal) {
        if (appeal.finalized) {
            d.isFinal = true;
            if (isDecisive(appeal.outcome)) d.outcome = appeal.outcome;
        } else {
            d.underAppeal = true;
        }
    } else {
        d.isFinal = now > d.appealableUntil;
    }
    return d;
}
function submitBlocker(p, m, index, now) {
    if (p.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectStatus"].Active) return "project-not-active";
    if (index !== p.currentMilestone) return "not-current-milestone";
    if (m.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MilestoneStatus"].Pending) return "not-pending";
    if (now > m.deadline) return "deadline-passed";
    if (m.attempts >= p.maxAttempts) return "max-attempts";
    if (p.funded - p.released < m.amount) return "insufficient-balance";
    return null;
}
function refundAmount(contribution, refundPool, funded) {
    if (funded === 0n) return 0n;
    return contribution * refundPool / funded;
}
function canAppeal(args) {
    if (args.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RoundKind"].Original || !args.finalized || args.hasAppeal) return false;
    if (args.now > args.appealableUntil) return false;
    if (args.outcome === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Rejected) return args.isCreator;
    if (args.outcome === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Outcome"].Approved) return args.isFunder;
    return false;
}
}),
"[project]/packages/stellar-client/src/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VeridiaClient",
    ()=>VeridiaClient,
    "keypairSigner",
    ()=>keypairSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/account.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/transaction_builder.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/contract.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Server$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-rsc] (ecmascript) <export * as rpc .Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-rsc] (ecmascript) <export * as rpc .Api>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$assembleTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-rsc] (ecmascript) <export * as rpc .assembleTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-rsc] (ecmascript)");
;
;
;
/** Source used only for read-only simulations; never signs anything. */ // Public key of a throwaway seed (0x01…01); simulation does not require it to exist.
const READ_SOURCE = "GCFIRY65OQE7DFP5KLNS2PF2LVZMUZYJX4OZIEQ36N2IQANUB5XVYOJR";
class VeridiaClient {
    network;
    contracts;
    server;
    names;
    constructor(network, contracts){
        this.network = network;
        this.contracts = contracts;
        this.server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Server$3e$__["rpc"].Server(network.rpcUrl, {
            allowHttp: network.rpcUrl.startsWith("http://")
        });
        this.names = {
            [contracts.escrow]: "escrow",
            [contracts.registry]: "registry",
            [contracts.verification]: "verification",
            [contracts.token]: "token"
        };
    }
    contractId(c) {
        return this.contracts[c === "token" ? "token" : c];
    }
    /** Read-only call via simulation. Nothing is signed or submitted. */ async read(contract, method, args = []) {
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionBuilder"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Account"](READ_SOURCE, "0"), {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Contract"](this.contractId(contract)).call(method, ...args)).setTimeout(30).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeContractError"])(sim.error, contract, this.names);
        const retval = sim.result?.retval;
        return retval ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(retval) : undefined;
    }
    /** Build → simulate → sign (wallet) → submit → wait for confirmation. */ async invoke(o) {
        const progress = o.onProgress ?? (()=>{});
        progress({
            stage: "simulating"
        });
        const account = await this.server.getAccount(o.source);
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionBuilder"](account, {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Contract"](this.contractId(o.contract)).call(o.method, ...o.args)).setTimeout(120).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeContractError"])(sim.error, o.contract, this.names);
            progress({
                stage: "failed",
                error: err.message
            });
            throw err;
        }
        const prepared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$assembleTransaction$3e$__["rpc"].assembleTransaction(tx, sim).build();
        progress({
            stage: "signing"
        });
        const signedXdr = await o.sign(prepared.toXDR(), {
            networkPassphrase: this.network.passphrase,
            address: o.source
        });
        const signed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(signedXdr, this.network.passphrase);
        const sent = await this.server.sendTransaction(signed);
        if (sent.status === "ERROR" || sent.status === "TRY_AGAIN_LATER") {
            const detail = sent.errorResult?.result.type ?? sent.status;
            const error = `Transaction rejected by the network: ${detail}`;
            progress({
                stage: "failed",
                hash: sent.hash,
                error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ContractCallError"](error, o.contract, null, detail);
        }
        progress({
            stage: "submitted",
            hash: sent.hash
        });
        const res = await this.waitForTransaction(sent.hash, o.timeoutMs ?? 60_000);
        if (res.status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.SUCCESS) {
            const diag = res.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.FAILED ? (res.diagnosticEventsXdr ?? []).map((e)=>e.toXDR("base64")).join("\n") : "";
            const error = res.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.NOT_FOUND ? "Transaction not confirmed in time; it will be reconciled automatically" : "Transaction failed on-chain";
            progress({
                stage: "failed",
                hash: sent.hash,
                error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ContractCallError"](error, o.contract, null, diag);
        }
        progress({
            stage: "confirmed",
            hash: sent.hash,
            ledger: res.ledger
        });
        return {
            hash: sent.hash,
            ledger: res.ledger,
            returnValue: res.returnValue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(res.returnValue) : undefined
        };
    }
    async waitForTransaction(hash, timeoutMs = 60_000) {
        const start = Date.now();
        let delay = 500;
        for(;;){
            const res = await this.server.getTransaction(hash);
            if (res.status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.NOT_FOUND) return res;
            if (Date.now() - start > timeoutMs) return res;
            await new Promise((r)=>setTimeout(r, delay));
            delay = Math.min(delay * 1.5, 3000);
        }
    }
    // ---------------------------------------------------------------- typed reads
    async getProject(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeProject"])(await this.read("escrow", "get_project", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]));
    }
    async getMilestones(id) {
        return (await this.read("escrow", "get_milestones", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]) ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeMilestone"]);
    }
    async projectCount() {
        return Number(await this.read("escrow", "project_count"));
    }
    async contributionOf(projectId, funder) {
        return BigInt(await this.read("escrow", "contribution_of", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(projectId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(funder)
        ]));
    }
    async hasRefunded(projectId, funder) {
        return Boolean(await this.read("escrow", "has_refunded", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(projectId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(funder)
        ]));
    }
    async isTokenAllowed(token) {
        return Boolean(await this.read("escrow", "is_token_allowed", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(token)
        ]));
    }
    async getRound(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeRound"])(await this.read("verification", "get_round", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]));
    }
    async getDecision(roundId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeDecision"])(await this.read("verification", "get_decision", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(roundId)
        ]));
    }
    async getPhase(roundId) {
        return Number(await this.read("verification", "get_phase", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(roundId)
        ]));
    }
    async getVote(roundId, voter) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeVote"])(await this.read("verification", "get_vote", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].u64(roundId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(voter)
        ]));
    }
    async roundCount() {
        return Number(await this.read("verification", "round_count"));
    }
    async getVerifier(addr) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeVerifier"])(await this.read("registry", "get_verifier", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(addr)
        ]));
    }
    async eligibleVerifiers() {
        return (await this.read("registry", "eligible") ?? []).map(String);
    }
    async tokenBalance(token, addr) {
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionBuilder"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Account"](READ_SOURCE, "0"), {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Contract"](token).call("balance", __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sc"].address(addr))).setTimeout(30).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) return 0n;
        return sim.result?.retval ? BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(sim.result.retval)) : 0n;
    }
    async getVerificationConfig() {
        return this.read("verification", "get_config");
    }
    async getRegistryConfig() {
        return this.read("registry", "get_config");
    }
}
function keypairSigner(kp) {
    return async (txXdr, { networkPassphrase })=>{
        const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(txXdr, networkPassphrase);
        tx.sign(kp);
        return tx.toXDR();
    };
}
}),
"[project]/packages/stellar-client/src/commitment.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMITMENT_DOMAIN",
    ()=>COMMITMENT_DOMAIN,
    "computeCommitment",
    ()=>computeCommitment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/address.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/hashing.ts [app-rsc] (ecmascript)");
;
;
const COMMITMENT_DOMAIN = "VERIDIA-V1";
async function computeCommitment(roundId, voter, vote, salt) {
    if (salt.length !== 32) throw new Error("Salt must be 32 bytes");
    if (vote !== 1 && vote !== 2) throw new Error("Vote must be 1 (approve) or 2 (reject)");
    const domain = new TextEncoder().encode(COMMITMENT_DOMAIN);
    const round = new Uint8Array(8);
    new DataView(round.buffer).setBigUint64(0, BigInt(roundId), false);
    const voterXdr = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Address"].fromString(voter).toScVal().toXDR());
    const buf = new Uint8Array(domain.length + 8 + voterXdr.length + 1 + 32);
    let o = 0;
    buf.set(domain, o);
    o += domain.length;
    buf.set(round, o);
    o += 8;
    buf.set(voterXdr, o);
    o += voterXdr.length;
    buf[o++] = vote;
    buf.set(salt, o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"])(buf);
}
}),
"[project]/packages/stellar-client/src/errors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractCallError",
    ()=>ContractCallError,
    "decodeContractError",
    ()=>decodeContractError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-rsc] (ecmascript)");
;
class ContractCallError extends Error {
    contract;
    code;
    raw;
    constructor(message, contract, code, raw){
        super(message), this.contract = contract, this.code = code, this.raw = raw;
        this.name = "ContractCallError";
    }
}
const TOKEN_ERRORS = {
    10: "Insufficient token balance",
    13: "Missing trustline for this token",
    9: "Insufficient allowance"
};
function decodeContractError(raw, invoked, contractNames = {}) {
    const re = /contract:(C[A-Z2-7]{55}),\s*topics:\[error, Error\(Contract, #(\d+)\)/g;
    let origin = null;
    for (const m of raw.matchAll(re))origin = {
        id: m[1],
        code: Number(m[2])
    }; // newest first → keep last
    let contract = invoked;
    let code = null;
    if (origin) {
        contract = contractNames[origin.id] ?? invoked;
        code = origin.code;
    } else {
        const m = /Error\(Contract, #(\d+)\)/.exec(raw);
        if (m) code = Number(m[1]);
    }
    if (code !== null) {
        const table = contract === "token" ? TOKEN_ERRORS : contract ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTRACT_ERRORS"][contract] : undefined;
        return new ContractCallError(table?.[code] ?? `Contract error #${code}`, contract, code, raw);
    }
    if (/Error\(Auth, /.test(raw)) {
        return new ContractCallError("Authorization failed for this action", invoked, null, raw);
    }
    const firstLine = raw.split("\n")[0] ?? raw;
    return new ContractCallError(firstLine.slice(0, 300), invoked, null, raw);
}
}),
"[project]/packages/stellar-client/src/events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeEvent",
    ()=>decodeEvent,
    "fetchEvents",
    ()=>fetchEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-rsc] (ecmascript)");
;
;
function decodeEvent(ev, names) {
    if (!ev.contractId || ev.topic.length === 0) return null;
    const contractId = ev.contractId.contractId();
    const [first, ...rest] = ev.topic.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(t));
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(ev.value);
    return {
        id: ev.id,
        ledger: ev.ledger,
        ledgerClosedAt: ev.ledgerClosedAt,
        txHash: ev.txHash,
        contractId,
        contract: names[contractId] ?? "unknown",
        name: String(first),
        topics: rest.map(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toJsonSafe"]),
        data: value && typeof value === "object" && !Array.isArray(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toJsonSafe"])(value) : {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toJsonSafe"])(value)
        }
    };
}
async function fetchEvents(server, contractIds, names, from, limit = 200) {
    const filters = [
        {
            type: "contract",
            contractIds
        }
    ];
    const res = "cursor" in from ? await server.getEvents({
        filters,
        cursor: from.cursor,
        limit
    }) : await server.getEvents({
        filters,
        startLedger: from.startLedger,
        limit
    });
    const events = res.events.filter((e)=>e.inSuccessfulContractCall !== false).map((e)=>decodeEvent(e, names)).filter((e)=>e !== null);
    return {
        events,
        cursor: res.cursor,
        latestLedger: res.latestLedger,
        oldestLedger: res.oldestLedger
    };
}
}),
"[project]/packages/stellar-client/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/networks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$commitment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/commitment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/events.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/packages/stellar-client/src/networks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NETWORKS",
    ()=>NETWORKS,
    "networkConfig",
    ()=>networkConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/network.js [app-rsc] (ecmascript)");
;
const NETWORKS = {
    local: {
        name: "local",
        passphrase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Networks"].STANDALONE,
        rpcUrl: "http://localhost:8000/rpc",
        friendbotUrl: "http://localhost:8000/friendbot"
    },
    testnet: {
        name: "testnet",
        passphrase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Networks"].TESTNET,
        rpcUrl: "https://soroban-testnet.stellar.org",
        friendbotUrl: "https://friendbot.stellar.org",
        explorerTxUrl: (h)=>`https://stellar.expert/explorer/testnet/tx/${h}`
    }
};
function networkConfig(name, rpcUrlOverride) {
    const base = NETWORKS[name];
    if (!base) throw new Error(`Unknown network "${name}" (expected local | testnet)`);
    return rpcUrlOverride ? {
        ...base,
        rpcUrl: rpcUrlOverride
    } : base;
}
}),
"[project]/packages/stellar-client/src/scval.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeDecision",
    ()=>decodeDecision,
    "decodeMilestone",
    ()=>decodeMilestone,
    "decodeProject",
    ()=>decodeProject,
    "decodeRound",
    ()=>decodeRound,
    "decodeVerifier",
    ()=>decodeVerifier,
    "decodeVote",
    ()=>decodeVote,
    "milestoneInputs",
    ()=>milestoneInputs,
    "native",
    ()=>native,
    "sc",
    ()=>sc,
    "toJsonSafe",
    ()=>toJsonSafe
]);
/**
 * ScVal argument builders and typed decoders for the Veridia contract types.
 * Field names match the Rust `#[contracttype]` structs exactly.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/address.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-rsc] (ecmascript) <export * as xdr .ScVal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScMapEntry$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-rsc] (ecmascript) <export * as xdr .ScMapEntry>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/hashing.ts [app-rsc] (ecmascript)");
;
;
const sc = {
    u32: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nativeToScVal"])(v, {
            type: "u32"
        }),
    u64: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nativeToScVal"])(BigInt(v), {
            type: "u64"
        }),
    i128: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nativeToScVal"])(BigInt(v), {
            type: "i128"
        }),
    bool: (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvBool(v),
    address: (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Address"].fromString(v).toScVal(),
    bytes32: (hex)=>{
        const b = typeof hex === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromHex"])(hex) : hex;
        if (b.length !== 32) throw new Error("Expected 32 bytes");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvBytes(Buffer.from(b));
    },
    /** A `#[contracttype]` struct: ScMap with symbol keys sorted lexicographically. */ struct: (fields)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvMap(Object.keys(fields).sort().map((k)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScMapEntry$3e$__["xdr"].ScMapEntry({
                key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvSymbol(k),
                val: fields[k]
            }))),
    vec: (items)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvVec(items)
};
const milestoneInputs = (ms)=>sc.vec(ms.map((m)=>sc.struct({
            amount: sc.i128(m.amount),
            deadline: sc.u64(m.deadline)
        })));
const num = (v)=>Number(v);
const big = (v)=>BigInt(v);
const hex = (v)=>v == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(new Uint8Array(v));
const opt = (v, f)=>v === null || v === undefined ? null : f(v);
function native(v) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scValToNative"])(v);
}
function decodeProject(v) {
    const p = v;
    return {
        id: num(p.id),
        creator: String(p.creator),
        token: String(p.token),
        metadataHash: hex(p.metadata_hash),
        budget: big(p.budget),
        funded: big(p.funded),
        released: big(p.released),
        fundingDeadline: num(p.funding_deadline),
        createdAt: num(p.created_at),
        status: num(p.status),
        milestoneCount: num(p.milestone_count),
        currentMilestone: num(p.current_milestone),
        maxAttempts: num(p.max_attempts),
        refundPool: big(p.refund_pool),
        refunded: big(p.refunded)
    };
}
function decodeMilestone(v) {
    const m = v;
    return {
        amount: big(m.amount),
        deadline: num(m.deadline),
        status: num(m.status),
        attempts: num(m.attempts),
        currentRound: opt(m.current_round, num),
        evidenceHash: hex(m.evidence_hash),
        paidAt: num(m.paid_at)
    };
}
function decodeRound(v) {
    const r = v;
    return {
        id: num(r.id),
        kind: num(r.kind),
        parentRoundId: opt(r.parent_round_id, num),
        projectId: num(r.project_id),
        milestone: num(r.milestone),
        attempt: num(r.attempt),
        evidenceHash: hex(r.evidence_hash),
        creator: String(r.creator),
        panel: r.panel.map(String),
        openedAt: num(r.opened_at),
        commitDeadline: num(r.commit_deadline),
        revealDeadline: num(r.reveal_deadline),
        quorum: num(r.quorum),
        approvalThresholdBps: num(r.approval_threshold_bps),
        noShowSlashBps: num(r.no_show_slash_bps),
        appealWindowSecs: num(r.appeal_window_secs),
        commits: num(r.commits),
        reveals: num(r.reveals),
        approvals: num(r.approvals),
        rejections: num(r.rejections),
        finalized: Boolean(r.finalized),
        outcome: num(r.outcome),
        finalizedAt: num(r.finalized_at),
        appealRoundId: opt(r.appeal_round_id, num),
        appellant: opt(r.appellant, String),
        appealBond: big(r.appeal_bond)
    };
}
function decodeDecision(v) {
    const d = v;
    return {
        roundId: num(d.round_id),
        isFinal: Boolean(d.is_final),
        outcome: num(d.outcome),
        underAppeal: Boolean(d.under_appeal),
        appealableUntil: num(d.appealable_until),
        appealRoundId: opt(d.appeal_round_id, num)
    };
}
function decodeVerifier(v) {
    if (v === null || v === undefined) return null;
    const r = v;
    return {
        active: Boolean(r.active),
        stake: big(r.stake),
        locked: big(r.locked),
        unbonding: big(r.unbonding),
        unbondAt: num(r.unbond_at),
        registeredAt: num(r.registered_at),
        metadataHash: hex(r.metadata_hash),
        roundsAssigned: num(r.rounds_assigned),
        roundsRevealed: num(r.rounds_revealed),
        noShows: num(r.no_shows),
        activeRounds: num(r.active_rounds),
        totalSlashed: big(r.total_slashed)
    };
}
function decodeVote(v) {
    if (v === null || v === undefined) return null;
    const r = v;
    return {
        commitment: hex(r.commitment),
        committedAt: num(r.committed_at),
        revealed: Boolean(r.revealed),
        vote: num(r.vote)
    };
}
function toJsonSafe(v) {
    if (typeof v === "bigint") return v.toString();
    if (v instanceof Uint8Array) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(v);
    if (Array.isArray(v)) return v.map(toJsonSafe);
    if (v && typeof v === "object") {
        return Object.fromEntries(Object.entries(v).map(([k, x])=>[
                k,
                toJsonSafe(x)
            ]));
    }
    return v;
}
}),
]})(),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__151jn_j8_k4ox._.js.map