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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/routes */ \"./src/constants/routes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CompaignCard = (param)=>{\n    let { contributors , goal , id , launchDay , maxReachTime , numOfContributers , owner , story , title  } = param;\n    /* -------------------------------------------------------------------------- */ /*                                 RENDER JSX                                 */ /* -------------------------------------------------------------------------- */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"\".concat(_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.COMPAIGNS_HOME.path, \" / \").concat(id),\n        className: \"group flex h-full flex-col gap-2 overflow-hidden rounded-lg bg-gray-800 shadow transition duration-300 hover:bg-gray-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 py-3 px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"h-12 overflow-auto text-ellipsis whitespace-pre-wrap font-medium leading-6 text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: [\n                            story.substring(0, 25),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CompaignCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompaignCard);\nvar _c;\n$RefreshReg$(_c, \"CompaignCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wYWlnbnMvQ29tcGFpZ25DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNIO0FBSTFCLE1BQU1HLGVBQWdDLFNBVWhDO1FBVmlDLEVBQ3JDQyxhQUFZLEVBQ1pDLEtBQUksRUFDSkMsR0FBRSxFQUNGQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsa0JBQWlCLEVBQ2pCQyxNQUFLLEVBQ0xDLE1BQUssRUFDTEMsTUFBSyxFQUNOO0lBQ0MsOEVBQThFLEdBQzlFLDhFQUE4RSxHQUM5RSw4RUFBOEUsR0FDOUUscUJBQ0UsOERBQUNYLGtEQUFJQTtRQUNIWSxNQUFNLEdBQW1DUCxPQUFoQ04seUVBQTBCLEVBQUMsT0FBUSxPQUFITTtRQUN6Q1UsV0FBVTtrQkFFViw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBRUYsV0FBVTtrQ0FDVko7Ozs7OztrQ0FFSCw4REFBQ007d0JBQUVGLFdBQVU7OzRCQUF5QkwsTUFBTVEsU0FBUyxDQUFDLEdBQUc7NEJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZFO0tBN0JNaEI7QUErQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcGFpZ25zL0NvbXBhaWduQ2FyZC9pbmRleC50c3g/NmE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiQC9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IENPTVBBSUdOLkNvbXBhaWduO1xyXG5cclxuY29uc3QgQ29tcGFpZ25DYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGNvbnRyaWJ1dG9ycyxcclxuICBnb2FsLFxyXG4gIGlkLFxyXG4gIGxhdW5jaERheSxcclxuICBtYXhSZWFjaFRpbWUsXHJcbiAgbnVtT2ZDb250cmlidXRlcnMsXHJcbiAgb3duZXIsXHJcbiAgc3RvcnksXHJcbiAgdGl0bGUsXHJcbn0pID0+IHtcclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVOREVSIEpTWCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj17YCR7Uk9VVEVTLkNPTVBBSUdOU19IT01FLnBhdGh9IC8gJHtpZH1gfVxyXG4gICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IGgtZnVsbCBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTgwMCBzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6YmctZ3JheS03MDBcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBweC00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImgtMTIgb3ZlcmZsb3ctYXV0byB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2UtcHJlLXdyYXAgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+e3N0b3J5LnN1YnN0cmluZygwLCAyNSl9Li4uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGFpZ25DYXJkO1xyXG4iXSwibmFtZXMiOlsiUk9VVEVTIiwiTGluayIsIlJlYWN0IiwiQ29tcGFpZ25DYXJkIiwiY29udHJpYnV0b3JzIiwiZ29hbCIsImlkIiwibGF1bmNoRGF5IiwibWF4UmVhY2hUaW1lIiwibnVtT2ZDb250cmlidXRlcnMiLCJvd25lciIsInN0b3J5IiwidGl0bGUiLCJocmVmIiwiQ09NUEFJR05TX0hPTUUiLCJwYXRoIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/compaigns/CompaignCard/index.tsx\n"));

/***/ })

});