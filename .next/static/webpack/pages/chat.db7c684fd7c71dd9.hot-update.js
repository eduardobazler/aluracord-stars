"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = // ./Sua lógica vai aqui\n    // Usar onChange para atualizar o valor do campo do texto\n    // Caso esse valor seja \"enter\" vamos limpar esse campo.\n    // pegar todo o valor e passar pra lista de mensagens - também setando os estados\n    // Sua lógica vai aqui\n    function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            from: \"eduardoBazler\",\n            texto: novaMensagem,\n            id: listChat.length + 1\n        };\n        setListChat([\n            mensagem\n        ].concat(_toConsumableArray(listChat)));\n        setMensagem(\"\");\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listChat = ref1[0], setListChat = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\",\n                        alignContent: \"center\",\n                        justifyContent: \"flex-end\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listChat\n                        }, void 0, false, {\n                            fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                            lineNumber: 69,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var valor = event.target.value;\n                                        setMensagem(valor);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === \"Enter\" && mensagem1 !== '') {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    },\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    variant: \"primary\",\n                                    colorVariant: \"neutral\",\n                                    label: \"Enviar\",\n                                    onClick: function(event) {\n                                        if (mensagem1 !== '') {\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"H0aKy3OsXQJwH2wcA6uBE3G4ajo=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n            lineNumber: 129,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: _defineProperty({\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        }, \"overflow\", \"hide\"),\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        style: {\n                            display: 'flex'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/eduardobazler.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                lineNumber: 184,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                lineNumber: 194,\n                                columnNumber: 15\n                            }, _this),\n                            mensagem.from,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                lineNumber: 196,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    backgroundColor: '',\n                                    alignSelf: 'flex-end'\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                                lineNumber: 206,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                        lineNumber: 178,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n                lineNumber: 166,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/eduardo/projetos_React/aluracord/pages/chat.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQzs0QkFDVDhDLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDO3dCQUNETyxLQUFLLEVBQUUsQ0FBQ3BEOzRCQUFBQSxPQUFPLEVBQUUsQ0FBTTt3QkFBQSxDQUFDOzt3R0FFekJqQix1REFBSztnQ0FDSmdCLFVBQVUsRUFBRSxDQUFDO29DQUNYc0MsS0FBSyxFQUFFLENBQU07b0NBQ2JwQixNQUFNLEVBQUUsQ0FBTTtvQ0FDZEQsWUFBWSxFQUFFLENBQUs7b0NBQ25CaEIsT0FBTyxFQUFFLENBQWM7b0NBQ3ZCd0MsV0FBVyxFQUFFLENBQUs7Z0NBQ3BCLENBQUM7Z0NBQ0RhLEdBQUcsRUFBRyxDQUFvQzs7Ozs7O3dHQUUzQ3hFLHNEQUFJO2dDQUFDbUUsR0FBRyxFQUFDLENBQVE7Ozs7Ozs0QkFDakIxRCxRQUFRLENBQUNDLElBQUk7d0dBQ2JWLHNEQUFJO2dDQUNIa0IsVUFBVSxFQUFFLENBQUM7b0NBQ1h1RCxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQjVDLEtBQUssRUFBRXpCLG9FQUFvQztnQ0FDN0MsQ0FBQztnQ0FDRDhELEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ1EsSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozt3R0FFL0JDLENBQU07Z0NBQUNOLEtBQUssRUFBRSxDQUFDO29DQUFDakQsZUFBZSxFQUFFLENBQUU7b0NBQUV3RCxTQUFTLEVBQUUsQ0FBVTtnQ0FBQSxDQUFDOzBDQUFFLENBQUM7Ozs7Ozs7Ozs7OztvQkFFaEVyRSxRQUFRLENBQUNFLEtBQUs7O2VBekNWRixRQUFRLENBQUNHLEVBQUU7Ozs7O1FBNEN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BaEVRK0IsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAvLyAuL1N1YSBsw7NnaWNhIHZhaSBhcXVpXG4gIC8vIFVzYXIgb25DaGFuZ2UgcGFyYSBhdHVhbGl6YXIgbyB2YWxvciBkbyBjYW1wbyBkbyB0ZXh0b1xuICAvLyBDYXNvIGVzc2UgdmFsb3Igc2VqYSBcImVudGVyXCIgdmFtb3MgbGltcGFyIGVzc2UgY2FtcG8uXG4gIC8vIHBlZ2FyIHRvZG8gbyB2YWxvciBlIHBhc3NhciBwcmEgbGlzdGEgZGUgbWVuc2FnZW5zIC0gdGFtYsOpbSBzZXRhbmRvIG9zIGVzdGFkb3NcblxuICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcbiAgICBjb25zdCBtZW5zYWdlbSA9IHtcbiAgICAgIGZyb206IFwiZWR1YXJkb0JhemxlclwiLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICAgIGlkOiBsaXN0Q2hhdC5sZW5ndGggKyAxLFxuICAgIH07XG4gICAgc2V0TGlzdENoYXQoW21lbnNhZ2VtLCAuLi5saXN0Q2hhdF0pO1xuICAgIHNldE1lbnNhZ2VtKFwiXCIpO1xuICB9XG5cbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xpc3RDaGF0LCBzZXRMaXN0Q2hhdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKWAsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCI5NSVcIixcbiAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTV2aFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7PE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdENoYXR9IC8+fVxuXG4gICAgICAgICAgey8qIGxpc3RDaGF0Lm1hcCgobWVuc2FnZW0pID0+IDxsaSBrZXk9e21lbnNhZ2VtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5mcm9tfSAgLS0gIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPikgKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbWVuc2FnZW0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCA4cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW52aWFyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZihtZW5zYWdlbSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcbiAgICAgICAgICBjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcbiAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdGFnPVwidWxcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL2VkdWFyZG9iYXpsZXIucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+PC9UZXh0PlxuICAgICAgICAgICAgICB7bWVuc2FnZW0uZnJvbX1cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcnLCBhbGlnblNlbGY6ICdmbGV4LWVuZCd9fT5YPC9idXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW0iLCJmcm9tIiwidGV4dG8iLCJpZCIsImxpc3RDaGF0IiwibGVuZ3RoIiwic2V0TGlzdENoYXQiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJhbGlnbkNvbnRlbnQiLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwib25DbGljayIsIm1hcmdpbkJvdHRvbSIsImhyZWYiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzdHlsZSIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJidXR0b24iLCJhbGlnblNlbGYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});