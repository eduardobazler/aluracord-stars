"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction checkUser(string) {\n    if (string.length >= 2) {\n        return string;\n    }\n    return 'nome com mais de 2';\n}\nfunction Titulo(props) {\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"64c651b8d8645af\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"64c651b8d8645af\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"], \";\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\n// Componente React\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de volta!</Titulo>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    _s();\n    /* const username = 'omariosouto'; */ var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState('eduardobazler'), 2), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(event) {\n                            event.preventDefault();\n                            roteamento.push('./chat');\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                fullWidth: true,\n                                value: username,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    console.log(valor);\n                                    setUsername(valor);\n                                },\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(PaginaInicial, \"2t6hAXW2SW4b+2H1mRWtpMm08pk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = PaginaInicial;\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FPSkwscURBQUc7d0JBQ0Z3QixVQUFVLEVBQUUsQ0FBQzs0QkFDWEMsT0FBTyxFQUFFLENBQU07NEJBQ2ZTLGFBQWEsRUFBRSxDQUFROzRCQUN2QlIsVUFBVSxFQUFFLENBQVE7NEJBQ3BCWSxRQUFRLEVBQUUsQ0FBTzs0QkFDakJFLE9BQU8sRUFBRSxDQUFNOzRCQUNmWixlQUFlLEVBQUV2QixvRUFBb0M7NEJBQ3JEa0UsTUFBTSxFQUFFLENBQVc7NEJBQ25CQyxXQUFXLEVBQUVuRSxvRUFBb0M7NEJBQ2pEa0MsWUFBWSxFQUFFLENBQU07NEJBQ3BCa0MsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFNBQVMsRUFBRSxDQUFPO3dCQUNwQixDQUFDOzt3R0FFQXRFLHVEQUFLO2dDQUNKb0IsVUFBVSxFQUFFLENBQUM7b0NBQ1hlLFlBQVksRUFBRSxDQUFLO29DQUNuQlUsWUFBWSxFQUFFLENBQU07Z0NBQ3RCLENBQUM7Z0NBQ0QwQixHQUFHLEVBQUcsQ0FBbUIscUJBQVcsTUFBSSxDQUFidEQsUUFBUSxFQUFDLENBQUk7Ozs7Ozt3R0FFekNuQixzREFBSTtnQ0FDSGdELE9BQU8sRUFBQyxDQUFPO2dDQUNmMUIsVUFBVSxFQUFFLENBQUM7b0NBQ1gyQixLQUFLLEVBQUU5QyxvRUFBb0M7b0NBQzNDdUIsZUFBZSxFQUFFdkIsb0VBQW9DO29DQUNyRG1DLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQ3hCLENBQUM7MENBRUFsQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztHQXpIdUJGLGFBQWE7O1FBR2hCWixrREFBUzs7O01BSE5ZLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBjaGVja1VzZXIoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcubGVuZ3RoID49IDIpe1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuICdub21lIGNvbSBtYWlzIGRlIDInO1xufVxuXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcbiAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgJHtUYWd9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXX07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIENvbXBvbmVudGUgUmVhY3Rcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuLy8gICAgIC8vIEpTWFxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbi8vICAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cbi8vICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gQWx1cmEgTWF0cml4PC9oMj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcbiAgLyogY29uc3QgdXNlcm5hbWUgPSAnb21hcmlvc291dG8nOyAqL1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCdlZHVhcmRvYmF6bGVyJyk7XG4gIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XG4gICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaCgnLi9jaGF0JylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cbiAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxvcik7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XG5cblxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsImFwcENvbmZpZyIsIlJlYWN0IiwidXNlUm91dGVyIiwiY2hlY2tVc2VyIiwic3RyaW5nIiwibGVuZ3RoIiwiVGl0dWxvIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm90ZWFtZW50byIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsImZ1bGxXaWR0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJ2YWxvciIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});