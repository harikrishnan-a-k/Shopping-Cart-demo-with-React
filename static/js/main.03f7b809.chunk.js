(this.webpackJsonpmy_react_app=this.webpackJsonpmy_react_app||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(11),a(12),a(1)),o=a.n(i);var s=function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar",id:"Navbar"},l.a.createElement("img",{src:o.a,className:"Navbar-logo",alt:"logo"}),l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"About "),l.a.createElement("li",null,"Contact")))},m=(a(13),a(2)),u=(a(14),function(e){var t=e.step,a=void 0===t?1:t,r=Object(n.useState)(0),c=Object(m.a)(r,2),i=c[0],o=c[1];return l.a.createElement("div",{className:"counter"},l.a.createElement("h2",null,i),l.a.createElement("button",{onClick:function(){return o(i+a)}},"+",a),l.a.createElement("button",{onClick:function(){return o(i-a)}},"-",a),l.a.createElement("img",{src:i%2===0?"https://lh3.googleusercontent.com/proxy/F-KxEd281oOy6mrjdi8n4hjsDNMGbTXxK3J6SCKHWoxi6lPrAI2nnUqK1E_y_TITvTwlcSPtxLhqP_FNw9x4uGz2_Gt_GgJDWGQ6OjzoCD2nAXAfoe6tB2LZeciJOFDGl3wpvTfxui--VJQVItU20XPIxCyA8QWek5k":"https://w2.pngwave.com/png/924/479/639/happy-face-emoji-smiley-sadness-happiness-video-crying-emoticon-facial-expression-png-clip-art.png",width:"100px",alt:"smiley"}))}),d=(a(15),a(3));a(16);var p=function(e){var t=e.id,a=e.name,n=e.price,r=e.qty,c=e.updateQty;return l.a.createElement("div",{className:"CartItem"},l.a.createElement("div",null," ",a),l.a.createElement("div",null," Rs.",n),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){c(t,r-1)},disabled:r<=1},"-"),"  ",r," ",l.a.createElement("button",{onClick:function(){c(t,r+1)}},"+")),l.a.createElement("div",null,"Total: Rs. ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",r*n," ")))},E=(a(17),function(){return l.a.createElement("div",{className:"CartHeadings"},l.a.createElement("div",null,"Item_name"),l.a.createElement("div",null," Price"),l.a.createElement("div",null,"Quantity"),l.a.createElement("div",null,"Total"))}),f=(a(18),function(e){var t=e.initialItems,a=JSON.parse(window.localStorage.getItem("cartItems")),r=Object(n.useState)(a||t),c=Object(m.a)(r,2),i=c[0],o=c[1],s=i.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2),u=function(e,t){var a=i.map((function(a){return a.id===e?Object(d.a)(Object(d.a)({},a),{},{qty:t}):a}));o(a)};return Object(n.useEffect)((function(){window.localStorage.setItem("cartItems",JSON.stringify(i))}),[i]),l.a.createElement("div",{className:"Cart"},l.a.createElement("h1",{className:"Cart-title"},"shopping cart"),l.a.createElement(E,null),l.a.createElement("div",{className:"Cart-Items"},i.map((function(e){return l.a.createElement(p,Object.assign({key:e.id},e,{updateQty:u}))}))),l.a.createElement("div",null,l.a.createElement("h2",{className:"Cart-total"},"grand total: Rs.",s)))});var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement("header",{className:"App-header"},l.a.createElement(f,{initialItems:[{id:1,name:"nike shoes",price:2e3,qty:2},{id:2,name:"addidas football",price:1500,qty:5},{id:3,name:"yonex racket",price:1e4,qty:3}]}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement(u,{step:5}),l.a.createElement(u,{step:3})),l.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Edit ",l.a.createElement("code",null,"src/App.js")," and save to reload."),l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.03f7b809.chunk.js.map