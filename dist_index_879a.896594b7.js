(function(_){for(var r in _){_[r].__farm_resource_pot__='dist_index_879a.js';(globalThis || window || global)['d1befa03c79ca0b84ecc488dea96bc68'].__farm_module_system__.register(r,_[r])}})({"18c496f7":function  (e,c,t,l){!function(e){for(var c in e)e[c].__farm_resource_pot__="counter.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(c,e[c]);}({"1bee128a":function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return s;}});let n=t("@swc/helpers/_/_interop_require_default"),r=n._(t("d82e6e42")),i=n._(t("de6ffd56")),o=n._(t("6197a48d")),u=n._(t("b58e7079")),s={id:"counter",title:"counter",desc:"css counter characterization",category:"css",tags:["standard"],isStandard:!0,html:i.default,css:o.default+r.default,code:[{label:"html",filetype:"html",content:i.default},{label:"scss",filetype:"scss",content:u.default}]};},"6197a48d":function(e,c,t,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent {
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
`;}});},"198dd219":function  (e,t,r,i){!function(e){for(var t in e)e[t].__farm_resource_pot__="dice.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"10db09a4":function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<div class="dice">
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
</div>
`;},"889e6e35":function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
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
}`;},c80a0c55:function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let n=r("@swc/helpers/_/_interop_require_default"),s=n._(r("10db09a4")),d=n._(r("889e6e35")),o=n._(r("e26a6a21")),l={id:"dice",title:"dice",desc:"Dice animation",category:"css",tags:["animation"],html:s.default,css:d.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:o.default}]};},e26a6a21:function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
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
`;}});},"23ec4682":function  (e,d,t,f){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return o;}}),t("d11778a3"),t("d789ca88"),t("972e19ca"),t("3b4b719e"),t("1ce5aab9"),t("f022a658"),t("37e8e73f"),t("18c496f7"),t("198dd219"),t("9910afdf"),t("be53affd"),t("b8e2a72a"),t("512d1a77"),t("77e6ea10"),t("714f290f"),t("dd9304fa"),t("86c72e09"),t("3ab76d5d"),t("73a05872"),t("26d760fd"),t("e639dd12"),t("d7fadd5b"),t("b377a019"),t("e90b5e00"),function(e){for(var d in e)e[d].__farm_resource_pot__="index_03e9.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(d,e[d]);}({"953dfae2":function(e,d,t,f){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return z;}});let l=t("@swc/helpers/_/_interop_require_default"),c=l._(t("b3908126")),o=l._(t("d9ee3aa5")),b=l._(t("975c52b8")),s=l._(t("2e3d6988")),r=l._(t("f3e012b0")),u=l._(t("c0fd6a57")),_=l._(t("1bee128a")),i=l._(t("c80a0c55")),n=l._(t("1f92043a")),j=l._(t("4905518c")),p=l._(t("03a0d524")),g=l._(t("8c0b1759")),m=l._(t("4aa6b49a")),x=l._(t("adf9a54c")),y=l._(t("cb8aa143")),w=l._(t("377810c4")),h=l._(t("5f78ff55")),v=l._(t("9b37ac6b")),M=l._(t("cc51c00f")),O=l._(t("8a844209")),P=l._(t("64748b6f")),k=l._(t("3650c57d")),T=l._(t("f83ec78b")),z=[c.default,o.default,b.default,s.default,r.default,u.default,_.default,i.default,n.default,j.default,p.default,g.default,m.default,x.default,y.default,w.default,h.default,v.default,M.default,O.default,P.default,k.default,T.default];},d82e6e42:function(e,d,t,f){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return l;}});let l=`section {
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
}`;}}),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setInitialLoadedResources(["absolute.1a09ac56.js","anonymousBlockBox.dbe29078.js","batteryCharge.f0bee5ee.js","boxModel.492d930c.js","boxSize.61ad8a96.js","clock.3acc60fc.js","counter.bc2da8bb.js","dice.ae9362d7.js","fire.d6e92d71.js","firework.3f525389.js","flex.3b702141.js","float.3517fa88.js","formattingContext.ad078a57.js","jellyBox.cea4228c.js","lineHeight.40a22170.js","loading.9eca49d5.js","minContent.2ba46c7d.js","pulse.c20a3dff.js","rain.6d34140b.js","verticalAlign.91781c84.js","walkingDots.74c1b8df.js","wavyUnderline.a2845911.js","zIndex.fbbbce27.js"]),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setDynamicModuleResourcesMap({});var l=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__;l.bootstrap();var c=l.require("953dfae2");let o=c.default||c;},"26d760fd":function  (i,n,e,t){!function(i){for(var n in i)i[n].__farm_resource_pot__="rain.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(n,i[n]);}({"4622116c":function(i,n,e,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d;}});let d=`@use 'sass:math';

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
`;},"7159fa00":function(i,n,e,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d;}});let d=`#app {
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
  left: 74px;
  height: 36px;
  animation: drop 1s ease-in 0.93s infinite;
}

.raindrop:nth-child(2) {
  left: 441px;
  height: 24px;
  animation: drop 1s ease-in 0.08s infinite;
}

.raindrop:nth-child(3) {
  left: 446px;
  height: 15px;
  animation: drop 1s ease-in 0.34s infinite;
}

.raindrop:nth-child(4) {
  left: 68px;
  height: 48px;
  animation: drop 1s ease-in 0.25s infinite;
}

.raindrop:nth-child(5) {
  left: 229px;
  height: 41px;
  animation: drop 1s ease-in 0.27s infinite;
}

.raindrop:nth-child(6) {
  left: 90px;
  height: 34px;
  animation: drop 1s ease-in 0.24s infinite;
}

.raindrop:nth-child(7) {
  left: 474px;
  height: 44px;
  animation: drop 1s ease-in 0.91s infinite;
}

.raindrop:nth-child(8) {
  left: 104px;
  height: 38px;
  animation: drop 1s ease-in 0.45s infinite;
}

.raindrop:nth-child(9) {
  left: 34px;
  height: 33px;
  animation: drop 1s ease-in 0.14s infinite;
}

.raindrop:nth-child(10) {
  left: 184px;
  height: 27px;
  animation: drop 1s ease-in 0.27s infinite;
}

.raindrop:nth-child(11) {
  left: 451px;
  height: 18px;
  animation: drop 1s ease-in 0.76s infinite;
}

.raindrop:nth-child(12) {
  left: 392px;
  height: 49px;
  animation: drop 1s ease-in 0.03s infinite;
}

.raindrop:nth-child(13) {
  left: 305px;
  height: 14px;
  animation: drop 1s ease-in 0.45s infinite;
}

.raindrop:nth-child(14) {
  left: 381px;
  height: 31px;
  animation: drop 1s ease-in 0.91s infinite;
}

.raindrop:nth-child(15) {
  left: 394px;
  height: 35px;
  animation: drop 1s ease-in 0.76s infinite;
}

.raindrop:nth-child(16) {
  left: 235px;
  height: 38px;
  animation: drop 1s ease-in 0.51s infinite;
}

.raindrop:nth-child(17) {
  left: 281px;
  height: 41px;
  animation: drop 1s ease-in 0.94s infinite;
}

.raindrop:nth-child(18) {
  left: 376px;
  height: 14px;
  animation: drop 1s ease-in 0.44s infinite;
}

.raindrop:nth-child(19) {
  left: 409px;
  height: 18px;
  animation: drop 1s ease-in 0.76s infinite;
}

.raindrop:nth-child(20) {
  left: 221px;
  height: 15px;
  animation: drop 1s ease-in 0.11s infinite;
}

.raindrop:nth-child(21) {
  left: 332px;
  height: 18px;
  animation: drop 1s ease-in 0.34s infinite;
}

.raindrop:nth-child(22) {
  left: 434px;
  height: 20px;
  animation: drop 1s ease-in 0.51s infinite;
}

.raindrop:nth-child(23) {
  left: 126px;
  height: 27px;
  animation: drop 1s ease-in 0.16s infinite;
}

.raindrop:nth-child(24) {
  left: 255px;
  height: 14px;
  animation: drop 1s ease-in 0.28s infinite;
}

.raindrop:nth-child(25) {
  left: 368px;
  height: 28px;
  animation: drop 1s ease-in 0.18s infinite;
}

.raindrop:nth-child(26) {
  left: 29px;
  height: 23px;
  animation: drop 1s ease-in 0.79s infinite;
}

.raindrop:nth-child(27) {
  left: 54px;
  height: 19px;
  animation: drop 1s ease-in 0.58s infinite;
}

.raindrop:nth-child(28) {
  left: 466px;
  height: 47px;
  animation: drop 1s ease-in 0.95s infinite;
}

.raindrop:nth-child(29) {
  left: 264px;
  height: 34px;
  animation: drop 1s ease-in 0.98s infinite;
}

.raindrop:nth-child(30) {
  left: 72px;
  height: 19px;
  animation: drop 1s ease-in 0.02s infinite;
}

.raindrop:nth-child(31) {
  left: 139px;
  height: 35px;
  animation: drop 1s ease-in 0.62s infinite;
}

.raindrop:nth-child(32) {
  left: 484px;
  height: 46px;
  animation: drop 1s ease-in 0.29s infinite;
}

.raindrop:nth-child(33) {
  left: 221px;
  height: 18px;
  animation: drop 1s ease-in 0.35s infinite;
}

.raindrop:nth-child(34) {
  left: 333px;
  height: 16px;
  animation: drop 1s ease-in 0.48s infinite;
}

.raindrop:nth-child(35) {
  left: 199px;
  height: 27px;
  animation: drop 1s ease-in 0.95s infinite;
}

.raindrop:nth-child(36) {
  left: 471px;
  height: 43px;
  animation: drop 1s ease-in 0.57s infinite;
}

.raindrop:nth-child(37) {
  left: 457px;
  height: 14px;
  animation: drop 1s ease-in 0.09s infinite;
}

.raindrop:nth-child(38) {
  left: 171px;
  height: 49px;
  animation: drop 1s ease-in 0.58s infinite;
}

.raindrop:nth-child(39) {
  left: 134px;
  height: 38px;
  animation: drop 1s ease-in 0.42s infinite;
}

.raindrop:nth-child(40) {
  left: 27px;
  height: 30px;
  animation: drop 1s ease-in 0.99s infinite;
}

.raindrop:nth-child(41) {
  left: 452px;
  height: 12px;
  animation: drop 1s ease-in 0.21s infinite;
}

.raindrop:nth-child(42) {
  left: 410px;
  height: 37px;
  animation: drop 1s ease-in 0.46s infinite;
}

.raindrop:nth-child(43) {
  left: 317px;
  height: 27px;
  animation: drop 1s ease-in 0.34s infinite;
}

.raindrop:nth-child(44) {
  left: 311px;
  height: 48px;
  animation: drop 1s ease-in 0.83s infinite;
}

.raindrop:nth-child(45) {
  left: 194px;
  height: 24px;
  animation: drop 1s ease-in 0.43s infinite;
}

.raindrop:nth-child(46) {
  left: 336px;
  height: 18px;
  animation: drop 1s ease-in 0.93s infinite;
}

.raindrop:nth-child(47) {
  left: 153px;
  height: 46px;
  animation: drop 1s ease-in 0.99s infinite;
}

.raindrop:nth-child(48) {
  left: 463px;
  height: 15px;
  animation: drop 1s ease-in 0.47s infinite;
}

.raindrop:nth-child(49) {
  left: 366px;
  height: 49px;
  animation: drop 1s ease-in 0.35s infinite;
}

.raindrop:nth-child(50) {
  left: 113px;
  height: 25px;
  animation: drop 1s ease-in 0.01s infinite;
}`;},"8d2489ba":function(i,n,e,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d;}});let d=`<div class="rain">
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
`;},cc51c00f:function(i,n,e,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o;}});let d=e("@swc/helpers/_/_interop_require_default"),r=d._(e("8d2489ba")),s=d._(e("7159fa00")),p=d._(e("4622116c")),o={id:"rain",title:"rain",desc:"Rain animation",category:"css",tags:["animation"],html:r.default,css:s.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:p.default}]};}});},"37e8e73f":function  (i,e,t,l){!function(i){for(var e in i)i[e].__farm_resource_pot__="clock.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(e,i[e]);}({"0ff84df9":function(i,e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r;}});let r=`@use 'sass:math';

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
`;},"5272ca90":function(i,e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r;}});let r=`/* # clock */
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
}`;},"53a1347d":function(i,e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r;}});let r=`<div class="clock">
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
`;},c0fd6a57:function(i,e,t,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return s;}});let r=t("@swc/helpers/_/_interop_require_default"),o=r._(t("53a1347d")),n=r._(t("5272ca90")),m=r._(t("0ff84df9")),s={id:"clock",title:"clock",desc:"Clock animation",category:"css",tags:["animation"],html:o.default,css:n.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:m.default}]};}});},"3b4b719e":function  (t,e,i,o){!function(t){for(var e in t)t[e].__farm_resource_pot__="batteryCharge.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(e,t[e]);}({"26bd0e9e":function(t,e,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n=`@use 'sass:math';

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
`;},"975c52b8":function(t,e,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return p;}});let n=i("@swc/helpers/_/_interop_require_default"),r=n._(i("cd47cf95")),l=n._(i("cdbd32c8")),s=n._(i("26bd0e9e")),p={id:"batteryCharge",title:"battery charge",desc:"HuaWei battery charging animation.",category:"css",tags:["animation"],html:r.default,css:l.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:s.default}]};},cd47cf95:function(t,e,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n=`<div class="container">
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
`;},cdbd32c8:function(t,e,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n;}});let n=`/* # app */
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
  left: 11px;
  width: 17px;
  height: 17px;
  animation: move-to-top 5s ease-in-out -1.652s infinite;
}

li:nth-child(1) {
  top: 50%;
  left: 55px;
  width: 17px;
  height: 17px;
  animation: move-to-top 7s ease-in-out -4.125s infinite;
}

li:nth-child(2) {
  top: 50%;
  left: 59px;
  width: 22px;
  height: 22px;
  animation: move-to-top 4s ease-in-out -4.556s infinite;
}

li:nth-child(3) {
  top: 50%;
  left: 94px;
  width: 20px;
  height: 20px;
  animation: move-to-top 9s ease-in-out -1.715s infinite;
}

li:nth-child(4) {
  top: 50%;
  left: 17px;
  width: 26px;
  height: 26px;
  animation: move-to-top 9s ease-in-out -0.005s infinite;
}

li:nth-child(5) {
  top: 50%;
  left: 89px;
  width: 25px;
  height: 25px;
  animation: move-to-top 5s ease-in-out -1.141s infinite;
}

li:nth-child(6) {
  top: 50%;
  left: 101px;
  width: 23px;
  height: 23px;
  animation: move-to-top 4s ease-in-out -0.988s infinite;
}

li:nth-child(7) {
  top: 50%;
  left: 56px;
  width: 19px;
  height: 19px;
  animation: move-to-top 6s ease-in-out -0.343s infinite;
}

li:nth-child(8) {
  top: 50%;
  left: 63px;
  width: 20px;
  height: 20px;
  animation: move-to-top 5s ease-in-out -3.187s infinite;
}

li:nth-child(9) {
  top: 50%;
  left: 92px;
  width: 26px;
  height: 26px;
  animation: move-to-top 6s ease-in-out -0.858s infinite;
}

li:nth-child(10) {
  top: 50%;
  left: 63px;
  width: 30px;
  height: 30px;
  animation: move-to-top 4s ease-in-out -0.83s infinite;
}

li:nth-child(11) {
  top: 50%;
  left: 49px;
  width: 23px;
  height: 23px;
  animation: move-to-top 4s ease-in-out -3.105s infinite;
}

li:nth-child(12) {
  top: 50%;
  left: 80px;
  width: 19px;
  height: 19px;
  animation: move-to-top 5s ease-in-out -2.438s infinite;
}

li:nth-child(13) {
  top: 50%;
  left: 55px;
  width: 29px;
  height: 29px;
  animation: move-to-top 5s ease-in-out -0.725s infinite;
}

li:nth-child(14) {
  top: 50%;
  left: 17px;
  width: 19px;
  height: 19px;
  animation: move-to-top 4s ease-in-out -1.757s infinite;
}

li:nth-child(15) {
  top: 50%;
  left: 13px;
  width: 30px;
  height: 30px;
  animation: move-to-top 4s ease-in-out -4.434s infinite;
}`;}});},"714f290f":function  (e,t,r,o){!function(e){for(var t in e)e[t].__farm_resource_pot__="jellyBox.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"588e2ad7":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`/* # wrapper */
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
`;},adf9a54c:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let i=r("@swc/helpers/_/_interop_require_default"),n=i._(r("f597ccaf")),s=i._(r("e41dd676")),l=i._(r("588e2ad7")),d={id:"jellyBox",title:"jelly box",desc:"Jumping jelly box",category:"css",tags:["animation"],html:n.default,css:s.default,code:[{label:"html",filetype:"html",content:n.default},{label:"scss",filetype:"scss",content:l.default}]};},e41dd676:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`/* # wrapper */
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
}`;},f597ccaf:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<div class="loader">
  <div class="shadow"></div>
  <div class="box"></div>
</div>
`;}});},"77e6ea10":function  (e,t,i,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="formattingContext.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"3d6ac7fd":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<section>
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
`;},"4aa6b49a":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let n=i("@swc/helpers/_/_interop_require_default"),d=n._(i("d82e6e42")),o=n._(i("3d6ac7fd")),c=n._(i("b4fd3cbd")),l=n._(i("6d7accd3")),s={id:"formattingContext",title:"formatting context",desc:"css formatting context characterization",category:"css",tags:["standard"],isStandard:!0,html:o.default,css:c.default+d.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:l.default}]};},"6d7accd3":function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`.parent1 {
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
}`;}});},"86c72e09":function  (e,t,i,o){!function(e){for(var t in e)e[t].__farm_resource_pot__="loading.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"10032f9c":function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`<div class="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
`;},"377810c4":function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let n=i("@swc/helpers/_/_interop_require_default"),d=n._(i("10032f9c")),l=n._(i("999c83f8")),r=n._(i("9bdda8b0")),s={id:"loading",title:"loading",desc:"Text loading animation.",category:"css",tags:["animation"],html:d.default,css:l.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:r.default}]};},"999c83f8":function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
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
}`;},"9bdda8b0":function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n;}});let n=`#app {
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
`;}});},"972e19ca":function  (e,o,n,l){!function(e){for(var o in e)e[o].__farm_resource_pot__="anonymousBlockBox.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(o,e[o]);}({"4386746a":function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
}`;},d9ee3aa5:function(e,o,n,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return b;}});let i=n("@swc/helpers/_/_interop_require_default"),t=i._(n("d82e6e42")),s=i._(n("4386746a")),r=i._(n("9c741c8f")),c=i._(n("9370d78c")),b={id:"anonymousBlockBox",title:"anonymous block box",desc:"how anonymous boxes are generated",category:"css",tags:["standard"],isStandard:!0,html:s.default,css:r.default+t.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:c.default}]};}});},"9910afdf":function  (t,i,o,n){!function(t){for(var i in t)t[i].__farm_resource_pot__="fire.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(i,t[i]);}({"0d56efad":function(t,i,o,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return e;}});let e=`#app {
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
  bottom: -319px;
  left: -104px;
  animation: move 0.8s infinite 3.5s linear;
}

.dot:nth-child(2) {
  bottom: -286px;
  left: 124px;
  animation: move 2.1s infinite 1.7s linear;
}

.dot:nth-child(3) {
  bottom: -121px;
  left: -81px;
  animation: move 1s infinite 2.2s linear;
}

.dot:nth-child(4) {
  bottom: -162px;
  left: -112px;
  animation: move 0.8s infinite 3.4s linear;
}

.dot:nth-child(5) {
  bottom: -313px;
  left: 86px;
  animation: move 1.6s infinite 1.9s linear;
}

.dot:nth-child(6) {
  bottom: -250px;
  left: -73px;
  animation: move 1.5s infinite 2.8s linear;
}

.dot:nth-child(7) {
  bottom: -310px;
  left: -151px;
  animation: move 2.1s infinite 6s linear;
}

.dot:nth-child(8) {
  bottom: -171px;
  left: -16px;
  animation: move 2.3s infinite 0.1s linear;
}

.dot:nth-child(9) {
  bottom: -129px;
  left: -134px;
  animation: move 2.7s infinite 4.6s linear;
}

.dot:nth-child(10) {
  bottom: -153px;
  left: 99px;
  animation: move 1.4s infinite 5.1s linear;
}

.dot:nth-child(11) {
  bottom: -125px;
  left: -136px;
  animation: move 1.3s infinite 0.5s linear;
}

.dot:nth-child(12) {
  bottom: -300px;
  left: 75px;
  animation: move 2.5s infinite 0.5s linear;
}

.dot:nth-child(13) {
  bottom: -175px;
  left: 116px;
  animation: move 2.8s infinite 4.6s linear;
}

.dot:nth-child(14) {
  bottom: -187px;
  left: 39px;
  animation: move 2.3s infinite 1.8s linear;
}

.dot:nth-child(15) {
  bottom: -131px;
  left: -38px;
  animation: move 2.1s infinite 4.8s linear;
}

.dot:nth-child(16) {
  bottom: -310px;
  left: 50px;
  animation: move 1.6s infinite 3.2s linear;
}

.dot:nth-child(17) {
  bottom: -278px;
  left: 64px;
  animation: move 1.5s infinite 0.6s linear;
}

.dot:nth-child(18) {
  bottom: -353px;
  left: 70px;
  animation: move 2.4s infinite 4s linear;
}

.dot:nth-child(19) {
  bottom: -200px;
  left: -130px;
  animation: move 2.8s infinite 1.9s linear;
}

.dot:nth-child(20) {
  bottom: -300px;
  left: 82px;
  animation: move 0.9s infinite 1.2s linear;
}

.dot:nth-child(21) {
  bottom: -216px;
  left: 75px;
  animation: move 1.6s infinite 0.7s linear;
}

.dot:nth-child(22) {
  bottom: -167px;
  left: -28px;
  animation: move 1.3s infinite 2.1s linear;
}

.dot:nth-child(23) {
  bottom: -248px;
  left: 32px;
  animation: move 3s infinite 0.9s linear;
}

.dot:nth-child(24) {
  bottom: -250px;
  left: -119px;
  animation: move 3.3s infinite 1.9s linear;
}

.dot:nth-child(25) {
  bottom: -127px;
  left: -120px;
  animation: move 1.5s infinite 1s linear;
}

.dot:nth-child(26) {
  bottom: -181px;
  left: 29px;
  animation: move 3s infinite 0.1s linear;
}

.dot:nth-child(27) {
  bottom: -205px;
  left: 84px;
  animation: move 1.3s infinite 5.2s linear;
}

.dot:nth-child(28) {
  bottom: -337px;
  left: 104px;
  animation: move 1.5s infinite 3.4s linear;
}

.dot:nth-child(29) {
  bottom: -231px;
  left: -71px;
  animation: move 2.5s infinite 4.4s linear;
}

.dot:nth-child(30) {
  bottom: -123px;
  left: 130px;
  animation: move 0.9s infinite 3s linear;
}

.dot:nth-child(31) {
  bottom: -289px;
  left: -141px;
  animation: move 1.5s infinite 4.9s linear;
}

.dot:nth-child(32) {
  bottom: -254px;
  left: 118px;
  animation: move 2.7s infinite 3.4s linear;
}

.dot:nth-child(33) {
  bottom: -232px;
  left: -113px;
  animation: move 2.7s infinite 2s linear;
}

.dot:nth-child(34) {
  bottom: -213px;
  left: 119px;
  animation: move 1.1s infinite 5.3s linear;
}

.dot:nth-child(35) {
  bottom: -211px;
  left: -97px;
  animation: move 1.6s infinite 3.7s linear;
}

.dot:nth-child(36) {
  bottom: -275px;
  left: 21px;
  animation: move 3.2s infinite 0.2s linear;
}

.dot:nth-child(37) {
  bottom: -358px;
  left: -70px;
  animation: move 2.4s infinite 4.7s linear;
}

.dot:nth-child(38) {
  bottom: -323px;
  left: 0px;
  animation: move 1.8s infinite 2.1s linear;
}

.dot:nth-child(39) {
  bottom: -329px;
  left: -69px;
  animation: move 1.6s infinite 3.3s linear;
}

.dot:nth-child(40) {
  bottom: -272px;
  left: -30px;
  animation: move 3.3s infinite 0.4s linear;
}

.dot:nth-child(41) {
  bottom: -345px;
  left: -131px;
  animation: move 0.9s infinite 2.2s linear;
}

.dot:nth-child(42) {
  bottom: -176px;
  left: 63px;
  animation: move 1.6s infinite 0.3s linear;
}

.dot:nth-child(43) {
  bottom: -152px;
  left: -22px;
  animation: move 2.1s infinite 3.7s linear;
}

.dot:nth-child(44) {
  bottom: -355px;
  left: -96px;
  animation: move 1.7s infinite 2.2s linear;
}

.dot:nth-child(45) {
  bottom: -233px;
  left: -86px;
  animation: move 1.7s infinite 5.6s linear;
}

.dot:nth-child(46) {
  bottom: -315px;
  left: -112px;
  animation: move 1s infinite 2.2s linear;
}

.dot:nth-child(47) {
  bottom: -338px;
  left: -79px;
  animation: move 3.3s infinite 5s linear;
}

.dot:nth-child(48) {
  bottom: -298px;
  left: 132px;
  animation: move 1.5s infinite 1s linear;
}

.dot:nth-child(49) {
  bottom: -283px;
  left: 52px;
  animation: move 0.8s infinite 3.7s linear;
}`;},"1f92043a":function(t,i,o,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return m;}});let e=o("@swc/helpers/_/_interop_require_default"),d=e._(o("96521757")),s=e._(o("0d56efad")),l=e._(o("d718e47c")),m={id:"fire",title:"fire",desc:"Fire animation",category:"css",tags:["animation"],html:d.default,css:s.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:l.default}]};},96521757:function(t,i,o,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return e;}});let e=`<div class="fire">
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
`;},d718e47c:function(t,i,o,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return e;}});let e=`@use 'sass:math';

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
`;}});},"b377a019":function  (e,t,n,r){!function(e){for(var t in e)e[t].__farm_resource_pot__="wavyUnderline.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"2e9047b6":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes wave {
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
  animation: wave 1s infinite linear;
}
`;},"3650c57d":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p;}});let i=n("@swc/helpers/_/_interop_require_default"),c=i._(n("5a4fa45f")),o=i._(n("3bff51e1")),l=i._(n("2e9047b6")),p={id:"wavyUnderline",title:"wavy underline",desc:"Text wave underline implementated with background animation.",category:"css",tags:["background","animation"],html:c.default,css:o.default,code:[{label:"html",filetype:"html",content:c.default},{label:"scss",filetype:"scss",content:l.default}]};},"3bff51e1":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes wave {
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
  animation: wave 1s infinite linear;
}`;},"5a4fa45f":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<span class="text">wavy underline</span>
`;}});},"be53affd":function  (e,r,t,f){!function(e){for(var r in e)e[r].__farm_resource_pot__="firework.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(r,e[r]);}({"07ac6fa6":function(e,r,t,f){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i;}});let i=`<div class="firework"></div>
`;},"4905518c":function(e,r,t,f){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l;}});let i=t("@swc/helpers/_/_interop_require_default"),n=i._(t("07ac6fa6")),c=i._(t("a08ba710")),o=i._(t("917213ae")),l={id:"firework",title:"firework",desc:"Firework animation.",category:"css",tags:["animation"],html:n.default,css:c.default,code:[{label:"html",filetype:"html",content:n.default},{label:"scss",filetype:"scss",content:o.default}]};},"917213ae":function(e,r,t,f){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i;}});let i=`#app {
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
`;},a08ba710:function(e,r,t,f){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i;}});let i=`#app {
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
}`;}});},"d11778a3":function  (e,t,r,o){(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a={__FARM_TARGET_ENV__:"browser"},function(e,t){var r={};function o(e){return Promise.resolve(i(e));}function i(t){if(r[t])return r[t].exports;var s={id:t,exports:{}};return r[t]=s,e[t](s,s.exports,i,o),s.exports;}i(t);}({"13561da2":function(e,t,r,o){"use strict";function i(e,t){return Object.keys(e).forEach(function(r){"default"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r];}});}),e;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return i;},_export_star:function(){return i;}});},54183975:function(e,t,r,o){"use strict";function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t;})(e);}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(o,n,u):o[n]=e[n];}return o.default=e,r&&r.set(e,o),o;}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return s;},_interop_require_wildcard:function(){return s;}});},"55d27d5a":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{ResourceLoader:function(){return u;},__farm_global_this__:function(){return i;},isBrowser:function(){return n;},targetEnv:function(){return s;}});let i=(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a,s=i.__FARM_TARGET_ENV__||"node",n="browser"===s&&(globalThis||window).document;class u{moduleSystem;_loadedResources;_loadingResources;publicPaths;constructor(e,t){this.moduleSystem=e,this._loadedResources={},this._loadingResources={},this.publicPaths=t;}load(e,t=0){if(!n){let t=this.moduleSystem.pluginContainer.hookBail("loadResource",e);if(t)return t.then(t=>{if(!t.success&&t.retryWithDefaultResourceLoader){if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}else if(!t.success)throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${t.err}`);});if("script"===e.type)return this._loadScript(`./${e.path}`);if("link"===e.type)return this._loadLink(`./${e.path}`);}let r=this.publicPaths[t],o=`${r.endsWith("/")?r.slice(0,-1):r}/${e.path}`;if(this._loadedResources[e.path])return;if(this._loadingResources[e.path])return this._loadingResources[e.path];let i=this.moduleSystem.pluginContainer.hookBail("loadResource",e);return i?i.then(r=>{if(r.success)this.setLoadedResource(e.path);else if(r.retryWithDefaultResourceLoader)return this._load(o,e,t);else throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${r.err}`);}):this._load(o,e,t);}setLoadedResource(e,t=!0){this._loadedResources[e]=t;}isResourceLoaded(e){return this._loadedResources[e];}_load(e,t,r){let o=Promise.resolve();return"script"===t.type?o=this._loadScript(e):"link"===t.type&&(o=this._loadLink(e)),this._loadingResources[t.path]=o,o.then(()=>{this._loadedResources[t.path]=!0,this._loadingResources[t.path]=null;}).catch(o=>{if(console.warn(`[Farm] Failed to load resource "${e}" using publicPath: ${this.publicPaths[r]}`),++r<this.publicPaths.length)return this._load(e,t,r);throw this._loadingResources[t.path]=null,Error(`[Farm] Failed to load resource: "${t.path}, type: ${t.type}". ${o}`);}),o;}_loadScript(e){return n?new Promise((t,r)=>{let o=document.createElement("script");o.src=e,document.body.appendChild(o),o.onload=()=>{t();},o.onerror=e=>{r(e);};}):import(e);}_loadLink(e){return n?new Promise((t,r)=>{let o=document.createElement("link");o.rel="stylesheet",o.href=e,document.head.appendChild(o),o.onload=()=>{t();},o.onerror=e=>{r(e);};}):Promise.resolve();}}},"5c9dc4a5":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModuleSystem",{enumerable:!0,get:function(){return p;}});let i=r("b82fc02f"),s=r("bd5d65ea"),n=r("55d27d5a"),u=r("f566227b"),l=r("54183975"),c=r("13561da2"),d=globalThis||window,h={"@swc/helpers/_/_interop_require_default":{default:u._interop_require_default,_:u._interop_require_default},"@swc/helpers/_/_interop_require_wildcard":{default:l._interop_require_wildcard,_:l._interop_require_wildcard},"@swc/helpers/_/_export_star":{default:c._export_star,_:c._export_star}};class p{modules;cache;externalModules;reRegisterModules;publicPaths;dynamicModuleResourcesMap;resourceLoader;pluginContainer;targetEnv;constructor(){this.modules={},this.cache={},this.publicPaths=[],this.dynamicModuleResourcesMap={},this.resourceLoader=new n.ResourceLoader(this,this.publicPaths),this.pluginContainer=new s.FarmRuntimePluginContainer([]),this.targetEnv=n.targetEnv,this.externalModules={},this.reRegisterModules=!1;}require(e,t=!1){if(h[e])return h[e];if(this.cache[e]&&!this.pluginContainer.hookBail("readModuleCache",this.cache[e]))return this.cache[e].exports;let r=this.modules[e];if(!r){if(this.externalModules[e]){let r=this.externalModules[e];return t&&r.default||r;}return("node"===this.targetEnv||!n.isBrowser)&&nodeRequire?nodeRequire(e):(this.pluginContainer.hookSerial("moduleNotFound",e),console.debug(`[Farm] Module "${e}" is not registered`),{});}let o=new i.Module(e,this.require.bind(this));o.resource_pot=r.__farm_resource_pot__,this.pluginContainer.hookSerial("moduleCreated",o),this.cache[e]=o,(globalThis||global||window||{}).require||((globalThis||global||window||{require:undefined}).require=this.require.bind(this));let s=r(o,o.exports,this.require.bind(this),this.farmDynamicRequire.bind(this));return s&&s instanceof Promise?s.then(()=>(this.pluginContainer.hookSerial("moduleInitialized",o),o.exports)):(this.pluginContainer.hookSerial("moduleInitialized",o),o.exports);}farmDynamicRequire(e){if(this.modules[e]){let t=this.require(e);return t.__farm_async?t.default:Promise.resolve(t);}return this.loadDynamicResources(e);}loadDynamicResources(e,t=!1){let r=this.dynamicModuleResourcesMap[e];if(!r||0===r.length)throw Error(`Dynamic imported module "${e}" does not belong to any resource`);return t&&(this.reRegisterModules=!0,this.clearCache(e)),Promise.all(r.map(e=>(t&&this.resourceLoader.setLoadedResource(e.path,!1),this.resourceLoader.load(e)))).then(()=>{if(!this.modules[e])throw Error(`Dynamic imported module "${e}" is not registered.`);this.reRegisterModules=!1;let t=this.require(e);return t.__farm_async?t.default:t;}).catch(t=>{throw console.error(`[Farm] Error loading dynamic module "${e}"`,t),t;});}register(e,t){if(this.modules[e]&&!this.reRegisterModules){console.warn(`Module "${e}" has registered! It should not be registered twice`);return;}this.modules[e]=t;}update(e,t){this.modules[e]=t,this.clearCache(e);}delete(e){return!!this.modules[e]&&(this.clearCache(e),delete this.modules[e],!0);}getModuleUrl(e){let t=this.publicPaths[0]??"";return d.location?`${d.location.protocol}//${d.location.host}${t.endsWith("/")?t.slice(0,-1):t}/${this.modules[e].__farm_resource_pot__}`:this.modules[e].__farm_resource_pot__;}getCache(e){return this.cache[e];}clearCache(e){return!!this.cache[e]&&(delete this.cache[e],!0);}setInitialLoadedResources(e){for(let t of e)this.resourceLoader.setLoadedResource(t);}setDynamicModuleResourcesMap(e){this.dynamicModuleResourcesMap=e;}setPublicPaths(e){this.publicPaths=e,this.resourceLoader.publicPaths=this.publicPaths;}setPlugins(e){this.pluginContainer.plugins=e;}addPlugin(e){this.pluginContainer.plugins.every(t=>t.name!==e.name)&&this.pluginContainer.plugins.push(e);}removePlugin(e){this.pluginContainer.plugins=this.pluginContainer.plugins.filter(t=>t.name!==e);}setExternalModules(e){Object.assign(this.externalModules,e||{});}bootstrap(){this.pluginContainer.hookSerial("bootstrap",this);}}},"688d37b3":function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s;}});let i="undefined"!=typeof globalThis?globalThis:window,s={name:"farm-runtime-import-meta",_moduleSystem:{},bootstrap(e){this._moduleSystem=e;},moduleCreated(e){e.meta.env={...{NODE_ENV:"production"}??{},mode:"production",dev:!1,prod:!0};let t=this._moduleSystem.publicPaths?.[0]||"",{location:r}=i,o=r?`${r.protocol}//${r.host}${t.replace(/\/$/,"")}/${e.id}?t=${Date.now()}`:e.resource_pot;e.meta.url=o;}};},a0fe17cf:function(e,t,r,o){"use strict";let i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{ModuleSystem:function(){return n.ModuleSystem;},Plugin:function(){return u.FarmRuntimePlugin;}});let s=r("f566227b")._(r("688d37b3")),n=r("5c9dc4a5"),u=r("bd5d65ea");r("55d27d5a").__farm_global_this__.__farm_module_system__=(i=new n.ModuleSystem,function(){return i;})(),(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.setPlugins([s.default]);},b82fc02f:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Module",{enumerable:!0,get:function(){return i;}});class i{id;exports;resource_pot;meta;require;constructor(e,t){this.id=e,this.exports={},this.meta={env:{}},this.require=t;}}},bd5d65ea:function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FarmRuntimePluginContainer",{enumerable:!0,get:function(){return i;}});class i{plugins=[];constructor(e){this.plugins=e;}hookSerial(e,...t){for(let r of this.plugins){let o=r[e];o&&o.apply(r,t);}}hookBail(e,...t){for(let r of this.plugins){let o=r[e];if(o){let e=o.apply(r,t);if(e)return e;}}}}},f566227b:function(e,t,r,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e};}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{_:function(){return i;},_interop_require_default:function(){return i;}});}},"a0fe17cf");},"d789ca88":function  (e,t,o,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="absolute.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"1b6d9e9a":function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`<section>
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
`;},b3908126:function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let i=o("@swc/helpers/_/_interop_require_default"),l=i._(o("d82e6e42")),s=i._(o("1b6d9e9a")),c=i._(o("d9edd1bb")),r=i._(o("bc14077e")),d={id:"absolute",title:"absolute",desc:"css absolute characterization",category:"css",tags:["standard"],isStandard:!0,html:s.default,css:c.default+l.default,code:[{label:"html",filetype:"html",content:s.default},{label:"scss",filetype:"scss",content:r.default}]};},bc14077e:function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
`;},d9edd1bb:function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i;}});let i=`.parent {
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
}`;}});},"d7fadd5b":function  (e,t,i,n){!function(e){for(var t in e)e[t].__farm_resource_pot__="walkingDots.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(t,e[t]);}({"4609f826":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`<div class="loader">
  <div class="d1"></div>
  <div class="d2"></div>
  <div class="d3"></div>
  <div class="d4"></div>
  <div class="d5"></div>
</div>
`;},"64748b6f":function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let o=i("@swc/helpers/_/_interop_require_default"),d=o._(i("4609f826")),l=o._(i("ff5e128e")),r=o._(i("e0a68dfc")),f={id:"walkingDots",title:"walking dots",desc:"Yet another loading animation.",category:"css",tags:["animation"],html:d.default,css:l.default,code:[{label:"html",filetype:"html",content:d.default},{label:"scss",filetype:"scss",content:r.default}]};},e0a68dfc:function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let o=`/* # wrapper */
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
}`;}});},"e639dd12":function  (e,l,i,n){!function(e){for(var l in e)e[l].__farm_resource_pot__="verticalAlign.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(l,e[l]);}({"5068ea6d":function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return c;}});let c=`.parent {
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
`;},"8a844209":function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return s;}});let c=i("@swc/helpers/_/_interop_require_default"),t=c._(i("d82e6e42")),o=c._(i("d2b1118f")),r=c._(i("f71696c5")),d=c._(i("5068ea6d")),s={id:"verticalAlign",title:"vertical-align",desc:"css vertical-align characterization",category:"css",tags:["standard"],isStandard:!0,html:o.default,css:r.default+t.default,code:[{label:"html",filetype:"html",content:o.default},{label:"scss",filetype:"scss",content:d.default}]};},d2b1118f:function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return c;}});let c=`<section>
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
}`;}});},"f022a658":function  (e,o,t,i){!function(e){for(var o in e)e[o].__farm_resource_pot__="boxSize.js",(globalThis||window||global).c7a628cba22e28eb17b5f5c6ae2a266a.__farm_module_system__.register(o,e[o]);}({"0878149f":function(e,o,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
}`;},"992f9bd0":function(e,o,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return d;}});let d=`<section>
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
`;},e78c92ad:function(e,o,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return d;}});let d=`.parent {
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
`;},f3e012b0:function(e,o,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return h;}});let d=t("@swc/helpers/_/_interop_require_default"),n=d._(t("d82e6e42")),r=d._(t("992f9bd0")),c=d._(t("0878149f")),l=d._(t("e78c92ad")),h={id:"boxSize",title:"box size",desc:"css box size characterization",category:"css",tags:["standard"],isStandard:!0,html:r.default,css:c.default+n.default,code:[{label:"html",filetype:"html",content:r.default},{label:"scss",filetype:"scss",content:l.default}]};}});},});
//# sourceMappingURL=dist_index_879a.896594b7.js.map