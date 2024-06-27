(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{3878:function(t,e,n){var a={"./translations_en.json":[3548,548],"./translations_pt.json":[157,157]};function o(t){if(!n.o(a,t))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=a[t],o=e[0];return n.e(e[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(a)},o.id=3878,t.exports=o},1981:function(t,e,n){"use strict";n.d(e,{tw:function(){return E},r8:function(){return N},s9:function(){return P},eN:function(){return D},p6:function(){return R},cz:function(){return C},YU:function(){return L},c$:function(){return U},XF:function(){return x},BX:function(){return k},Yv:function(){return _}});var a=n(8087),o=n(1438),r=n.n(o),c=n(3812),l=n.n(c),i=n(1633),s=n(3244);let u={vertical:"middle",horizontal:"left",wrapText:!0,shrinkToFit:!1,indent:0,readingOrder:"ltr",textRotation:0},d={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},f={bold:!0,color:{argb:"FFFFFFFF"}},p={type:"pattern",pattern:"solid",fgColor:{argb:"FF4F6525"}},g={type:"pattern",pattern:"solid",fgColor:{argb:"FF76933C"}},h={color:{argb:"FFDC2626"}},m={color:{argb:"FF16A34A"}},y={type:"pattern",pattern:"solid",fgColor:{argb:"FFF9F4F1"}},w={type:"pattern",pattern:"solid",fgColor:{argb:"FFF2E6DE"}};function k(t){return t.protocol.filter(t=>"HIGH"===t.status).length>0?"HIGH":"NO_ALERT"}function b(t){if("suppliers"in t){let e={type:"",features:[]};e.type="FeatureCollection";let n=[];return t.suppliers.forEach(t=>{e.features.push(b(t)),n=n.concat(t.coordinates)}),e.bbox=O(n),e}return"coordinates"in t?{type:"Feature",geometry:{type:"Polygon",coordinates:[t.coordinates]},bbox:O(t.coordinates),properties:{farmId:t.farmId,city:t.city,state:t.state,area:t.area}}:{type:"FeatureCollection",features:[]}}function F(t){return(t<10?"0":"")+t}function v(t,e){let n=new Date(null!=e?e:"");isNaN(n.getDate())&&(n=new Date);let a=n.getFullYear()+F(n.getMonth()+1)+F(n.getDate())+"_"+F(n.getHours())+F(n.getMinutes())+F(n.getSeconds()),o="";return"suppliers"in t?o="".concat(encodeURI(t.orderNumber.replace("/","-")),"_"):"coordinates"in t&&(o="".concat(encodeURI(t.farmId),"_")),"".concat(o).concat(a)}function I(t,e,n){let a=document.createElement("a");a.href=t,a.download="".concat(e,".").concat(n),a.click()}function P(t,e){let n=v(t,e),a=b(t);I("data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(a))),n,"json")}function D(t,e){let n=v(t,e),a=b(t),o=l()(a);o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"	",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\n",a="",o="",r=t.slice(1,-1).split(/>\s*</);"?"==r[0][0]&&(a+="<"+r.shift()+">"+n);for(let t=0;t<r.length;t++){let c=r[t];"/"==c[0]&&(o=o.slice(e.length)),a+=o+"<"+c+">"+n,"/"!=c[0]&&"/"!=c[c.length-1]&&-1==c.indexOf("</")&&(o+=e)}return a}(o),I(o="data:application/xml;chatset=utf-8,".concat(o),n,"kml")}async function N(t,e,n){let a=v(t,e),o=new(r()).Workbook;!function t(e){let n;let{data:a,workbook:o,i18n:r,lang:c,index:l}=e;if("suppliers"in a){let e=[r("geolocationPanel.farmId"),r("reportsPanel.status"),r("geolocationPanel.city"),r("geolocationPanel.state"),r("geolocationPanel.area"),r("geolocationPanel.coordinates"),"WKT"];(n=o.addWorksheet(encodeURI(a.orderNumber.replace("/","-")).slice(0,31))).columns=[{key:"farmId",header:e[0],width:50},{key:"status",header:e[1],width:15},{key:"city",header:e[2],width:35},{key:"state",header:e[3],width:8},{key:"area",header:e[4],width:15},{key:"coordinates",header:e[5],width:250},{key:"wkt",header:e[6],width:250}],n.duplicateRow(1,2,!0),n.getRow(1).values=["".concat(i.ub,"  -  ").concat(r("navbar.title"))],n.getRow(2).values=["".concat(r("orderDetails.orderNumber"),":  ").concat(a.orderNumber,"        ")+"".concat(r("orderDetails.date"),":  ").concat(R(a.orderDate),"       ")+"".concat(r("orderDetails.volume"),": ").concat(a.volume,"        ")+"".concat(r("orderDetails.supplierNumber"),": ").concat(a.suppliers.length)],n.mergeCells(1,1,1,7),n.mergeCells(2,1,2,7),a.suppliers.forEach((e,a)=>{var l;let i=r("reportsPanel.".concat("HIGH"===k(e)?"statusLocked":"statusUnlocked"));n.addRow({farmId:e.farmId,status:i,city:e.city,state:e.state,area:+e.area,coordinates:JSON.stringify(e.coordinates),wkt:(l=e.coordinates,"POLYGON((".concat(l.map(t=>"".concat(t[0]," ").concat(t[1])).join(", "),"))"))}),t({data:e,workbook:o,i18n:r,index:a+1,lang:c})})}else"coordinates"in a&&((n=o.addWorksheet(encodeURI("".concat(l?l+"-":"").concat(a.farmId)).slice(0,31))).columns=[{key:"id",header:r("reportsPanel.id"),width:40},{key:"status",header:r("reportsPanel.status"),width:15},{key:"name",header:r("reportsPanel.name"),width:50},{key:"institution",header:r("reportsPanel.institution"),width:50},{key:"details",header:r("reportsPanel.details"),width:90}],n.duplicateRow(1,2,!0),n.getRow(1).values=["".concat(i.ub,"  -  ").concat(r("navbar.title"))],n.getRow(2).values=["Farm Id:  ".concat(a.farmId)],n.mergeCells(1,1,1,5),n.mergeCells(2,1,2,5),a.protocol.forEach(t=>{var a;let o="HIGH"===t.status;n.addRow({id:t.type,status:r("reportsPanel.".concat(o?"statusLocked":"statusUnlocked")),name:r("reportsPanel.protocolItems.".concat(t.type,".name")),institution:r("reportsPanel.protocolItems.".concat(t.type,".institution")),details:(null!==(a=e.lang)&&void 0!==a?a:s.E.defaultLocale)==="pt"?t.details:r("reportsPanel.protocolItems.".concat(t.type,".").concat(o?"lockedDetails":"unlockedDetails"))+(o?' Original Details: "'.concat(t.details,'"'):"")})}));n&&function(t,e){t.eachRow({includeEmpty:!1},(t,n)=>{t.eachCell({includeEmpty:!1},(e,a)=>{e.border=d,e.alignment=u,n<=3?(t.height=25,e.font=f,n<=2?e.fill=p:3===n&&(e.fill=g)):n%2==0?e.fill=w:e.fill=y});let a=t.getCell("status");a.value===e("reportsPanel.statusUnlocked")&&(a.font=m),a.value===e("reportsPanel.statusLocked")&&(a.font=h)})}(n,e.i18n)}({data:t,workbook:o,i18n:await j(n,"reportPage.labels"),lang:n}),o.xlsx.writeBuffer().then(t=>{let e=new Blob([t],{type:"application/octet-stream"});I(URL.createObjectURL(e),a,"xlsx")})}function C(t){let e=new Date(t);if(isNaN(e.getDate()))return"";let n=F(e.getDate()),a=F(e.getMonth()+1),o=e.getFullYear(),r=F(e.getHours()),c=F(e.getMinutes()),l=F(e.getSeconds());return"".concat(n,"/").concat(a,"/").concat(o," ").concat(r,":").concat(c,":").concat(l)}function R(t){return"".concat(t.substring(6,8),"/").concat(t.substring(4,6),"/").concat(t.substring(0,4))}function E(){return Number(new Date().toISOString().slice(0,10).replace(/-/g,""))}function x(t,e,n){let a=0;if(void 0!==n){var o;let t;o=Math.round(o=n),a=(t=1e4*Math.sin(o++))-Math.floor(t)}else a=Math.random();return Math.floor(a*(e-t))+t}function M(t){let e=Math.floor(t.length/2);return t.sort((t,e)=>t-e),t[e]}function O(t){let e=t.map(t=>t[0]),n=t.map(t=>t[1]);return[Math.min(...e),Math.min(...n),Math.max(...e),Math.max(...n)]}function U(t){let e=t.map(t=>t[0]),n=t.map(t=>t[1]);return[M(e),M(n)]}function _(t){return"number"==typeof t[0]?{lat:t[1],lng:t[0]}:t.map(t=>({lat:t[1],lng:t[0]}))}function L(){for(let t of navigator.languages){let e=t.substring(0,2);if(s.E.locales.includes(e))return e}return s.E.defaultLocale}async function H(t){return(await n(3878)("./translations_".concat(t,".json"))).default}async function j(t,e){return t||(t=s.E.defaultLocale),(0,a.createTranslator)({locale:t,messages:await H(t),namespace:e}).raw}}}]);