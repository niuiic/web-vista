(function(_){for(var r in _){_[r].__farm_resource_pot__='index_af6d.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"aab0a90a":/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function  (e,t,n,o){"use strict";var r,i,u,c;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{HashRouter:function(){return m;},Route:function(){return l.Route;},Routes:function(){return l.Routes;},useLocation:function(){return l.useLocation;},useNavigate:function(){return l.useNavigate;}});let s=n("@swc/helpers/_/_interop_require_wildcard")._(n("2259d9ae")),l=n("e7dfd773"),d=n("57fc19da"),f=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6";}catch(e){}let w=s.startTransition;function m(e){let{basename:t,children:n,future:o,window:r}=e,i=s.useRef();null==i.current&&(i.current=(0,d.createHashHistory)({window:r,v5Compat:!0}));let u=i.current,[c,f]=s.useState({action:u.action,location:u.location}),{v7_startTransition:m}=o||{},h=s.useCallback(e=>{m&&w?w(()=>f(e)):f(e);},[f,m]);return s.useLayoutEffect(()=>u.listen(h),[u,h]),s.createElement(l.Router,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u,future:o});}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(u=r||(r={})).UseScrollRestoration="useScrollRestoration",u.UseSubmit="useSubmit",u.UseSubmitFetcher="useSubmitFetcher",u.UseFetcher="useFetcher",u.useViewTransitionState="useViewTransitionState",(c=i||(i={})).UseFetcher="useFetcher",c.UseFetchers="useFetchers",c.UseScrollRestoration="useScrollRestoration";let h=0;},"e7dfd773":/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{Route:function(){return D;},Router:function(){return M;},Routes:function(){return j;},UNSAFE_DataRouterContext:function(){return u;},UNSAFE_DataRouterStateContext:function(){return s;},UNSAFE_NavigationContext:function(){return c;},UNSAFE_RouteContext:function(){return p;},UNSAFE_useRouteId:function(){return b;},createPath:function(){return i.createPath;},useHref:function(){return h;},useLocation:function(){return f;},useMatches:function(){return B;},useNavigate:function(){return g;},useNavigation:function(){return P;},useResolvedPath:function(){return U;}});let o=r("@swc/helpers/_/_interop_require_wildcard")._(r("2259d9ae")),i=r("57fc19da");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e;}).apply(this,arguments);}let u=o.createContext(null),s=o.createContext(null),c=o.createContext(null),d=o.createContext(null),p=o.createContext({outlet:null,matches:[],isDataRoute:!1}),v=o.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,i.UNSAFE_invariant)(!1);let{basename:n,navigator:l}=o.useContext(c),{hash:u,pathname:s,search:d}=U(e,{relative:r}),p=s;return"/"!==n&&(p="/"===s?n:(0,i.joinPaths)([n,s])),l.createHref({pathname:p,search:d,hash:u});}function m(){return null!=o.useContext(d);}function f(){return m()||(0,i.UNSAFE_invariant)(!1),o.useContext(d).location;}function E(e){o.useContext(c).static||o.useLayoutEffect(e);}function g(){let{isDataRoute:e}=o.useContext(p);return e?function(){let e;let{router:t}=(y.UseNavigateStable,(e=o.useContext(u))||(0,i.UNSAFE_invariant)(!1),e),r=A(_.UseNavigateStable),n=o.useRef(!1);return E(()=>{n.current=!0;}),o.useCallback(function(e,o){void 0===o&&(o={}),n.current&&("number"==typeof e?t.navigate(e):t.navigate(e,l({fromRouteId:r},o)));},[t,r]);}():function(){m()||(0,i.UNSAFE_invariant)(!1);let e=o.useContext(u),{basename:t,future:r,navigator:n}=o.useContext(c),{matches:l}=o.useContext(p),{pathname:s}=f(),d=JSON.stringify((0,i.UNSAFE_getResolveToMatches)(l,r.v7_relativeSplatPath)),v=o.useRef(!1);return E(()=>{v.current=!0;}),o.useCallback(function(r,o){if(void 0===o&&(o={}),!v.current)return;if("number"==typeof r){n.go(r);return;}let l=(0,i.resolveTo)(r,JSON.parse(d),s,"path"===o.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,i.joinPaths)([t,l.pathname])),(o.replace?n.replace:n.push)(l,o.state,o);},[t,n,d,s,e]);}();}function U(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=o.useContext(c),{matches:l}=o.useContext(p),{pathname:u}=f(),s=JSON.stringify((0,i.UNSAFE_getResolveToMatches)(l,n.v7_relativeSplatPath));return o.useMemo(()=>(0,i.resolveTo)(e,JSON.parse(s),u,"path"===r),[e,s,u,r]);}let C=o.createElement(function(){var e;let t,r,n;let l=(t=o.useContext(v),r=F(_.UseRouteError),n=A(_.UseRouteError),void 0!==t?t:null==(e=r.errors)?void 0:e[n]),u=(0,i.isRouteErrorResponse)(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},u),s?o.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},s):null,null);},null);class S extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error};}static getDerivedStateFromError(e){return{error:e};}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation};}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t);}render(){return void 0!==this.state.error?o.createElement(p.Provider,{value:this.props.routeContext},o.createElement(v.Provider,{value:this.state.error,children:this.props.component})):this.props.children;}}function x(e){let{routeContext:t,match:r,children:n}=e,i=o.useContext(u);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(p.Provider,{value:t},n);}var N,R,y=((N=y||{}).UseBlocker="useBlocker",N.UseRevalidator="useRevalidator",N.UseNavigateStable="useNavigate",N),_=((R=_||{}).UseBlocker="useBlocker",R.UseLoaderData="useLoaderData",R.UseActionData="useActionData",R.UseRouteError="useRouteError",R.UseNavigation="useNavigation",R.UseRouteLoaderData="useRouteLoaderData",R.UseMatches="useMatches",R.UseRevalidator="useRevalidator",R.UseNavigateStable="useNavigate",R.UseRouteId="useRouteId",R);function F(e){let t=o.useContext(s);return t||(0,i.UNSAFE_invariant)(!1),t;}function A(e){let t;let r=((t=o.useContext(p))||(0,i.UNSAFE_invariant)(!1),t),n=r.matches[r.matches.length-1];return n.route.id||(0,i.UNSAFE_invariant)(!1),n.route.id;}function b(){return A(_.UseRouteId);}function P(){return F(_.UseNavigation).navigation;}function B(){let{matches:e,loaderData:t}=F(_.UseMatches);return o.useMemo(()=>e.map(e=>(0,i.UNSAFE_convertRouteMatchToUiMatch)(e,t)),[e,t]);}let k={};function D(e){(0,i.UNSAFE_invariant)(!1);}function M(e){let{basename:t="/",children:r=null,location:n,navigationType:u=i.Action.Pop,navigator:s,static:p=!1,future:v}=e;m()&&(0,i.UNSAFE_invariant)(!1);let h=t.replace(/^\/*/,"/"),f=o.useMemo(()=>({basename:h,navigator:s,static:p,future:l({v7_relativeSplatPath:!1},v)}),[h,v,s,p]);"string"==typeof n&&(n=(0,i.parsePath)(n));let{pathname:E="/",search:g="",hash:U="",state:C=null,key:S="default"}=n,x=o.useMemo(()=>{let e=(0,i.stripBasename)(E,h);return null==e?null:{location:{pathname:e,search:g,hash:U,state:C,key:S},navigationType:u};},[h,E,g,U,C,S,u]);return null==x?null:o.createElement(c.Provider,{value:f},o.createElement(d.Provider,{children:r,value:x}));}function j(e){let{children:t,location:r}=e;return function(e,t,r,n){let u;m()||(0,i.UNSAFE_invariant)(!1);let{navigator:s}=o.useContext(c),{matches:v}=o.useContext(p),h=v[v.length-1],E=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let U=f();if(t){var N;let e="string"==typeof t?(0,i.parsePath)(t):t;"/"===g||(null==(N=e.pathname)?void 0:N.startsWith(g))||(0,i.UNSAFE_invariant)(!1),u=e;}else u=U;let R=u.pathname||"/",y=R;if("/"!==g){let e=g.replace(/^\//,"").split("/");y="/"+R.replace(/^\//,"").split("/").slice(e.length).join("/");}let _=(0,i.matchRoutes)(e,{pathname:y}),F=function(e,t,r,n){var l,u;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){if(null==(u=r)||!u.errors)return null;e=r.matches;}let s=e,c=null==(l=r)?void 0:l.errors;if(null!=c){let e=s.findIndex(e=>e.route.id&&(null==c?void 0:c[e.route.id])!==void 0);e>=0||(0,i.UNSAFE_invariant)(!1),s=s.slice(0,Math.min(s.length,e+1));}let d=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){d=!0,s=p>=0?s.slice(0,p+1):[s[0]];break;}}}return s.reduceRight((e,n,i)=>{var l;let u;let v=!1,h=null,m=null;r&&(u=c&&n.route.id?c[n.route.id]:void 0,h=n.route.errorElement||C,d&&(p<0&&0===i?(k[l="route-fallback"]||(k[l]=!0),v=!0,m=null):p===i&&(v=!0,m=n.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,i+1)),E=()=>{let t;return t=u?h:v?m:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(x,{match:n,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t});};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===i)?o.createElement(S,{location:r.location,revalidation:r.revalidation,component:h,error:u,children:E(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):E();},null);}(_&&_.map(e=>Object.assign({},e,{params:Object.assign({},E,e.params),pathname:(0,i.joinPaths)([g,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?g:(0,i.joinPaths)([g,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),v,void 0,void 0);return t&&F?o.createElement(d.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:i.Action.Pop}},F):F;}(function e(t,r){void 0===r&&(r=[]);let n=[];return o.Children.forEach(t,(t,l)=>{if(!o.isValidElement(t))return;let u=[...r,l];if(t.type===o.Fragment){n.push.apply(n,e(t.props.children,u));return;}t.type!==D&&(0,i.UNSAFE_invariant)(!1),t.props.index&&t.props.children&&(0,i.UNSAFE_invariant)(!1);let s={id:t.props.id||u.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=e(t.props.children,u)),n.push(s);}),n;}(t),r);}new Promise(()=>{});},});