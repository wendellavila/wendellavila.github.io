(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{2850:function(e,t,a){Promise.resolve().then(a.bind(a,5815))},5815:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return X}});var n=a(7437),l=a(2265),s=a(8087);function i(e){let{ariaLabel:t,children:a,className:s,component:i,animate:r}=e,[c,o]=(0,l.useState)(a);return(0,l.useEffect)(()=>{if(r){o("ꕯ");let e=[];e.push(setTimeout(()=>{o("|")},0));for(let t=0;t<a.length;t++)e.push(setTimeout(()=>{o(e=>"".concat(e.slice(0,e.length-1)).concat(a[t],"|"))},100*(t+1)));return e.push(setTimeout(()=>{o(e=>e.slice(0,e.length-1))},100*(a.length+2))),()=>{e.forEach(e=>clearTimeout(e))}}},[r,a,o]),(0,n.jsx)(null!=i?i:"span",{className:s,"aria-label":t,children:c})}function r(e){let{color:t,position:a}=e;return(0,n.jsx)("div",{className:"w-5 h-[1px] border-b-[1px] ".concat("left"===a?"ml-2":"mr-2"," border-").concat(t,"/50")})}function c(e){let{backgroundColor:t,children:a,color:l}=e;return(0,n.jsx)("span",{className:"border px-2 py-1 whitespace-nowrap pointer-events-none\n      border-".concat(l,"/50 ").concat(t?"bg-"+t:""),children:a})}function o(e){let{className:t,color:a,position:l,textColor:s}=e;return(0,n.jsx)("div",{className:"".concat(null!=t?t:"","\n      absolute flex-row items-center group-hover:underline ").concat("left"===l?"left-2":"right-2","\n      text-").concat(null!=s?s:a),children:("left"===l?["line","textbox"]:["textbox","line"]).map((t,a)=>"textbox"===t?(0,n.jsx)(c,{...e},"tooltip-textbox-".concat(a)):(0,n.jsx)(r,{...e},"tooltip-line-".concat(a)))})}function d(e){let{backgroundColor:t,color:a,expandAll:l,item:s,position:i,textColor:r}=e,c="left"===e.position?["dot","tooltip"]:["tooltip","dot"];return(0,n.jsx)("a",{href:"#".concat(s.id),"aria-label":s.text,className:"group relative flex flex-row items-center hover:cursor-pointer\n          ".concat("left"===e.position?"justify-start":"justify-end"),onClick:t=>{var a;t.preventDefault(),null===(a=e.item.ref.current)||void 0===a||a.scrollIntoView({behavior:"smooth"})},children:c.map((e,c)=>"tooltip"===e?(0,n.jsx)(o,{position:i,color:a,textColor:r,backgroundColor:t,className:l?"flex":"hidden group-hover:flex",children:s.text},"tooltip-".concat(c)):(0,n.jsx)("div",{className:"h-2 w-2 border border-solid hover:cursor-pointer \n          ".concat("left"===i?"mr-12 ml-2":"mr-2 ml-12"," border-").concat(a,"/60\n          bg-transparent group-hover:bg-").concat(a)},"dot-".concat(c)))})}function x(e){let{color:t,gap:a,position:l}=e;return(0,n.jsx)("div",{className:"w-[6px] border-x border-solid ".concat(a?"grow-[6]":"grow","\n      ").concat("left"===l?"mr-12 ml-2":"mr-2 ml-12","\n      border-").concat(t,"/35")})}var m=a(6463),u=a(1470),f=a(1633);function h(e){let t=(0,m.useRouter)(),a=(0,s.useLocale)(),i=(0,m.usePathname)(),r=(0,s.useTranslations)("sections.banner"),{isOpen:c}=e,o={en:{flag:"flagpack:us",name:"English"},pt:{flag:"flagpack:br",name:"Portugu\xeas"}},d=e=>{a!==e&&(i="/".concat(e,"/").concat(i.substring(4)),localStorage.setItem("lang",e),t.push(i))};return(0,n.jsxs)("div",{className:"flex flex-col ".concat(c?"backdrop-blur-sm":""),children:[(0,n.jsxs)("button",{className:"h-8 flex flex-row items-center hover:cursor-pointer border hover:underline\n      border-white/50","aria-label":r("showLanguageOptions"),children:[(0,n.jsx)("div",{"aria-hidden":!0,className:"px-1.5 py-0.5",children:(0,n.jsx)(u.I,{icon:"material-symbols:language",width:22,className:"inline text-white/85"})}),(0,n.jsx)("div",{className:"border-l border-inherit w-1 h-full"}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-center bg-transparent      ","aria-label":"".concat(r("currentLanguage"),": ").concat(o[a].name),children:[(0,n.jsxs)("span",{className:"inline-flex flex-row items-center px-0.5",children:[(0,n.jsx)(u.I,{icon:o[a].flag,width:22,className:"inline mr-1"}),a.toLocaleUpperCase()]}),(0,n.jsx)(u.I,{icon:"mdi:chevron-down",width:22,className:"inline transition-all transform ".concat(c?"rotate-180":"")})]})]}),c&&(0,n.jsx)("div",{className:"flex flex-col items-center",children:f.E3.locales.map(e=>(0,n.jsx)(l.Fragment,{children:e!==a&&(0,n.jsxs)("button",{className:"h-8 flex flex-row items-center justify-center w-full py-0.5 border-x border-b border-white/50 hover:cursor-pointer hover:underline","aria-label":"".concat(r("switchTo")," ").concat(o[e].name),onClick:()=>d(e),children:[(0,n.jsx)(u.I,{icon:o[e].flag,width:22,className:"mr-1 inline"}),e.toLocaleUpperCase()]})},"option-".concat(e)))})]})}function p(e){let{color:t,className:a,isOpen:l,position:s,textColor:i}=e;return(0,n.jsx)("div",{className:"".concat(null!=a?a:"","\n      absolute flex-row items-center ").concat("left"===s?"left-2":"right-2","\n      text-").concat(null!=i?i:t),children:("left"===s?["line","textbox"]:["textbox","line"]).map((t,a)=>"textbox"===t?(0,n.jsx)(h,{isOpen:l},"tooltip-textbox-".concat(a)):(0,n.jsx)(r,{...e},"tooltip-line-".concat(a)))})}function b(e){let{color:t,expandAll:a,position:s,textColor:i}=e,r="left"===s?["dot","languageSelector"]:["languageSelector","dot"],[c,o]=(0,l.useState)(!0);return(0,l.useEffect)(()=>o(!1),[]),(0,n.jsx)("a",{className:"group relative flex flex-row items-center hover:cursor-pointer\n      ".concat("left"===s?"justify-start":"justify-end"),onClick:()=>o(e=>!e),children:r.map((e,l)=>"languageSelector"===e?(0,n.jsx)(p,{position:s,color:t,textColor:i,isOpen:c,className:a?"flex":"hidden group-hover:flex"},"tooltip-".concat(l)):(0,n.jsx)("div",{className:"h-2 w-2 border border-solid hover:cursor-pointer \n            ".concat("left"===s?"mr-12 ml-2":"mr-2 ml-12"," border-").concat(t,"/60\n            bg-transparent group-hover:bg-").concat(t)},"dot-".concat(l)))})}function j(e){let{className:t,color:a,gap:s,items:i,languageSelector:r,position:c,showOnSmall:o}=e;return(0,n.jsxs)("nav",{className:"".concat(o?"flex":"hidden sm:flex","\n      flex-col justify-around items-center z-10\n      ").concat(null!=t?t:""),children:[(0,n.jsx)(x,{color:a,position:c,gap:s}),i.map((t,s)=>(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(d,{item:t,...e}),(0,n.jsx)(x,{color:a,position:c})]},"vertical-nav-item-".concat(t.id))),r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...e}),(0,n.jsx)(x,{color:a,position:c})]})]})}var g=a(9065);function v(e){let{size:t,top:a,left:l}=e,s=Math.random(),i="";if(("random"===e.animate||void 0===e.animate)&&s<=.34){let t;let a=e.animationDuration;"random"!==a&&a||(a=["slow","medium","fast"][(0,g.XF)(0,3)]),t="fast"===a?"animate-duration-[1400ms]":"medium"===a?"animate-duration-[1800ms]":"animate-duration-[2000ms]",i="animate-fade animate-infinite animate-ease-in\n      animate-alternate-reverse ".concat(t)}let r="bg-white/80";return s>=.667&&s<.778?r="bg-pink-400/80":s>=.778&&s<.889?r="bg-sky-500/80":s>=.889&&(r="bg-yellow-200/80"),(0,n.jsx)("div",{style:{height:null!=t?t:1,width:null!=t?t:1,top:null!=a?a:0,left:null!=l?l:0},className:"absolute ".concat(r," rounded-full ").concat(i)})}function w(e){let{width:t,height:a}=e,l=()=>Math.max(t,a);return(0,n.jsxs)("div",{id:"banner-starry-sky","aria-hidden":!0,className:"w-full h-full absolute top-0 left-0 z-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600",children:[[...Array(Math.floor(1.2*l()))].map((e,l)=>(0,n.jsx)(v,{id:"star-sm-".concat(l+1),size:1,top:(0,g.XF)(0,a-1),left:(0,g.XF)(0,t-1)},"star-sm-".concat(l+1))),[...Array(Math.floor(.3*l()))].map((e,l)=>(0,n.jsx)(v,{id:"star-md-".concat(l+1),size:2,top:(0,g.XF)(0,a-1),left:(0,g.XF)(0,t-1)},"star-md-".concat(l+1))),[...Array(Math.floor(.02*l()))].map((e,l)=>(0,n.jsx)(v,{id:"star-lg-".concat(l+1),size:3,top:(0,g.XF)(0,a-1),left:(0,g.XF)(0,t-1)},"star-lg-".concat(l+1)))]})}function N(e){let{className:t}=e,a=(0,s.useTranslations)("sections.banner"),l=[{url:f.ET,icon:"mdi:linkedin",ariaLabel:"LinkedIn",animationDuration:"animate-duration-[1000ms]"},{url:f.Dj,icon:"mdi:github",title:"GitHub",animationDuration:"animate-duration-[1500ms]"},{url:"mailto:".concat(f.Do),icon:"basil:gmail-solid",title:a("email"),animationDuration:"animate-duration-[2000ms]"}];return(0,n.jsx)("nav",{className:"flex flex-row gap-3 mt-4",children:l.map(e=>(0,n.jsx)("a",{href:e.url,target:"_blank","aria-label":e.ariaLabel,children:(0,n.jsx)(u.I,{"aria-label":"LinkedIn Logo",icon:e.icon,width:45,className:"text-white/85 \n            hover:cursor-pointer hover:text-white hover:scale-105\n            ".concat(e.animationDuration," ").concat(t)})},e.url))})}function y(e,t){let[a,n]=(0,l.useState)(!1),s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{t=!t||t<0?0:Math.floor(t),s.current=new IntersectionObserver(e=>{let[t]=e;return n(t.isIntersecting)},{rootMargin:void 0!==t?"0px 0px -".concat(t,"px"):void 0})},[s,t]),(0,l.useEffect)(()=>(s&&s.current&&e.current&&s.current.observe(e.current),()=>{s&&s.current&&s.current.disconnect()}),[s,e]),a}function k(e){let{componentRef:t,items:a}=e,r=(0,s.useTranslations)("sections.banner")("subtitle"),c="__".concat(r.replaceAll(" ","_"),"__"),o=y(t,50),[d,x]=(0,l.useState)(!1),[m,u]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[a,n]=(0,l.useState)({width:0,height:0});return(0,l.useEffect)(()=>{if(!e.current)return;let l=new ResizeObserver(()=>{let l={width:e.current?e.current.offsetWidth:a.width,height:e.current?e.current.offsetHeight:a.height},s=Math.abs(a.width-l.width)>t,i=Math.abs(a.height-l.height)>t;(s||i)&&n(l)});return l.observe(e.current),()=>l.disconnect()},[e,t,a.width,a.height,n]),[a.width,a.height]}(t,50),h=(0,l.useMemo)(()=>(0,n.jsx)(w,{width:m,height:u}),[m,u]);return(0,l.useEffect)(()=>{o&&!d&&x(!0)},[d,o]),(0,n.jsxs)("section",{id:"banner",ref:t,className:"min-h-dvh flex relative text-white/95 pt-8 pb-4 lg:pt-12 px-8 lg:px-16",children:[h,(0,n.jsx)("div",{id:"banner-color-filter","aria-hidden":!0,className:"bg-black/25 w-full h-full absolute top-0 left-0 z-0"}),(0,n.jsxs)("div",{id:"banner-body",className:"flex flex-col z-10",children:[(0,n.jsx)("h1",{className:"text-7xl mb-1 font-bold ".concat(f.yA.className," hyphens-manual"),children:f.k7.toLocaleUpperCase()}),(0,n.jsx)(i,{ariaLabel:r,className:"text-3xl mb-4 ".concat(f.yA.className," break-all"),animate:d,children:c}),(0,n.jsx)(N,{className:d?"animate-fade":""})]}),(0,n.jsx)(j,{id:"banner-nav",gap:!0,expandAll:!0,showOnSmall:!0,languageSelector:!0,items:a,position:"right",color:"white",textColor:"white",className:"absolute right-0 bottom-0 h-full"})]})}var C=a(6648);function T(e){let{src:t,size:a,alt:s,ariaLabel:i}=e,[r,c]=(0,l.useState)(!1);return(0,n.jsx)("div",{style:{width:a,height:a},className:"relative flex items-center justify-center rounded-full overflow-clip\n      border-8 border-white/95 drop-shadow-md m-0 p-0 ".concat(r?"bg-coffee/75":"bg-white"),"aria-label":null!=i?i:"Avatar",children:r?(0,n.jsx)("span",{className:"text-white/55 top-1/2 left-1/2 text-7xl",children:e.alt}):(0,n.jsx)(C.default,{src:t,width:a,height:a,alt:s,className:"absolute",onError:()=>c(!0)})})}function E(e){var t;let{children:a,className:l,decorationClassName:s}=e,i=null!==(t=e.component)&&void 0!==t?t:"h2";return(0,n.jsxs)("div",{className:"flex flex-row items-end\n      ".concat("h2"===i?"text-xl mt-8 mb-12":"text-2xl mt-8 mb-4","\n      ").concat(null!=l?l:""),children:[(0,n.jsxs)(i,{children:[a.toLocaleUpperCase(),(0,n.jsx)("span",{"aria-hidden":!0,className:"block h-1 w-auto\n          ".concat(null!=s?s:"bg-blueprint")})]}),(0,n.jsx)("span",{"aria-hidden":!0,className:"h-1 ".concat("h2"===i?"w-3":"w-2","\n        ").concat(null!=s?s:"bg-blueprint")})]})}function _(e){let{animate:t}=e,a=[{url:f.ET,icon:"mdi:linkedin",text:f.ET.substring(8)},{url:f.Dj,icon:"mdi:github",text:f.Dj.substring(8)},{url:"mailto:".concat(f.Do),icon:"mdi:gmail",text:f.Do}];return(0,n.jsx)("nav",{className:"py-4 text-coffee",children:a.map((e,a)=>{var l;return(0,n.jsxs)("a",{href:e.url,target:"_blank",className:"flex items-center justify-center gap-1\n          text-sm hover:underline py-0.5\n          ".concat(t?a%2==0?"animate-fade-right":"animate-fade-left":""),children:[(0,n.jsx)(u.I,{icon:e.icon,width:18}),null!==(l=e.text)&&void 0!==l?l:e.url]},e.url)})})}function S(e){let{componentRef:t,items:a}=e,i=(0,s.useTranslations)("sections.about"),[r,c]=(0,l.useState)(!1),o=y(t,50);return(0,l.useEffect)(()=>{o&&!r&&c(!0)},[r,o]),(0,n.jsxs)("section",{ref:t,id:"about",className:"min-h-dvh flex flex-row bg-cream",children:[(0,n.jsx)(j,{id:"about-nav",items:a,position:"left",color:"latte",textColor:"coffee",backgroundColor:"cream"}),(0,n.jsxs)("div",{id:"about-body",className:"grow flex flex-col pt-2 pb-10",children:[(0,n.jsx)(E,{decorationClassName:"bg-blueprint",className:"ml-6 md:ml-0",children:i("title")}),(0,n.jsxs)("div",{className:"grow flex items-center gap-8  \n          justify-evenly flex-col md:flex-row ",children:[(0,n.jsxs)("div",{id:"about-profile",className:"flex flex-col items-center px-4\n            ".concat(r?"animate-fade-right":""),children:[(0,n.jsx)(T,{className:"mb-4",src:"/assets/img/profile.jpg",size:200,alt:"WA"}),(0,n.jsx)(_,{animate:r})]}),(0,n.jsx)("div",{id:"about-content",children:(0,n.jsx)("article",{className:"md:px-12 px-6 max-w-[1200px]\n              ".concat(r?"animate-fade-left":""),children:i("content").split("\n").map((e,t)=>(0,n.jsx)("p",{className:"text-md pb-4 text-justify",children:e},"about-paragraph-".concat(t+1)))})})]})]})]})}function U(e){let{title:t,institution:a,description:l,titleUrl:s,institutionUrl:i,years:r}=e,c=(null!=l?l:"").split("\n");return(0,n.jsxs)("article",{className:"pb-6",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between mb-2 gap-3",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"text-md font-semibold",children:s?(0,n.jsx)("a",{className:"hover:underline",href:s,target:"_blank",children:t}):t}),(0,n.jsx)("p",{className:"text-md",children:i?(0,n.jsx)("a",{className:"hover:underline",href:i,target:"_blank",children:a}):a})]}),(0,n.jsx)("span",{className:"text-sm italic",children:r})]}),c.length<=1?(0,n.jsx)("p",{className:"ml-5",children:c[0]}):(0,n.jsx)("ul",{className:"list-[square] ml-5 marker:text-blueprint",children:c.map((e,t)=>""!=e&&(0,n.jsx)("li",{className:"list-inside",children:e},"".concat(e,"-").concat(t)))})]})}function L(e){let{className:t,subsection:a}=e,l=(0,s.useTranslations)("sections.".concat(a)),i=f.kz.filter(e=>e.id===a)[0],r=i.data;return(0,n.jsx)("section",{className:"flex flex-col items-center ".concat(null!=t?t:""),id:"cv-".concat(a),children:(0,n.jsxs)("div",{className:"max-w-[800px] w-full",children:[(0,n.jsx)(E,{decorationClassName:"bg-silver",className:"mb-6",children:l("title").toLocaleUpperCase()}),r.map(e=>{var t,s,r;return(0,n.jsx)(U,{id:"cv-".concat(a,"-item-").concat(e.id),title:null!==(t=e.title)&&void 0!==t?t:l("".concat(e.id,".title")),institution:null!==(s=e.institution)&&void 0!==s?s:l("".concat(e.id,".institution")),titleUrl:e.titleUrl,institutionUrl:e.institutionUrl,years:null!==(r=e.years)&&void 0!==r?r:l("".concat(e.id,".years")),description:"publications"!==i.id?l("".concat(e.id,".description")):void 0},"cv-".concat(a,"-item-").concat(e.id))})]})})}function D(e){let{className:t}=e,a=(0,s.useTranslations)("sections.cv"),l=(0,s.useLocale)();return(0,n.jsx)("article",{className:"flex flex-col items-center ".concat(t),children:(0,n.jsxs)("div",{className:"w-full max-w-[800px] pt-8",children:[(0,n.jsx)(E,{component:"span",className:"text-base",decorationClassName:"bg-cream",children:a("downloadPDF")}),(0,n.jsx)("a",{role:"button",download:"Wendell_Avila_CV_".concat(l),href:"".concat("https://raw.githubusercontent.com/wendellavila/wendellavila/main/assets/files","/CV_").concat(l,".pdf"),target:"_blank",className:"flex flex-row",children:(0,n.jsxs)("div",{className:"py-1 inline-flex flex-row items-center justify-center font-sm hover:underline",children:[(0,n.jsx)(u.I,{icon:"formkit:download",width:16,className:"mr-2 font-bold"}),a("clickToDownload")]})})]})})}function I(e){let{componentRef:t,items:a}=e,s=y(t,50),[i,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{s&&!i&&r(!0)},[i,s]),(0,n.jsxs)("section",{ref:t,id:"cv",className:"min-h-dvh flex flex-row bg-white",children:[(0,n.jsx)("div",{id:"cv-body",className:"grow flex flex-col justify-center pt-2 pb-10 px-6 md:pr-0",children:(0,n.jsxs)("div",{className:"inline-grid gap-y-4 gap-x-20 lg:grid-cols-2",children:[(0,n.jsx)(L,{subsection:"education",className:"order-1 ".concat(i?"animate-fade-right":"")}),(0,n.jsx)(L,{subsection:"experience",className:"order-2 lg:order-3 ".concat(i?"animate-fade-left":"")}),(0,n.jsx)(L,{subsection:"publications",className:"order-3 lg:order-2 ".concat(i?"animate-fade-right":"")}),(0,n.jsx)(L,{subsection:"courses",className:"order-4 ".concat(i?"animate-fade-left":"")}),(0,n.jsx)(D,{id:"cv-download",className:"order-5 animate-fade-right ".concat(i?"animate-fade-left":"")})]})}),(0,n.jsx)(j,{id:"cv-nav",items:a,position:"right",color:"silver",textColor:"slate-500",backgroundColor:"white"})]})}function R(e){let{animate:t,className:a,children:s}=e,i=Math.round(e.percentage>100?100:e.percentage<0?0:e.percentage),[r,c]=(0,l.useState)(i);return(0,l.useEffect)(()=>c(0),[t]),(0,l.useEffect)(()=>{if(t){let e=setTimeout(()=>{r<i&&c(e=>e+.4)},(100-(i-r))/i);return()=>clearTimeout(e)}},[t,r]),(0,n.jsxs)("div",{className:"flex flex-row gap-x-4 items-center flex-nowrap ".concat(null!=a?a:""),children:[(0,n.jsx)("div",{className:"w-1/3 flex flex-row items-center gap-x-2",children:s}),(0,n.jsx)("div",{"aria-label":"".concat(i,"%"),className:"bg-slate-50/20 h-3 w-full",children:(0,n.jsx)("div",{style:{width:"".concat(r,"%")},className:"h-full bg-cream/95"})})]})}function F(e){let{componentRef:t,items:a}=e,i=(0,s.useTranslations)("sections.skills"),r=y(t,50),[c,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{r&&!c&&o(!0)},[c,r]),(0,n.jsxs)("section",{ref:t,id:"skills",className:"min-h-dvh flex flex-row bg-blueprint text-slate-50",children:[(0,n.jsx)(j,{id:"skills-nav",items:a,position:"left",color:"sky-100",textColor:"slate-100",backgroundColor:"blueprint"}),(0,n.jsxs)("div",{id:"skills-body",className:"grow pt-2 pb-16 px-6 md:pr-12 md:pl-0 flex flex-col",children:[(0,n.jsx)(E,{decorationClassName:"bg-cream",children:i("title")}),(0,n.jsx)("div",{className:"grow flex flex-row gap-x-0 md:gap-x-24 gap-y-8 flex-wrap items-center justify-evenly",children:f.ZU.map(e=>(0,n.jsxs)("div",{id:"skills-".concat(e.id),className:"w-full lg:w-[800px]",children:[(0,n.jsx)("h3",{className:"font-semibold mb-2",children:i(e.id)}),e.data.map(t=>{var a;return(0,n.jsxs)(R,{percentage:t.percentage,animate:c,children:[t.icon&&(0,n.jsx)(u.I,{icon:t.icon,"aria-hidden":!0,className:"flex-shrink-0"}),(0,n.jsx)("span",{children:null!==(a=t.title)&&void 0!==a?a:i("".concat(t.id,".title"))})]},"skills-".concat(e.id,"-").concat(t.id))})]},"skills-".concat(e.id)))})]})]})}function z(e){let{className:t,repoUrl:a,deployUrl:l}=e,i=(0,s.useTranslations)("sections.projects"),r=[{icon:"mdi:github",href:a,text:i("githubRepo")},{icon:"carbon:executable-program",href:l,text:i("liveProject")}];return(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full\n      bg-blueprint/45 backdrop-blur-md\n      group-hover:flex hidden flex-row justify-evenly items-center\n      \n      ".concat(null!=t?t:""),children:r.map(e=>e.href?(0,n.jsxs)("a",{href:e.href,target:"_blank",className:"flex flex-col items-center text-sm hover:underline text-white/85 hover:text-white",children:[(0,n.jsx)(u.I,{icon:e.icon,width:50,"aria-hidden":!0,className:"drop-shadow-sm"}),(0,n.jsx)("span",{className:"drop-shadow-md",children:e.text})]},"project-item-link-".concat(e.href)):void 0)})}function A(e){let{className:t,title:a,image:l,repoUrl:i,deployUrl:r,description:c}=e,o=(0,s.useTranslations)("sections.projects");return(0,n.jsxs)("article",{className:"flex flex-col w-96 text-center mb-2 ".concat(null!=t?t:""),children:[(0,n.jsxs)("button",{className:"z-10 group flex flex-col items-center gap-4",children:[(0,n.jsx)("div",{className:"bg-cream flex rotate-3 transition duration-75\n          group-hover:scale-[1.02]",children:(0,n.jsx)("div",{className:"p-3 -rotate-3 bg-blueprint",children:(0,n.jsx)("div",{className:"p-3 shadow-md bg-white",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(C.default,{src:l,width:300,height:200,alt:"".concat(a," - ").concat(o("screenshot")),className:"w-[300px] h-[200px] bg-white border-white"}),(0,n.jsx)(z,{repoUrl:i,deployUrl:r})]})})})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"bg-cream mb-1 px-2 text-lg leading-relaxed",children:a})})]}),c&&(0,n.jsx)("p",{className:"text-md mt-1",children:c})]})}function M(e){let{componentRef:t,items:a}=e,i=(0,s.useTranslations)("sections.projects"),r=y(t,50),[c,o]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{r&&!c&&o(!0)},[c,r]),(0,n.jsxs)("section",{ref:t,id:"projects",className:"min-h-dvh flex flex-row bg-white",children:[(0,n.jsxs)("div",{id:"projects-body",className:"grow pt-2 pb-16 px-6 md:pl-12 flex flex-col",children:[(0,n.jsx)(E,{decorationClassName:"bg-silver",children:i("title").toLocaleUpperCase()}),(0,n.jsx)("div",{className:"grow flex flex-row flex-wrap gap-8 justify-center px-8",children:f.o8.map(e=>(0,n.jsx)(A,{id:"projects-item-".concat(e.title),title:e.title,image:e.image,repoUrl:e.repoUrl,deployUrl:e.deployUrl,description:i("".concat(e.title,".description")),className:c?"animate-fade-down":""},"projects-item-".concat(e.title)))})]}),(0,n.jsx)(j,{id:"projects-nav",items:a,position:"right",color:"silver",textColor:"slate-500",backgroundColor:"white"})]})}function O(){let e=(0,s.useTranslations)("sections.footer"),t=new Date;return(0,n.jsxs)("footer",{id:"footer",className:"flex flex-row py-3 px-5 justify-between flex-wrap gap-y-2 bg-neutral-800",children:[(0,n.jsxs)("div",{id:"footer-copyright",className:"text-gray-100 flex flex-col gap-y-1",children:[(0,n.jsx)("a",{href:f.yo,className:"hover:underline font-bold text-sm hyphens-manual",children:f.k7})," ",(0,n.jsxs)("span",{className:"mr-1 text-xs",children:["\xa9 ",t.getFullYear()]})]}),(0,n.jsxs)("span",{id:"footer-source",className:"text-xs text-gray-300",children:[e("madeWith")," ",(0,n.jsx)("a",{href:"https://nextjs.org/",className:"underline",children:"Next.js"}),". ",e("sourceCodeAvailableOn")," ",(0,n.jsx)("a",{href:f.Hn,className:"underline",children:"GitHub"}),"."]})]})}function X(){let e=(0,l.useRef)(null),t=(0,l.useRef)(null),a=(0,l.useRef)(null),i=(0,l.useRef)(null),r=(0,l.useRef)(null),c=(0,s.useTranslations)("sections"),o=[{id:"banner",text:c("banner.title"),ref:e},{id:"about",text:c("about.title"),ref:t},{id:"cv",text:c("cv.title"),ref:a},{id:"skills",text:c("skills.title"),ref:i},{id:"projects",text:c("projects.title"),ref:r}];return(0,n.jsxs)("div",{className:"flex flex-col overflow-x-hidden",children:[(0,n.jsx)(k,{componentRef:e,items:o}),(0,n.jsx)(S,{componentRef:t,items:o}),(0,n.jsx)(I,{componentRef:a,items:o}),(0,n.jsx)(F,{componentRef:i,items:o}),(0,n.jsx)(M,{componentRef:r,items:o}),(0,n.jsx)(O,{})]})}}},function(e){e.O(0,[419,161,489,389,971,23,744],function(){return e(e.s=2850)}),_N_E=e.O()}]);