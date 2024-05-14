(function(_){for(var r in _){_[r].__farm_resource_pot__='index_8863.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"03887fe2":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("edeb1d28"),t);},"03f923a8":function  (e,s,t,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"List",{enumerable:!0,get:function(){return b;}});let c=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),r=t("b599e05e"),i=t("11dd513f"),d=t("6e9a280b"),u=t("60ebcb4c"),o=t("786b7de5"),f=t("2259d9ae"),h=c._(t("08328d21")),b=e=>{let s,t;let l=(e,s)=>e.toLowerCase().includes(s.toLowerCase()),[c,b]=(0,f.useState)([]);(0,f.useEffect)(()=>{let s=new Set;e.cases.forEach(e=>s.add(e.category));let t=[];s.forEach(e=>t.push(e)),b(t);},[e.cases]);let[g,_]=(0,f.useState)([]),j=()=>{_(e.cases.filter(e=>!!(!s&&(!t||0===t.length)||s&&l(e.title,s)||s&&e.tags?.find(e=>l(e,s))||t&&t.includes(e.category))));},m=(0,i.useDebounce)(j);return(0,f.useEffect)(j,[e.cases]),(0,n.jsxs)("div",{className:h.default.main,children:[(0,n.jsxs)("div",{className:h.default.filter,children:[(0,n.jsx)("span",{className:h.default.filter__label,children:"Title/Tag"}),(0,n.jsx)(d.Input,{onChange:e=>{s=e,m();},iconUrl:(0,r.useAsset)("image/search.svg")}),(0,n.jsx)("span",{className:h.default.filter__label,children:"Category"}),(0,n.jsx)(u.Selection,{onChange:e=>{t=e,m();},items:c})]}),(0,n.jsx)("div",{className:h.default.showcases,children:g.map((e,s)=>(0,n.jsx)(o.ShowCase,{options:e},s))})]});};},"08328d21":function  (e,t,b,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l={filter:"filter-e0b9bf8e",filter__label:"filter__label-e0b9bf8e",main:"main-e0b9bf8e",showcases:"showcases-e0b9bf8e"};},"0c7ee846":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("824607c6"),t);},"11dd513f":function  (e,t,i,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useDebounce",{enumerable:!0,get:function(){return n;}});let n=(e,t)=>{let i,u;let n={waitTime:500,...t??{}};return(...t)=>{let r=new Date().getTime();i&&i+n.waitTime>r&&clearTimeout(u),u=setTimeout(()=>e(...t),n.waitTime),i=r;};};},"14a92e63":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("554343aa"),t);},"1d47e71d":function  (e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Error",{enumerable:!0,get:function(){return i;}});let c=t("31a222cd"),i=()=>(0,c.jsx)("div",{children:"发生错误"});},"1fb2c2db":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return s;}});let l=n("@swc/helpers/_/_interop_require_default"),c=n("31a222cd"),i=n("2607461a"),u=l._(n("8c2a1c95")),s=e=>(0,c.jsxs)("div",{className:u.default.input,children:[e.iconUrl?(0,c.jsx)(i.Image,{src:e.iconUrl,className:u.default.input__prefix}):void 0,(0,c.jsx)("input",{className:u.default.input__inner,type:"text",placeholder:e.placeholder,onChange:t=>e.onChange&&e.onChange(t.target?.value)})]});},"2607461a":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("929b8859"),t);},"2bcde850":function  (e,t,b,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n={tab:"tab-a966ba4c","tab--active":"tab--active-a966ba4c",tabs:"tabs-a966ba4c"};},"2c6e69f1":function  (e,r,o,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});let d=o("31a222cd"),s=o("44f760a0"),n=o("2259d9ae"),c=o("4ef5aa11"),u=o("aab0a90a"),i=o("93843902");document.head.attachShadow||(0,s.notify)("error","Your browser does not support shadow dom. Please use the another browser supporting it instead."),(0,c.createRoot)(document.querySelector("#app")).render((0,d.jsx)(n.StrictMode,{children:(0,d.jsx)(u.BrowserRouter,{children:(0,d.jsx)(i.App,{})})}));},"2ea370be":function  (e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Frame",{enumerable:!0,get:function(){return r;}});let d=o("31a222cd"),s=o("f8d6a1d2"),l=o("2259d9ae"),r=e=>{let t;let o=(0,l.useRef)(),n=(0,s.localUniqId)();return(0,l.useEffect)(()=>{if(t||(t=o?.current?.shadowRoot?o.current.shadowRoot:o.current?.attachShadow({mode:"open"})),t){for(;t.firstChild;)t.removeChild(t.firstChild);if(e.html&&(t.innerHTML=e.html),e.css){let o=document.createElement("style");o.textContent=e.css,t.appendChild(o);}if(e.js){let o=`const shadowRoot = document.getElementById('${n}').shadowRoot
`,d=document.createElement("script"),s=o+e.js.replaceAll("document.","shadowRoot.");d.textContent=`(() => {${s}})()`,t.appendChild(d);}}},[e.js,e.html,e.css]),(0,d.jsx)("div",{id:n,ref:o,className:e.className});};},"3a2b0339":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"classes",{enumerable:!0,get:function(){return i;}});let i=(...e)=>e.filter(e=>"string"==typeof e).join(" ");},"3ef60bee":function  (e,s,l,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"Layout",{enumerable:!0,get:function(){return f;}});let c=l("@swc/helpers/_/_interop_require_default"),d=l("31a222cd"),n=l("b599e05e"),o=l("3a2b0339"),i=l("2259d9ae"),r=l("2607461a"),u=c._(l("5d89d03e")),f=e=>{let[s,l]=(0,i.useState)(!1);return(0,d.jsxs)("div",{className:(0,o.classes)(u.default.layout,s?u.default["layout--nav-collapsed"]:void 0),children:[(0,d.jsxs)("nav",{className:(0,o.classes)(u.default.nav,s?u.default["nav-collapsed"]:void 0),onClick:()=>{s&&l(!1);},children:[s?void 0:e.nav,s?void 0:(0,d.jsx)(r.Image,{src:(0,n.useAsset)("image/collapse.svg"),className:(0,o.classes)(u.default["collapse-btn"],"o-btn"),onClick:()=>{l(!0);}})]}),(0,d.jsx)("main",{className:u.default.main,children:e.main}),(0,d.jsx)("footer",{className:u.default.footer,children:e.footer})]});};},"44f760a0":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("945ecf99"),t);},"48529b60":function  (e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r="/JetBrainsMono-BoldItalic.3a013466-65790d.woff2";},"554343aa":function  (e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tabs",{enumerable:!0,get:function(){return b;}});let l=s("@swc/helpers/_/_interop_require_default"),c=s("31a222cd"),d=s("3a2b0339"),r=s("2259d9ae"),i=l._(s("2bcde850")),b=e=>{let[t,s]=(0,r.useState)(),n=n=>{t!==n?(s(n),e.onTabChange&&e.onTabChange(n)):(s(void 0),e.onTabChange&&e.onTabChange(void 0));};return(0,c.jsx)("div",{className:(0,d.classes)(i.default.tabs,e.className),children:e.tabs.map(e=>(0,c.jsx)("span",{className:(0,d.classes)(i.default.tab,t===e?i.default["tab--active"]:void 0),onClick:()=>n(e),children:e},e))});};},"56fdf8a1":function  (e,t,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return u;}});let r=s("@swc/helpers/_/_interop_require_default"),n=s("31a222cd"),c=s("3a2b0339"),l=r._(s("67c07953")),u=()=>(0,n.jsxs)("div",{className:l.default.footer,children:[(0,n.jsxs)("p",{className:l.default.text,children:["View on ",(0,n.jsx)("a",{className:(0,c.classes)("wavy-underline","o-btn"),href:"https://github.com/niuiic/web-vista",target:"_blank",children:"github"})]}),(0,n.jsx)("p",{className:l.default.text,children:"Copyright © 2023-present niuiic"})]});},"5d89d03e":function  (c,e,l,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n={"collapse-btn":"collapse-btn-4122cc82",footer:"footer-4122cc82",layout:"layout-4122cc82","layout--nav-collapsed":"layout--nav-collapsed-4122cc82",main:"main-4122cc82",nav:"nav-4122cc82","nav-collapsed":"nav-collapsed-4122cc82","nav-collapsed-bg":"nav-collapsed-bg-4122cc82"};},"60ebcb4c":function  (e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Selection",{enumerable:!0,get:function(){return u;}});let i=l("@swc/helpers/_/_interop_require_default"),s=l("31a222cd"),c=l("3a2b0339"),d=l("2259d9ae"),r=i._(l("d4e57cb7")),u=e=>{let[t,l]=(0,d.useState)([]),n=n=>{let i;i=t.includes(n)?t.filter(e=>e!==n):[...t,n],e.onChange&&e.onChange(i),l(i);};return(0,s.jsx)("div",{className:r.default.selection,children:e.items.map(e=>(0,s.jsx)("div",{className:(0,c.classes)(r.default.item,"o-btn",t.includes(e)?r.default["item--selected"]:void 0),onClick:()=>n(e),children:e},e))});};},"67c07953":function  (e,t,r,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o={footer:"footer-adf5cea1",text:"text-adf5cea1"};},"6e9a280b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("1fb2c2db"),t);},"779af01c":function  (e,n,t,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d;}});let d={dialog:"dialog-4ca616de",dialog__inner:"dialog__inner-4ca616de"};},"786b7de5":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("fa5afec0"),t);},"7955362b":function  (e,r,t,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Code",{enumerable:!0,get:function(){return i;}});let c=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),d=c._(t("c85d2dfa")),l=t("2259d9ae"),f=c._(t("c86c3cd1")),i=e=>{let r=(0,l.useRef)();return(0,l.useEffect)(()=>{r.current&&(r.current.innerHTML=d.default.highlight(e.code,{language:e.language}).value);},[e.code,e.language]),(0,n.jsx)("pre",{ref:r,className:f.default.code});};},"7dfa112b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("3ef60bee"),t);},"824607c6":function  (e,l,t,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Nav",{enumerable:!0,get:function(){return o;}});let r=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),i=t("3a2b0339"),c=t("aab0a90a"),d=r._(t("a81951de")),o=e=>{let l=(0,c.useNavigate)();return(0,n.jsxs)("div",{className:d.default.nav,children:[(0,n.jsx)("h1",{className:(0,i.classes)(d.default.title,"o-btn"),onClick:()=>{l("/");},children:"Web Vista"}),(0,n.jsxs)("svg",{className:d.default.slogan,viewBox:"0 0 140 60",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circle",d:"M 10 25 Q 70 60 130 25"})}),(0,n.jsx)("rect",{className:d.default.slogan__inner,width:140,height:60,fill:"none",strokeWidth:5,strokeDasharray:"100 100"}),(0,n.jsx)("text",{children:(0,n.jsx)("textPath",{xlinkHref:"#circle",stroke:"currentcolor",fill:"currentcolor",children:"Sharing Ideas"})})]}),(0,n.jsx)("ul",{className:d.default.entries,children:e.entries.map(l=>(0,n.jsx)("li",{className:(0,i.classes)(d.default.entry,"o-btn",l.label===e.currentEntry?d.default["entry--active"]:void 0),onClick:l.onClick,children:l.label},l.label))})]});};},"8c2a1c95":function  (e,n,t,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u;}});let u={input:"input-8e0b9421",input__inner:"input__inner-8e0b9421",input__prefix:"input__prefix-8e0b9421"};},"929b8859":function  (e,c,l,s){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u;}});let r=l("@swc/helpers/_/_interop_require_default"),t=l("31a222cd"),i=l("3a2b0339"),n=r._(l("ef4ccfa0")),u=e=>(0,t.jsx)("img",{src:e.src,draggable:"false",loading:"lazy",className:(0,i.classes)(n.default.image,e.className),onClick:e.onClick});},"93843902":function  (e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"App",{enumerable:!0,get:function(){return h;}});let l=s("31a222cd"),r=s("7dfa112b"),o=s("2259d9ae"),d=s("aab0a90a"),i=s("9fd73c3e"),u=s("0c7ee846"),c=s("a1846452"),f=s("1d47e71d"),j=s("c40ae205"),x=s("03f923a8"),h=()=>{let e=(0,d.useNavigate)(),t=(0,d.useLocation)(),s=[{label:"showcase",onClick:()=>e("/showcase")},{label:"standard",onClick:()=>e("/standard")}],[h,b]=(0,o.useState)(s[0].label);(0,o.useEffect)(()=>{let e=s.find(e=>t.pathname.startsWith("/"+e.label));if(!e){b(void 0);return;}b(e.label);},[t]);let[p,m]=(0,o.useState)([]);return(0,o.useEffect)(()=>{n("23ec4682").then(e=>m(e.default));},[]),(0,l.jsx)(r.Layout,{nav:(0,l.jsx)(u.Nav,{entries:s,currentEntry:h}),main:(0,l.jsxs)(d.Routes,{children:[(0,l.jsx)(d.Route,{path:"/",element:(0,l.jsx)(j.Home,{})}),(0,l.jsx)(d.Route,{path:"/showcase",element:(0,l.jsx)(x.List,{cases:p.filter(e=>!e.isStandard)})}),(0,l.jsx)(d.Route,{path:"/standard",element:(0,l.jsx)(x.List,{cases:p.filter(e=>e.isStandard)})}),(0,l.jsx)(d.Route,{path:"/detail",element:(0,l.jsx)(c.Detail,{})}),(0,l.jsx)(d.Route,{path:"*",element:(0,l.jsx)(f.Error,{})})]}),footer:(0,l.jsx)(i.Footer,{})});};},"945ecf99":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{Notify:function(){return c;},notify:function(){return function e(t,n){if(!n)return n=>e(t,n);let r=document.createElement("div");r.setAttribute("class",s.default.notify__wrapper),document.body.appendChild(r),(0,f.createRoot)(r).render((0,o.jsx)(c,{msg:n,type:t})),setTimeout(()=>{document.body.removeChild(r);},2e3);};}});let i=n("@swc/helpers/_/_interop_require_default"),o=n("31a222cd"),u=n("3a2b0339"),f=n("4ef5aa11"),s=i._(n("9a22db61")),c=e=>{let t={success:"notify--success",warning:"notify--warning",error:"notify--error",info:"notify--info"}[e.type];return(0,o.jsx)("div",{className:(0,u.classes)(s.default.notify,s.default[t]),children:e.msg});};},"9a22db61":function  (e,n,t,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i={"come-out":"come-out-e1ba72d4",notify:"notify-e1ba72d4","notify--error":"notify--error-e1ba72d4","notify--info":"notify--info-e1ba72d4","notify--success":"notify--success-e1ba72d4","notify--warning":"notify--warning-e1ba72d4",notify__wrapper:"notify__wrapper-e1ba72d4"};},"9e553abd":function  (e,r,_,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o;}});let o={category:"category-26443954",code__wrapper:"code__wrapper-26443954",desc:"desc-26443954",dialog:"dialog-26443954",dialog__body:"dialog__body-26443954",dialog__header:"dialog__header-26443954",frame:"frame-26443954",frame__btn:"frame__btn-26443954",frame__wrapper:"frame__wrapper-26443954","frame__wrapper--disactive":"frame__wrapper--disactive-26443954",info:"info-26443954",info__left:"info__left-26443954",showcase:"showcase-26443954",tabs:"tabs-26443954",tags:"tags-26443954",title:"title-26443954"};},"9fd73c3e":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("56fdf8a1"),t);},"a1846452":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Detail",{enumerable:!0,get:function(){return c;}});let r=i("31a222cd"),c=()=>(0,r.jsx)("div",{children:"detail"});},"a81951de":function  (e,t,n,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r={entries:"entries-52cf36f0",entry:"entry-52cf36f0","entry--active":"entry--active-52cf36f0",nav:"nav-52cf36f0",slogan:"slogan-52cf36f0","slogan-border":"slogan-border-52cf36f0",slogan__inner:"slogan__inner-52cf36f0",title:"title-52cf36f0","title-bg":"title-bg-52cf36f0"};},"ac0a0cbe":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("7955362b"),t);},"aedc679a":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/JetBrainsMono-Regular.a9cb1cd8-9bdcf2.woff2";},"b599e05e":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useAsset",{enumerable:!0,get:function(){return s;}});let s=t=>new URL(`/src/asset/${t}`,e.meta.url).href;},"c40ae205":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Home",{enumerable:!0,get:function(){return i;}});let c=n("31a222cd"),i=()=>(0,c.jsx)("div",{children:"home"});},"c711f3e9":function  (e,t,n,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o="/JetBrainsMono-Bold.c503cc5e-8c856e.woff2";},"c86c3cd1":function  (e,t,d,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r={code:"code-deed1b03"};},"d4e57cb7":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let c={item:"item-46b91894","item--selected":"item--selected-46b91894",selection:"selection-46b91894"};},"edeb1d28":function  (e,t,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return u;}});let n=i("@swc/helpers/_/_interop_require_default"),s=i("31a222cd"),l=i("3a2b0339"),r=i("2259d9ae"),d=n._(i("779af01c")),u=e=>{let t=(0,r.useRef)(),i=(0,r.useCallback)(i=>{e.onClickOutside&&!t?.current?.contains(i.target)&&e.onClickOutside();},[e.onClickOutside]);return(0,r.useEffect)(()=>(setTimeout(()=>document.addEventListener("click",i),0),()=>document.removeEventListener("click",i)),[]),(0,s.jsx)("div",{className:(0,l.classes)(e.className,d.default.dialog),children:(0,s.jsx)("div",{ref:t,className:(0,l.classes)(d.default.dialog__inner,"dialog__inner"),children:e.children})});};},"ef4ccfa0":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u={image:"image-98c3d52f"};},"f8d6a1d2":function  (e,t,n,r){"use strict";let u;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"localUniqId",{enumerable:!0,get:function(){return l;}});let i=0,l=()=>{let e=new Date().getTime();return u===e?i+=1:(u=e,i=0),`uid-${u}${i}`;};},"fa5afec0":function  (e,s,t,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"ShowCase",{enumerable:!0,get:function(){return m;}});let o=t("@swc/helpers/_/_interop_require_default"),i=t("31a222cd"),d=t("3a2b0339"),c=t("2259d9ae"),n=t("ac0a0cbe"),r=t("03887fe2"),p=t("fb0b54ac"),u=t("14a92e63"),f=o._(t("9e553abd")),m=e=>{let s=e.options.tags&&e.options.tags.length>0,[t,l]=(0,c.useState)(!1),o=(0,c.useCallback)(()=>(0,i.jsxs)("div",{className:f.default.info,children:[(0,i.jsxs)("div",{className:f.default.info__left,children:[(0,i.jsx)("p",{className:f.default.title,title:e.options.title,children:e.options.title}),s?(0,i.jsx)("p",{className:f.default.tags,title:e.options.tags?.join("/"),children:e.options.tags?.join("/")}):void 0,(0,i.jsx)("p",{className:f.default.desc,title:e.options.desc,children:e.options.desc})]}),(0,i.jsx)("p",{className:f.default.category,children:e.options.category})]}),[e.options.title,e.options.tags,e.options.category]),m=(0,c.useMemo)(()=>e.options.code?.map(e=>e.label),[e.options.code]),[j,h]=(0,c.useState)(!1),[g,x]=(0,c.useState)();return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsxs)(r.Dialog,{onClickOutside:()=>{l(!1),h(!1);},className:f.default.dialog,children:[(0,i.jsx)("div",{className:f.default.dialog__header,children:(0,i.jsx)(o,{})}),m?(0,i.jsx)(u.Tabs,{tabs:m,className:f.default.tabs,onTabChange:s=>{if(!s){h(!1);return;}h(!0);let t=e.options.code?.find(e=>e.label===s);t&&x({text:t.content,language:t.filetype});}}):void 0,(0,i.jsxs)("div",{className:f.default.dialog__body,children:[j?(0,i.jsx)("div",{className:f.default.code__wrapper,children:(0,i.jsx)(n.Code,{code:g?.text??"",language:g?.language??"txt"})}):void 0,(0,i.jsx)(p.Frame,{className:f.default.frame,html:e.options.html,css:e.options.css,js:e.options.js})]})]}):void 0,(0,i.jsxs)("div",{className:(0,d.classes)(f.default.showcase,"showcase"),children:[(0,i.jsxs)("div",{className:(0,d.classes)(f.default.frame__wrapper,t?f.default["frame__wrapper--disactive"]:void 0),children:[(0,i.jsx)(p.Frame,{className:f.default.frame,html:e.options.html,css:e.options.css,js:e.options.js}),(0,i.jsx)("div",{className:f.default.frame__btn,onClick:()=>l(!0)})]}),(0,i.jsx)(o,{})]})]});};},"fb0b54ac":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("2ea370be"),t);},});
//# sourceMappingURL=index_8863.25fcba2c.js.map