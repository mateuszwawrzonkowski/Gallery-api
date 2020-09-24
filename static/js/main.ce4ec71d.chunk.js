(this["webpackJsonptask-higher"]=this["webpackJsonptask-higher"]||[]).push([[0],{18:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),i=t.n(o),c=t(3),u=t(2);function l(){var n=Object(c.a)(['\n    *,\n    *::before,\n    *::after {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin:0;\n    padding: 0;\n    }\n\n    html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    }\n\n    body {\n    font-size: 1.6rem;\n    margin: 0;\n    font-family: "Montserrat", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: linear-gradient(140deg, rgba(120,161,187,1) 0%, rgba(244,223,231,1) 100%);\n    }\n']);return l=function(){return n},n}var s=Object(u.b)(l()),d={buttonBackground:"linear-gradient(to right,  #52A0FD 0%, #00e2fa 80%,#00e2fa 100%)",fontColor:"#EBF5EE",spinner:"white",normal:400,medium:500,bold:700};function p(){var n=Object(c.a)(["\n  text-transform: uppercase;\n  color: ",";\n  letter-spacing: 2px;\n  font-size: 5rem;\n  text-shadow: 1px 1px 4px #333;\n  \n  @media (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(c.a)(["\n display: flex;\n justify-content: center;\n flex-basis: 100%;\n"]);return f=function(){return n},n}var h=u.c.header(f()),m=u.c.h1(p(),(function(n){return n.theme.fontColor})),x=function(){return a.a.createElement(h,null,a.a.createElement(m,null,"Gallery"))},b=t(5);function g(){var n=Object(c.a)(["\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    object-fit: cover;\n    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.8);\n    transition: 0.4s;\n\n    :hover{\n        filter: brightness(120%);\n    }\n\n    @media (min-width: 768px) {\n        height: 300px;\n        width: 300px;\n    }\n    @media (min-width: 1280px) {\n        height: 400px;\n        width: 400px;\n    }\n    @media (min-width: 1800px) {\n        height: 500px;\n        width: 500px;\n    }\n"]);return g=function(){return n},n}function w(){var n=Object(c.a)(["\n    flex-basis: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n"]);return w=function(){return n},n}var v=u.c.div(w()),j=u.c.img(g()),E=function(n){var e=n.data,t=n.start,r=n.end,o=function(n){for(var e=[],t=n.length;t>=0&&"/"!==n[t];t-=1)e.push(n[t]);return e.reverse().join("")};return a.a.createElement(v,null,e.slice(t,r).map((function(n){return a.a.createElement("a",{key:n.id,href:"".concat(n.download_url),target:"_blank",rel:"noopener noreferrer"},a.a.createElement(j,{src:"http://source.unsplash.com/".concat(o(n.url))}))})))};E.defaultProps={start:0,end:3};var y=E,O=t(17);function k(){var n=Object(c.a)(["\n    font-size: 3rem;\n"]);return k=function(){return n},n}function z(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 30px;\n    color: white;\n    margin: 20px 40px;\n    text-transform: uppercase;\n    border-radius: 20px;\n    background: ",";\n    font-size: 2.1rem;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    box-shadow:0px 6px 10px 0px rgba(0,0,0,0.5);\n        :active{\n            box-shadow: inset 0 0 8px black;\n        }\n    @media (min-width: 768px) {\n        width: 150px;\n        height: 40px;\n  }\n"]);return z=function(){return n},n}var B=u.c.button(z(),(function(n){return n.theme.buttonBackground})),C=Object(u.c)(O.a)(k()),F=function(n){var e=n.icon,t=n.onClick;return a.a.createElement(B,{onClick:t},a.a.createElement(C,{icon:e}))};function S(){var n=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return S=function(){return n},n}var J=Object(u.d)(S());function M(){var n=Object(c.a)(["\nanimation: "," 1s linear infinite;\ntransform: translateZ(0);\nborder-top: 3px solid white;\nborder-right: 3px solid white;\nborder-bottom: 3px solid white;\nborder-left: 6px solid ",";;\nbackground: transparent;\nwidth: 64px;\nheight: 64px;\nborder-radius: 50%;\n"]);return M=function(){return n},n}var R=u.c.div(M(),J,(function(n){return n.theme.spinner})),W=t(9);function _(){var n=Object(c.a)(["\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    transform:translateX(-50%);\n    color: white;\n    text-shadow: 2px 2px 4px #000000;\n    font-size: 2.6rem;\n    padding: 10px;\n    text-align: center;\n"]);return _=function(){return n},n}function A(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    max-width:90%;\n"]);return A=function(){return n},n}function D(){var n=Object(c.a)(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width:100%;\n"]);return D=function(){return n},n}var G={start:0,end:3,page:1},I=[{id:1,arrow:W.a,type:"previous"},{id:2,arrow:W.b,type:"next"}],P=u.c.div(D()),X=u.c.div(A()),Z=u.c.p(_()),$=function(){var n=Object(r.useState)([]),e=Object(b.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),c=Object(b.a)(i,2),u=c[0],l=c[1];var s=Object(r.useReducer)((function(n,e){switch(e.type){case"next":return n.end>=t.length?{start:0,end:3,page:1}:{start:n.start+3,end:n.end+3,page:n.page+1};case"previous":return n.start<=0?{start:27,end:30,page:10}:{start:n.start-3,end:n.end-3,page:n.page-1};default:throw new Error("Reducer action.type error")}}),G),d=Object(b.a)(s,2),p=d[0],f=d[1];Object(r.useEffect)((function(){fetch("https://picsum.photos/v2/list").then((function(n){return n.json()})).then((function(n){return o(n)})).then((function(){l(!0)})).catch((function(n){throw n}))}),[]);var h=I.map((function(n){return a.a.createElement(F,{key:n.id,icon:n.arrow,onClick:function(){return f({type:n.type})}})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,u?a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{data:t,start:p.start,end:p.end}),a.a.createElement(X,null,h),a.a.createElement(Z,null,"".concat(p.page,"/10"))):a.a.createElement(R,null)))};function q(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  min-height: 100vh;\n"]);return q=function(){return n},n}var H=u.c.div(q());var K=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(u.a,{theme:d},a.a.createElement(H,null,a.a.createElement(x,null),a.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ce4ec71d.chunk.js.map