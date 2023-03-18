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

/***/ "./src/components/compaigns/AllCompaignsIndex.tsx":
/*!********************************************************!*\
  !*** ./src/components/compaigns/AllCompaignsIndex.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_compaigns_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/compaigns.dummy */ \"./src/data/compaigns.dummy.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Modal */ \"./src/components/shared/Modal.tsx\");\n/* harmony import */ var _CompaignCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompaignCard */ \"./src/components/compaigns/CompaignCard/index.tsx\");\n/* harmony import */ var _CompaignCard_CompaignFullDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CompaignCard/CompaignFullDetails */ \"./src/components/compaigns/CompaignCard/CompaignFullDetails.tsx\");\n/* harmony import */ var _CompaignCard_CompaignLoadingCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompaignCard/CompaignLoadingCard */ \"./src/components/compaigns/CompaignCard/CompaignLoadingCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AllCompaignsIndex = ()=>{\n    _s();\n    /* -------------------------------------------------------------------------- */ /*                                   STATES                                   */ /* -------------------------------------------------------------------------- */ const [compaigns, setCompaigns] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [selectedCompaign, setSelectedCompaign] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    /* -------------------------------------------------------------------------- */ /*                                 USE EFFECT                                 */ /* -------------------------------------------------------------------------- */ react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        // getComaigns\n        setTimeout(()=>{\n            setCompaigns(_data_compaigns_dummy__WEBPACK_IMPORTED_MODULE_1__.DUMMY_COMPAIGNS);\n            setLoading(false);\n        }, 0);\n    }, []);\n    /* -------------------------------------------------------------------------- */ /*                                 RENDER JSX                                 */ /* -------------------------------------------------------------------------- */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container py-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"head\",\n                    children: [\n                        \"All Compaigns \",\n                        compaigns.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 \",\n                    children: [\n                        !loading && compaigns && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    isOpen: Boolean(selectedCompaign),\n                                    closeModal: ()=>setSelectedCompaign(null),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompaignCard_CompaignFullDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        compaign: selectedCompaign\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                compaigns.map((compaign)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompaignCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ...compaign,\n                                        onClick: ()=>setSelectedCompaign(compaign)\n                                    }, compaign.id, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true),\n                        loading && [\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8\n                        ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompaignCard_CompaignLoadingCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, item, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\AllCompaignsIndex.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AllCompaignsIndex, \"Md/g4HO0LaFZ7cRjLLxJWu1kUWk=\");\n_c = AllCompaignsIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllCompaignsIndex);\nvar _c;\n$RefreshReg$(_c, \"AllCompaignsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wYWlnbnMvQWxsQ29tcGFpZ25zSW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNKO0FBQ007QUFDMkI7QUFDQTtBQUVyRSxNQUFNTyxvQkFBb0IsSUFBTTs7SUFDOUIsOEVBQThFLEdBQzlFLDhFQUE4RSxHQUM5RSw4RUFBOEUsR0FDOUUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFzQixFQUFFO0lBQ2xFLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBVSxJQUFJO0lBRXBELE1BQU0sQ0FBQ1Usa0JBQWtCQyxvQkFBb0IsR0FDM0NYLCtDQUFRQSxDQUEyQixJQUFJO0lBRXpDLDhFQUE4RSxHQUM5RSw4RUFBOEUsR0FDOUUsOEVBQThFLEdBQzlFRCxzREFBZSxDQUFDLElBQU07UUFDcEIsY0FBYztRQUNkYyxXQUFXLElBQU07WUFDZk4sYUFBYVQsa0VBQWVBO1lBQzVCVyxXQUFXLEtBQUs7UUFDbEIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLDhFQUE4RSxHQUM5RSw4RUFBOEUsR0FDOUUsOEVBQThFLEdBQzlFLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7O3dCQUFPO3dCQUFlVCxVQUFVVyxNQUFNOzs7Ozs7OzhCQUNwRCw4REFBQ0g7b0JBQUlDLFdBQVU7O3dCQUNaLENBQUNQLFdBQVdGLDJCQUNYOzs4Q0FDRSw4REFBQ0wscURBQUtBO29DQUNKaUIsUUFBUUMsUUFBUVQ7b0NBQ2hCVSxZQUFZLElBQU1ULG9CQUFvQixJQUFJOzhDQUUxQyw0RUFBQ1IseUVBQW1CQTt3Q0FBQ2tCLFVBQVVYOzs7Ozs7Ozs7OztnQ0FFaENKLFVBQVVnQixHQUFHLENBQUMsQ0FBQ0QseUJBQ2QsOERBQUNuQixxREFBWUE7d0NBRVYsR0FBR21CLFFBQVE7d0NBQ1pFLFNBQVMsSUFBTVosb0JBQW9CVTt1Q0FGOUJBLFNBQVNHLEVBQUU7Ozs7Ozs7d0JBT3ZCaEIsV0FDQzs0QkFBQzs0QkFBRzs0QkFBRzs0QkFBRzs0QkFBRzs0QkFBRzs0QkFBRzs0QkFBRzt5QkFBRSxDQUFDYyxHQUFHLENBQUMsQ0FBQ0cscUJBQzVCLDhEQUFDckIseUVBQW1CQSxNQUFNcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0F0RE1wQjtLQUFBQTtBQXdETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbXBhaWducy9BbGxDb21wYWlnbnNJbmRleC50c3g/OTAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEVU1NWV9DT01QQUlHTlMgfSBmcm9tIFwiQC9kYXRhL2NvbXBhaWducy5kdW1teVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9zaGFyZWQvTW9kYWxcIjtcclxuaW1wb3J0IENvbXBhaWduQ2FyZCBmcm9tIFwiLi9Db21wYWlnbkNhcmRcIjtcclxuaW1wb3J0IENvbXBhaWduRnVsbERldGFpbHMgZnJvbSBcIi4vQ29tcGFpZ25DYXJkL0NvbXBhaWduRnVsbERldGFpbHNcIjtcclxuaW1wb3J0IENvbXBhaWduTG9hZGluZ0NhcmQgZnJvbSBcIi4vQ29tcGFpZ25DYXJkL0NvbXBhaWduTG9hZGluZ0NhcmRcIjtcclxuXHJcbmNvbnN0IEFsbENvbXBhaWduc0luZGV4ID0gKCkgPT4ge1xyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUQVRFUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIGNvbnN0IFtjb21wYWlnbnMsIHNldENvbXBhaWduc10gPSB1c2VTdGF0ZTxDT01QQUlHTi5Db21wYWlnbltdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZENvbXBhaWduLCBzZXRTZWxlY3RlZENvbXBhaWduXSA9XHJcbiAgICB1c2VTdGF0ZTxDT01QQUlHTi5Db21wYWlnbiB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFIEVGRkVDVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZ2V0Q29tYWlnbnNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDb21wYWlnbnMoRFVNTVlfQ09NUEFJR05TKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRU5ERVIgSlNYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTEwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRcIj5BbGwgQ29tcGFpZ25zIHtjb21wYWlnbnMubGVuZ3RofTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgMnhsOmdyaWQtY29scy01IFwiPlxyXG4gICAgICAgICAgeyFsb2FkaW5nICYmIGNvbXBhaWducyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e0Jvb2xlYW4oc2VsZWN0ZWRDb21wYWlnbil9XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsPXsoKSA9PiBzZXRTZWxlY3RlZENvbXBhaWduKG51bGwpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb21wYWlnbkZ1bGxEZXRhaWxzIGNvbXBhaWduPXtzZWxlY3RlZENvbXBhaWdufSAvPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAge2NvbXBhaWducy5tYXAoKGNvbXBhaWduKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tcGFpZ25DYXJkXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y29tcGFpZ24uaWR9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jb21wYWlnbn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb21wYWlnbihjb21wYWlnbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7bG9hZGluZyAmJlxyXG4gICAgICAgICAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENvbXBhaWduTG9hZGluZ0NhcmQga2V5PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsQ29tcGFpZ25zSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJEVU1NWV9DT01QQUlHTlMiLCJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJDb21wYWlnbkNhcmQiLCJDb21wYWlnbkZ1bGxEZXRhaWxzIiwiQ29tcGFpZ25Mb2FkaW5nQ2FyZCIsIkFsbENvbXBhaWduc0luZGV4IiwiY29tcGFpZ25zIiwic2V0Q29tcGFpZ25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZENvbXBhaWduIiwic2V0U2VsZWN0ZWRDb21wYWlnbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCIsImlzT3BlbiIsIkJvb2xlYW4iLCJjbG9zZU1vZGFsIiwiY29tcGFpZ24iLCJtYXAiLCJvbkNsaWNrIiwiaWQiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/compaigns/AllCompaignsIndex.tsx\n"));

/***/ }),

/***/ "./src/components/compaigns/CompaignCard/CompaignFullDetails.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/compaigns/CompaignCard/CompaignFullDetails.tsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CompaignFullDetails = (param)=>{\n    let { compaign  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white\",\n        children: JSON.stringify(compaign, null, 2)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Algiers-Blockchain-Hackathon\\\\client\\\\src\\\\components\\\\compaigns\\\\CompaignCard\\\\CompaignFullDetails.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n_c = CompaignFullDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompaignFullDetails);\nvar _c;\n$RefreshReg$(_c, \"CompaignFullDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wYWlnbnMvQ29tcGFpZ25DYXJkL0NvbXBhaWduRnVsbERldGFpbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQU0xQixNQUFNQyxzQkFBdUMsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFO0lBQ3hELHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUFjQyxLQUFLQyxTQUFTLENBQUNKLFVBQVUsSUFBSSxFQUFFOzs7Ozs7QUFDckU7S0FGTUQ7QUFJTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbXBhaWducy9Db21wYWlnbkNhcmQvQ29tcGFpZ25GdWxsRGV0YWlscy50c3g/YTJmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNvbXBhaWduOiBDT01QQUlHTi5Db21wYWlnbjtcclxufTtcclxuXHJcbmNvbnN0IENvbXBhaWduRnVsbERldGFpbHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbXBhaWduIH0pID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e0pTT04uc3RyaW5naWZ5KGNvbXBhaWduLCBudWxsLCAyKX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYWlnbkZ1bGxEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wYWlnbkZ1bGxEZXRhaWxzIiwiY29tcGFpZ24iLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/compaigns/CompaignCard/CompaignFullDetails.tsx\n"));

/***/ })

});