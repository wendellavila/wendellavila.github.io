(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{93878:function(e,t,o){var s={"./translations_en.json":[23548,548],"./translations_pt.json":[30157,157]};function a(e){if(!o.o(s,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],a=t[0];return o.e(t[1]).then(function(){return o.t(a,19)})}a.keys=function(){return Object.keys(s)},a.id=93878,e.exports=a},89229:function(e,t,o){"use strict";o.d(t,{m:function(){return r}});var s=o(57437),a=o(1633);function r(e){let{className:t}=e;return(0,s.jsxs)("article",{id:"copyright",className:"flex flex-row flex-wrap items-center justify-center text-center text-sm ".concat(null!=t?t:""),children:[(0,s.jsx)("span",{className:"mt-0 flex flex-row justify-center",children:"\xa9 ".concat(new Date().getFullYear())}),(0,s.jsx)("a",{className:"no-underline hover:underline text-inherit ml-1",target:"_blank",href:a.X8,children:a.ub.toUpperCase()})]})}},52179:function(e,t,o){"use strict";o.d(t,{$:function(){return l}});var s=o(57437),a=o(2265),r=o(16463),n=o(18087),i=o(19004),u=o(91651),d=o(69129),c=o(1633);function l(){let e=(0,r.useRouter)(),t=(0,n.useLocale)(),o=(0,r.usePathname)(),l=[{lang:"en",name:"English",icon:"flagpack:gb-ukm"},{lang:"pt",name:"Portugu\xeas",icon:"flagpack:br"}],[p,A]=(0,a.useState)(!1);return(0,a.useEffect)(()=>A(!0),[]),p?(0,s.jsx)(i.Z,{name:"language",variant:"outlined",size:"small",value:t,onChange:t=>{o="/".concat(t.target.value,"/").concat(o.substring(4)),t.preventDefault(),localStorage.setItem("lang",t.target.value),e.push(o)},children:l.map((e,t)=>(0,s.jsxs)(u.Z,{value:e.lang,children:[(0,s.jsx)(d.I,{icon:e.icon,width:20,className:"mr-2"}),e.name]},t))}):(0,s.jsx)("nav",{className:"flex flex-col items-center gap-y-2 px-3 py-2  border border-solid rounded border-gray-300 animate-fade animate-delay-1000",children:l.map((e,t)=>(0,s.jsxs)("a",{href:"".concat(c.X8,"/").concat(e.lang,"/").concat(o.substring(4)),className:"flex flex-row justify-center flex-wrap no-underline hover:underline text-foreground",children:[(0,s.jsx)(d.I,{icon:e.icon,width:20,className:"mr-1"}),e.name]},t))})}},4984:function(e,t,o){"use strict";o.d(t,{A:function(){return r}});var s=o(57437),a=o(69129);function r(e){let{id:t,children:o,className:r,type:n}=e;return(0,s.jsxs)("article",{id:t,className:"flex flex-row items-center justify-center mt-4 flex-wrap text-center\n      ".concat("success"===n?"text-green-600":"alert"===n?"text-blue-600":"text-red-600"," ").concat(null!=r?r:""),children:[(0,s.jsx)(a.I,{icon:"success"===n?"mdi:success-circle-outline":"mdi:info-outline",width:18,className:"mr-1"}),(0,s.jsx)("span",{className:"break-words text-sm",children:o})]})}},49716:function(e,t,o){"use strict";o.d(t,{L:function(){return l},TokenProvider:function(){return u},TokenProviderReportPage:function(){return d}});var s=o(57437),a=o(2265),r=o(16463);function n(){var e;return null!==(e=localStorage.getItem("eudr_auth_token"))&&void 0!==e?e:sessionStorage.getItem("eudr_auth_token")}function i(){let[e,t]=(0,a.useState)(n());return(0,a.useEffect)(()=>{function e(){t(n())}return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[]),e}function u(e){let{children:t}=e,o=function(){let e=(0,r.useRouter)(),t=(0,r.useParams)().lang,o=i();return(0,a.useEffect)(()=>{o||e.replace("/".concat(t))},[t,o,e]),o}();return(0,s.jsx)(c.Provider,{value:{token:o},children:t})}function d(e){let{children:t}=e,o=function(){let e=(0,r.useRouter)(),t=(0,r.useParams)().lang,o=i(),s=(0,r.useSearchParams)().get("oid");return(0,a.useEffect)(()=>{if(o)s||e.replace("/".concat(t,"/orders"));else{let o=new URLSearchParams;s&&o.set("oid",s),e.replace("/".concat(t,"?").concat(o))}},[t,o,e,s]),o}();return(0,s.jsx)(c.Provider,{value:{token:o},children:t})}let c=(0,a.createContext)({token:null}),l=()=>(0,a.useContext)(c).token},7824:function(e,t,o){"use strict";o.d(t,{V1:function(){return s},lT:function(){return n},l_:function(){return r},u:function(){return a}});let s=[{customerId:"1",customerName:"Customer 1"},{customerId:"2",customerName:"Customer 2"}],a={customerId:"1",customerName:"ADMIN",email:"admin@eudr_next",uid:"1",role:"admin"},r={orders:[{orderNumber:"1/2024",date:"20240101",volume:1100,customerName:"Customer 1"},{orderNumber:"2/2024",date:"20240102",volume:1250,customerName:"Customer 2"}]},n={"1/2024":{orderNumber:"1/2024",orderDate:"20240101",countryCode:"it",customerName:"Customer 1",volume:1100,status:"unlocked",timestamp:"2024-04-16T16:24:00-03:00",suppliers:[{supplierName:"Jo\xe3o da Silva",farmId:"AA-0000000-00000000000000000000000000000000",city:"Muzambinho",state:"MG",area:1234.56,status:"unlocked",lastUpdate:"2023-12-19T11:09:32.000Z",protocol:[{type:"ALERTA_MAPBIOMAS",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com alertas de desmatamento do MapBiomas a partir de 31/12/2020."},{type:"EMBARGO_IBAMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do IBAMA."},{type:"EMBARGO_IBAMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do IBAMA."},{type:"EMBARGO_ICMBIO",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do ICMBio."},{type:"EMBARGO_ICMBIO_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do ICMBIO."},{type:"EMBARGO_SEMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do SEMA-MT."},{type:"EMBARGO_SEMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do SEMA-MT."},{type:"EMBARGO_SLAVERIES_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista suja do Trabalho Escravo."},{type:"PRODES_ANY",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com PRODES a partir de 31/12/2020."},{type:"QUILOMBOS",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com \xe1reas de Quilombos."},{type:"SITUACAO_CAR",status:"NO_ALERT",details:"A propriedade possui CAR com situa\xe7\xe3o ativo ou pendente."},{type:"TERRAS_INDIGENAS",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Terras Ind\xedgenas."},{type:"UNIDADES_CONSERVACAO_APA_WARNING",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Unidade de Conserva\xe7\xe3o."}],coordinates:[[-46.30084111,-21.27463303],[-46.30219446,-21.2755083],[-46.30226539,-21.27426359],[-46.3010884,-21.27579323],[-46.30061954,-21.27628911],[-46.30084111,-21.27463303]]}]},"2/2024":{orderNumber:"2/2024",orderDate:"20240102",countryCode:"uk",customerName:"Customer 2",volume:1250,status:"locked",timestamp:"2024-04-16T16:24:00-03:00",suppliers:[{supplierName:"Jo\xe3o da Silva",farmId:"AA-0000000-00000000000000000000000000000000",city:"Muzambinho",state:"MG",area:1234.56,status:"unlocked",lastUpdate:"2023-12-19T11:09:32.000Z",protocol:[{type:"ALERTA_MAPBIOMAS",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com alertas de desmatamento do MapBiomas a partir de 31/12/2020."},{type:"EMBARGO_IBAMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do IBAMA."},{type:"EMBARGO_IBAMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do IBAMA."},{type:"EMBARGO_ICMBIO",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do ICMBio."},{type:"EMBARGO_ICMBIO_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do ICMBIO."},{type:"EMBARGO_SEMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do SEMA-MT."},{type:"EMBARGO_SEMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do SEMA-MT."},{type:"EMBARGO_SLAVERIES_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista suja do Trabalho Escravo."},{type:"PRODES_ANY",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com PRODES a partir de 31/12/2020."},{type:"QUILOMBOS",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com \xe1reas de Quilombos."},{type:"SITUACAO_CAR",status:"NO_ALERT",details:"A propriedade possui CAR com situa\xe7\xe3o ativo ou pendente."},{type:"TERRAS_INDIGENAS",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Terras Ind\xedgenas."},{type:"UNIDADES_CONSERVACAO_APA_WARNING",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Unidade de Conserva\xe7\xe3o."}],coordinates:[[-46.30084111,-21.27463303],[-46.30219446,-21.2755083],[-46.30226539,-21.27426359],[-46.3010884,-21.27579323],[-46.30061954,-21.27628911],[-46.30084111,-21.27463303]]},{supplierName:"Maria dos Santos",farmId:"AA-0000000-00000000000000000000000000000001",city:"Passos",state:"MG",area:2345,status:"locked",lastUpdate:"2023-12-28T16:26:11.000Z",protocol:[{type:"ALERTA_MAPBIOMAS",status:"HIGH",details:"A propriedade possui sobreposi\xe7\xe3o com alertas de desmatamento do MapBiomas de 0.70 ha com data superior ou igual a 31/12/2020."},{type:"EMBARGO_IBAMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do IBAMA."},{type:"EMBARGO_IBAMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do IBAMA."},{type:"EMBARGO_ICMBIO",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do ICMBio."},{type:"EMBARGO_ICMBIO_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do ICMBIO."},{type:"EMBARGO_SEMA",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com embargo do SEMA-MT."},{type:"EMBARGO_SEMA_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista de embargos do SEMA-MT."},{type:"EMBARGO_SLAVERIES_DOCUMENT",status:"NO_ALERT",details:"O CPF/CNPJ n\xe3o consta na lista suja do Trabalho Escravo."},{type:"PRODES_ANY",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com PRODES a partir de 31/12/2020."},{type:"QUILOMBOS",status:"NO_ALERT",details:"A propriedade n\xe3o possui sobreposi\xe7\xe3o com \xe1reas de Quilombos."},{type:"SITUACAO_CAR",status:"NO_ALERT",details:"A propriedade possui CAR com situa\xe7\xe3o ativo ou pendente."},{type:"TERRAS_INDIGENAS",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Terras Ind\xedgenas."},{type:"UNIDADES_CONSERVACAO_APA_WARNING",status:"NO_ALERT",details:"A Propriedade n\xe3o possui sobreposi\xe7\xe3o com Unidade de Conserva\xe7\xe3o."}],coordinates:[[-46.581764,-20.92652],[-46.571292,-20.923333],[-46.565661,-20.927231],[-46.563125,-20.928073],[-46.568625,-20.928905],[-46.56459,-20.927292],[-46.581764,-20.92652]]}]}}},99065:function(e,t,o){"use strict";o.d(t,{BX:function(){return i},Bu:function(){return u},FC:function(){return l},Ju:function(){return r},m1:function(){return n},p6:function(){return d}});var s=o(18087),a=o(73244);function r(e){return/^\S+@\S+$/.test(e)}function n(e){return e.length>=8}function i(e){return e.protocol.filter(e=>"HIGH"===e.status).length>0?"HIGH":"NO_ALERT"}function u(e){return(e<10?"0":"")+e}function d(e){return"".concat(e.substring(6,8),"/").concat(e.substring(4,6),"/").concat(e.substring(0,4))}async function c(e){return(await o(93878)("./translations_".concat(e,".json"))).default}async function l(e,t){return e||(e=a.E.defaultLocale),(0,s.createTranslator)({locale:e,messages:await c(e),namespace:t}).raw}}}]);