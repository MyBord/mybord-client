(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1003:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(234),o=t(15),a=t(806),s=t(747),c=t(965);n.default=Object(s.a)({Component:function(){return r.createElement("div",{className:c.div},r.createElement(i.a,{animationData:a,autoplay:!0,loop:!0,size:400}),r.createElement(o.a,{size:"four",text:"Oops ... it looks like something went wrong."}))}})},747:function(e,n,t){"use strict";var r=t(0),i=t(752),o=t(748),a=t(96);n.a=function(e){var n=e.Component,t=e.gqlString,s=e.setHydration,c=void 0===s||s;if(!t){return function(){var e=Object(a.b)(),t=e.isAnimationComplete,i=e.setHydrationStatus;return r.useEffect((function(){c&&i(!0)}),[i]),t?r.createElement(n,null):null}}var u=o.a.query(t),l=function(e){var t=e.isAnimationComplete,i=e.setHydrationStatus,o=u.data.read();return r.useEffect((function(){c&&i(!0)}),[i]),t?r.createElement(n,{data:o}):null};return function(){var e=Object(a.b)(),n=e.isAnimationComplete,t=e.isHydrated,o=e.setHydrationStatus;return r.createElement(r.Suspense,{fallback:t&&r.createElement(i.a,null)},r.createElement(l,{isAnimationComplete:n,setHydrationStatus:o}))}}},748:function(e,n,t){"use strict";(function(e){var r=t(754),i=t.n(r),o=t(750);n.a={query:function(n){var t=function(n){return new Promise((function(t){var r=JSON.stringify({query:n.loc.source.body}),o="http://"+e.env.URI;i.a.post(o,r,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){return t(e.data.data)}))}))}(n);return{data:Object(o.a)(t)}}}}).call(this,t(60))},750:function(e,n,t){"use strict";n.a=function(e){var n,t="pending",r=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw r;if("error"===t)throw n;if("success"===t)return n}}}},965:function(e,n,t){var r=t(966);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(21)(r,i);r.locals&&(e.exports=r.locals)},966:function(e,n,t){(n=e.exports=t(20)(!0)).push([e.i,".div___A0O1d {\n  display: flex;\n  flex-direction: column;\n}\n.div___A0O1d > p {\n  margin-top: 2rem;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/app/pages/errorPage/errorPage.module.less"],names:[],mappings:"AAAA;EACE,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB",file:"errorPage.module.less",sourcesContent:[".div {\n  display: flex;\n  flex-direction: column;\n}\n.div > p {\n  margin-top: 2rem;\n  text-align: center;\n}\n"],sourceRoot:""}]),n.locals={div:"div___A0O1d"}}}]);
//# sourceMappingURL=18.bundle.js.map