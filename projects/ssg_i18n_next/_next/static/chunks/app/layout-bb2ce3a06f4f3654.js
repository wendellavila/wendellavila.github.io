(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2036:function(e,t,n){Promise.resolve().then(n.bind(n,2612)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.t.bind(n,8775,23))},2612:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{default:function(){return l}});var o=n(2265),a=n(4480);function l(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return o.createElement(a.IntlProvider,r({locale:t},n))}},7082:function(e,t,n){"use strict";var r=n(2265).createContext(void 0);t.IntlContext=r},4480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),o=n(2764),a=n(7082),l=r&&r.__esModule?r:{default:r};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:n,formats:i,getMessageFallback:s,locale:c,messages:u,now:f,onError:d,timeZone:m}=e,[g]=r.useState(()=>new Map),v=r.useMemo(()=>({...o.initializeConfig({locale:c,defaultTranslationValues:n,formats:i,getMessageFallback:s,messages:u,now:f,onError:d,timeZone:m}),messageFormatCache:g}),[n,i,s,c,g,u,f,d,m]);return l.default.createElement(a.IntlContext.Provider,{value:v},t)}},2764:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function r(e){return n(e.namespace,e.key)}function o(e){console.error(e)}t.defaultGetMessageFallback=r,t.defaultOnError=o,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:a,...l}=e;return{...l,messages:n,onError:a||o,getMessageFallback:t||r}},t.joinPath=n},3054:function(){},8775:function(e){e.exports={style:{fontFamily:"'__Archivo_1feccd', '__Archivo_Fallback_1feccd'",fontStyle:"normal"},className:"__className_1feccd"}}},function(e){e.O(0,[785,971,23,744],function(){return e(e.s=2036)}),_N_E=e.O()}]);