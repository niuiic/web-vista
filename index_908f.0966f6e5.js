(function(modules) {
    for(var key in modules){
        var __farm_global_this__ = (globalThis || window || global || self)[__farm_namespace__];
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "0c7ee846": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("824607c6"), exports);
    },
    "2c6e69f1": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _jsxruntime = farmRequire("892c81fb");
        "";
        "";
        "";
        var _react = farmRequire("d9571927");
        var _client = farmRequire("b62921c1");
        var _App = farmRequire("93843902");
        (0, _client.createRoot)(document.querySelector("#app")).render((0, _jsxruntime.jsx)(_react.StrictMode, {
            children: (0, _jsxruntime.jsx)(_App.App, {})
        }));
    },
    "3ef60bee": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Layout", {
            enumerable: true,
            get: function() {
                return Layout;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _layoutmodulescss = _interop_require_default._(farmRequire("5d89d03e"));
        const Layout = (props)=>{
            return (0, _jsxruntime.jsxs)("div", {
                className: _layoutmodulescss.default.layout,
                children: [
                    (0, _jsxruntime.jsx)("nav", {
                        className: _layoutmodulescss.default.nav,
                        children: props.nav
                    }),
                    (0, _jsxruntime.jsx)("main", {
                        className: _layoutmodulescss.default.main,
                        children: props.main
                    }),
                    (0, _jsxruntime.jsx)("footer", {
                        className: _layoutmodulescss.default.footer,
                        children: props.footer
                    })
                ]
            });
        };
    },
    "48529b60": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        var _default = "/JetBrainsMono-BoldItalic.3a013466.woff2";
    },
    "5d89d03e": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        "";
        var _default = {
            "nav": `nav-1054bb89`,
            "footer": `footer-1054bb89`,
            "main": `main-1054bb89`,
            "layout": `layout-1054bb89`
        };
    },
    "7dfa112b": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("3ef60bee"), exports);
    },
    "824607c6": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Nav", {
            enumerable: true,
            get: function() {
                return Nav;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _navmodulescss = _interop_require_default._(farmRequire("a81951de"));
        const Nav = (props)=>{
            const goHome = ()=>{
                window.location.href = window.location.protocol + "//" + window.location.host;
            };
            return (0, _jsxruntime.jsxs)("div", {
                className: _navmodulescss.default.nav,
                children: [
                    (0, _jsxruntime.jsx)("h1", {
                        className: [
                            _navmodulescss.default.title,
                            "o-btn"
                        ].join(" "),
                        onClick: goHome,
                        children: "Gallery"
                    }),
                    (0, _jsxruntime.jsx)("h2", {
                        className: _navmodulescss.default.slogan,
                        children: "Sharing Ideas"
                    }),
                    props.entries.map((entry)=>(0, _jsxruntime.jsx)("p", {
                            className: [
                                _navmodulescss.default.entry,
                                "o-btn"
                            ].join(" "),
                            onClick: entry.onClick,
                            children: entry.label
                        }, entry.label))
                ]
            });
        };
    },
    "93843902": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "App", {
            enumerable: true,
            get: function() {
                return App;
            }
        });
        var _jsxruntime = farmRequire("892c81fb");
        var _layout = farmRequire("7dfa112b");
        var _nav = farmRequire("0c7ee846");
        const App = ()=>{
            const entries = [
                "webgl",
                "css"
            ].map((x)=>({
                    label: x,
                    onClick: ()=>console.log(x)
                }));
            return (0, _jsxruntime.jsx)(_layout.Layout, {
                nav: (0, _jsxruntime.jsx)(_nav.Nav, {
                    entries: entries
                }),
                main: (0, _jsxruntime.jsx)("div", {
                    children: "hello"
                }),
                footer: (0, _jsxruntime.jsx)("div", {
                    children: "hello"
                })
            });
        };
    },
    "a81951de": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        "";
        var _default = {
            "nav": `nav-a346a3ab`,
            "title": `title-a346a3ab`,
            "border-color": `border-color-a346a3ab`,
            "slogan": `slogan-a346a3ab`,
            "entry": `entry-a346a3ab`
        };
    },
    "aedc679a": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        var _default = "/JetBrainsMono-Regular.a9cb1cd8.woff2";
    },
    "c711f3e9": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        var _default = "/JetBrainsMono-Bold.c503cc5e.woff2";
    }
});

//# sourceMappingURL=/index_908f.0966f6e5.js.map