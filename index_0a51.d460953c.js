(function(_){for(var r in _){_[r].__farm_resource_pot__='index_0a51.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"03887fe2":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("edeb1d28"),t);},"03f923a8":function  (e,t,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"List",{enumerable:!0,get:function(){return b;}});let d=s("@swc/helpers/_/_interop_require_default"),n=s("31a222cd"),r=s("b599e05e"),i=s("11dd513f"),c=s("6e9a280b"),u=s("60ebcb4c"),o=s("786b7de5"),f=d._(s("23ec4682")),h=s("2259d9ae"),_=d._(s("08328d21")),b=e=>{let t,s;let l=(e,t)=>e.toLowerCase().includes(t.toLowerCase()),[d,b]=(0,h.useState)([]);(0,h.useEffect)(()=>{let t=new Set;g.forEach(s=>{!!s.isStandard===e.isStandard&&t.add(s.category);});let s=[];t.forEach(e=>s.push(e)),b(s);},[e.isStandard]);let g=f.default,[S,j]=(0,h.useState)([]),m=()=>{j(g.filter(d=>!!d.isStandard===e.isStandard&&!!(!t&&(!s||0===s.length)||t&&l(d.title,t)||t&&d.tags?.find(e=>l(e,t))||s&&s.includes(d.category))));},p=(0,i.useDebounce)(m);return(0,h.useEffect)(m,[e.isStandard]),(0,n.jsxs)("div",{className:_.default.main,children:[(0,n.jsxs)("div",{className:_.default.filter,children:[(0,n.jsx)("span",{className:_.default.filter__label,children:"Title/Tag"}),(0,n.jsx)(c.Input,{onChange:e=>{t=e,p();},iconUrl:(0,r.useAsset)("image/search.svg")}),(0,n.jsx)("span",{className:_.default.filter__label,children:"Category"}),(0,n.jsx)(u.Selection,{onChange:e=>{s=e,p();},items:d})]}),(0,n.jsx)("div",{className:_.default.showcases,children:S.map((e,t)=>(0,n.jsx)(o.ShowCase,{options:e},t))})]});};},"08328d21":function  (e,t,b,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l={filter:"filter-e0b9bf8e",filter__label:"filter__label-e0b9bf8e",main:"main-e0b9bf8e",showcases:"showcases-e0b9bf8e"};},"0c7ee846":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("824607c6"),t);},"11dd513f":function  (e,t,i,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useDebounce",{enumerable:!0,get:function(){return n;}});let n=(e,t)=>{let i,u;let n={waitTime:500,...t??{}};return(...t)=>{let r=new Date().getTime();i&&i+n.waitTime>r&&clearTimeout(u),u=setTimeout(()=>e(...t),n.waitTime),i=r;};};},"14a92e63":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("554343aa"),t);},"175e3b2b":function  (e,t,i,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="formattingContext.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"3d6ac7fd":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
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
`;},"4aa6b49a":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let n=i("@swc/helpers/_/_interop_require_default"),d=n._(i("d82e6e42")),o=n._(i("3d6ac7fd")),c=n._(i("b4fd3cbd")),l=n._(i("6d7accd3")),s={title:"formatting context",desc:"css formatting context characterization",category:"css",tags:["standard"],isStandard:!0,html:o.default,css:c.default+d.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:l.default}]};},"6d7accd3":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent1 {
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
`;},b4fd3cbd:function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent1 {
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
}`;}});},"1d47e71d":function  (e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Error",{enumerable:!0,get:function(){return i;}});let c=t("31a222cd"),i=()=>(0,c.jsx)("div",{children:"发生错误"});},"1fb2c2db":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return s;}});let l=n("@swc/helpers/_/_interop_require_default"),c=n("31a222cd"),i=n("2607461a"),u=l._(n("8c2a1c95")),s=e=>(0,c.jsxs)("div",{className:u.default.input,children:[e.iconUrl?(0,c.jsx)(i.Image,{src:e.iconUrl,className:u.default.input__prefix}):void 0,(0,c.jsx)("input",{className:u.default.input__inner,type:"text",placeholder:e.placeholder,onChange:t=>e.onChange&&e.onChange(t.target?.value)})]});},"23ec4682":function  (e,t,f,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b;}}),f("d11778a3"),f("9b09de07"),f("fa5f1ffe"),f("38b0b8e8"),f("fe92a235"),f("aae65670"),f("5b04946c"),f("446bde7c"),f("175e3b2b"),f("631a8d9e"),f("8fdd23c1"),f("78db4896"),f("cb624719"),f("ffb8747d"),function(e){for(var t in e)e[t].__farm_resource_pot__="index_03e9.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"953dfae2":function(e,t,f,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x;}});let o=f("@swc/helpers/_/_interop_require_default"),l=o._(f("b3908126")),b=o._(f("d9ee3aa5")),r=o._(f("2e3d6988")),n=o._(f("f3e012b0")),s=o._(f("1bee128a")),i=o._(f("03a0d524")),u=o._(f("8c0b1759")),_=o._(f("4aa6b49a")),c=o._(f("cb8aa143")),p=o._(f("5f78ff55")),m=o._(f("8a844209")),j=o._(f("3650c57d")),g=o._(f("f83ec78b")),x=[l.default,b.default,r.default,n.default,s.default,i.default,u.default,_.default,c.default,p.default,m.default,j.default,g.default];},d82e6e42:function(e,t,f,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`section {
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
}`;}}),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setInitialLoadedResources(["absolute.fda8a9e6.js","anonymousBlockBox.9203ddcb.js","boxModel.634ce484.js","boxSize.f903fa5f.js","counter.67b78f1a.js","flex.9692937a.js","float.79eeefeb.js","formattingContext.29f6a28e.js","lineHeight.f35e491b.js","minContent.66d97bc4.js","verticalAlign.50621072.js","wavyUnderline.916f0b04.js","zIndex.7fb440af.js"]),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setDynamicModuleResourcesMap({});var o=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__;o.bootstrap();var l=o.require("953dfae2");let b=l.default||l;},"2607461a":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("929b8859"),t);},"2bcde850":function  (e,t,b,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n={tab:"tab-a966ba4c","tab--active":"tab--active-a966ba4c",tabs:"tabs-a966ba4c"};},"2c6e69f1":function  (e,r,o,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});let d=o("31a222cd"),s=o("44f760a0"),n=o("2259d9ae"),c=o("4ef5aa11"),u=o("aab0a90a"),i=o("93843902");document.head.attachShadow||(0,s.notify)("error","Your browser does not support shadow dom. Please use the another browser supporting it instead."),(0,c.createRoot)(document.querySelector("#app")).render((0,d.jsx)(n.StrictMode,{children:(0,d.jsx)(u.BrowserRouter,{children:(0,d.jsx)(i.App,{})})}));},"2ea370be":function  (e,t,o,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Frame",{enumerable:!0,get:function(){return l;}});let n=o("31a222cd"),r=o("f8d6a1d2"),s=o("2259d9ae"),l=e=>{let t;let o=(0,s.useRef)(),d=(0,r.localUniqId)();return(0,s.useEffect)(()=>{if(t||(t=o?.current?.shadowRoot?o.current.shadowRoot:o.current?.attachShadow({mode:"open"})),t){for(;t.firstChild;)t.removeChild(t.firstChild);if(e.html&&(t.innerHTML=e.html),e.css){let o=document.createElement("style");o.textContent=e.css,t.appendChild(o);}if(e.js){let o=`var shadowRoot = document.getElementById('${d}').shadowRoot
`,n=document.createElement("script");n.textContent=o+e.js.replaceAll("document.","shadowRoot."),t.appendChild(n);}}},[e.js,e.html,e.css]),(0,n.jsx)("div",{id:d,ref:o,className:e.className});};},"38b0b8e8":function  (e,t,n,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="boxModel.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"253673e4":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},"2e3d6988":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let i=n("@swc/helpers/_/_interop_require_default"),o=i._(n("d82e6e42")),d=i._(n("253673e4")),l=i._(n("abd82204")),c=i._(n("92cc28ef")),s={title:"box model",desc:"css box model characterization",category:"css",tags:["standard"],isStandard:!0,html:d.default,css:l.default+o.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:c.default}]};},"92cc28ef":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
`;},abd82204:function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
}`;}});},"3a2b0339":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"classes",{enumerable:!0,get:function(){return i;}});let i=(...e)=>e.filter(e=>"string"==typeof e).join(" ");},"3ef60bee":function  (e,s,l,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"Layout",{enumerable:!0,get:function(){return f;}});let c=l("@swc/helpers/_/_interop_require_default"),d=l("31a222cd"),n=l("b599e05e"),o=l("3a2b0339"),i=l("2259d9ae"),r=l("2607461a"),u=c._(l("5d89d03e")),f=e=>{let[s,l]=(0,i.useState)(!1);return(0,d.jsxs)("div",{className:(0,o.classes)(u.default.layout,s?u.default["layout--nav-collapsed"]:void 0),children:[(0,d.jsxs)("nav",{className:(0,o.classes)(u.default.nav,s?u.default["nav-collapsed"]:void 0),onClick:()=>{s&&l(!1);},children:[s?void 0:e.nav,s?void 0:(0,d.jsx)(r.Image,{src:(0,n.useAsset)("image/collapse.svg"),className:(0,o.classes)(u.default["collapse-btn"],"o-btn"),onClick:()=>{l(!0);}})]}),(0,d.jsx)("main",{className:u.default.main,children:e.main}),(0,d.jsx)("footer",{className:u.default.footer,children:e.footer})]});};},"446bde7c":function  (e,t,l,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="float.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"5b9b2f6d":function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=`.parent {
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
`;},"6dd6dd16":function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=`<section>
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
`;},"8c0b1759":function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let r=l("@swc/helpers/_/_interop_require_default"),o=r._(l("d82e6e42")),i=r._(l("6dd6dd16")),s=r._(l("ca8bbf13")),c=r._(l("5b9b2f6d")),f={title:"float",desc:"css float characterization",category:"css",tags:["standard"],isStandard:!0,html:i.default,css:s.default+o.default,code:[{label:"html",filetype:"html",content:i.default},{label:"scss",filetype:"scss",content:c.default}]};},ca8bbf13:function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=`.parent {
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
}`;}});},"44f760a0":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("945ecf99"),t);},"48529b60":function  (e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r="/JetBrainsMono-BoldItalic.3a013466-65790d.woff2";},"554343aa":function  (e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tabs",{enumerable:!0,get:function(){return b;}});let l=s("@swc/helpers/_/_interop_require_default"),c=s("31a222cd"),d=s("3a2b0339"),r=s("2259d9ae"),i=l._(s("2bcde850")),b=e=>{let[t,s]=(0,r.useState)(),n=n=>{t!==n?(s(n),e.onTabChange&&e.onTabChange(n)):(s(void 0),e.onTabChange&&e.onTabChange(void 0));};return(0,c.jsx)("div",{className:(0,d.classes)(i.default.tabs,e.className),children:e.tabs.map(e=>(0,c.jsx)("span",{className:(0,d.classes)(i.default.tab,t===e?i.default["tab--active"]:void 0),onClick:()=>n(e),children:e},e))});};},"56fdf8a1":function  (e,t,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return u;}});let r=s("@swc/helpers/_/_interop_require_default"),n=s("31a222cd"),c=s("3a2b0339"),l=r._(s("67c07953")),u=()=>(0,n.jsxs)("div",{className:l.default.footer,children:[(0,n.jsxs)("p",{className:l.default.text,children:["View on ",(0,n.jsx)("a",{className:(0,c.classes)("wavy-underline","o-btn"),href:"https://github.com/niuiic/web-vista",target:"_blank",children:"github"})]}),(0,n.jsx)("p",{className:l.default.text,children:"Copyright © 2023-present niuiic"})]});},"5b04946c":function  (e,t,l,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="flex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"03a0d524":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let n=l("@swc/helpers/_/_interop_require_default"),c=n._(l("d82e6e42")),d=n._(l("592f58e5")),f=n._(l("faf30963")),i=n._(l("edc1dd7f")),o={title:"flex",desc:"css flex characterization",category:"css",tags:["standard"],isStandard:!0,html:d.default,css:f.default+c.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:i.default}]};},"592f58e5":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
  <h1>If the sum of the flex-grow of a flex item is less than 1, the flex container may not be filled.</h1>
  <hr />

  <div class="parent">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</section>
`;},edc1dd7f:function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent {
  display: flex;
  width: 300px;
  height: 50px;
  background-color: red;
}

.child {
  flex: 0.4 1 100px;
  background-color: green;
}
`;},faf30963:function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent {
  display: flex;
  width: 300px;
  height: 50px;
  background-color: red;
}

.child {
  flex: 0.4 1 100px;
  background-color: green;
}`;}});},"5d89d03e":function  (c,e,l,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n={"collapse-btn":"collapse-btn-4122cc82",footer:"footer-4122cc82",layout:"layout-4122cc82","layout--nav-collapsed":"layout--nav-collapsed-4122cc82",main:"main-4122cc82",nav:"nav-4122cc82","nav-collapsed":"nav-collapsed-4122cc82","nav-collapsed-bg":"nav-collapsed-bg-4122cc82"};},"60ebcb4c":function  (e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Selection",{enumerable:!0,get:function(){return u;}});let i=l("@swc/helpers/_/_interop_require_default"),s=l("31a222cd"),c=l("3a2b0339"),d=l("2259d9ae"),r=i._(l("d4e57cb7")),u=e=>{let[t,l]=(0,d.useState)([]),n=n=>{let i;i=t.includes(n)?t.filter(e=>e!==n):[...t,n],e.onChange&&e.onChange(i),l(i);};return(0,s.jsx)("div",{className:r.default.selection,children:e.items.map(e=>(0,s.jsx)("div",{className:(0,c.classes)(r.default.item,"o-btn",t.includes(e)?r.default["item--selected"]:void 0),onClick:()=>n(e),children:e},e))});};},"631a8d9e":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="lineHeight.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"19fa51aa":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.parent {
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
`;},"4ac3a9dc":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.parent {
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
}`;},aa837ab3:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`<section>
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
`;},cb8aa143:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let l=i("@swc/helpers/_/_interop_require_default"),c=l._(i("d82e6e42")),r=l._(i("aa837ab3")),o=l._(i("4ac3a9dc")),s=l._(i("19fa51aa")),d={title:"line-height",desc:"css line-height characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:o.default+c.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:s.default}]};}});},"67c07953":function  (e,t,r,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o={footer:"footer-adf5cea1",text:"text-adf5cea1"};},"6e9a280b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("1fb2c2db"),t);},"779af01c":function  (e,n,t,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d;}});let d={dialog:"dialog-4ca616de",dialog__inner:"dialog__inner-4ca616de"};},"786b7de5":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("fa5afec0"),t);},"78db4896":function  (e,l,i,n){!function(e){for(var l in e)e[l].__farm_resource_pot__="verticalAlign.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(l,e[l]);}({"5068ea6d":function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return c;}});let c=`.parent {
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
`;},"8a844209":function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return s;}});let c=i("@swc/helpers/_/_interop_require_default"),t=c._(i("d82e6e42")),o=c._(i("d2b1118f")),r=c._(i("f71696c5")),d=c._(i("5068ea6d")),s={title:"vertical-align",desc:"css vertical-align characterization",category:"css",tags:["standard"],isStandard:!0,html:o.default,css:r.default+t.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:d.default}]};},d2b1118f:function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return c;}});let c=`<section>
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
`;},f71696c5:function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return c;}});let c=`.parent {
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
}`;}});},"7955362b":function  (e,r,t,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Code",{enumerable:!0,get:function(){return i;}});let c=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),d=c._(t("c85d2dfa")),l=t("2259d9ae"),f=c._(t("c86c3cd1")),i=e=>{let r=(0,l.useRef)();return(0,l.useEffect)(()=>{r.current&&(r.current.innerHTML=d.default.highlight(e.code,{language:e.language}).value);},[e.code,e.language]),(0,n.jsx)("pre",{ref:r,className:f.default.code});};},"7dfa112b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("3ef60bee"),t);},"824607c6":function  (e,l,t,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Nav",{enumerable:!0,get:function(){return o;}});let r=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),i=t("3a2b0339"),c=t("aab0a90a"),d=r._(t("a81951de")),o=e=>{let l=(0,c.useNavigate)();return(0,n.jsxs)("div",{className:d.default.nav,children:[(0,n.jsx)("h1",{className:(0,i.classes)(d.default.title,"o-btn"),onClick:()=>{l("/");},children:"Web Vista"}),(0,n.jsxs)("svg",{className:d.default.slogan,viewBox:"0 0 140 60",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circle",d:"M 10 25 Q 70 60 130 25"})}),(0,n.jsx)("rect",{className:d.default.slogan__inner,width:140,height:60,fill:"none",strokeWidth:5,strokeDasharray:"100 100"}),(0,n.jsx)("text",{children:(0,n.jsx)("textPath",{xlinkHref:"#circle",stroke:"currentcolor",fill:"currentcolor",children:"Sharing Ideas"})})]}),(0,n.jsx)("ul",{className:d.default.entries,children:e.entries.map(l=>(0,n.jsx)("li",{className:(0,i.classes)(d.default.entry,"o-btn",l.label===e.currentEntry?d.default["entry--active"]:void 0),onClick:l.onClick,children:l.label},l.label))})]});};},"8c2a1c95":function  (e,n,t,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u;}});let u={input:"input-8e0b9421",input__inner:"input__inner-8e0b9421",input__prefix:"input__prefix-8e0b9421"};},"8fdd23c1":function  (e,t,n,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="minContent.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"533e8601":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.box {
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: max-content;
}`;},"5f78ff55":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let l=n("@swc/helpers/_/_interop_require_default"),s=l._(n("d82e6e42")),c=l._(n("fe19a1e4")),d=l._(n("533e8601")),o=l._(n("e8ed8fc5")),r={title:"min-content",desc:"css width min-content characterization",category:"css",tags:["standard"],isStandard:!0,html:c.default,css:d.default+s.default,code:[{label:"html",filetype:"html",content:c.default},{label:"scss",filetype:"scss",content:o.default}]};},e8ed8fc5:function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.box {
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: max-content;
}
`;},fe19a1e4:function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`<section>
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
`;}});},"929b8859":function  (e,c,l,s){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u;}});let r=l("@swc/helpers/_/_interop_require_default"),t=l("31a222cd"),i=l("3a2b0339"),n=r._(l("ef4ccfa0")),u=e=>(0,t.jsx)("img",{src:e.src,draggable:"false",loading:"lazy",className:(0,i.classes)(n.default.image,e.className),onClick:e.onClick});},"93843902":function  (e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"App",{enumerable:!0,get:function(){return h;}});let r=s("31a222cd"),l=s("7dfa112b"),o=s("2259d9ae"),d=s("aab0a90a"),i=s("9fd73c3e"),u=s("0c7ee846"),c=s("a1846452"),j=s("1d47e71d"),x=s("c40ae205"),f=s("03f923a8"),h=()=>{let e=(0,d.useNavigate)(),t=(0,d.useLocation)(),s=[{label:"showcase",onClick:()=>e("/showcase")},{label:"standard",onClick:()=>e("/standard")}],[n,h]=(0,o.useState)(s[0].label);return(0,o.useEffect)(()=>{let e=s.find(e=>t.pathname.startsWith("/"+e.label));if(!e){h(void 0);return;}h(e.label);},[t]),(0,r.jsx)(l.Layout,{nav:(0,r.jsx)(u.Nav,{entries:s,currentEntry:n}),main:(0,r.jsxs)(d.Routes,{children:[(0,r.jsx)(d.Route,{path:"/",element:(0,r.jsx)(x.Home,{})}),(0,r.jsx)(d.Route,{path:"/showcase",element:(0,r.jsx)(f.List,{isStandard:!1})}),(0,r.jsx)(d.Route,{path:"/standard",element:(0,r.jsx)(f.List,{isStandard:!0})}),(0,r.jsx)(d.Route,{path:"/detail",element:(0,r.jsx)(c.Detail,{})}),(0,r.jsx)(d.Route,{path:"*",element:(0,r.jsx)(j.Error,{})})]}),footer:(0,r.jsx)(i.Footer,{})});};},"945ecf99":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{Notify:function(){return c;},notify:function(){return function e(t,n){if(!n)return n=>e(t,n);let r=document.createElement("div");r.setAttribute("class",s.default.notify__wrapper),document.body.appendChild(r),(0,f.createRoot)(r).render((0,o.jsx)(c,{msg:n,type:t})),setTimeout(()=>{document.body.removeChild(r);},2e3);};}});let i=n("@swc/helpers/_/_interop_require_default"),o=n("31a222cd"),u=n("3a2b0339"),f=n("4ef5aa11"),s=i._(n("9a22db61")),c=e=>{let t={success:"notify--success",warning:"notify--warning",error:"notify--error",info:"notify--info"}[e.type];return(0,o.jsx)("div",{className:(0,u.classes)(s.default.notify,s.default[t]),children:e.msg});};},"9a22db61":function  (e,n,t,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i={"come-out":"come-out-e1ba72d4",notify:"notify-e1ba72d4","notify--error":"notify--error-e1ba72d4","notify--info":"notify--info-e1ba72d4","notify--success":"notify--success-e1ba72d4","notify--warning":"notify--warning-e1ba72d4",notify__wrapper:"notify__wrapper-e1ba72d4"};},"9b09de07":function  (e,t,n,o){!function(e){for(var t in e)e[t].__farm_resource_pot__="absolute.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"1b6d9e9a":function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},b3908126:function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let i=n("@swc/helpers/_/_interop_require_default"),l=i._(n("d82e6e42")),s=i._(n("1b6d9e9a")),c=i._(n("d9edd1bb")),r=i._(n("bc14077e")),d={title:"absolute",desc:"css absolute characterization",category:"css",tags:["standard"],isStandard:!0,html:s.default,css:c.default+l.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:r.default}]};},bc14077e:function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
`;},d9edd1bb:function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
}`;}});},"9e553abd":function  (e,r,_,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o;}});let o={category:"category-26443954",code__wrapper:"code__wrapper-26443954",desc:"desc-26443954",dialog:"dialog-26443954",dialog__body:"dialog__body-26443954",dialog__header:"dialog__header-26443954",frame:"frame-26443954",frame__btn:"frame__btn-26443954",frame__wrapper:"frame__wrapper-26443954","frame__wrapper--disactive":"frame__wrapper--disactive-26443954",info:"info-26443954",info__left:"info__left-26443954",showcase:"showcase-26443954",tabs:"tabs-26443954",tags:"tags-26443954",title:"title-26443954"};},"9fd73c3e":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("56fdf8a1"),t);},"a1846452":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Detail",{enumerable:!0,get:function(){return c;}});let r=i("31a222cd"),c=()=>(0,r.jsx)("div",{children:"detail"});},"a81951de":function  (e,t,n,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r={entries:"entries-52cf36f0",entry:"entry-52cf36f0","entry--active":"entry--active-52cf36f0",nav:"nav-52cf36f0",slogan:"slogan-52cf36f0","slogan-border":"slogan-border-52cf36f0",slogan__inner:"slogan__inner-52cf36f0",title:"title-52cf36f0","title-bg":"title-bg-52cf36f0"};},"aae65670":function  (e,c,t,l){!function(e){for(var c in e)e[c].__farm_resource_pot__="counter.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(c,e[c]);}({"1bee128a":function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return s;}});let n=t("@swc/helpers/_/_interop_require_default"),r=n._(t("d82e6e42")),i=n._(t("de6ffd56")),o=n._(t("6197a48d")),u=n._(t("b58e7079")),s={title:"counter",desc:"css counter characterization",category:"css",tags:["standard"],isStandard:!0,html:i.default,css:o.default+r.default,code:[{label:"html",filetype:"html",content:i.default},{label:"scss",filetype:"scss",content:u.default}]};},"6197a48d":function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent {
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
}`;},b58e7079:function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent {
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
`;},de6ffd56:function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
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
`;}});},"ac0a0cbe":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("7955362b"),t);},"aedc679a":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/JetBrainsMono-Regular.a9cb1cd8-9bdcf2.woff2";},"b599e05e":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useAsset",{enumerable:!0,get:function(){return s;}});let s=t=>new URL(`/src/asset/${t}`,e.meta.url).href;},"c40ae205":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Home",{enumerable:!0,get:function(){return i;}});let c=n("31a222cd"),i=()=>(0,c.jsx)("div",{children:"home"});},"c711f3e9":function  (e,t,n,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o="/JetBrainsMono-Bold.c503cc5e-8c856e.woff2";},"c86c3cd1":function  (e,t,d,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r={code:"code-deed1b03"};},"cb624719":function  (e,t,r,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="wavyUnderline.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"2e9047b6":function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`@keyframes bg-wave-flow {
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
`;},"3650c57d":function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p;}});let i=r("@swc/helpers/_/_interop_require_default"),o=i._(r("5a4fa45f")),c=i._(r("3bff51e1")),l=i._(r("2e9047b6")),p={title:"wavy underline",desc:"Text wave underline implementated with background animation",category:"css",tags:["background","animation"],html:o.default,css:c.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:l.default}]};},"3bff51e1":function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`@keyframes bg-wave-flow {
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
}`;},"5a4fa45f":function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<span class="text">wavyUnderline</span>
`;}});},"d11778a3":function  (e,t,r,o){(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a={__FARM_TARGET_ENV__:"browser"},function(e,t){var r={};function o(e){return Promise.resolve(i(e));}function i(t){if(r[t])return r[t].exports;var s={id:t,exports:{}};return r[t]=s,e[t](s,s.exports,i,o),s.exports;}i(t);}({"13561da2":function(e,t,r,o){"use strict";function i(e,t){return Object.keys(e).forEach(function(r){"default"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r];}});}),e;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return i;},_export_star:function(){return i;}});},54183975:function(e,t,r,o){"use strict";function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t;})(e);}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(o,n,u):o[n]=e[n];}return o.default=e,r&&r.set(e,o),o;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return s;},_interop_require_wildcard:function(){return s;}});},"55d27d5a":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{ResourceLoader:function(){return u;},__farm_global_this__:function(){return i;},isBrowser:function(){return n;},targetEnv:function(){return s;}});let i=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a,s=i.__FARM_TARGET_ENV__||"node",n="browser"===s&&(globalThis||window).document;class u{moduleSystem;_loadedResources;_loadingResources;publicPaths;constructor(e,t){this.moduleSystem=e,this._loadedResources={},this._loadingResources={},this.publicPaths=t;}load(e,t=0){if(!n){let t=this.moduleSystem.pluginContainer.hookBail("loadResource",e);if(t)return t.then(t=>{if(!t.success&&t.retryWithDefaultResourceLoader){if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}else if(!t.success)throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${t.err}`);});if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}let r=this.publicPaths[t],o=`${r.endsWith("/")?r.slice(0,-1):r}/${e.path}`;if(this._loadedResources[e.path])return;if(this._loadingResources[e.path])return this._loadingResources[e.path];let i=this.moduleSystem.pluginContainer.hookBail("loadResource",e);return i?i.then(r=>{if(r.success)this.setLoadedResource(e.path);else if(r.retryWithDefaultResourceLoader)return this._load(o,e,t);else throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${r.err}`);}):this._load(o,e,t);}setLoadedResource(e,t=!0){this._loadedResources[e]=t;}isResourceLoaded(e){return this._loadedResources[e];}_load(e,t,r){let o=Promise.resolve();return"script"===t.type?o=this._loadScript(e):"link"===t.type&&(o=this._loadLink(e)),this._loadingResources[t.path]=o,o.then(()=>{this._loadedResources[t.path]=!0,this._loadingResources[t.path]=null;}).catch(o=>{if(console.warn(`[Farm] Failed to load resource "${e}" using publicPath: ${this.publicPaths[r]}`),++r<this.publicPaths.length)return this._load(e,t,r);throw this._loadingResources[t.path]=null,Error(`[Farm] Failed to load resource: "${t.path}, type: ${t.type}". ${o}`);}),o;}_loadScript(e){return n?new Promise((t,r)=>{let o=document.createElement("script");o.src=e,document.body.appendChild(o),o.onload=()=>{t();},o.onerror=e=>{r(e);};}):import(e);}_loadLink(e){return n?new Promise((t,r)=>{let o=document.createElement("link");o.rel="stylesheet",o.href=e,document.head.appendChild(o),o.onload=()=>{t();},o.onerror=e=>{r(e);};}):Promise.resolve();}}},"5c9dc4a5":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModuleSystem",{enumerable:!0,get:function(){return p;}});let i=r("b82fc02f"),s=r("bd5d65ea"),n=r("55d27d5a"),u=r("f566227b"),l=r("54183975"),c=r("13561da2"),d=globalThis||window,h={"@swc/helpers/_/_interop_require_default":{default:u._interop_require_default,_:u._interop_require_default},"@swc/helpers/_/_interop_require_wildcard":{default:l._interop_require_wildcard,_:l._interop_require_wildcard},"@swc/helpers/_/_export_star":{default:c._export_star,_:c._export_star}};class p{modules;cache;externalModules;reRegisterModules;publicPaths;dynamicModuleResourcesMap;resourceLoader;pluginContainer;targetEnv;constructor(){this.modules={},this.cache={},this.publicPaths=[],this.dynamicModuleResourcesMap={},this.resourceLoader=new n.ResourceLoader(this,this.publicPaths),this.pluginContainer=new s.FarmRuntimePluginContainer([]),this.targetEnv=n.targetEnv,this.externalModules={},this.reRegisterModules=!1;}require(e,t=!1){if(h[e])return h[e];if(this.cache[e]&&!this.pluginContainer.hookBail("readModuleCache",this.cache[e]))return this.cache[e].exports;let r=this.modules[e];if(!r){if(this.externalModules[e]){let r=this.externalModules[e];return t&&r.default||r;}return("node"===this.targetEnv||!n.isBrowser)&&nodeRequire?nodeRequire(e):(this.pluginContainer.hookSerial("moduleNotFound",e),console.debug(`[Farm] Module "${e}" is not registered`),{});}let o=new i.Module(e,this.require.bind(this));o.resource_pot=r.__farm_resource_pot__,this.pluginContainer.hookSerial("moduleCreated",o),this.cache[e]=o,(globalThis||global||window||{}).require||((globalThis||global||window||{require:undefined}).require=this.require.bind(this));let s=r(o,o.exports,this.require.bind(this),this.farmDynamicRequire.bind(this));return s&&s instanceof Promise?s.then(()=>(this.pluginContainer.hookSerial("moduleInitialized",o),o.exports)):(this.pluginContainer.hookSerial("moduleInitialized",o),o.exports);}farmDynamicRequire(e){if(this.modules[e]){let t=this.require(e);return t.__farm_async?t.default:Promise.resolve(t);}return this.loadDynamicResources(e);}loadDynamicResources(e,t=!1){let r=this.dynamicModuleResourcesMap[e];if(!r||0===r.length)throw Error(`Dynamic imported module "${e}" does not belong to any resource`);return t&&(this.reRegisterModules=!0,this.clearCache(e)),Promise.all(r.map(e=>(t&&this.resourceLoader.setLoadedResource(e.path,!1),this.resourceLoader.load(e)))).then(()=>{if(!this.modules[e])throw Error(`Dynamic imported module "${e}" is not registered.`);this.reRegisterModules=!1;let t=this.require(e);return t.__farm_async?t.default:t;}).catch(t=>{throw console.error(`[Farm] Error loading dynamic module "${e}"`,t),t;});}register(e,t){if(this.modules[e]&&!this.reRegisterModules){console.warn(`Module "${e}" has registered! It should not be registered twice`);return;}this.modules[e]=t;}update(e,t){this.modules[e]=t,this.clearCache(e);}delete(e){return!!this.modules[e]&&(this.clearCache(e),delete this.modules[e],!0);}getModuleUrl(e){let t=this.publicPaths[0]??"";return d.location?`${d.location.protocol}//${d.location.host}${t.endsWith("/")?t.slice(0,-1):t}/${this.modules[e].__farm_resource_pot__}`:this.modules[e].__farm_resource_pot__;}getCache(e){return this.cache[e];}clearCache(e){return!!this.cache[e]&&(delete this.cache[e],!0);}setInitialLoadedResources(e){for(let t of e)this.resourceLoader.setLoadedResource(t);}setDynamicModuleResourcesMap(e){this.dynamicModuleResourcesMap=e;}setPublicPaths(e){this.publicPaths=e,this.resourceLoader.publicPaths=this.publicPaths;}setPlugins(e){this.pluginContainer.plugins=e;}addPlugin(e){this.pluginContainer.plugins.every(t=>t.name!==e.name)&&this.pluginContainer.plugins.push(e);}removePlugin(e){this.pluginContainer.plugins=this.pluginContainer.plugins.filter(t=>t.name!==e);}setExternalModules(e){Object.assign(this.externalModules,e||{});}bootstrap(){this.pluginContainer.hookSerial("bootstrap",this);}}},"688d37b3":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let i="undefined"!=typeof globalThis?globalThis:window,s={name:"farm-runtime-import-meta",_moduleSystem:{},bootstrap(e){this._moduleSystem=e;},moduleCreated(e){e.meta.env={...{NODE_ENV:"production"}??{},mode:"production",dev:!1,prod:!0};let t=this._moduleSystem.publicPaths?.[0]||"",{location:r}=i,o=r?`${r.protocol}//${r.host}${t.replace(/\/$/,"")}/${e.id}?t=${Date.now()}`:e.resource_pot;e.meta.url=o;}};},a0fe17cf:function(e,t,r,o){"use strict";let i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{ModuleSystem:function(){return n.ModuleSystem;},Plugin:function(){return u.FarmRuntimePlugin;}});let s=r("f566227b")._(r("688d37b3")),n=r("5c9dc4a5"),u=r("bd5d65ea");r("55d27d5a").__farm_global_this__.__farm_module_system__=(i=new n.ModuleSystem,function(){return i;})(),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setPlugins([s.default]);},b82fc02f:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Module",{enumerable:!0,get:function(){return i;}});class i{id;exports;resource_pot;meta;require;constructor(e,t){this.id=e,this.exports={},this.meta={env:{}},this.require=t;}}},bd5d65ea:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FarmRuntimePluginContainer",{enumerable:!0,get:function(){return i;}});class i{plugins=[];constructor(e){this.plugins=e;}hookSerial(e,...t){for(let r of this.plugins){let o=r[e];o&&o.apply(r,t);}}hookBail(e,...t){for(let r of this.plugins){let o=r[e];if(o){let e=o.apply(r,t);if(e)return e;}}}}},f566227b:function(e,t,r,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e};}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return i;},_interop_require_default:function(){return i;}});}},"a0fe17cf");},"d4e57cb7":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let c={item:"item-46b91894","item--selected":"item--selected-46b91894",selection:"selection-46b91894"};},"edeb1d28":function  (e,t,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return u;}});let n=i("@swc/helpers/_/_interop_require_default"),s=i("31a222cd"),l=i("3a2b0339"),r=i("2259d9ae"),d=n._(i("779af01c")),u=e=>{let t=(0,r.useRef)(),i=(0,r.useCallback)(i=>{e.onClickOutside&&!t?.current?.contains(i.target)&&e.onClickOutside();},[e.onClickOutside]);return(0,r.useEffect)(()=>(setTimeout(()=>document.addEventListener("click",i),0),()=>document.removeEventListener("click",i)),[]),(0,s.jsx)("div",{className:(0,l.classes)(e.className,d.default.dialog),children:(0,s.jsx)("div",{ref:t,className:(0,l.classes)(d.default.dialog__inner,"dialog__inner"),children:e.children})});};},"ef4ccfa0":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u={image:"image-98c3d52f"};},"f8d6a1d2":function  (e,t,n,r){"use strict";let u;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"localUniqId",{enumerable:!0,get:function(){return l;}});let i=0,l=()=>{let e=new Date().getTime();return u===e?i+=1:(u=e,i=0),`uid-${u}${i}`;};},"fa5afec0":function  (e,s,t,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"ShowCase",{enumerable:!0,get:function(){return m;}});let o=t("@swc/helpers/_/_interop_require_default"),i=t("31a222cd"),d=t("3a2b0339"),c=t("2259d9ae"),n=t("ac0a0cbe"),r=t("03887fe2"),p=t("fb0b54ac"),u=t("14a92e63"),f=o._(t("9e553abd")),m=e=>{let s=e.options.tags&&e.options.tags.length>0,[t,l]=(0,c.useState)(!1),o=(0,c.useCallback)(()=>(0,i.jsxs)("div",{className:f.default.info,children:[(0,i.jsxs)("div",{className:f.default.info__left,children:[(0,i.jsx)("p",{className:f.default.title,title:e.options.title,children:e.options.title}),s?(0,i.jsx)("p",{className:f.default.tags,title:e.options.tags?.join("/"),children:e.options.tags?.join("/")}):void 0,(0,i.jsx)("p",{className:f.default.desc,title:e.options.desc,children:e.options.desc})]}),(0,i.jsx)("p",{className:f.default.category,children:e.options.category})]}),[e.options.title,e.options.tags,e.options.category]),m=(0,c.useMemo)(()=>e.options.code?.map(e=>e.label),[e.options.code]),[j,h]=(0,c.useState)(!1),[g,x]=(0,c.useState)();return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsxs)(r.Dialog,{onClickOutside:()=>{l(!1),h(!1);},className:f.default.dialog,children:[(0,i.jsx)("div",{className:f.default.dialog__header,children:(0,i.jsx)(o,{})}),m?(0,i.jsx)(u.Tabs,{tabs:m,className:f.default.tabs,onTabChange:s=>{if(!s){h(!1);return;}h(!0);let t=e.options.code?.find(e=>e.label===s);t&&x({text:t.content,language:t.filetype});}}):void 0,(0,i.jsxs)("div",{className:f.default.dialog__body,children:[j?(0,i.jsx)("div",{className:f.default.code__wrapper,children:(0,i.jsx)(n.Code,{code:g?.text??"",language:g?.language??"txt"})}):void 0,(0,i.jsx)(p.Frame,{className:f.default.frame,html:e.options.html,css:e.options.css,js:e.options.js})]})]}):void 0,(0,i.jsxs)("div",{className:(0,d.classes)(f.default.showcase,"showcase"),children:[(0,i.jsxs)("div",{className:(0,d.classes)(f.default.frame__wrapper,t?f.default["frame__wrapper--disactive"]:void 0),children:[(0,i.jsx)(p.Frame,{className:f.default.frame,html:e.options.html,css:e.options.css,js:e.options.js}),(0,i.jsx)("div",{className:f.default.frame__btn,onClick:()=>l(!0)})]}),(0,i.jsx)(o,{})]})]});};},"fa5f1ffe":function  (e,n,o,l){!function(e){for(var n in e)e[n].__farm_resource_pot__="anonymousBlockBox.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(n,e[n]);}({"4386746a":function(e,n,o,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},"9370d78c":function(e,n,o,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i=`.inline-level-box {
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
`;},"9c741c8f":function(e,n,o,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i=`.inline-level-box {
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
}`;},d9ee3aa5:function(e,n,o,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return b;}});let i=o("@swc/helpers/_/_interop_require_default"),t=i._(o("d82e6e42")),s=i._(o("4386746a")),r=i._(o("9c741c8f")),c=i._(o("9370d78c")),b={title:"anonymous block box",desc:"how anonymous boxes are generated",category:"css",tags:["standard"],isStandard:!0,html:s.default,css:r.default+t.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:c.default}]};}});},"fb0b54ac":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("2ea370be"),t);},"fe92a235":function  (e,t,o,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="boxSize.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"0878149f":function(e,t,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
}`;},"992f9bd0":function(e,t,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`<section>
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
`;},e78c92ad:function(e,t,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
`;},f3e012b0:function(e,t,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h;}});let d=o("@swc/helpers/_/_interop_require_default"),n=d._(o("d82e6e42")),r=d._(o("992f9bd0")),c=d._(o("0878149f")),l=d._(o("e78c92ad")),h={title:"box size",desc:"css box size characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:c.default+n.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:l.default}]};}});},"ffb8747d":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="zIndex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"7a9ba8dd":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
}`;},d77c119d:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`<section>
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
`;},ddc10d6f:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
`;},f83ec78b:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let d=i("@swc/helpers/_/_interop_require_default"),c=d._(i("d82e6e42")),r=d._(i("d77c119d")),o=d._(i("7a9ba8dd")),l=d._(i("ddc10d6f")),s={title:"z-index",desc:"css z-index characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:o.default+c.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:l.default}]};}});},});
//# sourceMappingURL=index_0a51.d460953c.js.map