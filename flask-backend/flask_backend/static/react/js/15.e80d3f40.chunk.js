(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[15],{158:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(144),c=t.n(i),l=t(166),o=t.n(l),s=t(535),m=t(507);a.a=c()((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(s.a,{display:"flex",justifyContent:"center",mt:"2rem"},r.a.createElement(m.a,{variant:e.size},r.a.createElement(o.a,{cursor:{hideWhenDone:!0,hideWhenDoneDelay:3e3}},e.header)))))}))},559:function(e,a,t){"use strict";t.r(a);var n=t(49),r=t(0),i=t.n(r),c=t(250),l=t(144),o=t.n(l),s=t(207),m=t.n(s),d=t(534),p=t(197),g=t(198),u=t(558),E=t(137),f=t(560),h=t(63),b=t.n(h),v=t(507),y=t(160),x=t.n(y),C=t(158);a.default=o()((function(){var e=Object(r.useState)(),a=Object(n.a)(e,2),t=a[0],l=a[1];Object(r.useEffect)((function(){m.a.get("http://127.0.0.1:5000/api/articles").then((function(e){l(e.data),console.log(e.data)}))}),[!1]);var o=x()(),s=b()({gridContainer:{paddingLeft:"2rem",paddingRight:"2rem",margin:0,width:"100%"},tagGridContainer:{margin:0,width:"100%"},card:{"&:hover":{background:o.palette.action.hover}},tagCard:{background:o.palette.primary.main},progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},tags:{paddingLeft:"16px",paddingBottom:"16px",paddingRight:"16px",paddingTop:0}})();return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{header:"Blog",size:"h2"}),i.a.createElement(E.a,{container:!0,spacing:4,className:s.gridContainer,justify:"center"},t?t.map((function(e){return i.a.createElement(E.a,{item:!0,xs:11},i.a.createElement(p.a,{raised:"true",className:s.card},i.a.createElement(f.a,{component:c.a,to:"/blog/"+e.slug},i.a.createElement(g.a,null,i.a.createElement(v.a,{variant:"h5"},e.title),i.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},d.a.fromMillis(e.publish_date.$date).toLocaleString(d.a.DATE_FULL)))),i.a.createElement(g.a,{className:s.tags},i.a.createElement(E.a,{container:!0,justify:"left",spacing:2,className:s.tagGridContainer},e.tags.map((function(e){return i.a.createElement(E.a,{item:!0,xs:11,sm:6,md:3},i.a.createElement(p.a,{raised:"true",className:s.tagCard},i.a.createElement(g.a,null,i.a.createElement(v.a,{variant:"body3"},e))))}))))))})):i.a.createElement(u.a,{color:"secondary",className:s.progress})))}))}}]);
//# sourceMappingURL=15.e80d3f40.chunk.js.map