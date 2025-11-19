(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LoadingScreen(param) {
    let { onLoadingComplete } = param;
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showClickPrompt, setShowClickPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMessage, setCurrentMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const loadingMessages = [
        "Loading the Wild West...",
        "Preparing your horse...",
        "Checking your weapons...",
        "Finding the nearest saloon...",
        "Ready to ride, partner!"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const timer = setInterval({
                "LoadingScreen.useEffect.timer": ()=>{
                    setProgress({
                        "LoadingScreen.useEffect.timer": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(timer);
                                setShowClickPrompt(true);
                                return 100;
                            }
                            const increment = Math.random() * 3 + 1.5;
                            const newProgress = prev + increment;
                            // Change message based on progress
                            const messageIndex = Math.min(Math.floor(newProgress / 20), loadingMessages.length - 1);
                            if (messageIndex !== currentMessage) {
                                setCurrentMessage(messageIndex);
                            }
                            return newProgress;
                        }
                    }["LoadingScreen.useEffect.timer"]);
                }
            }["LoadingScreen.useEffect.timer"], 120);
            return ({
                "LoadingScreen.useEffect": ()=>clearInterval(timer)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], [
        currentMessage,
        loadingMessages.length
    ]);
    const handleClick = ()=>{
        setIsComplete(true);
        setTimeout(()=>{
            onLoadingComplete();
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                y: -50
            },
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            className: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer",
            onClick: showClickPrompt ? handleClick : undefined,
            style: {
                backgroundColor: 'rgb(32, 32, 32)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute opacity-5",
                            animate: {
                                x: [
                                    -20,
                                    20,
                                    -20
                                ],
                                y: [
                                    -10,
                                    10,
                                    -10
                                ],
                                rotate: [
                                    -1,
                                    1,
                                    -1
                                ]
                            },
                            transition: {
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            style: {
                                left: "".concat(15 + i * 15, "%"),
                                top: "".concat(10 + i * 12, "%")
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/star.png",
                                alt: "",
                                width: 40,
                                height: 40,
                                className: "sepia contrast-150"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.2
                    },
                    className: "relative p-12 max-w-2xl mx-auto",
                    style: {
                        backgroundImage: 'url("/assets/background_paper.png")',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '500px',
                        minWidth: '600px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute top-6 left-6",
                            animate: {
                                rotate: [
                                    -2,
                                    2,
                                    -2
                                ]
                            },
                            transition: {
                                duration: 4,
                                repeat: Infinity
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/mp_roles_bounty_hunter.png",
                                alt: "",
                                width: 64,
                                height: 64,
                                className: "opacity-60 sepia contrast-125"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute top-6 right-6",
                            animate: {
                                rotate: [
                                    2,
                                    -2,
                                    2
                                ]
                            },
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                delay: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/mp_roles_trader.png",
                                alt: "",
                                width: 64,
                                height: 64,
                                className: "opacity-60 sepia contrast-125"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute bottom-6 left-6",
                            animate: {
                                rotate: [
                                    -1,
                                    1,
                                    -1
                                ]
                            },
                            transition: {
                                duration: 5,
                                repeat: Infinity,
                                delay: 2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/mp_roles_collector.png",
                                alt: "",
                                width: 64,
                                height: 64,
                                className: "opacity-60 sepia contrast-125"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute bottom-6 right-6",
                            animate: {
                                rotate: [
                                    1,
                                    -1,
                                    1
                                ]
                            },
                            transition: {
                                duration: 6,
                                repeat: Infinity,
                                delay: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/mp_roles_moonshiner.png",
                                alt: "",
                                width: 64,
                                height: 64,
                                className: "opacity-60 sepia contrast-125"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.5
                                    },
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.05,
                                                    1
                                                ],
                                                rotate: [
                                                    -0.5,
                                                    0.5,
                                                    -0.5
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity
                                            },
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/star.png",
                                                alt: "Star",
                                                width: 80,
                                                height: 80,
                                                className: "sepia contrast-150"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "text-6xl lg:text-7xl font-bold text-white font-serif mb-4",
                                            style: {
                                                textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                                                fontFamily: 'Cinzel, serif'
                                            },
                                            animate: {
                                                textShadow: [
                                                    '3px 3px 0px rgba(0,0,0,0.8)',
                                                    '4px 4px 0px rgba(0,0,0,0.6)',
                                                    '3px 3px 0px rgba(0,0,0,0.8)'
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            children: "WILD WEST"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/divider_line.png",
                                                alt: "Divider",
                                                width: 300,
                                                height: 8,
                                                className: "sepia contrast-150"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl lg:text-3xl text-white font-serif font-bold tracking-wider",
                                            style: {
                                                fontFamily: 'Cinzel, serif'
                                            },
                                            children: "FRONTIER SERVER"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 1
                                    },
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            className: "mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-xl font-bold font-serif",
                                                style: {
                                                    fontFamily: 'Cinzel, serif'
                                                },
                                                children: loadingMessages[currentMessage]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        }, currentMessage, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-white font-bold text-sm mb-2",
                                                    style: {
                                                        fontFamily: 'Cinzel, serif'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "PROGRESS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                Math.round(progress),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-3 bg-black/50 border-2 border-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "h-full",
                                                        style: {
                                                            width: "".concat(progress, "%"),
                                                            backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                                            backgroundSize: 'cover'
                                                        },
                                                        transition: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center space-x-6 mb-6",
                                            children: [
                                                '/assets/horseshoes.png',
                                                '/assets/star.png',
                                                '/assets/dollar.png'
                                            ].map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            -3,
                                                            3,
                                                            -3
                                                        ],
                                                        rotate: [
                                                            -5,
                                                            5,
                                                            -5
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: index * 0.2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: icon,
                                                        alt: "",
                                                        width: 32,
                                                        height: 32,
                                                        className: "sepia contrast-125 opacity-80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 23
                                                    }, this)
                                                }, icon, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: showClickPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                animate: {
                                                    scale: [
                                                        1,
                                                        1.05,
                                                        1
                                                    ],
                                                    boxShadow: [
                                                        '0 0 0 rgba(220, 38, 38, 0)',
                                                        '0 0 20px rgba(220, 38, 38, 0.3)',
                                                        '0 0 0 rgba(220, 38, 38, 0)'
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: Infinity
                                                },
                                                className: "text-white font-bold py-4 px-8 border-2 border-white hover:border-red-600 hover:bg-red-600/20 transition-all duration-300",
                                                style: {
                                                    backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                                    backgroundSize: 'cover',
                                                    fontFamily: 'Cinzel, serif'
                                                },
                                                children: "CLICK TO ENTER THE FRONTIER"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                lineNumber: 273,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center space-x-4",
                                                children: [
                                                    '/assets/badges.png',
                                                    '/assets/outfit.png',
                                                    '/assets/wagon.png'
                                                ].map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            y: [
                                                                0,
                                                                -5,
                                                                0
                                                            ],
                                                            rotate: [
                                                                0,
                                                                10,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            delay: index * 0.3
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: icon,
                                                            alt: "",
                                                            width: 28,
                                                            height: 28,
                                                            className: "sepia contrast-125 opacity-70"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, icon, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                                lineNumber: 294,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 2
                            },
                            className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-serif italic text-center",
                            style: {
                                fontFamily: 'Cinzel, serif'
                            },
                            children: '"Honor Among Thieves, Law in the Land"'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "NR+WrLt35nSHtoijkH8BGLDaVho=");
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverStatus, setServerStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        server_name: 'Wild West RP',
        current_players: 0,
        max_players: 32,
        is_online: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            // Check for stored user data
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }["Navigation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const fetchServerStatus = {
                "Navigation.useEffect.fetchServerStatus": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3001/api/server/status');
                        const data = await response.json();
                        setServerStatus(data);
                    } catch (error) {
                        console.error('Failed to fetch server status:', error);
                    // Keep default offline status
                    }
                }
            }["Navigation.useEffect.fetchServerStatus"];
            fetchServerStatus();
            const interval = setInterval(fetchServerStatus, 60000); // Update every minute
            return ({
                "Navigation.useEffect": ()=>clearInterval(interval)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setShowUserMenu(false);
        window.location.href = '/';
    };
    const menuItems = [
        {
            href: '/',
            label: 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            href: '/events',
            label: 'Events',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            href: '/rules',
            label: 'Rules',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            href: '/about',
            label: 'About Us',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            href: '/forums',
            label: 'Forums',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "relative z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex items-center p-6 bg-black border-b-4 border-white shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/star.png",
                                    alt: "Server Logo",
                                    width: 40,
                                    height: 40,
                                    className: "opacity-90 hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold text-white font-serif tracking-wide",
                                    style: {
                                        fontFamily: 'Cinzel, serif'
                                    },
                                    children: "WILD WEST RP"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-8 flex-1 justify-center",
                        children: menuItems.map((item)=>{
                            const IconComponent = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "group flex items-center space-x-2 text-white hover:text-gray-300 transition-colors relative font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        size: 18,
                                        className: "opacity-80 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium tracking-wide",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 flex-1 justify-end",
                        children: [
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        onClick: ()=>setShowUserMenu(!showUserMenu),
                                        className: "flex items-center space-x-2 text-white font-bold py-2 px-4 border-2 border-transparent hover:border-red-600 transition-all duration-300",
                                        style: {
                                            backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            fontFamily: 'Cinzel, serif'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: user.username.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            className: "absolute top-full right-0 mt-2 w-48 bg-black border-2 border-white shadow-xl z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 py-2 text-white text-sm border-b border-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold",
                                                                children: user.username
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-gray-300",
                                                                children: user.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/profile",
                                                        className: "block px-3 py-2 text-white hover:bg-gray-800 transition-colors",
                                                        children: "Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleLogout,
                                                        className: "w-full text-left px-3 py-2 text-white hover:bg-gray-800 transition-colors flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Logout"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            className: "flex items-center space-x-2 text-white font-bold py-2 px-4 border-2 border-transparent hover:border-red-600 transition-all duration-300",
                                            style: {
                                                backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                fontFamily: 'Cinzel, serif'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "SIGN IN"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/register",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            className: "text-white font-bold py-2 px-4 border-2 border-white hover:border-red-600 hover:bg-red-600/20 transition-all duration-300",
                                            style: {
                                                fontFamily: 'Cinzel, serif'
                                            },
                                            children: "JOIN"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 px-3 py-1 border-2 border-white ".concat(serverStatus.is_online ? 'bg-green-600' : 'bg-red-600'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-white rounded-full ".concat(serverStatus.is_online ? 'animate-pulse' : '')
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm font-bold",
                                                children: serverStatus.is_online ? 'ONLINE' : 'OFFLINE'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white text-sm font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "PLAYERS:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black",
                                                children: [
                                                    serverStatus.current_players,
                                                    "/",
                                                    serverStatus.max_players
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 209,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 bg-black border-b-2 border-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/star.png",
                                        alt: "Server Logo",
                                        width: 32,
                                        height: 32,
                                        className: "opacity-90"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold text-white font-serif",
                                        style: {
                                            fontFamily: 'Cinzel, serif'
                                        },
                                        children: "WILD WEST RP"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white text-sm font-bold",
                                        children: user.username.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            className: "text-white font-bold py-1 px-3 border border-white hover:border-red-600 transition-all duration-300 text-sm",
                                            style: {
                                                fontFamily: 'Cinzel, serif'
                                            },
                                            children: "SIGN IN"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(!isOpen),
                                        className: "p-2 text-white hover:text-gray-300 transition-colors",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 254,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 254,
                                            columnNumber: 43
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: 'auto'
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "absolute top-full left-0 right-0 bg-black border-b-2 border-white shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-4",
                                children: [
                                    menuItems.map((item, index)=>{
                                        const IconComponent = item.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: index * 0.1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: ()=>setIsOpen(false),
                                                className: "flex items-center space-x-3 text-white hover:text-gray-300 transition-colors p-3 hover:bg-gray-800/50 border border-transparent hover:border-white font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        size: 20,
                                                        className: "opacity-80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-lg",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 279,
                                                columnNumber: 23
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 273,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: menuItems.length * 0.1
                                        },
                                        className: "pt-4 border-t-2 border-white space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold",
                                                        children: user.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-300 text-sm",
                                                        children: user.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 299,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "w-full text-left text-white hover:bg-gray-800 transition-colors p-3 border border-white hover:border-red-600 flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 303,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 293,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: menuItems.length * 0.1
                                        },
                                        className: "pt-4 border-t-2 border-white space-y-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/register",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsOpen(false),
                                                className: "w-full text-white font-bold py-3 px-4 border-2 border-white hover:border-red-600 hover:bg-red-600/20 transition-all duration-300",
                                                style: {
                                                    fontFamily: 'Cinzel, serif'
                                                },
                                                children: "JOIN THE FRONTIER"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 318,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 312,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: (menuItems.length + 1) * 0.1
                                        },
                                        className: "pt-4 border-t-2 border-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 rounded-full ".concat(serverStatus.is_online ? 'bg-green-400 animate-pulse' : 'bg-red-400')
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: [
                                                                "SERVER ",
                                                                serverStatus.is_online ? 'ONLINE' : 'OFFLINE'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold",
                                                    children: [
                                                        serverStatus.current_players,
                                                        "/",
                                                        serverStatus.max_players
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(Navigation, "o/KRLFvGK2Sw9RFGn+Xj+7MyG9E=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServerStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ServerStatus() {
    _s();
    const [serverData, setServerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerStatus.useEffect": ()=>{
            const fetchServerStatus = {
                "ServerStatus.useEffect.fetchServerStatus": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3001/api/server/status');
                        const data = await response.json();
                        setServerData(data);
                    } catch (error) {
                        console.error('Failed to fetch server status:', error);
                        // Server offline fallback data
                        setServerData({
                            server_name: 'Wild West RP Server',
                            server_description: 'Experience the authentic Wild West in Red Dead Redemption 2 roleplay server',
                            connect_code: 'connect g3jo4z',
                            server_code: 'g3jo4z',
                            max_players: 32,
                            current_players: 0,
                            is_online: false
                        });
                    } finally{
                        setLoading(false);
                    }
                }
            }["ServerStatus.useEffect.fetchServerStatus"];
            fetchServerStatus();
            const interval = setInterval(fetchServerStatus, 30000); // Update every 30 seconds
            return ({
                "ServerStatus.useEffect": ()=>clearInterval(interval)
            })["ServerStatus.useEffect"];
        }
    }["ServerStatus.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-amber-950/40 to-amber-900/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 bg-amber-600/20 rounded mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-amber-600/20 rounded mb-2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-amber-600/20 rounded w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    if (!serverData) return null;
    const playerPercentage = serverData.current_players / serverData.max_players * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        className: "p-6",
        style: {
            backgroundImage: 'url("/assets/background_paper.png")',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '300px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/star.png",
                                alt: "Server",
                                width: 32,
                                height: 32,
                                className: "opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white font-serif",
                                        children: serverData.server_name.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full ".concat(serverData.is_online ? 'bg-green-400 animate-pulse' : 'bg-red-400')
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold ".concat(serverData.is_online ? 'text-white' : 'text-red-400'),
                                                children: serverData.is_online ? 'ONLINE' : 'OFFLINE'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-white",
                                children: [
                                    serverData.current_players,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: [
                                            "/",
                                            serverData.max_players
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 114,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-sm font-bold",
                                children: "PLAYERS"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white text-sm leading-relaxed mb-6 font-medium border-l-2 border-white pl-3 p-3",
                children: serverData.server_description
            }, void 0, false, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-white font-bold mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SERVER POPULATION"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    Math.round(playerPercentage),
                                    "% FULL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-black border-2 border-white h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full bg-white",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: "".concat(playerPercentage, "%")
                            },
                            transition: {
                                duration: 1,
                                delay: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold",
                                        children: "CONNECT CODE"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-sm font-bold",
                                        children: serverData.server_code || 'g3jo4z'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold",
                                        children: "LAST UPDATED"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold",
                                        children: serverData.last_updated ? new Date(serverData.last_updated).toLocaleTimeString() : 'Unknown'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: serverData.is_online ? 1.02 : 1.0,
                    y: serverData.is_online ? -1 : 0
                },
                whileTap: {
                    scale: serverData.is_online ? 0.98 : 1.0
                },
                className: "w-full mt-6 font-bold py-3 px-4 border-2 transition-all duration-300 shadow-lg tracking-wide flex items-center justify-center space-x-2 ".concat(serverData.is_online ? 'text-white border-transparent hover:border-red-600 hover:shadow-xl cursor-pointer' : 'text-gray-400 border-gray-600 cursor-not-allowed opacity-60'),
                style: {
                    backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                onClick: async ()=>{
                    if (serverData.is_online && serverData.connect_code) {
                        try {
                            await navigator.clipboard.writeText(serverData.connect_code);
                            setCopied(true);
                            setTimeout(()=>setCopied(false), 2000);
                        } catch (error) {
                            console.error('Failed to copy:', error);
                        }
                    }
                },
                disabled: !serverData.is_online,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: !serverData.is_online ? 'SERVER OFFLINE' : copied ? 'COPIED!' : 'COPY CONNECT CODE'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(ServerStatus, "eaMhx6wDGQjfcIDt9/BpLW20PWw=");
_c = ServerStatus;
var _c;
__turbopack_context__.k.register(_c, "ServerStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/LoadingScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$ServerStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/components/ServerStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/webmap/RedM-Website-Diablo/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            title: 'Authentic Roleplay',
            description: 'Grounded, character-driven stories with scars, secrets, and real consequences. The County remembers what you do.',
            image: '/assets/mp_roles_bounty_hunter.png'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            title: 'Dynamic Events',
            description: 'From train jobs and posse hunts to 13th Hour rituals and town showdowns, events that reshape the frontier.',
            image: '/assets/fme_king_of_the_rail.png'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: 'Active Community',
            description: 'Outlaws, lawmen, witches, hunters and drifters – a tight-knit Aussie-led community that lives in and out of the County.',
            image: '/assets/mp_roles_trader.png'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            title: 'Fair Governance',
            description: 'Clear rules, active staff, and an in-character justice system that keeps the world tense, not toxic.',
            image: '/assets/badges.png'
        }
    ];
    const recentUpdates = [
        {
            title: 'Moonshiner Role Unleashed',
            date: '2024-01-15',
            description: 'Set up your own backwoods still, craft your shine, and smuggle it past lawmen, hunters, and the things that move when the lanterns go out.',
            image: '/assets/mp_roles_moonshiner.png'
        },
        {
            title: 'Valentine Bank Heist Event',
            date: '2024-01-12',
            description: 'A County-wide showdown in Valentine – a planned bank job, law response, and consequences that echo long after the smoke clears.',
            image: '/assets/dollar.png'
        },
        {
            title: 'New Character Customisation',
            date: '2024-01-10',
            description: 'Expanded outfits and details to bring your witch, hunter, lawman or outlaw to life as a true child of Diablo County.',
            image: '/assets/outfit.png'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLoadingComplete: ()=>setShowContent(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            showContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                style: {
                    backgroundColor: 'rgb(32, 32, 32)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "relative py-20 px-6 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid lg:grid-cols-2 gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -50
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.8
                                                },
                                                className: "space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-5xl lg:text-7xl font-bold text-white font-serif leading-tight",
                                                                style: {
                                                                    textShadow: '3px 3px 0px rgba(0,0,0,0.5)'
                                                                },
                                                                children: [
                                                                    "DIABLO COUNTY",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-red",
                                                                        children: "RP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center mt-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/assets/divider_line.png",
                                                                    alt: "Divider",
                                                                    width: 300,
                                                                    height: 8,
                                                                    className: "sepia contrast-150"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl text-white leading-relaxed font-medium p-4",
                                                        style: {
                                                            backgroundImage: 'url("/assets/background_paper.png")',
                                                            backgroundSize: '100% 100%',
                                                            backgroundPosition: 'center',
                                                            backgroundRepeat: 'no-repeat',
                                                            minHeight: '120px'
                                                        },
                                                        children: "Step into The 13th Hour: Australia’s longest-running RedM County where the dust of the frontier mixes with whispers of the unknown. Built on a streamer-safe foundation, with a living player economy and custom scripts forged for Diablo County alone, your story isn’t just played… it feeds the County."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                whileHover: {
                                                                    scale: 1.05
                                                                },
                                                                whileTap: {
                                                                    scale: 0.95
                                                                },
                                                                onClick: ()=>window.open('https://servers.redm.net/servers/detail/g3jo4z', '_blank'),
                                                                className: "text-white font-bold py-4 px-8 border-2 border-transparent hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg",
                                                                style: {
                                                                    backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat'
                                                                },
                                                                children: "Join the Frontier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                whileHover: {
                                                                    scale: 1.05
                                                                },
                                                                whileTap: {
                                                                    scale: 0.95
                                                                },
                                                                onClick: ()=>{
                                                                    const featuresSection = document.querySelector('#features-section');
                                                                    featuresSection === null || featuresSection === void 0 ? void 0 : featuresSection.scrollIntoView({
                                                                        behavior: 'smooth'
                                                                    });
                                                                },
                                                                className: "text-white font-bold py-4 px-8 border-2 border-transparent hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg",
                                                                style: {
                                                                    backgroundImage: 'url("/assets/selection_box_bg_1d.png")',
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat'
                                                                },
                                                                children: "Learn More"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 50
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.2
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$src$2f$components$2f$ServerStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "features-section",
                                className: "py-20 px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            className: "text-center mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl lg:text-5xl font-bold text-white font-serif mb-4",
                                                    style: {
                                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                    },
                                                    children: "Why Ride in Diablo County?"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/divider_line.png",
                                                        alt: "Divider",
                                                        width: 200,
                                                        height: 8,
                                                        className: "opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-amber-100 text-lg opacity-90 max-w-2xl mx-auto",
                                                    children: "Australia’s longest-running County: strong roots, stranger nights, and stories that don’t reset with every wipe."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                                            children: features.map((feature, index)=>{
                                                const IconComponent = feature.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 50
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: index * 0.1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    whileHover: {
                                                        y: -5
                                                    },
                                                    className: "p-6 text-center hover:shadow-xl transition-all duration-300",
                                                    style: {
                                                        backgroundImage: 'url("/assets/background_paper.png")',
                                                        backgroundSize: '100% 100%',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        minHeight: '300px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center mb-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: feature.image,
                                                                alt: feature.title,
                                                                width: 64,
                                                                height: 64,
                                                                className: "opacity-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-white mb-3 font-serif",
                                                            children: feature.title.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-medium leading-relaxed",
                                                            children: feature.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "py-20 px-6",
                                style: {
                                    backgroundColor: 'rgb(32, 32, 32)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            className: "text-center mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl lg:text-5xl font-bold text-white font-serif mb-4",
                                                    style: {
                                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                    },
                                                    children: "Latest Whispers from the County"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/divider_line.png",
                                                        alt: "Divider",
                                                        width: 200,
                                                        height: 8,
                                                        className: "opacity-60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-8",
                                            children: recentUpdates.map((update, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 50
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: index * 0.1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    className: "p-6 hover:shadow-xl transition-all duration-300",
                                                    style: {
                                                        backgroundImage: 'url("/assets/background_paper.png")',
                                                        backgroundSize: '100% 100%',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        minHeight: '300px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center mb-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: update.image,
                                                                alt: update.title,
                                                                width: 48,
                                                                height: 48,
                                                                className: "opacity-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white text-sm mb-2 font-bold",
                                                            children: update.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-white mb-3 font-serif",
                                                            children: update.title.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-medium leading-relaxed",
                                                            children: update.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "py-12 px-6 border-t border-amber-600/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/star.png",
                                                alt: "Server Logo",
                                                width: 48,
                                                height: 48,
                                                className: "opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-200 mb-4 font-serif text-lg",
                                            children: "Diablo County RP Server"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmap$2f$RedM$2d$Website$2d$Diablo$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-300 opacity-70",
                                            children: '"Where the frontier ends… and the unknown begins."'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmap/RedM-Website-Diablo/frontend/src/app/rules/page.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "ctyFTU6FtKw4IvTTir6REm3bBsM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_webmap_RedM-Website-Diablo_frontend_src_a7b56907._.js.map