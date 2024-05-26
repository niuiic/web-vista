(function(_){for(var r in _){_[r].__farm_resource_pot__='dist_index_c1ec.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"3ab76d5d":function  (e,t,n,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="minContent.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"533e8601":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.box {
  width: -moz-min-content;
  width: min-content;
}

.inline-block {
  display: inline-block;
}

.defined-width {
  width: -moz-max-content;
  width: max-content;
}`;},"5f78ff55":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let l=n("@swc/helpers/_/_interop_require_default"),s=l._(n("d82e6e42")),o=l._(n("fe19a1e4")),c=l._(n("533e8601")),d=l._(n("e8ed8fc5")),r={id:"minContent",title:"min-content",desc:"css width min-content characterization",category:"css",tags:["standard"],isStandard:!0,html:o.default,css:c.default+s.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:d.default}]};},e8ed8fc5:function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.box {
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
`;}});},"512d1a77":function  (e,t,l,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="float.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"5b9b2f6d":function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=`.parent {
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
`;},"8c0b1759":function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let r=l("@swc/helpers/_/_interop_require_default"),o=r._(l("d82e6e42")),i=r._(l("6dd6dd16")),s=r._(l("ca8bbf13")),c=r._(l("5b9b2f6d")),f={id:"float",title:"float",desc:"css float characterization",category:"css",tags:["standard"],isStandard:!0,html:i.default,css:s.default+o.default,code:[{label:"html",filetype:"html",content:i.default},{label:"scss",filetype:"scss",content:c.default}]};},ca8bbf13:function(e,t,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=`.parent {
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
}`;}});},"b8e2a72a":function  (e,t,l,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="flex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"03a0d524":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let n=l("@swc/helpers/_/_interop_require_default"),d=n._(l("d82e6e42")),c=n._(l("592f58e5")),f=n._(l("faf30963")),i=n._(l("edc1dd7f")),o={id:"flex",title:"flex",desc:"css flex characterization",category:"css",tags:["standard"],isStandard:!0,html:c.default,css:f.default+d.default,code:[{label:"html",filetype:"html",content:c.default},{label:"scss",filetype:"scss",content:i.default}]};},"592f58e5":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
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
}`;}});},"e90b5e00":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="zIndex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"7a9ba8dd":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
`;},f83ec78b:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let d=i("@swc/helpers/_/_interop_require_default"),c=d._(i("d82e6e42")),r=d._(i("d77c119d")),o=d._(i("7a9ba8dd")),l=d._(i("ddc10d6f")),s={id:"zIndex",title:"z-index",desc:"css z-index characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:o.default+c.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:l.default}]};}});},});
//# sourceMappingURL=dist_index_c1ec.5640b2a4.js.map