/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ALCHEMY_ID = process.env.PUBLIC_ALCHEMY_ID;\nconst ETHERSCAN_API_KEY = process.env.PUBLIC_ETHERSCAN_API_KEY;\nconst INFURA_ID = process.env.PUBLIC_INFURA_ID;\nconst LOCALHOST_ID = 31337;\nconst LOCALHOST_RPC_URL = \"http://127.0.0.1:8545\";\nconst LOCALHOST_NAME = \"localhost\";\nconst localhostChain = {\n    id: LOCALHOST_ID,\n    name: LOCALHOST_NAME,\n    rpcUrls: [\n        LOCALHOST_RPC_URL\n    ],\n    testnet: true\n};\nconst chains = [\n    wagmi__WEBPACK_IMPORTED_MODULE_2__.chain.goerli,\n    wagmi__WEBPACK_IMPORTED_MODULE_2__.chain.mainnet,\n    localhostChain\n];\nconst defaultChain = wagmi__WEBPACK_IMPORTED_MODULE_2__.chain.mainnet;\nconst connectors = ()=>{\n    return [\n        new wagmi__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({\n            chains\n        })\n    ];\n};\nconst isChainSupported = (chainId)=>chains.some((x)=>x.id === chainId\n    )\n;\nconst provider = ({ chainId  })=>{\n    if (chainId === LOCALHOST_ID && isChainSupported(chainId)) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_1__.providers.JsonRpcProvider(LOCALHOST_RPC_URL);\n    }\n    return ethers__WEBPACK_IMPORTED_MODULE_1__.providers.getDefaultProvider(isChainSupported(chainId) ? chainId : defaultChain.id, {\n        ALCHEMY_ID,\n        ETHERSCAN_API_KEY,\n        INFURA_ID\n    });\n};\nconst webSocketProvider = ({ chainId  })=>isChainSupported(chainId) && chainId !== LOCALHOST_ID ? new ethers__WEBPACK_IMPORTED_MODULE_1__.providers.InfuraWebSocketProvider(chainId, INFURA_ID) : undefined\n;\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        autoConnect: true,\n        connectors: connectors,\n        provider: provider,\n        webSocketProvider: webSocketProvider,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/packages/next-dapp/pages/_app.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/padminipyapali/dev/simple-scaffold-eth/packages/next-dapp/pages/_app.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRTBDO0FBQzlDO0FBRTlCLEtBQUssQ0FBQ0ksVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ2hELEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyx3QkFBd0I7QUFDOUQsS0FBSyxDQUFDQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxnQkFBZ0I7QUFFOUMsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSztBQUMxQixLQUFLLENBQUNDLGlCQUFpQixHQUFHLENBQXVCO0FBQ2pELEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQVc7QUFFbEMsS0FBSyxDQUFDQyxjQUFjLEdBQVUsQ0FBQztJQUM3QkMsRUFBRSxFQUFFSixZQUFZO0lBQ2hCSyxJQUFJLEVBQUVILGNBQWM7SUFDcEJJLE9BQU8sRUFBRSxDQUFDTDtRQUFBQSxpQkFBaUI7SUFBQSxDQUFDO0lBQzVCTSxPQUFPLEVBQUUsSUFBSTtBQUNmLENBQUM7QUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDbkI7SUFBQUEsK0NBQVk7SUFBRUEsZ0RBQWE7SUFBRWMsY0FBYztBQUFBLENBQUM7QUFDNUQsS0FBSyxDQUFDUSxZQUFZLEdBQUd0QixnREFBYTtBQUVsQyxLQUFLLENBQUN1QixVQUFVLE9BQVMsQ0FBQztJQUN4QixNQUFNLENBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQ3RCLG9EQUFpQixDQUFDLENBQUM7WUFBQ2tCLE1BQU07UUFBQyxDQUFDO0lBQUMsQ0FBQztBQUM1QyxDQUFDO0FBR0QsS0FBSyxDQUFDSyxnQkFBZ0IsSUFBSUMsT0FBZ0IsR0FDeENOLE1BQU0sQ0FBQ08sSUFBSSxFQUFFQyxDQUFDLEdBQUtBLENBQUMsQ0FBQ1osRUFBRSxLQUFLVSxPQUFPOzs7QUFFckMsS0FBSyxDQUFDRyxRQUFRLElBQUksQ0FBQyxDQUFDSCxPQUFPLEVBQWlCLENBQUMsR0FBSyxDQUFDO0lBQ2pELEVBQUUsRUFBRUEsT0FBTyxLQUFLZCxZQUFZLElBQUlhLGdCQUFnQixDQUFDQyxPQUFPLEdBQUcsQ0FBQztRQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDMUIsNkRBQXlCLENBQUNhLGlCQUFpQjtJQUN4RCxDQUFDO0lBQ0QsTUFBTSxDQUFDYixnRUFBNEIsQ0FDakN5QixnQkFBZ0IsQ0FBQ0MsT0FBTyxJQUFJQSxPQUFPLEdBQUdILFlBQVksQ0FBQ1AsRUFBRSxFQUNyRCxDQUFDO1FBQ0NaLFVBQVU7UUFDVkksaUJBQWlCO1FBQ2pCRSxTQUFTO0lBQ1gsQ0FBQztBQUVMLENBQUM7QUFFRCxLQUFLLENBQUNzQixpQkFBaUIsSUFBSSxDQUFDLENBQUNOLE9BQU8sRUFBaUIsQ0FBQyxHQUNwREQsZ0JBQWdCLENBQUNDLE9BQU8sS0FBS0EsT0FBTyxLQUFLZCxZQUFZLEdBQ2pELEdBQUcsQ0FBQ1oscUVBQWlDLENBQUMwQixPQUFPLEVBQUVoQixTQUFTLElBQ3hEd0IsU0FBUzs7U0FFTkMsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDaEQsTUFBTSw2RUFDSGxDLDJDQUFRO1FBQ1BtQyxXQUFXO1FBQ1hkLFVBQVUsRUFBRUEsVUFBVTtRQUN0QkssUUFBUSxFQUFFQSxRQUFRO1FBQ2xCRyxpQkFBaUIsRUFBRUEsaUJBQWlCOzt3RkFFbkNJLFNBQVM7bUJBQUtDLFNBQVM7Ozs7OztZQUFJLENBQzlCOzs7Ozs7O0FBRUosQ0FBQztBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQ2hhaW4sIGNoYWluLCBDb25uZWN0b3IsIEluamVjdGVkQ29ubmVjdG9yLCBQcm92aWRlciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmNvbnN0IEFMQ0hFTVlfSUQgPSBwcm9jZXNzLmVudi5QVUJMSUNfQUxDSEVNWV9JRCBhcyBzdHJpbmc7XG5jb25zdCBFVEhFUlNDQU5fQVBJX0tFWSA9IHByb2Nlc3MuZW52LlBVQkxJQ19FVEhFUlNDQU5fQVBJX0tFWSBhcyBzdHJpbmc7XG5jb25zdCBJTkZVUkFfSUQgPSBwcm9jZXNzLmVudi5QVUJMSUNfSU5GVVJBX0lEIGFzIHN0cmluZztcblxuY29uc3QgTE9DQUxIT1NUX0lEID0gMzEzMzc7XG5jb25zdCBMT0NBTEhPU1RfUlBDX1VSTCA9IFwiaHR0cDovLzEyNy4wLjAuMTo4NTQ1XCI7XG5jb25zdCBMT0NBTEhPU1RfTkFNRSA9IFwibG9jYWxob3N0XCI7XG5cbmNvbnN0IGxvY2FsaG9zdENoYWluOiBDaGFpbiA9IHtcbiAgaWQ6IExPQ0FMSE9TVF9JRCxcbiAgbmFtZTogTE9DQUxIT1NUX05BTUUsXG4gIHJwY1VybHM6IFtMT0NBTEhPU1RfUlBDX1VSTF0sXG4gIHRlc3RuZXQ6IHRydWUsXG59O1xuXG5jb25zdCBjaGFpbnMgPSBbY2hhaW4uZ29lcmxpLCBjaGFpbi5tYWlubmV0LCBsb2NhbGhvc3RDaGFpbl07XG5jb25zdCBkZWZhdWx0Q2hhaW4gPSBjaGFpbi5tYWlubmV0O1xuXG5jb25zdCBjb25uZWN0b3JzID0gKCkgPT4ge1xuICByZXR1cm4gW25ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWlucyB9KV07XG59O1xuXG50eXBlIFByb3ZpZGVyQ29uZmlnID0geyBjaGFpbklkPzogbnVtYmVyOyBjb25uZWN0b3I/OiBDb25uZWN0b3IgfTtcbmNvbnN0IGlzQ2hhaW5TdXBwb3J0ZWQgPSAoY2hhaW5JZD86IG51bWJlcikgPT5cbiAgY2hhaW5zLnNvbWUoKHgpID0+IHguaWQgPT09IGNoYWluSWQpO1xuXG5jb25zdCBwcm92aWRlciA9ICh7IGNoYWluSWQgfTogUHJvdmlkZXJDb25maWcpID0+IHtcbiAgaWYgKGNoYWluSWQgPT09IExPQ0FMSE9TVF9JRCAmJiBpc0NoYWluU3VwcG9ydGVkKGNoYWluSWQpKSB7XG4gICAgcmV0dXJuIG5ldyBwcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKExPQ0FMSE9TVF9SUENfVVJMKTtcbiAgfVxuICByZXR1cm4gcHJvdmlkZXJzLmdldERlZmF1bHRQcm92aWRlcihcbiAgICBpc0NoYWluU3VwcG9ydGVkKGNoYWluSWQpID8gY2hhaW5JZCA6IGRlZmF1bHRDaGFpbi5pZCxcbiAgICB7XG4gICAgICBBTENIRU1ZX0lELFxuICAgICAgRVRIRVJTQ0FOX0FQSV9LRVksXG4gICAgICBJTkZVUkFfSUQsXG4gICAgfVxuICApO1xufTtcblxuY29uc3Qgd2ViU29ja2V0UHJvdmlkZXIgPSAoeyBjaGFpbklkIH06IFByb3ZpZGVyQ29uZmlnKSA9PlxuICBpc0NoYWluU3VwcG9ydGVkKGNoYWluSWQpICYmIGNoYWluSWQgIT09IExPQ0FMSE9TVF9JRFxuICAgID8gbmV3IHByb3ZpZGVycy5JbmZ1cmFXZWJTb2NrZXRQcm92aWRlcihjaGFpbklkLCBJTkZVUkFfSUQpXG4gICAgOiB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyXG4gICAgICBhdXRvQ29ubmVjdFxuICAgICAgY29ubmVjdG9ycz17Y29ubmVjdG9yc31cbiAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgIHdlYlNvY2tldFByb3ZpZGVyPXt3ZWJTb2NrZXRQcm92aWRlcn1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJwcm92aWRlcnMiLCJjaGFpbiIsIkluamVjdGVkQ29ubmVjdG9yIiwiUHJvdmlkZXIiLCJBTENIRU1ZX0lEIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19BTENIRU1ZX0lEIiwiRVRIRVJTQ0FOX0FQSV9LRVkiLCJQVUJMSUNfRVRIRVJTQ0FOX0FQSV9LRVkiLCJJTkZVUkFfSUQiLCJQVUJMSUNfSU5GVVJBX0lEIiwiTE9DQUxIT1NUX0lEIiwiTE9DQUxIT1NUX1JQQ19VUkwiLCJMT0NBTEhPU1RfTkFNRSIsImxvY2FsaG9zdENoYWluIiwiaWQiLCJuYW1lIiwicnBjVXJscyIsInRlc3RuZXQiLCJjaGFpbnMiLCJnb2VybGkiLCJtYWlubmV0IiwiZGVmYXVsdENoYWluIiwiY29ubmVjdG9ycyIsImlzQ2hhaW5TdXBwb3J0ZWQiLCJjaGFpbklkIiwic29tZSIsIngiLCJwcm92aWRlciIsIkpzb25ScGNQcm92aWRlciIsImdldERlZmF1bHRQcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwiSW5mdXJhV2ViU29ja2V0UHJvdmlkZXIiLCJ1bmRlZmluZWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();