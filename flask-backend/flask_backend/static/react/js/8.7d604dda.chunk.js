(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[8],{557:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a(0),c=a.n(r),o=a(558),i=a(486),l=a(47),s=a(52),m=a.n(s),u=a(515),p=a(69),d=a.n(p),g=a(39),f=a.n(g),h=a(552),E=a(131),b=a.n(E),v=a(514),y=a(509),j=a(513),L=a(101),N=a(516);t.default=f()((function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],s=t[1];Object(r.useEffect)((function(){b.a.get("http://127.0.0.1:5000/api/articles").then((function(e){s(e.data)}))}),[!1]);var p=d()(),g=m()({gridContainer:{paddingLeft:"2rem",paddingRight:"2rem",margin:0,width:"100%"},card:{"&:hover":{background:p.palette.action.hover}},button:{marginRight:"1rem"},progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})();return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{header:"Blog",subtitle:"Articles about various topics related to the tech industry"}),c.a.createElement(y.a,{container:!0,spacing:4,className:g.gridContainer,justify:"center"},a?a.map((function(e){return c.a.createElement(y.a,{item:!0,xs:12,md:10,lg:8},c.a.createElement(v.a,{raised:"true",className:g.card},c.a.createElement(o.a,{component:i.a,to:"/blog/"+e.slug},c.a.createElement(u.a,null,c.a.createElement(l.a,{variant:"h5"},e.title),c.a.createElement(l.a,{variant:"body2",color:"textSecondary",component:"p"},h.a.fromMillis(e.publish_date.$date).toLocaleString(h.a.DATE_FULL)))),c.a.createElement(u.a,null,e.tags.map((function(e){return c.a.createElement(N.a,{variant:"contained",color:"primary",className:g.button},e)})))))})):c.a.createElement(j.a,{color:"secondary",className:g.progress})))}))}}]);
//# sourceMappingURL=8.7d604dda.chunk.js.map