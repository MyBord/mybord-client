(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1054:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(783),i=t(70),o=t(789),s=t(80),l=t(256),c=t(107),u=t(825),d=t(121),f=t(988),m=function(){return r.createElement("div",{className:f.div},r.createElement(d.a,{description:!1,image:d.a.PRESENTED_IMAGE_SIMPLE}))},p=t(33),h=t(17),A=t(990),y=function(e){return e.hasFilters?r.createElement("div",{className:A.div},r.createElement(m,null),r.createElement(h.a,{color:"blue",size:"three",text:"There's nothing left"}),r.createElement("div",{className:A.iconDiv},r.createElement(p.a,{iconName:"monkey",size:40}))):r.createElement("div",{className:A.div},r.createElement(m,null),r.createElement(h.a,{color:"blue",size:"three",text:"You don't have any cards. You should add some."}))},b=t(992),g=function(){return r.createElement("div",{className:b.div})},C=t(994),v=function(){var e=Object(l.b)().state;return e.allIds.length>0?r.createElement("section",{className:C.section},e.allIds.map((function(n){return r.createElement(u.a,{key:n,userCard:e.byId[n]})})),Array(10).fill(null).map((function(e,n){return r.createElement(g,{key:"phantom-card-"+n})}))):r.createElement("section",{className:C.section},r.createElement(y,{hasFilters:e.filters.hasFilters}))},E=t(996),B=function(){return r.createElement("section",{className:E.section},r.createElement(v,null))},w=Object(a.a)({Component:function(e){var n=e.data,t=Object(l.b)(),a=t.state,u=t.dispatch,d=Object(c.b)().setHydrationStatus;r.useEffect((function(){u({type:s.d,cards:n.userCards})}),[u,n.userCards]);var f=Object(i.d)(o.j),m=f.data,p=f.loading;r.useEffect((function(){p||u({type:s.a,card:m.userCard})}),[m,p,u]);var h=Object(i.d)(o.b),A=h.data,y=h.loading;r.useEffect((function(){y||u({type:s.b,id:A.deletedUserCard.id})}),[u,A,y]);var b=Object(i.d)(o.d),g=b.data,C=b.loading;return r.useEffect((function(){C||u({type:s.c,cards:g.filteredUserCards.userCards,filters:g.filteredUserCards.filters})}),[g,C,u]),r.useEffect((function(){a.isHydrated&&d(!0)}),[d,a.isHydrated]),a.isHydrated?r.createElement(B,null):null},gqlString:o.h,setHydration:!1});n.default=function(){return r.createElement(w,null)}},783:function(e,n,t){"use strict";var r=t(0),a=t(786),i=t(787),o=t.n(i),s=function(e){var n,t="pending",r=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw r;if("error"===t)throw n;if("success"===t)return n}}},l=function(e){var n=function(e){return new Promise((function(n){var t=JSON.stringify({query:e.loc.source.body});o.a.post("https://mybord.io/graphql",t,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){return n(e.data.data)}))}))}(e);return{data:s(n)}},c=t(107);n.a=function(e){var n=e.Component,t=e.gqlString,i=e.setHydration,o=void 0===i||i;if(!t){return function(){var e=Object(c.b)(),t=e.isAnimationComplete,a=e.setHydrationStatus;return r.useEffect((function(){o&&a(!0)}),[a]),t?r.createElement(n,null):null}}var s=l(t),u=function(e){var t=e.isAnimationComplete,a=e.setHydrationStatus,i=s.data.read();return r.useEffect((function(){o&&a(!0)}),[a]),t?r.createElement(n,{data:i}):null};return function(){var e=Object(c.b)(),n=e.isAnimationComplete,t=e.isHydrated,i=e.setHydrationStatus;return r.createElement(r.Suspense,{fallback:t&&r.createElement(a.a,null)},r.createElement(u,{isAnimationComplete:n,setHydrationStatus:i}))}}},803:function(e,n,t){e.exports=t(804)},804:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(3),o=t.n(i),s=t(253);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=t(18),A=function(e){function n(e){var t,r,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,a=d(n).call(this,e),t=!a||"object"!=typeof a&&"function"!=typeof a?m(r):a,p(m(m(t)),"handleClick",(function(e){var n=t.state.checked,r=t.props.onClick,a=!n;t.setChecked(a,e),r&&r(a,e)})),p(m(m(t)),"handleKeyDown",(function(e){37===e.keyCode?t.setChecked(!1,e):39===e.keyCode&&t.setChecked(!0,e)})),p(m(m(t)),"handleMouseUp",(function(e){var n=t.props.onMouseUp;t.node&&t.node.blur(),n&&n(e)})),p(m(m(t)),"saveNode",(function(e){t.node=e}));var i=!1;return i="checked"in e?!!e.checked:!!e.defaultChecked,t.state={checked:i},t}var t,r,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,e),t=n,i=[{key:"getDerivedStateFromProps",value:function(e){var n={},t=e.checked;return"checked"in e&&(n.checked=!!t),n}}],(r=[{key:"componentDidMount",value:function(){var e=this.props,n=e.autoFocus,t=e.disabled;n&&!t&&this.focus()}},{key:"setChecked",value:function(e,n){var t=this.props,r=t.disabled,a=t.onChange;r||("checked"in this.props||this.setState({checked:e}),a&&a(e,n))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.className,r=n.prefixCls,i=n.disabled,o=n.loadingIcon,s=n.checkedChildren,u=n.unCheckedChildren,d=c(n,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),f=this.state.checked,m=h((p(e={},t,!!t),p(e,r,!0),p(e,"".concat(r,"-checked"),f),p(e,"".concat(r,"-disabled"),i),e));return a.a.createElement("button",l({},d,{type:"button",role:"switch","aria-checked":f,disabled:i,className:m,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),o,a.a.createElement("span",{className:"".concat(r,"-inner")},f?s:u))}}])&&u(t.prototype,r),i&&u(t,i),n}(r.Component);A.propTypes={className:o.a.string,prefixCls:o.a.string,disabled:o.a.bool,checkedChildren:o.a.any,unCheckedChildren:o.a.any,onChange:o.a.func,onMouseUp:o.a.func,onClick:o.a.func,tabIndex:o.a.number,checked:o.a.bool,defaultChecked:o.a.bool,autoFocus:o.a.bool,loadingIcon:o.a.node},A.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(s.polyfill)(A),n.default=A},904:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t(0),a=t(3),i=t(803),o=t.n(i),s=t(18),l=t.n(s),c=t(87),u=t(263),d=t(88),f=t(746),m=t(29);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,n){return(C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var v=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,g(n).call(this,e))).saveSwitch=function(e){t.rcSwitch=e},t.renderSwitch=function(e){var n,a=e.getPrefixCls,i=t.props,s=i.prefixCls,f=i.size,m=i.loading,p=i.className,y=void 0===p?"":p,b=i.disabled,g=a("switch",s),C=l()(y,(A(n={},"".concat(g,"-small"),"small"===f),A(n,"".concat(g,"-loading"),m),n)),v=m?r.createElement(d.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return r.createElement(u.a,{insertExtraNode:!0},r.createElement(o.a,h({},Object(c.a)(t.props,["loading"]),{prefixCls:g,className:C,disabled:b||m,ref:t.saveSwitch,loadingIcon:v})))},Object(m.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),t}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&C(e,n)}(n,e),t=n,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r.createElement(f.a,null,this.renderSwitch)}}])&&y(t.prototype,a),i&&y(t,i),n}(r.Component);v.__ANT_SWITCH=!0,v.propTypes={prefixCls:a.string,size:a.oneOf(["small","default","large"]),className:a.string}},988:function(e,n,t){var r=t(989);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(16)(r,a);r.locals&&(e.exports=r.locals)},989:function(e,n,t){(n=e.exports=t(15)(!0)).push([e.i,".div___29KYB .ant-empty {\n  display: flex;\n  justify-content: center;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/shared/icons/empty/empty.module.less"],names:[],mappings:"AAAA;EACE,cAAc;EACd,wBAAwB;CACzB",file:"empty.module.less",sourcesContent:[".div :global .ant-empty {\n  display: flex;\n  justify-content: center;\n}\n"],sourceRoot:""}]),n.locals={div:"div___29KYB"}},990:function(e,n,t){var r=t(991);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(16)(r,a);r.locals&&(e.exports=r.locals)},991:function(e,n,t){(n=e.exports=t(15)(!0)).push([e.i,"/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/* stylelint-enable */\n.div___1HU9R {\n  align-items: center;\n  background: #FFF;\n  border-radius: 0.5rem;\n  box-shadow: 0px 7px 32px -10px rgba(0, 0, 0, 0.28);\n  display: flex;\n  height: 40%;\n  justify-content: center;\n  margin: 1rem 0 0 1rem;\n  max-width: 38rem;\n  min-height: 20rem;\n  padding: 0 2rem;\n  width: 80%;\n}\n.div___1HU9R .ant-empty-image {\n  margin-right: 1rem;\n}\n.div___1HU9R .ant-empty-image > svg {\n  height: 6.25rem;\n  width: 6.25rem;\n}\n.iconDiv___2rmM8 {\n  margin-left: 1.75rem;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/shared/cards/emptyCard/emptyCard.module.less"],names:[],mappings:"AAAA,uBAAuB;AAcvB,sBAAsB;AACtB,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,oBAAoB;EACpB,iBAAiB;EACjB,sBAAsB;EACtB,mDAAmD;EACnD,cAAc;EACd,YAAY;EACZ,wBAAwB;EACxB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB",file:"emptyCard.module.less",sourcesContent:["/* stylelint-disable */\n:export {\n  black: #565E5F;\n  blue: #00A6ED;\n  green: #7DCC93;\n  lightGrey: #A4AAAF;\n  orange: #F17D00;\n  purple: #31355A;\n  red: #E41245;\n  transparentBlack: #565E5fA6;\n  transparentWhite: #FFFFFFBF;\n  white: #FFF;\n  yellow: #FCC900;\n}\n/* stylelint-enable */\n/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.div {\n  align-items: center;\n  background: #FFF;\n  border-radius: 0.5rem;\n  box-shadow: 0px 7px 32px -10px rgba(0, 0, 0, 0.28);\n  display: flex;\n  height: 40%;\n  justify-content: center;\n  margin: 1rem 0 0 1rem;\n  max-width: 38rem;\n  min-height: 20rem;\n  padding: 0 2rem;\n  width: 80%;\n}\n.div :global .ant-empty-image {\n  margin-right: 1rem;\n}\n.div :global .ant-empty-image > svg {\n  height: 6.25rem;\n  width: 6.25rem;\n}\n.iconDiv {\n  margin-left: 1.75rem;\n}\n"],sourceRoot:""}]),n.locals={black:"#565E5F",blue:"#00A6ED",green:"#7DCC93",lightGrey:"#A4AAAF",orange:"#F17D00",purple:"#31355A",red:"#E41245",transparentBlack:"#565E5fA6",transparentWhite:"#FFFFFFBF",white:"#FFF",yellow:"#FCC900",caretSize:"0.625rem",footerListMargin:"3rem",footerLogoSize:"5rem",headerHeight:"3rem",headerMarginTop:"2.5rem",navWidth:"5rem",stackCardSize:"7rem",toastWidth:"24.5rem",div:"div___1HU9R",iconDiv:"iconDiv___2rmM8"}},992:function(e,n,t){var r=t(993);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(16)(r,a);r.locals&&(e.exports=r.locals)},993:function(e,n,t){(n=e.exports=t(15)(!0)).push([e.i,"/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/* stylelint-enable */\n.div___FQs4B {\n  margin: 1rem;\n  min-width: 15rem;\n  width: 15rem;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/shared/cards/phantomCard/phantomCard.module.less"],names:[],mappings:"AAAA,uBAAuB;AAcvB,sBAAsB;AACtB,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,aAAa;EACb,iBAAiB;EACjB,aAAa;CACd",file:"phantomCard.module.less",sourcesContent:["/* stylelint-disable */\n:export {\n  black: #565E5F;\n  blue: #00A6ED;\n  green: #7DCC93;\n  lightGrey: #A4AAAF;\n  orange: #F17D00;\n  purple: #31355A;\n  red: #E41245;\n  transparentBlack: #565E5fA6;\n  transparentWhite: #FFFFFFBF;\n  white: #FFF;\n  yellow: #FCC900;\n}\n/* stylelint-enable */\n/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.div {\n  margin: 1rem;\n  min-width: 15rem;\n  width: 15rem;\n}\n"],sourceRoot:""}]),n.locals={black:"#565E5F",blue:"#00A6ED",green:"#7DCC93",lightGrey:"#A4AAAF",orange:"#F17D00",purple:"#31355A",red:"#E41245",transparentBlack:"#565E5fA6",transparentWhite:"#FFFFFFBF",white:"#FFF",yellow:"#FCC900",caretSize:"0.625rem",footerListMargin:"3rem",footerLogoSize:"5rem",headerHeight:"3rem",headerMarginTop:"2.5rem",navWidth:"5rem",stackCardSize:"7rem",toastWidth:"24.5rem",div:"div___FQs4B"}},994:function(e,n,t){var r=t(995);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(16)(r,a);r.locals&&(e.exports=r.locals)},995:function(e,n,t){(n=e.exports=t(15)(!0)).push([e.i,"/* stylelint-disable */\n/* stylelint-enable */\n.section___2rlwH {\n  align-content: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  flex: auto;\n  height: 10rem;\n  justify-content: space-between;\n  overflow: auto;\n  padding-left: 1rem;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/app/pages/userDashboardPage/userDashboardCards/userDashboardCards.module.less"],names:[],mappings:"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,+BAA+B;EAC/B,eAAe;EACf,mBAAmB;CACpB",file:"userDashboardCards.module.less",sourcesContent:["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.section {\n  align-content: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  flex: auto;\n  height: 10rem;\n  justify-content: space-between;\n  overflow: auto;\n  padding-left: 1rem;\n}\n"],sourceRoot:""}]),n.locals={caretSize:"0.625rem",footerListMargin:"3rem",footerLogoSize:"5rem",headerHeight:"3rem",headerMarginTop:"2.5rem",navWidth:"5rem",stackCardSize:"7rem",toastWidth:"24.5rem",section:"section___2rlwH"}},996:function(e,n,t){var r=t(997);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(16)(r,a);r.locals&&(e.exports=r.locals)},997:function(e,n,t){(n=e.exports=t(15)(!0)).push([e.i,".section___3zXaW {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord-client/src/spa/app/pages/userDashboardPage/userDashboardPage.module.less"],names:[],mappings:"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,YAAY;CACb",file:"userDashboardPage.module.less",sourcesContent:[".section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n"],sourceRoot:""}]),n.locals={section:"section___3zXaW"}}}]);
//# sourceMappingURL=10.bundle.js.map