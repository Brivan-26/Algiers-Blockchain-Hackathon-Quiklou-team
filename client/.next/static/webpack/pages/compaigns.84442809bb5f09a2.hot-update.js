"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/compaigns",{

/***/ "./src/components/compaigns/CompaignCard/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/compaigns/CompaignCard/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/routes */ \"./src/constants/routes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CompaignCard = (param)=>{\n    let { contributors , goal , id , launchDay , maxReachTime , numOfContributers , owner , story , title  } = param;\n    /* -------------------------------------------------------------------------- */ /*                                 RENDER JSX                                 */ /* -------------------------------------------------------------------------- */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"\".concat(_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.COMPAIGNS_HOME.path, \" / \").concat(id),\n        className: \"group flex h-full flex-col gap-2 overflow-hidden rounded-lg bg-gray-800 shadow transition duration-300 hover:bg-gray-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 py-3 px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-medium  text-white line-clamp-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500 line-clamp-1\",\n                        children: story\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CompaignCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompaignCard);\nvar _c;\n$RefreshReg$(_c, \"CompaignCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wYWlnbnMvQ29tcGFpZ25DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNIO0FBSTFCLE1BQU1HLGVBQWdDLFNBVWhDO1FBVmlDLEVBQ3JDQyxhQUFZLEVBQ1pDLEtBQUksRUFDSkMsR0FBRSxFQUNGQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsa0JBQWlCLEVBQ2pCQyxNQUFLLEVBQ0xDLE1BQUssRUFDTEMsTUFBSyxFQUNOO0lBQ0MsOEVBQThFLEdBQzlFLDhFQUE4RSxHQUM5RSw4RUFBOEUsR0FDOUUscUJBQ0UsOERBQUNYLGtEQUFJQTtRQUNIWSxNQUFNLEdBQW1DUCxPQUFoQ04seUVBQTBCLEVBQUMsT0FBUSxPQUFITTtRQUN6Q1UsV0FBVTtrQkFFViw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBd0NKOzs7Ozs7a0NBQ3JELDhEQUFDTTt3QkFBRUYsV0FBVTtrQ0FBc0NMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdEO0tBM0JNUjtBQTZCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21wYWlnbnMvQ29tcGFpZ25DYXJkL2luZGV4LnRzeD82YTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCJAL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0gQ09NUEFJR04uQ29tcGFpZ247XHJcblxyXG5jb25zdCBDb21wYWlnbkNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgY29udHJpYnV0b3JzLFxyXG4gIGdvYWwsXHJcbiAgaWQsXHJcbiAgbGF1bmNoRGF5LFxyXG4gIG1heFJlYWNoVGltZSxcclxuICBudW1PZkNvbnRyaWJ1dGVycyxcclxuICBvd25lcixcclxuICBzdG9yeSxcclxuICB0aXRsZSxcclxufSkgPT4ge1xyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRU5ERVIgSlNYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBocmVmPXtgJHtST1VURVMuQ09NUEFJR05TX0hPTUUucGF0aH0gLyAke2lkfWB9XHJcbiAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaC1mdWxsIGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktODAwIHNoYWRvdyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ncmF5LTcwMFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIHB4LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtICB0ZXh0LXdoaXRlIGxpbmUtY2xhbXAtMlwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbGluZS1jbGFtcC0xXCI+e3N0b3J5fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhaWduQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJPVVRFUyIsIkxpbmsiLCJSZWFjdCIsIkNvbXBhaWduQ2FyZCIsImNvbnRyaWJ1dG9ycyIsImdvYWwiLCJpZCIsImxhdW5jaERheSIsIm1heFJlYWNoVGltZSIsIm51bU9mQ29udHJpYnV0ZXJzIiwib3duZXIiLCJzdG9yeSIsInRpdGxlIiwiaHJlZiIsIkNPTVBBSUdOU19IT01FIiwicGF0aCIsImNsYXNzTmFtZSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/compaigns/CompaignCard/index.tsx\n"));

/***/ })

});