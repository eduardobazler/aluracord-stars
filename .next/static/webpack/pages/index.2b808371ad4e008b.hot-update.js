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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var _home_eduardo_projetos_React_aluracord_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_eduardo_projetos_React_aluracord_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_eduardo_projetos_React_aluracord_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction checkUser(string) {\n    if (string.length >= 2) {\n        return string;\n    }\n    return '';\n}\nfunction locationGitHub(user) {\n    return _locationGitHub.apply(this, arguments);\n}\nfunction _locationGitHub() {\n    _locationGitHub = _asyncToGenerator(_home_eduardo_projetos_React_aluracord_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n        var url, location;\n        return _home_eduardo_projetos_React_aluracord_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    url = \"https://api.github.com/users/\";\n                    _ctx.next = 3;\n                    return fetch();\n                case 3:\n                    location = _ctx.sent.location;\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _locationGitHub.apply(this, arguments);\n}\nfunction Titulo(props) {\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"64c651b8d8645af\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"64c651b8d8645af\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"], \";\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\n// Componente React\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de volta!</Titulo>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    _s();\n    /* const username = 'omariosouto'; */ var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_5___default().useState('eduardobazler'), 2), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                /* backgroundColor: appConfig.theme.colors.primary[500], */ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/05/11/08/37/universe-2303321_960_720.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        as: \"form\",\n                        onSubmit: function(event) {\n                            event.preventDefault();\n                            roteamento.push('./chat');\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_4__.name\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                fullWidth: true,\n                                value: username,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    console.log(valor);\n                                    setUsername(valor);\n                                },\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                styleSheet: {\n                                    display: 'flex',\n                                    flexDirection: 'column',\n                                    alignItems: 'center',\n                                    justifyContent: 'center',\n                                    width: {\n                                        xs: '100%',\n                                        sm: '50%'\n                                    },\n                                    textAlign: 'center',\n                                    marginBottom: '32px',\n                                    marginTop: '20px'\n                                },\n                                children: \" sodks\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: \"https://github.com/\".concat(checkUser(username), \".png\")\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                                lineNumber: 156,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/eduardo/projetos_React/aluracord/pages/index.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(PaginaInicial, \"2t6hAXW2SW4b+2H1mRWtpMm08pk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c1 = PaginaInicial;\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxFQUFFLENBQU07Z0NBQ3RCLENBQUM7Z0NBQ0Q0QixHQUFHLEVBQUcsQ0FBbUIscUJBQXNCLE1BQUksQ0FBeEJ6RSxTQUFTLENBQUNrQixRQUFRLEdBQUUsQ0FBSTs7Ozs7O3dHQUVwRHhCLHNEQUFJO2dDQUNIb0QsT0FBTyxFQUFDLENBQU87Z0NBQ2Z6QixVQUFVLEVBQUUsQ0FBQztvQ0FDWDBCLEtBQUssRUFBRWxELG9FQUFvQztvQ0FDM0N5QyxlQUFlLEVBQUV6QyxvRUFBb0M7b0NBQ3JEc0MsT0FBTyxFQUFFLENBQVU7b0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtnQ0FDeEIsQ0FBQzswQ0FFQWhCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QixDQUFDO0dBOUh1QkYsYUFBYTs7UUFHaEJqQixrREFBUzs7O01BSE5pQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gY2hlY2tVc2VyKHN0cmluZykge1xuICBpZiAoc3RyaW5nLmxlbmd0aCA+PSAyKXtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9jYXRpb25HaXRIdWIodXNlcikge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9gXG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IGF3YWl0IGZldGNoKClcbn1cblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XG4gIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCAnaDEnO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICR7VGFnfSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ119O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBDb21wb25lbnRlIFJlYWN0XG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbi8vICAgICAvLyBKU1hcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4vLyAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXR1bG8+XG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XG4gIC8qIGNvbnN0IHVzZXJuYW1lID0gJ29tYXJpb3NvdXRvJzsgKi9cbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnZWR1YXJkb2JhemxlcicpO1xuICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIC8qIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sICovXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDUvMTEvMDgvMzcvdW5pdmVyc2UtMjMwMzMyMV85NjBfNzIwLmpwZyknLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcuL2NoYXQnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXR1bG8+XG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbG9yKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcilcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JywgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgICAgICAgICB9fT4gc29ka3NcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cblxuXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y2hlY2tVc2VyKHVzZXJuYW1lKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJhcHBDb25maWciLCJSZWFjdCIsInVzZVJvdXRlciIsImNoZWNrVXNlciIsInN0cmluZyIsImxlbmd0aCIsImxvY2F0aW9uR2l0SHViIiwidXNlciIsInVybCIsImxvY2F0aW9uIiwiZmV0Y2giLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsImFzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJmdWxsV2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidmFsb3IiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInByaW1hcnkiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});