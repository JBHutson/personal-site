(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[4],{181:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},182:function(e,a,t){"use strict";var r=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){0;return(0,n.useTheme)()||o.default};var n=t(34),o=(r(t(0)),r(t(105)))},183:function(e,a,t){"use strict";var r=t(181);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=o.default.memo(o.default.forwardRef((function(a,t){return o.default.createElement(c.default,(0,n.default)({ref:t},a),e)})));0;return t.muiName=c.default.muiName,t};var n=r(t(185)),o=r(t(0)),c=r(t(190))},185:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},190:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var r=t(1),n=t(3),o=t(0),c=(t(4),t(5)),i=t(9),l=t(41),s=o.forwardRef((function(e,a){var t=e.children,i=e.classes,s=e.className,d=e.color,m=void 0===d?"inherit":d,u=e.component,p=void 0===u?"svg":u,f=e.fontSize,h=void 0===f?"default":f,b=e.htmlColor,v=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,E=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(p,Object(r.a)({className:Object(c.a)(i.root,s,"inherit"!==m&&i["color".concat(Object(l.a)(m))],"default"!==h&&i["fontSize".concat(Object(l.a)(h))]),focusable:"false",viewBox:y,color:b,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:a},E),t,v?o.createElement("title",null,v):null)}));s.muiName="SvgIcon";var d=Object(i.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},195:function(e,a,t){e.exports=t.p+"media/Poker.67b5ee9a.webp"},196:function(e,a,t){e.exports=t.p+"media/PersonalSite.22b1e865.webp"},197:function(e,a,t){e.exports=t.p+"media/Poster.f3938ede.webp"},198:function(e,a,t){e.exports=t.p+"media/Access.d3e2b814.webp"},199:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),c=(t(4),t(5)),i=t(178),l=t(9),s=o.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,m=Object(n.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(r.a)({className:Object(c.a)(t.root,l),elevation:d?8:1,ref:a},m))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},200:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),c=(t(4),t(5)),i=t(9),l=o.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(c.a)(t.root,i),ref:a},d))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},201:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),c=(t(4),t(5)),i=t(9),l=t(54),s=t(179),d=t(41),m=o.forwardRef((function(e,a){var t=e.edge,i=void 0!==t&&t,l=e.children,m=e.classes,u=e.className,p=e.color,f=void 0===p?"default":p,h=e.disabled,b=void 0!==h&&h,v=e.disableFocusRipple,g=void 0!==v&&v,y=e.size,E=void 0===y?"medium":y,O=Object(n.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(s.a,Object(r.a)({className:Object(c.a)(m.root,u,"default"!==f&&m["color".concat(Object(d.a)(f))],b&&m.disabled,"small"===E&&m["size".concat(Object(d.a)(E))],{start:m.edgeStart,end:m.edgeEnd}[i]),centerRipple:!0,focusRipple:!g,disabled:b,ref:a},O),o.createElement("span",{className:m.label},l))}));a.a=Object(i.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(m)},202:function(e,a,t){"use strict";var r=t(181);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(183)).default)(n.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");a.default=o},203:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),c=(t(4),t(5)),i=t(9),l=["video","audio","picture","iframe","img"],s=o.forwardRef((function(e,a){var t=e.children,i=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,u=e.image,p=e.src,f=e.style,h=Object(n.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==l.indexOf(m),v=!b&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},f):f;return o.createElement(m,Object(r.a)({className:Object(c.a)(i.root,s,b&&i.media,-1!=="picture img".indexOf(m)&&i.img),ref:a,style:v,src:b?u||p:void 0},h),t)}));a.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},234:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(26),c=t.n(o),i=t(73),l=t.n(i),s=t(174),d=t(74),m=t(182),u=t.n(m),p=t(199),f=t(201),h=t(1),b=t(3),v=(t(4),t(5)),g=t(9),y=r.forwardRef((function(e,a){var t=e.disableSpacing,n=void 0!==t&&t,o=e.classes,c=e.className,i=Object(b.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(h.a)({className:Object(v.a)(o.root,c,!n&&o.spacing),ref:a},i))})),E=Object(g.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(y),O=t(203),S=t(200),j=t(202),x=t.n(j),w=t(23),N=t(195),k=t.n(N),P=t(196),C=t.n(P),R=t(197),z=t.n(R),I=t(198),B=t.n(I);var M=c()((function(){var e=u()(),a=l()({gridContainer:{paddingLeft:"2rem",paddingRight:"2rem",margin:0,width:"100%"},media:{height:300},card:{"&:hover":{background:e.palette.action.hover}}})();return n.a.createElement(s.a,{container:!0,spacing:4,className:a.gridContainer},n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"COVID-19 Dashboard - In Development"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with Python and the PyQt framework.")),n.a.createElement(E,null,n.a.createElement(f.a,null,n.a.createElement(x.a,null))))),n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(O.a,{className:a.media,image:B.a,title:"Access"}),n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"AccessSense - In Development"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with Python and the PyQt framework.")))),n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(O.a,{className:a.media,image:C.a,title:"Personal Site"}),n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"Personal Site"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with Python and the PyQt framework.")),n.a.createElement(E,null,n.a.createElement(f.a,null,n.a.createElement(x.a,null))))),n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"StayClose"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"Social media application that allowed users to sequester their user experience by acquaintance group to allow for a more accurate digital representation of real life social circles. Built with Django, React and PostgreSQL.")),n.a.createElement(E,null,n.a.createElement(f.a,{href:"https://github.com/JBHutson/StayClose"},n.a.createElement(x.a,null))))),n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(O.a,{className:a.media,image:k.a,title:"Poker"}),n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"Poker Odds Calculator"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with Python and the PyQt framework.")),n.a.createElement(E,null,n.a.createElement(f.a,{href:"https://github.com/JBHutson/Poker"},n.a.createElement(x.a,null))))),n.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(p.a,{raised:"true",className:a.card},n.a.createElement(O.a,{className:a.media,image:z.a,title:"Poster"}),n.a.createElement(S.a,null,n.a.createElement(w.a,{variant:"h5"},"Lick-o-Meter System"),n.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"System for remotely monitoring behavioral experiments in rodents. Built with Arduino, Raspberry Pi, and Python")))))})),A=t(76),D=l()({gridContainer:{paddingLeft:"2rem",paddingRight:"2rem",margin:0,width:"100%"},media:{height:200}});var T=c()((function(){var e=D();return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{header:"Portfolio"}),n.a.createElement(s.a,{container:!0,justify:"center",spacing:4,className:e.gridContainer},n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement(A.a,{SubHeader:"Open-Source/Community Projects"}))),n.a.createElement(s.a,{container:!0,justify:"center",spacing:4,className:e.gridContainer},n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement(A.a,{SubHeader:"Personal Projects"}))),n.a.createElement(M,null))}));a.default=c()((function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,null))}))}}]);
//# sourceMappingURL=4.3c1a170f.chunk.js.map