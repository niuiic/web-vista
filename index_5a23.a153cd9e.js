(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_5a23.js';
                (globalThis || window || global || self)[__farm_namespace__].__farm_module_system__.register(key, modules[key]);
            }
        })({"092f3b3b": function(module, exports, farmRequire, farmDynamicRequire) {
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
    var _code = farmRequire("ac0a0cbe");
    var _input = farmRequire("6e9a280b");
    var _csscomponents = _interop_require_default._(farmRequire("23ec4682"));
    var _mainmodulescss = _interop_require_default._(farmRequire("703aab8a"));
    console.log(_csscomponents.default);
    const Main = ()=>{
        const searchChange = (value)=>{
            console.log(value);
        };
        return (0, _jsxruntime.jsxs)("div", {
            className: _mainmodulescss.default.main,
            children: [
                (0, _jsxruntime.jsx)(_code.Code, {
                    code: _csscomponents.default[0].css,
                    language: "css"
                }),
                (0, _jsxruntime.jsx)(_input.Input, {
                    onChange: searchChange,
                    placeholder: "Search Ideas"
                })
            ]
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
"23ec4682": function(module, exports, farmRequire, farmDynamicRequire) {
    (globalThis || window || global || self).__farm_namespace__ = "9a630259e374223af4de8e088557eb01";
    (globalThis || window || global || self)[__farm_namespace__] = {
        __FARM_TARGET_ENV__: "browser"
    };
    !function(e, t) {
        var r = {};
        function o(e) {
            return Promise.resolve(i(e));
        }
        function i(t) {
            if (r[t]) return r[t].exports;
            var n = {
                id: t,
                exports: {}
            };
            return e[t](n, n.exports, i, o), r[t] = n, n.exports;
        }
        i(t);
    }({
        "0daad6ea": function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                FarmRuntimePlugin: function() {
                    return s.FarmRuntimePlugin;
                },
                ModuleSystem: function() {
                    return n.ModuleSystem;
                }
            });
            var i = r("ca62dec2")._(r("d88d4f71")), n = r("3b2ca79c"), s = r("3f99e8ab");
            r("96b1563d").__farm_global_this__.__farm_module_system__ = (function() {
                let e = new n.ModuleSystem;
                return function() {
                    return e;
                };
            })()(), (globalThis || window || global || self)[__farm_namespace__].__farm_module_system__.setPlugins([
                i.default
            ]);
        },
        "3b2ca79c": function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ModuleSystem", {
                enumerable: !0,
                get: function() {
                    return h;
                }
            });
            var i = r("98bb4bbf"), n = r("3f99e8ab"), s = r("96b1563d"), u = r("ca62dec2"), a = r("c4321c4c"), l = r("45cc7871");
            let c = globalThis || window, d = {
                "@swc/helpers/_/_interop_require_default": {
                    default: u._interop_require_default,
                    _: u._interop_require_default
                },
                "@swc/helpers/_/_interop_require_wildcard": {
                    default: a._interop_require_wildcard,
                    _: a._interop_require_wildcard
                },
                "@swc/helpers/_/_export_star": {
                    default: l._export_star,
                    _: l._export_star
                }
            };
            class h {
                modules;
                cache;
                externalModules;
                publicPaths;
                dynamicModuleResourcesMap;
                resourceLoader;
                pluginContainer;
                targetEnv;
                constructor(){
                    this.modules = {}, this.cache = {}, this.publicPaths = [], this.dynamicModuleResourcesMap = {}, this.resourceLoader = new s.ResourceLoader(this.publicPaths), this.pluginContainer = new n.FarmRuntimePluginContainer([]), this.targetEnv = s.targetEnv, this.externalModules = {};
                }
                require(e) {
                    if (d[e]) return d[e];
                    if (this.cache[e] && !this.pluginContainer.hookBail("readModuleCache", this.cache[e])) return this.cache[e].exports;
                    let t = this.modules[e];
                    if (!t) return this.externalModules[e] ? this.externalModules[e] : ("node" === this.targetEnv || !s.isBrowser) && nodeRequire ? nodeRequire(e) : (console.log(`[farm] Module "${e}" is not registered`), {});
                    let r = new i.Module(e, this.require.bind(this));
                    return r.resource_pot = t.__farm_resource_pot__, this.pluginContainer.hookSerial("moduleCreated", r), this.cache[e] = r, (globalThis || global || window || {}).require || ((globalThis || global || window || {
                        require: undefined
                    }).require = this.require.bind(this)), t(r, r.exports, this.require.bind(this), this.farmDynamicRequire.bind(this)), this.pluginContainer.hookSerial("moduleInitialized", r), r.exports;
                }
                farmDynamicRequire(e) {
                    if (this.modules[e]) {
                        let t = this.require(e);
                        return t.__farm_async ? t.default : Promise.resolve(t);
                    }
                    let t = this.dynamicModuleResourcesMap[e];
                    if (!t || 0 === t.length) throw Error(`Dynamic imported module "${e}" does not belong to any resource`);
                    return Promise.all(t.map((e)=>this.resourceLoader.load(e))).then(()=>{
                        let t = this.require(e);
                        return t.__farm_async ? t.default : t;
                    }).catch((t)=>{
                        throw console.error(`[Farm] Error loading dynamic module "${e}"`, t), t;
                    });
                }
                register(e, t) {
                    if (this.modules[e]) {
                        console.warn(`Module "${e}" has registered! It should not be registered twice`);
                        return;
                    }
                    this.modules[e] = t;
                }
                update(e, t) {
                    this.modules[e] = t, this.clearCache(e);
                }
                delete(e) {
                    return !!this.modules[e] && (this.cache[e] && this.cache[e].dispose?.(), this.clearCache(e), delete this.modules[e], !0);
                }
                getModuleUrl(e) {
                    let t = this.publicPaths[0] ?? "";
                    return c.location ? `${c.location.protocol}//${c.location.host}${t.endsWith("/") ? t.slice(0, -1) : t}/${this.modules[e].__farm_resource_pot__}` : this.modules[e].__farm_resource_pot__;
                }
                getCache(e) {
                    return this.cache[e];
                }
                clearCache(e) {
                    return !!this.cache[e] && (delete this.cache[e], !0);
                }
                setInitialLoadedResources(e) {
                    for (let t of e)this.resourceLoader.setLoadedResource(t);
                }
                setDynamicModuleResourcesMap(e) {
                    this.dynamicModuleResourcesMap = e;
                }
                setPublicPaths(e) {
                    this.publicPaths = e, this.resourceLoader.publicPaths = this.publicPaths;
                }
                setPlugins(e) {
                    this.pluginContainer.plugins = e;
                }
                setExternalModules(e) {
                    Object.assign(this.externalModules, e || {});
                }
                bootstrap() {
                    this.pluginContainer.hookSerial("bootstrap", this);
                }
            }
        },
        "3f99e8ab": function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "FarmRuntimePluginContainer", {
                enumerable: !0,
                get: function() {
                    return i;
                }
            });
            class i {
                plugins = [];
                constructor(e){
                    this.plugins = e;
                }
                hookSerial(e, ...t) {
                    for (let r of this.plugins){
                        let o = r[e];
                        o && o.apply(r, t);
                    }
                }
                hookBail(e, ...t) {
                    for (let r of this.plugins){
                        let o = r[e];
                        if (o) {
                            let e = o.apply(r, t);
                            if (e) return e;
                        }
                    }
                }
            }
        },
        "45cc7871": function(e, t, r, o) {
            "use strict";
            function i(e, t) {
                return Object.keys(e).forEach(function(r) {
                    "default" === r || Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: function() {
                            return e[r];
                        }
                    });
                }), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                _: function() {
                    return i;
                },
                _export_star: function() {
                    return i;
                }
            });
        },
        "96b1563d": function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                ResourceLoader: function() {
                    return u;
                },
                __farm_global_this__: function() {
                    return i;
                },
                isBrowser: function() {
                    return s;
                },
                targetEnv: function() {
                    return n;
                }
            });
            let i = (globalThis || window || global || self)[__farm_namespace__], n = i.__FARM_TARGET_ENV__ || "node", s = "browser" === n && (globalThis || window).document;
            class u {
                _loadedResources = {};
                _loadingResources = {};
                publicPaths;
                constructor(e){
                    this.publicPaths = e;
                }
                load(e, t = 0) {
                    if (!s) {
                        if ("script" === e.type) return this._loadScript(`./${e.path}`);
                        if ("link" === e.type) return this._loadLink(`./${e.path}`);
                    }
                    let r = this.publicPaths[t], o = `${"/" === r ? "" : r}/${e.path}`;
                    if (this._loadedResources[e.path]) return;
                    if (this._loadingResources[e.path]) return this._loadingResources[e.path];
                    let i = Promise.resolve();
                    return "script" === e.type ? i = this._loadScript(o) : "link" === e.type && (i = this._loadLink(o)), this._loadingResources[e.path] = i, i.then(()=>{
                        this._loadedResources[e.path] = !0;
                    }).catch((r)=>{
                        if (console.warn(`[Farm] Failed to load resource "${o}" using publicPath: ${this.publicPaths[t]}`), ++t < this.publicPaths.length) return this.load(e, t);
                        throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". ${r}`);
                    }), i;
                }
                setLoadedResource(e) {
                    this._loadedResources[e] = !0;
                }
                _loadScript(e) {
                    return s ? new Promise((t, r)=>{
                        let o = document.createElement("script");
                        o.src = e, document.body.appendChild(o), o.onload = ()=>{
                            t();
                        }, o.onerror = (e)=>{
                            r(e);
                        };
                    }) : import(e);
                }
                _loadLink(e) {
                    return s ? new Promise((t, r)=>{
                        let o = document.createElement("link");
                        o.rel = "stylesheet", o.href = e, document.head.appendChild(o), o.onload = ()=>{
                            t();
                        }, o.onerror = (e)=>{
                            r(e);
                        };
                    }) : Promise.resolve();
                }
            }
        },
        "98bb4bbf": function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Module", {
                enumerable: !0,
                get: function() {
                    return i;
                }
            });
            class i {
                id;
                exports;
                resource_pot;
                meta;
                require;
                dispose;
                constructor(e, t){
                    this.id = e, this.exports = {}, this.meta = {
                        env: {}
                    }, this.require = t;
                }
                onDispose(e) {
                    this.dispose = e;
                }
            }
        },
        c4321c4c: function(e, t, r, o) {
            "use strict";
            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap, r = new WeakMap;
                return (i = function(e) {
                    return e ? r : t;
                })(e);
            }
            function n(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = i(t);
                if (r && r.has(e)) return r.get(e);
                var o = {
                    __proto__: null
                }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var s in e)if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                    var u = n ? Object.getOwnPropertyDescriptor(e, s) : null;
                    u && (u.get || u.set) ? Object.defineProperty(o, s, u) : o[s] = e[s];
                }
                return o.default = e, r && r.set(e, o), o;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                _: function() {
                    return n;
                },
                _interop_require_wildcard: function() {
                    return n;
                }
            });
        },
        ca62dec2: function(e, t, r, o) {
            "use strict";
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                _: function() {
                    return i;
                },
                _interop_require_default: function() {
                    return i;
                }
            });
        },
        d88d4f71: function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            let i = globalThis || window;
            var n = {
                name: "farm-runtime-import-meta",
                _moduleSystem: {},
                bootstrap (e) {
                    this._moduleSystem = e;
                },
                moduleCreated (e) {
                    e.meta.env = {
                        ...process.env,
                        mode: process.env.NODE_ENV,
                        dev: "development" === process.env.NODE_ENV,
                        prod: "production" === process.env.NODE_ENV
                    };
                    let t = this._moduleSystem.publicPaths[0] ?? "";
                    if (i.location) {
                        let r = `${i.location.protocol}//${i.location.host}${t.endsWith("/") ? t.slice(0, -1) : t}/${e.resource_pot}`;
                        e.meta.url = r;
                    } else e.meta.url = e.resource_pot;
                }
            };
        }
    }, "0daad6ea");
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
    var _react = farmRequire("d9571927");
    var _icon = farmRequire("bc9e4543");
    var _layoutmodulescss = _interop_require_default._(farmRequire("5d89d03e"));
    const Layout = (props)=>{
        const [collapseNav, setCollapseNav] = (0, _react.useState)(false);
        const onClickNav = ()=>{
            if (collapseNav) {
                setCollapseNav(false);
            }
        };
        const onClickCollapseBtn = ()=>{
            setCollapseNav(true);
        };
        return (0, _jsxruntime.jsxs)("div", {
            className: [
                _layoutmodulescss.default.layout,
                collapseNav ? _layoutmodulescss.default["layout--nav-collapsed"] : ""
            ].join(" "),
            children: [
                (0, _jsxruntime.jsxs)("nav", {
                    className: [
                        _layoutmodulescss.default.nav,
                        collapseNav ? _layoutmodulescss.default["nav-collapsed"] : ""
                    ].join(" "),
                    onClick: onClickNav,
                    children: [
                        collapseNav ? undefined : props.nav,
                        collapseNav ? undefined : (0, _jsxruntime.jsx)("div", {
                            className: _layoutmodulescss.default["collapse-btn"],
                            onClick: onClickCollapseBtn,
                            children: (0, _jsxruntime.jsx)(_icon.Icon, {
                                name: "collapse"
                            })
                        })
                    ]
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
        "collapse-btn": `collapse-btn-e21327f6`,
        "dyn-bg": `dyn-bg-e21327f6`,
        "footer": `footer-e21327f6`,
        "layout": `layout-e21327f6`,
        "layout--nav-collapsed": `layout--nav-collapsed-e21327f6`,
        "main": `main-e21327f6`,
        "nav": `nav-e21327f6`,
        "nav-collapsed": `nav-collapsed-e21327f6`
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
        "bg-wave-flow": `bg-wave-flow-f568b156`,
        "footer": `footer-f568b156`,
        "link": `link-f568b156`,
        "text": `text-f568b156`
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
"7955362b": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Code", {
        enumerable: true,
        get: function() {
            return Code;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _jsxruntime = farmRequire("892c81fb");
    var _highlight = _interop_require_default._(farmRequire("c85d2dfa"));
    var _react = farmRequire("d9571927");
    const Code = (props)=>{
        const codeRef = (0, _react.useRef)(null);
        (0, _react.useEffect)(()=>{
            if (codeRef.current) {
                codeRef.current.innerHTML = _highlight.default.highlight(props.code, {
                    language: props.language
                }).value;
            }
        }, [
            props.code,
            props.language
        ]);
        return (0, _jsxruntime.jsx)("div", {
            ref: codeRef
        });
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
        "change-color": `change-color-89509faa`,
        "entries": `entries-89509faa`,
        "entry": `entry-89509faa`,
        "nav": `nav-89509faa`,
        "slogan": `slogan-89509faa`,
        "slogan__inner": `slogan__inner-89509faa`,
        "title": `title-89509faa`
    };
},
"ac0a0cbe": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("7955362b"), exports);
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
    window._iconfont_svg_string_4319158 = '<svg><symbol id="icon-collapse" viewBox="0 0 1024 1024"><path d="M576 298.666667c12.8 0 21.333333 4.266667 29.866667 12.8 17.066667 17.066667 17.066667 42.666667 0 59.733333L465.066667 512l140.8 140.8c17.066667 17.066667 17.066667 42.666667 0 59.733333s-42.666667 17.066667-59.733334 0l-170.666666-170.666666c-17.066667-17.066667-17.066667-42.666667 0-59.733334l170.666666-170.666666c8.533333-8.533333 17.066667-12.8 29.866667-12.8z" fill="#ffffff" ></path><path d="M512 1024c-136.533333 0-264.533333-51.2-362.666667-149.333333S0 648.533333 0 512s51.2-264.533333 149.333333-362.666667S375.466667 0 512 0s264.533333 51.2 362.666667 149.333333S1024 375.466667 1024 512s-51.2 264.533333-149.333333 362.666667S648.533333 1024 512 1024z m0-938.666667C396.8 85.333333 290.133333 128 209.066667 209.066667 128 290.133333 85.333333 396.8 85.333333 512s42.666667 221.866667 123.733334 302.933333S396.8 938.666667 512 938.666667s221.866667-42.666667 302.933333-123.733334S938.666667 627.2 938.666667 512s-42.666667-221.866667-123.733334-302.933333C733.866667 128 627.2 85.333333 512 85.333333z" fill="#ffffff" ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M473.142857 54.514286c-231.2 0-418.742857 187.428571-418.742857 418.742857 0 231.2 187.428571 418.742857 418.742857 418.742857 102.742857 0 196.8-37.028571 269.6-98.285714L918.171429 969.142857l50.514285-50.514286-175.428571-175.657142c61.485714-72.914286 98.514286-167.085714 98.514286-269.828572 0.114286-231.2-187.428571-418.628571-418.628572-418.628571z m0 765.828571c-46.857143 0-92.342857-9.142857-135.085714-27.2-41.371429-17.485714-78.514286-42.514286-110.4-74.4-31.885714-31.885714-56.914286-69.028571-74.4-110.4-18.057143-42.742857-27.2-88.228571-27.2-135.085714s9.142857-92.342857 27.2-135.085714c17.485714-41.371429 42.514286-78.514286 74.4-110.4 31.885714-31.885714 69.028571-56.914286 110.4-74.4 42.742857-18.057143 88.228571-27.2 135.085714-27.2s92.342857 9.142857 135.085714 27.2c41.371429 17.485714 78.514286 42.514286 110.4 74.4 31.885714 31.885714 56.914286 69.028571 74.4 110.4 18.057143 42.742857 27.2 88.228571 27.2 135.085714s-9.142857 92.342857-27.2 135.085714c-17.485714 41.371429-42.514286 78.514286-74.4 110.4s-69.028571 56.914286-110.4 74.4c-42.742857 18.057143-88.228571 27.2-135.085714 27.2z" fill="#c7c9d3" ></path></symbol></svg>', function(n) {
        var t = (t = document.getElementsByTagName("script"))[t.length - 1], e = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
        if (!t) {
            var o, i, c, s, d, l = function(t, e) {
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
                e.innerHTML = n._iconfont_svg_string_4319158, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? l(e, t.firstChild) : t.appendChild(e));
            }, document.addEventListener ? ~[
                "complete",
                "loaded",
                "interactive"
            ].indexOf(document.readyState) ? setTimeout(o, 0) : (i = function() {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
            }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (c = o, s = n.document, d = !1, r(), s.onreadystatechange = function() {
                "complete" == s.readyState && (s.onreadystatechange = null, a());
            });
        }
        function a() {
            d || (d = !0, c());
        }
        function r() {
            try {
                s.documentElement.doScroll("left");
            } catch (t) {
                return void setTimeout(r, 50);
            }
            a();
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
},});
//# sourceMappingURL=index_5a23.a153cd9e.js.map