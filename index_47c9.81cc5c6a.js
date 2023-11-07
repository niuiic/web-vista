(function(modules) {
    for(var key in modules){
        var __farm_global_this__ = (globalThis || window || global || self)[__farm_namespace__];
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "092f3b3b": function(module, exports, farmRequire, farmDynamicRequire) {
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
            "icon": `icon-0b50c465`
        };
    },
    "0c7ee846": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("824607c6"), exports);
    },
    "1e81784d": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Main", {
            enumerable: true,
            get: function() {
                return Main;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _input = farmRequire("6e9a280b");
        var _mainmodulescss = _interop_require_default._(farmRequire("703aab8a"));
        const Main = ()=>{
            const searchChange = (value)=>{
                console.log(value);
            };
            return (0, _jsxruntime.jsx)("div", {
                className: _mainmodulescss.default.main,
                children: (0, _jsxruntime.jsx)(_input.Input, {
                    onChange: searchChange,
                    placeholder: "Search Ideas"
                })
            });
        };
    },
    "1fb2c2db": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Input", {
            enumerable: true,
            get: function() {
                return Input;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _icon = farmRequire("bc9e4543");
        var _inputmodulescss = _interop_require_default._(farmRequire("8c2a1c95"));
        const Input = (props)=>{
            const onChange = (event)=>props.onChange && props.onChange(event.target?.value);
            return (0, _jsxruntime.jsxs)("div", {
                className: _inputmodulescss.default.input,
                children: [
                    (0, _jsxruntime.jsx)(_icon.Icon, {
                        className: _inputmodulescss.default["input__prefix"],
                        name: "search"
                    }),
                    (0, _jsxruntime.jsx)("input", {
                        className: _inputmodulescss.default["input__inner"],
                        type: "text",
                        placeholder: props.placeholder,
                        onChange: onChange
                    })
                ]
            });
        };
    },
    "2c6e69f1": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _jsxruntime = farmRequire("892c81fb");
        farmRequire("c5a7f327");
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
    "56fdf8a1": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Footer", {
            enumerable: true,
            get: function() {
                return Footer;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _footermodulescss = _interop_require_default._(farmRequire("67c07953"));
        const Footer = ()=>{
            const accessGithub = ()=>{
                window.open("https://github.com/niuiic/gallery", "_blank");
            };
            return (0, _jsxruntime.jsxs)("div", {
                className: _footermodulescss.default.footer,
                children: [
                    (0, _jsxruntime.jsxs)("p", {
                        className: _footermodulescss.default.text,
                        children: [
                            "View on ",
                            (0, _jsxruntime.jsx)("span", {
                                className: [
                                    _footermodulescss.default.link,
                                    "o-btn"
                                ].join(" "),
                                onClick: accessGithub,
                                children: "github"
                            })
                        ]
                    }),
                    (0, _jsxruntime.jsx)("p", {
                        className: _footermodulescss.default.text,
                        children: "Copyright \xa9 2023-present niuiic"
                    })
                ]
            });
        };
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
            "nav": `nav-891b01ca`,
            "footer": `footer-891b01ca`,
            "main": `main-891b01ca`,
            "layout": `layout-891b01ca`
        };
    },
    "67c07953": function(module, exports, farmRequire, farmDynamicRequire) {
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
            "footer": `footer-f568b156`,
            "text": `text-f568b156`,
            "bg-wave-flow": `bg-wave-flow-f568b156`,
            "link": `link-f568b156`
        };
    },
    "6e9a280b": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("1fb2c2db"), exports);
    },
    "703aab8a": function(module, exports, farmRequire, farmDynamicRequire) {
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
            "main": `main-3d2210f3`
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
                        children: (0, _jsxruntime.jsx)("span", {
                            className: _navmodulescss.default["slogan__inner"],
                            children: "Sharing Ideas"
                        })
                    }),
                    (0, _jsxruntime.jsx)("ul", {
                        className: _navmodulescss.default.entries,
                        children: props.entries.map((entry)=>(0, _jsxruntime.jsx)("li", {
                                className: [
                                    _navmodulescss.default.entry,
                                    "o-btn"
                                ].join(" "),
                                onClick: entry.onClick,
                                children: entry.label
                            }, entry.label))
                    })
                ]
            });
        };
    },
    "8c2a1c95": function(module, exports, farmRequire, farmDynamicRequire) {
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
            "input": `input-f03885e4`,
            "input__inner": `input__inner-f03885e4`,
            "input__prefix": `input__prefix-f03885e4`
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
        var _footer = farmRequire("9fd73c3e");
        var _nav = farmRequire("0c7ee846");
        var _Main = farmRequire("1e81784d");
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
                main: (0, _jsxruntime.jsx)(_Main.Main, {}),
                footer: (0, _jsxruntime.jsx)(_footer.Footer, {})
            });
        };
    },
    "9fd73c3e": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("56fdf8a1"), exports);
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
            "nav": `nav-562acdbd`,
            "title": `title-562acdbd`,
            "entry": `entry-562acdbd`,
            "slogan__inner": `slogan__inner-562acdbd`,
            "change-color": `change-color-562acdbd`,
            "slogan": `slogan-562acdbd`,
            "entries": `entries-562acdbd`
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
    "bc9e4543": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _export_star = farmRequire("@swc/helpers/_/_export_star");
        _export_star._(farmRequire("e8703c4f"), exports);
    },
    "c5a7f327": function(module, exports, farmRequire, farmDynamicRequire) {
        window._iconfont_svg_string_4319158 = '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M473.142857 54.514286c-231.2 0-418.742857 187.428571-418.742857 418.742857 0 231.2 187.428571 418.742857 418.742857 418.742857 102.742857 0 196.8-37.028571 269.6-98.285714L918.171429 969.142857l50.514285-50.514286-175.428571-175.657142c61.485714-72.914286 98.514286-167.085714 98.514286-269.828572 0.114286-231.2-187.428571-418.628571-418.628572-418.628571z m0 765.828571c-46.857143 0-92.342857-9.142857-135.085714-27.2-41.371429-17.485714-78.514286-42.514286-110.4-74.4-31.885714-31.885714-56.914286-69.028571-74.4-110.4-18.057143-42.742857-27.2-88.228571-27.2-135.085714s9.142857-92.342857 27.2-135.085714c17.485714-41.371429 42.514286-78.514286 74.4-110.4 31.885714-31.885714 69.028571-56.914286 110.4-74.4 42.742857-18.057143 88.228571-27.2 135.085714-27.2s92.342857 9.142857 135.085714 27.2c41.371429 17.485714 78.514286 42.514286 110.4 74.4 31.885714 31.885714 56.914286 69.028571 74.4 110.4 18.057143 42.742857 27.2 88.228571 27.2 135.085714s-9.142857 92.342857-27.2 135.085714c-17.485714 41.371429-42.514286 78.514286-74.4 110.4s-69.028571 56.914286-110.4 74.4c-42.742857 18.057143-88.228571 27.2-135.085714 27.2z" fill="#c7c9d3" ></path></symbol></svg>', function(n) {
            var t = (t = document.getElementsByTagName("script"))[t.length - 1], e = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
            if (!t) {
                var o, i, c, s, d, a = function(t, e) {
                    e.parentNode.insertBefore(t, e);
                };
                if (e && !n.__iconfont__svg__cssinject__) {
                    n.__iconfont__svg__cssinject__ = !0;
                    try {
                        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
                    } catch (t) {
                        console && console.log(t);
                    }
                }
                o = function() {
                    var t, e = document.createElement("div");
                    e.innerHTML = n._iconfont_svg_string_4319158, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e));
                }, document.addEventListener ? ~[
                    "complete",
                    "loaded",
                    "interactive"
                ].indexOf(document.readyState) ? setTimeout(o, 0) : (i = function() {
                    document.removeEventListener("DOMContentLoaded", i, !1), o();
                }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (c = o, s = n.document, d = !1, r(), s.onreadystatechange = function() {
                    "complete" == s.readyState && (s.onreadystatechange = null, l());
                });
            }
            function l() {
                d || (d = !0, c());
            }
            function r() {
                try {
                    s.documentElement.doScroll("left");
                } catch (t) {
                    return void setTimeout(r, 50);
                }
                l();
            }
        }(window);
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
    },
    "e8703c4f": function(module, exports, farmRequire, farmDynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Icon", {
            enumerable: true,
            get: function() {
                return Icon;
            }
        });
        var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
        var _jsxruntime = farmRequire("892c81fb");
        var _iconmodulescss = _interop_require_default._(farmRequire("092f3b3b"));
        const Icon = (props)=>(0, _jsxruntime.jsx)("svg", {
                className: [
                    _iconmodulescss.default.icon,
                    props.className ?? ""
                ].join(" "),
                "aria-hidden": "true",
                children: (0, _jsxruntime.jsx)("use", {
                    xlinkHref: `#icon-${props.name}`
                })
            });
    }
});

//# sourceMappingURL=/index_47c9.81cc5c6a.js.map