(this.webpackJsonpslideshow=this.webpackJsonpslideshow||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(8),i=n.n(c),a=n(2);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createElement("path",{d:"M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"});function j(e,t){var n=e.title,o=e.titleId,c=s(e,["title","titleId"]);return r.createElement("svg",l({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,d)}var u=r.forwardRef(j);n.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=r.createElement("path",{d:"M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"});function b(e,t){var n=e.title,o=e.titleId,c=f(e,["title","titleId"]);return r.createElement("svg",p({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,h)}var x,O,g,v,m,y,w,z=r.forwardRef(b),E=(n.p,n(3)),k=n(0),I=function(e){var t=e.children,n=e.controles,o=void 0!==n&&n,c=e.autoplay,i=void 0!==c&&c,a=e.velocidad,l=void 0===a?500:a,s=e.intervalo,d=void 0===s?5e3:s,j=Object(r.useRef)(null),p=Object(r.useRef)(null),f=Object(r.useCallback)((function(){if(j.current.children.length>0){console.log("siguiente");var e=j.current.children[0];j.current.style.transition="".concat(l,"ms ease-out all");var t=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(t,"px)");j.current.addEventListener("transitionend",(function t(){j.current.style.transition="none",j.current.style.transform="translateX(0)",j.current.appendChild(e),j.current.removeEventListener("transitionend",t)}))}}),[l]);return Object(r.useEffect)((function(){i&&(p.current=setInterval((function(){f()}),d),j.current.addEventListener("mouseenter",(function(){clearInterval(p.current)})),j.current.addEventListener("mouseleave",(function(){p.current=setInterval((function(){f()}),d)})))}),[i,d,f]),Object(k.jsxs)(A,{children:[Object(k.jsx)(P,{ref:j,children:t}),o&&Object(k.jsxs)(C,{children:[Object(k.jsx)(S,{onClick:function(){if(console.log("anterior"),j.current.children.length>0){var e=j.current.children.length-1,t=j.current.children[e];j.current.insertBefore(t,j.current.firstChild),j.current.style.transition="none";var n=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(n,"px)"),setTimeout((function(){j.current.style.transition="".concat(l,"ms ease-out all"),j.current.style.transform="translateX(0)"}),30)}},children:Object(k.jsx)(u,{})}),Object(k.jsx)(S,{derecho:!0,onClick:f,children:Object(k.jsx)(z,{})})]})]})},A=E.a.div(x||(x=Object(a.a)(["\n    position: relative;\n"]))),P=E.a.div(O||(O=Object(a.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n"]))),R=E.a.div(g||(g=Object(a.a)(["\n    min-width: 100%;\n    overflow: hidden;\n    transition: .3s ease all;\n    z-index: 10;\n    position: relative;\n    img {\n        width: 100%;\n        vertical-align: top;\n    }\n    /* @media only screen and (max-width: 600px) {\n        padding: 0 10px;\n    } */\n"]))),F=E.a.div(v||(v=Object(a.a)(["\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    background: ",";\n    text-align: center;\n    color: #fff;\n    @media only screen and (max-width: 600px) {\n        position: relative;\n        font-size: 12px;\n    }\n"])),(function(e){return e.colorFondo?e.colorFondo:"rgba(0,0,0,0.2)"})),C=E.a.div(m||(m=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    z-index: 20;\n"]))),S=E.a.button(y||(y=Object(a.a)(["\n    pointer-events: all;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    width: 50px;\n    height: 100%;\n    position: absolute;\n    transition: .3s ease all;\n    &:hover {\n        background: rgba(0,0,0, 0.3);\n        path {\n            fill: #fff;\n        }\n    }\n    /* @media only screen and (max-width: 600px) {\n        ","\n    } */\n    path {\n        filter: ","\n    }\n\n    ","\n    \n"])),(function(e){return e.derecho?"right: 10px":"left: 10px"}),(function(e){return e.derecho?"drop-shadow(-2px 0px 0px #fff)":"drop-shadow(2px 0px 0px #fff)"}),(function(e){return e.derecho?"right: 0":"left: 0"})),T=(n(21),n.p+"static/media/1.a8658587.jpg"),L=n.p+"static/media/2.8db2bcf8.jpg",X=n.p+"static/media/3.31607b6c.jpg",M=n.p+"static/media/4.7da48730.jpg",B=n.p+"static/media/5.adff57c4.jpg",J=n.p+"static/media/6.350b0c0c.jpg",W=n.p+"static/media/7.714030be.jpg",q=n.p+"static/media/8.2d772936.jpg",D=E.a.p(w||(w=Object(a.a)(["\n    font-size: 18px;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n    margin-top: 40px;\n"]))),G=function(){return Object(k.jsxs)("main",{children:[Object(k.jsx)(D,{children:"Productos en descuento"}),Object(k.jsxs)(I,{controles:!0,children:[Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:T,alt:"foto1"})}),Object(k.jsx)(F,{colorFondo:"rgb(129 49 43)",colorTexto:"#fff",children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:L,alt:"foto1"})}),Object(k.jsx)(F,{colorFondo:"rgb(85 127 157)",colorTexto:"#fff",children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:X,alt:"foto1"})}),Object(k.jsx)(F,{colorFondo:"rgb(60 66 74)",colorTexto:"#fff",children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:M,alt:"foto1"})}),Object(k.jsx)(F,{colorFondo:"rgb(214 189 218)",colorTexto:"#fff",children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]})]}),Object(k.jsx)(D,{children:"Productos en descuento 2"}),Object(k.jsxs)(I,{controles:!0,autoplay:!0,velocidad:500,intervalo:4e3,children:[Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:B,alt:"foto1"})}),Object(k.jsx)(F,{children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:J,alt:"foto1"})}),Object(k.jsx)(F,{children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:W,alt:"foto1"})}),Object(k.jsx)(F,{children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]}),Object(k.jsxs)(R,{children:[Object(k.jsx)("a",{href:"https://carlosjavejapan.github.io/2021-portfolio/",children:Object(k.jsx)("img",{src:q,alt:"foto1"})}),Object(k.jsx)(F,{children:Object(k.jsx)("p",{children:"20% descuento en productos Amazon"})})]})]})]})};i.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(G,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fecc88a5.chunk.js.map