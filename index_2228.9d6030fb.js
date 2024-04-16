(function(_){for(var r in _){_[r].__farm_resource_pot__='index_2228.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"016f013b":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'boxModel.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "253673e4": function(e, n, t, i) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return s;
                }
            });
            let s = `<section>
<h1>
  'width: 100%;' represents the proportion of the content area of the child box to the content area of the parent box.
  This would not be affected by box-sizing.
</h1>
<hr/>

<div class="parent">
  <div class="child"></div>
</div>
</section>

<section>
<h1>
Padding, margin and border of the inline element would not push away surrounding elements vertically.
</h1>
<hr/>

<p class="p1">
  <span class="inline-1">inline-1</span>
  <span class="inline-2">inline-2</span>
  <p class="p2">p2</p>
</p>
</section>
`;
        },
        "2e3d6988": function(e, t, l, c) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o;
                }
            });
            let s = l("@swc/helpers/_/_interop_require_default"), a = s._(l("d82e6e42")), d = s._(l("253673e4")), r = s._(l("abd82204")), n = s._(l("92cc28ef")), o = {
                title: "box model",
                desc: "css box model characterization",
                category: "css",
                tags: [
                    "standard"
                ],
                html: d.default,
                css: r.default + a.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: d.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: n.default
                    }
                ]
            };
        },
        "92cc28ef": function(e, r, d, i) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            let n = `.parent {
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 10px solid black;
  background-color: green;
}

.child {
  width: 100%;
  height: 100%;
  background-color: red;
}

.inline-1 {
  padding: 10px;
  margin: 10px;
  border: 10px solid black;
}
`;
        },
        "abd82204": function(e, r, d, i) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            let n = `.parent {
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 10px solid black;
  background-color: green;
}

.child {
  width: 100%;
  height: 100%;
  background-color: red;
}

.inline-1 {
  padding: 10px;
  margin: 10px;
  border: 10px solid black;
}`;
        }
    });
}
,
"03887fe2":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("edeb1d28"), exports);
}
,
"092f3b3b":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "icon": `icon-63d13a8c`
    };
}
,
"0c7ee846":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("824607c6"), exports);
}
,
"11dd513f":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "useDebounce", {
        enumerable: true,
        get: function() {
            return useDebounce;
        }
    });
    const useDebounce = (fn, options)=>{
        let lastTriggerTime;
        let timer;
        const fixedOptions = {
            waitTime: 500,
            ...options ?? {}
        };
        const debouncedFn = (...args)=>{
            const now = new Date().getTime();
            if (lastTriggerTime && lastTriggerTime + fixedOptions.waitTime > now) {
                clearTimeout(timer);
            }
            timer = setTimeout(()=>fn(...args), fixedOptions.waitTime);
            lastTriggerTime = now;
        };
        return debouncedFn;
    };
}
,
"14a92e63":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("554343aa"), exports);
}
,
"1e81784d":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _debounce = farmRequire("11dd513f");
    const _input = farmRequire("6e9a280b");
    const _showCase = farmRequire("786b7de5");
    const _csscomponents = _interop_require_default._(farmRequire("23ec4682"));
    const _react = farmRequire("d9571927");
    const _mainmodulescss = _interop_require_default._(farmRequire("703aab8a"));
    const Main = ()=>{
        const match = (a, b)=>a.toLowerCase().includes(b.toLowerCase());
        const searchChange = (0, _debounce.useDebounce)((value)=>{
            setCases(allCases.filter((x)=>{
                if (match(x.title, value)) {
                    return true;
                }
                if (x.tags?.find((x)=>match(x, value))) {
                    return true;
                }
                if (match(x.category, value)) {
                    return true;
                }
                return false;
            }));
        });
        const allCases = _csscomponents.default;
        const [cases, setCases] = (0, _react.useState)(allCases);
        return (0, _jsxruntime.jsxs)("div", {
            className: _mainmodulescss.default.main,
            children: [
                (0, _jsxruntime.jsx)(_input.Input, {
                    onChange: searchChange,
                    placeholder: "Name/Category/Tag"
                }),
                (0, _jsxruntime.jsx)("div", {
                    className: _mainmodulescss.default.showcases,
                    children: cases.map((options, i)=>(0, _jsxruntime.jsx)(_showCase.ShowCase, {
                            options: options
                        }, i))
                })
            ]
        });
    };
}
,
"1fb2c2db":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _icon = farmRequire("bc9e4543");
    const _inputmodulescss = _interop_require_default._(farmRequire("8c2a1c95"));
    const Input = (props)=>{
        const onChange = (event)=>props.onChange && props.onChange(event.target?.value);
        return (0, _jsxruntime.jsxs)("div", {
            className: _inputmodulescss.default.input,
            children: [
                (0, _jsxruntime.jsx)(_icon.Icon, {
                    className: _inputmodulescss.default['input__prefix'],
                    name: "search"
                }),
                (0, _jsxruntime.jsx)("input", {
                    className: _inputmodulescss.default['input__inner'],
                    type: "text",
                    placeholder: props.placeholder,
                    onChange: onChange
                })
            ]
        });
    };
}
,
"23ec4682":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    farmRequire("5384d819");
    farmRequire("cf963046");
    farmRequire("016f013b");
    farmRequire("b48914d1");
    farmRequire("b96493c0");
    farmRequire("63d7ee65");
    farmRequire("8e4d7570");
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'index_03e9.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "953dfae2": function(e, t, f, u) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i;
                }
            });
            let a = f("@swc/helpers/_/_interop_require_default"), d = a._(f("d9ee3aa5")), l = a._(f("2e3d6988")), r = a._(f("f3e012b0")), _ = a._(f("4aa6b49a")), n = a._(f("5f78ff55")), c = a._(f("3650c57d")), i = [
                d.default,
                l.default,
                r.default,
                _.default,
                n.default,
                c.default
            ];
        },
        "d82e6e42": function(e, t, i, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            let n = `section {
  position: relative;
  padding: 16px;
  margin: 2px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}

section + section {
  margin-top: 24px;
}

section h1 {
  font-size: 18px;
}`;
        }
    });
    (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.setInitialLoadedResources([
        'anonymousBlockBox.4b7cb13e.js',
        'boxModel.35d8e581.js',
        'boxSize.e26d4008.js',
        'formattingContext.135e603f.js',
        'minContent.6d845daf.js',
        'wavyUnderline.13f8857c.js'
    ]);
    (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.setDynamicModuleResourcesMap({});
    var farmModuleSystem = (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__;
    farmModuleSystem.bootstrap();
    var entry = farmModuleSystem.require("953dfae2");
    const _default = entry.default || entry;
}
,
"2856263c":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "frame": `frame-8320ce61`
    };
}
,
"2bcde850":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "tab": `tab-a966ba4c`,
        "tab--active": `tab--active-a966ba4c`,
        "tabs": `tabs-a966ba4c`
    };
}
,
"2c6e69f1":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _jsxruntime = farmRequire("892c81fb");
    farmRequire("c5a7f327");
    "";
    "";
    "";
    "";
    const _react = farmRequire("d9571927");
    const _client = farmRequire("b62921c1");
    const _App = farmRequire("93843902");
    const _notify = farmRequire("44f760a0");
    if (!document.head.attachShadow) {
        (0, _notify.notify)('error', 'Your browser does not support shadow dom. Please use the another browser supporting it instead.');
    }
    (0, _client.createRoot)(document.querySelector('#app')).render((0, _jsxruntime.jsx)(_react.StrictMode, {
        children: (0, _jsxruntime.jsx)(_App.App, {})
    }));
}
,
"2ea370be":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _react = farmRequire("d9571927");
    const _framemodulescss = _interop_require_default._(farmRequire("2856263c"));
    const Frame = (props)=>{
        const containerRef = (0, _react.useRef)();
        let shadowRoot;
        (0, _react.useEffect)(()=>{
            if (!shadowRoot) {
                if (containerRef?.current?.shadowRoot) {
                    shadowRoot = containerRef.current.shadowRoot;
                } else {
                    shadowRoot = containerRef.current?.attachShadow({
                        mode: 'open'
                    });
                }
            }
            if (!shadowRoot) {
                return;
            }
            while(shadowRoot.firstChild){
                shadowRoot.removeChild(shadowRoot.firstChild);
            }
            if (props.html) {
                shadowRoot.innerHTML = props.html;
            }
            if (props.css) {
                const style = document.createElement('style');
                style.textContent = props.css;
                shadowRoot.appendChild(style);
            }
            if (props.js) {
                const script = document.createElement('script');
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
            className: (0, _class.classes)(_framemodulescss.default.frame, props.className)
        });
    };
}
,
"3a2b0339":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "classes", {
        enumerable: true,
        get: function() {
            return classes;
        }
    });
    const classes = (...args)=>args.filter((x)=>typeof x === 'string').join(' ');
}
,
"3ef60bee":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _react = farmRequire("d9571927");
    const _icon = farmRequire("bc9e4543");
    const _layoutmodulescss = _interop_require_default._(farmRequire("5d89d03e"));
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
            className: (0, _class.classes)(_layoutmodulescss.default.layout, collapseNav ? _layoutmodulescss.default['layout--nav-collapsed'] : undefined),
            children: [
                (0, _jsxruntime.jsxs)("nav", {
                    className: (0, _class.classes)(_layoutmodulescss.default.nav, collapseNav ? _layoutmodulescss.default['nav-collapsed'] : undefined),
                    onClick: onClickNav,
                    children: [
                        collapseNav ? undefined : props.nav,
                        collapseNav ? undefined : (0, _jsxruntime.jsx)("div", {
                            className: _layoutmodulescss.default['collapse-btn'],
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
}
,
"44f760a0":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("945ecf99"), exports);
}
,
"48529b60":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = "/JetBrainsMono-BoldItalic.3a013466-65790d.woff2";
}
,
"5384d819":function  (module, exports, farmRequire, farmDynamicRequire) {
    (globalThis || window || global)['9a630259e374223af4de8e088557eb01'] = {
        __FARM_TARGET_ENV__: 'browser'
    };
    (function(r, e) {
        var t = {};
        function n(r) {
            return Promise.resolve(o(r));
        }
        function o(e) {
            if (t[e]) return t[e].exports;
            var i = {
                id: e,
                exports: {}
            };
            r[e](i, i.exports, o, n);
            t[e] = i;
            return i.exports;
        }
        o(e);
    })({
        "106acf78": function(module, exports, farmRequire, farmDynamicRequire) {
            "use strict";
            function _export(e, t) {
                for(var r in t)Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
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
            let __farm_global_this__ = eval("(globalThis || window || global)['9a630259e374223af4de8e088557eb01']"), targetEnv = __farm_global_this__.__FARM_TARGET_ENV__ || "node", isBrowser = "browser" === targetEnv && (globalThis || window).document;
            class ResourceLoader {
                moduleSystem;
                _loadedResources;
                _loadingResources;
                publicPaths;
                constructor(e, t){
                    this.moduleSystem = e, this._loadedResources = {}, this._loadingResources = {}, this.publicPaths = t;
                }
                load(e, t = 0) {
                    if (!isBrowser) {
                        let t = this.moduleSystem.pluginContainer.hookBail("loadResource", e);
                        if (t) return t.then((t)=>{
                            if (!t.success && t.retryWithDefaultResourceLoader) {
                                if ("script" === e.type) return this._loadScript(`./${e.path}`);
                                if ("link" === e.type) return this._loadLink(`./${e.path}`);
                            } else if (!t.success) throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${t.err}`);
                        });
                        if ("script" === e.type) return this._loadScript(`./${e.path}`);
                        if ("link" === e.type) return this._loadLink(`./${e.path}`);
                    }
                    let r = this.publicPaths[t], o = `${r.endsWith("/") ? r.slice(0, -1) : r}/${e.path}`;
                    if (this._loadedResources[e.path]) return;
                    if (this._loadingResources[e.path]) return this._loadingResources[e.path];
                    let s = this.moduleSystem.pluginContainer.hookBail("loadResource", e);
                    return s ? s.then((r)=>{
                        if (r.success) this.setLoadedResource(e.path);
                        else if (r.retryWithDefaultResourceLoader) return this._load(o, e, t);
                        else throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${r.err}`);
                    }) : this._load(o, e, t);
                }
                setLoadedResource(e) {
                    this._loadedResources[e] = !0;
                }
                isResourceLoaded(e) {
                    return this._loadedResources[e];
                }
                _load(e, t, r) {
                    let o = Promise.resolve();
                    return "script" === t.type ? o = this._loadScript(e) : "link" === t.type && (o = this._loadLink(e)), this._loadingResources[t.path] = o, o.then(()=>{
                        this._loadedResources[t.path] = !0;
                    }).catch((o)=>{
                        if (console.warn(`[Farm] Failed to load resource "${e}" using publicPath: ${this.publicPaths[r]}`), ++r < this.publicPaths.length) return this._load(e, t, r);
                        throw Error(`[Farm] Failed to load resource: "${t.path}, type: ${t.type}". ${o}`);
                    }), o;
                }
                _loadScript(e) {
                    return isBrowser ? new Promise((t, r)=>{
                        let o = document.createElement("script");
                        o.src = e, document.body.appendChild(o), o.onload = ()=>{
                            t();
                        }, o.onerror = (e)=>{
                            r(e);
                        };
                    }) : import(e);
                }
                _loadLink(e) {
                    return isBrowser ? new Promise((t, r)=>{
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
        "1d6aa25d": function(e, t, i, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "FarmRuntimePluginContainer", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            class n {
                plugins = [];
                constructor(e){
                    this.plugins = e;
                }
                hookSerial(e, ...t) {
                    for (let i of this.plugins){
                        let l = i[e];
                        l && l.apply(i, t);
                    }
                }
                hookBail(e, ...t) {
                    for (let i of this.plugins){
                        let l = i[e];
                        if (l) {
                            let e = l.apply(i, t);
                            if (e) return e;
                        }
                    }
                }
            }
        },
        "22685227": function(e, t, n, u) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var n in t)Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                });
            }(t, {
                ModuleSystem: function() {
                    return l.ModuleSystem;
                },
                Plugin: function() {
                    return r.FarmRuntimePlugin;
                }
            });
            let _ = n("d30e4b5a")._(n("688d37b3")), l = n("f0e62833"), r = n("1d6aa25d");
            n("106acf78").__farm_global_this__.__farm_module_system__ = (function() {
                let e = new l.ModuleSystem;
                return function() {
                    return e;
                };
            })()(), (globalThis || window || global)["9a630259e374223af4de8e088557eb01"].__farm_module_system__.setPlugins([
                _.default
            ]);
        },
        "31e19113": function(e, t, r, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Module", {
                enumerable: !0,
                get: function() {
                    return s;
                }
            });
            class s {
                id;
                exports;
                resource_pot;
                meta;
                require;
                constructor(e, t){
                    this.id = e, this.exports = {}, this.meta = {
                        env: {}
                    }, this.require = t;
                }
            }
        },
        "341af280": function(e, t, r, n) {
            "use strict";
            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap, r = new WeakMap;
                return (o = function(e) {
                    return e ? r : t;
                })(e);
            }
            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = o(t);
                if (r && r.has(e)) return r.get(e);
                var n = {
                    __proto__: null
                }, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var f in e)if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
                    var i = u ? Object.getOwnPropertyDescriptor(e, f) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, f, i) : n[f] = e[f];
                }
                return n.default = e, r && r.set(e, n), n;
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
                    return u;
                },
                _interop_require_wildcard: function() {
                    return u;
                }
            });
        },
        "688d37b3": function(e, t, o, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let u = "undefined" != typeof globalThis ? globalThis : window, d = {
                name: "farm-runtime-import-meta",
                _moduleSystem: {},
                bootstrap (e) {
                    this._moduleSystem = e;
                },
                moduleCreated (e) {
                    e.meta.env = {
                        ...{
                            NODE_ENV: "production"
                        } ?? {},
                        mode: "production",
                        dev: !1,
                        prod: !0
                    };
                    let t = this._moduleSystem.publicPaths?.[0] || "", { location: o } = u, r = o ? `${o.protocol}//${o.host}${t.replace(/\/$/, "")}/${e.id}?t=${Date.now()}` : e.resource_pot;
                    e.meta.url = r;
                }
            };
        },
        "784427c8": function(e, t, n, r) {
            "use strict";
            function o(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n];
                        }
                    });
                }), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), function(e, t) {
                for(var n in t)Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                });
            }(t, {
                _: function() {
                    return o;
                },
                _export_star: function() {
                    return o;
                }
            });
        },
        "d30e4b5a": function(e, n, t, r) {
            "use strict";
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), function(e, n) {
                for(var t in n)Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n[t]
                });
            }(n, {
                _: function() {
                    return u;
                },
                _interop_require_default: function() {
                    return u;
                }
            });
        },
        "f0e62833": function(e, t, r, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ModuleSystem", {
                enumerable: !0,
                get: function() {
                    return c;
                }
            });
            let s = r("31e19113"), o = r("1d6aa25d"), a = r("106acf78"), l = r("d30e4b5a"), u = r("341af280"), n = r("784427c8"), h = globalThis || window, d = {
                "@swc/helpers/_/_interop_require_default": {
                    default: l._interop_require_default,
                    _: l._interop_require_default
                },
                "@swc/helpers/_/_interop_require_wildcard": {
                    default: u._interop_require_wildcard,
                    _: u._interop_require_wildcard
                },
                "@swc/helpers/_/_export_star": {
                    default: n._export_star,
                    _: n._export_star
                }
            };
            class c {
                modules;
                cache;
                externalModules;
                publicPaths;
                dynamicModuleResourcesMap;
                resourceLoader;
                pluginContainer;
                targetEnv;
                constructor(){
                    this.modules = {}, this.cache = {}, this.publicPaths = [], this.dynamicModuleResourcesMap = {}, this.resourceLoader = new a.ResourceLoader(this, this.publicPaths), this.pluginContainer = new o.FarmRuntimePluginContainer([]), this.targetEnv = a.targetEnv, this.externalModules = {};
                }
                require(e, t = !1) {
                    if (d[e]) return d[e];
                    if (this.cache[e] && !this.pluginContainer.hookBail("readModuleCache", this.cache[e])) return this.cache[e].exports;
                    let r = this.modules[e];
                    if (!r) {
                        if (this.externalModules[e]) {
                            let r = this.externalModules[e];
                            return t && r.default || r;
                        }
                        return ("node" === this.targetEnv || !a.isBrowser) && nodeRequire ? nodeRequire(e) : (this.pluginContainer.hookSerial("moduleNotFound", e), console.debug(`[Farm] Module "${e}" is not registered`), {});
                    }
                    let i = new s.Module(e, this.require.bind(this));
                    return i.resource_pot = r.__farm_resource_pot__, this.pluginContainer.hookSerial("moduleCreated", i), this.cache[e] = i, (globalThis || global || window || {}).require || ((globalThis || global || window || {
                        require: undefined
                    }).require = this.require.bind(this)), r(i, i.exports, this.require.bind(this), this.farmDynamicRequire.bind(this)), this.pluginContainer.hookSerial("moduleInitialized", i), i.exports;
                }
                farmDynamicRequire(e) {
                    if (this.modules[e]) {
                        let t = this.require(e);
                        return t.__farm_async ? t.default : Promise.resolve(t);
                    }
                    let t = this.dynamicModuleResourcesMap[e];
                    if (!t || 0 === t.length) throw Error(`Dynamic imported module "${e}" does not belong to any resource`);
                    return Promise.all(t.map((e)=>this.resourceLoader.load(e))).then(()=>{
                        if (!this.modules[e]) throw Error(`Dynamic imported module "${e}" is not registered.`);
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
                    return !!this.modules[e] && (this.clearCache(e), delete this.modules[e], !0);
                }
                getModuleUrl(e) {
                    let t = this.publicPaths[0] ?? "";
                    return h.location ? `${h.location.protocol}//${h.location.host}${t.endsWith("/") ? t.slice(0, -1) : t}/${this.modules[e].__farm_resource_pot__}` : this.modules[e].__farm_resource_pot__;
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
                addPlugin(e) {
                    this.pluginContainer.plugins.every((t)=>t.name !== e.name) && this.pluginContainer.plugins.push(e);
                }
                removePlugin(e) {
                    this.pluginContainer.plugins = this.pluginContainer.plugins.filter((t)=>t.name !== e);
                }
                setExternalModules(e) {
                    Object.assign(this.externalModules, e || {});
                }
                bootstrap() {
                    this.pluginContainer.hookSerial("bootstrap", this);
                }
            }
        }
    }, "22685227");
}
,
"554343aa":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Tabs", {
        enumerable: true,
        get: function() {
            return Tabs;
        }
    });
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _react = farmRequire("d9571927");
    const _tabsmodulescss = _interop_require_default._(farmRequire("2bcde850"));
    const Tabs = (props)=>{
        const [curTab, setCurTab] = (0, _react.useState)();
        const onClickTab = (tab)=>{
            if (curTab !== tab) {
                setCurTab(tab);
                props.onTabChange && props.onTabChange(tab);
            } else {
                setCurTab(undefined);
                props.onTabChange && props.onTabChange(undefined);
            }
        };
        return (0, _jsxruntime.jsx)("div", {
            className: (0, _class.classes)(_tabsmodulescss.default.tabs, props.className),
            children: props.tabs.map((x)=>(0, _jsxruntime.jsx)("span", {
                    className: (0, _class.classes)(_tabsmodulescss.default.tab, curTab === x ? _tabsmodulescss.default['tab--active'] : undefined),
                    onClick: ()=>onClickTab(x),
                    children: x
                }, x))
        });
    };
}
,
"56fdf8a1":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _footermodulescss = _interop_require_default._(farmRequire("67c07953"));
    const Footer = ()=>{
        const accessGithub = ()=>{
            window.open('https://github.com/niuiic/gallery', '_blank');
        };
        return (0, _jsxruntime.jsxs)("div", {
            className: _footermodulescss.default.footer,
            children: [
                (0, _jsxruntime.jsxs)("p", {
                    className: _footermodulescss.default.text,
                    children: [
                        'View on ',
                        (0, _jsxruntime.jsx)("span", {
                            className: (0, _class.classes)(_footermodulescss.default.link, 'o-btn'),
                            onClick: accessGithub,
                            children: "github"
                        })
                    ]
                }),
                (0, _jsxruntime.jsx)("p", {
                    className: _footermodulescss.default.text,
                    children: "Copyright © 2023-present niuiic"
                })
            ]
        });
    };
}
,
"5d89d03e":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "collapse-btn": `collapse-btn-4122cc82`,
        "dyn-bg": `dyn-bg-4122cc82`,
        "footer": `footer-4122cc82`,
        "layout": `layout-4122cc82`,
        "layout--nav-collapsed": `layout--nav-collapsed-4122cc82`,
        "main": `main-4122cc82`,
        "nav": `nav-4122cc82`,
        "nav-collapsed": `nav-collapsed-4122cc82`
    };
}
,
"63d7ee65":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'minContent.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "533e8601": function(e, t, n, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let d = `.box {
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: max-content;
}`;
        },
        "5f78ff55": function(e, t, l, c) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f;
                }
            });
            let n = l("@swc/helpers/_/_interop_require_default"), s = n._(l("d82e6e42")), a = n._(l("fe19a1e4")), d = n._(l("533e8601")), r = n._(l("e8ed8fc5")), f = {
                title: "min-content",
                desc: "css width min-content characterization",
                category: "css",
                tags: [
                    "standard"
                ],
                html: a.default,
                css: d.default + s.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: a.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: r.default
                    }
                ]
            };
        },
        "e8ed8fc5": function(e, t, n, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let d = `.box {
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: max-content;
}
`;
        },
        "fe19a1e4": function(e, n, s, i) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return l;
                }
            });
            let l = `<section>
  <h1>The English language is divided into words, and the cjk text is a single character.</h1>
  <hr />

  <div class="box">
    <span>hello world</span>
  </div>

  <div class="box">
    <span>中文</span>
  </div>
</section>

<section>
  <h1>Inline-block elements with defined widths are not split. Also works for inline-flex, inline-grid, etc.</h1>
  <hr />

  <div class="box">
    <span class="inline-block">中文</span>
    <span>中文</span>
  </div>
  <div class="box">
    <span class="inline-block defined-width">中文</span>
    <span>中文</span>
  </div>
</section>
`;
        }
    });
}
,
"67c07953":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "bg-wave-flow": `bg-wave-flow-adf5cea1`,
        "footer": `footer-adf5cea1`,
        "link": `link-adf5cea1`,
        "text": `text-adf5cea1`
    };
}
,
"6e9a280b":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("1fb2c2db"), exports);
}
,
"703aab8a":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "main": `main-1c51b40e`,
        "showcases": `showcases-1c51b40e`
    };
}
,
"779af01c":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "dialog": `dialog-4ca616de`,
        "dialog__inner": `dialog__inner-4ca616de`
    };
}
,
"786b7de5":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("fa5afec0"), exports);
}
,
"7955362b":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _highlight = _interop_require_default._(farmRequire("c85d2dfa"));
    const _react = farmRequire("d9571927");
    const _codemodulescss = _interop_require_default._(farmRequire("c86c3cd1"));
    const Code = (props)=>{
        const codeRef = (0, _react.useRef)();
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
        return (0, _jsxruntime.jsx)("pre", {
            ref: codeRef,
            className: _codemodulescss.default.code
        });
    };
}
,
"7dfa112b":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("3ef60bee"), exports);
}
,
"824607c6":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _navmodulescss = _interop_require_default._(farmRequire("a81951de"));
    const Nav = (props)=>{
        const goHome = ()=>{
            window.location.href = window.location.protocol + '//' + window.location.host;
        };
        return (0, _jsxruntime.jsxs)("div", {
            className: _navmodulescss.default.nav,
            children: [
                (0, _jsxruntime.jsx)("h1", {
                    className: (0, _class.classes)(_navmodulescss.default.title, 'o-btn'),
                    onClick: goHome,
                    children: "Gallery"
                }),
                (0, _jsxruntime.jsx)("h2", {
                    className: _navmodulescss.default.slogan,
                    children: (0, _jsxruntime.jsx)("span", {
                        className: _navmodulescss.default['slogan__inner'],
                        children: "Sharing Ideas"
                    })
                }),
                (0, _jsxruntime.jsx)("ul", {
                    className: _navmodulescss.default.entries,
                    children: props.entries.map((entry)=>(0, _jsxruntime.jsx)("li", {
                            className: (0, _class.classes)(_navmodulescss.default.entry, 'o-btn'),
                            onClick: entry.onClick,
                            children: entry.label
                        }, entry.label))
                })
            ]
        });
    };
}
,
"8c2a1c95":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "input": `input-8e0b9421`,
        "input__inner": `input__inner-8e0b9421`,
        "input__prefix": `input__prefix-8e0b9421`
    };
}
,
"8e4d7570":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'wavyUnderline.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "2e9047b6": function(e, r, t, n) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function() {
                    return a;
                }
            });
            let a = `@keyframes bg-wave-flow {
  from {
    background-position-x: -10px, 0;
  }

  to {
    background-position-x:
      -30px,
      -20px;
  }
}

.text {
  display: inline-block;
  background:
    radial-gradient(circle at 10px -7px, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px) repeat-x,
    radial-gradient(circle at 10px 27px, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px) repeat-x;
  background-position:
    -10px calc(100% + 16px),
    0 calc(100% - 4px);
  background-size: 20px 20px;
  line-height: 16px;
  animation: bg-wave-flow 1s infinite linear;
}
`;
        },
        "3650c57d": function(e, t, l, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r;
                }
            });
            let a = l("@swc/helpers/_/_interop_require_default"), i = a._(l("5a4fa45f")), u = a._(l("3bff51e1")), c = a._(l("2e9047b6")), r = {
                title: "wavy underline",
                desc: "Text wave underline implementated with background animation",
                category: "css",
                tags: [
                    "background",
                    "animation"
                ],
                html: i.default,
                css: u.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: i.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: c.default
                    }
                ]
            };
        },
        "3bff51e1": function(e, r, t, n) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function() {
                    return a;
                }
            });
            let a = `@keyframes bg-wave-flow {
  from {
    background-position-x: -10px, 0;
  }
  to {
    background-position-x: -30px, -20px;
  }
}
.text {
  display: inline-block;
  background: radial-gradient(circle at 10px -7px, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px) repeat-x, radial-gradient(circle at 10px 27px, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px) repeat-x;
  background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
  background-size: 20px 20px;
  line-height: 16px;
  animation: bg-wave-flow 1s infinite linear;
}`;
        },
        "5a4fa45f": function(e, t, n, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u;
                }
            });
            let u = `<span class="text">wavyUnderline</span>
`;
        }
    });
}
,
"93843902":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _jsxruntime = farmRequire("892c81fb");
    const _layout = farmRequire("7dfa112b");
    const _footer = farmRequire("9fd73c3e");
    const _nav = farmRequire("0c7ee846");
    const _Main = farmRequire("1e81784d");
    const App = ()=>(0, _jsxruntime.jsx)(_layout.Layout, {
            nav: (0, _jsxruntime.jsx)(_nav.Nav, {
                entries: []
            }),
            main: (0, _jsxruntime.jsx)(_Main.Main, {}),
            footer: (0, _jsxruntime.jsx)(_footer.Footer, {})
        });
}
,
"945ecf99":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _client = farmRequire("b62921c1");
    const _notifymodulescss = _interop_require_default._(farmRequire("9a22db61"));
    const Notify = (props)=>{
        const className = {
            success: 'notify--success',
            warning: 'notify--warning',
            error: 'notify--error',
            info: 'notify--info'
        }[props.type];
        return (0, _jsxruntime.jsx)("div", {
            className: (0, _class.classes)(_notifymodulescss.default['notify'], _notifymodulescss.default[className]),
            children: props.msg
        });
    };
    function notify(type, msg) {
        if (!msg) {
            return (msg)=>notify(type, msg);
        }
        const container = document.createElement('div');
        container.setAttribute('class', _notifymodulescss.default['notify__wrapper']);
        document.body.appendChild(container);
        (0, _client.createRoot)(container).render((0, _jsxruntime.jsx)(Notify, {
            msg: msg,
            type: type
        }));
        setTimeout(()=>{
            document.body.removeChild(container);
        }, 2000);
    }
}
,
"9a22db61":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "come-out": `come-out-e1ba72d4`,
        "notify": `notify-e1ba72d4`,
        "notify--error": `notify--error-e1ba72d4`,
        "notify--info": `notify--info-e1ba72d4`,
        "notify--success": `notify--success-e1ba72d4`,
        "notify--warning": `notify--warning-e1ba72d4`,
        "notify__wrapper": `notify__wrapper-e1ba72d4`
    };
}
,
"9e553abd":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "category": `category-26443954`,
        "code__wrapper": `code__wrapper-26443954`,
        "desc": `desc-26443954`,
        "dialog": `dialog-26443954`,
        "dialog__body": `dialog__body-26443954`,
        "dialog__header": `dialog__header-26443954`,
        "frame": `frame-26443954`,
        "frame__btn": `frame__btn-26443954`,
        "frame__wrapper": `frame__wrapper-26443954`,
        "frame__wrapper--disactive": `frame__wrapper--disactive-26443954`,
        "info": `info-26443954`,
        "info__left": `info__left-26443954`,
        "showcase": `showcase-26443954`,
        "tabs": `tabs-26443954`,
        "tags": `tags-26443954`,
        "title": `title-26443954`
    };
}
,
"9fd73c3e":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("56fdf8a1"), exports);
}
,
"a81951de":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "change-color": `change-color-52cf36f0`,
        "entries": `entries-52cf36f0`,
        "entry": `entry-52cf36f0`,
        "nav": `nav-52cf36f0`,
        "slogan": `slogan-52cf36f0`,
        "slogan__inner": `slogan__inner-52cf36f0`,
        "title": `title-52cf36f0`
    };
}
,
"ac0a0cbe":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("7955362b"), exports);
}
,
"aedc679a":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = "/JetBrainsMono-Regular.a9cb1cd8-9bdcf2.woff2";
}
,
"b48914d1":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'boxSize.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "0878149f": function(o, e, d, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return t;
                }
            });
            let t = `.parent {
  box-sizing: padding-box;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: red;
}

.child {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent2 {
  width: auto;
  height: 100px;
  padding: 20px;
  background-color: red;
}

.child2 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent3 {
  height: auto;
  padding: 20px;
  background-color: red;
}

.child3 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent4 {
  height: 0;
  min-height: 100px;
  padding: 20px;
  background-color: red;
}

.child4 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent5 {
  position: relative;
  width: 100px;
  padding: 20px;
  background-color: red;
}

.child5 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: yellow;
}`;
        },
        "992f9bd0": function(e, t, i, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s;
                }
            });
            let s = `<section>
  <h1>
    'width: 100%;' normally represents the proportion of the content area of the child box to the content area of the
    container block. This would not be affected by box-sizing.
  </h1>
  <hr />

  <div class="parent">
    <div class="child"></div>
  </div>
</section>

<section>
  <h1>'width: 100%;' works even the value of width property of the container block is auto.</h1>
  <hr />

  <div class="parent2">
    <div class="child2"></div>
  </div>
</section>

<section>
  <h1>'height: 100%;' does not work if the value of height property of the container block is auto.</h1>
  <hr />

  <div class="parent3">
    <div class="child3"></div>
    <span>block3</span>
  </div>
</section>

<section>
  <h1>'height: 100%;' is based on actual values, not set values.</h1>
  <hr />

  <div class="parent4">
    <div class="child4"></div>
    <span>block4</span>
  </div>
</section>

<section>
  <h1>
    In absolute positioning, the reference is the padding box. It works even the value of height property of the
    container block is auto.
  </h1>
  <hr />

  <div class="parent5">
    <div class="child5"></div>
  </div>
</section>
`;
        },
        "e78c92ad": function(o, e, d, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return t;
                }
            });
            let t = `.parent {
  box-sizing: padding-box;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: red;
}

.child {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent2 {
  width: auto;
  height: 100px;
  padding: 20px;
  background-color: red;
}

.child2 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent3 {
  height: auto;
  padding: 20px;
  background-color: red;
}

.child3 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent4 {
  height: 0;
  min-height: 100px;
  padding: 20px;
  background-color: red;
}

.child4 {
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.parent5 {
  position: relative;
  width: 100px;
  padding: 20px;
  background-color: red;
}

.child5 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: yellow;
}
`;
        },
        "f3e012b0": function(e, t, l, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n;
                }
            });
            let a = l("@swc/helpers/_/_interop_require_default"), c = a._(l("d82e6e42")), d = a._(l("992f9bd0")), r = a._(l("0878149f")), f = a._(l("e78c92ad")), n = {
                title: "box size",
                desc: "css box size characterization",
                category: "css",
                tags: [
                    "standard"
                ],
                html: d.default,
                css: r.default + c.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: d.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: f.default
                    }
                ]
            };
        }
    });
}
,
"b96493c0":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'formattingContext.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "3d6ac7fd": function(e, i, t, n) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let d = `<section>
  <h3>
    When a formatting context is created, its boundary is at the border position of the corresponding element.
    <br />
    Creating BFC does not affect margin of the element. The margin of parent element and the margin of child element are
    still in the same BFC.
  </h3>
  <hr />

  <div class="parent1">
    <div class="child1"></div>
  </div>
</section>

<section>
  <h1>
    The margin of parent element is in the outer BFC, and the margin of child element is in the BFC created by the
    parent element.
  </h1>
  <hr />

  <div class="parent2">
    <div class="child2"></div>
  </div>
</section>

<section>
  <h1>BFC created by child4 isolates the margin of child3 and the margin of child5.</h1>
  <hr />

  <div class="parent3">
    <div class="child3"></div>
    <div class="child4">
      <div class="child5"></div>
    </div>
  </div>
</section>

<section>
  <h1>BFC created by child6 isolates its block margins.</h1>
  <hr />

  <div class="parent4">
    <div class="child6"></div>
  </div>
</section>
`;
        },
        "4aa6b49a": function(e, t, c, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f;
                }
            });
            let l = c("@swc/helpers/_/_interop_require_default"), d = l._(c("d82e6e42")), s = l._(c("3d6ac7fd")), n = l._(c("b4fd3cbd")), r = l._(c("6d7accd3")), f = {
                title: "formatting context",
                desc: "css formatting context characterization",
                category: "css",
                tags: [
                    "standard"
                ],
                html: s.default,
                css: n.default + d.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: s.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: r.default
                    }
                ]
            };
        },
        "6d7accd3": function(r, e, o, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let d = `.parent1 {
  margin-top: 10px;
  background: red;
}

.child1 {
  display: flow-root;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: green;
}

.parent2 {
  display: flow-root;
  margin-top: 10px;
  background: red;
}

.child2 {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: green;
}

.parent3 {
  background: red;
}

.child3 {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background: green;
}

.child4 {
  display: flow-root;
}

.child5 {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: yellow;
}

.parent4 {
  display: flow-root;
  background: red;
}

.child6 {
  display: flow-root;
  margin-block: 10px;
}
`;
        },
        "b4fd3cbd": function(r, e, o, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return d;
                }
            });
            let d = `.parent1 {
  margin-top: 10px;
  background: red;
}

.child1 {
  display: flow-root;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: green;
}

.parent2 {
  display: flow-root;
  margin-top: 10px;
  background: red;
}

.child2 {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: green;
}

.parent3 {
  background: red;
}

.child3 {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background: green;
}

.child4 {
  display: flow-root;
}

.child5 {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background: yellow;
}

.parent4 {
  display: flow-root;
  background: red;
}

.child6 {
  display: flow-root;
  margin-block: 10px;
}`;
        }
    });
}
,
"bc9e4543":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("e8703c4f"), exports);
}
,
"c5a7f327":function  (module, exports, farmRequire, farmDynamicRequire) {
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
}
,
"c711f3e9":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = "/JetBrainsMono-Bold.c503cc5e-8c856e.woff2";
}
,
"c86c3cd1":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _default = {
        "code": `code-deed1b03`
    };
}
,
"cf963046":function  (module, exports, farmRequire, farmDynamicRequire) {
    (function(_) {
        for(var r in _){
            _[r].__farm_resource_pot__ = 'anonymousBlockBox.js';
            (globalThis || window || global)['9a630259e374223af4de8e088557eb01'].__farm_module_system__.register(r, _[r]);
        }
    })({
        "4386746a": function(e, n, o, l) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return i;
                }
            });
            let i = `<section>
  <h1>
    If a block container box has a box-level box inside it, then we force it to have only block-level boxes inside it.
    <br />
    There is an anonymous block box around inline box.
  </h1>
  <hr />

  <div>
    it's a block container box
    <p>this is a block level box</p>
    <span class="inline-level-box">this is a inline level box</span>
  </div>
</section>

<section>
  <h1>
    An in-flow block-level box would break down the line box.
    <br />
    Disconnected first and second halves would be wrapped by an anonymous block box.
  </h1>
  <hr />

  <p class="line-box">
    <span class="inline-box">I'm in a line box</span>
    <span class="in-flow-block-level-box">this is a block box</span>
    <span class="inline-box">after</span>
  </p>
</section>
`;
        },
        "9370d78c": function(e, l, i, n) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return o;
                }
            });
            let o = `.inline-level-box {
  border: 1px solid red;
}

.in-flow-block-level-box {
  display: block;
}

.inline-box {
  border: 1px solid red;
}

.line-box {
  display: inline;
}
`;
        },
        "9c741c8f": function(e, l, i, n) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return o;
                }
            });
            let o = `.inline-level-box {
  border: 1px solid red;
}

.in-flow-block-level-box {
  display: block;
}

.inline-box {
  border: 1px solid red;
}

.line-box {
  display: inline;
}`;
        },
        "d9ee3aa5": function(e, t, l, s) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u;
                }
            });
            let a = l("@swc/helpers/_/_interop_require_default"), c = a._(l("d82e6e42")), n = a._(l("4386746a")), o = a._(l("9c741c8f")), d = a._(l("9370d78c")), u = {
                title: "anonymous block box",
                desc: "how anonymous boxes are generated",
                category: "css",
                tags: [
                    "standard"
                ],
                html: n.default,
                css: o.default + c.default,
                code: [
                    {
                        label: "html",
                        filetype: "html",
                        content: n.default
                    },
                    {
                        label: "scss",
                        filetype: "scss",
                        content: d.default
                    }
                ]
            };
        }
    });
}
,
"e8703c4f":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _iconmodulescss = _interop_require_default._(farmRequire("092f3b3b"));
    const Icon = (props)=>(0, _jsxruntime.jsx)("svg", {
            className: (0, _class.classes)(_iconmodulescss.default.icon, props.className ?? ''),
            "aria-hidden": "true",
            children: (0, _jsxruntime.jsx)("use", {
                xlinkHref: `#icon-${props.name}`
            })
        });
}
,
"edeb1d28":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _react = farmRequire("d9571927");
    const _dialogmodulescss = _interop_require_default._(farmRequire("779af01c"));
    const Dialog = (props)=>{
        const dialogRef = (0, _react.useRef)();
        const onClickOutside = (0, _react.useCallback)((e)=>{
            if (props.onClickOutside && !dialogRef?.current?.contains(e.target)) {
                props.onClickOutside();
            }
        }, [
            props.onClickOutside
        ]);
        (0, _react.useEffect)(()=>{
            setTimeout(()=>document.addEventListener('click', onClickOutside), 0);
            return ()=>document.removeEventListener('click', onClickOutside);
        }, []);
        return (0, _jsxruntime.jsx)("div", {
            className: (0, _class.classes)(props.className, _dialogmodulescss.default.dialog),
            children: (0, _jsxruntime.jsx)("div", {
                ref: dialogRef,
                className: (0, _class.classes)(_dialogmodulescss.default['dialog__inner'], 'dialog__inner'),
                children: props.children
            })
        });
    };
}
,
"fa5afec0":function  (module, exports, farmRequire, farmDynamicRequire) {
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
    const _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    const _jsxruntime = farmRequire("892c81fb");
    const _class = farmRequire("3a2b0339");
    const _react = farmRequire("d9571927");
    const _code = farmRequire("ac0a0cbe");
    const _dialog = farmRequire("03887fe2");
    const _frame = farmRequire("fb0b54ac");
    const _icon = farmRequire("bc9e4543");
    const _tabs = farmRequire("14a92e63");
    const _showCasemodulescss = _interop_require_default._(farmRequire("9e553abd"));
    const ShowCase = (props)=>{
        const hasTags = props.options.tags && props.options.tags.length > 0;
        const [dialogVisiable, setDialogVisiable] = (0, _react.useState)(false);
        const showDialog = ()=>setDialogVisiable(true);
        const closeDialog = ()=>{
            setDialogVisiable(false);
            setShowCode(false);
        };
        const Info = (0, _react.useCallback)(()=>(0, _jsxruntime.jsxs)("div", {
                className: _showCasemodulescss.default.info,
                children: [
                    (0, _jsxruntime.jsxs)("div", {
                        className: _showCasemodulescss.default.info__left,
                        children: [
                            (0, _jsxruntime.jsx)("p", {
                                className: _showCasemodulescss.default.title,
                                title: props.options.title,
                                children: props.options.title
                            }),
                            hasTags ? (0, _jsxruntime.jsx)("p", {
                                className: _showCasemodulescss.default.tags,
                                title: props.options.tags?.join('/'),
                                children: props.options.tags?.join('/')
                            }) : undefined,
                            (0, _jsxruntime.jsx)("p", {
                                className: _showCasemodulescss.default.desc,
                                title: props.options.desc,
                                children: props.options.desc
                            })
                        ]
                    }),
                    (0, _jsxruntime.jsx)("p", {
                        className: _showCasemodulescss.default.category,
                        children: props.options.category
                    })
                ]
            }), [
            props.options.title,
            props.options.tags,
            props.options.category
        ]);
        const tabs = (0, _react.useMemo)(()=>props.options.code?.map((x)=>x.label), [
            props.options.code
        ]);
        const [showCode, setShowCode] = (0, _react.useState)(false);
        const onTabChange = (tab)=>{
            if (!tab) {
                setShowCode(false);
                return;
            }
            setShowCode(true);
            const targetCode = props.options.code?.find((x)=>x.label === tab);
            if (!targetCode) {
                return;
            }
            setCode({
                text: targetCode.content,
                language: targetCode.filetype
            });
        };
        const [code, setCode] = (0, _react.useState)();
        return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                dialogVisiable ? (0, _jsxruntime.jsxs)(_dialog.Dialog, {
                    onClickOutside: closeDialog,
                    className: _showCasemodulescss.default.dialog,
                    children: [
                        (0, _jsxruntime.jsx)("div", {
                            className: _showCasemodulescss.default['dialog__header'],
                            children: (0, _jsxruntime.jsx)(Info, {})
                        }),
                        tabs ? (0, _jsxruntime.jsx)(_tabs.Tabs, {
                            tabs: tabs,
                            className: _showCasemodulescss.default.tabs,
                            onTabChange: onTabChange
                        }) : undefined,
                        (0, _jsxruntime.jsxs)("div", {
                            className: _showCasemodulescss.default['dialog__body'],
                            children: [
                                showCode ? (0, _jsxruntime.jsx)("div", {
                                    className: _showCasemodulescss.default['code__wrapper'],
                                    children: (0, _jsxruntime.jsx)(_code.Code, {
                                        code: code?.text ?? '',
                                        language: code?.language ?? 'txt'
                                    })
                                }) : undefined,
                                (0, _jsxruntime.jsx)(_frame.Frame, {
                                    className: _showCasemodulescss.default.frame,
                                    html: props.options.html,
                                    css: props.options.css,
                                    js: props.options.js
                                })
                            ]
                        })
                    ]
                }) : undefined,
                (0, _jsxruntime.jsxs)("div", {
                    className: (0, _class.classes)(_showCasemodulescss.default.showcase, 'showcase'),
                    children: [
                        (0, _jsxruntime.jsxs)("div", {
                            className: (0, _class.classes)(_showCasemodulescss.default['frame__wrapper'], dialogVisiable ? _showCasemodulescss.default['frame__wrapper--disactive'] : undefined),
                            children: [
                                (0, _jsxruntime.jsx)(_frame.Frame, {
                                    className: _showCasemodulescss.default.frame,
                                    html: props.options.html,
                                    css: props.options.css,
                                    js: props.options.js
                                }),
                                (0, _jsxruntime.jsx)("div", {
                                    className: _showCasemodulescss.default['frame__btn'],
                                    onClick: showDialog,
                                    children: (0, _jsxruntime.jsx)(_icon.Icon, {
                                        name: "expand"
                                    })
                                })
                            ]
                        }),
                        (0, _jsxruntime.jsx)(Info, {})
                    ]
                })
            ]
        });
    };
}
,
"fb0b54ac":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const _export_star = farmRequire("@swc/helpers/_/_export_star");
    _export_star._(farmRequire("2ea370be"), exports);
}
,});
//# sourceMappingURL=index_2228.9d6030fb.js.map