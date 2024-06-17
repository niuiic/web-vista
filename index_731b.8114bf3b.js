(function(_){for(var r in _){_[r].__farm_resource_pot__='index_731b.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"57fc19da":/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function  (e,t,n,r){"use strict";var i,l,o,s;function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e;}).apply(this,arguments);}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{Action:function(){return i;},UNSAFE_getResolveToMatches:function(){return W;},UNSAFE_invariant:function(){return p;},UNSAFE_warning:function(){return f;},createHashHistory:function(){return c;},isRouteErrorResponse:function(){return R;},joinPaths:function(){return x;},matchRoutes:function(){return y;},parsePath:function(){return v;},resolveTo:function(){return $;},stripBasename:function(){return w;}}),(o=i||(i={})).Pop="POP",o.Push="PUSH",o.Replace="REPLACE";let u="popstate";function c(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,c=i.Pop,f=null,v=y();function y(){return(s.state||{idx:null}).idx;}function b(){c=i.Pop;let e=y(),t=null==e?null:e-v;v=e,f&&f({action:c,location:w.location,delta:t});}function P(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"==typeof e?e:g(e);return p(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t);}null==v&&(v=0,s.replaceState(h({},s.state,{idx:v}),""));let w={get action(){return c;},get location(){return e(l,s);},listen(e){if(f)throw Error("A history only accepts one active listener");return l.addEventListener(u,b),f=e,()=>{l.removeEventListener(u,b),f=null;};},createHref:e=>t(l,e),createURL:P,encodeLocation(e){let t=P(e);return{pathname:t.pathname,search:t.search,hash:t.hash};},push:function(e,t){c=i.Push;let r=m(w.location,e,t);n&&n(r,e);let h=d(r,v=y()+1),u=w.createHref(r);try{s.pushState(h,"",u);}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;l.location.assign(u);}o&&f&&f({action:c,location:w.location,delta:1});},replace:function(e,t){c=i.Replace;let r=m(w.location,e,t);n&&n(r,e);let l=d(r,v=y()),h=w.createHref(r);s.replaceState(l,"",h),o&&f&&f({action:c,location:w.location,delta:0});},go:e=>s.go(e)};return w;}(function(e,t){let{pathname:n="/",search:r="",hash:i=""}=v(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),m("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default");},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n);}return r+"#"+("string"==typeof t?t:g(t));},function(e,t){f("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")");},e);}function p(e,t){if(!1===e||null==e)throw Error(t);}function f(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t);}catch(e){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t};}function m(e,t,n,r){return void 0===n&&(n=null),h({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)});}function g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t;}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e);}return t;}function y(e,t,n){void 0===n&&(n="/");let r=w(("string"==typeof t?v(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,r,i){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i="");let l=(t,l,o)=>{let s={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};s.relativePath.startsWith("/")&&(p(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(i.length));let h=x([i,s.relativePath]),u=r.concat(s);if(t.children&&t.children.length>0&&(p(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+h+'".'),e(t.children,n,u,h)),null!=t.path||t.index){var c;let e,r;n.push({path:h,score:(c=t.index,r=(e=h.split("/")).length,e.some(P)&&(r+=-2),c&&(r+=2),e.filter(e=>!P(e)).reduce((e,t)=>e+(b.test(t)?3:""===t?1:10),r)),routesMeta:u});}};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...i]=n,l=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===i.length)return l?[o,""]:[o];let s=e(i.join("/")),h=[];return h.push(...s.map(e=>""===e?o:[o,e].join("/"))),l&&h.push(...s),h.map(e=>t.startsWith("/")&&""===e?"/":e);}(e.path))l(e,t,n);else l(e,t);}),n;}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?n[n.length-1]-r[r.length-1]:0);});}(i);let l=null;for(let e=0;null==l&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/");}catch(t){return f(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e;}}(r);l=function(e,t){let{routesMeta:n}=e,r={},i="/",l=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,h="/"===i?t:t.slice(i.length)||"/",u=function(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),f("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r];}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1");}let h=s[n];return i&&!h?e[r]=void 0:e[r]=(h||"").replace(/%2F/g,"/"),e;},{}),pathname:l,pathnameBase:o,pattern:e};}({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},h);if(!u)return null;Object.assign(r,u.params);let c=o.route;l.push({params:r,pathname:x([i,u.pathname]),pathnameBase:E(x([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=x([i,u.pathnameBase]));}return l;}(i[e],t);}return l;}(s=l||(l={})).data="data",s.deferred="deferred",s.redirect="redirect",s.error="error";let b=/^:[\w-]+$/,P=e=>"*"===e;function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/";}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';}function W(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase);}function $(e,t,n,r){let i,l;void 0===r&&(r=!1),"string"==typeof e?i=v(e):(p(!(i=h({},e)).pathname||!i.pathname.includes("?"),S("?","pathname","search",i)),p(!i.pathname||!i.pathname.includes("#"),S("#","pathname","hash",i)),p(!i.search||!i.search.includes("#"),S("#","search","hash",i)));let o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)l=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/");}l=e>=0?t[e]:"/";}let u=function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:i="",hash:l=""}="string"==typeof e?v(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e);}),n.length>1?n.join("/"):"/"):t,search:O(i),hash:A(l)};}(i,l),c=s&&"/"!==s&&s.endsWith("/"),f=(o||"."===s)&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u;}let x=e=>e.join("/").replace(/\/\/+/g,"/"),E=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",A=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function R(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e;}Symbol("deferred");},});