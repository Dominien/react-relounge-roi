(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var u=n[l],c=r.base?u[0]+r.base:u[0],s=a[c]||0,d="".concat(c," ").concat(s);a[c]=s+1;var p=t(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var u=r(n,o),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(i[u]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  color: #333;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Main container */\n.roi-calculator {\n  max-width: 800px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n  overflow: hidden;\n  font-family: 'Montserrat', sans-serif;\n}\n\n/* Header */\n.roi-header {\n  text-align: center;\n  color: #1a49b5;\n  background-color: #f9faff;\n  padding: 20px;\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e9ecef;\n}\n\n/* Form section */\n.roi-form {\n  padding: 20px 30px;\n  background-color: #fff;\n}\n\n/* Results section */\n.roi-results {\n  padding: 20px 30px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n}\n\n/* Input group */\n.input-group {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n/* Label */\n.input-label {\n  display: flex;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: #495057;\n  font-size: 0.95rem;\n  align-items: center;\n  position: relative;\n}\n\n/* Info icon */\n.info-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #1a49b5;\n  color: white;\n  font-size: 11px;\n  margin-left: 6px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: bold;\n}\n\n/* Tooltip */\n.tooltip {\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  z-index: 10;\n  max-width: 300px;\n  padding: 8px 12px;\n  background-color: #333;\n  color: white;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.tooltip:before {\n  content: '';\n  position: absolute;\n  bottom: 100%;\n  left: 10px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #333 transparent;\n}\n\n/* Input field */\n.input-field {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.95rem;\n  color: #495057;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  font-family: 'Montserrat', sans-serif;\n}\n  \n.input-field:focus {\n  border-color: #1a49b5;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);\n}\n  \n.input-field::-webkit-inner-spin-button,\n.input-field::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Range input */\n.range-input {\n  width: 100%;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 5px;\n  outline: none;\n  margin: 10px 0;\n}\n\n.range-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #1a49b5;\n  cursor: pointer;\n}\n\n.range-input::-moz-range-thumb {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #1a49b5;\n  cursor: pointer;\n  border: none;\n}\n\n/* Button */\n.roi-button {\n  background-color: #1a49b5;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  font-family: 'Montserrat', sans-serif;\n}\n  \n.roi-button:hover {\n  background-color: #0d3d9e;\n}\n  \n.roi-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);\n}\n\n/* Button container */\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n\n/* Result box */\n.result-box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n/* Result item */\n.result-item {\n  background-color: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n  \n.result-item h3 {\n  margin: 0 0 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c757d;\n}\n  \n.result-item p {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a49b5;\n}\n\n/* Range display */\n.range-display {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.range-value {\n  margin-left: 10px;\n  width: 40px;\n}\n",""]);const l=i},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const r=React;var o=t.n(r);const a=ReactDOM;var i=t.n(a);const l=styled;var u,c,s,d,p,f,m,b,g,h,x,v,y,w,R=t.n(l);function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var k=R().div(u||(u=E(["\n  max-width: 800px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n  overflow: hidden;\n  font-family: 'Montserrat', sans-serif;\n"]))),O=R().h1(c||(c=E(["\n  text-align: center;\n  color: #1a49b5;\n  background-color: #f9faff;\n  padding: 20px;\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e9ecef;\n"]))),C=R().div(s||(s=E(["\n  padding: 20px 30px;\n  background-color: #fff;\n"]))),M=R().div(d||(d=E(["\n  padding: 20px 30px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n"]))),j=R().div(p||(p=E(["\n  margin-bottom: 20px;\n  width: 100%;\n"]))),S=R().label(f||(f=E(["\n  display: flex;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: #495057;\n  font-size: 0.95rem;\n  align-items: center;\n  position: relative;\n"]))),P=R().span(m||(m=E(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #1a49b5;\n  color: white;\n  font-size: 11px;\n  margin-left: 6px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: bold;\n"]))),I=R().div(b||(b=E(["\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  z-index: 10;\n  max-width: 300px;\n  padding: 8px 12px;\n  background-color: #333;\n  color: white;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 10px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #333 transparent;\n  }\n"]))),z=R().input(g||(g=E(["\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.95rem;\n  color: #495057;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  font-family: 'Montserrat', sans-serif;\n  \n  &:focus {\n    border-color: #1a49b5;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);\n  }\n  \n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]))),A=R().input(h||(h=E(["\n  width: 100%;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 5px;\n  outline: none;\n  margin: 10px 0;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a49b5;\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a49b5;\n    cursor: pointer;\n    border: none;\n  }\n"]))),T=R().button(x||(x=E(["\n  background-color: #1a49b5;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  font-family: 'Montserrat', sans-serif;\n  \n  &:hover {\n    background-color: #0d3d9e;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);\n  }\n"]))),F=R().div(v||(v=E(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n"]))),L=R().div(y||(y=E(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n"]))),V=R().div(w||(w=E(["\n  background-color: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  \n  h3 {\n    margin: 0 0 10px;\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: #6c757d;\n  }\n  \n  p {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 700;\n    color: #1a49b5;\n  }\n"])));function D(n){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(n)}function N(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function $(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){B(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function B(n,e,t){return(e=function(n){var e=function(n){if("object"!=D(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=D(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==D(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function H(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(n){c=!0,o=n}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return U(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}const _=function(){var n={averageOrderValue:75,ordersPerMonth:500,customerReturnRate:15,serviceCost:997,increasedReturnRate:5},e=H((0,r.useState)(n),2),t=e[0],a=e[1],i=H((0,r.useState)({monthlyRevenue:0,additionalRevenue:0,serviceMultiplier:0,annualReturnOnInvestment:0}),2),l=i[0],u=i[1],c=H((0,r.useState)(null),2),s=c[0],d=c[1];(0,r.useEffect)((function(){f()}),[t]);var p=function(n){var e=n.target,r=e.name,o=e.value;a($($({},t),{},B({},r,parseFloat(o)||0)))},f=function(){var n=t.averageOrderValue,e=t.ordersPerMonth,r=(t.customerReturnRate,t.serviceCost),o=e*(t.increasedReturnRate/100)*n*12,a=12*r,i=o/a,l=(o-a)/a*100;u({monthlyRevenue:(e*n).toFixed(2),additionalRevenue:o.toFixed(2),serviceMultiplier:i.toFixed(2),annualReturnOnInvestment:l.toFixed(2)})},m=function(n){d(s===n?null:n)};return o().createElement(k,null,o().createElement(O,null,"Customer Relounge ROI Calculator"),o().createElement(C,null,o().createElement(j,null,o().createElement(S,{htmlFor:"averageOrderValue"},"Average Order Value ($)",o().createElement(P,{onClick:function(){return m("averageOrderValue")}},"i"),"averageOrderValue"===s&&o().createElement(I,null,"The average value of orders placed by your customers.")),o().createElement(z,{type:"number",id:"averageOrderValue",name:"averageOrderValue",value:t.averageOrderValue,onChange:p,min:"0"})),o().createElement(j,null,o().createElement(S,{htmlFor:"ordersPerMonth"},"Orders per Month",o().createElement(P,{onClick:function(){return m("ordersPerMonth")}},"i"),"ordersPerMonth"===s&&o().createElement(I,null,"The total number of orders your business receives per month.")),o().createElement(z,{type:"number",id:"ordersPerMonth",name:"ordersPerMonth",value:t.ordersPerMonth,onChange:p,min:"0"})),o().createElement(j,null,o().createElement(S,{htmlFor:"customerReturnRate"},"Current Customer Return Rate (%)",o().createElement(P,{onClick:function(){return m("customerReturnRate")}},"i"),"customerReturnRate"===s&&o().createElement(I,null,"The percentage of customers who return to make another purchase.")),o().createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},o().createElement(A,{type:"range",id:"customerReturnRate",name:"customerReturnRate",value:t.customerReturnRate,onChange:p,min:"0",max:"100",step:"1"}),o().createElement("span",{style:{marginLeft:"10px",width:"40px"}},t.customerReturnRate,"%"))),o().createElement(j,null,o().createElement(S,{htmlFor:"serviceCost"},"Customer Relounge Monthly Cost ($)",o().createElement(P,{onClick:function(){return m("serviceCost")}},"i"),"serviceCost"===s&&o().createElement(I,null,"The monthly cost of Customer Relounge service.")),o().createElement(z,{type:"number",id:"serviceCost",name:"serviceCost",value:t.serviceCost,onChange:p,min:"0"})),o().createElement(j,null,o().createElement(S,{htmlFor:"increasedReturnRate"},"Expected Increase in Return Rate (%)",o().createElement(P,{onClick:function(){return m("increasedReturnRate")}},"i"),"increasedReturnRate"===s&&o().createElement(I,null,"The estimated increase in customer return rate after implementing Customer Relounge.")),o().createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},o().createElement(A,{type:"range",id:"increasedReturnRate",name:"increasedReturnRate",value:t.increasedReturnRate,onChange:p,min:"0",max:"50",step:"1"}),o().createElement("span",{style:{marginLeft:"10px",width:"40px"}},t.increasedReturnRate,"%"))),o().createElement(F,null,o().createElement(T,{onClick:function(){a(n)}},"Reset"))),o().createElement(M,null,o().createElement(L,null,o().createElement(V,null,o().createElement("h3",null,"Current Monthly Revenue"),o().createElement("p",null,"$",Number(l.monthlyRevenue).toLocaleString())),o().createElement(V,null,o().createElement("h3",null,"Additional Annual Revenue"),o().createElement("p",null,"$",Number(l.additionalRevenue).toLocaleString())),o().createElement(V,null,o().createElement("h3",null,"Return per $1 Spent"),o().createElement("p",null,"$",l.serviceMultiplier)),o().createElement(V,null,o().createElement("h3",null,"Annual ROI"),o().createElement("p",null,l.annualReturnOnInvestment,"%")))))};var q=t(72),J=t.n(q),G=t(825),K=t.n(G),Q=t(659),W=t.n(Q),X=t(56),Y=t.n(X),Z=t(540),nn=t.n(Z),en=t(113),tn=t.n(en),rn=t(365),on={};on.styleTagTransform=tn(),on.setAttributes=Y(),on.insert=W().bind(null,"head"),on.domAPI=K(),on.insertStyleElement=nn(),J()(rn.A,on),rn.A&&rn.A.locals&&rn.A.locals,i().render(o().createElement(o().StrictMode,null,o().createElement(_,null)),document.getElementById("roi-calculator")),document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("roi-calculator");n&&!n.hasChildNodes()&&i().render(o().createElement(o().StrictMode,null,o().createElement(_,null)),n)}))})();