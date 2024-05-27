(function(_){for(var r in _){_[r].__farm_resource_pot__='dist_index_9e11.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"1ce5aab9":function  (e,t,n,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="boxModel.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"253673e4":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},"2e3d6988":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let i=n("@swc/helpers/_/_interop_require_default"),o=i._(n("d82e6e42")),d=i._(n("253673e4")),l=i._(n("abd82204")),c=i._(n("92cc28ef")),s={id:"boxModel",title:"box model",desc:"css box model characterization",category:"css",tags:["standard"],isStandard:!0,html:d.default,css:l.default+o.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:c.default}]};},"92cc28ef":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
}`;}});},"3ab76d5d":function  (e,t,n,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="minContent.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"533e8601":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.box {
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
}`;}});},"73a05872":function  (e,t,n,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="pulse.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"40c79067":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
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
}`;},"4148376d":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`#app {
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
`;},"63f77b08":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="loading"></div>
`;},"9b37ac6b":function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let o=n("@swc/helpers/_/_interop_require_default"),r=o._(n("63f77b08")),l=o._(n("40c79067")),s=o._(n("4148376d")),f={id:"pulse",title:"pulse",desc:"Simple loading icon.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:s.default}]};}});},"972e19ca":function  (e,o,n,l){!function(e){for(var o in e)e[o].__farm_resource_pot__="anonymousBlockBox.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(o,e[o]);}({"4386746a":function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},"9370d78c":function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return i;}});let i=`.inline-level-box {
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
`;},"9c741c8f":function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return i;}});let i=`.inline-level-box {
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
}`;},d9ee3aa5:function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return b;}});let i=n("@swc/helpers/_/_interop_require_default"),t=i._(n("d82e6e42")),s=i._(n("4386746a")),r=i._(n("9c741c8f")),c=i._(n("9370d78c")),b={id:"anonymousBlockBox",title:"anonymous block box",desc:"how anonymous boxes are generated",category:"css",tags:["standard"],isStandard:!0,html:s.default,css:r.default+t.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:c.default}]};}});},"a6918a47":function  (e,t,r,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="typeWriter.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"44d24b50":function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
  display: flex;
}

.container {
  position: relative;
  max-width: 80%;
  margin: auto;
}

@property --stop {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
@keyframes write {
  from {
    --stop: 0%;
  }
  to {
    --stop: 100%;
  }
}
.text {
  line-height: 24px;
  -webkit-mask-image: linear-gradient(to right, black var(--stop), transparent var(--stop), transparent 100%);
          mask-image: linear-gradient(to right, black var(--stop), transparent var(--stop), transparent 100%);
  animation: write 10s linear;
  animation-fill-mode: forwards;
}`;},"8b2013b2":function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
  display: flex;
}

.container {
  position: relative;
  max-width: 80%;
  margin: auto;
}

@property --stop {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@keyframes write {
  from {
    --stop: 0%;
  }

  to {
    --stop: 100%;
  }
}

.text {
  line-height: 24px;
  mask-image: linear-gradient(to right, black var(--stop), transparent var(--stop), transparent 100%);
  animation: write 10s linear;
  animation-fill-mode: forwards;
}
`;},a3160ee9:function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<div class="container">
  <span class="text"
    >Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire
    world, stimulating progress, giving birth to evolution.</span
  >
</div>
`;},f52aaf30:function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p;}});let n=r("@swc/helpers/_/_interop_require_default"),o=n._(r("a3160ee9")),s=n._(r("44d24b50")),l=n._(r("8b2013b2")),p={id:"typeWriter",title:"type writer",desc:"Type writer animation",category:"css",tags:["animation"],html:o.default,css:s.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:l.default}]};}});},"b8e2a72a":function  (e,t,l,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="flex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"03a0d524":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let n=l("@swc/helpers/_/_interop_require_default"),d=n._(l("d82e6e42")),c=n._(l("592f58e5")),f=n._(l("faf30963")),i=n._(l("edc1dd7f")),o={id:"flex",title:"flex",desc:"css flex characterization",category:"css",tags:["standard"],isStandard:!0,html:c.default,css:f.default+d.default,code:[{label:"html",filetype:"html",content:c.default},{label:"scss",filetype:"scss",content:i.default}]};},"592f58e5":function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
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
}`;}});},"dd9304fa":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="lineHeight.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"19fa51aa":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let l=`.parent {
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
`;},cb8aa143:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let l=i("@swc/helpers/_/_interop_require_default"),c=l._(i("d82e6e42")),r=l._(i("aa837ab3")),o=l._(i("4ac3a9dc")),d=l._(i("19fa51aa")),s={id:"lineHeight",title:"line-height",desc:"css line-height characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:o.default+c.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:d.default}]};}});},"e90b5e00":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="zIndex.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"7a9ba8dd":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
//# sourceMappingURL=dist_index_9e11.f3c95893.js.map