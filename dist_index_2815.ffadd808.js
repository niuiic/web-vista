(function(_){for(var r in _){_[r].__farm_resource_pot__='dist_index_2815.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"23ec4682":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}}),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a={__FARM_TARGET_ENV__:"browser"},function(e,t){var i={};function n(e){return Promise.resolve(o(e));}function o(t){if(i[t])return i[t].exports;var r={id:t,exports:{}};return i[t]=r,e[t](r,r.exports,o,n),r.exports;}o(t);}({"13561da2":function(e,t,i,n){"use strict";function o(e,t){return Object.keys(e).forEach(function(i){"default"===i||Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i];}});}),e;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{_:function(){return o;},_export_star:function(){return o;}});},54183975:function(e,t,i,n){"use strict";function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(o=function(e){return e?i:t;})(e);}function r(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=o(t);if(i&&i.has(e))return i.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=r?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(n,l,d):n[l]=e[l];}return n.default=e,i&&i.set(e,n),n;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{_:function(){return r;},_interop_require_wildcard:function(){return r;}});},"55d27d5a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{ResourceLoader:function(){return d;},__farm_global_this__:function(){return o;},isBrowser:function(){return l;},targetEnv:function(){return r;}});let o=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a,r=o.__FARM_TARGET_ENV__||"node",l="browser"===r&&(globalThis||window).document;class d{moduleSystem;_loadedResources;_loadingResources;publicPaths;constructor(e,t){this.moduleSystem=e,this._loadedResources={},this._loadingResources={},this.publicPaths=t;}load(e,t=0){if(!l){let t=this.moduleSystem.pluginContainer.hookBail("loadResource",e);if(t)return t.then(t=>{if(!t.success&&t.retryWithDefaultResourceLoader){if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}else if(!t.success)throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${t.err}`);});if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}let i=this.publicPaths[t],n=`${i.endsWith("/")?i.slice(0,-1):i}/${e.path}`;if(this._loadedResources[e.path])return;if(this._loadingResources[e.path])return this._loadingResources[e.path];let o=this.moduleSystem.pluginContainer.hookBail("loadResource",e);return o?o.then(i=>{if(i.success)this.setLoadedResource(e.path);else if(i.retryWithDefaultResourceLoader)return this._load(n,e,t);else throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${i.err}`);}):this._load(n,e,t);}setLoadedResource(e,t=!0){this._loadedResources[e]=t;}isResourceLoaded(e){return this._loadedResources[e];}_load(e,t,i){let n=Promise.resolve();return"script"===t.type?n=this._loadScript(e):"link"===t.type&&(n=this._loadLink(e)),this._loadingResources[t.path]=n,n.then(()=>{this._loadedResources[t.path]=!0,this._loadingResources[t.path]=null;}).catch(n=>{if(console.warn(`[Farm] Failed to load resource "${e}" using publicPath: ${this.publicPaths[i]}`),++i<this.publicPaths.length)return this._load(e,t,i);throw this._loadingResources[t.path]=null,Error(`[Farm] Failed to load resource: "${t.path}, type: ${t.type}". ${n}`);}),n;}_loadScript(e){return l?new Promise((t,i)=>{let n=document.createElement("script");n.src=e,document.body.appendChild(n),n.onload=()=>{t();},n.onerror=e=>{i(e);};}):import(e);}_loadLink(e){return l?new Promise((t,i)=>{let n=document.createElement("link");n.rel="stylesheet",n.href=e,document.head.appendChild(n),n.onload=()=>{t();},n.onerror=e=>{i(e);};}):Promise.resolve();}}},"5c9dc4a5":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModuleSystem",{enumerable:!0,get:function(){return p;}});let o=i("b82fc02f"),r=i("bd5d65ea"),l=i("55d27d5a"),d=i("f566227b"),s=i("54183975"),c=i("13561da2"),f=globalThis||window,u={"@swc/helpers/_/_interop_require_default":{default:d._interop_require_default,_:d._interop_require_default},"@swc/helpers/_/_interop_require_wildcard":{default:s._interop_require_wildcard,_:s._interop_require_wildcard},"@swc/helpers/_/_export_star":{default:c._export_star,_:c._export_star}};class p{modules;cache;externalModules;reRegisterModules;publicPaths;dynamicModuleResourcesMap;resourceLoader;pluginContainer;targetEnv;constructor(){this.modules={},this.cache={},this.publicPaths=[],this.dynamicModuleResourcesMap={},this.resourceLoader=new l.ResourceLoader(this,this.publicPaths),this.pluginContainer=new r.FarmRuntimePluginContainer([]),this.targetEnv=l.targetEnv,this.externalModules={},this.reRegisterModules=!1;}require(e,t=!1){if(u[e])return u[e];if(this.cache[e]&&!this.pluginContainer.hookBail("readModuleCache",this.cache[e]))return this.cache[e].exports;let i=this.modules[e];if(!i){if(this.externalModules[e]){let i=this.externalModules[e];return t&&i.default||i;}return("node"===this.targetEnv||!l.isBrowser)&&nodeRequire?nodeRequire(e):(this.pluginContainer.hookSerial("moduleNotFound",e),console.debug(`[Farm] Module "${e}" is not registered`),{});}let n=new o.Module(e,this.require.bind(this));n.resource_pot=i.__farm_resource_pot__,this.pluginContainer.hookSerial("moduleCreated",n),this.cache[e]=n,(globalThis||global||window||{}).require||((globalThis||global||window||{require:undefined}).require=this.require.bind(this));let r=i(n,n.exports,this.require.bind(this),this.farmDynamicRequire.bind(this));return r&&r instanceof Promise?r.then(()=>(this.pluginContainer.hookSerial("moduleInitialized",n),n.exports)):(this.pluginContainer.hookSerial("moduleInitialized",n),n.exports);}farmDynamicRequire(e){if(this.modules[e]){let t=this.require(e);return t.__farm_async?t.default:Promise.resolve(t);}return this.loadDynamicResources(e);}loadDynamicResources(e,t=!1){let i=this.dynamicModuleResourcesMap[e];if(!i||0===i.length)throw Error(`Dynamic imported module "${e}" does not belong to any resource`);return t&&(this.reRegisterModules=!0,this.clearCache(e)),Promise.all(i.map(e=>(t&&this.resourceLoader.setLoadedResource(e.path,!1),this.resourceLoader.load(e)))).then(()=>{if(!this.modules[e])throw Error(`Dynamic imported module "${e}" is not registered.`);this.reRegisterModules=!1;let t=this.require(e);return t.__farm_async?t.default:t;}).catch(t=>{throw console.error(`[Farm] Error loading dynamic module "${e}"`,t),t;});}register(e,t){if(this.modules[e]&&!this.reRegisterModules){console.warn(`Module "${e}" has registered! It should not be registered twice`);return;}this.modules[e]=t;}update(e,t){this.modules[e]=t,this.clearCache(e);}delete(e){return!!this.modules[e]&&(this.clearCache(e),delete this.modules[e],!0);}getModuleUrl(e){let t=this.publicPaths[0]??"";return f.location?`${f.location.protocol}//${f.location.host}${t.endsWith("/")?t.slice(0,-1):t}/${this.modules[e].__farm_resource_pot__}`:this.modules[e].__farm_resource_pot__;}getCache(e){return this.cache[e];}clearCache(e){return!!this.cache[e]&&(delete this.cache[e],!0);}setInitialLoadedResources(e){for(let t of e)this.resourceLoader.setLoadedResource(t);}setDynamicModuleResourcesMap(e){this.dynamicModuleResourcesMap=e;}setPublicPaths(e){this.publicPaths=e,this.resourceLoader.publicPaths=this.publicPaths;}setPlugins(e){this.pluginContainer.plugins=e;}addPlugin(e){this.pluginContainer.plugins.every(t=>t.name!==e.name)&&this.pluginContainer.plugins.push(e);}removePlugin(e){this.pluginContainer.plugins=this.pluginContainer.plugins.filter(t=>t.name!==e);}setExternalModules(e){Object.assign(this.externalModules,e||{});}bootstrap(){this.pluginContainer.hookSerial("bootstrap",this);}}},"688d37b3":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let o="undefined"!=typeof globalThis?globalThis:window,r={name:"farm-runtime-import-meta",_moduleSystem:{},bootstrap(e){this._moduleSystem=e;},moduleCreated(e){e.meta.env={...{NODE_ENV:"production"}??{},mode:"production",dev:!1,prod:!0};let t=this._moduleSystem.publicPaths?.[0]||"",{location:i}=o,n=i?`${i.protocol}//${i.host}${t.replace(/\/$/,"")}/${e.id}?t=${Date.now()}`:e.resource_pot;e.meta.url=n;}};},a0fe17cf:function(e,t,i,n){"use strict";let o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{ModuleSystem:function(){return l.ModuleSystem;},Plugin:function(){return d.FarmRuntimePlugin;}});let r=i("f566227b")._(i("688d37b3")),l=i("5c9dc4a5"),d=i("bd5d65ea");i("55d27d5a").__farm_global_this__.__farm_module_system__=(o=new l.ModuleSystem,function(){return o;})(),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setPlugins([r.default]);},b82fc02f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Module",{enumerable:!0,get:function(){return o;}});class o{id;exports;resource_pot;meta;require;constructor(e,t){this.id=e,this.exports={},this.meta={env:{}},this.require=t;}}},bd5d65ea:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FarmRuntimePluginContainer",{enumerable:!0,get:function(){return o;}});class o{plugins=[];constructor(e){this.plugins=e;}hookSerial(e,...t){for(let i of this.plugins){let n=i[e];n&&n.apply(i,t);}}hookBail(e,...t){for(let i of this.plugins){let n=i[e];if(n){let e=n.apply(i,t);if(e)return e;}}}}},f566227b:function(e,t,i,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e};}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{_:function(){return o;},_interop_require_default:function(){return o;}});}},"a0fe17cf"),function(e){for(var t in e)e[t].__farm_resource_pot__="index_7cc1.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"03a0d524":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("592f58e5")),d=o._(i("faf30963")),s=o._(i("edc1dd7f")),c={id:"flex",title:"flex",desc:"css flex characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"07ac6fa6":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="firework"></div>
`;},"0878149f":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
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

.parent6 {
  position: relative;
  box-sizing: padding-box;
  width: 100px;
  height: 200px;
  padding: 20px;
  background-color: red;
}

.child6 {
  position: absolute;
  padding: 50%;
  background-color: yellow;
}`;},"0d56efad":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
  background: #000000;
}

.fire {
  position: relative;
  box-sizing: border-box;
  margin: auto;
  border: 200px solid #000000;
  border-bottom-color: transparent;
  border-radius: 45%;
  background-color: #b5932f;
  filter: blur(20px) contrast(30);
  transform: translateY(-50%) scaleX(50%);
}

.dot {
  position: absolute;
  bottom: -200px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000000;
}

@keyframes move {
  100% {
    transform: translate3d(0, -350px, 0);
  }
}
.dot:nth-child(1) {
  bottom: -211px;
  left: -29px;
  animation: move 1.2s infinite 1.6s linear;
}

.dot:nth-child(2) {
  bottom: -319px;
  left: -86px;
  animation: move 1.6s infinite 1.9s linear;
}

.dot:nth-child(3) {
  bottom: -138px;
  left: -28px;
  animation: move 2.7s infinite 0.6s linear;
}

.dot:nth-child(4) {
  bottom: -245px;
  left: 133px;
  animation: move 1.6s infinite 4.9s linear;
}

.dot:nth-child(5) {
  bottom: -220px;
  left: -60px;
  animation: move 2.5s infinite 4.5s linear;
}

.dot:nth-child(6) {
  bottom: -253px;
  left: 65px;
  animation: move 0.9s infinite 4.5s linear;
}

.dot:nth-child(7) {
  bottom: -190px;
  left: 120px;
  animation: move 0.9s infinite 4.9s linear;
}

.dot:nth-child(8) {
  bottom: -284px;
  left: 3px;
  animation: move 2s infinite 5.1s linear;
}

.dot:nth-child(9) {
  bottom: -247px;
  left: 10px;
  animation: move 1.9s infinite 5.5s linear;
}

.dot:nth-child(10) {
  bottom: -226px;
  left: 36px;
  animation: move 2.6s infinite 0.4s linear;
}

.dot:nth-child(11) {
  bottom: -314px;
  left: -49px;
  animation: move 1.6s infinite 1.9s linear;
}

.dot:nth-child(12) {
  bottom: -199px;
  left: 2px;
  animation: move 2.7s infinite 5.4s linear;
}

.dot:nth-child(13) {
  bottom: -123px;
  left: 24px;
  animation: move 3s infinite 5.7s linear;
}

.dot:nth-child(14) {
  bottom: -302px;
  left: 51px;
  animation: move 1.5s infinite 5.7s linear;
}

.dot:nth-child(15) {
  bottom: -336px;
  left: -104px;
  animation: move 2.7s infinite 5.5s linear;
}

.dot:nth-child(16) {
  bottom: -279px;
  left: -94px;
  animation: move 2.9s infinite 0.7s linear;
}

.dot:nth-child(17) {
  bottom: -166px;
  left: 32px;
  animation: move 1.8s infinite 2.6s linear;
}

.dot:nth-child(18) {
  bottom: -325px;
  left: -91px;
  animation: move 2.8s infinite 3.3s linear;
}

.dot:nth-child(19) {
  bottom: -189px;
  left: -15px;
  animation: move 3.2s infinite 0.9s linear;
}

.dot:nth-child(20) {
  bottom: -168px;
  left: -51px;
  animation: move 2.5s infinite 4.4s linear;
}

.dot:nth-child(21) {
  bottom: -254px;
  left: -19px;
  animation: move 0.8s infinite 0.9s linear;
}

.dot:nth-child(22) {
  bottom: -219px;
  left: 50px;
  animation: move 2.9s infinite 3s linear;
}

.dot:nth-child(23) {
  bottom: -244px;
  left: 102px;
  animation: move 1.3s infinite 4.8s linear;
}

.dot:nth-child(24) {
  bottom: -242px;
  left: -115px;
  animation: move 1.7s infinite 6s linear;
}

.dot:nth-child(25) {
  bottom: -327px;
  left: -18px;
  animation: move 1.7s infinite 4.4s linear;
}

.dot:nth-child(26) {
  bottom: -137px;
  left: 83px;
  animation: move 2.9s infinite 4.8s linear;
}

.dot:nth-child(27) {
  bottom: -278px;
  left: 58px;
  animation: move 2.7s infinite 4.5s linear;
}

.dot:nth-child(28) {
  bottom: -294px;
  left: 125px;
  animation: move 1s infinite 0.9s linear;
}

.dot:nth-child(29) {
  bottom: -271px;
  left: -150px;
  animation: move 1.2s infinite 2.4s linear;
}

.dot:nth-child(30) {
  bottom: -205px;
  left: -35px;
  animation: move 3.1s infinite 0.6s linear;
}

.dot:nth-child(31) {
  bottom: -274px;
  left: -146px;
  animation: move 2.6s infinite 2s linear;
}

.dot:nth-child(32) {
  bottom: -165px;
  left: 52px;
  animation: move 3.1s infinite 2.4s linear;
}

.dot:nth-child(33) {
  bottom: -236px;
  left: -6px;
  animation: move 1.6s infinite 5.3s linear;
}

.dot:nth-child(34) {
  bottom: -227px;
  left: -18px;
  animation: move 2.2s infinite 0.9s linear;
}

.dot:nth-child(35) {
  bottom: -138px;
  left: -71px;
  animation: move 1.8s infinite 1.8s linear;
}

.dot:nth-child(36) {
  bottom: -313px;
  left: 61px;
  animation: move 2.6s infinite 3.4s linear;
}

.dot:nth-child(37) {
  bottom: -283px;
  left: 118px;
  animation: move 2.1s infinite 1.8s linear;
}

.dot:nth-child(38) {
  bottom: -224px;
  left: -46px;
  animation: move 3.1s infinite 3.6s linear;
}

.dot:nth-child(39) {
  bottom: -194px;
  left: 45px;
  animation: move 2.5s infinite 3.2s linear;
}

.dot:nth-child(40) {
  bottom: -199px;
  left: -153px;
  animation: move 3.3s infinite 2.7s linear;
}

.dot:nth-child(41) {
  bottom: -201px;
  left: 4px;
  animation: move 2s infinite 0.1s linear;
}

.dot:nth-child(42) {
  bottom: -206px;
  left: 90px;
  animation: move 2.8s infinite 3.1s linear;
}

.dot:nth-child(43) {
  bottom: -262px;
  left: 46px;
  animation: move 2.2s infinite 5.6s linear;
}

.dot:nth-child(44) {
  bottom: -190px;
  left: 120px;
  animation: move 1.4s infinite 3s linear;
}

.dot:nth-child(45) {
  bottom: -331px;
  left: 136px;
  animation: move 2.6s infinite 1.2s linear;
}

.dot:nth-child(46) {
  bottom: -145px;
  left: 97px;
  animation: move 2s infinite 1.4s linear;
}

.dot:nth-child(47) {
  bottom: -296px;
  left: -75px;
  animation: move 2s infinite 0.4s linear;
}

.dot:nth-child(48) {
  bottom: -345px;
  left: -75px;
  animation: move 2.8s infinite 4s linear;
}

.dot:nth-child(49) {
  bottom: -274px;
  left: -26px;
  animation: move 1.6s infinite 0.8s linear;
}`;},"0ff84df9":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`@use 'sass:math';

/* # clock */
.clock {
  position: relative;
  font-size: 1em;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* # frame face */
.frame-face {
  position: relative;
  width: 30em;
  height: 30em;
  margin: 2em auto;
  border-radius: 15em;
  background: linear-gradient(to top, #f9f9f9, #666666);
  box-shadow: rgb(0 0 0 / 80%) 0.5em 0.5em 4em;
}

.frame-face::before {
  content: '';
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  width: 29.4em;
  height: 29.4em;
  border-radius: 14.7em;
  background: linear-gradient(
      135deg,
      rgb(246 248 249 / 0%) 0%,
      rgb(229 235 238 / 100%) 50%,
      rgb(205 212 217 / 100%) 51%,
      rgb(245 247 249 / 0%) 100%
    ),
    radial-gradient(
      ellipse at center,
      rgb(246 248 249 / 100%) 0%,
      rgb(229 235 238 / 100%) 65%,
      rgb(205 212 217 / 100%) 66%,
      rgb(245 247 249 / 100%) 100%
    );
}

.frame-face::after {
  content: '';
  position: absolute;
  top: 0.9em;
  left: 0.9em;
  width: 28em;
  height: 28em;
  border: 0.1em solid rgb(0 0 0 / 20%);
  border-radius: 14.2em;
  background: linear-gradient(to bottom, #ffffff, #cccccc);
  box-shadow: inset rgb(0 0 0 / 20%) 0.2em 0.2em 1em;
}

/* # minute marks */
.minute-marks li {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.2em;
  height: 0.6em;
  margin: -0.4em 0 0 -0.1em;
  background: #929394;
}

@for $i from 1 through 48 {
  .clock .minute-marks li:nth-child(#{$i}) {
    transform: rotate($i * 6 + (math.ceil(math.div($i, 4)) - 1) * 6 + deg) translateY(-12.7em);
  }
}

/* # digits */
.digits {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30em;
  height: 30em;
  margin-left: -15em;
  border-radius: 15em;
  counter-reset: digit;
}

.digits li {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em 0 0 -0.8em;
  font-weight: bold;
  font-size: 1.6em;
  line-height: 1.6em;
  counter-increment: digit;
  text-align: center;
}

.digits li::before {
  content: counter(digit);
}

@for $i from 1 through 12 {
  .clock .digits li:nth-child(#{$i}) {
    transform: translate(8em * math.sin(30deg * $i), -8em * math.cos(30deg * $i));
  }
}

.digits::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em 0 0 -0.8em;
  border-radius: 0.8em;
  background: #121314;
}

.digits::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4em;
  height: 4em;
  margin: -2.1em 0 0 -2.1em;
  border: 0.1em solid #c6c6c6;
  border-radius: 2.2em;
  background: radial-gradient(
    center,
    ellipse cover,
    rgb(200 200 200 / 0%),
    rgb(190 190 190 / 100%) 90%,
    rgb(130 130 130 / 100%) 100%
  );
}

/* # hours hand */
@keyframes hours {
  to {
    transform: rotate(360deg);
  }
}

.hours-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.8em;
  height: 7em;
  margin: 0 0 -0.8em -0.4em;
  border-radius: 0 0 0.9em 0.9em;
  background: #232425;
  box-shadow: #232425 0 0 2px;
  transform-origin: 0.4em 6.2em;
  animation: hours 43200s linear 0s infinite;
}

.hours-hand::before {
  content: '';
  position: absolute;
  top: -0.7em;
  left: -0.5em;
  width: 1.8em;
  height: 0.8em;
  border-radius: 0 0 0.8em 0.8em;
  background: inherit;
  box-shadow: #232425 0 0 1px;
}

.hours-hand::after {
  content: '';
  position: absolute;
  top: -3.1em;
  left: -0.5em;
  width: 0;
  height: 0;
  border: 0.9em solid #232425;
  border-width: 0 0.9em 2.4em;
  border-right-color: transparent;
  border-left-color: transparent;
}

/* # minutes hand */
@keyframes minutes {
  to {
    transform: rotate(360deg);
  }
}

.minutes-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.8em;
  height: 12.5em;
  margin: 0 0 -1.5em -0.4em;
  border-radius: 0.5em;
  background: #343536;
  box-shadow: #343536 0 0 2px;
  transform-origin: 0.4em 11em;
  animation: minutes 3600s linear 0s infinite;
}

/* # seconds hand */
@keyframes seconds {
  to {
    transform: rotate(360deg);
  }
}

.seconds-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.2em;
  height: 14em;
  margin: 0 0 -2em -0.1em;
  border-radius: 0.1em 0.1em 0 0/10em 10em 0 0;
  background: #cc0000;
  box-shadow: rgb(0 0 0 / 80%) 0 0 0.2em;
  transform-origin: 0.1em 12em;
  animation: seconds 60s steps(60, end) 0s infinite;
}

.seconds-hand::after {
  content: '';
  position: absolute;
  bottom: 1.35em;
  left: -0.65em;
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.7em;
  background: inherit;
}

.seconds-hand::before {
  content: '';
  position: absolute;
  bottom: -3em;
  left: -0.35em;
  width: 0.8em;
  height: 3em;
  border-radius: 0.2em 0.2em 0.4em 0.4em/0.2em 0.2em 2em 2em;
  background: inherit;
  box-shadow: rgb(0 0 0 / 80%) 0 0 0.2em;
}

/* # digital */
/* ## wrap */
.digital-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: 9em;
  height: 3em;
  margin: 3em 0 0 -4.5em;
  border: 0.1em solid #222222;
  border-radius: 0.2em;
  background: #4c4c4c;
  background: linear-gradient(to bottom, #4c4c4c 0%, #0f0f0f 100%);
}

.digital-wrap ul {
  float: left;
  width: 2.85em;
  height: 3em;
  border-right: 0.1em solid #000000;
  color: #dddddd;
  font-family: Consolas, monaco, monospace;
}

.digital-wrap ul:last-child {
  border: none;
}

.digital-wrap li {
  position: relative;
  left: 1px;
  font-size: 1.5em;
  line-height: 2;
  letter-spacing: 2px;
  text-align: center;
}

/* ## hours */
.digit-hours {
  counter-reset: hours -1;
}

.digit-hours li {
  counter-increment: hours;
}

.digit-hours li::before {
  content: counter(hours);
}

/* ## minutes */
@keyframes dsm {
  to {
    transform: translateY(-120em);
  }
}

.digit-minutes {
  counter-reset: minutes -1;
}

.digit-minutes li {
  counter-increment: minutes;
  animation: dsm 3600s steps(60, end) 0s infinite;
}

.digit-minutes li::before {
  content: counter(minutes);
}

/* ## seconds */
.digit-seconds {
  counter-reset: seconds -1;
}

.digit-seconds li {
  counter-increment: seconds;
  animation: dsm 60s steps(60, end) 0s infinite;
}

.digit-seconds li::before {
  content: counter(seconds);
}
`;},"10032f9c":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
`;},"10db09a4":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="dice">
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
</div>
`;},"19fa51aa":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: red;
  line-height: 20px;
}

.child {
  font-size: 40px;
  line-height: 1.5;
}

.child2 {
  font-size: 60px;
  line-height: 2;
}

.parent2 {
  background-color: yellow;
  line-height: 150px;
}

.parent3 {
  background-color: red;
  line-height: 100px;
}

.child3 {
  font-size: 20px;
  line-height: 1.5;
}
`;},"1b6d9e9a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>Setting absolute positioning changes the element's display value to the corresponding block type.</h1>
  <hr />

  <div class="parent">
    <span class="child">child</span>
  </div>
</section>

<section>
  <h1>
    If the element on which overflow is set is not a containment block of an absolutely positioned element and does not
    contain a containment block of the absolutely positioned element within it, overflow does not take effect on that
    absolutely positioned element.
  </h1>
  <hr />

  <div class="parent2">
    <span class="child2">child2</span>
  </div>
</section>
`;},"1bee128a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("de6ffd56")),d=o._(i("6197a48d")),s=o._(i("b58e7079")),c={id:"counter",title:"counter",desc:"css counter characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"1f92043a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("96521757")),l=o._(i("0d56efad")),d=o._(i("d718e47c")),s={id:"fire",title:"fire",desc:"Fire animation",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"253673e4":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
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
`;},"26bd0e9e":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`@use 'sass:math';

$bg-color: #000000;
$font-color: #ffffff;
$bubble-color: #00ff6f;

/* # app */
#app {
  background: $bg-color;
}

/* # container */
.container {
  position: relative;
  width: 300px;
  height: 400px;
  margin: auto;
}

/* # number */
.number {
  position: absolute;
  top: 27%;
  z-index: 10;
  width: 300px;
  color: $font-color;
  font-size: 32px;
  text-align: center;
}

/* # contrast */
@keyframes hue-rotate {
  0% {
    filter: contrast(10) hue-rotate(0);
  }

  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}

.contrast {
  overflow: hidden;
  height: 100%;
  background-color: $bg-color;
  animation: hue-rotate 10s infinite linear;
}

/* # circle */
@keyframes rotate {
  0% {
    border-radius: 45% / 42% 38% 58% 49%;
    transform: translate(-50%, -50%) rotate(0);
  }

  50% {
    border-radius: 42% 38% 62% 49% / 45%;
  }

  100% {
    border-radius: 45% / 42% 38% 58% 49%;
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

.circle {
  position: relative;
  width: 300px;
  height: 300px;
  /* anti-alias */
  filter: blur(8px);

  /* outer circle */
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: $bubble-color;
    animation: rotate 10s infinite linear;
  }

  /* inner circle */
  &::before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 10;
    width: 176px;
    height: 176px;
    border-radius: 50%;
    background-color: $bg-color;
    transform: translate(-50%, -50%);
  }
}

/* # bubbles */
.bubbles {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100px;
  height: 40px;
  border-radius: 100px 100px 0 0;
  background-color: $bubble-color;
  filter: blur(5px);
  transform: translate(-50%, 0);
}

li {
  position: absolute;
  border-radius: 50%;
  background: $bubble-color;
}

@keyframes move-to-top {
  0% {
    transform: translate(-50%, -50%);
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
    transform: translate(-50%, -180px);
  }
}

@for $i from 0 through 15 {
  li:nth-child(#{$i}) {
    $size: 15 + math.random(15) + px;

    top: 50%;
    left: 10 + math.random(100) + px;
    width: $size;
    height: $size;
    animation: move-to-top #{math.random(6) + 3}s ease-in-out -#{math.div(math.random(5000), 1000)}s infinite;
  }
}
`;},"2e3d6988":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("253673e4")),d=o._(i("abd82204")),s=o._(i("92cc28ef")),c={id:"boxModel",title:"box model",desc:"css box model characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"332cd0a1":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="book">
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
  <div class="page"></div>
</div>
`;},"377810c4":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("10032f9c")),l=o._(i("999c83f8")),d=o._(i("9bdda8b0")),s={id:"loading",title:"loading",desc:"Text loading animation.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"3d6ac7fd":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
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
`;},"40c79067":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
}

.loading,
.loading::before,
.loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left: -30px;
  border-radius: 50%;
  background: #1bc2a6;
}

.loading::before {
  content: "";
  animation: expand 1.5s infinite;
}

.loading::after {
  content: "";
  animation: expand 1.5s -0.4s infinite;
}

@keyframes expand {
  from {
    opacity: 1;
    transform: scale(0.8);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}`;},"4148376d":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
}

.loading,
.loading::before,
.loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left: -30px;
  border-radius: 50%;
  background: #1bc2a6;
}

.loading::before {
  content: '';
  animation: expand 1.5s infinite;
}

.loading::after {
  content: '';
  animation: expand 1.5s -0.4s infinite;
}

@keyframes expand {
  from {
    opacity: 1;
    transform: scale(0.8);
  }

  to {
    opacity: 0;
    transform: scale(2);
  }
}
`;},"4386746a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
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
`;},"44d24b50":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
}

.container {
  max-width: 80%;
  margin: auto;
}

@keyframes text {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
.text {
  background-image: linear-gradient(to right, black 0, black 100%);
  -webkit-background-clip: text;
          background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  font-size: 24px;
  line-height: 36px;
  animation: text 10s linear infinite;
}`;},"4609f826":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="loader">
  <div class="d1"></div>
  <div class="d2"></div>
  <div class="d3"></div>
  <div class="d4"></div>
  <div class="d5"></div>
</div>
`;},"4622116c":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`@use 'sass:math';

#app {
  display: flex;
  background: linear-gradient(to top, #000000, #0d343a);
}

.rain {
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 500px;
  margin: auto;
}

.raindrop {
  position: absolute;
  width: 2px;
  background: linear-gradient(to top, #ffffff, rgb(255 255 255 / 50%));
}

@keyframes drop {
  0% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(600px);
  }
}

@for $i from 1 through 50 {
  .raindrop:nth-child(#{$i}) {
    left: math.random(500) + px;
    height: 10 + math.random(40) + px;
    animation: drop 1s ease-in #{math.div(math.random(100), 100)}s infinite;
  }
}
`;},"4905518c":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("07ac6fa6")),l=o._(i("a08ba710")),d=o._(i("917213ae")),s={id:"firework",title:"firework",desc:"Firework animation.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"4aa6b49a":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("3d6ac7fd")),d=o._(i("b4fd3cbd")),s=o._(i("6d7accd3")),c={id:"formattingContext",title:"formatting context",desc:"css formatting context characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"4ac3a9dc":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: red;
  line-height: 20px;
}

.child {
  font-size: 40px;
  line-height: 1.5;
}

.child2 {
  font-size: 60px;
  line-height: 2;
}

.parent2 {
  background-color: yellow;
  line-height: 150px;
}

.parent3 {
  background-color: red;
  line-height: 100px;
}

.child3 {
  font-size: 20px;
  line-height: 1.5;
}`;},"5068ea6d":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: green;
  line-height: 100px;
}

.child1 {
  display: inline-block;
  vertical-align: 100%;
  background-color: red;
  font-size: 40px;
  line-height: 2;
}

.child2 {
  display: inline-block;
  background-color: yellow;
  font-size: 40px;
  line-height: 2;
}

.parent2 {
  background-color: purple;
  line-height: 100px;
}

.child3 {
  display: inline-block;
  vertical-align: -100px;
  background-color: red;
  font-size: 40px;
  line-height: 2;
}

.child4 {
  display: inline-block;
  background-color: yellow;
  font-size: 40px;
  line-height: 2;
}

.parent3 {
  background-color: green;
  line-height: 100px;
}

.child5 {
  display: inline-block;
  background-color: yellow;
}

.child6 {
  display: inline-block;
  vertical-align: 100px;
  background-color: red;
}
`;},"5272ca90":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # clock */
.clock {
  position: relative;
  font-size: 1em;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* # frame face */
.frame-face {
  position: relative;
  width: 30em;
  height: 30em;
  margin: 2em auto;
  border-radius: 15em;
  background: linear-gradient(to top, #f9f9f9, #666666);
  box-shadow: rgba(0, 0, 0, 0.8) 0.5em 0.5em 4em;
}

.frame-face::before {
  content: "";
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  width: 29.4em;
  height: 29.4em;
  border-radius: 14.7em;
  background: linear-gradient(135deg, rgba(246, 248, 249, 0) 0%, rgb(229, 235, 238) 50%, rgb(205, 212, 217) 51%, rgba(245, 247, 249, 0) 100%), radial-gradient(ellipse at center, rgb(246, 248, 249) 0%, rgb(229, 235, 238) 65%, rgb(205, 212, 217) 66%, rgb(245, 247, 249) 100%);
}

.frame-face::after {
  content: "";
  position: absolute;
  top: 0.9em;
  left: 0.9em;
  width: 28em;
  height: 28em;
  border: 0.1em solid rgba(0, 0, 0, 0.2);
  border-radius: 14.2em;
  background: linear-gradient(to bottom, #ffffff, #cccccc);
  box-shadow: inset rgba(0, 0, 0, 0.2) 0.2em 0.2em 1em;
}

/* # minute marks */
.minute-marks li {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.2em;
  height: 0.6em;
  margin: -0.4em 0 0 -0.1em;
  background: #929394;
}

.clock .minute-marks li:nth-child(1) {
  transform: rotate(6deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(2) {
  transform: rotate(12deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(3) {
  transform: rotate(18deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(4) {
  transform: rotate(24deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(5) {
  transform: rotate(36deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(6) {
  transform: rotate(42deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(7) {
  transform: rotate(48deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(8) {
  transform: rotate(54deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(9) {
  transform: rotate(66deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(10) {
  transform: rotate(72deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(11) {
  transform: rotate(78deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(12) {
  transform: rotate(84deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(13) {
  transform: rotate(96deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(14) {
  transform: rotate(102deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(15) {
  transform: rotate(108deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(16) {
  transform: rotate(114deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(17) {
  transform: rotate(126deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(18) {
  transform: rotate(132deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(19) {
  transform: rotate(138deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(20) {
  transform: rotate(144deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(21) {
  transform: rotate(156deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(22) {
  transform: rotate(162deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(23) {
  transform: rotate(168deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(24) {
  transform: rotate(174deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(25) {
  transform: rotate(186deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(26) {
  transform: rotate(192deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(27) {
  transform: rotate(198deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(28) {
  transform: rotate(204deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(29) {
  transform: rotate(216deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(30) {
  transform: rotate(222deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(31) {
  transform: rotate(228deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(32) {
  transform: rotate(234deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(33) {
  transform: rotate(246deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(34) {
  transform: rotate(252deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(35) {
  transform: rotate(258deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(36) {
  transform: rotate(264deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(37) {
  transform: rotate(276deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(38) {
  transform: rotate(282deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(39) {
  transform: rotate(288deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(40) {
  transform: rotate(294deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(41) {
  transform: rotate(306deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(42) {
  transform: rotate(312deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(43) {
  transform: rotate(318deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(44) {
  transform: rotate(324deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(45) {
  transform: rotate(336deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(46) {
  transform: rotate(342deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(47) {
  transform: rotate(348deg) translateY(-12.7em);
}

.clock .minute-marks li:nth-child(48) {
  transform: rotate(354deg) translateY(-12.7em);
}

/* # digits */
.digits {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30em;
  height: 30em;
  margin-left: -15em;
  border-radius: 15em;
  counter-reset: digit;
}

.digits li {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em 0 0 -0.8em;
  font-weight: bold;
  font-size: 1.6em;
  line-height: 1.6em;
  counter-increment: digit;
  text-align: center;
}

.digits li::before {
  content: counter(digit);
}

.clock .digits li:nth-child(1) {
  transform: translate(4em, -6.9282032303em);
}

.clock .digits li:nth-child(2) {
  transform: translate(6.9282032303em, -4em);
}

.clock .digits li:nth-child(3) {
  transform: translate(8em, 0em);
}

.clock .digits li:nth-child(4) {
  transform: translate(6.9282032303em, 4em);
}

.clock .digits li:nth-child(5) {
  transform: translate(4em, 6.9282032303em);
}

.clock .digits li:nth-child(6) {
  transform: translate(0em, 8em);
}

.clock .digits li:nth-child(7) {
  transform: translate(-4em, 6.9282032303em);
}

.clock .digits li:nth-child(8) {
  transform: translate(-6.9282032303em, 4em);
}

.clock .digits li:nth-child(9) {
  transform: translate(-8em, 0em);
}

.clock .digits li:nth-child(10) {
  transform: translate(-6.9282032303em, -4em);
}

.clock .digits li:nth-child(11) {
  transform: translate(-4em, -6.9282032303em);
}

.clock .digits li:nth-child(12) {
  transform: translate(0em, -8em);
}

.digits::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em 0 0 -0.8em;
  border-radius: 0.8em;
  background: #121314;
}

.digits::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4em;
  height: 4em;
  margin: -2.1em 0 0 -2.1em;
  border: 0.1em solid #c6c6c6;
  border-radius: 2.2em;
  background: radial-gradient(center, ellipse cover, rgba(200, 200, 200, 0), rgb(190, 190, 190) 90%, rgb(130, 130, 130) 100%);
}

/* # hours hand */
@keyframes hours {
  to {
    transform: rotate(360deg);
  }
}
.hours-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.8em;
  height: 7em;
  margin: 0 0 -0.8em -0.4em;
  border-radius: 0 0 0.9em 0.9em;
  background: #232425;
  box-shadow: #232425 0 0 2px;
  transform-origin: 0.4em 6.2em;
  animation: hours 43200s linear 0s infinite;
}

.hours-hand::before {
  content: "";
  position: absolute;
  top: -0.7em;
  left: -0.5em;
  width: 1.8em;
  height: 0.8em;
  border-radius: 0 0 0.8em 0.8em;
  background: inherit;
  box-shadow: #232425 0 0 1px;
}

.hours-hand::after {
  content: "";
  position: absolute;
  top: -3.1em;
  left: -0.5em;
  width: 0;
  height: 0;
  border: 0.9em solid #232425;
  border-width: 0 0.9em 2.4em;
  border-right-color: transparent;
  border-left-color: transparent;
}

/* # minutes hand */
@keyframes minutes {
  to {
    transform: rotate(360deg);
  }
}
.minutes-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.8em;
  height: 12.5em;
  margin: 0 0 -1.5em -0.4em;
  border-radius: 0.5em;
  background: #343536;
  box-shadow: #343536 0 0 2px;
  transform-origin: 0.4em 11em;
  animation: minutes 3600s linear 0s infinite;
}

/* # seconds hand */
@keyframes seconds {
  to {
    transform: rotate(360deg);
  }
}
.seconds-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 0.2em;
  height: 14em;
  margin: 0 0 -2em -0.1em;
  border-radius: 0.1em 0.1em 0 0/10em 10em 0 0;
  background: #cc0000;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 0.2em;
  transform-origin: 0.1em 12em;
  animation: seconds 60s steps(60, end) 0s infinite;
}

.seconds-hand::after {
  content: "";
  position: absolute;
  bottom: 1.35em;
  left: -0.65em;
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.7em;
  background: inherit;
}

.seconds-hand::before {
  content: "";
  position: absolute;
  bottom: -3em;
  left: -0.35em;
  width: 0.8em;
  height: 3em;
  border-radius: 0.2em 0.2em 0.4em 0.4em/0.2em 0.2em 2em 2em;
  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 0.2em;
}

/* # digital */
/* ## wrap */
.digital-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: 9em;
  height: 3em;
  margin: 3em 0 0 -4.5em;
  border: 0.1em solid #222222;
  border-radius: 0.2em;
  background: #4c4c4c;
  background: linear-gradient(to bottom, #4c4c4c 0%, #0f0f0f 100%);
}

.digital-wrap ul {
  float: left;
  width: 2.85em;
  height: 3em;
  border-right: 0.1em solid #000000;
  color: #dddddd;
  font-family: Consolas, monaco, monospace;
}

.digital-wrap ul:last-child {
  border: none;
}

.digital-wrap li {
  position: relative;
  left: 1px;
  font-size: 1.5em;
  line-height: 2;
  letter-spacing: 2px;
  text-align: center;
}

/* ## hours */
.digit-hours {
  counter-reset: hours -1;
}

.digit-hours li {
  counter-increment: hours;
}

.digit-hours li::before {
  content: counter(hours);
}

/* ## minutes */
@keyframes dsm {
  to {
    transform: translateY(-120em);
  }
}
.digit-minutes {
  counter-reset: minutes -1;
}

.digit-minutes li {
  counter-increment: minutes;
  animation: dsm 3600s steps(60, end) 0s infinite;
}

.digit-minutes li::before {
  content: counter(minutes);
}

/* ## seconds */
.digit-seconds {
  counter-reset: seconds -1;
}

.digit-seconds li {
  counter-increment: seconds;
  animation: dsm 60s steps(60, end) 0s infinite;
}

.digit-seconds li::before {
  content: counter(seconds);
}`;},"533e8601":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.box {
  width: -moz-min-content;
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: -moz-max-content;
  width: max-content;
}`;},"53a1347d":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="clock">
  <div class="frame-face"></div>
  <ul class="minute-marks">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="digits">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="hours-hand"></div>
  <div class="minutes-hand"></div>
  <div class="seconds-hand"></div>
  <div class="digital-wrap">
    <ul class="digit-hours">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="digit-minutes">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="digit-seconds">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
`;},"588e2ad7":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # wrapper */
#app {
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #6997db;
}

@keyframes loader {
  0% {
    left: -100px;
  }

  100% {
    left: calc(100% + 100px);
  }
}

.loader {
  position: relative;
  animation: loader 5s linear infinite;
}

/* # box */
@keyframes box {
  17% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    border-bottom-right-radius: 40px;
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  background: #ffffff;
  animation: box 0.5s linear infinite;
}

/* # shadow */
@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}

.shadow {
  position: absolute;
  top: 59px;
  left: 0;
  width: 50px;
  height: 5px;
  border-radius: 50%;
  background: #000000;
  opacity: 0.1;
  animation: shadow 0.5s linear infinite;
}
`;},"592f58e5":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>If the sum of the flex-grow of a flex item is less than 1, the flex container may not be filled.</h1>
  <hr />

  <div class="parent">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</section>
`;},"5b9b2f6d":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: red;
}

.line2 {
  float: right;
}

.float1,
.float2 {
  float: left;
}

li {
  float: left;
}

.parent3 > :nth-child(3) {
  clear: both;
}
`;},"5f78ff55":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("fe19a1e4")),d=o._(i("533e8601")),s=o._(i("e8ed8fc5")),c={id:"minContent",title:"min-content",desc:"css width min-content characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"6197a48d":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  counter-reset: counter1 0;
}

.child {
  counter-increment: counter1 1;
}

.child::before {
  content: counter(counter1, upper-roman);
}

.parent2 {
  counter-reset: counter2 0 counter3 0;
}

.child1 {
  counter-increment: counter2 1;
  counter-reset: counter3 0;
}

.child2 {
  counter-increment: counter3 1;
}

.child1::before {
  content: counter(counter2);
}

.child2::before {
  content: counter(counter3);
}

.parent3 {
  counter-reset: counter4 0;
}

.child3 {
  counter-increment: counter4 1;
}

.child3::before {
  content: counters(counter4, "-", decimal);
}`;},"63f77b08":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="loading"></div>
`;},"64748b6f":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("4609f826")),l=o._(i("ff5e128e")),d=o._(i("e0a68dfc")),s={id:"walkingDots",title:"walking dots",desc:"Yet another loading animation.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"6d7accd3":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent1 {
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
`;},"6dd6dd16":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>The offset reference for the float is the current line box.</h1>
  <hr />

  <div class="parent">
    <span class="line1">line1</span>
    <br />
    <span class="line2">line2</span>
  </div>
</section>

<section>
  <h1>Multiple floats in the same row will be aligned next to each other.</h1>
  <hr />

  <div class="parent2">
    <span class="float1">float1</span>
    <span class="float2">float2</span>
  </div>
</section>

<section>
  <h1>The clear attribute will disable elements from being adjacent to floated elements.</h1>
  <hr />

  <ul class="parent3">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</section>
`;},"7159fa00":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
  background: linear-gradient(to top, #000000, #0d343a);
}

.rain {
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 500px;
  margin: auto;
}

.raindrop {
  position: absolute;
  width: 2px;
  background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0.5));
}

@keyframes drop {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(600px);
  }
}
.raindrop:nth-child(1) {
  left: 100px;
  height: 41px;
  animation: drop 1s ease-in 0.99s infinite;
}

.raindrop:nth-child(2) {
  left: 458px;
  height: 49px;
  animation: drop 1s ease-in 0.39s infinite;
}

.raindrop:nth-child(3) {
  left: 95px;
  height: 15px;
  animation: drop 1s ease-in 0.23s infinite;
}

.raindrop:nth-child(4) {
  left: 339px;
  height: 44px;
  animation: drop 1s ease-in 0.46s infinite;
}

.raindrop:nth-child(5) {
  left: 170px;
  height: 37px;
  animation: drop 1s ease-in 0.69s infinite;
}

.raindrop:nth-child(6) {
  left: 195px;
  height: 19px;
  animation: drop 1s ease-in 0.27s infinite;
}

.raindrop:nth-child(7) {
  left: 306px;
  height: 34px;
  animation: drop 1s ease-in 0.16s infinite;
}

.raindrop:nth-child(8) {
  left: 158px;
  height: 49px;
  animation: drop 1s ease-in 0.01s infinite;
}

.raindrop:nth-child(9) {
  left: 280px;
  height: 12px;
  animation: drop 1s ease-in 0.75s infinite;
}

.raindrop:nth-child(10) {
  left: 359px;
  height: 18px;
  animation: drop 1s ease-in 0.12s infinite;
}

.raindrop:nth-child(11) {
  left: 389px;
  height: 30px;
  animation: drop 1s ease-in 0.44s infinite;
}

.raindrop:nth-child(12) {
  left: 166px;
  height: 31px;
  animation: drop 1s ease-in 0.35s infinite;
}

.raindrop:nth-child(13) {
  left: 199px;
  height: 13px;
  animation: drop 1s ease-in 0.06s infinite;
}

.raindrop:nth-child(14) {
  left: 455px;
  height: 17px;
  animation: drop 1s ease-in 0.72s infinite;
}

.raindrop:nth-child(15) {
  left: 352px;
  height: 38px;
  animation: drop 1s ease-in 0.19s infinite;
}

.raindrop:nth-child(16) {
  left: 498px;
  height: 14px;
  animation: drop 1s ease-in 0.04s infinite;
}

.raindrop:nth-child(17) {
  left: 197px;
  height: 12px;
  animation: drop 1s ease-in 0.46s infinite;
}

.raindrop:nth-child(18) {
  left: 31px;
  height: 47px;
  animation: drop 1s ease-in 0.74s infinite;
}

.raindrop:nth-child(19) {
  left: 345px;
  height: 45px;
  animation: drop 1s ease-in 0.96s infinite;
}

.raindrop:nth-child(20) {
  left: 104px;
  height: 23px;
  animation: drop 1s ease-in 0.69s infinite;
}

.raindrop:nth-child(21) {
  left: 18px;
  height: 36px;
  animation: drop 1s ease-in 0.03s infinite;
}

.raindrop:nth-child(22) {
  left: 298px;
  height: 43px;
  animation: drop 1s ease-in 0.82s infinite;
}

.raindrop:nth-child(23) {
  left: 425px;
  height: 24px;
  animation: drop 1s ease-in 0.25s infinite;
}

.raindrop:nth-child(24) {
  left: 149px;
  height: 23px;
  animation: drop 1s ease-in 0.34s infinite;
}

.raindrop:nth-child(25) {
  left: 234px;
  height: 48px;
  animation: drop 1s ease-in 0.85s infinite;
}

.raindrop:nth-child(26) {
  left: 95px;
  height: 32px;
  animation: drop 1s ease-in 0.31s infinite;
}

.raindrop:nth-child(27) {
  left: 248px;
  height: 21px;
  animation: drop 1s ease-in 0.97s infinite;
}

.raindrop:nth-child(28) {
  left: 418px;
  height: 24px;
  animation: drop 1s ease-in 0.52s infinite;
}

.raindrop:nth-child(29) {
  left: 452px;
  height: 42px;
  animation: drop 1s ease-in 0.22s infinite;
}

.raindrop:nth-child(30) {
  left: 323px;
  height: 31px;
  animation: drop 1s ease-in 0.89s infinite;
}

.raindrop:nth-child(31) {
  left: 138px;
  height: 38px;
  animation: drop 1s ease-in 0.91s infinite;
}

.raindrop:nth-child(32) {
  left: 46px;
  height: 42px;
  animation: drop 1s ease-in 0.61s infinite;
}

.raindrop:nth-child(33) {
  left: 344px;
  height: 38px;
  animation: drop 1s ease-in 0.99s infinite;
}

.raindrop:nth-child(34) {
  left: 129px;
  height: 43px;
  animation: drop 1s ease-in 0.11s infinite;
}

.raindrop:nth-child(35) {
  left: 64px;
  height: 23px;
  animation: drop 1s ease-in 0.67s infinite;
}

.raindrop:nth-child(36) {
  left: 306px;
  height: 48px;
  animation: drop 1s ease-in 0.19s infinite;
}

.raindrop:nth-child(37) {
  left: 475px;
  height: 46px;
  animation: drop 1s ease-in 0.31s infinite;
}

.raindrop:nth-child(38) {
  left: 342px;
  height: 37px;
  animation: drop 1s ease-in 0.79s infinite;
}

.raindrop:nth-child(39) {
  left: 212px;
  height: 18px;
  animation: drop 1s ease-in 0.26s infinite;
}

.raindrop:nth-child(40) {
  left: 189px;
  height: 24px;
  animation: drop 1s ease-in 0.38s infinite;
}

.raindrop:nth-child(41) {
  left: 29px;
  height: 38px;
  animation: drop 1s ease-in 0.31s infinite;
}

.raindrop:nth-child(42) {
  left: 494px;
  height: 11px;
  animation: drop 1s ease-in 0.27s infinite;
}

.raindrop:nth-child(43) {
  left: 437px;
  height: 28px;
  animation: drop 1s ease-in 0.98s infinite;
}

.raindrop:nth-child(44) {
  left: 230px;
  height: 27px;
  animation: drop 1s ease-in 0.1s infinite;
}

.raindrop:nth-child(45) {
  left: 72px;
  height: 26px;
  animation: drop 1s ease-in 0.07s infinite;
}

.raindrop:nth-child(46) {
  left: 405px;
  height: 22px;
  animation: drop 1s ease-in 0.64s infinite;
}

.raindrop:nth-child(47) {
  left: 103px;
  height: 40px;
  animation: drop 1s ease-in 0.63s infinite;
}

.raindrop:nth-child(48) {
  left: 380px;
  height: 33px;
  animation: drop 1s ease-in 0.97s infinite;
}

.raindrop:nth-child(49) {
  left: 64px;
  height: 46px;
  animation: drop 1s ease-in 0.52s infinite;
}

.raindrop:nth-child(50) {
  left: 11px;
  height: 15px;
  animation: drop 1s ease-in 0.58s infinite;
}`;},"7a2c6d03":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`$duration: 0.5s;

#app {
  display: flex;
}

.book {
  position: relative;
  width: 220px;
  height: 250px;
  margin: auto;
  perspective: 600px;
  transform: translateX(50%);
}

@keyframes flip {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-180deg);
  }
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #ffffff;
  transform-origin: left 0;
}

.page:first-child,
.page:last-child {
  z-index: -1;
  border-width: 0;
  background: #999999;
  transform: scale(1.05);
  transform-origin: left center;
}

.page:first-child {
  transform: scale(1.05) rotateY(-180deg);
}

@for $i from 2 through 19 {
  .page:nth-child(#{$i}) {
    animation: flip #{$duration * $i} ease-in-out forwards infinite;
  }
}
`;},"7a9ba8dd":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  height: 100px;
}

.child1 {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: red;
}

.child2 {
  position: relative;
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: green;
}`;},"87deb272":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("332cd0a1")),l=o._(i("c55065c3")),d=o._(i("7a2c6d03")),s={id:"bookFlip",title:"book flip",desc:"Book flip animation",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"889e6e35":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
  background-color: black;
}

.dice {
  width: 100px;
  height: 100px;
  margin: auto;
  transform-style: preserve-3d;
  counter-reset: side;
  animation: spin 2s infinite linear;
}

.side {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #000000;
  background-color: #ffffff;
  font-size: 36px;
  line-height: 100px;
  counter-increment: side;
  text-align: center;
}
.side::before {
  content: counter(side);
}

.side:nth-child(1) {
  transform: rotateY(90deg) translateZ(50px);
}

.side:nth-child(2) {
  transform: rotateY(180deg) translateZ(50px);
}

.side:nth-child(3) {
  transform: rotateY(270deg) translateZ(50px);
}

.side:nth-child(4) {
  transform: rotateY(360deg) translateZ(50px);
}

.side:nth-child(5) {
  transform: rotateX(90deg) translateZ(50px);
}

.side:nth-child(6) {
  transform: rotateX(-90deg) translateZ(50px);
}

@keyframes spin {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}`;},"8a844209":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("d2b1118f")),d=o._(i("f71696c5")),s=o._(i("5068ea6d")),c={id:"verticalAlign",title:"vertical-align",desc:"css vertical-align characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"8b2013b2":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
}

.container {
  max-width: 80%;
  margin: auto;
}

@keyframes text {
  from {
    background-size: 0% 100%;
  }

  to {
    background-size: 100% 100%;
  }
}

.text {
  background-image: linear-gradient(to right, black 0, black 100%);
  background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  font-size: 24px;
  line-height: 36px;
  animation: text 10s linear infinite;
}
`;},"8c0b1759":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("6dd6dd16")),d=o._(i("ca8bbf13")),s=o._(i("5b9b2f6d")),c={id:"float",title:"float",desc:"css float characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},"8d2489ba":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="rain">
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
  <div class="raindrop"></div>
</div>
`;},"917213ae":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
  background: #223344;
}

@keyframes firework {
  0% {
    width: 5px;
    opacity: 1;
    transform: translate(-50%, 200px);
  }

  50% {
    width: 5px;
    opacity: 1;
  }

  100% {
    width: 450px;
    opacity: 0;
  }
}

.firework,
.firework::before,
.firework::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  background:
    radial-gradient(circle, #ffff00 2px, #00000000 0) 50% 00%,
    radial-gradient(circle, #ffff00 3px, #00000000 0) 00% 50%,
    radial-gradient(circle, #ffff00 5px, #00000000 0) 50% 99%,
    radial-gradient(circle, #ffff00 2px, #00000000 0) 99% 50%,
    radial-gradient(circle, #ffff00 3px, #00000000 0) 80% 90%,
    radial-gradient(circle, #ffff00 5px, #00000000 0) 95% 90%,
    radial-gradient(circle, #ffff00 5px, #00000000 0) 10% 60%,
    radial-gradient(circle, #ffff00 2px, #00000000 0) 31% 80%,
    radial-gradient(circle, #ffff00 3px, #00000000 0) 80% 10%,
    radial-gradient(circle, #ffff00 2px, #00000000 0) 90% 23%,
    radial-gradient(circle, #ffff00 3px, #00000000 0) 45% 20%,
    radial-gradient(circle, #ffff00 5px, #00000000 0) 13% 24%;
  background-size: 5px 5px;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  animation: firework 2s infinite;
  aspect-ratio: 1;
}

.firework::before {
  transform: translate(-50%, -50%) rotate(30deg);
}

.firework::after {
  transform: translate(-50%, -50%) rotate(-30deg);
}
`;},"92cc28ef":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
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
`;},"9370d78c":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.inline-level-box {
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
`;},"953dfae2":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return $;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("b3908126")),l=o._(i("d9ee3aa5")),d=o._(i("975c52b8")),s=o._(i("87deb272")),c=o._(i("2e3d6988")),f=o._(i("f3e012b0")),u=o._(i("c0fd6a57")),p=o._(i("1bee128a")),h=o._(i("c80a0c55")),m=o._(i("1f92043a")),b=o._(i("4905518c")),g=o._(i("03a0d524")),x=o._(i("8c0b1759")),v=o._(i("4aa6b49a")),_=o._(i("adf9a54c")),y=o._(i("cb8aa143")),k=o._(i("377810c4")),w=o._(i("5f78ff55")),P=o._(i("9b37ac6b")),O=o._(i("cc51c00f")),j=o._(i("f52aaf30")),M=o._(i("8a844209")),Y=o._(i("64748b6f")),z=o._(i("f83ec78b")),$=[r.default,l.default,d.default,s.default,c.default,f.default,u.default,p.default,h.default,m.default,b.default,g.default,x.default,v.default,_.default,y.default,k.default,w.default,P.default,O.default,j.default,M.default,Y.default,z.default];},96521757:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="fire">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
`;},"975c52b8":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("cd47cf95")),l=o._(i("cdbd32c8")),d=o._(i("26bd0e9e")),s={id:"batteryCharge",title:"battery charge",desc:"HuaWei battery charging animation.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"992f9bd0":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
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

<section>
  <h1>
    The percentage value of padding in any direction is calculated based on the width of the containing block. In
    absolute positioning it includes padding.
  </h1>
  <hr />

  <div class="parent6">
    <div class="child6"></div>
  </div>
</section>
`;},"999c83f8":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
  background: #000000;
}

.load {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 600px;
  height: 36px;
  margin-left: -300px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }
  35% {
    left: 41%;
    opacity: 1;
    transform: rotate(0deg);
  }
  65% {
    left: 59%;
    opacity: 1;
    transform: rotate(0deg);
  }
  100% {
    left: 100%;
    opacity: 0;
    transform: rotate(-180deg);
  }
}
.load div {
  position: absolute;
  width: 20px;
  height: 36px;
  color: #35c4f0;
  opacity: 0;
  transform: rotate(180deg);
  animation: move 2s linear infinite;
}

.load div:nth-child(2) {
  animation-delay: 0.2s;
}

.load div:nth-child(3) {
  animation-delay: 0.4s;
}

.load div:nth-child(4) {
  animation-delay: 0.6s;
}

.load div:nth-child(5) {
  animation-delay: 0.8s;
}

.load div:nth-child(6) {
  animation-delay: 1s;
}

.load div:nth-child(7) {
  animation-delay: 1.2s;
}`;},"9b37ac6b":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("63f77b08")),l=o._(i("40c79067")),d=o._(i("4148376d")),s={id:"pulse",title:"pulse",desc:"Simple loading icon.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},"9bdda8b0":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
  background: #000000;
}

.load {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 600px;
  height: 36px;
  margin-left: -300px;
  user-select: none;
}

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    opacity: 1;
    transform: rotate(0deg);
  }

  65% {
    left: 59%;
    opacity: 1;
    transform: rotate(0deg);
  }

  100% {
    left: 100%;
    opacity: 0;
    transform: rotate(-180deg);
  }
}

.load div {
  position: absolute;
  width: 20px;
  height: 36px;
  color: #35c4f0;
  opacity: 0;
  transform: rotate(180deg);
  animation: move 2s linear infinite;
}

@for $i from 2 through 7 {
  .load div:nth-child(#{$i}) {
    animation-delay: 0.2s * ($i - 1);
  }
}
`;},"9c741c8f":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.inline-level-box {
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
}`;},a08ba710:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  position: relative;
  background: #223344;
}

@keyframes firework {
  0% {
    width: 5px;
    opacity: 1;
    transform: translate(-50%, 200px);
  }
  50% {
    width: 5px;
    opacity: 1;
  }
  100% {
    width: 450px;
    opacity: 0;
  }
}
.firework,
.firework::before,
.firework::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  background: radial-gradient(circle, #ffff00 2px, rgba(0, 0, 0, 0) 0) 50% 0%, radial-gradient(circle, #ffff00 3px, rgba(0, 0, 0, 0) 0) 0% 50%, radial-gradient(circle, #ffff00 5px, rgba(0, 0, 0, 0) 0) 50% 99%, radial-gradient(circle, #ffff00 2px, rgba(0, 0, 0, 0) 0) 99% 50%, radial-gradient(circle, #ffff00 3px, rgba(0, 0, 0, 0) 0) 80% 90%, radial-gradient(circle, #ffff00 5px, rgba(0, 0, 0, 0) 0) 95% 90%, radial-gradient(circle, #ffff00 5px, rgba(0, 0, 0, 0) 0) 10% 60%, radial-gradient(circle, #ffff00 2px, rgba(0, 0, 0, 0) 0) 31% 80%, radial-gradient(circle, #ffff00 3px, rgba(0, 0, 0, 0) 0) 80% 10%, radial-gradient(circle, #ffff00 2px, rgba(0, 0, 0, 0) 0) 90% 23%, radial-gradient(circle, #ffff00 3px, rgba(0, 0, 0, 0) 0) 45% 20%, radial-gradient(circle, #ffff00 5px, rgba(0, 0, 0, 0) 0) 13% 24%;
  background-size: 5px 5px;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  animation: firework 2s infinite;
  aspect-ratio: 1;
}

.firework::before {
  transform: translate(-50%, -50%) rotate(30deg);
}

.firework::after {
  transform: translate(-50%, -50%) rotate(-30deg);
}`;},a3160ee9:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="container">
  <span class="text">
    Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire
    world, stimulating progress, giving birth to evolution.
  </span>
</div>
`;},aa837ab3:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>The height of a line box is determined by the highest content within it, including the empty node.</h1>
  <hr />

  <div class="parent">
    <span class="child">child</span>
    <br />
    <span class="child2">child2</span>
  </div>

  <div class="parent2">
    <span class="child">child</span>
    <span class="child2">child2</span>
  </div>
</section>
`;},abd82204:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
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
}`;},adf9a54c:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("f597ccaf")),l=o._(i("e41dd676")),d=o._(i("588e2ad7")),s={id:"jellyBox",title:"jelly box",desc:"Jumping jelly box",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},b3908126:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("1b6d9e9a")),d=o._(i("d9edd1bb")),s=o._(i("bc14077e")),c={id:"absolute",title:"absolute",desc:"css absolute characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},b4fd3cbd:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent1 {
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
}`;},b58e7079:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  counter-reset: counter1 0;
}

.child {
  counter-increment: counter1 1;
}

.child::before {
  content: counter(counter1, upper-roman);
}

.parent2 {
  counter-reset: counter2 0 counter3 0;
}

.child1 {
  counter-increment: counter2 1;
  counter-reset: counter3 0;
}

.child2 {
  counter-increment: counter3 1;
}

.child1::before {
  content: counter(counter2);
}

.child2::before {
  content: counter(counter3);
}

.parent3 {
  counter-reset: counter4 0;
}

.child3 {
  counter-increment: counter4 1;
}

.child3::before {
  content: counters(counter4, '-', decimal);
}
`;},bc14077e:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  height: 100px;
}

.child {
  position: absolute;
  display: inline-flex;
  align-items: center;
  height: 50px;
  background-color: red;
}

.parent2 {
  overflow: hidden;
  width: 100px;
  height: 100px;
  background-color: red;
}

.child2 {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: blue;
}
`;},c0fd6a57:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("53a1347d")),l=o._(i("5272ca90")),d=o._(i("0ff84df9")),s={id:"clock",title:"clock",desc:"Clock animation",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},c55065c3:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
}

.book {
  position: relative;
  width: 220px;
  height: 250px;
  margin: auto;
  perspective: 600px;
  transform: translateX(50%);
}

@keyframes flip {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-180deg);
  }
}
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #ffffff;
  transform-origin: left 0;
}

.page:first-child,
.page:last-child {
  z-index: -1;
  border-width: 0;
  background: #999999;
  transform: scale(1.05);
  transform-origin: left center;
}

.page:first-child {
  transform: scale(1.05) rotateY(-180deg);
}

.page:nth-child(2) {
  animation: flip 1s ease-in-out forwards infinite;
}

.page:nth-child(3) {
  animation: flip 1.5s ease-in-out forwards infinite;
}

.page:nth-child(4) {
  animation: flip 2s ease-in-out forwards infinite;
}

.page:nth-child(5) {
  animation: flip 2.5s ease-in-out forwards infinite;
}

.page:nth-child(6) {
  animation: flip 3s ease-in-out forwards infinite;
}

.page:nth-child(7) {
  animation: flip 3.5s ease-in-out forwards infinite;
}

.page:nth-child(8) {
  animation: flip 4s ease-in-out forwards infinite;
}

.page:nth-child(9) {
  animation: flip 4.5s ease-in-out forwards infinite;
}

.page:nth-child(10) {
  animation: flip 5s ease-in-out forwards infinite;
}

.page:nth-child(11) {
  animation: flip 5.5s ease-in-out forwards infinite;
}

.page:nth-child(12) {
  animation: flip 6s ease-in-out forwards infinite;
}

.page:nth-child(13) {
  animation: flip 6.5s ease-in-out forwards infinite;
}

.page:nth-child(14) {
  animation: flip 7s ease-in-out forwards infinite;
}

.page:nth-child(15) {
  animation: flip 7.5s ease-in-out forwards infinite;
}

.page:nth-child(16) {
  animation: flip 8s ease-in-out forwards infinite;
}

.page:nth-child(17) {
  animation: flip 8.5s ease-in-out forwards infinite;
}

.page:nth-child(18) {
  animation: flip 9s ease-in-out forwards infinite;
}

.page:nth-child(19) {
  animation: flip 9.5s ease-in-out forwards infinite;
}`;},c80a0c55:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("10db09a4")),l=o._(i("889e6e35")),d=o._(i("e26a6a21")),s={id:"dice",title:"dice",desc:"Dice animation",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},ca8bbf13:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: red;
}

.line2 {
  float: right;
}

.float1,
.float2 {
  float: left;
}

li {
  float: left;
}

.parent3 > :nth-child(3) {
  clear: both;
}`;},cb8aa143:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("aa837ab3")),d=o._(i("4ac3a9dc")),s=o._(i("19fa51aa")),c={id:"lineHeight",title:"line-height",desc:"css line-height characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},cc51c00f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("8d2489ba")),l=o._(i("7159fa00")),d=o._(i("4622116c")),s={id:"rain",title:"rain",desc:"Rain animation",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},cd47cf95:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="container">
  <div class="number">99.9%</div>
  <div class="contrast">
    <div class="circle"></div>
    <ul class="bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
`;},cdbd32c8:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # app */
#app {
  background: #000000;
}

/* # container */
.container {
  position: relative;
  width: 300px;
  height: 400px;
  margin: auto;
}

/* # number */
.number {
  position: absolute;
  top: 27%;
  z-index: 10;
  width: 300px;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
}

/* # contrast */
@keyframes hue-rotate {
  0% {
    filter: contrast(10) hue-rotate(0);
  }
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}
.contrast {
  overflow: hidden;
  height: 100%;
  background-color: #000000;
  animation: hue-rotate 10s infinite linear;
}

/* # circle */
@keyframes rotate {
  0% {
    border-radius: 45%/42% 38% 58% 49%;
    transform: translate(-50%, -50%) rotate(0);
  }
  50% {
    border-radius: 42% 38% 62% 49%/45%;
  }
  100% {
    border-radius: 45%/42% 38% 58% 49%;
    transform: translate(-50%, -50%) rotate(720deg);
  }
}
.circle {
  position: relative;
  width: 300px;
  height: 300px;
  /* anti-alias */
  filter: blur(8px);
  /* outer circle */
  /* inner circle */
}
.circle::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: #00ff6f;
  animation: rotate 10s infinite linear;
}
.circle::before {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 10;
  width: 176px;
  height: 176px;
  border-radius: 50%;
  background-color: #000000;
  transform: translate(-50%, -50%);
}

/* # bubbles */
.bubbles {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100px;
  height: 40px;
  border-radius: 100px 100px 0 0;
  background-color: #00ff6f;
  filter: blur(5px);
  transform: translate(-50%, 0);
}

li {
  position: absolute;
  border-radius: 50%;
  background: #00ff6f;
}

@keyframes move-to-top {
  0% {
    transform: translate(-50%, -50%);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(-50%, -180px);
  }
}
li:nth-child(0) {
  top: 50%;
  left: 81px;
  width: 27px;
  height: 27px;
  animation: move-to-top 9s ease-in-out -0.311s infinite;
}

li:nth-child(1) {
  top: 50%;
  left: 11px;
  width: 28px;
  height: 28px;
  animation: move-to-top 7s ease-in-out -2.174s infinite;
}

li:nth-child(2) {
  top: 50%;
  left: 23px;
  width: 23px;
  height: 23px;
  animation: move-to-top 7s ease-in-out -4.131s infinite;
}

li:nth-child(3) {
  top: 50%;
  left: 19px;
  width: 19px;
  height: 19px;
  animation: move-to-top 7s ease-in-out -2.35s infinite;
}

li:nth-child(4) {
  top: 50%;
  left: 12px;
  width: 25px;
  height: 25px;
  animation: move-to-top 4s ease-in-out -2.392s infinite;
}

li:nth-child(5) {
  top: 50%;
  left: 77px;
  width: 21px;
  height: 21px;
  animation: move-to-top 9s ease-in-out -3.706s infinite;
}

li:nth-child(6) {
  top: 50%;
  left: 27px;
  width: 28px;
  height: 28px;
  animation: move-to-top 5s ease-in-out -1.737s infinite;
}

li:nth-child(7) {
  top: 50%;
  left: 85px;
  width: 19px;
  height: 19px;
  animation: move-to-top 7s ease-in-out -2.302s infinite;
}

li:nth-child(8) {
  top: 50%;
  left: 71px;
  width: 29px;
  height: 29px;
  animation: move-to-top 8s ease-in-out -4.341s infinite;
}

li:nth-child(9) {
  top: 50%;
  left: 61px;
  width: 21px;
  height: 21px;
  animation: move-to-top 4s ease-in-out -0.221s infinite;
}

li:nth-child(10) {
  top: 50%;
  left: 47px;
  width: 29px;
  height: 29px;
  animation: move-to-top 5s ease-in-out -1.729s infinite;
}

li:nth-child(11) {
  top: 50%;
  left: 24px;
  width: 24px;
  height: 24px;
  animation: move-to-top 8s ease-in-out -4.668s infinite;
}

li:nth-child(12) {
  top: 50%;
  left: 97px;
  width: 29px;
  height: 29px;
  animation: move-to-top 4s ease-in-out -2.346s infinite;
}

li:nth-child(13) {
  top: 50%;
  left: 47px;
  width: 28px;
  height: 28px;
  animation: move-to-top 5s ease-in-out -4.253s infinite;
}

li:nth-child(14) {
  top: 50%;
  left: 82px;
  width: 28px;
  height: 28px;
  animation: move-to-top 4s ease-in-out -2.731s infinite;
}

li:nth-child(15) {
  top: 50%;
  left: 43px;
  width: 19px;
  height: 19px;
  animation: move-to-top 5s ease-in-out -3.951s infinite;
}`;},d2b1118f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>If there is not enough space available, extend the line-height and offset it again.</h1>
  <hr />

  <div class="parent">
    <span class="child1">vertical-align > 0</span>
    <span class="child2">vertical-align = 0</span>
  </div>

  <div class="parent2">
    <span class="child3">vertical-align < 0</span>
    <span class="child4">vertical-align = 0</span>
  </div>
</section>

<section>
  <h1>'vertical-align' does not allow line boxes to overlap.</h1>
  <hr />

  <div class="parent3">
    <span class="child5">vertical-align > 0</span>
    <br />
    <span class="child6">vertical-align = 0</span>
  </div>
</section>
`;},d718e47c:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`@use 'sass:math';

#app {
  display: flex;
  background: #000000;
}

.fire {
  position: relative;
  box-sizing: border-box;
  margin: auto;
  border: 200px solid #000000;
  border-bottom-color: transparent;
  border-radius: 45%;
  background-color: #b5932f;
  filter: blur(20px) contrast(30);
  transform: translateY(-50%) scaleX(50%);
}

.dot {
  position: absolute;
  bottom: -200px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000000;
}

@keyframes move {
  100% {
    transform: translate3d(0, -350px, 0);
  }
}

@for $i from 1 to 50 {
  .dot:nth-child(#{$i}) {
    bottom: -#{math.random(240) + 120}px;
    left: #{math.random(300) - 160}px;
    animation: move #{math.div(7 + math.random(26), 10)}s infinite #{math.div(math.random(60), 10)}s linear;
  }
}
`;},d77c119d:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>
    The z-index of an element is only valid in the current cascading context. If an element itself generates a new
    cascading context, its z-index is for the cascading context outside of it
  </h1>
  <hr />

  <div class="parent">
    <div class="child1"></div>
    <div class="child2"></div>
  </div>
</section>
`;},d82e6e42:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`section {
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
}`;},d9edd1bb:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  height: 100px;
}

.child {
  position: absolute;
  display: inline-flex;
  align-items: center;
  height: 50px;
  background-color: red;
}

.parent2 {
  overflow: hidden;
  width: 100px;
  height: 100px;
  background-color: red;
}

.child2 {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: blue;
}`;},d9ee3aa5:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("4386746a")),d=o._(i("9c741c8f")),s=o._(i("9370d78c")),c={id:"anonymousBlockBox",title:"anonymous block box",desc:"how anonymous boxes are generated",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},ddc10d6f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  height: 100px;
}

.child1 {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: red;
}

.child2 {
  position: relative;
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: green;
}
`;},de6ffd56:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
  <h1>Basic usage</h1>
  <hr />

  <ul class="parent">
    <li class="child">child</li>
    <li>
      <span class="child">child</span>
    </li>
    <li class="child">child</li>
    <li class="child">child</li>
  </ul>
</section>

<section>
  <h1>Multiple counters</h1>
  <hr />

  <ul class="parent2">
    <li class="child1">child1</li>
    <li class="child2">child2</li>
    <li class="child2">child2</li>
    <li class="child2">child2</li>
    <li class="child1">child1</li>
    <li class="parent2">parent2</li>
    <li class="child2">child2</li>
  </ul>
</section>

<section>
  <h1>Nested counters</h1>
  <hr />

  <ul class="parent3">
    <li class="child3">child3</li>
    <li class="child3">child3</li>
    <li class="child3">
      <ul class="parent3">
        <li class="child3">child3</li>
        <li class="child3">child3</li>
      </ul>
    </li>
    <li class="child3">child3</li>
  </ul>
</section>
`;},e0a68dfc:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # wrapper */
#app {
  display: flex;
  background: #00cc99;
}

.loader {
  position: relative;
  width: 100px;
  margin: auto;
}

.loader div {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
}

/* # dots */
@keyframes animate {
  0% {
    top: 0;
    left: 100px;
  }

  80% {
    top: 0;
    left: 0;
  }

  85% {
    top: -20px;
    left: 0;
    width: 20px;
    height: 20px;
  }

  90% {
    width: 40px;
    height: 15px;
  }

  95% {
    top: -20px;
    left: 100px;
    width: 20px;
    height: 20px;
  }

  100% {
    top: 0;
    left: 100px;
  }
}

@for $i from 1 through 5 {
  .d#{$i} {
    animation: animate 2s linear infinite -0.4s * $i + 0.4s;
  }
}
`;},e26a6a21:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
  display: flex;
  background-color: black;
}

.dice {
  width: 100px;
  height: 100px;
  margin: auto;
  transform-style: preserve-3d;
  counter-reset: side;
  animation: spin 2s infinite linear;
}

.side {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #000000;
  background-color: #ffffff;
  font-size: 36px;
  line-height: 100px;
  counter-increment: side;
  text-align: center;

  &::before {
    content: counter(side);
  }
}

@for $i from 1 through 4 {
  .side:nth-child(#{$i}) {
    transform: rotateY($i * 90deg) translateZ(50px);
  }
}

.side:nth-child(5) {
  transform: rotateX(90deg) translateZ(50px);
}

.side:nth-child(6) {
  transform: rotateX(-90deg) translateZ(50px);
}

@keyframes spin {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
`;},e41dd676:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # wrapper */
#app {
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #6997db;
}

@keyframes loader {
  0% {
    left: -100px;
  }
  100% {
    left: calc(100% + 100px);
  }
}
.loader {
  position: relative;
  animation: loader 5s linear infinite;
}

/* # box */
@keyframes box {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    border-bottom-right-radius: 40px;
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  background: #ffffff;
  animation: box 0.5s linear infinite;
}

/* # shadow */
@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}
.shadow {
  position: absolute;
  top: 59px;
  left: 0;
  width: 50px;
  height: 5px;
  border-radius: 50%;
  background: #000000;
  opacity: 0.1;
  animation: shadow 0.5s linear infinite;
}`;},e78c92ad:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
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

.parent6 {
  position: relative;
  box-sizing: padding-box;
  width: 100px;
  height: 200px;
  padding: 20px;
  background-color: red;
}

.child6 {
  position: absolute;
  padding: 50%;
  background-color: yellow;
}
`;},e8ed8fc5:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.box {
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: max-content;
}
`;},edc1dd7f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  display: flex;
  width: 300px;
  height: 50px;
  background-color: red;
}

.child {
  flex: 0.4 1 100px;
  background-color: green;
}
`;},f3e012b0:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("992f9bd0")),d=o._(i("0878149f")),s=o._(i("e78c92ad")),c={id:"boxSize",title:"box size",desc:"css box size characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},f52aaf30:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("a3160ee9")),l=o._(i("44d24b50")),d=o._(i("8b2013b2")),s={id:"typeWriter",title:"type writer",desc:"Type writer animation",category:"css",tags:["animation","background"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};},f597ccaf:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="loader">
  <div class="shadow"></div>
  <div class="box"></div>
</div>
`;},f71696c5:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  background-color: green;
  line-height: 100px;
}

.child1 {
  display: inline-block;
  vertical-align: 100%;
  background-color: red;
  font-size: 40px;
  line-height: 2;
}

.child2 {
  display: inline-block;
  background-color: yellow;
  font-size: 40px;
  line-height: 2;
}

.parent2 {
  background-color: purple;
  line-height: 100px;
}

.child3 {
  display: inline-block;
  vertical-align: -100px;
  background-color: red;
  font-size: 40px;
  line-height: 2;
}

.child4 {
  display: inline-block;
  background-color: yellow;
  font-size: 40px;
  line-height: 2;
}

.parent3 {
  background-color: green;
  line-height: 100px;
}

.child5 {
  display: inline-block;
  background-color: yellow;
}

.child6 {
  display: inline-block;
  vertical-align: 100px;
  background-color: red;
}`;},f83ec78b:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let o=i("@swc/helpers/_/_interop_require_default"),r=o._(i("d82e6e42")),l=o._(i("d77c119d")),d=o._(i("7a9ba8dd")),s=o._(i("ddc10d6f")),c={id:"zIndex",title:"z-index",desc:"css z-index characterization",category:"css",tags:["standard"],isStandard:!0,html:l.default,css:d.default+r.default,code:[{label:"html",filetype:"html",content:l.default},{label:"scss",filetype:"scss",content:s.default}]};},faf30963:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`.parent {
  display: flex;
  width: 300px;
  height: 50px;
  background-color: red;
}

.child {
  flex: 0.4 1 100px;
  background-color: green;
}`;},fe19a1e4:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<section>
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
`;},ff5e128e:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # wrapper */
#app {
  display: flex;
  background: #00cc99;
}

.loader {
  position: relative;
  width: 100px;
  margin: auto;
}

.loader div {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
}

/* # dots */
@keyframes animate {
  0% {
    top: 0;
    left: 100px;
  }
  80% {
    top: 0;
    left: 0;
  }
  85% {
    top: -20px;
    left: 0;
    width: 20px;
    height: 20px;
  }
  90% {
    width: 40px;
    height: 15px;
  }
  95% {
    top: -20px;
    left: 100px;
    width: 20px;
    height: 20px;
  }
  100% {
    top: 0;
    left: 100px;
  }
}
.d1 {
  animation: animate 2s linear infinite 0s;
}

.d2 {
  animation: animate 2s linear infinite -0.4s;
}

.d3 {
  animation: animate 2s linear infinite -0.8s;
}

.d4 {
  animation: animate 2s linear infinite -1.2s;
}

.d5 {
  animation: animate 2s linear infinite -1.6s;
}`;}}),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setInitialLoadedResources([]),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setDynamicModuleResourcesMap({});var o=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__;o.bootstrap();var r=o.require("953dfae2");let l=r.default||r;},});
//# sourceMappingURL=dist_index_2815.ffadd808.js.map