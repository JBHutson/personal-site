(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{107:function(e,t,a){e.exports=a(158)},112:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(38),i=a.n(o),m=a(60),u=a.n(m),s=(a(112),a(33)),E=a(98),d=a.n(E),f=a(99),h=a.n(f),p=a(32),b=a.n(p),g=a(177),y=a(178),v=a(74),j=a.n(v),w=a(97),O=a.n(w),x=a(84),k=a.n(x),S=a(104),z=a(62),F=a(174),J=a(175),M=a(180),N=a(176),T=a(23),B=a(73),C=a(77),H=a(26);var I=a.n(H)()((function(e){switch(e.contentType){case"h2":return r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(F.a,{item:!0,xs:11,sm:9,md:7,lg:6},r.a.createElement(B.a,{header:e.content})));case"h4":return r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(F.a,{item:!0,xs:11,sm:9,md:7,lg:6},r.a.createElement(C.a,{SubHeader:e.content})));case"list":var t=e.content.split(":");return r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(F.a,{item:!0,xs:11,sm:9,md:7,lg:6},r.a.createElement(J.a,{dense:!0},t.map((function(e){return r.a.createElement(M.a,{dense:!0},r.a.createElement(N.a,{primary:e}))})))));case"body":return r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(F.a,{item:!0,xs:11,sm:9,md:7,lg:6},r.a.createElement(T.a,{variant:"body1",paragraph:"true"},e.content)))}}));var D=Object(S.withRouter)((function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){k.a.get("http://127.0.0.1:5000/api/article",{params:{slug:e.match.params.slug}}).then((function(e){c(e.data)}))}),[!1]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{ml:"auto",mr:"auto"},l?l.content.map((function(e){return r.a.createElement(I,{contentType:e.content_type,content:e.content})})):"Loading..."))})),P=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,216))})),W=Object(n.lazy)((function(){return Promise.all([a.e(6),a.e(7)]).then(a.bind(null,217))})),G=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,218))})),L=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,219))})),R=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(9)]).then(a.bind(null,211))})),$=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,215))}));var _=function(){window.localStorage.clear();var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){console.log(n)}})),r=Object(s.a)(a,2),l=r[0],c=r[1];return[l,function(t){try{var a=t instanceof Function?t(l):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("darkMode",Object(g.a)("(prefers-color-scheme: dark)",{noSsr:!0})),t=Object(s.a)(e,2),a=t[0],l=t[1],c=i()({palette:{type:a?"dark":"light",primary:{light:"#1769aa",main:"#2196f3",dark:"#4dabf5",contrastText:"#fff"},secondary:{light:"#41257b",main:"#5e35b1",dark:"#7e5dc0",contrastText:"#000"}}}),o=j()({paper:{minHeight:"100vh",display:"flex",flexDirection:"column"},space:{flexGrow:1}})();return c=O()(c),r.a.createElement(d.a,null,r.a.createElement(u.a,{theme:c},r.a.createElement(y.a,{className:o.paper},r.a.createElement(R,{darkMode:a,setDarkMode:l}),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(G,null)),r.a.createElement(b.a,{path:"/portfolio"},r.a.createElement(P,null)),r.a.createElement(b.a,{path:"/blog/:slug"},r.a.createElement(D,null)),r.a.createElement(b.a,{path:"/blog"},r.a.createElement(W,null)),r.a.createElement(b.a,{path:"/tutorial"},r.a.createElement(L,null)))),r.a.createElement("div",{className:o.space}),r.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=i()({});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{theme:q},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(_,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(23),i=a(62);t.a=c()((function(e){return e.subtitle?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(i.a,{display:"flex",justifyContent:"center",mt:"2rem"},r.a.createElement(o.a,{variant:"h2"},e.header)),r.a.createElement(i.a,{display:"flex",justifyContent:"center"},r.a.createElement(o.a,{variant:"h4"},e.subtitle)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(i.a,{display:"flex",justifyContent:"center",mt:"2rem"},r.a.createElement(o.a,{variant:"h2",paragraph:"true"},e.header))))}))},77:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(23),i=a(62);t.a=c()((function(e){return r.a.createElement(i.a,{borderBottom:1},r.a.createElement(o.a,{variant:"h4"},e.SubHeader))}))}},[[107,1,2]]]);
//# sourceMappingURL=main.a866cddf.chunk.js.map