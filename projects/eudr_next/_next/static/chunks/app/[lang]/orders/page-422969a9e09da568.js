(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{54783:function(e,s,t){Promise.resolve().then(t.bind(t,12612)),Promise.resolve().then(t.bind(t,32292)),Promise.resolve().then(t.bind(t,49716))},32292:function(e,s,t){"use strict";t.d(s,{ClientOrdersPage:function(){return W}});var r=t(57437),a=t(2265),n=t(78659),l=t(16463),o=t(62737),c=t.n(o),i=t(36939),d=t(89229),m=t(18087),u=t(86504),x=t(18675);function f(e){let s=(0,l.useRouter)(),t=(0,l.useParams)().lang,n=(0,m.useTranslations)("ordersPage.labels.navbar"),[o,c]=(0,a.useState)(!1),{customerId:i,customerName:d,hideDrawer:f,className:h,hideBackButton:p,logo:j}=e;return(0,r.jsx)(u.w,{className:h,drawer:f?void 0:(0,r.jsx)(x.Y,{logo:j,customerId:i,customerName:d,isDrawerOpen:o,setDrawerOpen:c}),onBackButton:p?void 0:()=>s.replace("/".concat(t,"/dashboard")),setDrawerOpen:c,i18n:n})}var h=t(70270),p=t(58433),j=t(30487),N=t(69129),v=t(99065),b=t(63807),g=t(75268),w=t(4984),y=t(99926);function D(e){let{sortBy:s,sortAsc:t,sortDesc:a}=e;return(0,r.jsx)(N.I,{icon:"mingcute:arrow-up-line",className:"ml-0.5 transition group-hover:text-primary\n      ".concat(s===a?"rotate-180":"","\n      ").concat([t,a].includes(s)?"":"opacity-25 group-hover:opacity-100"),width:18})}function P(e){let s=(0,l.useParams)().lang,t=(0,m.useTranslations)("ordersPage.labels.orders"),{minDate:n,maxDate:o,minVolume:c,maxVolume:i,ordersData:d,searchText:u,showCustomerName:x}=e,[f,P]=(0,a.useState)("dateDesc"),Z=(0,a.useMemo)(()=>d?function(e,s){let t=e=>"string"==typeof e?parseInt(e,10):e,r=(e,s)=>t(e)-t(s),a=(e,s)=>e.localeCompare(s),n=e=>{let s=e.split("/");return t(s[1]+s[0])};switch(s){case"orderNumberAsc":return e.sort((e,s)=>r(n(e.orderNumber),n(s.orderNumber)));case"orderNumberDesc":return e.sort((e,s)=>r(n(s.orderNumber),n(e.orderNumber)));case"volumeAsc":return e.sort((e,s)=>r(e.volume,s.volume));case"volumeDesc":return e.sort((e,s)=>r(s.volume,e.volume));case"customerNameAsc":return e.sort((e,s)=>a(e.customerName,s.customerName));case"customerNameDesc":return e.sort((e,s)=>a(s.customerName,e.customerName));case"dateAsc":return e.sort((e,s)=>r(e.date,s.date));default:return e.sort((e,s)=>r(s.date,e.date))}}(d.filter(e=>{let s=e.orderNumber.toLocaleUpperCase().includes(u?u.toLocaleUpperCase():""),t=void 0!==e.customerName&&e.customerName.toLocaleUpperCase().includes(u?u.toLocaleUpperCase():""),r=x&&t||s,a=!n||parseInt(e.date)>=parseInt(n),l=!o||parseInt(e.date)<=parseInt(o),d=e.volume>=c&&e.volume<=i;return r&&a&&l&&d}),f):[],[d,n,o,c,i,u,x,f]);return(0,r.jsxs)(h.Z,{component:"section",id:"orders-list",children:[(0,r.jsx)(b.O,{title:t("title"),icon:(0,r.jsx)(N.I,{icon:"mingcute:ship-line",width:28,className:"mr-3"})}),(0,r.jsxs)(y.Y,{children:[(0,r.jsxs)(p.ZP,{item:!0,xs:x?2:5,className:"px-2 flex flex-row items-center",children:[(0,r.jsx)("span",{className:"font-bold text-sm",children:t("orderNumber")}),(0,r.jsx)("button",{className:"group hover:cursor-pointer bg-transparent border-none p-0",onClick:()=>{P("orderNumberAsc"===f?"orderNumberDesc":"orderNumberAsc")},children:(0,r.jsx)(D,{sortBy:f,sortAsc:"orderNumberAsc",sortDesc:"orderNumberDesc"})})]}),x&&(0,r.jsxs)(p.ZP,{item:!0,xs:6,className:"px-2 flex flex-row items-center",children:[(0,r.jsx)("span",{className:"font-bold text-sm",children:t("customerName")}),(0,r.jsx)("button",{className:"group hover:cursor-pointer bg-transparent border-none p-0",onClick:()=>{P("customerNameAsc"===f?"customerNameDesc":"customerNameAsc")},children:(0,r.jsx)(D,{sortBy:f,sortAsc:"customerNameAsc",sortDesc:"customerNameDesc"})})]}),(0,r.jsxs)(p.ZP,{item:!0,xs:x?2:4,className:"px-2 flex flex-row items-center",children:[(0,r.jsx)("span",{className:"font-bold text-sm",children:t("date")}),(0,r.jsx)("button",{className:"group hover:cursor-pointer bg-transparent border-none p-0",onClick:()=>{P("dateAsc"===f?"dateDesc":"dateAsc")},children:(0,r.jsx)(D,{sortBy:f,sortAsc:"dateAsc",sortDesc:"dateDesc"})})]}),(0,r.jsxs)(p.ZP,{item:!0,xs:x?2:3,className:"px-2 flex flex-row items-center",children:[(0,r.jsx)("span",{className:"font-bold text-sm",children:t("volume")}),(0,r.jsx)("button",{className:"group hover:cursor-pointer bg-transparent border-none p-0",onClick:()=>{P("volumeAsc"===f?"volumeDesc":"volumeAsc")},children:(0,r.jsx)(D,{sortBy:f,sortAsc:"volumeAsc",sortDesc:"volumeDesc"})})]})]}),Z&&Z.map(e=>{let t=new URLSearchParams;return t.set("oid",e.orderNumber),(0,r.jsx)(g.w,{href:"/".concat(s,"/report?").concat(t),children:(0,r.jsxs)(p.ZP,{container:!0,children:[(0,r.jsx)(p.ZP,{item:!0,xs:x?2:5,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:e.orderNumber})}),x&&(0,r.jsx)(p.ZP,{item:!0,xs:6,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:e.customerName})}),(0,r.jsx)(p.ZP,{item:!0,xs:x?2:4,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:(0,v.p6)(e.date)})}),(0,r.jsx)(p.ZP,{item:!0,xs:x?2:3,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:e.volume})})]})},e.orderNumber)}),void 0===d&&(0,r.jsx)("article",{id:"orders-loading",className:"py-2",children:(0,r.jsxs)(p.ZP,{container:!0,children:[(0,r.jsx)(p.ZP,{xs:x?2:5,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:(0,r.jsx)(j.Z,{width:x?50:150})})}),x&&(0,r.jsx)(p.ZP,{item:!0,xs:6,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:(0,r.jsx)(j.Z,{width:200})})}),(0,r.jsx)(p.ZP,{item:!0,xs:x?2:4,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:(0,r.jsx)(j.Z,{width:x?50:100})})}),(0,r.jsx)(p.ZP,{item:!0,xs:x?2:3,className:"px-2 flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-sm",children:(0,r.jsx)(j.Z,{width:x?50:100})})})]})}),null===d&&(0,r.jsx)(w.A,{id:"orders-error",type:"error",className:"mb-2",children:t("noOrdersError")}),d&&d.length>0&&0===Z.length&&(0,r.jsx)(w.A,{id:"orders-filter-none",type:"alert",className:"mb-2",children:t("noFilteredOrdersAlert")})]})}var Z=t(32804),C=t(76548),I=t(66858),k=t(52326),Y=t(56065),M=t(44812),A=t(43298),S=t(54952),L=t(63331),T=t(5069),O=t(30152),F=t(52030),B=t(73244),V=t(70773);function _(e){let s=(0,Z.Z)(V.r.breakpoints.down("lg")),t=(0,m.useTranslations)("ordersPage.labels.orders"),n=(0,l.useParams)().lang,[o,i]=(0,a.useState)(!s),{minDate:d,maxDate:u,minDateLimit:x,maxDateLimit:f,minVolume:h,maxVolume:j,minVolumeLimit:v,maxVolumeLimit:b,searchText:g,setMinDate:w,setMaxDate:y,setMinVolume:D,setMaxVolume:P,setSearchText:_,showCustomerName:R}=e,[E,z]=(0,a.useState)([v,b]);(0,a.useEffect)(()=>{z([v,b])},[v,b]);let U="pt"===n?O.F.components.MuiLocalizationProvider.defaultProps.localeText:F._.components.MuiLocalizationProvider.defaultProps.localeText;return(0,B.t)(n),(0,r.jsxs)("section",{id:"orders-list-filters",className:"py-2",children:[(0,r.jsx)("div",{className:"flex flex-row items-center justify-start",children:(0,r.jsxs)(C.Z,{className:"\n          flex flex-row items-center p-1 ".concat(o?"mb-1":"","\n          text-neutral-800 border-neutral-800"),onClick:()=>i(e=>!e),children:[(0,r.jsx)(N.I,{icon:"bi:filter",width:20}),(0,r.jsx)("span",{className:"ml-1",children:t(o?"hideFilters":"showFilters")})]})}),o&&(0,r.jsx)(S._,{dateAdapter:T.y,adapterLocale:n,localeText:U,children:(0,r.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"space-evenly",columnSpacing:3,rowSpacing:2,className:"px-6 pt-3 pb-4",children:[(0,r.jsx)(p.ZP,{item:!0,xs:7,sm:4,md:3,children:(0,r.jsx)(I.Z,{variant:"standard",label:t(R?"searchOrderNumberOrCustomerName":"searchOrderNumber"),value:g,InputProps:{startAdornment:(0,r.jsx)(k.Z,{position:"start",children:(0,r.jsx)(N.I,{icon:"mdi:search",width:24})})},onChange:e=>_(e.target.value),className:"w-full"})}),(0,r.jsx)(p.ZP,{item:!0,xs:5,sm:3,md:2,children:(0,r.jsx)(L.M,{value:c()(d,"YYYYMMDD"),label:t("dateFrom"),format:"DD/MM/YYYY",defaultValue:void 0,onChange:e=>{e&&w(e.isValid()?e.format("YYYYMMDD"):"")},slotProps:{textField:{variant:"standard"},inputAdornment:{position:"start"}},className:"w-full"})}),(0,r.jsx)(p.ZP,{item:!0,xs:5,sm:3,md:2,children:(0,r.jsx)(L.M,{value:c()(u,"YYYYMMDD"),label:t("dateTo"),format:"DD/MM/YYYY",defaultValue:void 0,onChange:e=>{e&&y(e.isValid()?e.format("YYYYMMDD"):"")},slotProps:{textField:{variant:"standard"},inputAdornment:{position:"start"}},className:"w-full"})}),(0,r.jsxs)(p.ZP,{item:!0,xs:7,sm:5,md:3,children:[(0,r.jsx)(Y.Z,{id:"volume-slider-label",shrink:!0,className:"leading-[1.2rem]",children:t("volume")}),(0,r.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,r.jsx)(M.Z,{value:h,size:"small",onChange:e=>{let s=parseInt(e.target.value);D(isNaN(s)?v:s)},"aria-label":t("minVolume"),inputProps:{step:1,min:0,max:b,pattern:"[0-9]*"}}),(0,r.jsx)(A.ZP,{min:v,max:b,size:"medium",value:E,onChange:(e,s)=>{z(s)},onChangeCommitted:(e,s)=>{D(s[0]),P(s[1])},valueLabelDisplay:"auto",getAriaLabel:()=>t("volumeRange"),getAriaValueText:()=>"".concat(t("min"),": ").concat(h," ").concat(t("max"),": ").concat(j)}),(0,r.jsx)(M.Z,{value:j,size:"small",onChange:e=>{let s=parseInt(e.target.value);P(isNaN(s)?b:s)},"aria-label":t("maxVolume"),inputProps:{step:1,min:0,max:b,pattern:"[0-9]*"}})]})]}),(0,r.jsx)(p.ZP,{item:!0,xs:12,sm:2,md:2,className:"flex flex-col items-center justify-center",children:(0,r.jsx)(C.Z,{className:"w-[150px]",variant:"outlined",onClick:()=>{D(v),P(b),w(x),y(f),_("")},children:t("clear")})})]})})]})}var R=t(37988),E=t(49716),z=t(89657),U=t(7824);function H(){let e=(0,l.useRouter)(),s=(0,l.useParams)().lang,[t,n]=(0,a.useState)(c()().format("YYYYMMDD")),[o,m]=(0,a.useState)(c()().format("YYYYMMDD")),[u,x]=(0,a.useState)(t),[h,p]=(0,a.useState)(o),[j,N]=(0,a.useState)(0),[v,b]=(0,a.useState)(0),[g,w]=(0,a.useState)(j),[y,D]=(0,a.useState)(v),[Z,C]=(0,a.useState)("");(0,E.L)();let I=(0,z.T)(),k=U.l_;return(0,a.useEffect)(()=>{if(k&&k.orders&&k.orders.length>0){let e=k.orders[0].volume,s=k.orders[0].volume,t=k.orders[0].date,r=k.orders[0].date;for(let a of k.orders.slice(1))a.volume<e&&(e=a.volume),a.volume>s&&(s=a.volume),parseInt(a.date)>parseInt(r)&&(r=a.date),parseInt(a.date)<parseInt(t)&&(t=a.date);w(e),N(e),D(s),b(s),x(t),n(t),p(r),m(r)}},[k]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{className:"flex lg:hidden",customerId:I?I.customerId:void 0,customerName:I?I.customerName:void 0,hideDrawer:null!==I&&void 0!=I&&"admin"===I.role}),(0,r.jsxs)("div",{className:"flex flex-row grow",children:[(0,r.jsx)(R.I,{card:!0,className:"hidden lg:flex h-screen",customerId:I?I.customerId:void 0,customerName:I?I.customerName:void 0,logo:I?I.logo:void 0,hideSettings:!!I&&"admin"===I.role,hideLogout:!!I&&"admin"===I.role,onHomeButton:I&&"admin"===I.role?()=>e.push("/".concat(s,"/dashboard")):void 0}),(0,r.jsxs)("main",{className:"flex flex-col grow",children:[(0,r.jsx)(f,{className:"hidden lg:flex",customerId:I?I.customerId:void 0,customerName:I?I.customerName:void 0,hideDrawer:!0,hideBackButton:!I||null!=I&&"admin"!==I.role}),(0,r.jsx)(i.ZP,{universal:!0,className:"flex flex-col",children:(0,r.jsxs)("div",{className:"flex flex-col px-4 lg:px-8 justify-between min-h-full",children:[(0,r.jsxs)("div",{className:"grow",children:[(0,r.jsx)(_,{minDate:u,maxDate:h,minDateLimit:t,maxDateLimit:o,minVolume:g,maxVolume:y,minVolumeLimit:j,maxVolumeLimit:v,searchText:Z,setMinDate:x,setMaxDate:p,setMinVolume:w,setMaxVolume:D,setMaxVolumeLimit:b,setSearchText:C,showCustomerName:null!==I&&void 0!=I&&"admin"===I.role}),(0,r.jsx)(P,{ordersData:k?k.orders:null,minDate:u,maxDate:h,minVolume:g,maxVolume:y,searchText:Z,showCustomerName:null!==I&&void 0!=I&&"admin"===I.role})]}),(0,r.jsx)(d.m,{className:"mt-4 mb-2"})]})})]})]})]})}function W(){let e=(0,E.L)(),[s,t]=(0,a.useState)((0,r.jsx)(n.LoadingScreen,{}));return(0,a.useEffect)(()=>{e&&t((0,r.jsx)(z.i,{children:(0,r.jsx)(H,{})}))},[e]),s}},63807:function(e,s,t){"use strict";t.d(s,{O:function(){return a}});var r=t(57437);function a(e){let{title:s,icon:t,actions:a,className:n}=e;return(0,r.jsxs)("div",{className:"flex flex-row px-4 py-1.5 items-center\n      bg-stone-800 text-gray-50 ".concat(null!=n?n:""),children:[t,(0,r.jsx)("h3",{className:"text-xl m-0 font-medium",children:s}),a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"grow"}),a]})]})}},75268:function(e,s,t){"use strict";t.d(s,{w:function(){return n}});var r=t(57437),a=t(87138);function n(e){let s="component"in e&&e.component?e.component:"div",t="panel"in e,n="href"in e,{id:l,children:o}=e,c="py-2 flex flex-row border-neutral-200 border-b-[1px]\n	border-t-0 border-x-0 border-solid ";return(t||n)&&(c+="hover:cursor-pointer hover:bg-stone-100 "),n&&(c+="text-inherit no-underline"),(0,r.jsxs)(s,{id:l,children:[n&&(0,r.jsx)(a.default,{href:e.href,className:c,children:o}),!n&&(0,r.jsx)("div",{onClick:()=>{t&&e.setPanelState(e=>!e)},className:c,children:o}),t&&!0===e.isOpen&&(0,r.jsx)("div",{className:"p-4 bg-[#abada3]",children:e.panel})]})}},99926:function(e,s,t){"use strict";t.d(s,{Y:function(){return n}});var r=t(57437),a=t(58433);function n(e){let{children:s}=e;return(0,r.jsx)(a.ZP,{container:!0,className:"py-1 bg-neutral-100 border-neutral-200 border-b-[1px] border-t-0 border-x-0 border-solid",children:s})}},78659:function(e,s,t){"use strict";t.d(s,{LoadingScreen:function(){return d}});var r=t(57437),a=t(66648),n=t(69129),l=t(73244),o=t(16463),c=t(1633),i=t(18087);function d(e){let s=(0,o.useRouter)(),t=(0,o.useParams)().lang,d=(0,i.useTranslations)("loadingScreen.labels"),{id:m}=e;return(0,r.jsxs)("section",{id:m,className:"bg-white min-h-[100vh] flex flex-col items-center justify-center",children:[(0,r.jsx)(a.default,{width:100,height:65,src:"/logo.svg",alt:"Logo",className:"mb-10 w-auto h-[100px]",priority:!0}),(0,r.jsx)(n.I,{icon:"svg-spinners:3-dots-fade",width:40,className:"text-tertiary"}),(0,r.jsxs)("p",{className:"text-sm absolute bottom-3 animate-fade animate-delay-1000",children:["".concat(d("notRedirected")," "),(0,r.jsx)("a",{href:"".concat(c.X8,"/").concat(t,"/"),className:"underline text-primary",onClick:e=>{e.preventDefault(),s.replace("/".concat(l.E.defaultLocale))},children:d("clickHere")})," ".concat(d("goToFrontPage"))]})]})}},86504:function(e,s,t){"use strict";t.d(s,{w:function(){return i}});var r=t(57437),a=t(66648),n=t(16463),l=t(70270),o=t(60335),c=t(69129);function i(e){let s=(0,n.useRouter)(),t=e.drawer&&e.setDrawerOpen,{i18n:i,titleAppend:d,onBackButton:m,className:u}=e;return(0,r.jsxs)(l.Z,{component:"header",className:"pr-6 py-3 flex items-center rounded-none\n      justify-between z-10 h-9 text-foreground \n      ".concat(t||m?"pl-4":"pl-8","\n      ").concat(null!=u?u:""),children:[(t||m)&&(0,r.jsx)(o.Z,{className:"mr-3 text-foreground animate-fade animate-duration-500","aria-label":i(t?"menu":"goBack"),onClick:()=>{t&&e.setDrawerOpen?e.setDrawerOpen(e=>!e):m?m():s.back()},children:(0,r.jsx)(c.I,{icon:t?"mdi:menu":"mdi:arrow-back",width:23})}),e.drawer,(0,r.jsx)("div",{className:"text-xl font-medium grow animate-fade animate-duration-500 animate-delay-150",children:(0,r.jsx)("span",{children:i("title")+(d?" - ".concat(d):"")})}),(0,r.jsx)(a.default,{width:66,height:43,src:"/logo.svg",alt:"Logo",className:"inline w-auto h-[30px]",priority:!0})]})}},18675:function(e,s,t){"use strict";t.d(s,{Y:function(){return l}});var r=t(57437),a=t(58438),n=t(37988);function l(e){let{customerId:s,customerName:t,isDrawerOpen:l,setDrawerOpen:o,logo:c}=e;return(0,r.jsx)(a.ZP,{open:l,onClose:()=>o(!1),className:"lg:hidden",children:(0,r.jsx)(n.I,{customerId:s,customerName:t,logo:c})})}},37988:function(e,s,t){"use strict";t.d(s,{I:function(){return x}});var r=t(57437),a=t(66648),n=t(16463),l=t(18087),o=t(57300),c=t(75462),i=t(70270),d=t(69129),m=t(52179);function u(e){let{logo:s,customerId:t,customerName:i,onHomeButton:u,hideSettings:x,hideLogout:f,showOrders:h}=e,p=(0,l.useTranslations)("ordersPage.labels.drawer"),j=(0,n.useRouter)(),N=(0,n.useParams)().lang,v=[];return u&&v.push((0,r.jsxs)(o.Z,{className:"py-4 px-6 flex flex-row justify-center",onClick:u,children:[(0,r.jsx)(d.I,{icon:"mdi:home-outline",width:22,className:"mr-2"}),p("home")]})),h&&v.push((0,r.jsxs)(o.Z,{className:"py-4 px-6 flex flex-row justify-center",onClick:()=>j.push("/".concat(N,"/orders")),children:[(0,r.jsx)(d.I,{icon:"mingcute:ship-line",width:22,className:"mr-2"}),p("orders")]})),x||v.push((0,r.jsxs)(o.Z,{className:"py-4 px-6 flex flex-row justify-center",onClick:()=>j.push("/".concat(N,"/settings")),children:[(0,r.jsx)(d.I,{icon:"mdi:account-cog-outline",width:22,className:"mr-2"}),p("accountSettings")]})),f||v.push((0,r.jsxs)(o.Z,{className:"py-4 px-6 flex flex-row justify-center",onClick:()=>{localStorage.removeItem("eudr_auth_token"),sessionStorage.removeItem("eudr_auth_token"),j.replace("/".concat(N))},children:[(0,r.jsx)(d.I,{icon:"ic:exit-to-app",width:20,className:"mr-2"}),p("logout")]})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-col items-center pt-7 pb-6 justify-center relative bg-primary",children:[(0,r.jsx)(a.default,{src:"/cafe-grao.jpg",alt:p("coffeeBeans"),sizes:"350px",className:"object-cover",fill:!0,priority:!0}),(0,r.jsx)("div",{className:"bg-yellow-900/25 w-full h-full absolute top-0 left-0"}),(0,r.jsx)("div",{className:"bg-black/25 w-full h-full absolute top-0 left-0"}),(0,r.jsx)(c.Z,{className:"h-[100px] w-[100px] border-1 border-solid shadow-sm border-white",children:(0,r.jsx)(a.default,{src:null!=s?s:"/user.webp",alt:p("customerLogo"),width:100,height:100})}),i&&(0,r.jsx)("span",{className:"text-2xl text-center pt-4 drop-shadow-sm text-white",children:i})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-between grow",children:[(0,r.jsx)("nav",{className:"flex flex-col justify-center mt-4",children:v.map((e,s)=>(0,r.jsx)("div",{className:"animate-duration-300 ".concat(s%2==0?"animate-fade-left":"animate-fade-right"),children:e},"user-profile-item-".concat(s)))}),(0,r.jsx)("div",{className:"px-4 pb-4 flex flex-row justify-center mt-4",children:(0,r.jsx)(m.$,{})})]})]})}function x(e){let{card:s,className:t,...a}=e,n=(0,r.jsx)(u,{...a}),l="w-[320px] h-full flex flex-col py-0 ".concat(null!=t?t:"");return s?(0,r.jsx)(i.Z,{className:"rounded-none ".concat(l),children:n}):(0,r.jsx)("div",{className:l,children:n})}},70773:function(e,s,t){"use strict";t.d(s,{r:function(){return n}});var r=t(42175),a=t.n(r);let n=(0,t(94444).Z)({typography:{fontFamily:a().style.fontFamily},components:{MuiListItemButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiIconButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiButton:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}},MuiMenuItem:{styleOverrides:{root:{"&& .MuiTouchRipple-child":{backgroundColor:"#c9b69f"}}}}},palette:{primary:{main:"#74533b",light:"#74533b",dark:"#74533b",contrastText:"#fff"},secondary:{main:"#e3d5cc",light:"#e3d5cc",dark:"#e3d5cc",contrastText:"#1d1b19"},tertiary:{main:"#A0BF7F",light:"#A0BF7F",dark:"#A0BF7F",contrastText:"#fff"},buttonWhite:{main:"#ffffff",light:"#ffffff",dark:"#ffffff",contrastText:"#1d1b19"},success:{main:"#159847",light:"#159847",dark:"#159847",contrastText:"#159847"},error:{main:"#dc2626",light:"#dc2626",dark:"#dc2626",contrastText:"#dc2626"}}})},89657:function(e,s,t){"use strict";t.d(s,{T:function(){return i},i:function(){return c}});var r=t(57437),a=t(2265),n=t(49716),l=t(7824);let o=(0,a.createContext)(void 0);function c(e){let{children:s}=e,t=function(e){let[s,t]=(0,a.useState)();return(0,a.useEffect)(()=>{e?t(l.u):t(null)},[e,t]),s}((0,n.L)());return(0,r.jsx)(o.Provider,{value:t,children:s})}let i=()=>(0,a.useContext)(o)}},function(e){e.O(0,[839,816,617,87,37,614,367,439,487,119,616,628,61,159,971,23,744],function(){return e(e.s=54783)}),_N_E=e.O()}]);