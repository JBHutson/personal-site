(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[15],{152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(139),c=a.n(l),i=a(164),o=a.n(i),s=a(532),m=a(504);t.a=c()((function(e){return e.subtitle?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(s.a,{display:"flex",justifyContent:"center",mt:"2rem"},r.a.createElement(m.a,{variant:"h2"},r.a.createElement(o.a,null,e.header))),r.a.createElement(s.a,{display:"flex",justifyContent:"center"},r.a.createElement(m.a,{variant:"h4"},e.subtitle)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(s.a,{display:"flex",justifyContent:"center",mt:"2rem"},r.a.createElement(m.a,{variant:"h2"},r.a.createElement(o.a,null,e.header)))))}))},556:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(0),l=a.n(r),c=a(245),i=a(139),o=a.n(i),s=a(201),m=a.n(s),u=a(531),d=a(246),p=a(191),g=a(192),E=a(555),f=a(505),h=a(557),b=a(63),v=a.n(b),y=a(504),x=a(157),j=a.n(x),C=a(152);t.default=o()((function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],i=t[1];Object(r.useEffect)((function(){m.a.get("http://127.0.0.1:5000/api/articles").then((function(e){i(e.data)}))}),[!1]);var o=j()(),s=v()({gridContainer:{paddingLeft:"2rem",paddingRight:"2rem",margin:0,width:"100%"},card:{"&:hover":{background:o.palette.action.hover}},button:{marginRight:"1rem"},progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},tags:{paddingLeft:"16px",paddingBottom:"16px",paddingRight:"16px",paddingTop:0}})();return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{header:"Blog",subtitle:"Articles about various topics related to the tech industry"}),l.a.createElement(f.a,{container:!0,spacing:4,className:s.gridContainer,justify:"center"},a?a.map((function(e){return l.a.createElement(f.a,{item:!0,xs:12,md:10,lg:8},l.a.createElement(p.a,{raised:"true",className:s.card},l.a.createElement(h.a,{component:c.a,to:"/blog/"+e.slug},l.a.createElement(g.a,null,l.a.createElement(y.a,{variant:"h5"},e.title),l.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},u.a.fromMillis(e.publish_date.$date).toLocaleString(u.a.DATE_FULL)))),l.a.createElement(g.a,{className:s.tags},e.tags.map((function(e){return l.a.createElement(d.a,{variant:"contained",color:"primary",className:s.button},e)})))))})):l.a.createElement(E.a,{color:"secondary",className:s.progress})))}))}}]);
//# sourceMappingURL=15.6f6fe218.chunk.js.map