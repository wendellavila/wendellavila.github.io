(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{3878:function(e,t,n){var i={"./translations_en.json":[3548,548],"./translations_pt.json":[157,157]};function a(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],a=t[0];return n.e(t[1]).then(function(){return n.t(a,19)})}a.keys=function(){return Object.keys(i)},a.id=3878,e.exports=a},2850:function(e,t,n){Promise.resolve().then(n.bind(n,4762))},4762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var i=n(7437),a=n(2265),l=n(8087);function s(e){let{ariaLabel:t,children:n,className:l,component:s,animate:r}=e,[o,c]=(0,a.useState)("ꕯ");return(0,a.useEffect)(()=>{if(r){let e=[];e.push(setTimeout(()=>{c("|")},0));for(let t=0;t<n.length;t++)e.push(setTimeout(()=>{c(e=>"".concat(e.slice(0,e.length-1)).concat(n[t],"|"))},100*(t+1)));return e.push(setTimeout(()=>{c(e=>e.slice(0,e.length-1))},100*(n.length+2))),()=>{e.forEach(e=>clearTimeout(e))}}},[r,n,c]),(0,i.jsx)(null!=s?s:"span",{className:l,"aria-label":t,children:o})}function r(e,t){let[n,i]=(0,a.useState)(!1),l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{l.current=new IntersectionObserver(e=>{let[t]=e;return i(t.isIntersecting)},{threshold:null!=t?t:.3})},[l,t]),(0,a.useEffect)(()=>(l&&l.current&&e.current&&l.current.observe(e.current),()=>{l&&l.current&&l.current.disconnect()}),[l,e]),n}function o(e){let{color:t,position:n}=e;return(0,i.jsx)("div",{className:"w-5 h-[1px] border-b-[1px] ".concat("left"===n?"ml-2":"mr-2"," border-").concat(t,"/50")})}function c(e){let{backgroundColor:t,children:n,color:a}=e;return(0,i.jsx)("span",{className:"border px-2 py-1 whitespace-nowrap pointer-events-none\n      border-".concat(a,"/50 ").concat(t?"bg-"+t:""),children:n})}function d(e){let{className:t,color:n,position:a,textColor:l}=e;return(0,i.jsx)("div",{className:"".concat(null!=t?t:"","\n      absolute flex-row items-center group-hover:underline ").concat("left"===a?"left-2":"right-2","\n      text-").concat(null!=l?l:n),children:("left"===a?["line","textbox"]:["textbox","line"]).map((t,n)=>"textbox"===t?(0,i.jsx)(c,{...e},"tooltip-textbox-".concat(n)):(0,i.jsx)(o,{...e},"tooltip-line-".concat(n)))})}function u(e){let{backgroundColor:t,color:n,expandAll:a,item:l,position:s,textColor:r}=e,o="left"===e.position?["dot","tooltip"]:["tooltip","dot"];return(0,i.jsx)("a",{href:"#".concat(l.id),"aria-label":l.text,className:"group relative flex flex-row items-center hover:cursor-pointer\n          ".concat("left"===e.position?"justify-start":"justify-end"),onClick:t=>{var n;t.preventDefault(),null===(n=e.item.ref.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})},children:o.map((e,o)=>"tooltip"===e?(0,i.jsx)(d,{position:s,color:n,textColor:r,backgroundColor:t,className:a?"flex":"hidden group-hover:flex",children:l.text},"tooltip-".concat(o)):(0,i.jsx)("div",{className:"h-2 w-2 border border-solid hover:cursor-pointer \n          ".concat("left"===s?"mr-12 ml-2":"mr-2 ml-12"," border-").concat(n,"/60\n          bg-transparent group-hover:bg-").concat(n)},"dot-".concat(o)))})}function m(e){let{color:t,gap:n,position:a}=e;return(0,i.jsx)("div",{className:"w-[6px] border-x border-solid ".concat(n?"grow-[6]":"grow","\n      ").concat("left"===a?"mr-12 ml-2":"mr-2 ml-12","\n      border-").concat(t,"/35")})}var h=n(6463),p=n(5640),x=n(1633);function f(e){let t=(0,h.useRouter)(),n=(0,l.useLocale)(),s=(0,h.usePathname)(),r=(0,l.useTranslations)("sections.banner"),{isOpen:o}=e,c={en:{flag:"flagpack:us",name:"English"},pt:{flag:"flagpack:br",name:"Portugu\xeas"}},d=e=>{n!==e&&(s="/".concat(e,"/").concat(s.substring(4)),localStorage.setItem("lang",e),t.push(s))};return(0,i.jsxs)("div",{className:"flex flex-col ".concat(o?"backdrop-blur-sm":""),children:[(0,i.jsxs)("button",{className:"h-8 flex flex-row items-center hover:cursor-pointer border hover:underline\n      border-white/50","aria-label":r("showLanguageOptions"),children:[(0,i.jsx)("div",{"aria-hidden":!0,className:"px-1.5 py-0.5",children:(0,i.jsx)(p.I,{icon:"material-symbols:language",width:22,className:"inline text-white/85"})}),(0,i.jsx)("div",{className:"border-l border-inherit w-1 h-full"}),(0,i.jsxs)("div",{className:"flex flex-row items-center justify-center bg-transparent      ","aria-label":"".concat(r("currentLanguage"),": ").concat(c[n].name),children:[(0,i.jsxs)("span",{className:"inline-flex flex-row items-center px-0.5",children:[(0,i.jsx)(p.I,{icon:c[n].flag,width:22,className:"inline mr-1"}),n.toLocaleUpperCase()]}),(0,i.jsx)(p.I,{icon:"mdi:chevron-down",width:22,className:"inline transition-all transform ".concat(o?"rotate-180":"")})]})]}),o&&(0,i.jsx)("div",{className:"flex flex-col items-center",children:x.E3.locales.map(e=>(0,i.jsx)(a.Fragment,{children:e!==n&&(0,i.jsxs)("button",{className:"h-8 flex flex-row items-center justify-center w-full py-0.5 border-x border-b border-white/50 hover:cursor-pointer hover:underline","aria-label":"".concat(r("switchTo")," ").concat(c[e].name),onClick:()=>d(e),children:[(0,i.jsx)(p.I,{icon:c[e].flag,width:22,className:"mr-1 inline"}),e.toLocaleUpperCase()]})},"option-".concat(e)))})]})}function g(e){let{color:t,className:n,isOpen:a,position:l,textColor:s}=e;return(0,i.jsx)("div",{className:"".concat(null!=n?n:"","\n      absolute flex-row items-center ").concat("left"===l?"left-2":"right-2","\n      text-").concat(null!=s?s:t),children:("left"===l?["line","textbox"]:["textbox","line"]).map((t,n)=>"textbox"===t?(0,i.jsx)(f,{isOpen:a},"tooltip-textbox-".concat(n)):(0,i.jsx)(o,{...e},"tooltip-line-".concat(n)))})}function b(e){let{color:t,expandAll:n,position:l,textColor:s}=e,r="left"===l?["dot","languageSelector"]:["languageSelector","dot"],[o,c]=(0,a.useState)(!1);return(0,i.jsx)("a",{className:"group relative flex flex-row items-center hover:cursor-pointer\n      ".concat("left"===l?"justify-start":"justify-end"),onClick:()=>c(e=>!e),children:r.map((e,a)=>"languageSelector"===e?(0,i.jsx)(g,{position:l,color:t,textColor:s,isOpen:o,className:n?"flex":"hidden group-hover:flex"},"tooltip-".concat(a)):(0,i.jsx)("div",{className:"h-2 w-2 border border-solid hover:cursor-pointer \n            ".concat("left"===l?"mr-12 ml-2":"mr-2 ml-12"," border-").concat(t,"/60\n            bg-transparent group-hover:bg-").concat(t)},"dot-".concat(a)))})}function j(e){let{className:t,color:n,gap:l,items:s,languageSelector:r,position:o,showOnSmall:c}=e,[d]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,a.useState)({width:0,height:0});return(0,a.useEffect)(()=>{function i(){let i={width:window.innerWidth,height:window.innerHeight},a=Math.abs(t.width-i.width)>e,l=Math.abs(t.height-i.height)>e;(a||l)&&n(i)}return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,t.width,t.height]),[t.width,t.height]}(5);return(null!=c?c:!(d<768))&&(0,i.jsxs)("nav",{className:"flex flex-col justify-around items-center z-10\n      ".concat(null!=t?t:""),children:[(0,i.jsx)(m,{color:n,position:o,gap:l}),s.map((t,l)=>(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(u,{item:t,...e}),(0,i.jsx)(m,{color:n,position:o})]},"vertical-nav-item-".concat(t.id))),r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...e}),(0,i.jsx)(m,{color:n,position:o})]})]})}var v=n(9065);function w(e){let{size:t,top:n,left:a}=e,l=Math.random(),s="";if(("random"===e.animate||void 0===e.animate)&&l<=.34){let t;let n=e.animationDuration;"random"!==n&&n||(n=["slow","medium","fast"][(0,v.XF)(0,3)]),t="fast"===n?"animate-duration-[1400ms]":"medium"===n?"animate-duration-[1800ms]":"animate-duration-[2000ms]",s="animate-fade animate-infinite animate-ease-in\n      animate-alternate-reverse ".concat(t)}let r="bg-white/80";return l>=.667&&l<.778?r="bg-pink-400/80":l>=.778&&l<.889?r="bg-sky-500/80":l>=.889&&(r="bg-yellow-200/80"),(0,i.jsx)("div",{style:{height:null!=t?t:1,width:null!=t?t:1,top:null!=n?n:0,left:null!=a?a:0},className:"absolute ".concat(r," rounded-full ").concat(s)})}function N(){let e=(0,a.useRef)(null),[t,n]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[n,i]=(0,a.useState)({width:0,height:0});return(0,a.useEffect)(()=>{if(!e.current)return;let a=new ResizeObserver(()=>{let a={width:e.current?e.current.offsetWidth:n.width,height:e.current?e.current.offsetHeight:n.height},l=Math.abs(n.width-a.width)>t,s=Math.abs(n.height-a.height)>t;(l||s)&&i(a)});return a.observe(e.current),()=>a.disconnect()},[e,t,n.width,n.height,i]),[n.width,n.height]}(e,50),l=()=>Math.max(t,n);return(0,i.jsxs)("div",{id:"banner-starry-sky","aria-hidden":!0,ref:e,className:"w-full h-full absolute top-0 left-0 z-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600",children:[[...Array(Math.floor(1.2*l()))].map((e,a)=>(0,i.jsx)(w,{id:"star-sm-".concat(a+1),size:1,top:(0,v.XF)(0,n-1),left:(0,v.XF)(0,t-1)},"star-sm-".concat(a+1))),[...Array(Math.floor(.3*l()))].map((e,a)=>(0,i.jsx)(w,{id:"star-md-".concat(a+1),size:2,top:(0,v.XF)(0,n-1),left:(0,v.XF)(0,t-1)},"star-md-".concat(a+1))),[...Array(Math.floor(.02*l()))].map((e,a)=>(0,i.jsx)(w,{id:"star-lg-".concat(a+1),size:3,top:(0,v.XF)(0,n-1),left:(0,v.XF)(0,t-1)},"star-lg-".concat(a+1)))]})}function y(e){let{className:t}=e,n=(0,l.useTranslations)("sections.banner"),a=[{url:x.ET,icon:"mdi:linkedin",ariaLabel:"LinkedIn",animationDuration:"animate-duration-[1000ms]"},{url:x.Dj,icon:"mdi:github",title:"GitHub",animationDuration:"animate-duration-[1500ms]"},{url:"mailto:".concat(x.Do),icon:"basil:gmail-solid",title:n("email"),animationDuration:"animate-duration-[2000ms]"}];return(0,i.jsx)("nav",{className:"flex flex-row gap-3 mt-4 ".concat(t),children:a.map(e=>(0,i.jsx)("a",{href:e.url,target:"_blank","aria-label":e.ariaLabel,className:"",children:(0,i.jsx)(p.I,{"aria-label":"LinkedIn Logo",icon:e.icon,width:45,className:"text-white/85 \n            hover:cursor-pointer hover:text-white hover:scale-105\n            animate-fade ".concat(e.animationDuration)})},e.url))})}function k(e){let{componentRef:t,items:n}=e,o=(0,l.useTranslations)("sections.banner")("subtitle"),c="__".concat(o.replaceAll(" ","_"),"__"),d=r(t),[u,m]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{d&&!u&&m(!0)},[u,d]),(0,i.jsxs)("section",{id:"banner",ref:t,className:"min-h-dvh flex relative text-white/95 pt-8 pb-4 lg:pt-12 px-8 lg:px-16",children:[(0,i.jsx)(N,{}),(0,i.jsx)("div",{id:"banner-color-filter","aria-hidden":!0,className:"bg-black/25 w-full h-full absolute top-0 left-0 z-0"}),(0,i.jsxs)("div",{id:"banner-body",className:"flex flex-col z-10",children:[(0,i.jsx)("h1",{className:"text-7xl mb-1 font-bold ".concat(x.yA.className," hyphens-manual"),children:x.k7.toLocaleUpperCase()}),(0,i.jsx)(s,{ariaLabel:o,className:"text-3xl mb-4 ".concat(x.yA.className," break-all"),animate:u,children:c}),(0,i.jsx)(y,{className:u?"visible":"hidden"})]}),(0,i.jsx)(j,{id:"banner-nav",gap:!0,expandAll:!0,showOnSmall:!0,languageSelector:!0,items:n,position:"right",color:"white",textColor:"white",className:"absolute right-0 bottom-0 h-full"})]})}var _=n(6648);function C(e){let{src:t,size:n,alt:l,ariaLabel:s}=e,[r,o]=(0,a.useState)(!1);return(0,i.jsx)("div",{style:{width:n,height:n},className:"relative flex items-center justify-center rounded-full overflow-clip\n      border-8 border-white/95 drop-shadow-md m-0 p-0 ".concat(r?"bg-coffee/75":"bg-white"),"aria-label":null!=s?s:"Avatar",children:r?(0,i.jsx)("span",{className:"text-white/55 top-1/2 left-1/2 text-7xl",children:e.alt}):(0,i.jsx)(_.default,{src:t,width:n,height:n,alt:l,className:"absolute",onError:()=>o(!0)})})}function L(e){var t;let{children:n,className:a,decorationClassName:l}=e,s=null!==(t=e.component)&&void 0!==t?t:"h2";return(0,i.jsxs)("div",{className:"flex flex-row items-end\n      ".concat("h2"===s?"text-xl mt-8 mb-12":"text-2xl mt-8 mb-4","\n      ").concat(null!=a?a:""),children:[(0,i.jsxs)(s,{children:[n.toLocaleUpperCase(),(0,i.jsx)("span",{"aria-hidden":!0,className:"block h-1 w-auto\n          ".concat(null!=l?l:"bg-blueprint")})]}),(0,i.jsx)("span",{"aria-hidden":!0,className:"h-1 ".concat("h2"===s?"w-3":"w-2","\n        ").concat(null!=l?l:"bg-blueprint")})]})}function T(){let e=[{url:x.ET,icon:"mdi:linkedin",text:x.ET.substring(8)},{url:x.Dj,icon:"mdi:github",text:x.Dj.substring(8)},{url:"mailto:".concat(x.Do),icon:"mdi:gmail",text:x.Do}];return(0,i.jsx)("nav",{className:"py-4 text-coffee",children:e.map((e,t)=>{var n;return(0,i.jsxs)("a",{href:e.url,target:"_blank",className:"flex items-center justify-center gap-1 text-sm hover:underline py-0.5 animate-fade ".concat(t%2==0?"animate-fade-right":"animate-fade-left"),children:[(0,i.jsx)(p.I,{icon:e.icon,width:18}),null!==(n=e.text)&&void 0!==n?n:e.url]},e.url)})})}function U(e){let{componentRef:t,items:n}=e,s=(0,l.useTranslations)("sections.about"),[o,c]=(0,a.useState)(!1),d=r(t);return(0,a.useEffect)(()=>{d&&!o&&c(!0)},[o,d]),(0,i.jsxs)("section",{ref:t,id:"about",className:"min-h-dvh flex flex-row bg-cream",children:[(0,i.jsx)(j,{id:"about-nav",items:n,position:"left",color:"latte",textColor:"coffee",backgroundColor:"cream"}),(0,i.jsxs)("div",{id:"about-body",className:"grow flex flex-col pt-2 pb-10",children:[(0,i.jsx)(L,{decorationClassName:"bg-blueprint",className:"ml-6 md:ml-0",children:s("title")}),(0,i.jsxs)("div",{className:"grow flex items-center gap-8  \n          justify-evenly flex-col md:flex-row ",children:[(0,i.jsxs)("div",{id:"about-profile",className:"flex flex-col items-center px-4 animate-fade-right\n            ".concat(o?"visible":"hidden"),children:[(0,i.jsx)(C,{className:"mb-4",src:"/profile.jpg",size:200,alt:"WA"}),(0,i.jsx)(T,{})]}),(0,i.jsx)("div",{id:"about-content",className:o?"visible":"hidden",children:(0,i.jsx)("article",{className:"md:px-12 px-6 max-w-[1200px] animate-fade-left",children:s("content").split("\n").map((e,t)=>(0,i.jsx)("p",{className:"text-md pb-4 text-justify",children:e},"about-paragraph-".concat(t+1)))})})]})]})]})}function E(e){let{title:t,institution:n,description:a,titleUrl:l,institutionUrl:s,years:r}=e,o=(null!=a?a:"").split("\n");return(0,i.jsxs)("article",{className:"pb-6",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-between mb-2 gap-3",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"text-md font-semibold",children:l?(0,i.jsx)("a",{className:"hover:underline",href:l,target:"_blank",children:t}):t}),(0,i.jsx)("p",{className:"text-md",children:s?(0,i.jsx)("a",{className:"hover:underline",href:s,target:"_blank",children:n}):n})]}),(0,i.jsx)("span",{className:"text-sm italic",children:r})]}),o.length<=1?(0,i.jsx)("p",{className:"ml-5",children:o[0]}):(0,i.jsx)("ul",{className:"list-[square] ml-5 marker:text-blueprint",children:o.map((e,t)=>""!=e&&(0,i.jsx)("li",{className:"list-inside",children:e},"".concat(e,"-").concat(t)))})]})}function S(e){let{className:t,subsection:n}=e,a=(0,l.useTranslations)("sections.".concat(n)),s=x.kz.filter(e=>e.id===n)[0],r=s.data;return(0,i.jsx)("section",{className:"flex flex-col items-center ".concat(null!=t?t:""),id:"cv-".concat(n),children:(0,i.jsxs)("div",{className:"max-w-[800px] w-full",children:[(0,i.jsx)(L,{decorationClassName:"bg-silver",className:"mb-6",children:a("title").toLocaleUpperCase()}),r.map(e=>{var t,l,r;return(0,i.jsx)(E,{id:"cv-".concat(n,"-item-").concat(e.id),title:null!==(t=e.title)&&void 0!==t?t:a("".concat(e.id,".title")),institution:null!==(l=e.institution)&&void 0!==l?l:a("".concat(e.id,".institution")),titleUrl:e.titleUrl,institutionUrl:e.institutionUrl,years:null!==(r=e.years)&&void 0!==r?r:a("".concat(e.id,".years")),description:"publications"!==s.id?a("".concat(e.id,".description")):void 0},"cv-".concat(n,"-item-").concat(e.id))})]})})}function M(e){let{className:t}=e,n=(0,l.useTranslations)("sections.cv"),a=(0,l.useLocale)();return(0,i.jsx)("article",{className:"flex flex-col items-center ".concat(t),children:(0,i.jsxs)("div",{className:"w-full max-w-[800px] pt-8",children:[(0,i.jsx)(L,{component:"span",className:"text-base",decorationClassName:"bg-cream",children:n("downloadPDF")}),(0,i.jsx)("a",{role:"button",download:"Wendell_Avila_CV_".concat(a),href:"".concat("https://raw.githubusercontent.com/wendellavila/wendellavila/main/assets/files","/CV_").concat(a,".pdf"),target:"_blank",className:"flex flex-row",children:(0,i.jsxs)("div",{className:"py-1 inline-flex flex-row items-center justify-center font-sm hover:underline",children:[(0,i.jsx)(p.I,{icon:"formkit:download",width:16,className:"mr-2 font-bold"}),n("clickToDownload")]})})]})})}function D(e){let{componentRef:t,items:n}=e,l=r(t),[s,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{l&&!s&&o(!0)},[s,l]),(0,i.jsxs)("section",{ref:t,id:"cv",className:"min-h-dvh flex flex-row bg-white",children:[(0,i.jsx)("div",{id:"cv-body",className:"grow flex flex-col justify-center pt-2 pb-10 px-6 md:pr-0",children:(0,i.jsxs)("div",{className:"inline-grid gap-y-4 gap-x-20 lg:grid-cols-2\n          ".concat(s?"visible":"hidden"),children:[(0,i.jsx)(S,{subsection:"education",className:"order-1 animate-fade-right"}),(0,i.jsx)(S,{subsection:"experience",className:"order-2 lg:order-3 animate-fade-left"}),(0,i.jsx)(S,{subsection:"publications",className:"order-3 lg:order-2 animate-fade-right"}),(0,i.jsx)(S,{subsection:"courses",className:"order-4 animate-fade-left"}),(0,i.jsx)(M,{id:"cv-download",className:"order-5 animate-fade-right ".concat(s?"visible":"hidden")})]})}),(0,i.jsx)(j,{id:"cv-nav",items:n,position:"right",color:"silver",textColor:"slate-500",backgroundColor:"white"})]})}function z(e){let{animate:t,className:n,children:l}=e,s=Math.round(e.percentage);s<0&&(s=0),s>100&&(s=100);let[r,o]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(t){let e=setTimeout(()=>{r<s&&o(e=>e+.4)},(100-(s-r))/s);return()=>clearTimeout(e)}},[t,s,r]),(0,i.jsxs)("div",{className:"flex flex-row gap-x-4 items-center flex-nowrap ".concat(null!=n?n:""),children:[(0,i.jsx)("div",{className:"w-1/3 flex flex-row items-center gap-x-2",children:l}),(0,i.jsx)("div",{"aria-label":"".concat(s,"%"),className:"bg-slate-50/20 h-3 w-full",children:(0,i.jsx)("div",{style:{width:"".concat(r,"%")},className:"h-full bg-cream/95"})})]})}function A(e){let{componentRef:t,items:n}=e,s=(0,l.useTranslations)("sections.skills"),o=r(t),[c,d]=(0,a.useState)(!1);return o&&!c&&d(!0),(0,i.jsxs)("section",{ref:t,id:"skills",className:"min-h-dvh flex flex-row bg-blueprint text-slate-50",children:[(0,i.jsx)(j,{id:"skills-nav",items:n,position:"left",color:"sky-100",textColor:"slate-100",backgroundColor:"blueprint"}),(0,i.jsxs)("div",{id:"skills-body",className:"grow pt-2 pb-16 px-6 md:pr-12 md:pl-0 flex flex-col",children:[(0,i.jsx)(L,{decorationClassName:"bg-cream",children:s("title")}),(0,i.jsx)("div",{className:"grow flex flex-row gap-x-0 md:gap-x-24 gap-y-8 flex-wrap items-center justify-evenly",children:x.ZU.map(e=>(0,i.jsxs)("div",{id:"skills-".concat(e.id),className:"w-full lg:w-[800px]",children:[(0,i.jsx)("h3",{className:"font-semibold mb-2",children:s(e.id)}),e.data.map(t=>{var n;return(0,i.jsxs)(z,{percentage:t.percentage,animate:c,children:[t.icon&&(0,i.jsx)(p.I,{icon:t.icon,"aria-hidden":!0,className:"flex-shrink-0"}),(0,i.jsx)("span",{children:null!==(n=t.title)&&void 0!==n?n:s("".concat(t.id,".title"))})]},"skills-".concat(e.id,"-").concat(t.id))})]},"skills-".concat(e.id)))})]})]})}function F(e){let{className:t,title:n,image:a,url:s,description:r}=e,o=(0,l.useTranslations)("sections.projects");return(0,i.jsxs)("article",{className:"relative flex flex-col w-96\n      text-center mb-2 animate-fade-down ".concat(null!=t?t:""),children:[(0,i.jsxs)("a",{className:"z-10 hover:cursor-pointer hover:underline group flex flex-col items-center gap-4",href:s,target:"_blank",children:[(0,i.jsxs)("div",{className:"bg-cream flex rotate-3 transition duration-75 group-hover:scale-[1.02]",children:[(0,i.jsx)("div",{"aria-hidden":!0,className:"absolute bg-blueprint w-full h-full -rotate-3"}),(0,i.jsx)(_.default,{src:"/".concat(a),width:200,height:200,alt:"".concat(n," - ").concat(o("screenshot")),className:"w-[300px] h-[200px] m-4 bg-white shadow-md border-8 border-white -rotate-3"})]}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"bg-cream mb-1 px-2 text-lg leading-relaxed",children:n})})]}),r&&(0,i.jsx)("p",{className:"text-md mt-1",children:r})]})}function I(e){let{componentRef:t,items:n}=e,s=(0,l.useTranslations)("sections.projects"),o=r(t),[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{o&&!c&&d(!0)},[c,o]),(0,i.jsxs)("section",{ref:t,id:"projects",className:"min-h-dvh flex flex-row bg-white",children:[(0,i.jsxs)("div",{id:"projects-body",className:"grow pt-2 pb-16 px-6 md:pl-12 flex flex-col",children:[(0,i.jsx)(L,{decorationClassName:"bg-silver",children:s("title").toLocaleUpperCase()}),(0,i.jsx)("div",{className:"grow flex flex-row flex-wrap gap-8 justify-center px-8",children:x.o8.map(e=>{var t;return(0,i.jsx)(F,{id:"projects-item-".concat(e.title),title:e.title,image:e.image,url:e.url,description:null!==(t=s("".concat(e.title,".description")))&&void 0!==t?t:void 0,className:c?"visible":"hidden"},"projects-item-".concat(e.title))})})]}),(0,i.jsx)(j,{id:"projects-nav",items:n,position:"right",color:"silver",textColor:"slate-500",backgroundColor:"white"})]})}function R(){let e=(0,l.useTranslations)("sections.footer"),t=new Date;return(0,i.jsxs)("footer",{id:"footer",className:"flex flex-row py-3 px-5 justify-between flex-wrap gap-y-2 bg-neutral-800",children:[(0,i.jsxs)("div",{id:"footer-copyright",className:"text-gray-100 flex flex-col gap-y-1",children:[(0,i.jsx)("a",{href:x.yo,className:"hover:underline font-bold text-sm hyphens-manual",children:x.k7})," ",(0,i.jsxs)("span",{className:"mr-1 text-xs",children:["\xa9 ",t.getFullYear()]})]}),(0,i.jsxs)("span",{id:"footer-source",className:"text-xs text-gray-300",children:[e("madeWith")," ",(0,i.jsx)("a",{href:"https://nextjs.org/",className:"underline",children:"Next.js"}),". ",e("sourceCodeAvailableOn")," ",(0,i.jsx)("a",{href:x.Hn,className:"underline",children:"GitHub"}),"."]})]})}function O(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null),n=(0,a.useRef)(null),s=(0,a.useRef)(null),r=(0,a.useRef)(null),o=(0,l.useTranslations)("sections"),c=[{id:"banner",text:o("banner.title"),ref:e},{id:"about",text:o("about.title"),ref:t},{id:"cv",text:o("cv.title"),ref:n},{id:"skills",text:o("skills.title"),ref:s},{id:"projects",text:o("projects.title"),ref:r}];return(0,i.jsxs)("div",{className:"flex flex-col overflow-x-hidden",children:[(0,i.jsx)(k,{componentRef:e,items:c}),(0,i.jsx)(U,{componentRef:t,items:c}),(0,i.jsx)(D,{componentRef:n,items:c}),(0,i.jsx)(A,{componentRef:s,items:c}),(0,i.jsx)(I,{componentRef:r,items:c}),(0,i.jsx)(R,{})]})}},5640:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var i=n(7437),a=n(1359);function l(e){return(0,i.jsx)(a.JO,{...e})}},1633:function(e,t,n){"use strict";n.d(t,{Dj:function(){return o},Do:function(){return u},E3:function(){return l},ET:function(){return d},Hn:function(){return c},ZU:function(){return h},k7:function(){return s},kz:function(){return m},o8:function(){return p},yA:function(){return a.a},yo:function(){return r}});var i=n(2147),a=n.n(i);let l={locales:["en","pt"],defaultLocale:"en"},s="Wen\xaddell Jo\xad\xe3o Cas\xadtro de A\xadvi\xadla",r="https://wendellavila.github.io",o="https://github.com/wendellavila",c="".concat(o,"/portfolio_next"),d="https://linkedin.com/in/wendellavila",u="wendelljcavila@gmail.com",m=[{id:"education",data:[{id:"unifal",institutionUrl:"https://bcc.unifal-mg.edu.br"}]},{id:"experience",data:[{id:"exportadora",institution:"Exportadora de Caf\xe9 Guaxup\xe9 Ltda.",institutionUrl:"https://www.guaxupe.com.br"},{id:"progepe",institution:"Pr\xf3-Reitoria de Gest\xe3o de Pessoas - Unifal-MG",institutionUrl:"https://unifal-mg.edu.br/progepe/"},{id:"tribit",institution:"TriBit Jr. - Unifal-MG"}]},{id:"courses",data:[{id:"java",institution:"Udemy",titleUrl:"https://www.udemy.com/course/java-curso-completo/",years:"2023"},{id:"machineLearning",institution:"Udemy",titleUrl:"https://www.udemy.com/course/python-coding/",years:"2020-2021"},{id:"python",institution:"Udemy",titleUrl:"https://www.udemy.com/course/python-coding/",years:"2019-2020"},{id:"r",institution:"Udemy",titleUrl:"https://www.udemy.com/course/r-programming/",years:"2019-2020"}]},{id:"publications",data:[{id:"l&nlm",title:"Study and Analysis of Deep Learning Techniques for Solving Financial Problems",institution:"Learning & Nonlinear Models",titleUrl:"https://sbic.org.br/lnlm/publicacoes/vol21-no2/vol21-no2-art4/",institutionUrl:"https://sbic.org.br/lnlm/"}]}],h=[{id:"programmingLanguages",data:[{id:"typescript",title:"Type\xadscript",icon:"simple-icons:typescript",percentage:85},{id:"php",title:"PHP",icon:"simple-icons:php",percentage:90},{id:"python",title:"Python",icon:"simple-icons:python",percentage:95},{id:"dart",title:"Dart",icon:"simple-icons:dart",percentage:80},{id:"java",title:"Ja\xadva",icon:"ri:java-fill",percentage:70},{id:"c",title:"C",icon:"simple-icons:c",percentage:60},{id:"lua",title:"Lu\xada",icon:"simple-icons:lua",percentage:50},{id:"bash",title:"Bash",icon:"simple-icons:gnubash",percentage:30}]},{id:"frameworksTech",data:[{id:"nextjs",title:"Next\xad.Js",icon:"simple-icons:nextdotjs",percentage:80},{id:"react",title:"Re\xadact",icon:"simple-icons:react",percentage:90},{id:"tailwindcss",title:"Tail\xadwind CSS",icon:"simple-icons:tailwindcss",percentage:95},{id:"flutter",title:"Flut\xadter",icon:"simple-icons:flutter",percentage:90},{id:"sqlsrv",title:"SQL Serv\xader",icon:"simple-icons:microsoftsqlserver",percentage:70},{id:"mysql",title:"My\xadSQL",icon:"fontisto:mysql",percentage:50},{id:"html",title:"HTML 5",icon:"simple-icons:html5",percentage:95},{id:"css",title:"CSS 3",icon:"simple-icons:css3",percentage:90},{id:"git",title:"Git",icon:"simple-icons:git",percentage:60},{id:"arch",title:"Arch Lin\xadux",icon:"simple-icons:archlinux",percentage:75},{id:"photoshop",title:"Adobe Pho\xadto\xadshop",icon:"simple-icons:adobephotoshop",percentage:70},{id:"inkscape",title:"Ink\xadscape",icon:"simple-icons:inkscape",percentage:65}]},{id:"machineLearning",data:[{id:"keras",title:"Ke\xadras",icon:"simple-icons:keras",percentage:65},{id:"numpy",title:"Num\xadpy",icon:"simple-icons:numpy",percentage:75},{id:"pandas",title:"Pan\xaddas",icon:"simple-icons:pandas",percentage:80},{id:"scikitLearn",title:"sci\xadkit-learn",icon:"simple-icons:scikitlearn",percentage:50},{id:"nextjs",title:"Mat\xadplot\xadlib",icon:"carbon:qq-plot",percentage:40},{id:"hyperopt",title:"Hy\xadper\xadopt",icon:"cil:graph",percentage:60}]},{id:"languages",data:[{id:"brazilianPortuguese",icon:"game-icons:brazil-flag",percentage:100},{id:"english",icon:"la:flag-usa",percentage:90}]}],p=[{title:"eudr_next",image:"project.png",url:"https://github.com/wendellavila/eudr_next"},{title:"mediawiki_pybot",image:"project.png",url:"https://github.com/wendellavila/mediawiki_pybot"},{title:"block_game_next",image:"project.png",url:"https://github.com/wendellavila/block_game_next"},{title:"jsmp_notebooks",image:"project.png",url:"https://github.com/wendellavila/jsmp_notebooks"},{title:"leetcode",image:"project.png",url:"https://github.com/wendellavila/leetcode"},{title:"chess_java",image:"project.png",url:"https://github.com/wendellavila/chess_java"},{title:"ssg_i18n_next",image:"project.png",url:"https://github.com/wendellavila/ssg_i18n_next"},{title:"dashboard_flutter",image:"project.png",url:"https://github.com/wendellavila/dashboard_flutter"},{title:"routesapp_flutter",image:"project.png",url:"https://github.com/wendellavila/routesapp_flutter"},{title:"starcount_mpi_c",image:"project.png",url:"https://github.com/wendellavila/starcount_mpi_c"}]},9065:function(e,t,n){"use strict";n.d(t,{XF:function(){return a},YU:function(){return l}});var i=n(1633);function a(e,t,n){let i=Math.random();if(void 0!==n){var a;let e;a=Math.round(a=n),i=(e=1e4*Math.sin(a++))-Math.floor(e)}return Math.floor(i*(t-e))+e}function l(e){for(let t of navigator.languages){let n=!0===e?t.substring(0,2):t;if(i.E3.locales.includes(n))return n}return i.E3.defaultLocale}}},function(e){e.O(0,[419,161,489,971,23,744],function(){return e(e.s=2850)}),_N_E=e.O()}]);