(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{694:function(e,t,n){Promise.resolve().then(n.bind(n,3225))},3225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(7437),s=n(6939),r=n(2265),i=n(8087),o=n(3100),l=n(511),c=n(5635),d=n(3473),m=n(6648),h=n(1633);function u(){let e=(0,i.useTranslations)("reportPage.labels.reportsPanel"),t=["SITUACAO_CAR","EMBARGO_IBAMA_DOCUMENT","ALERTA_MAPBIOMAS","PRODES_ANY","EMBARGO_ICMBIO_DOCUMENT","TERRAS_INDIGENAS","QUILOMBOS","UNIDADES_CONSERVACAO","EMBARGO_SLAVERIES_DOCUMENT","EMBARGO_SEMA"].map(t=>({image:h.g$[t].image,institution:e("protocolItems.".concat(t,".institution")),url:h.g$[t].url}));return(0,a.jsx)("div",{className:"my-8 flex flex-wrap gap-4 justify-center",children:t.map((e,t)=>(0,a.jsx)("a",{href:e.url,target:"blank",children:(0,a.jsx)(m.default,{width:100,height:65,src:"".concat(h.sb,"/").concat(e.image),alt:"".concat(e.institution," - Logo"),title:e.institution,className:"inline w-auto h-[90px] hover:scale-110 duration-300 bg-white p-4 drop-shadow-sm hover:bg-[#fff6ee]"})},t))})}function x(){let e=(0,i.useTranslations)("loginPage.labels.about"),[t,n]=(0,r.useState)(0),{ref:s,inView:m,entry:h}=(0,d.YD)({threshold:0}),x=e("deforestation.details").split("\n"),p=e("eudr.details").split("\n"),f=e("platform.details").split("\n");return(0,a.jsx)("section",{id:"about",className:"bg-secondary text-primaryDark pattern-autumn-orange-500/5 overflow-hidden p-14 xs:p-8",children:(0,a.jsxs)(d.df,{onChange:(e,a)=>{e&&n(t+1)},children:[(0,a.jsx)(o.Z,{direction:"down",in:t>0,appear:!1,timeout:600,children:(0,a.jsx)(l.Z,{component:"h2",variant:"h3",className:"text-center font-bold mb-10 mt-16 break-words hyphens-auto",children:e("title").toLocaleUpperCase()})}),(0,a.jsxs)("div",{ref:s,className:"max-w-[1000px] m-auto flex flex-col gap-12 justify-center md:p-12 sm:p-4 mb-8",children:[(0,a.jsx)(o.Z,{direction:"right",in:t>0,appear:!1,timeout:800,children:(0,a.jsxs)("article",{children:[(0,a.jsx)(l.Z,{component:"h3",variant:"h5",className:"mb-2 font-bold",children:e("eudr.title")}),p.map((e,t)=>(0,a.jsx)(l.Z,{variant:"body1",className:"text-justify mb-3",children:e},t))]})}),(0,a.jsxs)("article",{children:[(0,a.jsx)(o.Z,{direction:"left",in:t>0,appear:!1,timeout:800,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Z,{component:"h3",variant:"h5",className:"mb-2 font-bold",children:e("deforestation.title")}),(0,a.jsx)(l.Z,{variant:"body1",component:"p",className:"text-justify mb-3",children:x[0]})]})}),(0,a.jsx)(c.Z,{in:t>0,appear:!1,timeout:1800,children:(0,a.jsx)("div",{children:(0,a.jsx)(u,{})})}),(0,a.jsx)(o.Z,{direction:"left",in:t>0,appear:!1,timeout:800,children:(0,a.jsx)("div",{children:x.slice(1).map((e,t)=>(0,a.jsx)(l.Z,{component:"p",variant:"body1",className:"text-justify mb-3",children:e},t))})})]}),(0,a.jsx)(o.Z,{direction:"right",in:t>0,appear:!1,timeout:800,children:(0,a.jsxs)("article",{children:[(0,a.jsx)(l.Z,{component:"h3",variant:"h5",className:"mb-2 font-bold",children:e("platform.title")}),f.map((e,t)=>(0,a.jsx)(l.Z,{component:"p",variant:"body1",className:"text-justify mb-3",children:e},t))]})}),(0,a.jsx)(o.Z,{direction:"left",in:t>0,appear:!1,timeout:800,children:(0,a.jsxs)("article",{children:[(0,a.jsx)(l.Z,{component:"h3",variant:"h5",className:"mb-2 font-bold",children:e("access.title")}),(0,a.jsx)(l.Z,{component:"p",variant:"body1",className:"text-justify",children:e("access.details")})]})})]})]})})}var p=n(9229);function f(){return(0,a.jsx)("footer",{id:"footer",className:"bg-stone-800 py-4 flex text-white items-center justify-center",children:(0,a.jsx)(p.m,{})})}var b=n(8433),j=n(1981),g=n(2804),v=n(773),w=n(2179),N=n(6463),Z=n(1326),y=n(6858),k=n(2326),C=n(335),O=n(4526),S=n(5786),M=n(6548),P=n(1665),A=n(9355);function E(){let e;let t=(0,N.useRouter)(),n=(0,N.useParams)().lang,s=(0,i.useTranslations)("loginPage.labels.login"),o=(0,N.useSearchParams)(),[c,d]=(0,r.useState)(void 0),[m,h]=(0,r.useState)(!1),[u,x]=(0,r.useState)(!1),[p,f]=(0,r.useState)(""),[j,g]=(0,r.useState)(""),v=o.get("redirect");return v&&(e=new URLSearchParams).set("oid",v),(0,r.useEffect)(()=>{t.prefetch("/".concat(n,"/home")),e&&t.prefetch("/".concat(n,"/report?").concat(e))},[t,n,e]),(0,a.jsx)(r.Suspense,{children:(0,a.jsxs)(Z.Z,{component:"form",onSubmit:a=>{a.preventDefault();let s=new FormData(a.currentTarget);{let a="placeholder";s.get("rememberMe")?localStorage.setItem("token",a):sessionStorage.setItem("token",a),t.replace("/".concat(n,"/home")),e&&t.push("/".concat(n,"/report?").concat(e))}},children:[(0,a.jsx)(l.Z,{component:"h2",variant:"h5",className:"text-center",children:s("title")}),(0,a.jsx)(y.Z,{required:!0,fullWidth:!0,id:"email",name:"email",label:s("emailAddress"),variant:"outlined",margin:"normal",autoComplete:"email",onChange:e=>f(e.target.value)}),(0,a.jsx)(y.Z,{required:!0,fullWidth:!0,id:"password",name:"password",label:s("password"),variant:"outlined",margin:"normal",type:m?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:(0,a.jsx)(k.Z,{position:"end",children:(0,a.jsx)(C.Z,{title:s(m?"hidePassword":"showPassword"),"aria-label":s("showHidePassword"),onMouseDown:e=>{e.preventDefault(),h(e=>!e)},children:(0,a.jsx)(A.JO,{className:"".concat(u?"text-primary":"text-foreground/45"),icon:m?"material-symbols:visibility-off-outline":"material-symbols:visibility-outline"})})})},onFocus:()=>x(!0),onBlur:()=>x(!1),onChange:e=>g(e.target.value)}),(0,a.jsx)(O.Z,{control:(0,a.jsx)(S.Z,{value:"remember",color:"primary",name:"rememberMe"}),label:s("rememberMe")}),c&&(0,a.jsxs)("div",{className:"flex flex-row items-center mt-4",children:[(0,a.jsx)(A.JO,{icon:"mdi:info-outline",width:18,className:"mr-1 text-red-600"}),(0,a.jsx)(l.Z,{variant:"body1",className:"text-red-600",children:c})]}),(0,a.jsx)(M.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"mt-6 mb-4",disabled:j.length<8||!/^\S+@\S+$/.test(p),children:s("title")}),(0,a.jsxs)(b.ZP,{container:!0,children:[(0,a.jsx)(b.ZP,{item:!0,xs:!0,children:(0,a.jsx)(P.Z,{href:"#",variant:"body2",children:s("forgotPassword")})}),(0,a.jsx)(b.ZP,{item:!0,children:(0,a.jsx)(P.Z,{href:"#",variant:"body2",children:s("signUp")})})]})]})})}function R(){let e=(0,g.Z)(v.r.breakpoints.down("lg")),[t,n]=(0,r.useState)(0),{ref:s,inView:i,entry:l}=(0,d.YD)({threshold:0});return(0,a.jsx)(b.ZP,{ref:s,component:"aside",id:"login",item:!0,xs:12,lg:4,xl:3,className:"lg:p-0 xs:px-4 xs:pb-6 lg:flex",children:(0,a.jsxs)(d.df,{as:"div",onChange:(e,a)=>{e&&n(t+1)},className:"bg-white pb-6 px-8 pt-8 flex-col items-center xs:rounded-xl xs:drop-shadow-md lg:rounded-none lg:drop-shadow-none lg:flex lg:pt-4",children:[e?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(o.Z,{direction:"down",in:t>0,appear:!1,timeout:400,children:(0,a.jsx)(m.default,{width:100,height:65,src:"".concat(h.sb,"/logo.svg"),alt:"Logo",className:"inline w-auto h-[80px] mt-8",priority:!0})}),(0,a.jsx)("div",{className:"grow-[3]"}),(0,a.jsx)(o.Z,{direction:"down",in:t>0,appear:!1,timeout:600,children:(0,a.jsx)("div",{className:"mb-12 lg:mb-0",children:(0,a.jsx)(E,{})})}),(0,a.jsx)("div",{className:"grow-[5]"}),(0,a.jsx)(o.Z,{direction:"down",in:t>0,appear:!1,timeout:400,children:(0,a.jsx)("div",{className:"flex flex-col items-center",children:(0,a.jsx)(w.$,{})})})]})})}var _=n(7318);function D(){let e=(0,i.useTranslations)("loginPage.labels.banner"),t=(0,g.Z)(v.r.breakpoints.down("sm")),n=(0,g.Z)(v.r.breakpoints.down("lg")),[s,c]=(0,r.useState)(0),{ref:u}=(0,d.YD)({threshold:0});return(0,a.jsx)(b.ZP,{ref:u,item:!0,component:"article",id:"banner-visuals",xs:12,lg:8,xl:9,className:"box-border px-4 pt-4",children:(0,a.jsxs)(d.df,{as:"div",className:"flex flex-col px-10 items-center h-full drop-shadow-md text-white text-center",onChange:(e,t)=>{e&&c(s+1)},children:[(0,a.jsx)(o.Z,{direction:"down",in:s>0,appear:!1,timeout:600,children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[n?(0,a.jsx)(m.default,{width:100,height:65,src:"".concat(h.sb,"/logo_dark.svg"),alt:"Logo",className:"mt-3 w-auto h-[80px]",priority:!0}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)(l.Z,{component:"h1",variant:"h3",className:"mb-3 mt-8 font-bold break-words xl:px-20",children:e("title").toLocaleUpperCase()}),(0,a.jsx)(_.Z,{className:"select-none mt-1 mb-2 w-[100px]",sx:{"&::before, &::after":{borderColor:"white"}},children:(0,a.jsx)(A.JO,{icon:"fluent:leaf-two-16-regular",width:22})}),(0,a.jsx)(l.Z,{component:"p",variant:"h6",children:h.ub.toLocaleUpperCase()})]})}),(0,a.jsx)("div",{className:"flex-grow"}),t?(0,a.jsx)("div",{className:"h-10"}):(0,a.jsx)(o.Z,{direction:"down",in:s>0,appear:!1,timeout:800,children:(0,a.jsxs)(b.ZP,{container:!0,rowGap:6,className:"px-2 py-8",children:[(0,a.jsxs)(b.ZP,{component:"article",item:!0,xs:12,sm:6,className:"px-10",children:[(0,a.jsx)(A.JO,{icon:"healthicons:agriculture-outline",width:60,className:"border-solid border-3 rounded-xl p-1 mb-4"}),(0,a.jsx)(l.Z,{component:"h3",variant:"h4",className:"mb-2 break-words hyphens-auto",children:e("deforestationReports")}),(0,a.jsx)(l.Z,{component:"p",variant:"body1",className:"max-w-96 m-auto text-md",children:e("deforestationReportsDescription")})]}),(0,a.jsxs)(b.ZP,{component:"article",item:!0,xs:12,sm:6,className:"px-10",children:[(0,a.jsx)(A.JO,{icon:"carbon:map-boundary-vegetation",width:60,className:"border-solid border-3 rounded-xl p-1 mb-4"}),(0,a.jsx)(l.Z,{component:"h3",variant:"h4",className:"mb-2 break-words hyphens-auto",children:e("geopositioning")}),(0,a.jsx)(l.Z,{component:"p",variant:"body1",className:"max-w-96 m-auto text-md",children:e("geopositioningDescription")})]})]})}),(0,a.jsx)("div",{className:"flex-grow xs:mb-8"}),(0,a.jsx)(o.Z,{direction:"down",in:s>0,appear:!1,timeout:600,children:(0,a.jsxs)(P.Z,{className:"text-white no-underline cursor-pointer",onClick:()=>(0,j.E6)("#about"),children:[(0,a.jsx)("div",{className:"mb-1 select-none",children:e("learnMore").toUpperCase()}),(0,a.jsx)("div",{className:"animate-pulse xs:mb-4 lg:mb-0",children:(0,a.jsx)(A.JO,{icon:"carbon:chevron-down",width:40,height:40,color:"white"})})]})})]})})}function T(){return(0,a.jsxs)(b.ZP,{container:!0,component:"section",id:"front-section",className:"lg:min-h-[100vh] box-border bg-cover bg-center bg-no-repeat bg-tertiary grow relative",children:[(0,a.jsx)(m.default,{src:"".concat(h.sb,"/cafe-").concat((0,j.XF)(0,9,(0,j.tw)()),".jpg"),alt:"Logo",fill:!0,sizes:"100vw",className:"object-cover"}),(0,a.jsx)("div",{className:"bg-black/40 w-full h-full absolute top-0 left-0"}),(0,a.jsx)(D,{}),(0,a.jsx)(R,{})]})}function I(){return(0,a.jsx)("main",{children:(0,a.jsxs)(s.$B,{universal:!0,style:{width:"100vw",height:"100vh"},children:[(0,a.jsx)(T,{}),(0,a.jsx)(x,{}),(0,a.jsx)(f,{})]})})}},9229:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var a=n(7437),s=n(511),r=n(1665),i=n(1633);function o(e){let{className:t}=e;return(0,a.jsx)("article",{id:"copyright",children:(0,a.jsxs)(s.Z,{component:"span",variant:"body2",align:"center",className:"flex flex-row justify-center ".concat(null!=t?t:""),children:["\xa9 ".concat(new Date().getFullYear()),"\xa0",(0,a.jsx)(r.Z,{color:"inherit",href:"#",underline:"hover",target:"_blank",className:"block",children:i.ub.toUpperCase()})]})})}},2179:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var a=n(7437),s=n(6463),r=n(8087),i=n(4893),o=n(1651),l=n(9355);function c(){let e=(0,s.useRouter)(),t=(0,r.useLocale)(),n=(0,s.usePathname)();return(0,a.jsx)(i.Z,{name:"language",variant:"outlined",size:"small",value:t,onChange:t=>{n="/".concat(t.target.value,"/").concat(n.substring(4)),t.preventDefault(),localStorage.setItem("lang",t.target.value),e.push(n)},children:[{lang:"en",name:"English",icon:"flagpack:gb-ukm"},{lang:"pt",name:"Portugu\xeas",icon:"flagpack:br"}].map((e,t)=>(0,a.jsxs)(o.Z,{value:e.lang,children:[(0,a.jsx)(l.JO,{icon:e.icon,width:20,className:"mr-2"}),e.name]},t))})}},773:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});var a=n(2175),s=n.n(a);let r=(0,n(4444).Z)({typography:{fontFamily:s().style.fontFamily},components:{MuiListItemButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiIconButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiMenuItem:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}}},palette:{primary:{main:"#74533b",light:"#74533b",dark:"#74533b",contrastText:"#fff"},secondary:{main:"#e3d5cc",light:"#e3d5cc",dark:"#e3d5cc",contrastText:"#1d1b19"},tertiary:{main:"#A0BF7F",light:"#A0BF7F",dark:"#A0BF7F",contrastText:"#fff"},buttonWhite:{main:"#ffffff",light:"#ffffff",dark:"#ffffff",contrastText:"#1d1b19"}}})}},function(e){e.O(0,[839,113,557,945,10,124,12,292,981,971,23,744],function(){return e(e.s=694)}),_N_E=e.O()}]);