(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{748:function(e,n,t){"use strict";var r=t(0),o=t(750),i=t(752),a=t.n(i),s=function(e){var n,t="pending",r=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw r;if("error"===t)throw n;if("success"===t)return n}}},c=function(e){var n=function(e){return new Promise((function(n){var t=JSON.stringify({query:e.loc.source.body});a.a.post("https://mybord.io/graphql",t,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){return n(e.data.data)}))}))}(e);return{data:s(n)}},l=t(98);n.a=function(e){var n=e.Component,t=e.gqlString,i=e.setHydration,a=void 0===i||i;if(!t){return function(){var e=Object(l.b)(),t=e.isAnimationComplete,o=e.setHydrationStatus;return r.useEffect((function(){a&&o(!0)}),[o]),t?r.createElement(n,null):null}}var s=c(t),u=function(e){var t=e.isAnimationComplete,o=e.setHydrationStatus,i=s.data.read();return r.useEffect((function(){a&&o(!0)}),[o]),t?r.createElement(n,{data:i}):null};return function(){var e=Object(l.b)(),n=e.isAnimationComplete,t=e.isHydrated,i=e.setHydrationStatus;return r.createElement(r.Suspense,{fallback:t&&r.createElement(o.a,null)},r.createElement(u,{isAnimationComplete:n,setHydrationStatus:i}))}}},946:function(e,n,t){var r=t(947);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(22)(r,o);r.locals&&(e.exports=r.locals)},947:function(e,n,t){(n=e.exports=t(21)(!0)).push([e.i,"/* stylelint-disable */\n/* stylelint-enable */\n.parentSection___2gmzO {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 4rem;\n  width: 100%;\n}\n.section___3TCvo {\n  flex: auto;\n  height: 10rem;\n  overflow: auto;\n  padding-top: 4rem;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/app/pages/aboutDevPage/aboutDevPage.module.less"],names:[],mappings:"AAAA,uBAAuB;AAUvB,sBAAsB;AACtB;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,kBAAkB;CACnB",file:"aboutDevPage.module.less",sourcesContent:["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n}\n/* stylelint-enable */\n.parentSection {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 4rem;\n  width: 100%;\n}\n.section {\n  flex: auto;\n  height: 10rem;\n  overflow: auto;\n  padding-top: 4rem;\n}\n"],sourceRoot:""}]),n.locals={caretSize:"0.625rem",footerListMargin:"3rem",footerLogoSize:"5rem",headerHeight:"3rem",headerMarginTop:"2.5rem",navWidth:"5rem",stackCardSize:"7rem",parentSection:"parentSection___2gmzO",section:"section___3TCvo"}},998:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(245),i=t(748),a=t(822),s=t(946);n.default=Object(i.a)({Component:function(){return r.createElement("section",{className:s.parentSection},r.createElement("section",{className:s.section},r.createElement(a.a,null),r.createElement(o.a,{isApp:!0})))}})}}]);
//# sourceMappingURL=21.bundle.js.map