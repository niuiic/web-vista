(function(_){for(var r in _){_[r].__farm_resource_pot__='index_e552.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"03f923a8":function  (e,t,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"List",{enumerable:!0,get:function(){return _;}});let c=s("@swc/helpers/_/_interop_require_default"),i=s("31a222cd"),r=c._(s("b938cf3a")),d=s("6e9a280b"),n=s("60ebcb4c"),u=s("05e26325"),f=s("19e80312"),o=s("2259d9ae"),h=s("aab0a90a"),p=c._(s("08328d21")),_=e=>{let t=(0,h.useNavigate)(),s=(0,h.useLocation)(),l=(e,t)=>e.toLowerCase().includes(t.toLowerCase()),[c,_]=(0,o.useState)(""),[b,j]=(0,o.useState)([]),[m,S]=(0,o.useState)([]);(0,o.useEffect)(()=>{let t=new Set;e.cases.forEach(e=>t.add(e.category));let s=[];t.forEach(e=>s.push(e)),S(s);},[e.cases]),(0,o.useEffect)(()=>{let e=s.search.match(/search=([^&]+)/),t=e?JSON.parse((0,f.decode)(e[1])):{};_(t.input??""),j(t.selected??[]);},[s]);let[g,x]=(0,o.useState)([]);(0,o.useEffect)(()=>{x(e.cases.filter(e=>(!(b.length>0)||!!b.includes(e.category))&&!!(!c||l(e.title,c)||e.tags?.find(e=>l(e,c)))));},[e.cases,c,b]);let N=e=>{t(`/detail?id=${e.id}&return=${s.pathname}&search=${(0,f.encode)(JSON.stringify({input:c,selected:b}),!0)}`);};return(0,i.jsxs)("div",{className:p.default.list,children:[(0,i.jsxs)("div",{className:p.default.filter,children:[(0,i.jsx)("span",{className:p.default.filter__label,children:"Title/Tag"}),(0,i.jsx)(d.Input,{value:c,setValue:_,iconUrl:r.default}),(0,i.jsx)("span",{className:p.default.filter__label,children:"Category"}),(0,i.jsx)(n.Selection,{selected:b,setSelected:j,items:m})]}),(0,i.jsx)("div",{className:p.default.showcases,children:g.map((e,t)=>(0,i.jsx)(u.Showcase,{options:e,onClick:N},t))})]});};},"05e26325":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("b9eb2ead"),t);},"08328d21":function  (e,t,l,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let f={filter:"filter-e0b9bf8e",filter__label:"filter__label-e0b9bf8e",list:"list-e0b9bf8e",showcases:"showcases-e0b9bf8e"};},"0c21deca":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u={home:"home-a2059fa8"};},"0c7ee846":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("824607c6"),t);},"1d47e71d":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Error",{enumerable:!0,get:function(){return o;}});let u=r("31a222cd"),i=r("2259d9ae"),c=r("aab0a90a"),o=()=>{let e=(0,c.useNavigate)();return(0,i.useEffect)(()=>{e("/");},[]),(0,u.jsx)("div",{children:"Something went wrong"});};},"1fb2c2db":function  (e,t,n,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return s;}});let r=n("@swc/helpers/_/_interop_require_default"),u=n("31a222cd"),c=n("2607461a"),i=r._(n("8c2a1c95")),s=e=>(0,u.jsxs)("div",{className:i.default.input,children:[e.iconUrl?(0,u.jsx)(c.Image,{src:e.iconUrl,className:i.default.input__prefix}):void 0,(0,u.jsx)("input",{value:e.value,className:i.default.input__inner,type:"text",placeholder:e.placeholder,onChange:t=>{e.setValue(t.target.value),e.onChange&&e.onChange(t.target.value);}})]});},"2607461a":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("929b8859"),t);},"2ea370be":function  (e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Frame",{enumerable:!0,get:function(){return r;}});let d=o("31a222cd"),s=o("f8d6a1d2"),l=o("2259d9ae"),r=e=>{let t;let o=(0,l.useRef)(),n=(0,s.localUniqId)();return(0,l.useEffect)(()=>{if(t||(t=o?.current?.shadowRoot?o.current.shadowRoot:o.current?.attachShadow({mode:"open"})),t){for(;t.firstChild;)t.removeChild(t.firstChild);if(e.html&&(t.innerHTML=e.html),e.css){let o=document.createElement("style");o.textContent=e.css,t.appendChild(o);}if(e.js){let o=`const shadowRoot = document.getElementById('${n}').shadowRoot
`,d=document.createElement("script"),s=o+e.js.replaceAll("document.","shadowRoot.");d.textContent=`(() => {${s}})()`,t.appendChild(d);}}},[e.js,e.html,e.css]),(0,d.jsx)("div",{id:n,ref:o,className:e.className});};},"33a347c1":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/expand.d1225459-66fbee.svg";},"3a2b0339":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"classes",{enumerable:!0,get:function(){return i;}});let i=(...e)=>e.filter(e=>"string"==typeof e).join(" ");},"3b9f5c4e":function  (e,t,o,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let d=o("31a222cd"),s=o("44f760a0"),n=o("2259d9ae"),c=o("4ef5aa11"),u=o("aab0a90a"),i=o("93843902");document.head.attachShadow||(0,s.notify)("error","Your browser does not support shadow dom. Please use the another browser supporting it instead."),(0,c.createRoot)(document.querySelector("#app")).render((0,d.jsx)(n.StrictMode,{children:(0,d.jsx)(u.HashRouter,{children:(0,d.jsx)(i.App,{})})}));},"3ef60bee":function  (e,l,s,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Layout",{enumerable:!0,get:function(){return f;}});let d=s("@swc/helpers/_/_interop_require_default"),n=s("31a222cd"),c=d._(s("4abe8a2f")),o=s("3a2b0339"),r=s("2259d9ae"),u=s("2607461a"),i=d._(s("5d89d03e")),f=e=>{let[l,s]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:(0,o.classes)(i.default.layout,l?i.default["layout--nav-collapsed"]:void 0),children:[(0,n.jsxs)("nav",{className:(0,o.classes)(i.default.nav,l?i.default["nav-collapsed"]:void 0),onClick:()=>{l&&s(!1);},children:[l?void 0:e.nav,l?void 0:(0,n.jsx)(u.Image,{src:c.default,className:(0,o.classes)(i.default["collapse-btn"],"o-btn"),onClick:()=>{s(!0);}})]}),(0,n.jsx)("main",{className:i.default.main,children:e.main}),(0,n.jsx)("footer",{className:i.default.footer,children:e.footer})]});};},"44f760a0":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("945ecf99"),t);},"48529b60":function  (e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r="/JetBrainsMono-BoldItalic.3a013466-65790d.woff2";},"4919389a":function  (f,e,t,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r;}});let r={category:"category-406cf64f",desc:"desc-406cf64f",detail:"detail-406cf64f",frame:"frame-406cf64f",info:"info-406cf64f",info__left:"info__left-406cf64f",info__right:"info__right-406cf64f",return:"return-406cf64f",sources:"sources-406cf64f",tags:"tags-406cf64f",title:"title-406cf64f"};},"4abe8a2f":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/collapse.db8cea26-4459d1.svg";},"56fdf8a1":function  (e,t,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return u;}});let r=s("@swc/helpers/_/_interop_require_default"),n=s("31a222cd"),c=s("3a2b0339"),l=r._(s("67c07953")),u=()=>(0,n.jsxs)("div",{className:l.default.footer,children:[(0,n.jsxs)("p",{className:l.default.text,children:["View on ",(0,n.jsx)("a",{className:(0,c.classes)("wavy-underline","o-btn"),href:"https://github.com/niuiic/web-vista",target:"_blank",children:"github"})]}),(0,n.jsx)("p",{className:l.default.text,children:"Copyright © 2023-present niuiic"})]});},"5d89d03e":function  (c,e,l,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n={"collapse-btn":"collapse-btn-4122cc82",footer:"footer-4122cc82",layout:"layout-4122cc82","layout--nav-collapsed":"layout--nav-collapsed-4122cc82",main:"main-4122cc82",nav:"nav-4122cc82","nav-collapsed":"nav-collapsed-4122cc82","nav-collapsed-bg":"nav-collapsed-bg-4122cc82"};},"60ebcb4c":function  (e,t,l,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Selection",{enumerable:!0,get:function(){return r;}});let s=l("@swc/helpers/_/_interop_require_default"),d=l("31a222cd"),n=l("3a2b0339"),i=s._(l("d4e57cb7")),r=e=>{let t=t=>{let l;l=e.selected.includes(t)?e.selected.filter(e=>e!==t):[...e.selected,t],e.setSelected(l),e.onChange&&e.onChange(l);};return(0,d.jsx)("div",{className:i.default.selection,children:e.items.map(l=>(0,d.jsx)("div",{className:(0,n.classes)(i.default.item,"o-btn",e.selected.includes(l)?i.default["item--selected"]:void 0),onClick:()=>t(l),children:l},l))});};},"639dfc2a":function  (e,t,u,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r="/up.a1b4d326-a5bf27.svg";},"67c07953":function  (e,t,r,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o={footer:"footer-adf5cea1",text:"text-adf5cea1"};},"6e9a280b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("1fb2c2db"),t);},"7955362b":function  (e,t,l,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Code",{enumerable:!0,get:function(){return h;}});let c=l("@swc/helpers/_/_interop_require_default"),d=l("31a222cd"),u=c._(l("d8c2099c")),r=c._(l("639dfc2a")),n=l("3a2b0339"),i=c._(l("c85d2dfa")),o=l("2259d9ae"),f=l("2607461a"),g=c._(l("c86c3cd1")),h=e=>{let t=(0,o.useRef)(),[l,s]=(0,o.useState)(!1),[c,h]=(0,o.useState)({});return(0,o.useEffect)(()=>{t.current&&(t.current.innerHTML=i.default.highlight(e.code,{language:e.language}).value),setTimeout(()=>{h({}),setTimeout(()=>{t.current&&h({maxHeight:t.current.getBoundingClientRect().height});},100);},100);},[e.code,e.language]),(0,d.jsxs)("div",{className:(0,n.classes)(g.default.code,e.className,l?g.default["code--collapsed"]:void 0),children:[(0,d.jsxs)("div",{className:g.default.header,children:[(0,d.jsx)("span",{children:e.label}),(0,d.jsx)(f.Image,{src:l?u.default:r.default,className:(0,n.classes)(g.default["collapse-btn"],"o-btn"),onClick:()=>s(!l)})]}),(0,d.jsx)("pre",{className:g.default.body,style:c,ref:t})]});};},"7dfa112b":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("3ef60bee"),t);},"824607c6":function  (e,l,t,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Nav",{enumerable:!0,get:function(){return o;}});let r=t("@swc/helpers/_/_interop_require_default"),n=t("31a222cd"),i=t("3a2b0339"),c=t("aab0a90a"),d=r._(t("a81951de")),o=e=>{let l=(0,c.useNavigate)();return(0,n.jsxs)("div",{className:d.default.nav,children:[(0,n.jsx)("h1",{className:(0,i.classes)(d.default.title,"o-btn"),onClick:()=>{l("/");},children:"Web Vista"}),(0,n.jsxs)("svg",{className:d.default.slogan,viewBox:"0 0 140 60",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circle",d:"M 10 25 Q 70 60 130 25"})}),(0,n.jsx)("rect",{className:d.default.slogan__inner,width:140,height:60,fill:"none",strokeWidth:5,strokeDasharray:"100 100"}),(0,n.jsx)("text",{children:(0,n.jsx)("textPath",{xlinkHref:"#circle",stroke:"currentcolor",fill:"currentcolor",children:"Sharing Ideas"})})]}),(0,n.jsx)("ul",{className:d.default.entries,children:e.entries.map(l=>(0,n.jsx)("li",{className:(0,i.classes)(d.default.entry,"o-btn",l.label===e.currentEntry?d.default["entry--active"]:void 0),onClick:l.onClick,children:l.label},l.label))})]});};},"8c2a1c95":function  (e,n,t,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u;}});let u={input:"input-8e0b9421",input__inner:"input__inner-8e0b9421",input__prefix:"input__prefix-8e0b9421"};},"929b8859":function  (e,c,l,s){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u;}});let r=l("@swc/helpers/_/_interop_require_default"),t=l("31a222cd"),i=l("3a2b0339"),n=r._(l("ef4ccfa0")),u=e=>(0,t.jsx)("img",{src:e.src,draggable:"false",loading:"lazy",className:(0,i.classes)(n.default.image,e.className),onClick:e.onClick});},"93843902":function  (e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"App",{enumerable:!0,get:function(){return h;}});let r=s("31a222cd"),l=s("7dfa112b"),o=s("2259d9ae"),d=s("aab0a90a"),i=s("9fd73c3e"),u=s("0c7ee846"),c=s("a1846452"),f=s("1d47e71d"),j=s("c40ae205"),x=s("03f923a8"),h=()=>{let e=(0,d.useNavigate)(),t=(0,d.useLocation)(),s=[{label:"Showcase",onClick:()=>e("/showcase")},{label:"Standard",onClick:()=>e("/standard")}],[h,p]=(0,o.useState)();(0,o.useEffect)(()=>{let e=s.find(e=>t.pathname.startsWith("/"+e.label.toLowerCase()));if(!e){p(void 0);return;}p(e.label);},[t]);let[b,m]=(0,o.useState)([]);return(0,o.useEffect)(()=>{n("23ec4682").then(e=>m(e.default));},[]),(0,r.jsx)(l.Layout,{nav:(0,r.jsx)(u.Nav,{entries:s,currentEntry:h}),main:(0,r.jsxs)(d.Routes,{children:[(0,r.jsx)(d.Route,{path:"/",element:(0,r.jsx)(j.Home,{})}),(0,r.jsx)(d.Route,{path:"/showcase",element:(0,r.jsx)(x.List,{cases:b.filter(e=>!e.isStandard)})}),(0,r.jsx)(d.Route,{path:"/standard",element:(0,r.jsx)(x.List,{cases:b.filter(e=>e.isStandard)})}),(0,r.jsx)(d.Route,{path:"/detail",element:(0,r.jsx)(c.Detail,{cases:b})}),(0,r.jsx)(d.Route,{path:"*",element:(0,r.jsx)(f.Error,{})})]}),footer:(0,r.jsx)(i.Footer,{})});};},"945ecf99":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{Notify:function(){return c;},notify:function(){return function e(t,n){if(!n)return n=>e(t,n);let r=document.createElement("div");r.setAttribute("class",s.default.notify__wrapper),document.body.appendChild(r),(0,f.createRoot)(r).render((0,o.jsx)(c,{msg:n,type:t})),setTimeout(()=>{document.body.removeChild(r);},2e3);};}});let i=n("@swc/helpers/_/_interop_require_default"),o=n("31a222cd"),u=n("3a2b0339"),f=n("4ef5aa11"),s=i._(n("9a22db61")),c=e=>{let t={success:"notify--success",warning:"notify--warning",error:"notify--error",info:"notify--info"}[e.type];return(0,o.jsx)("div",{className:(0,u.classes)(s.default.notify,s.default[t]),children:e.msg});};},"9a22db61":function  (e,n,t,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i;}});let i={"come-out":"come-out-e1ba72d4",notify:"notify-e1ba72d4","notify--error":"notify--error-e1ba72d4","notify--info":"notify--info-e1ba72d4","notify--success":"notify--success-e1ba72d4","notify--warning":"notify--warning-e1ba72d4",notify__wrapper:"notify__wrapper-e1ba72d4"};},"9fd73c3e":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("56fdf8a1"),t);},"a1846452":function  (e,s,t,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"Detail",{enumerable:!0,get:function(){return j;}});let c=t("@swc/helpers/_/_interop_require_default"),d=t("31a222cd"),i=c._(t("a2546de9")),r=t("3a2b0339"),n=t("ac0a0cbe"),u=t("fb0b54ac"),f=t("2607461a"),o=t("2259d9ae"),h=t("aab0a90a"),m=c._(t("4919389a")),j=e=>{let s=(0,h.useLocation)(),t=(0,h.useNavigate)(),[l,c]=(0,o.useState)();return(0,o.useEffect)(()=>{let t=s.search.match(/id=([^&]+)/);if(!t)return;let l=e.cases.find(e=>e.id===t[1]);l&&c(l);},[s,e.cases]),(0,d.jsxs)("div",{className:m.default.detail,children:[l?(0,d.jsxs)("div",{className:m.default.info,children:[(0,d.jsxs)("div",{className:m.default.info__left,children:[(0,d.jsx)("p",{className:m.default.title,title:l.title,children:l.title}),l?.tags&&l?.tags.length>0?(0,d.jsx)("p",{className:m.default.tags,title:l.tags?.join("/"),children:l.tags?.join("/")}):void 0,(0,d.jsx)("p",{className:m.default.desc,title:l.desc,children:l.desc})]}),(0,d.jsxs)("div",{className:m.default.info__right,children:[(0,d.jsx)("span",{className:m.default.category,children:l.category}),(0,d.jsx)(f.Image,{className:(0,r.classes)(m.default.return,"o-btn"),src:i.default,onClick:()=>{let e,l;let c=s.search.match(/search=([^&]+)/);c&&(e=c[1]),(c=s.search.match(/return=([^&]+)/))&&(l=c[1]),l=l??"/home",e?t(`${l}?search=${e}`):t(l);}})]})]}):void 0,(0,d.jsx)("div",{className:m.default.sources,children:l?.code.map(e=>(0,d.jsx)(n.Code,{code:e.content,language:e.filetype,label:e.label},e.label))}),(0,d.jsx)(u.Frame,{className:m.default.frame,html:l?.html,css:l?.css,js:l?.js})]});};},"a2546de9":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/return.10d29221-30df2e.svg";},"a81951de":function  (e,t,n,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r={entries:"entries-52cf36f0",entry:"entry-52cf36f0","entry--active":"entry--active-52cf36f0",nav:"nav-52cf36f0",slogan:"slogan-52cf36f0","slogan-border":"slogan-border-52cf36f0",slogan__inner:"slogan__inner-52cf36f0",title:"title-52cf36f0","title-bg":"title-bg-52cf36f0"};},"ac0a0cbe":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("7955362b"),t);},"aedc679a":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/JetBrainsMono-Regular.a9cb1cd8-9bdcf2.woff2";},"b938cf3a":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/search.2371613c-d31327.svg";},"b9eb2ead":function  (s,e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Showcase",{enumerable:!0,get:function(){return p;}});let i=t("@swc/helpers/_/_interop_require_default"),o=t("31a222cd"),c=i._(t("33a347c1")),n=t("3a2b0339"),d=t("fb0b54ac"),r=t("2607461a"),f=i._(t("c950f9a1")),p=s=>(0,o.jsxs)("div",{className:(0,n.classes)(f.default.showcase,"showcase"),children:[(0,o.jsxs)("div",{className:(0,n.classes)(f.default.frame__wrapper),children:[(0,o.jsx)(d.Frame,{className:f.default.frame,html:s.options.html,css:s.options.css,js:s.options.js}),(0,o.jsx)(r.Image,{className:f.default.frame__btn,src:c.default,onClick:()=>s.onClick(s.options)})]}),(0,o.jsxs)("div",{className:f.default.info,children:[(0,o.jsxs)("div",{className:f.default.info__left,children:[(0,o.jsx)("p",{className:f.default.title,title:s.options.title,children:s.options.title}),s.options.tags&&s.options.tags.length>0?(0,o.jsx)("p",{className:f.default.tags,title:s.options.tags?.join("/"),children:s.options.tags?.join("/")}):void 0,(0,o.jsx)("p",{className:f.default.desc,title:s.options.desc,children:s.options.desc})]}),(0,o.jsx)("p",{className:f.default.category,children:s.options.category})]})]});},"c40ae205":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Home",{enumerable:!0,get:function(){return d;}});let u=r("@swc/helpers/_/_interop_require_default"),c=r("31a222cd"),i=r("2259d9ae"),s=u._(r("0c21deca")),d=()=>{let e=(0,i.useRef)(),t=(0,i.useRef)(),[r,n]=(0,i.useState)({width:1920,height:980});return(0,i.useEffect)(()=>{let t=()=>{let t=e.current?.getBoundingClientRect();t&&n(t);};t();let r=new ResizeObserver(t);return e.current&&r.observe(e.current),()=>r.disconnect();},[]),(0,c.jsx)("div",{ref:e,className:s.default.home,children:(0,c.jsx)("canvas",{ref:t,width:r.width,height:r.height})});};},"c711f3e9":function  (e,t,n,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o="/JetBrainsMono-Bold.c503cc5e-8c856e.woff2";},"c86c3cd1":function  (e,d,o,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return c;}});let c={body:"body-deed1b03",code:"code-deed1b03","code--collapsed":"code--collapsed-deed1b03","collapse-btn":"collapse-btn-deed1b03",header:"header-deed1b03"};},"c950f9a1":function  (e,f,t,r){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),Object.defineProperty(f,"default",{enumerable:!0,get:function(){return d;}});let d={category:"category-d99f2a60",desc:"desc-d99f2a60",frame:"frame-d99f2a60",frame__btn:"frame__btn-d99f2a60",frame__wrapper:"frame__wrapper-d99f2a60",info:"info-d99f2a60",info__left:"info__left-d99f2a60",showcase:"showcase-d99f2a60",tags:"tags-d99f2a60",title:"title-d99f2a60"};},"d4e57cb7":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let c={item:"item-46b91894","item--selected":"item--selected-46b91894",selection:"selection-46b91894"};},"d8c2099c":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="/down.a4952c51-3f8dab.svg";},"ef4ccfa0":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u={image:"image-98c3d52f"};},"f8d6a1d2":function  (e,t,n,r){"use strict";let u;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"localUniqId",{enumerable:!0,get:function(){return l;}});let i=0,l=()=>{let e=new Date().getTime();return u===e?i+=1:(u=e,i=0),`uid-${u}${i}`;};},"fb0b54ac":function  (e,t,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("@swc/helpers/_/_export_star")._(r("2ea370be"),t);},});
//# sourceMappingURL=index_e552.e61177ce.js.map