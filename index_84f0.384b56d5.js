(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_84f0.js';
                (globalThis || window || self || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(key, modules[key]);
            }
        })({"03887fe2": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("edeb1d28"), exports);
},
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
    var _notify = farmRequire("44f760a0");
    var _showCase = farmRequire("786b7de5");
    var _csscomponents = _interop_require_default._(farmRequire("23ec4682"));
    var _mainmodulescss = _interop_require_default._(farmRequire("703aab8a"));
    const Main = ()=>{
        const searchChange = (value)=>{
            (0, _notify.notify)("success", value);
        };
        const component = _csscomponents.default[0];
        const options = {
            id: "id",
            title: "title",
            desc: "desc",
            category: "category",
            tags: [
                "tag1",
                "tag2"
            ],
            html: component.html,
            css: component.css,
            js: undefined,
            code: [
                {
                    label: "html",
                    filetype: "html",
                    content: component.html
                },
                {
                    label: "css",
                    filetype: "css",
                    content: component.css
                }
            ]
        };
        return (0, _jsxruntime.jsxs)("div", {
            className: _mainmodulescss.default.main,
            children: [
                (0, _jsxruntime.jsx)(_input.Input, {
                    onChange: searchChange,
                    placeholder: "Search Ideas"
                }),
                (0, _jsxruntime.jsx)(_showCase.ShowCase, {
                    options: options
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
    farmRequire("87b95526");
    farmRequire("8a6fd474");
    !function(e) {
        for(var r in e)e[r].__farm_resource_pot__ = "index_a2a1.js", (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.register(r, e[r]);
    }({
        "953dfae2": function(e, r, _, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function() {
                    return a;
                }
            });
            var a = [
                _("@swc/helpers/_/_interop_require_wildcard")._(_("3650c57d"))
            ];
        }
    });
    (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.setInitialLoadedResources([
        "wavyUnderline.bd2c49bc.js"
    ]);
    (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.setDynamicModuleResourcesMap({});
    var farmModuleSystem = (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__;
    farmModuleSystem.bootstrap();
    var entry = farmModuleSystem.require("953dfae2");
    var _default = entry.default || entry;
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
    var _notify = farmRequire("44f760a0");
    if (!document.head.attachShadow) {
        (0, _notify.notify)("error", "Your browser does not support shadow dom. Please use the another browser supporting it instead.");
    }
    (0, _client.createRoot)(document.querySelector("#app")).render((0, _jsxruntime.jsx)(_react.StrictMode, {
        children: (0, _jsxruntime.jsx)(_App.App, {})
    }));
},
"2ea370be": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Frame", {
        enumerable: true,
        get: function() {
            return Frame;
        }
    });
    var _jsxruntime = farmRequire("892c81fb");
    var _react = farmRequire("d9571927");
    const Frame = (props)=>{
        const containerRef = (0, _react.useRef)();
        let shadowRoot;
        (0, _react.useEffect)(()=>{
            if (!shadowRoot) {
                const root = containerRef.current?.attachShadow({
                    mode: "open"
                });
                if (!root) {
                    return;
                }
                shadowRoot = root;
            }
            while(shadowRoot.firstChild){
                shadowRoot.removeChild(shadowRoot.firstChild);
            }
            if (props.html) {
                shadowRoot.innerHTML = props.html;
            }
            if (props.css) {
                const style = document.createElement("style");
                style.textContent = props.css;
                shadowRoot.appendChild(style);
            }
            if (props.js) {
                const script = document.createElement("script");
                script.textContent = props.js;
                shadowRoot.appendChild(script);
            }
        }, [
            props.js,
            props.html,
            props.css
        ]);
        return (0, _jsxruntime.jsx)("div", {
            ref: containerRef,
            className: props.className
        });
    };
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
"44f760a0": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("945ecf99"), exports);
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
"779af01c": function(module, exports, farmRequire, farmDynamicRequire) {
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
        "dialog": `dialog-74c2c5f8`,
        "dialog__inner": `dialog__inner-74c2c5f8`
    };
},
"786b7de5": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("fa5afec0"), exports);
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
"87b95526": function(module, exports, farmRequire, farmDynamicRequire) {
    (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"] = {
        __FARM_TARGET_ENV__: "browser"
    };
    !function(e1, t1) {
        var r1 = {};
        function o1(e1) {
            return Promise.resolve(i1(e1));
        }
        function i1(t1) {
            if (r1[t1]) return r1[t1].exports;
            var n1 = {
                id: t1,
                exports: {}
            };
            return e1[t1](n1, n1.exports, i1, o1), r1[t1] = n1, n1.exports;
        }
        i1(t1);
    }({
        "45cc7871": function(e1, t1, r1, o1) {
            "use strict";
            function i1(e1, t1) {
                return Object.keys(e1).forEach(function(r1) {
                    "default" === r1 || Object.prototype.hasOwnProperty.call(t1, r1) || Object.defineProperty(t1, r1, {
                        enumerable: !0,
                        get: function() {
                            return e1[r1];
                        }
                    });
                }), e1;
            }
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), function(e1, t1) {
                for(var r1 in t1)Object.defineProperty(e1, r1, {
                    enumerable: !0,
                    get: t1[r1]
                });
            }(t1, {
                _: function() {
                    return i1;
                },
                _export_star: function() {
                    return i1;
                }
            });
        },
        "48dd9d2c": function(e1, t1, r1, o1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), Object.defineProperty(t1, "ModuleSystem", {
                enumerable: !0,
                get: function() {
                    return h1;
                }
            });
            var i1 = r1("b66f5dde"), n1 = r1("81d30019"), s1 = r1("ab11f41d"), u1 = r1("ca62dec2"), a1 = r1("c4321c4c"), l1 = r1("45cc7871");
            let c1 = globalThis || window, d1 = {
                "@swc/helpers/_/_interop_require_default": {
                    default: u1._interop_require_default,
                    _: u1._interop_require_default
                },
                "@swc/helpers/_/_interop_require_wildcard": {
                    default: a1._interop_require_wildcard,
                    _: a1._interop_require_wildcard
                },
                "@swc/helpers/_/_export_star": {
                    default: l1._export_star,
                    _: l1._export_star
                }
            };
            class h1 {
                modules;
                cache;
                externalModules;
                publicPaths;
                dynamicModuleResourcesMap;
                resourceLoader;
                pluginContainer;
                targetEnv;
                constructor(){
                    this.modules = {}, this.cache = {}, this.publicPaths = [], this.dynamicModuleResourcesMap = {}, this.resourceLoader = new s1.ResourceLoader(this.publicPaths), this.pluginContainer = new n1.FarmRuntimePluginContainer([]), this.targetEnv = s1.targetEnv, this.externalModules = {};
                }
                require(e1) {
                    if (d1[e1]) return d1[e1];
                    if (this.cache[e1] && !this.pluginContainer.hookBail("readModuleCache", this.cache[e1])) return this.cache[e1].exports;
                    let t1 = this.modules[e1];
                    if (!t1) return this.externalModules[e1] ? this.externalModules[e1] : ("node" === this.targetEnv || !s1.isBrowser) && nodeRequire ? nodeRequire(e1) : (console.log(`[farm] Module "${e1}" is not registered`), {});
                    let r1 = new i1.Module(e1, this.require.bind(this));
                    return r1.resource_pot = t1.__farm_resource_pot__, this.pluginContainer.hookSerial("moduleCreated", r1), this.cache[e1] = r1, (globalThis || global || window || {}).require || ((globalThis || global || window || {
                        require: undefined
                    }).require = this.require.bind(this)), t1(r1, r1.exports, this.require.bind(this), this.farmDynamicRequire.bind(this)), this.pluginContainer.hookSerial("moduleInitialized", r1), r1.exports;
                }
                farmDynamicRequire(e1) {
                    if (this.modules[e1]) {
                        let t1 = this.require(e1);
                        return t1.__farm_async ? t1.default : Promise.resolve(t1);
                    }
                    let t1 = this.dynamicModuleResourcesMap[e1];
                    if (!t1 || 0 === t1.length) throw Error(`Dynamic imported module "${e1}" does not belong to any resource`);
                    return Promise.all(t1.map((e1)=>this.resourceLoader.load(e1))).then(()=>{
                        let t1 = this.require(e1);
                        return t1.__farm_async ? t1.default : t1;
                    }).catch((t1)=>{
                        throw console.error(`[Farm] Error loading dynamic module "${e1}"`, t1), t1;
                    });
                }
                register(e1, t1) {
                    if (this.modules[e1]) {
                        console.warn(`Module "${e1}" has registered! It should not be registered twice`);
                        return;
                    }
                    this.modules[e1] = t1;
                }
                update(e1, t1) {
                    this.modules[e1] = t1, this.clearCache(e1);
                }
                delete(e1) {
                    return !!this.modules[e1] && (this.cache[e1] && this.cache[e1].dispose?.(), this.clearCache(e1), delete this.modules[e1], !0);
                }
                getModuleUrl(e1) {
                    let t1 = this.publicPaths[0] ?? "";
                    return c1.location ? `${c1.location.protocol}//${c1.location.host}${t1.endsWith("/") ? t1.slice(0, -1) : t1}/${this.modules[e1].__farm_resource_pot__}` : this.modules[e1].__farm_resource_pot__;
                }
                getCache(e1) {
                    return this.cache[e1];
                }
                clearCache(e1) {
                    return !!this.cache[e1] && (delete this.cache[e1], !0);
                }
                setInitialLoadedResources(e1) {
                    for (let t1 of e1)this.resourceLoader.setLoadedResource(t1);
                }
                setDynamicModuleResourcesMap(e1) {
                    this.dynamicModuleResourcesMap = e1;
                }
                setPublicPaths(e1) {
                    this.publicPaths = e1, this.resourceLoader.publicPaths = this.publicPaths;
                }
                setPlugins(e1) {
                    this.pluginContainer.plugins = e1;
                }
                setExternalModules(e1) {
                    Object.assign(this.externalModules, e1 || {});
                }
                bootstrap() {
                    this.pluginContainer.hookSerial("bootstrap", this);
                }
            }
        },
        "78d37cf6": function(e1, t1, r1, o1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), function(e1, t1) {
                for(var r1 in t1)Object.defineProperty(e1, r1, {
                    enumerable: !0,
                    get: t1[r1]
                });
            }(t1, {
                FarmRuntimePlugin: function() {
                    return s1.FarmRuntimePlugin;
                },
                ModuleSystem: function() {
                    return n1.ModuleSystem;
                }
            });
            var i1 = r1("ca62dec2")._(r1("a4eb5b9a")), n1 = r1("48dd9d2c"), s1 = r1("81d30019");
            r1("ab11f41d").__farm_global_this__.__farm_module_system__ = (function() {
                let e1 = new n1.ModuleSystem;
                return function() {
                    return e1;
                };
            })()(), (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.setPlugins([
                i1.default
            ]);
        },
        "81d30019": function(e1, t1, r1, o1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), Object.defineProperty(t1, "FarmRuntimePluginContainer", {
                enumerable: !0,
                get: function() {
                    return i1;
                }
            });
            class i1 {
                plugins = [];
                constructor(e1){
                    this.plugins = e1;
                }
                hookSerial(e1, ...t1) {
                    for (let r1 of this.plugins){
                        let o1 = r1[e1];
                        o1 && o1.apply(r1, t1);
                    }
                }
                hookBail(e1, ...t1) {
                    for (let r1 of this.plugins){
                        let o1 = r1[e1];
                        if (o1) {
                            let e1 = o1.apply(r1, t1);
                            if (e1) return e1;
                        }
                    }
                }
            }
        },
        a4eb5b9a: function(e1, t1, r1, o1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), Object.defineProperty(t1, "default", {
                enumerable: !0,
                get: function() {
                    return n1;
                }
            });
            let i1 = globalThis || window;
            var n1 = {
                name: "farm-runtime-import-meta",
                _moduleSystem: {},
                bootstrap (e1) {
                    this._moduleSystem = e1;
                },
                moduleCreated (e1) {
                    e1.meta.env = {
                        ...{
                            NODE_ENV: "production"
                        } ?? {},
                        mode: "production",
                        dev: !1,
                        prod: !0
                    };
                    let t1 = this._moduleSystem.publicPaths[0] ?? "";
                    if (i1.location) {
                        let r1 = `${i1.location.protocol}//${i1.location.host}${t1.endsWith("/") ? t1.slice(0, -1) : t1}/${e1.resource_pot}`;
                        e1.meta.url = r1;
                    } else e1.meta.url = e1.resource_pot;
                }
            };
        },
        ab11f41d: function(module, exports, farmRequire, farmDynamicRequire) {
            "use strict";
            function _export(e1, t1) {
                for(var r1 in t1)Object.defineProperty(e1, r1, {
                    enumerable: !0,
                    get: t1[r1]
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), _export(exports, {
                ResourceLoader: function() {
                    return ResourceLoader;
                },
                __farm_global_this__: function() {
                    return __farm_global_this__;
                },
                isBrowser: function() {
                    return isBrowser;
                },
                targetEnv: function() {
                    return targetEnv;
                }
            });
            let __farm_global_this__ = eval("(globalThis || window || self || global)['9a630259e374223af4de8e088557eb01']"), targetEnv = __farm_global_this__.__FARM_TARGET_ENV__ || "node", isBrowser = "browser" === targetEnv && (globalThis || window).document;
            class ResourceLoader {
                _loadedResources = {};
                _loadingResources = {};
                publicPaths;
                constructor(e1){
                    this.publicPaths = e1;
                }
                load(e1, t1 = 0) {
                    if (!isBrowser) {
                        if ("script" === e1.type) return this._loadScript(`./${e1.path}`);
                        if ("link" === e1.type) return this._loadLink(`./${e1.path}`);
                    }
                    let r1 = this.publicPaths[t1], o1 = `${"/" === r1 ? "" : r1}/${e1.path}`;
                    if (this._loadedResources[e1.path]) return;
                    if (this._loadingResources[e1.path]) return this._loadingResources[e1.path];
                    let i1 = Promise.resolve();
                    return "script" === e1.type ? i1 = this._loadScript(o1) : "link" === e1.type && (i1 = this._loadLink(o1)), this._loadingResources[e1.path] = i1, i1.then(()=>{
                        this._loadedResources[e1.path] = !0;
                    }).catch((r1)=>{
                        if (console.warn(`[Farm] Failed to load resource "${o1}" using publicPath: ${this.publicPaths[t1]}`), ++t1 < this.publicPaths.length) return this.load(e1, t1);
                        throw Error(`[Farm] Failed to load resource: "${e1.path}, type: ${e1.type}". ${r1}`);
                    }), i1;
                }
                setLoadedResource(e1) {
                    this._loadedResources[e1] = !0;
                }
                _loadScript(e1) {
                    return isBrowser ? new Promise((t1, r1)=>{
                        let o1 = document.createElement("script");
                        o1.src = e1, document.body.appendChild(o1), o1.onload = ()=>{
                            t1();
                        }, o1.onerror = (e1)=>{
                            r1(e1);
                        };
                    }) : import(e1);
                }
                _loadLink(e1) {
                    return isBrowser ? new Promise((t1, r1)=>{
                        let o1 = document.createElement("link");
                        o1.rel = "stylesheet", o1.href = e1, document.head.appendChild(o1), o1.onload = ()=>{
                            t1();
                        }, o1.onerror = (e1)=>{
                            r1(e1);
                        };
                    }) : Promise.resolve();
                }
            }
        },
        b66f5dde: function(e1, t1, r1, o1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), Object.defineProperty(t1, "Module", {
                enumerable: !0,
                get: function() {
                    return i1;
                }
            });
            class i1 {
                id;
                exports;
                resource_pot;
                meta;
                require;
                dispose;
                constructor(e1, t1){
                    this.id = e1, this.exports = {}, this.meta = {
                        env: {}
                    }, this.require = t1;
                }
                onDispose(e1) {
                    this.dispose = e1;
                }
            }
        },
        c4321c4c: function(e1, t1, r1, o1) {
            "use strict";
            function i1(e1) {
                if ("function" != typeof WeakMap) return null;
                var t1 = new WeakMap, r1 = new WeakMap;
                return (i1 = function(e1) {
                    return e1 ? r1 : t1;
                })(e1);
            }
            function n1(e1, t1) {
                if (!t1 && e1 && e1.__esModule) return e1;
                if (null === e1 || "object" != typeof e1 && "function" != typeof e1) return {
                    default: e1
                };
                var r1 = i1(t1);
                if (r1 && r1.has(e1)) return r1.get(e1);
                var o1 = {
                    __proto__: null
                }, n1 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var s1 in e1)if ("default" !== s1 && Object.prototype.hasOwnProperty.call(e1, s1)) {
                    var u1 = n1 ? Object.getOwnPropertyDescriptor(e1, s1) : null;
                    u1 && (u1.get || u1.set) ? Object.defineProperty(o1, s1, u1) : o1[s1] = e1[s1];
                }
                return o1.default = e1, r1 && r1.set(e1, o1), o1;
            }
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), function(e1, t1) {
                for(var r1 in t1)Object.defineProperty(e1, r1, {
                    enumerable: !0,
                    get: t1[r1]
                });
            }(t1, {
                _: function() {
                    return n1;
                },
                _interop_require_wildcard: function() {
                    return n1;
                }
            });
        },
        ca62dec2: function(e1, t1, r1, o1) {
            "use strict";
            function i1(e1) {
                return e1 && e1.__esModule ? e1 : {
                    default: e1
                };
            }
            Object.defineProperty(t1, "__esModule", {
                value: !0
            }), function(e1, t1) {
                for(var r1 in t1)Object.defineProperty(e1, r1, {
                    enumerable: !0,
                    get: t1[r1]
                });
            }(t1, {
                _: function() {
                    return i1;
                },
                _interop_require_default: function() {
                    return i1;
                }
            });
        }
    }, "78d37cf6");
},
"8a6fd474": function(module, exports, farmRequire, farmDynamicRequire) {
    !function(e) {
        for(var t in e)e[t].__farm_resource_pot__ = "wavyUnderline.js", (globalThis || window || self || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.register(t, e[t]);
    }({
        "1595ecfa": function(e, t, r, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u;
                }
            });
            var u = `.text {
  color: red;
}`;
        },
        "3650c57d": function(e, t, r, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                });
            }(t, {
                css: function() {
                    return f.default;
                },
                html: function() {
                    return a.default;
                }
            });
            var u = r("@swc/helpers/_/_interop_require_default"), a = u._(r("a9ddf789")), f = u._(r("1595ecfa"));
        },
        a9ddf789: function(e, t, r, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u;
                }
            });
            var u = `<span class="text">hello</span>
`;
        }
    });
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
"945ecf99": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        Notify: function() {
            return Notify;
        },
        notify: function() {
            return notify;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _jsxruntime = farmRequire("892c81fb");
    var _client = farmRequire("b62921c1");
    var _notifymodulescss = _interop_require_default._(farmRequire("9a22db61"));
    const Notify = (props)=>{
        const className = {
            success: "notify--success",
            warning: "notify--warning",
            error: "notify--error",
            info: "notify--info"
        }[props.type];
        return (0, _jsxruntime.jsx)("div", {
            className: [
                _notifymodulescss.default["notify"],
                _notifymodulescss.default[className]
            ].join(" "),
            children: props.msg
        });
    };
    function notify(type, msg) {
        if (!msg) {
            return (msg)=>notify(type, msg);
        }
        const container = document.createElement("div");
        container.setAttribute("class", _notifymodulescss.default["notify__wrapper"]);
        document.body.appendChild(container);
        (0, _client.createRoot)(container).render((0, _jsxruntime.jsx)(Notify, {
            msg: msg,
            type: type
        }));
        setTimeout(()=>{
            document.body.removeChild(container);
        }, 2000);
    }
},
"9a22db61": function(module, exports, farmRequire, farmDynamicRequire) {
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
        "come-out": `come-out-32c410d9`,
        "notify": `notify-32c410d9`,
        "notify--error": `notify--error-32c410d9`,
        "notify--info": `notify--info-32c410d9`,
        "notify--success": `notify--success-32c410d9`,
        "notify--warning": `notify--warning-32c410d9`,
        "notify__wrapper": `notify__wrapper-32c410d9`
    };
},
"9e553abd": function(module, exports, farmRequire, farmDynamicRequire) {
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
        "frame": `frame-d90572fd`,
        "frame__btn": `frame__btn-d90572fd`,
        "frame__wrapper": `frame__wrapper-d90572fd`,
        "show-case": `show-case-d90572fd`,
        "tags": `tags-d90572fd`,
        "title": `title-d90572fd`
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
    window._iconfont_svg_string_4319158 = '<svg><symbol id="icon-expand" viewBox="0 0 1024 1024"><path d="M872.3 899.1h-718c-14.3 0-26-11.7-26-26v-718c0-14.3 11.7-26 26-26h718c14.3 0 26 11.7 26 26v718c0 14.3-11.6 26-26 26z m-711.9-32h706v-706h-706v706z" fill="#ffffff" ></path><path d="M252.8 249.9l166.1 2.1c8.8 0.1 15.9 7.4 15.8 16.2-0.1 8.8-7.4 15.9-16.2 15.8l-134.1-1.7-1.7 134.1c-0.1 8.8-7.4 15.9-16.2 15.8-8.8-0.1-15.9-7.4-15.8-16.2l2.1-166.1z" fill="#ffffff" ></path><path d="M301.4 278l180.4 184.6c6.2 6.3 6.1 16.5-0.3 22.6-6.3 6.2-16.5 6.1-22.6-0.3L278.5 300.4c-6.2-6.3-6.1-16.5 0.3-22.6 6.3-6.2 16.4-6.1 22.6 0.2zM756.6 590.7c8.8 0 16 7.2 15.9 16.1l-0.5 166-166.1-0.5c-8.8 0-16-7.2-15.9-16.1 0-8.8 7.2-16 16.1-15.9l134.1 0.4 0.4-134.1c0-8.8 7.2-16 16-15.9z" fill="#ffffff" ></path><path d="M564.7 542.1L761 737.8l-22.6 22.7-196.2-195.8c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.3-6.3 22.5 0z" fill="#ffffff" ></path></symbol><symbol id="icon-collapse" viewBox="0 0 1024 1024"><path d="M576 298.666667c12.8 0 21.333333 4.266667 29.866667 12.8 17.066667 17.066667 17.066667 42.666667 0 59.733333L465.066667 512l140.8 140.8c17.066667 17.066667 17.066667 42.666667 0 59.733333s-42.666667 17.066667-59.733334 0l-170.666666-170.666666c-17.066667-17.066667-17.066667-42.666667 0-59.733334l170.666666-170.666666c8.533333-8.533333 17.066667-12.8 29.866667-12.8z" fill="#ffffff" ></path><path d="M512 1024c-136.533333 0-264.533333-51.2-362.666667-149.333333S0 648.533333 0 512s51.2-264.533333 149.333333-362.666667S375.466667 0 512 0s264.533333 51.2 362.666667 149.333333S1024 375.466667 1024 512s-51.2 264.533333-149.333333 362.666667S648.533333 1024 512 1024z m0-938.666667C396.8 85.333333 290.133333 128 209.066667 209.066667 128 290.133333 85.333333 396.8 85.333333 512s42.666667 221.866667 123.733334 302.933333S396.8 938.666667 512 938.666667s221.866667-42.666667 302.933333-123.733334S938.666667 627.2 938.666667 512s-42.666667-221.866667-123.733334-302.933333C733.866667 128 627.2 85.333333 512 85.333333z" fill="#ffffff" ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M473.142857 54.514286c-231.2 0-418.742857 187.428571-418.742857 418.742857 0 231.2 187.428571 418.742857 418.742857 418.742857 102.742857 0 196.8-37.028571 269.6-98.285714L918.171429 969.142857l50.514285-50.514286-175.428571-175.657142c61.485714-72.914286 98.514286-167.085714 98.514286-269.828572 0.114286-231.2-187.428571-418.628571-418.628572-418.628571z m0 765.828571c-46.857143 0-92.342857-9.142857-135.085714-27.2-41.371429-17.485714-78.514286-42.514286-110.4-74.4-31.885714-31.885714-56.914286-69.028571-74.4-110.4-18.057143-42.742857-27.2-88.228571-27.2-135.085714s9.142857-92.342857 27.2-135.085714c17.485714-41.371429 42.514286-78.514286 74.4-110.4 31.885714-31.885714 69.028571-56.914286 110.4-74.4 42.742857-18.057143 88.228571-27.2 135.085714-27.2s92.342857 9.142857 135.085714 27.2c41.371429 17.485714 78.514286 42.514286 110.4 74.4 31.885714 31.885714 56.914286 69.028571 74.4 110.4 18.057143 42.742857 27.2 88.228571 27.2 135.085714s-9.142857 92.342857-27.2 135.085714c-17.485714 41.371429-42.514286 78.514286-74.4 110.4s-69.028571 56.914286-110.4 74.4c-42.742857 18.057143-88.228571 27.2-135.085714 27.2z" fill="#c7c9d3" ></path></symbol></svg>', function(n) {
        var t = (t = document.getElementsByTagName("script"))[t.length - 1], e = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
        if (!t) {
            var c, i, o, l, f, s = function(t, e) {
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
            c = function() {
                var t, e = document.createElement("div");
                e.innerHTML = n._iconfont_svg_string_4319158, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e));
            }, document.addEventListener ? ~[
                "complete",
                "loaded",
                "interactive"
            ].indexOf(document.readyState) ? setTimeout(c, 0) : (i = function() {
                document.removeEventListener("DOMContentLoaded", i, !1), c();
            }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = c, l = n.document, f = !1, a(), l.onreadystatechange = function() {
                "complete" == l.readyState && (l.onreadystatechange = null, d());
            });
        }
        function d() {
            f || (f = !0, o());
        }
        function a() {
            try {
                l.documentElement.doScroll("left");
            } catch (t) {
                return void setTimeout(a, 50);
            }
            d();
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
},
"edeb1d28": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Dialog", {
        enumerable: true,
        get: function() {
            return Dialog;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _jsxruntime = farmRequire("892c81fb");
    var _react = farmRequire("d9571927");
    var _dialogmodulescss = _interop_require_default._(farmRequire("779af01c"));
    const Dialog = (props)=>{
        const dialogRef = (0, _react.useRef)();
        const onClickOutside = (e)=>{
            if (props.onClickOutside && !dialogRef?.current?.contains(e.target)) {
                props.onClickOutside();
            }
        };
        (0, _react.useEffect)(()=>{
            document.addEventListener("click", onClickOutside);
            return ()=>document.removeEventListener("click", onClickOutside);
        }, []);
        return (0, _jsxruntime.jsx)("div", {
            className: [
                props.className,
                _dialogmodulescss.default.dialog
            ].filter((x)=>x).join(" "),
            children: (0, _jsxruntime.jsxs)("div", {
                ref: dialogRef,
                className: [
                    _dialogmodulescss.default["dialog__inner"],
                    "dialog__inner"
                ].join(" "),
                children: [
                    (0, _jsxruntime.jsx)("div", {
                        className: "dialog__header",
                        children: props.header
                    }),
                    (0, _jsxruntime.jsx)("div", {
                        className: "dialog__body",
                        children: props.children
                    })
                ]
            })
        });
    };
},
"fa5afec0": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "ShowCase", {
        enumerable: true,
        get: function() {
            return ShowCase;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _jsxruntime = farmRequire("892c81fb");
    var _react = farmRequire("d9571927");
    var _dialog = farmRequire("03887fe2");
    var _frame = farmRequire("fb0b54ac");
    var _icon = farmRequire("bc9e4543");
    var _showCasemodulescss = _interop_require_default._(farmRequire("9e553abd"));
    const ShowCase = (props)=>{
        const hasTags = props.options.tags && props.options.tags.length > 0;
        const [dialogVisiable, setDialogVisiable] = (0, _react.useState)(true);
        return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                dialogVisiable ? (0, _jsxruntime.jsx)(_dialog.Dialog, {
                    header: (0, _jsxruntime.jsx)("p", {
                        children: "hello"
                    }),
                    onClickOutside: ()=>setDialogVisiable(false),
                    children: (0, _jsxruntime.jsx)("span", {
                        children: "hello"
                    })
                }) : undefined,
                (0, _jsxruntime.jsxs)("div", {
                    className: _showCasemodulescss.default["show-case"],
                    children: [
                        (0, _jsxruntime.jsxs)("div", {
                            className: _showCasemodulescss.default["frame__wrapper"],
                            children: [
                                (0, _jsxruntime.jsx)(_frame.Frame, {
                                    className: _showCasemodulescss.default.frame,
                                    html: props.options.html,
                                    css: props.options.css,
                                    js: props.options.js
                                }),
                                (0, _jsxruntime.jsx)("div", {
                                    className: _showCasemodulescss.default["frame__btn"],
                                    children: (0, _jsxruntime.jsx)(_icon.Icon, {
                                        name: "expand"
                                    })
                                })
                            ]
                        }),
                        (0, _jsxruntime.jsx)("p", {
                            className: _showCasemodulescss.default.title,
                            children: props.options.title
                        }),
                        hasTags ? (0, _jsxruntime.jsx)("p", {
                            className: _showCasemodulescss.default.tags,
                            children: props.options.tags?.join("/")
                        }) : undefined
                    ]
                })
            ]
        });
    };
},
"fb0b54ac": function(module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("2ea370be"), exports);
},});
//# sourceMappingURL=index_84f0.384b56d5.js.map