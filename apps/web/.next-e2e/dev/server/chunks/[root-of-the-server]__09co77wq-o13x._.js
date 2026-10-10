module.exports = [
(()=>{"use strict";return[
"[project]/apps/web/src/app/api/projects/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/hashing.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/schemas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/db/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/audit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$chain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/chain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/http.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/queries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/session.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handler"])(async (req)=>{
    const filter = new URL(req.url).searchParams.get("filter") ?? "all";
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"])({
        projects: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listProjects"])({
            viewer: session?.address,
            filter
        })
    });
});
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handler"])(async (req)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireSession"])();
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJson"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectDraftSchema"]);
    if (body.metadata.milestones.length !== body.milestones.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpError"](422, "Milestone metadata and amounts must have the same length");
    }
    const now = Math.floor(Date.now() / 1000);
    if (body.fundingDeadline <= now) throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpError"](422, "Funding deadline must be in the future");
    let prev = body.fundingDeadline;
    for (const m of body.milestones){
        if (m.deadline <= prev) throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpError"](422, "Milestone deadlines must be increasing and after the funding deadline");
        if (BigInt(m.amount) <= 0n) throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpError"](422, "Milestone amounts must be positive");
        prev = m.deadline;
    }
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$chain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chain"])().isTokenAllowed(body.token)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpError"](422, "Token is not on the escrow allow-list");
    // A server nonce makes every draft's hash unique, so drafts can't be confused.
    const metadata = {
        ...body.metadata,
        nonce: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16).toString("hex")
    };
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["metadataHash"])(metadata);
    const budget = body.milestones.reduce((acc, m)=>acc + BigInt(m.amount), 0n);
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [row] = await db.insert(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).values({
        creatorAddress: session.address,
        token: body.token,
        title: body.metadata.title,
        summary: body.metadata.summary,
        description: body.metadata.description,
        category: body.metadata.category,
        metadata,
        metadataHash: hash,
        budget: budget.toString(),
        fundingDeadline: body.fundingDeadline,
        syncStatus: "draft"
    }).returning({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].id
    });
    await db.insert(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"]).values(body.milestones.map((m, i)=>({
            projectId: row.id,
            index: i,
            title: body.metadata.milestones[i].title,
            description: body.metadata.milestones[i].description,
            amount: m.amount,
            deadline: m.deadline
        })));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])(session.address, "project_draft_created", "project", row.id, {
        metadataHash: hash
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"])({
        id: row.id,
        metadataHash: hash
    }, 201);
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/db/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "closeDb",
    ()=>closeDb,
    "getDb",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$23$2e$1$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/.pnpm/pg@8.23.1/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/db/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$23$2e$1$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$23$2e$1$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const globalForDb = globalThis;
function getDb() {
    if (!globalForDb.__veridiaDb) {
        const url = process.env.DATABASE_URL;
        if (!url) throw new Error("DATABASE_URL is not set");
        globalForDb.__veridiaPool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$23$2e$1$2f$node_modules$2f$pg$29$__["default"].Pool({
            connectionString: url,
            max: 10
        });
        globalForDb.__veridiaDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(globalForDb.__veridiaPool, {
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
        });
    }
    return globalForDb.__veridiaDb;
}
async function closeDb() {
    await globalForDb.__veridiaPool?.end();
    globalForDb.__veridiaPool = undefined;
    globalForDb.__veridiaDb = undefined;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appeals",
    ()=>appeals,
    "auditEvents",
    ()=>auditEvents,
    "authNonces",
    ()=>authNonces,
    "contractEvents",
    ()=>contractEvents,
    "contributions",
    ()=>contributions,
    "escrowConfigs",
    ()=>escrowConfigs,
    "evidence",
    ()=>evidence,
    "evidenceVersions",
    ()=>evidenceVersions,
    "finalOutcomes",
    ()=>finalOutcomes,
    "indexerState",
    ()=>indexerState,
    "milestones",
    ()=>milestones,
    "panelAssignments",
    ()=>panelAssignments,
    "projects",
    ()=>projects,
    "stakeRecords",
    ()=>stakeRecords,
    "transactions",
    ()=>transactions,
    "users",
    ()=>users,
    "verificationRounds",
    ()=>verificationRounds,
    "verifierProfiles",
    ()=>verifierProfiles,
    "voteCommitments",
    ()=>voteCommitments
]);
/**
 * PostgreSQL schema (application + indexing layer).
 *
 * The chain is the source of truth for balances, statuses, votes and outcomes; the
 * columns mirroring on-chain state are written ONLY by the indexer from contract
 * events or direct contract reads. Token amounts are stored as numeric(39,0) strings
 * (base units) to avoid precision loss.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/bigint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/smallint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
;
;
const amount = (name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])(name, {
        precision: 39,
        scale: 0
    });
const created = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at", {
        withTimezone: true
    }).notNull().defaultNow();
const updated = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at", {
        withTimezone: true
    }).notNull().defaultNow();
/** Unix seconds (ledger timestamps). */ const secs = (name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigint"])(name, {
        mode: "number"
    });
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("address").notNull().unique(),
    displayName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("display_name"),
    createdAt: created(),
    lastLoginAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("last_login_at", {
        withTimezone: true
    })
});
const authNonces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("auth_nonces", {
    nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("nonce").primaryKey(),
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("address").notNull(),
    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("message").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at", {
        withTimezone: true
    }).notNull(),
    usedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("used_at", {
        withTimezone: true
    }),
    createdAt: created()
});
const escrowConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("escrow_configs", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    network: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("network").notNull(),
    escrowContract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("escrow_contract").notNull(),
    registryContract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("registry_contract").notNull(),
    verificationContract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("verification_contract").notNull(),
    defaultToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("default_token").notNull(),
    params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("params").notNull(),
    startLedger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("start_ledger").notNull(),
    active: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("active").notNull().default(true),
    createdAt: created()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("escrow_configs_network_escrow").on(t.network, t.escrowContract)
    ]);
const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("projects", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    /** On-chain project id; null while the creation tx is pending. */ chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("chain_id").unique(),
    creatorAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("creator_address").notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("title").notNull(),
    summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("summary").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull().default(""),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("category").notNull().default("general"),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("metadata").notNull(),
    metadataHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("metadata_hash").notNull(),
    budget: amount("budget").notNull(),
    funded: amount("funded").notNull().default("0"),
    released: amount("released").notNull().default("0"),
    refundPool: amount("refund_pool").notNull().default("0"),
    fundingDeadline: secs("funding_deadline").notNull(),
    maxAttempts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("max_attempts"),
    /** Mirrors ProjectStatus; null until confirmed on-chain. */ status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("status"),
    currentMilestone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("current_milestone").notNull().default(0),
    /** draft → pending (tx sent) → confirmed (seen on-chain). */ syncStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("sync_status").notNull().default("draft"),
    createdTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_tx"),
    lastReconciledAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("last_reconciled_at", {
        withTimezone: true
    }),
    createdAt: created(),
    updatedAt: updated()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("projects_creator_idx").on(t.creatorAddress),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("projects_metadata_hash_idx").on(t.metadataHash)
    ]);
const milestones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("milestones", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    projectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_id").notNull().references(()=>projects.id, {
        onDelete: "cascade"
    }),
    index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("index").notNull(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("title").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull().default(""),
    amount: amount("amount").notNull(),
    deadline: secs("deadline").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("status").notNull().default(0),
    attempts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("attempts").notNull().default(0),
    currentRoundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("current_round_id"),
    evidenceHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("evidence_hash"),
    paidAt: secs("paid_at"),
    paidTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("paid_tx"),
    updatedAt: updated()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("milestones_project_index").on(t.projectId, t.index)
    ]);
const contributions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("contributions", {
    projectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_id").notNull().references(()=>projects.id, {
        onDelete: "cascade"
    }),
    funderAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("funder_address").notNull(),
    amount: amount("amount").notNull().default("0"),
    refunded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("refunded").notNull().default(false),
    refundAmount: amount("refund_amount"),
    updatedAt: updated()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.projectId,
                t.funderAddress
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("contributions_funder_idx").on(t.funderAddress)
    ]);
const evidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("evidence", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    projectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_id").notNull().references(()=>projects.id, {
        onDelete: "cascade"
    }),
    milestoneIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("milestone_index").notNull(),
    createdBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_by").notNull(),
    createdAt: created()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("evidence_project_milestone").on(t.projectId, t.milestoneIndex)
    ]);
const evidenceVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("evidence_versions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    evidenceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("evidence_id").notNull().references(()=>evidence.id, {
        onDelete: "cascade"
    }),
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("version").notNull(),
    storageKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("storage_key").notNull(),
    fileName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("file_name").notNull(),
    mimeType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("mime_type").notNull(),
    sizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("size_bytes").notNull(),
    sha256: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("sha256").notNull(),
    note: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("note").notNull().default(""),
    uploadedBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("uploaded_by").notNull(),
    /** Set by the indexer when a round binds this hash on-chain. */ submittedRoundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("submitted_round_id"),
    uploadedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("uploaded_at", {
        withTimezone: true
    }).notNull().defaultNow()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("evidence_versions_evidence_version").on(t.evidenceId, t.version),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("evidence_versions_sha_idx").on(t.sha256)
    ]);
const verifierProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verifier_profiles", {
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("address").primaryKey(),
    displayName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("display_name"),
    expertise: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("expertise").notNull().default(""),
    metadataHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("metadata_hash"),
    registered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("registered").notNull().default(false),
    registeredAt: secs("registered_at"),
    active: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("active").notNull().default(false),
    stake: amount("stake").notNull().default("0"),
    locked: amount("locked").notNull().default("0"),
    unbonding: amount("unbonding").notNull().default("0"),
    unbondAt: secs("unbond_at"),
    roundsAssigned: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rounds_assigned").notNull().default(0),
    roundsRevealed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rounds_revealed").notNull().default(0),
    noShows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("no_shows").notNull().default(0),
    totalSlashed: amount("total_slashed").notNull().default("0"),
    updatedAt: updated()
});
const stakeRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("stake_records", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    eventId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("event_id").notNull().unique(),
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("address").notNull(),
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("kind").notNull(),
    amount: amount("amount").notNull(),
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id"),
    txHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("tx_hash").notNull(),
    ledger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("ledger").notNull(),
    createdAt: created()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("stake_records_address_idx").on(t.address)
    ]);
const verificationRounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verification_rounds", {
    /** On-chain round id. */ id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("id").primaryKey(),
    projectChainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_chain_id").notNull(),
    milestoneIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("milestone_index").notNull(),
    attempt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("attempt").notNull(),
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("kind").notNull(),
    parentRoundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("parent_round_id"),
    evidenceHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("evidence_hash").notNull(),
    commitDeadline: secs("commit_deadline").notNull(),
    revealDeadline: secs("reveal_deadline").notNull(),
    commits: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("commits").notNull().default(0),
    reveals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("reveals").notNull().default(0),
    approvals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("approvals").notNull().default(0),
    rejections: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rejections").notNull().default(0),
    finalized: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("finalized").notNull().default(false),
    outcome: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("outcome").notNull().default(0),
    finalizedAt: secs("finalized_at"),
    appealableUntil: secs("appealable_until"),
    appealRoundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("appeal_round_id"),
    openedTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("opened_tx").notNull(),
    openedLedger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("opened_ledger").notNull(),
    createdAt: created(),
    updatedAt: updated()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("rounds_project_idx").on(t.projectChainId, t.milestoneIndex)
    ]);
const panelAssignments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("panel_assignments", {
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id").notNull().references(()=>verificationRounds.id, {
        onDelete: "cascade"
    }),
    verifierAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("verifier_address").notNull(),
    position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("position").notNull(),
    /** Mirrors Conduct after finalization: 0 revealed, 1 no-commit, 2 no-reveal. */ conduct: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("conduct"),
    slashed: amount("slashed").notNull().default("0")
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.roundId,
                t.verifierAddress
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("panel_verifier_idx").on(t.verifierAddress)
    ]);
const voteCommitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("vote_commitments", {
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id").notNull().references(()=>verificationRounds.id, {
        onDelete: "cascade"
    }),
    verifierAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("verifier_address").notNull(),
    commitment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("commitment").notNull(),
    committedTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("committed_tx").notNull(),
    committedLedger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("committed_ledger").notNull(),
    revealed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("revealed").notNull().default(false),
    vote: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("vote"),
    revealedTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("revealed_tx"),
    revealedLedger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("revealed_ledger")
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.roundId,
                t.verifierAddress
            ]
        })
    ]);
const appeals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("appeals", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id").notNull().unique(),
    appealRoundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("appeal_round_id").notNull().unique(),
    projectChainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_chain_id").notNull(),
    milestoneIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("milestone_index").notNull(),
    appellant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("appellant").notNull(),
    bond: amount("bond").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status").notNull().default("pending"),
    appealOutcome: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("appeal_outcome"),
    finalOutcome: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("final_outcome"),
    overturned: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("overturned"),
    filedTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("filed_tx").notNull(),
    filedLedger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("filed_ledger").notNull(),
    resolvedTx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("resolved_tx"),
    createdAt: created(),
    updatedAt: updated()
});
const finalOutcomes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("final_outcomes", {
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id").primaryKey(),
    projectChainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_chain_id").notNull(),
    milestoneIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("milestone_index").notNull(),
    outcome: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$smallint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["smallint"])("outcome").notNull(),
    /** paid | reopened | failed */ effect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("effect").notNull(),
    amount: amount("amount"),
    txHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("tx_hash").notNull(),
    ledger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("ledger").notNull(),
    createdAt: created()
});
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("transactions", {
    hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("hash").primaryKey(),
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("kind").notNull(),
    contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("contract").notNull(),
    method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("method").notNull(),
    sourceAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("source_address").notNull(),
    projectChainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("project_chain_id"),
    roundId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("round_id"),
    /** pending | success | failed | expired */ status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status").notNull().default("pending"),
    ledger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("ledger"),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("error"),
    checkAttempts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("check_attempts").notNull().default(0),
    submittedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("submitted_at", {
        withTimezone: true
    }).notNull().defaultNow(),
    confirmedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("confirmed_at", {
        withTimezone: true
    }),
    lastCheckedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("last_checked_at", {
        withTimezone: true
    })
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("transactions_source_idx").on(t.sourceAddress),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("transactions_status_idx").on(t.status)
    ]);
const contractEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("contract_events", {
    /** RPC event id (globally unique) — idempotency key. */ id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    ledger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("ledger").notNull(),
    ledgerClosedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("ledger_closed_at", {
        withTimezone: true
    }).notNull(),
    txHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("tx_hash").notNull(),
    contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("contract").notNull(),
    contractId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("contract_id").notNull(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    topics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("topics").notNull(),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("data").notNull(),
    processedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("processed_at", {
        withTimezone: true
    }),
    createdAt: created()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("contract_events_ledger_idx").on(t.ledger),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("contract_events_name_idx").on(t.name)
    ]);
const indexerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("indexer_state", {
    key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("key").primaryKey(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    updatedAt: updated()
});
const auditEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("audit_events", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    actorAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("actor_address"),
    action: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("action").notNull(),
    entityType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("entity_type").notNull(),
    entityId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("entity_id").notNull(),
    details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("details").notNull().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`'{}'::jsonb`),
    createdAt: created()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("audit_entity_idx").on(t.entityType, t.entityId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("audit_created_idx").on(t.createdAt)
    ]);
}),
"[project]/apps/web/src/server/audit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "audit",
    ()=>audit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/db/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/db/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function audit(actor, action, entityType, entityId, details = {}) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])().insert(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditEvents"]).values({
        actorAddress: actor,
        action,
        entityType,
        entityId: String(entityId),
        details
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/server/chain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chain",
    ()=>chain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/networks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/env.ts [app-route] (ecmascript)");
;
;
;
;
let client = null;
function chain() {
    if (!client) {
        const cfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicConfig"])();
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VeridiaClient"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["networkConfig"])(cfg.network, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"])().STELLAR_RPC_URL || undefined), cfg.contracts);
    }
    return client;
}
}),
"[project]/apps/web/src/server/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicConfig",
    ()=>publicConfig
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/networks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/env.ts [app-route] (ecmascript)");
;
;
;
;
;
let cached = null;
function publicConfig() {
    if (cached) return cached;
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"])();
    const dir = e.DEPLOYMENTS_DIR ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), "..", "..", "deployments");
    const d = JSON.parse((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(dir, `${e.STELLAR_NETWORK}.json`), "utf8"));
    const net = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NETWORKS"][e.STELLAR_NETWORK];
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
"[project]/apps/web/src/server/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    STELLAR_NETWORK: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "local",
        "testnet"
    ]).default("local"),
    STELLAR_RPC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
    DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_ENDPOINT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().url(),
    S3_REGION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().default("us-east-1"),
    S3_BUCKET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(3),
    S3_ACCESS_KEY_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_SECRET_ACCESS_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    S3_FORCE_PATH_STYLE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().default("true"),
    SESSION_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(32, "SESSION_SECRET must be at least 32 characters"),
    DEPLOYMENTS_DIR: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
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
"[project]/apps/web/src/server/http.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpError",
    ()=>HttpError,
    "handler",
    ()=>handler,
    "intParam",
    ()=>intParam,
    "json",
    ()=>json,
    "parseJson",
    ()=>parseJson,
    "requireSession",
    ()=>requireSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@playwright+test@1.64.0_@types+node@22.20.5_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/session.ts [app-route] (ecmascript)");
;
;
;
class HttpError extends Error {
    status;
    details;
    constructor(status, message, details){
        super(message), this.status = status, this.details = details;
    }
}
const json = (data, status = 200)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        status,
        headers: {
            "Cache-Control": "no-store"
        }
    });
function handler(fn) {
    return async (...args)=>{
        try {
            return await fn(...args);
        } catch (e) {
            if (e instanceof HttpError) return json({
                error: e.message,
                details: e.details
            }, e.status);
            console.error("[api]", e);
            return json({
                error: "Internal server error"
            }, 500);
        }
    };
}
async function requireSession() {
    const s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])();
    if (!s) throw new HttpError(401, "Sign in with your wallet first");
    return s;
}
async function parseJson(req, schema) {
    let body;
    try {
        body = await req.json();
    } catch  {
        throw new HttpError(400, "Invalid JSON body");
    }
    const r = schema.safeParse(body);
    if (!r.success) throw new HttpError(422, "Validation failed", r.error.issues);
    return r.data;
}
function intParam(v, name = "id") {
    const n = Number(v);
    if (!Number.isInteger(n) || n <= 0) throw new HttpError(400, `Invalid ${name}`);
    return n;
}
}),
"[project]/apps/web/src/server/queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "appealableRounds",
    ()=>appealableRounds,
    "assignmentsFor",
    ()=>assignmentsFor,
    "canViewEvidence",
    ()=>canViewEvidence,
    "dashboardFor",
    ()=>dashboardFor,
    "evidenceVersions",
    ()=>evidenceVersions,
    "getProject",
    ()=>getProject,
    "getProjectByChainId",
    ()=>getProjectByChainId,
    "getRoundDetail",
    ()=>getRoundDetail,
    "getVerifierProfile",
    ()=>getVerifierProfile,
    "listActivity",
    ()=>listActivity,
    "listAppeals",
    ()=>listAppeals,
    "listProjects",
    ()=>listProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.4_@electric-sql+pglite@0.5.8_@types+pg@8.23.1_pg@8.23.1/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/db/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/db/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function listProjects(opts = {}) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const f = opts.filter ?? "all";
    const visible = opts.viewer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNotNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].creatorAddress, opts.viewer)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNotNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId);
    const conds = [
        visible
    ];
    if (f === "funding") conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].status, 0));
    if (f === "active") conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].status, 1));
    if (f === "closed") conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].status, [
        2,
        3,
        4
    ]));
    if (f === "mine" && opts.viewer) conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].creatorAddress, opts.viewer));
    return db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])(...conds)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].createdAt)).limit(100);
}
async function getProject(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [project] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].id, id)).limit(1);
    if (!project) return null;
    const milestones = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"].projectId, id)).orderBy(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"].index);
    const contributions = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].projectId, id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].amount));
    const rounds = project.chainId ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].projectChainId, project.chainId)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id)) : [];
    const outcomes = project.chainId ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalOutcomes"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalOutcomes"].projectChainId, project.chainId)) : [];
    const appeals = project.chainId ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"].projectChainId, project.chainId)) : [];
    return {
        project,
        milestones,
        contributions,
        rounds,
        outcomes,
        appeals
    };
}
async function getProjectByChainId(chainId) {
    const [p] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])().select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId, chainId)).limit(1);
    return p ?? null;
}
async function canViewEvidence(address, project, milestoneIndex) {
    if (address === project.creatorAddress) return true;
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [funder] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].projectId, project.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].funderAddress, address))).limit(1);
    if (funder && BigInt(funder.amount) > 0n) return true;
    if (!project.chainId) return false;
    const [assigned] = await db.select({
        r: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].roundId
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].roundId)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].verifierAddress, address), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].projectChainId, project.chainId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].milestoneIndex, milestoneIndex))).limit(1);
    return Boolean(assigned);
}
async function evidenceVersions(projectId, milestoneIndex) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [ev] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidence"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidence"].projectId, projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidence"].milestoneIndex, milestoneIndex))).limit(1);
    if (!ev) return [];
    return db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidenceVersions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidenceVersions"].evidenceId, ev.id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evidenceVersions"].version));
}
async function getRoundDetail(roundId) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [round] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id, roundId)).limit(1);
    if (!round) return null;
    const panel = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].roundId, roundId)).orderBy(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].position);
    const votes = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["voteCommitments"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["voteCommitments"].roundId, roundId));
    const project = await getProjectByChainId(round.projectChainId);
    const milestone = project ? (await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"].projectId, project.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"].index, round.milestoneIndex))).limit(1))[0] ?? null : null;
    const [appeal] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"].roundId, roundId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"].appealRoundId, roundId))).limit(1);
    return {
        round,
        panel,
        votes,
        project,
        milestone,
        appeal: appeal ?? null
    };
}
async function assignmentsFor(address) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const rows = await db.select({
        round: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"],
        assignment: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"]
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].roundId)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["panelAssignments"].verifierAddress, address)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id)).limit(100);
    const votes = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["voteCommitments"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["voteCommitments"].verifierAddress, address));
    const voteByRound = new Map(votes.map((v)=>[
            v.roundId,
            v
        ]));
    const chainIds = [
        ...new Set(rows.map((r)=>r.round.projectChainId))
    ];
    const projects = chainIds.length ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId, chainIds)) : [];
    const byChain = new Map(projects.map((p)=>[
            p.chainId,
            p
        ]));
    return rows.map((r)=>({
            ...r,
            vote: voteByRound.get(r.round.id) ?? null,
            project: byChain.get(r.round.projectChainId) ?? null
        }));
}
async function listAppeals() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const rows = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"]).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appeals"].createdAt)).limit(100);
    const roundIds = rows.flatMap((a)=>[
            a.roundId,
            a.appealRoundId
        ]);
    const rounds = roundIds.length ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id, roundIds)) : [];
    const byId = new Map(rounds.map((r)=>[
            r.id,
            r
        ]));
    const chainIds = [
        ...new Set(rows.map((a)=>a.projectChainId))
    ];
    const projects = chainIds.length ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId, chainIds)) : [];
    const pById = new Map(projects.map((p)=>[
            p.chainId,
            p
        ]));
    return rows.map((a)=>({
            appeal: a,
            original: byId.get(a.roundId) ?? null,
            appealRound: byId.get(a.appealRoundId) ?? null,
            project: pById.get(a.projectChainId) ?? null
        }));
}
async function appealableRounds(nowSecs) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const rows = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].kind, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].finalized, true), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].outcome, [
        1,
        2
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].appealRoundId} is null`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].appealableUntil} >= ${nowSecs}`)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verificationRounds"].id));
    const chainIds = [
        ...new Set(rows.map((r)=>r.projectChainId))
    ];
    const projects = chainIds.length ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].chainId, chainIds)) : [];
    const pById = new Map(projects.map((p)=>[
            p.chainId,
            p
        ]));
    return rows.map((r)=>({
            round: r,
            project: pById.get(r.projectChainId) ?? null
        }));
}
async function listActivity(opts = {}) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const limit = opts.limit ?? 100;
    const events = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"]).where(opts.address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["or"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].topics} @> ${JSON.stringify([
        opts.address
    ])}::jsonb`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].data}->>'appellant' = ${opts.address}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].data}->>'recipient' = ${opts.address}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].data}->'panel' @> ${JSON.stringify([
        opts.address
    ])}::jsonb`) : undefined).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].ledger), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contractEvents"].id)).limit(limit);
    const txs = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"]).where(opts.address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].sourceAddress, opts.address) : undefined).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].submittedAt)).limit(limit);
    const audits = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditEvents"]).where(opts.address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditEvents"].actorAddress, opts.address) : undefined).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditEvents"].createdAt)).limit(limit);
    return {
        events,
        txs,
        audits
    };
}
async function getVerifierProfile(address) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const [profile] = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifierProfiles"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifierProfiles"].address, address)).limit(1);
    const stakes = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stakeRecords"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stakeRecords"].address, address)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stakeRecords"].ledger)).limit(50);
    const assignments = await assignmentsFor(address);
    return {
        profile: profile ?? null,
        stakes,
        assignments
    };
}
async function dashboardFor(address) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDb"])();
    const created = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].creatorAddress, address)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].createdAt));
    const funded = await db.select({
        project: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"],
        contribution: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"]
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].id, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].projectId)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contributions"].funderAddress, address));
    const assignments = await assignmentsFor(address);
    const pendingTxs = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].sourceAddress, address), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].status, "pending")));
    const createdIds = created.map((p)=>p.id);
    const myMilestones = createdIds.length ? await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$4_$40$electric$2d$sql$2b$pglite$40$0$2e$5$2e$8_$40$types$2b$pg$40$8$2e$23$2e$1_pg$40$8$2e$23$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["milestones"].projectId, createdIds)) : [];
    return {
        created,
        funded,
        assignments,
        pendingTxs,
        myMilestones
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/web/src/server/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "createSessionToken",
    ()=>createSessionToken,
    "getSession",
    ()=>getSession,
    "sessionCookieOptions",
    ()=>sessionCookieOptions,
    "verifySessionToken",
    ()=>verifySessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.2.12/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@playwright+test@1.64.0_@types+node@22.20.5_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/env.ts [app-route] (ecmascript)");
;
;
;
;
const SESSION_COOKIE = "veridia_session";
const TTL_SECONDS = 8 * 3600;
const key = ()=>new TextEncoder().encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"])().SESSION_SECRET);
async function createSessionToken(address) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        sub: address
    }).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(`${TTL_SECONDS}s`).setIssuer("veridia").sign(key());
}
async function verifySessionToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$2$2e$12$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, key(), {
            issuer: "veridia",
            algorithms: [
                "HS256"
            ]
        });
        return typeof payload.sub === "string" ? {
            address: payload.sub
        } : null;
    } catch  {
        return null;
    }
}
async function getSession() {
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$playwright$2b$test$40$1$2e$64$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(SESSION_COOKIE)?.value;
    return token ? verifySessionToken(token) : null;
}
const sessionCookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: ("TURBOPACK compile-time value", "development") === "production",
    path: "/",
    maxAge: TTL_SECONDS
};
}),
"[project]/packages/domain/src/amounts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/packages/domain/src/enums.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/packages/domain/src/hashing.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/packages/domain/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$state$2d$machine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/state-machine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/schemas.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/packages/domain/src/schemas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$amounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/amounts.ts [app-route] (ecmascript)");
;
;
const STELLAR_ACCOUNT_RE = /^G[A-Z2-7]{55}$/;
const STELLAR_CONTRACT_RE = /^C[A-Z2-7]{55}$/;
const HEX32_RE = /^[0-9a-f]{64}$/;
const accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(STELLAR_ACCOUNT_RE, "Invalid Stellar account address");
const contractAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(STELLAR_CONTRACT_RE, "Invalid contract address");
const hex32 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().toLowerCase().regex(HEX32_RE, "Expected a 32-byte hex string");
const txHash = hex32;
const MAX_MILESTONES = 10;
const projectMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3).max(120),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(10).max(280),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(5000).default(""),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(60).default("general"),
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3).max(120),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(2000).default("")
    })).min(1).max(MAX_MILESTONES)
});
const dateString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1, "Required").refine((s)=>!Number.isNaN(Date.parse(s)), "Invalid date");
const toEpochSeconds = (s)=>Math.floor(Date.parse(s) / 1000);
const createProjectFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3, "At least 3 characters").max(120),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(10, "At least 10 characters").max(280),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(5000),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(60),
    token: contractAddress,
    fundingDeadline: dateString,
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3, "At least 3 characters").max(120),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(2000),
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().refine((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$amounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidAmount"])(s), "Enter a positive amount (max 7 decimals)"),
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
const projectDraftSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    metadata: projectMetadataSchema,
    token: contractAddress,
    fundingDeadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive(),
    milestones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d+$/),
        deadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive()
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
const recordTransactionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    hash: txHash,
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(TX_KINDS),
    contract: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "escrow",
        "registry",
        "verification",
        "token"
    ]),
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(64),
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive().optional(),
    roundId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive().optional()
});
const authVerifySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    address: accountAddress,
    nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(16).max(128),
    signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(256)
});
const verifierProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    displayName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(60),
    expertise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(280).default("")
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
"[project]/packages/domain/src/state-machine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-route] (ecmascript)");
;
const BPS = 10_000;
function tally(approvals, rejections, quorum, thresholdBps) {
    const n = approvals + rejections;
    if (n < quorum) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].NoQuorum;
    if (approvals * BPS >= thresholdBps * n) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Approved;
    if (rejections * BPS >= thresholdBps * n) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Rejected;
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Inconclusive;
}
const isDecisive = (o)=>o === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Approved || o === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Rejected;
function phaseOf(r, now) {
    if (r.finalized) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Phase"].Finalized;
    if (now <= r.commitDeadline) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Phase"].Commit;
    if (now <= r.revealDeadline && r.reveals < r.commits) return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Phase"].Reveal;
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Phase"].Finalizable;
}
function decisionOf(original, appeal, now) {
    const d = {
        isFinal: false,
        outcome: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Pending,
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
    if (p.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectStatus"].Active) return "project-not-active";
    if (index !== p.currentMilestone) return "not-current-milestone";
    if (m.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MilestoneStatus"].Pending) return "not-pending";
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
    if (args.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RoundKind"].Original || !args.finalized || args.hasAppeal) return false;
    if (args.now > args.appealableUntil) return false;
    if (args.outcome === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Rejected) return args.isCreator;
    if (args.outcome === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Outcome"].Approved) return args.isFunder;
    return false;
}
}),
"[project]/packages/stellar-client/src/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VeridiaClient",
    ()=>VeridiaClient,
    "keypairSigner",
    ()=>keypairSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/account.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/transaction_builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/contract.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Server$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-route] (ecmascript) <export * as rpc .Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-route] (ecmascript) <export * as rpc .Api>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$assembleTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-route] (ecmascript) <export * as rpc .assembleTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-route] (ecmascript)");
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
        this.server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Server$3e$__["rpc"].Server(network.rpcUrl, {
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
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionBuilder"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Account"](READ_SOURCE, "0"), {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Contract"](this.contractId(contract)).call(method, ...args)).setTimeout(30).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeContractError"])(sim.error, contract, this.names);
        const retval = sim.result?.retval;
        return retval ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(retval) : undefined;
    }
    /** Build → simulate → sign (wallet) → submit → wait for confirmation. */ async invoke(o) {
        const progress = o.onProgress ?? (()=>{});
        progress({
            stage: "simulating"
        });
        const account = await this.server.getAccount(o.source);
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionBuilder"](account, {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Contract"](this.contractId(o.contract)).call(o.method, ...o.args)).setTimeout(120).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeContractError"])(sim.error, o.contract, this.names);
            progress({
                stage: "failed",
                error: err.message
            });
            throw err;
        }
        const prepared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$assembleTransaction$3e$__["rpc"].assembleTransaction(tx, sim).build();
        progress({
            stage: "signing"
        });
        const signedXdr = await o.sign(prepared.toXDR(), {
            networkPassphrase: this.network.passphrase,
            address: o.source
        });
        const signed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(signedXdr, this.network.passphrase);
        const sent = await this.server.sendTransaction(signed);
        if (sent.status === "ERROR" || sent.status === "TRY_AGAIN_LATER") {
            const detail = sent.errorResult?.result.type ?? sent.status;
            const error = `Transaction rejected by the network: ${detail}`;
            progress({
                stage: "failed",
                hash: sent.hash,
                error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractCallError"](error, o.contract, null, detail);
        }
        progress({
            stage: "submitted",
            hash: sent.hash
        });
        const res = await this.waitForTransaction(sent.hash, o.timeoutMs ?? 60_000);
        if (res.status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.SUCCESS) {
            const diag = res.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.FAILED ? (res.diagnosticEventsXdr ?? []).map((e)=>e.toXDR("base64")).join("\n") : "";
            const error = res.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.NOT_FOUND ? "Transaction not confirmed in time; it will be reconciled automatically" : "Transaction failed on-chain";
            progress({
                stage: "failed",
                hash: sent.hash,
                error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractCallError"](error, o.contract, null, diag);
        }
        progress({
            stage: "confirmed",
            hash: sent.hash,
            ledger: res.ledger
        });
        return {
            hash: sent.hash,
            ledger: res.ledger,
            returnValue: res.returnValue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(res.returnValue) : undefined
        };
    }
    async waitForTransaction(hash, timeoutMs = 60_000) {
        const start = Date.now();
        let delay = 500;
        for(;;){
            const res = await this.server.getTransaction(hash);
            if (res.status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.GetTransactionStatus.NOT_FOUND) return res;
            if (Date.now() - start > timeoutMs) return res;
            await new Promise((r)=>setTimeout(r, delay));
            delay = Math.min(delay * 1.5, 3000);
        }
    }
    // ---------------------------------------------------------------- typed reads
    async getProject(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeProject"])(await this.read("escrow", "get_project", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]));
    }
    async getMilestones(id) {
        return (await this.read("escrow", "get_milestones", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]) ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeMilestone"]);
    }
    async projectCount() {
        return Number(await this.read("escrow", "project_count"));
    }
    async contributionOf(projectId, funder) {
        return BigInt(await this.read("escrow", "contribution_of", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(projectId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(funder)
        ]));
    }
    async hasRefunded(projectId, funder) {
        return Boolean(await this.read("escrow", "has_refunded", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(projectId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(funder)
        ]));
    }
    async isTokenAllowed(token) {
        return Boolean(await this.read("escrow", "is_token_allowed", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(token)
        ]));
    }
    async getRound(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeRound"])(await this.read("verification", "get_round", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(id)
        ]));
    }
    async getDecision(roundId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeDecision"])(await this.read("verification", "get_decision", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(roundId)
        ]));
    }
    async getPhase(roundId) {
        return Number(await this.read("verification", "get_phase", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(roundId)
        ]));
    }
    async getVote(roundId, voter) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeVote"])(await this.read("verification", "get_vote", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].u64(roundId),
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(voter)
        ]));
    }
    async roundCount() {
        return Number(await this.read("verification", "round_count"));
    }
    async getVerifier(addr) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeVerifier"])(await this.read("registry", "get_verifier", [
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(addr)
        ]));
    }
    async eligibleVerifiers() {
        return (await this.read("registry", "eligible") ?? []).map(String);
    }
    async tokenBalance(token, addr) {
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionBuilder"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Account"](READ_SOURCE, "0"), {
            fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_FEE"],
            networkPassphrase: this.network.passphrase
        }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Contract"](token).call("balance", __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sc"].address(addr))).setTimeout(30).build();
        const sim = await this.server.simulateTransaction(tx);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc__$2e$Api$3e$__["rpc"].Api.isSimulationError(sim)) return 0n;
        return sim.result?.retval ? BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(sim.result.retval)) : 0n;
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
        const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(txXdr, networkPassphrase);
        tx.sign(kp);
        return tx.toXDR();
    };
}
}),
"[project]/packages/stellar-client/src/commitment.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMITMENT_DOMAIN",
    ()=>COMMITMENT_DOMAIN,
    "computeCommitment",
    ()=>computeCommitment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/address.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/hashing.ts [app-route] (ecmascript)");
;
;
const COMMITMENT_DOMAIN = "VERIDIA-V1";
async function computeCommitment(roundId, voter, vote, salt) {
    if (salt.length !== 32) throw new Error("Salt must be 32 bytes");
    if (vote !== 1 && vote !== 2) throw new Error("Vote must be 1 (approve) or 2 (reject)");
    const domain = new TextEncoder().encode(COMMITMENT_DOMAIN);
    const round = new Uint8Array(8);
    new DataView(round.buffer).setBigUint64(0, BigInt(roundId), false);
    const voterXdr = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Address"].fromString(voter).toScVal().toXDR());
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(buf);
}
}),
"[project]/packages/stellar-client/src/errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractCallError",
    ()=>ContractCallError,
    "decodeContractError",
    ()=>decodeContractError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/enums.ts [app-route] (ecmascript)");
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
        const table = contract === "token" ? TOKEN_ERRORS : contract ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONTRACT_ERRORS"][contract] : undefined;
        return new ContractCallError(table?.[code] ?? `Contract error #${code}`, contract, code, raw);
    }
    if (/Error\(Auth, /.test(raw)) {
        return new ContractCallError("Authorization failed for this action", invoked, null, raw);
    }
    const firstLine = raw.split("\n")[0] ?? raw;
    return new ContractCallError(firstLine.slice(0, 300), invoked, null, raw);
}
}),
"[project]/packages/stellar-client/src/events.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeEvent",
    ()=>decodeEvent,
    "fetchEvents",
    ()=>fetchEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-route] (ecmascript)");
;
;
function decodeEvent(ev, names) {
    if (!ev.contractId || ev.topic.length === 0) return null;
    const contractId = ev.contractId.contractId();
    const [first, ...rest] = ev.topic.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(t));
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(ev.value);
    return {
        id: ev.id,
        ledger: ev.ledger,
        ledgerClosedAt: ev.ledgerClosedAt,
        txHash: ev.txHash,
        contractId,
        contract: names[contractId] ?? "unknown",
        name: String(first),
        topics: rest.map(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJsonSafe"]),
        data: value && typeof value === "object" && !Array.isArray(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJsonSafe"])(value) : {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJsonSafe"])(value)
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
"[project]/packages/stellar-client/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$networks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/networks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$scval$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/scval.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$commitment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/commitment.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$stellar$2d$client$2f$src$2f$events$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/stellar-client/src/events.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/packages/stellar-client/src/networks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NETWORKS",
    ()=>NETWORKS,
    "networkConfig",
    ()=>networkConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/network.js [app-route] (ecmascript)");
;
const NETWORKS = {
    local: {
        name: "local",
        passphrase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Networks"].STANDALONE,
        rpcUrl: "http://localhost:8000/rpc",
        friendbotUrl: "http://localhost:8000/friendbot"
    },
    testnet: {
        name: "testnet",
        passphrase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Networks"].TESTNET,
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
"[project]/packages/stellar-client/src/scval.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/address.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-route] (ecmascript) <export * as xdr .ScVal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScMapEntry$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@stellar+stellar-sdk@17.2.1/node_modules/@stellar/stellar-sdk/lib/esm/xdr/index.js [app-route] (ecmascript) <export * as xdr .ScMapEntry>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/hashing.ts [app-route] (ecmascript)");
;
;
const sc = {
    u32: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeToScVal"])(v, {
            type: "u32"
        }),
    u64: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeToScVal"])(BigInt(v), {
            type: "u64"
        }),
    i128: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nativeToScVal"])(BigInt(v), {
            type: "i128"
        }),
    bool: (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvBool(v),
    address: (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Address"].fromString(v).toScVal(),
    bytes32: (hex)=>{
        const b = typeof hex === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromHex"])(hex) : hex;
        if (b.length !== 32) throw new Error("Expected 32 bytes");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvBytes(Buffer.from(b));
    },
    /** A `#[contracttype]` struct: ScMap with symbol keys sorted lexicographically. */ struct: (fields)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvMap(Object.keys(fields).sort().map((k)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScMapEntry$3e$__["xdr"].ScMapEntry({
                key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvSymbol(k),
                val: fields[k]
            }))),
    vec: (items)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$xdr$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__xdr__$2e$ScVal$3e$__["xdr"].ScVal.scvVec(items)
};
const milestoneInputs = (ms)=>sc.vec(ms.map((m)=>sc.struct({
            amount: sc.i128(m.amount),
            deadline: sc.u64(m.deadline)
        })));
const num = (v)=>Number(v);
const big = (v)=>BigInt(v);
const hex = (v)=>v == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(new Uint8Array(v));
const opt = (v, f)=>v === null || v === undefined ? null : f(v);
function native(v) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stellar$2b$stellar$2d$sdk$40$17$2e$2$2e$1$2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scValToNative"])(v);
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
    if (v instanceof Uint8Array) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$hashing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(v);
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09co77wq-o13x._.js.map