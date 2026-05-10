module.exports = [
"[project]/src/app/members/members-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTEREST_DEFS",
    ()=>INTEREST_DEFS,
    "MEMBERS",
    ()=>MEMBERS,
    "getMembers",
    ()=>getMembers
]);
const INTEREST_DEFS = {
    ml: {
        en: "Machine Learning",
        th: "แมชชีนเลิร์นนิง",
        tone: "orange",
        glyph: "*"
    },
    nlp: {
        en: "Natural Language Processing",
        th: "การประมวลผลภาษา",
        tone: "slate",
        glyph: "\""
    },
    cv: {
        en: "Computer Vision",
        th: "คอมพิวเตอร์วิชัน",
        tone: "slate-l",
        glyph: "o"
    },
    ethics: {
        en: "AI Ethics",
        th: "จริยธรรม AI",
        tone: "orange-d",
        glyph: "A"
    },
    genai: {
        en: "Generative AI",
        th: "เจเนอเรทีฟ AI",
        tone: "slate",
        glyph: "+"
    },
    robotics: {
        en: "Robotics",
        th: "หุ่นยนต์",
        tone: "orange",
        glyph: "#"
    },
    data: {
        en: "Data Science",
        th: "วิทยาการข้อมูล",
        tone: "slate-l",
        glyph: "::"
    },
    edge: {
        en: "Edge AI",
        th: "AI บนอุปกรณ์",
        tone: "orange-d",
        glyph: "^"
    },
    rl: {
        en: "Reinforcement Learning",
        th: "การเรียนรู้แบบเสริมกำลัง",
        tone: "slate",
        glyph: "R"
    },
    mlops: {
        en: "MLOps",
        th: "MLOps",
        tone: "orange",
        glyph: "M"
    }
};
const ROLES = {
    fe: {
        en: "Frontend Developer",
        th: "นักพัฒนาส่วนหน้า"
    },
    be: {
        en: "Backend Developer",
        th: "นักพัฒนาส่วนหลัง"
    },
    fs: {
        en: "Full-stack Developer",
        th: "นักพัฒนาฟูลสแตก"
    },
    ml: {
        en: "ML Engineer",
        th: "วิศวกร ML"
    },
    ds: {
        en: "Data Scientist",
        th: "นักวิทยาการข้อมูล"
    },
    ux: {
        en: "UX Designer",
        th: "นักออกแบบ UX"
    },
    ops: {
        en: "DevOps Engineer",
        th: "วิศวกร DevOps"
    },
    mob: {
        en: "Mobile Developer",
        th: "นักพัฒนาแอปมือถือ"
    },
    res: {
        en: "AI Researcher",
        th: "นักวิจัย AI"
    },
    pm: {
        en: "Product Manager",
        th: "ผู้จัดการผลิตภัณฑ์"
    },
    qa: {
        en: "QA Engineer",
        th: "วิศวกรทดสอบ"
    },
    sec: {
        en: "Security Engineer",
        th: "วิศวกรความปลอดภัย"
    },
    cloud: {
        en: "Cloud Engineer",
        th: "วิศวกรคลาวด์"
    },
    lead: {
        en: "Tech Lead",
        th: "หัวหน้าทีมเทคนิค"
    }
};
function member(id, nameTh, nameEn, nickTh, nickEn, role, mottoTh, mottoEn, bioTh, bioEn, interests, initials) {
    const handle = nickEn.toLowerCase().replace(/\s+/g, "");
    return {
        id,
        name: {
            th: nameTh,
            en: nameEn
        },
        nickname: {
            th: nickTh,
            en: nickEn
        },
        role: ROLES[role],
        motto: {
            th: mottoTh,
            en: mottoEn
        },
        bio: {
            th: bioTh,
            en: bioEn
        },
        email: `${handle}@exp.dev`,
        github: `github.com/${handle}`,
        linkedin: `linkedin.com/in/${handle}`,
        interests,
        initials
    };
}
async function getMembers() {
    return MEMBERS;
}
const MEMBERS = [
    member("EXP-001", "ปกรณ์ วงศ์ศิริ", "Pakorn Wongsiri", "ตาร์", "Tar", "lead", "เขียนโค้ดทุกบรรทัดให้คนอื่นอ่านง่ายกว่าตัวเอง", "Write every line so it reads easier for someone else than for you.", "หัวหน้าทีมเทคนิค EXP รุ่นก่อตั้ง สนใจสถาปัตยกรรมระบบและการสอนรุ่นน้อง", "Founding tech lead at EXP. Cares about clean architecture and mentoring juniors.", [
        "ml",
        "mlops",
        "ethics"
    ], "ปว"),
    member("EXP-002", "นิรมล สุขสันต์", "Niramon Sooksan", "มล", "Mol", "ds", "ข้อมูลไม่ได้โกหก คนอ่านต่างหากที่ต้องระวัง", "Data doesn't lie. The people reading it should be careful, though.", "ทำงานวิเคราะห์ข้อมูลและ visualization สำหรับโครงการชุมชน", "Analyst and visualization lead for community-impact projects.", [
        "data",
        "ml",
        "ethics"
    ], "นส"),
    member("EXP-003", "ธนภัทร แก้วใจ", "Tanapat Kaewjai", "บอส", "Boss", "be", "Latency คือศัตรูตัวจริงของผู้ใช้", "Latency is the real enemy of every user.", "ดูแลบริการหลังบ้าน Go + Postgres ชอบเรื่อง observability", "Backend in Go + Postgres. Big into observability.", [
        "data",
        "mlops"
    ], "ธก"),
    member("EXP-004", "ชนิสรา พิมพ์ทอง", "Chanitsara Pimthong", "เอิร์น", "Earn", "ux", "การออกแบบที่ดีคือสิ่งที่คนใช้ไม่รู้สึกว่ามันมีอยู่", "Good design is what users never notice.", "นักออกแบบประสบการณ์ผู้ใช้ เน้น accessibility และการเล่าเรื่อง", "UX designer focused on accessibility and storytelling.", [
        "genai",
        "ethics"
    ], "ชพ"),
    member("EXP-005", "กิตติภพ ใจดี", "Kittipop Jaidee", "ต้น", "Ton", "fe", "Pixel ทุกตัวมีหน้าที่ของมัน", "Every pixel has a job to do.", "นักพัฒนาส่วนหน้า React/Next.js ชอบ animation และ design system", "Frontend on React/Next.js. Loves motion and design systems.", [
        "genai",
        "cv"
    ], "กจ"),
    member("EXP-006", "อลิษา รัตนพล", "Alisa Ratanaphol", "ลิซ่า", "Lisa", "res", "งานวิจัยที่ดีต้องตอบคำถามใหม่ ไม่ใช่ตอบคำถามเดิมให้สวยขึ้น", "Good research opens new questions, not just polishes old answers.", "นักวิจัย AI สนใจ multimodal models และ low-resource languages", "AI researcher into multimodal models and low-resource languages.", [
        "nlp",
        "genai",
        "rl"
    ], "อร"),
    member("EXP-007", "สรวิชญ์ มณีวัฒน์", "Sorawit Maneewat", "วิน", "Win", "ml", "โมเดลที่ deploy ไม่ได้คือกระดาษเปล่า", "A model you cannot deploy is just a piece of paper.", "ML Engineer ดูแล pipeline จาก notebook ถึง production", "ML engineer running the pipeline from notebook to production.", [
        "ml",
        "mlops",
        "edge"
    ], "สม"),
    member("EXP-008", "ภัทราวดี เจริญสุข", "Pattarawadee Charoensook", "เป้", "Pae", "pm", "อย่าแก้ปัญหาที่ไม่มีใครมี", "Do not solve problems no one actually has.", "Product Manager ดูแล roadmap และความสัมพันธ์กับลูกค้า", "Product manager, owns the roadmap and customer conversations.", [
        "data",
        "ethics"
    ], "ภจ"),
    member("EXP-009", "ณัฐวุฒิ พุ่มไพศาล", "Nattawut Phumpaisarn", "ณัฐ", "Nat", "ops", "Infrastructure ที่ดีคือสิ่งที่คนลืมว่ามันอยู่ตรงนั้น", "Good infra is the kind people forget exists.", "DevOps ดูแล Kubernetes และระบบ CI/CD ทั่วองค์กร", "DevOps, running the Kubernetes fleet and org-wide CI/CD.", [
        "mlops",
        "edge"
    ], "ณพ"),
    member("EXP-010", "พิชญ์สินี อุดมสุข", "Pichsinee Udomsook", "พิม", "Pim", "fe", "อะไรที่กดได้ ต้องดูเหมือนกดได้", "Anything that can be tapped should look tappable.", "Frontend สาย design-engineer สนใจ generative UI", "Frontend and design-engineer exploring generative UI.", [
        "genai",
        "cv"
    ], "พอ"),
    member("EXP-011", "รวิชญ์ จิรพัฒน์", "Rawit Jirapat", "วิช", "Vit", "mob", "อย่าให้ผู้ใช้เลื่อนถ้าไม่จำเป็น", "Do not make the user scroll if they do not have to.", "Mobile developer สาย Flutter ดูแลแอปสำหรับ field ops", "Mobile developer in Flutter, building field-ops apps.", [
        "edge",
        "cv"
    ], "รจ"),
    member("EXP-012", "กัญญาวีร์ ศรีสมุทร", "Kanyaweer Srisamut", "มายด์", "Mind", "ds", "ตัวเลขสวยกว่าที่ตา หาเรื่องน่าจะมีอะไรผิด", "Numbers prettier than they should be? Probably wrong.", "Data scientist สนใจ causal inference และการประเมินนโยบาย", "Data scientist into causal inference and policy evaluation.", [
        "data",
        "ml"
    ], "กศ"),
    member("EXP-013", "ธีรเทพ บุญชัย", "Teeratep Boonchai", "ท็อป", "Top", "sec", "ระบบที่ปลอดภัยคือระบบที่ใช้แล้วยังไม่อยากเลิก", "A secure system is one people still want to use after using it.", "Security engineer ดูแล threat modeling และ incident response", "Security engineer, threat modeling and incident response.", [
        "ethics",
        "mlops"
    ], "ธบ"),
    member("EXP-014", "ณิชาภัทร โพธิ์ทอง", "Nichaphat Pothong", "แนน", "Nan", "fs", "Stack ดีที่สุดคือ stack ที่ทีมรู้จักดี", "The best stack is the one your team knows best.", "Full-stack สาย TypeScript ทุก layer ทำงานข้าม timezone", "Full-stack TypeScript across the layers, working across timezones.", [
        "genai",
        "mlops"
    ], "ณพ"),
    member("EXP-015", "ภานุวัฒน์ คงคา", "Phanuwat Khongkha", "พงศ์", "Phong", "cloud", "ค่า cloud bill คือ feedback loop ที่ตรงไปตรงมาที่สุด", "The cloud bill is the most honest feedback loop you will ever get.", "Cloud engineer ดูแล multi-region deployment บน AWS+GCP", "Cloud engineer running multi-region deployments on AWS and GCP.", [
        "mlops",
        "data"
    ], "ภค"),
    member("EXP-016", "ปุณยวีร์ สุวรรณ", "Punyaweer Suwan", "ปัน", "Punn", "qa", "Bug ที่หายากคือ bug ที่ลูกค้าจะหาเจอก่อนเรา", "The bug you cannot find is the one your user will.", "QA engineer เน้น automation และ chaos testing", "QA, automation and chaos testing.", [
        "mlops"
    ], "ปส"),
    member("EXP-017", "กฤตภาส อินทรา", "Krittaphat Intra", "กิต", "Kit", "ml", "Train เสียเวลา 80% Tune เสียเวลา 20% และเสียใจ 100%", "Training: 80% of time. Tuning: 20%. Regret: 100%.", "ML engineer สนใจ recommender systems", "ML engineer focused on recommender systems.", [
        "ml",
        "rl",
        "data"
    ], "กอ"),
    member("EXP-018", "มนัสนันท์ ทองสุก", "Manatsanan Thongsuk", "นันท์", "Nun", "res", "ความรู้ที่ไม่ถูกตั้งคำถาม ก็แค่ความเชื่อ", "Knowledge that is not questioned is just belief.", "นักวิจัย NLP สนใจภาษาไทยและภาษาในภูมิภาค", "NLP researcher, Thai and other regional languages.", [
        "nlp",
        "ethics"
    ], "มท"),
    member("EXP-019", "วรากร วิเชียร", "Worakorn Wichian", "เวฟ", "Wave", "fe", "Animation 200ms คือเวลาที่คนตัดสินว่าใช้งานได้หรือไม่", "200ms is when users decide whether your UI works.", "Frontend สาย motion ทำ data-viz เชิง interactive", "Frontend and motion. Builds interactive data-viz.", [
        "genai",
        "data"
    ], "วว"),
    member("EXP-020", "ศุภณัฐ พงศ์ภัค", "Suphanat Pongphak", "เกม", "Game", "be", "ฐานข้อมูลที่ดีคือฐานข้อมูลที่อธิบาย business ได้", "A good database describes the business.", "Backend engineer ดูแล search infra และ event sourcing", "Backend, search infra and event sourcing.", [
        "data",
        "mlops"
    ], "ศพ"),
    member("EXP-021", "พรนภัส เรืองรอง", "Pornnaphat Ruangrong", "แพรว", "Praew", "ux", "ฟอนต์ผิดทำลายเหตุผลที่ดีได้ทุกข้อ", "The wrong typeface can wreck every good argument.", "UX/UI designer สาย typography และ cross-cultural design", "UX/UI, typography and cross-cultural design.", [
        "genai",
        "ethics"
    ], "พร"),
    member("EXP-022", "ภคพร อินทร์ทอง", "Phakaphon Inthong", "แบม", "Bam", "mob", "Battery คือ UX ที่มองไม่เห็น", "Battery is the UX you do not see.", "Mobile dev สาย Swift/Kotlin ทำงาน on-device ML", "Mobile dev with Swift/Kotlin shipping on-device ML.", [
        "edge",
        "cv",
        "ml"
    ], "ภอ"),
    member("EXP-023", "ธัญชนก ขุนทอง", "Tanyachanok Khunthong", "ออม", "Aom", "pm", "Roadmap ที่ใครๆ ก็แก้ได้คือ roadmap ที่ใช้งานจริง", "A roadmap anyone can edit is the roadmap that actually works.", "Product manager สนใจ growth และ international expansion", "Product manager, growth and international expansion.", [
        "data",
        "ethics"
    ], "ธข"),
    member("EXP-024", "กันต์ฤทัย จันทร์เพ็ญ", "Kanruethai Janpen", "ฝ้าย", "Fai", "ds", "Visualization ที่ดีต้องเปลี่ยนใจคน ไม่ใช่ยืนยันใจคน", "Good visualization changes minds. It does not just confirm them.", "Data scientist เน้น communication และ storytelling", "Data scientist, communication and storytelling first.", [
        "data",
        "genai"
    ], "กจ"),
    member("EXP-025", "ณัฐภัทร สิงห์โต", "Nattaphat Singto", "โอม", "Ohm", "ops", "ถ้า deploy แล้วต้องอยู่ดึก ก็ deploy ผิดเวลา", "If deploy means staying up late, you are deploying at the wrong time.", "DevOps ดูแล observability stack และ on-call rotation", "DevOps, observability stack and on-call rotation.", [
        "mlops"
    ], "ณส"),
    member("EXP-026", "ธิดารัตน์ ภู่ทอง", "Tidarat Phuthong", "จูน", "June", "fs", "Code review คือของขวัญที่ใช้เวลาห่อ", "A code review is a gift. It just takes time to wrap.", "Full-stack developer และ tech writer ภายในทีม", "Full-stack developer doubling as the team's tech writer.", [
        "genai",
        "nlp"
    ], "ธภ"),
    member("EXP-027", "อภิสิทธิ์ ศรีสุข", "Apisit Srisuk", "เบสท์", "Best", "res", "งานที่สำคัญที่สุดของวิจัยคือถามให้ถูก", "The most important job of research is asking the right question.", "AI researcher สนใจ alignment และ interpretability", "AI researcher into alignment and interpretability.", [
        "ethics",
        "ml",
        "rl"
    ], "อศ"),
    member("EXP-028", "นพรุจ ปานเทศ", "Noppharot Pannate", "นิค", "Nick", "sec", "Trust ไม่มี default value", "Trust has no default value.", "Security engineer ทำ red team และ secure-by-design review", "Security engineer running red team and secure-by-design reviews.", [
        "ethics"
    ], "นป"),
    member("EXP-029", "กชกร เกตุแก้ว", "Kotchakorn Ketkaew", "แคท", "Kat", "fe", "UI ที่เข้าใจตัวเองคือ UI ที่ผู้ใช้เข้าใจ", "A UI that understands itself is one users understand.", "Frontend developer ดูแล design system ขององค์กร", "Frontend developer maintaining the org-wide design system.", [
        "genai",
        "cv"
    ], "กก"),
    member("EXP-030", "ชยุตม์ ทรงเดช", "Chayut Songdet", "ยู", "Yu", "ml", "ทุกโมเดลผิด มีบางตัวที่มีประโยชน์", "All models are wrong. Some are useful.", "ML engineer ดูแล forecasting และ time-series", "ML engineer on forecasting and time-series.", [
        "ml",
        "data",
        "rl"
    ], "ชท")
];
}),
"[project]/src/app/members/MembersClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$members$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/members/members-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const SORT_OPTIONS = [
    {
        id: "id-asc",
        label: "Member ID up"
    },
    {
        id: "id-desc",
        label: "Member ID down"
    },
    {
        id: "name-asc",
        label: "Name A-Z"
    },
    {
        id: "role",
        label: "Role"
    }
];
const INTEREST_IDS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$members$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTEREST_DEFS"]);
const SELF_ID = "EXP-005";
function CropCorner({ pos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `exp-crop exp-crop--${pos}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-crop__h"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-crop__v"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function InterestTag({ id, size = "sm" }) {
    const def = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$members$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTEREST_DEFS"][id];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `exp-tag exp-tag--${def.tone} exp-tag--${size}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-tag__glyph",
                children: def.glyph
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-tag__th",
                children: def.th
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-tag__en",
                children: def.en
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function SilhouetteAvatar({ initials, size = 96, photoUrl }) {
    if (photoUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exp-avatar exp-avatar--photo",
            role: "img",
            "aria-label": "Member photo",
            style: {
                width: size,
                height: size,
                backgroundImage: `url(${photoUrl})`
            }
        }, void 0, false, {
            fileName: "[project]/src/app/members/MembersClient.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exp-avatar",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 100",
                width: "100%",
                height: "100%",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: "49",
                        fill: "#e8e2cf",
                        stroke: "#16314a",
                        strokeWidth: "0.6",
                        strokeDasharray: "2 2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "38",
                        r: "14",
                        fill: "#cfc8b3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 88 C20 66, 80 66, 80 88 Z",
                        fill: "#cfc8b3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-avatar__label",
                children: initials || "รูปถ่าย"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-avatar__tick exp-avatar__tick--tl",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-avatar__tick exp-avatar__tick--tr",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-avatar__tick exp-avatar__tick--bl",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-avatar__tick exp-avatar__tick--br",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function MemberCard({ member, onClick, isSelf }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `exp-mcard ${isSelf ? "exp-mcard--self" : ""}`,
        onClick: ()=>onClick(member),
        "aria-label": `${member.name.en} - open profile`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "tl"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "tr"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "bl"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "br"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__id",
                        children: member.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    isSelf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__self-tag",
                        children: "YOU"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 98,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__photo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SilhouetteAvatar, {
                    initials: "รูปถ่าย",
                    size: 84,
                    photoUrl: member.photoUrl
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__rule"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__label",
                        children: "รหัส · ID"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val exp-mcard__val--mono",
                        children: member.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__label",
                        children: "ชื่อ-สกุล · Name"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val",
                        children: member.name.th
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val exp-mcard__val--en",
                        children: member.name.en
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__label",
                        children: "ชื่อเล่น · Nick"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val",
                        children: [
                            member.nickname.th,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "exp-mcard__paren",
                                children: [
                                    "(",
                                    member.nickname.en,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 116,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__label",
                        children: "ตำแหน่ง · Role"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val exp-mcard__val--small",
                        children: member.role.th
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__val exp-mcard__val--en",
                        children: member.role.en
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__motto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__qmark",
                        children: '"'
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mcard__motto-text",
                        children: member.motto.th
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__field exp-mcard__field--last",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "exp-mcard__label",
                    children: "ความสนใจด้าน AI · AI Interests"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mcard__tags",
                children: [
                    member.interests.slice(0, 4).map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterestTag, {
                            id: interest,
                            size: "xs"
                        }, interest, false, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)),
                    member.interests.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-tag exp-tag--more exp-tag--xs",
                        children: [
                            "+",
                            member.interests.length - 4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function MemberRow({ member, onClick, isSelf }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `exp-mrow ${isSelf ? "exp-mrow--self" : ""}`,
        onClick: ()=>onClick(member),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__avatar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SilhouetteAvatar, {
                    size: 48,
                    photoUrl: member.photoUrl
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__id",
                children: member.id
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__name",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-mrow__name-th",
                        children: [
                            member.name.th,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "exp-mrow__nick",
                                children: [
                                    "(",
                                    member.nickname.en,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 160,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-mrow__name-en",
                        children: member.name.en
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__role",
                children: member.role.en
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__tags",
                children: [
                    member.interests.slice(0, 3).map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterestTag, {
                            id: interest,
                            size: "xs"
                        }, interest, false, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)),
                    member.interests.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-tag exp-tag--more exp-tag--xs",
                        children: [
                            "+",
                            member.interests.length - 3
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mrow__motto",
                children: [
                    '"',
                    member.motto.en,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            isSelf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "exp-mrow__self-tag",
                children: "YOU"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 174,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
function MemberModal({ member, onClose }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (event)=>{
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exp-modal-backdrop",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exp-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "member-modal-title",
            onClick: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                    pos: "tl"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                    pos: "tr"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                    pos: "bl"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                    pos: "br"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "exp-modal__close",
                    onClick: onClose,
                    "aria-label": "ปิด",
                    children: "x"
                }, void 0, false, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exp-modal__head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exp-modal__id-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__id-label",
                                    children: "EXP MEMBER FILE"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__id-num",
                                    children: member.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__id-meta",
                                    children: "SHEET 01 / 01 · 1 : 1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exp-modal__title-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "member-modal-title",
                                    className: "exp-modal__name-th",
                                    children: member.name.th
                                }, void 0, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__name-en",
                                    children: [
                                        member.name.en,
                                        ' · "',
                                        member.nickname.en,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__role",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: member.role.th
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "exp-modal__sep",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: member.role.en
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exp-modal__body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exp-modal__col exp-modal__col--left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-modal__photo-frame",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SilhouetteAvatar, {
                                            size: 200,
                                            initials: "รูปถ่าย",
                                            photoUrl: member.photoUrl
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exp-modal__photo-cap",
                                            children: [
                                                "PORTRAIT - ",
                                                member.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "exp-modal__facts",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "รหัสพนักงาน"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "exp-mono",
                                            children: member.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 227,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "ชื่อเล่น · Nickname"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: [
                                                member.nickname.th,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "exp-muted",
                                                    children: [
                                                        "(",
                                                        member.nickname.en,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 68
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 228,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "อีเมล · Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "exp-mono",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${member.email}`,
                                                children: member.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                                lineNumber: 229,
                                                columnNumber: 62
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 229,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "GitHub"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "exp-mono",
                                            children: member.github
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 230,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "exp-mono",
                                            children: member.linkedin
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 231,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "exp-modal__col exp-modal__col--right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "exp-modal__sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exp-modal__sec-label",
                                            children: "คติประจำใจ · MOTTO"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                            className: "exp-modal__motto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "exp-modal__bigq",
                                                    children: '"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "exp-modal__motto-th",
                                                    children: member.motto.th
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "exp-modal__motto-en",
                                                    children: member.motto.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "exp-modal__sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exp-modal__sec-label",
                                            children: "เกี่ยวกับ · ABOUT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "exp-modal__bio",
                                            children: member.bio.th
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "exp-modal__bio exp-modal__bio--en",
                                            children: member.bio.en
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "exp-modal__sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exp-modal__sec-label",
                                            children: "ความสนใจด้าน AI · AI INTERESTS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "exp-modal__tags",
                                            children: member.interests.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterestTag, {
                                                    id: interest,
                                                    size: "md"
                                                }, interest, false, {
                                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/MembersClient.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exp-modal__foot",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "EXP YEARBOOK 2026 · MEMBER FILE ",
                                member.id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "SCALE 1:1 · A4 · BLUEPRINT REV. C"
                        }, void 0, false, {
                            fileName: "[project]/src/app/members/MembersClient.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/members/MembersClient.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/members/MembersClient.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
function Controls({ q, setQ, filter, setFilter, sort, setSort, view, setView, total, shown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exp-controls",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "tl"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "tr"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "bl"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CropCorner, {
                pos: "br"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-controls__row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "exp-search__icon",
                                "aria-hidden": "true",
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "exp-search__input",
                                placeholder: "ค้นหาด้วยชื่อ · รหัส · ชื่อเล่น · Search by name, ID, nickname",
                                value: q,
                                onChange: (event)=>setQ(event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "exp-search__clear",
                                onClick: ()=>setQ(""),
                                "aria-label": "Clear search",
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 309,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-ctl-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "exp-ctl-label exp-mono",
                                children: "SORT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "exp-ctl-select",
                                value: sort,
                                onChange: (event)=>setSort(event.target.value),
                                children: SORT_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: option.id,
                                        children: option.label
                                    }, option.id, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-ctl-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "exp-ctl-label exp-mono",
                                children: "VIEW"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-seg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `exp-seg__b ${view === "grid" ? "exp-seg__b--on" : ""}`,
                                        onClick: ()=>setView("grid"),
                                        children: "Grid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `exp-seg__b ${view === "list" ? "exp-seg__b--on" : ""}`,
                                        onClick: ()=>setView("list"),
                                        children: "List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-controls__row exp-controls__row--filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-ctl-label exp-mono",
                        children: "FILTER · ความสนใจด้าน AI"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-filter-tags",
                        children: [
                            INTEREST_IDS.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `exp-ftag ${filter.includes(interest) ? "exp-ftag--on" : ""}`,
                                    onClick: ()=>setFilter((prev)=>prev.includes(interest) ? prev.filter((item)=>item !== interest) : [
                                                ...prev,
                                                interest
                                            ]),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterestTag, {
                                        id: interest,
                                        size: "xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                }, interest, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)),
                            filter.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "exp-ftag-clear exp-mono",
                                onClick: ()=>setFilter([]),
                                children: [
                                    "CLEAR (",
                                    filter.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-controls__count exp-mono",
                        children: [
                            shown.toString().padStart(2, "0"),
                            " / ",
                            total.toString().padStart(2, "0")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
function MembersClient({ members }) {
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("id-asc");
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = members;
        const needle = q.trim().toLowerCase();
        if (needle) {
            list = list.filter((member)=>member.id.toLowerCase().includes(needle) || member.name.th.toLowerCase().includes(needle) || member.name.en.toLowerCase().includes(needle) || member.nickname.th.toLowerCase().includes(needle) || member.nickname.en.toLowerCase().includes(needle) || member.role.en.toLowerCase().includes(needle));
        }
        if (filter.length > 0) {
            list = list.filter((member)=>filter.every((interest)=>member.interests.includes(interest)));
        }
        return [
            ...list
        ].sort((a, b)=>{
            if (sort === "id-asc") return a.id.localeCompare(b.id);
            if (sort === "id-desc") return b.id.localeCompare(a.id);
            if (sort === "name-asc") return a.name.en.localeCompare(b.name.en);
            if (sort === "role") return a.role.en.localeCompare(b.role.en);
            return 0;
        });
    }, [
        members,
        q,
        filter,
        sort
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "exp-members-root",
        "data-aesthetic": "blueprint",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-grid-overlay",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-members-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "exp-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-hero__bar exp-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SECTION 04 / 07"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "EXP / MEMBERS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SHEET M-001...M-030"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-hero__title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "exp-hero__th",
                                        children: "สมุดพกนักพัฒนา: บันทึกตัวตนสมาชิกทุกคน"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "exp-hero__en",
                                        children: "The Modern Blueprint Yearbook - Every Member, Drawn to Scale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-hero__caption",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "แต่ละคนคือหนึ่งหน้าในสมุดพก รวมทั้งหมด ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: members.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                                lineNumber: 405,
                                                columnNumber: 54
                                            }, this),
                                            " คน ค้นหาด้วยรหัส ชื่อ หรือความสนใจ แล้วกดที่การ์ดเพื่อเปิดดูรายละเอียด"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "exp-hero__caption-en",
                                        children: "Data is local placeholder content for now. Google Sheets or database sync can plug into the prepared member adapter later."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-hero__readout exp-mono",
                                children: [
                                    "SHOWING ",
                                    filtered.length.toString().padStart(2, "0"),
                                    " / ",
                                    members.length.toString().padStart(2, "0"),
                                    " ENTRIES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Controls, {
                        q: q,
                        setQ: setQ,
                        filter: filter,
                        setFilter: setFilter,
                        sort: sort,
                        setSort: setSort,
                        view: view,
                        setView: setView,
                        total: members.length,
                        shown: filtered.length
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-empty exp-mono",
                        children: "NO ENTRIES MATCH - ลองล้างตัวกรองหรือคำค้นหา"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this) : view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-cards",
                        children: filtered.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberCard, {
                                member: member,
                                onClick: setActive,
                                isSelf: member.id === SELF_ID
                            }, member.id, false, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-rows",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-rows__head exp-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 441,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "ROLE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 441,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "INTERESTS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 441,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "MOTTO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/MembersClient.tsx",
                                        lineNumber: 441,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/MembersClient.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            filtered.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberRow, {
                                    member: member,
                                    onClick: setActive,
                                    isSelf: member.id === SELF_ID
                                }, member.id, false, {
                                    fileName: "[project]/src/app/members/MembersClient.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/MembersClient.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MemberModal, {
                member: active,
                onClose: ()=>setActive(null)
            }, void 0, false, {
                fileName: "[project]/src/app/members/MembersClient.tsx",
                lineNumber: 450,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/MembersClient.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_members_0_29kl.._.js.map