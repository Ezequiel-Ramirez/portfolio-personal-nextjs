"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layaut.js":
/*!******************************!*\
  !*** ./components/Layaut.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layaut = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, d = param.d;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n        });\n        return function() {\n            return router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n            'bg-dark': dark\n        }),\n        __source: {\n            fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-white mt-5 p-4 text-center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                        lineNumber: 29,\n                        columnNumber: 25\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: \"\\xa9 Ezequiel Ramirez Portfolio\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: [\n                                \"2021 - \",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ezequ\\\\OneDrive\\\\Desktop\\\\nextjs-portfolio\\\\components\\\\Layaut.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: \"All rights\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layaut, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Layaut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layaut);\nvar _c;\n$RefreshReg$(_c, \"Layaut\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheWF1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNNO0FBQ0Y7QUFDQTtBQUNNOzs7QUFFdkMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUE0QixDQUFDO1FBQWxDQyxRQUFRLFNBQVJBLFFBQVEsa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJLFlBQUVDLENBQUMsU0FBREEsQ0FBQzs7SUFDeEMsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsR0FBSyxDQUFDTyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7WUFDZlQsc0RBQWU7UUFDbkIsQ0FBQztRQUNETyxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLG1CQUFFTixpQkFBaUI7UUFDdERELE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUUsUUFBUTtZQUFGZCxNQUFNLENBQU5BLHFEQUFjOztRQUU1RCxNQUFNLENBQUMsUUFBUTtZQUFGTyxNQUFNLENBQU5BLE1BQU0sQ0FBQ00sTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBa0IsbUJBQUVSLGlCQUFpQjs7SUFDeEUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sdUVBQ0RTLENBQUc7UUFBQ0MsU0FBUyxFQUFFbkIsaURBQVUsQ0FBQyxDQUFDO1lBQUEsQ0FBUyxVQUFHb0IsSUFBSTtRQUFBLENBQUM7Ozs7Ozs7O2lGQUV4Q3JCLCtDQUFNOzs7Ozs7OztpRkFDTnNCLENBQUk7Z0JBQUNGLFNBQVMsRUFBQyxDQUFnQjs7Ozs7OzswQkFDM0JkLFFBQVE7O1lBR1RDLE1BQU0seUVBQ0RBLENBQU07Z0JBQUNhLFNBQVMsRUFBQyxDQUF5Qzs7Ozs7OztnR0FDdERELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7Ozs2RkFDekJHLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBaUM7OzhGQUNwQ0MsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTztnQ0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVzs7OzZGQUNoQ0YsQ0FBQzs7Ozs7OztzQ0FBQyxDQUFVOzs7Ozs7O0FBT3pDLENBQUM7R0FoQ0tuQixNQUFNOztRQUNPRCxrREFBUzs7O0tBRHRCQyxNQUFNO0FBa0NaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5YXV0LmpzPzE1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBMYXlhdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSwgZCB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgbnByb2dyZXNzLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gbnByb2dyZXNzLmRvbmUoKSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7J2JnLWRhcmsnIDogZGFya30pfT5cclxuXHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LXdoaXRlIG10LTUgcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBFemVxdWllbCBSYW1pcmV6IFBvcnRmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDIxIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlhdXRcclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsImNsYXNzTmFtZXMiLCJucHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMYXlhdXQiLCJjaGlsZHJlbiIsImZvb3RlciIsImQiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsImRhcmsiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layaut.js\n");

/***/ })

});