"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./components/Layaut.js":
/*!******************************!*\
  !*** ./components/Layaut.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layaut = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, dark = param.dark;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n        });\n        return function() {\n            return router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n            'bg-dark': dark\n        }),\n        __source: {\n            fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-white mt-5 p-4 text-center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                        lineNumber: 29,\n                        columnNumber: 25\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: \"\\xa9 Ezequiel Ramirez Portfolio\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: [\n                                \"2021 - \",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: \"All rights\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layaut, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Layaut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layaut);\nvar _c;\n$RefreshReg$(_c, \"Layaut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheWF1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNNO0FBQ0Y7QUFDQTtBQUNNOzs7QUFFdkMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUFnQyxDQUFDO1FBQXRDQyxRQUFRLFNBQVJBLFFBQVEsa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJLFlBQUVDLElBQUksU0FBSkEsSUFBSTs7SUFDM0MsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsR0FBSyxDQUFDTyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7WUFDZlQsc0RBQWU7UUFDbkIsQ0FBQztRQUNETyxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLG1CQUFFTixpQkFBaUI7UUFDdERELE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUUsUUFBUTtZQUFGZCxNQUFNLENBQU5BLHFEQUFjOztRQUU1RCxNQUFNLENBQUMsUUFBUTtZQUFGTyxNQUFNLENBQU5BLE1BQU0sQ0FBQ00sTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBa0IsbUJBQUVSLGlCQUFpQjs7SUFDeEUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sdUVBQ0RTLENBQUc7UUFBQ0MsU0FBUyxFQUFFbkIsaURBQVUsQ0FBQyxDQUFDO1lBQUEsQ0FBUyxVQUFHTyxJQUFJO1FBQUEsQ0FBQzs7Ozs7Ozs7aUZBRXhDUiwrQ0FBTTs7Ozs7Ozs7aUZBQ05xQixDQUFJO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7MEJBQzNCZCxRQUFROztZQUdUQyxNQUFNLHlFQUNEQSxDQUFNO2dCQUFDYSxTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs7Z0dBQ3RERCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs7NkZBQ3pCRSxDQUFFOzs7Ozs7O3NDQUFDLENBQWlDOzs4RkFDcENDLENBQUM7Ozs7Ozs7O2dDQUFDLENBQU87Z0NBQUMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Ozs2RkFDaENGLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBVTs7Ozs7OztBQU96QyxDQUFDO0dBaENLbEIsTUFBTTs7UUFDT0Qsa0RBQVM7OztLQUR0QkMsTUFBTTtBQWtDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheWF1dC5qcz8xNTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5pbXBvcnQgbnByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgTGF5YXV0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gdXJsID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICAgICBucHJvZ3Jlc3Muc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpKVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsnYmctZGFyaycgOiBkYXJrfSl9PlxyXG5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvb3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtd2hpdGUgbXQtNSBwLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JmNvcHk7IEV6ZXF1aWVsIFJhbWlyZXogUG9ydGZvbGlvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMjEgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWF1dFxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiY2xhc3NOYW1lcyIsIm5wcm9ncmVzcyIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxheWF1dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layaut.js\n");

/***/ })

});