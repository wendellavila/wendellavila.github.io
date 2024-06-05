(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{7632:function(e,s,a){Promise.resolve().then(a.bind(a,4116))},4116:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return es}});var t=a(7437),l=a(2265),r=a(6463),n=a(6939),i=a(8659),o=a(9229),c=a(8071),d=a.n(c),m=a(7824),x=a(8087),u=a(270),h=a(8433),f=a(511),p=a(487),j=a(9355),g=a(1981),v=a(3807),w=a(5268),N=a(7520),b=a(9424);function P(e){let{ordersData:s,minDate:a,maxDate:n,minVolume:i,maxVolume:o,searchText:c}=e,d=(0,r.useParams)().lang,m=(0,x.useTranslations)("homePage.labels.orders"),P=(0,l.useMemo)(()=>s?s.filter(e=>{let s=e.orderNumber.includes(null!=c?c:""),t=!a||parseInt(e.date)>=parseInt(a),l=!n||parseInt(e.date)<=parseInt(n),r=e.volume>=i&&e.volume<=o;return s&&t&&l&&r}):[],[s,a,n,i,o,c]);return(0,t.jsxs)(u.Z,{component:"section",id:"orders-list",children:[(0,t.jsx)(v.O,{title:m("title"),icon:(0,t.jsx)(j.JO,{icon:"mingcute:ship-line",width:28,className:"mr-2"})}),(0,t.jsxs)(b.Y,{children:[(0,t.jsx)(h.ZP,{item:!0,xs:5,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",className:"font-bold",children:m("orderNumber")})}),(0,t.jsx)(h.ZP,{item:!0,xs:4,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",className:"font-bold",children:m("date")})}),(0,t.jsx)(h.ZP,{item:!0,xs:3,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",className:"font-bold",children:m("volume")})})]}),P&&P.map(e=>{let s=new URLSearchParams;return s.set("oid",e.orderNumber),(0,t.jsx)(w.w,{href:"/".concat(d,"/report?").concat(s),children:(0,t.jsxs)(h.ZP,{container:!0,children:[(0,t.jsx)(h.ZP,{item:!0,xs:5,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:e.orderNumber})}),(0,t.jsx)(h.ZP,{item:!0,xs:4,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:(0,g.p6)(e.date)})}),(0,t.jsx)(h.ZP,{item:!0,xs:3,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:e.volume})})]})},e.orderNumber)}),void 0===s&&(0,t.jsx)("article",{id:"orders-loading",className:"py-2",children:(0,t.jsxs)(h.ZP,{container:!0,children:[(0,t.jsx)(h.ZP,{item:!0,xs:5,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:(0,t.jsx)(p.Z,{width:150})})}),(0,t.jsx)(h.ZP,{item:!0,xs:4,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:(0,t.jsx)(p.Z,{width:100})})}),(0,t.jsx)(h.ZP,{item:!0,xs:3,className:"px-2 flex flex-col justify-center",children:(0,t.jsx)(f.Z,{variant:"body2",children:(0,t.jsx)(p.Z,{width:70})})})]})}),null===s&&(0,t.jsx)(N.Y,{id:"orders-error",message:m("noOrdersError"),type:"error"}),s&&s.length>0&&0===P.length&&(0,t.jsx)(N.Y,{id:"orders-filter-none",message:m("noFilteredOrdersAlert"),type:"alert"})]})}var Z=a(2804),y=a(6548),Y=a(6858),D=a(2326),M=a(6065),S=a(1236),C=a(3298),k=a(4952),O=a(146),L=a(5069),I=a(152),V=a(2030),T=a(3244),F=a(773);function E(e){let{minDate:s,maxDate:a,minDateLimit:n,maxDateLimit:i,minVolume:o,maxVolume:c,minVolumeLimit:m,maxVolumeLimit:u,searchText:f,setMinDate:p,setMaxDate:g,setMinVolume:v,setMaxVolume:w,setSearchText:N}=e,b=(0,Z.Z)(F.r.breakpoints.down("lg")),P=(0,x.useTranslations)("homePage.labels.orders"),E=(0,r.useParams)().lang,[J,_]=(0,l.useState)(!b),z="pt"===E?I.F.components.MuiLocalizationProvider.defaultProps.localeText:V._.components.MuiLocalizationProvider.defaultProps.localeText;return(0,T.t)(E),(0,t.jsxs)("section",{id:"orders-list-filters",className:"py-2",children:[(0,t.jsx)("div",{className:"flex flex-row items-center justify-start",children:(0,t.jsxs)(y.Z,{className:"\n          flex flex-row items-center p-1 ".concat(J?"mb-1":"","\n          text-neutral-800 border-neutral-800"),onClick:()=>_(e=>!e),children:[(0,t.jsx)(j.JO,{icon:"bi:filter",width:20}),(0,t.jsx)("span",{className:"ml-1",children:P(J?"hideFilters":"showFilters")})]})}),J&&(0,t.jsx)(k._,{dateAdapter:L.y,adapterLocale:E,localeText:z,children:(0,t.jsxs)(h.ZP,{container:!0,alignItems:"center",justifyContent:"space-evenly",columnSpacing:3,rowSpacing:2,className:"px-6 pt-3 pb-4",children:[(0,t.jsx)(h.ZP,{item:!0,xs:7,sm:4,md:3,children:(0,t.jsx)(Y.Z,{variant:"standard",label:P("searchOrderNumber"),value:f,InputProps:{startAdornment:(0,t.jsx)(D.Z,{position:"start",children:(0,t.jsx)(j.JO,{icon:"mdi:search",width:24})})},onChange:e=>N(e.target.value),className:"w-full"})}),(0,t.jsx)(h.ZP,{item:!0,xs:5,sm:3,md:2,children:(0,t.jsx)(O.M,{value:d()(s,"YYYYMMDD"),label:P("dateFrom"),format:"DD/MM/YYYY",defaultValue:void 0,onChange:e=>{e&&p(e.isValid()?e.format("YYYYMMDD"):"")},slotProps:{textField:{variant:"standard"},inputAdornment:{position:"start"}},className:"w-full"})}),(0,t.jsx)(h.ZP,{item:!0,xs:5,sm:3,md:2,children:(0,t.jsx)(O.M,{value:d()(a,"YYYYMMDD"),label:P("dateTo"),format:"DD/MM/YYYY",defaultValue:void 0,onChange:e=>{e&&g(e.isValid()?e.format("YYYYMMDD"):"")},slotProps:{textField:{variant:"standard"},inputAdornment:{position:"start"}},className:"w-full"})}),(0,t.jsxs)(h.ZP,{item:!0,xs:7,sm:5,md:3,children:[(0,t.jsx)(M.Z,{id:"volume-slider-label",shrink:!0,className:"leading-[1.2rem]",children:P("volume")}),(0,t.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,t.jsx)(S.Z,{value:o,size:"small",onChange:e=>{let s=parseInt(e.target.value);v(isNaN(s)?m:s)},"aria-label":P("minVolume"),inputProps:{step:1,min:0,max:u,pattern:"[0-9]*"}}),(0,t.jsx)(C.ZP,{min:m,max:u,size:"medium",value:[o,c],onChange:(e,s)=>{v(s[0]),w(s[1])},valueLabelDisplay:"auto",getAriaLabel:()=>P("volumeRange"),getAriaValueText:()=>"".concat(P("min"),": ").concat(o," ").concat(P("max"),": ").concat(c)}),(0,t.jsx)(S.Z,{value:c,size:"small",onChange:e=>{let s=parseInt(e.target.value);w(isNaN(s)?u:s)},"aria-label":P("maxVolume"),inputProps:{step:1,min:0,max:u,pattern:"[0-9]*"}})]})]}),(0,t.jsx)(h.ZP,{item:!0,xs:12,sm:2,md:2,className:"flex flex-col items-center justify-center",children:(0,t.jsx)(y.Z,{className:"w-[150px]",variant:"outlined",onClick:()=>{v(m),w(u),p(n),g(i),N("")},children:P("clear")})})]})})]})}function J(){let[e,s]=(0,l.useState)(d()().format("YYYYMMDD")),[a,r]=(0,l.useState)(d()().format("YYYYMMDD")),[n,i]=(0,l.useState)(e),[o,c]=(0,l.useState)(a),[x,u]=(0,l.useState)(0),[h,f]=(0,l.useState)(0),[p,j]=(0,l.useState)(x),[g,v]=(0,l.useState)(h),[w,N]=(0,l.useState)(""),[b,Z]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{Z(m.l)},[]),(0,l.useEffect)(()=>{if(b&&b.length>0){let e=b[0].volume,a=b[0].volume,t=b[0].date,l=b[0].date;for(let s of b.slice(1))s.volume<e&&(e=s.volume),s.volume>a&&(a=s.volume),parseInt(s.date)>parseInt(l)&&(l=s.date),parseInt(s.date)<parseInt(t)&&(t=s.date);j(e),u(e),v(a),f(a),i(t),s(t),c(l),r(l)}},[b]),(0,t.jsx)("div",{className:"flex flex-col items-center px-4 h-full",children:(0,t.jsxs)("div",{className:"max-w-[1200px] w-full grow",children:[(0,t.jsx)(E,{minDate:n,maxDate:o,minDateLimit:e,maxDateLimit:a,minVolume:p,maxVolume:g,minVolumeLimit:x,maxVolumeLimit:h,searchText:w,setMinDate:i,setMaxDate:c,setMinVolume:j,setMaxVolume:v,setMaxVolumeLimit:f,setSearchText:N}),(0,t.jsx)(P,{ordersData:b,minDate:n,maxDate:o,minVolume:p,maxVolume:g,searchText:w})]})})}var _=a(6504),z=a(6648),A=a(5465),R=a(2184),q=a(5462),W=a(1807),$=a(7300),B=a(2179),U=a(7965),G=a(335),H=a(1326),K=a(1633);function Q(e){let{isPasswordModalOpen:s,setPasswordModalOpen:a}=e,r=(0,x.useTranslations)("homePage.labels.changePasswordModal"),[n,i]=(0,l.useState)(""),[o,c]=(0,l.useState)(""),[d,m]=(0,l.useState)(""),h=()=>a(!1);return(0,t.jsx)(U.Z,{open:s,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex flex-col items-center",children:(0,t.jsxs)(u.Z,{className:"relative p-4 m-8 max-w-[500px] min-w-[450px]",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 p-1",children:(0,t.jsx)(G.Z,{onClick:h,children:(0,t.jsx)(j.JO,{icon:"mdi:close",width:24})})}),(0,t.jsx)("div",{className:"flex flex-row justify-center",children:(0,t.jsx)(z.default,{width:66,height:43,src:"".concat(K.sb,"/logo.svg"),alt:"Logo",className:"inline w-auto h-[60px] my-4",priority:!0})}),(0,t.jsx)(f.Z,{id:"modal-modal-title",variant:"h6",component:"h2",className:"text-center",children:r("title")}),(0,t.jsxs)(H.Z,{component:"form",onSubmit:e=>{e.preventDefault();let s=new FormData(e.currentTarget);console.log({currentPassword:s.get("currentPassword"),newPassword:s.get("newPassword"),repeatNewPassword:s.get("repeatNewPassword")})},children:[(0,t.jsx)(Y.Z,{required:!0,fullWidth:!0,id:"currentPassword",name:"currentPassword",label:r("currentPassword"),type:"password",variant:"outlined",margin:"normal",onChange:e=>i(e.target.value)}),(0,t.jsx)(Y.Z,{required:!0,fullWidth:!0,id:"newPassword",name:"newPassword",label:r("newPassword"),type:"password",variant:"outlined",margin:"normal",onChange:e=>c(e.target.value)}),(0,t.jsx)(Y.Z,{required:!0,fullWidth:!0,id:"repeatNewPassword",name:"repeatNewPassword",label:r("repeatNewPassword"),type:"password",variant:"outlined",margin:"normal",onChange:e=>m(e.target.value)}),(0,t.jsx)("div",{className:"flex flex-row justify-center mt-6",children:(0,t.jsx)(y.Z,{variant:"contained",type:"submit",className:"min-w-[120px]",disabled:n.length<8||o.length<8||o!==d,children:r("confirm")})})]})]})})}function X(e){let{customerName:s,isDrawerOpen:a,setDrawerOpen:n}=e,i=(0,x.useTranslations)("homePage.labels.drawer"),o=(0,r.useRouter)(),c=(0,r.useParams)().lang,[d,m]=(0,l.useState)(!1),u=async()=>{n(!1),setTimeout(()=>m(!0),200)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.ZP,{open:a,onClose:()=>n(!1),children:(0,t.jsxs)(R.Z,{className:"w-[350px] h-full flex flex-col py-0",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center pt-7 pb-6 justify-center relative bg-primary",children:[(0,t.jsx)(z.default,{src:"".concat(K.sb,"/cafe-grao.jpg"),alt:"Logo",fill:!0,sizes:"350px",className:"object-cover"}),(0,t.jsx)("div",{className:"bg-yellow-900/25 w-full h-full absolute top-0 left-0"}),(0,t.jsx)("div",{className:"bg-black/25 w-full h-full absolute top-0 left-0"}),(0,t.jsx)(q.Z,{alt:"Customer Logo",className:"h-[100px] w-[100px] border-1 border-solid shadow-sm border-white"}),(0,t.jsx)(f.Z,{variant:"h5",className:"text-center pt-4 drop-shadow-sm text-white",children:s})]}),(0,t.jsxs)("nav",{className:"flex flex-col justify-center mt-4",children:[(0,t.jsx)(W.ZP,{className:"p-0",onClick:u,children:(0,t.jsxs)($.Z,{className:"py-4 px-6 flex flex-row justify-center",children:[(0,t.jsx)(j.JO,{icon:"mdi:password-outline",width:20,className:"mr-2"}),i("changePassword")]})}),(0,t.jsx)(W.ZP,{className:"p-0",onClick:()=>{localStorage.removeItem("token"),sessionStorage.removeItem("token"),o.replace("/".concat(c))},children:(0,t.jsxs)($.Z,{className:"py-4 px-6 flex flex-row justify-center",children:[(0,t.jsx)(j.JO,{icon:"material-symbols:exit-to-app",width:20,className:"mr-2"}),i("logout")]})})]}),(0,t.jsx)("div",{className:"grow"}),(0,t.jsx)("div",{className:"px-4 pb-4 flex flex-row justify-center mt-4",children:(0,t.jsx)(B.$,{})})]})}),(0,t.jsx)(Q,{isPasswordModalOpen:d,setPasswordModalOpen:m})]})}function ee(e){let{customerName:s}=e,a=(0,x.useTranslations)("homePage.labels.navbar"),[r,n]=(0,l.useState)(!1);return(0,t.jsx)(_.w,{drawer:(0,t.jsx)(X,{customerName:s,isDrawerOpen:r,setDrawerOpen:n}),setDrawerOpen:n,i18n:a})}function es(){let[e,s]=(0,l.useState)(null),a=(0,r.useRouter)(),c=(0,r.useParams)().lang;return(0,l.useEffect)(()=>{var e;let t=null!==(e=localStorage.getItem("token"))&&void 0!==e?e:sessionStorage.getItem("token");t?s(t):a.replace("/".concat(c))},[c,e,a]),e?(0,t.jsxs)("div",{className:"flex flex-col h-[100vh] bg-surface",children:[(0,t.jsx)(ee,{customerName:"Customer Name"}),(0,t.jsx)("main",{className:"grow",children:(0,t.jsx)(n.$B,{universal:!0,children:(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsx)("div",{className:"grow",children:(0,t.jsx)(J,{})}),(0,t.jsx)(o.m,{className:"mt-4 mb-2"})]})})})]}):(0,t.jsx)(i.LoadingScreen,{id:"orders-loading"})}},2179:function(e,s,a){"use strict";a.d(s,{$:function(){return c}});var t=a(7437),l=a(6463),r=a(8087),n=a(4893),i=a(1651),o=a(9355);function c(){let e=(0,l.useRouter)(),s=(0,r.useLocale)(),a=(0,l.usePathname)();return(0,t.jsx)(n.Z,{name:"language",variant:"outlined",size:"small",value:s,onChange:s=>{a="/".concat(s.target.value,"/").concat(a.substring(4)),s.preventDefault(),localStorage.setItem("lang",s.target.value),e.push(a)},children:[{lang:"en",name:"English",icon:"flagpack:gb-ukm"},{lang:"pt",name:"Portugu\xeas",icon:"flagpack:br"}].map((e,s)=>(0,t.jsxs)(i.Z,{value:e.lang,children:[(0,t.jsx)(o.JO,{icon:e.icon,width:20,className:"mr-2"}),e.name]},s))})}},8659:function(e,s,a){"use strict";a.d(s,{LoadingScreen:function(){return i}});var t=a(7437),l=a(6648),r=a(9355),n=a(1633);function i(e){let{id:s}=e;return(0,t.jsxs)("section",{id:s,className:"bg-white min-h-[100vh] flex flex-col items-center justify-center",children:[(0,t.jsx)("div",{className:"grow-[2]"}),(0,t.jsx)(l.default,{width:100,height:65,src:"".concat(n.sb,"/logo.svg"),alt:"Logo",className:"mb-10 w-auto h-[100px]",priority:!0}),(0,t.jsx)(r.JO,{icon:"svg-spinners:3-dots-fade",width:40,className:"text-tertiary"}),(0,t.jsx)("div",{className:"grow-[3]"})]})}}},function(e){e.O(0,[839,113,557,945,10,124,12,525,191,981,570,971,23,744],function(){return e(e.s=7632)}),_N_E=e.O()}]);