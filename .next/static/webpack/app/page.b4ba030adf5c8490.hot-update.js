"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ScrollToTop.tsx":
/*!****************************************!*\
  !*** ./src/components/ScrollToTop.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ScrollToTop = ()=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const toggleVisibility = ()=>{\n            if (window.pageYOffset > 300) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: scrollToTop,\n            className: \"fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 z-50\",\n            \"aria-label\": \"Scroll to top\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"w-6 h-6\",\n                fill: \"none\",\n                stroke: \"currentColor\",\n                viewBox: \"0 0 24 24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\",\n                    strokeWidth: 2,\n                    d: \"M5 10l7-7m0 0l7 7m-7-7v18\"\n                }, void 0, false, {\n                    fileName: \"/Users/saisrinivaspedhapolla/Desktop/port/src/components/ScrollToTop.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/saisrinivaspedhapolla/Desktop/port/src/components/ScrollToTop.tsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/saisrinivaspedhapolla/Desktop/port/src/components/ScrollToTop.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ScrollToTop, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ScrollToTop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollToTop);\nvar _c;\n$RefreshReg$(_c, \"ScrollToTop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbFRvVG9wLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUQ7QUFFbkQsTUFBTUcsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLG1CQUFtQjtZQUN2QixJQUFJQyxPQUFPQyxXQUFXLEdBQUcsS0FBSztnQkFDNUJILGFBQWE7WUFDZixPQUFPO2dCQUNMQSxhQUFhO1lBQ2Y7UUFDRjtRQUVBRSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssY0FBYztRQUNsQkosT0FBT0ssUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDR1YsMkJBQ0MsOERBQUNXO1lBQ0NDLFNBQVNMO1lBQ1RNLFdBQVU7WUFDVkMsY0FBVztzQkFFWCw0RUFBQ0M7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLE1BQUs7Z0JBQ0xDLFFBQU87Z0JBQ1BDLFNBQVE7MEJBRVIsNEVBQUNDO29CQUNDQyxlQUFjO29CQUNkQyxnQkFBZTtvQkFDZkMsYUFBYTtvQkFDYkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEI7R0FuRE14QjtLQUFBQTtBQXFETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TY3JvbGxUb1RvcC50c3g/ZTU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tOCByaWdodC04IGJnLXByaW1hcnktNjAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgaG92ZXI6YmctcHJpbWFyeS03MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAgei01MFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCB0byB0b3BcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkPVwiTTUgMTBsNy03bTAgMGw3IDdtLTctN3YxOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb1RvcDsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTY3JvbGxUb1RvcCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJzdmciLCJmaWxsIiwic3Ryb2tlIiwidmlld0JveCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ScrollToTop.tsx\n"));

/***/ })

});