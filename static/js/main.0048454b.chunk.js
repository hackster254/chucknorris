(this["webpackJsonpchucknorris-api"]=this["webpackJsonpchucknorris-api"]||[]).push([[0],{24:function(t,e,r){},26:function(t,e,r){},47:function(t,e,r){"use strict";r.r(e);var a=r(0),c=r(2),s=r(6),b=r.n(s),n=(r(24),r(7)),o=r.n(n),i=r(8),h=r(18),O=r(3),l=(r(26),r(4)),d=r.n(l);r(43).polyfill(),r(45);var j=function(){var t=Object(c.useState)({joke:"",searchedjoke:"",categories:[]}),e=Object(O.a)(t,2),r=e[0],s=e[1],b=Object(c.useState)("sport"),n=Object(O.a)(b,2),l=n[0],j=n[1],E=Object(c.useState)("sport"),u=Object(O.a)(E,2),N=u[0],g=(u[1],Object(c.useState)([])),I=Object(O.a)(g,2),S=(I[0],I[1],Object(c.useState)("")),Y=Object(O.a)(S,2);Y[0],Y[1],Object(c.useEffect)((function(){m()}),[]);var m=function(){var t=Object(h.a)(o.a.mark((function t(){var e,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://api.chucknorris.io/jokes/random");case 2:return e=t.sent,t.next=5,d.a.get("https://api.chucknorris.io/jokes/random?category=".concat(l));case 5:return a=t.sent,t.next=8,d.a.get("https://api.chucknorris.io/jokes/random?category=".concat(N));case 8:c=t.sent,console.log(e),console.log(a),console.log("searched joke is"+a.data.value),console.log(c),console.log("categories is "+c.data.categories),s(Object(i.a)(Object(i.a)({},r),{},{joke:e.data.value,searchedjoke:a.data.value}));case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h1",{className:"title",children:"Chuck Norris Api"}),Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"Chuck Norris"})]}),Object(a.jsx)("div",{className:"col-6 searchJokeCol",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",children:"Search for a joke in a category e.g sport"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()},children:[Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("input",{type:"text",onChange:function(t){return j(t.target.value)},value:l})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("input",{type:"button",onChange:function(t){return j(t.target.value)},value:l})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-warning btn-lg",children:"GENERATE JOKE"})})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-success btn-lg",children:Object(a.jsx)("a",{href:"",children:"RANDOM"})})})]})})]}),Object(a.jsx)("h2",{className:"subtitle",children:"Here is the Joke"}),Object(a.jsx)("break",{}),Object(a.jsx)("h4",{children:r.searchedjoke})]})};b.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0048454b.chunk.js.map