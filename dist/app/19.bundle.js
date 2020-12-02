(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.parentSection___2gmzO {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 4rem;\n  width: 100%;\n}\n.section___3TCvo {\n  flex: auto;\n  height: 10rem;\n  overflow: auto;\n  padding-top: 4rem;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/app/pages/aboutDevPage/aboutDevPage.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,kBAAkB;CACnB","file":"aboutDevPage.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.parentSection {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 4rem;\n  width: 100%;\n}\n.section {\n  flex: auto;\n  height: 10rem;\n  overflow: auto;\n  padding-top: 4rem;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"caretSize": "0.625rem",
	"footerListMargin": "3rem",
	"footerLogoSize": "5rem",
	"headerHeight": "3rem",
	"headerMarginTop": "2.5rem",
	"navWidth": "5rem",
	"stackCardSize": "7rem",
	"toastWidth": "24.5rem",
	"parentSection": "parentSection___2gmzO",
	"section": "section___3TCvo"
};

/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_promiseWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/promiseWrapper */ "./src/api/promiseWrapper.ts");


var get = function (gqlString) { return new Promise(function (resolve) {
    var body = JSON.stringify({ query: gqlString.loc.source.body });
    var config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    var url = ( false ? undefined : 'http') + "://" + "mbh-server-dev-jimmy.herokuapp.com/graphql";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, body, config).then(function (response) { return resolve(response.data.data); });
}); };
var query = function (gqlString) {
    var promise = get(gqlString);
    return {
        data: Object(api_promiseWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(promise),
    };
};
/* harmony default export */ __webpack_exports__["default"] = ({
    query: query,
});


/***/ }),

/***/ "./src/api/promiseWrapper.ts":
/*!***********************************!*\
  !*** ./src/api/promiseWrapper.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Source:
// https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// https://codesandbox.io/s/frosty-hermann-bztrp
/* harmony default export */ __webpack_exports__["default"] = (function (promise) {
    var status = 'pending';
    var result;
    var suspender = promise.then(function (r) {
        status = 'success';
        result = r;
    }, function (e) {
        status = 'error';
        result = e;
    });
    return {
        read: function () {
            if (status === 'pending') {
                throw suspender;
            }
            else if (status === 'error') {
                throw result;
            }
            else if (status === 'success') {
                return result;
            }
        },
    };
});


/***/ }),

/***/ "./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less":
/*!*****************************************************************!*\
  !*** ./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./aboutDevPage.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/app/pages/aboutDevPage/aboutDevPage.tsx":
/*!*********************************************************!*\
  !*** ./src/spa/app/pages/aboutDevPage/aboutDevPage.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! footer/footer */ "./src/spa/components/organisms/footer/footer.tsx");
/* harmony import */ var pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/pageWrapper/pageWrapper */ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx");
/* harmony import */ var copy_aboutForDevs_aboutForDevs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy/aboutForDevs/aboutForDevs */ "./src/spa/components/molecules/copy/aboutForDevs/aboutForDevs.tsx");
/* harmony import */ var copy_aboutStack_aboutStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy/aboutStack/aboutStack */ "./src/spa/components/molecules/copy/aboutStack/aboutStack.tsx");
/* harmony import */ var _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutDevPage.module.less */ "./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less");
/* harmony import */ var _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_5__);






var AboutDevPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_5__["parentSection"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_5__["section"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](copy_aboutForDevs_aboutForDevs__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](copy_aboutStack_aboutStack__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"], { isApp: true })))); };
/* harmony default export */ __webpack_exports__["default"] = (Object(pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])({ Component: AboutDevPage }));


/***/ }),

/***/ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx":
/*!*******************************************************!*\
  !*** ./src/spa/app/pages/pageWrapper/pageWrapper.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fallbacks/spinner/spinner */ "./src/spa/components/atoms/fallbacks/spinner/spinner.tsx");
/* harmony import */ var api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api/api */ "./src/api/api.ts");
/* harmony import */ var context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/hydrationContext/hydrationContext */ "./src/context/hydrationContext/hydrationContext.tsx");
// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.
// when `setHydration=false`, that means that once our data has been retrieved from the backend
// and / or our wrapped component (`Component`) has mounted, we DO NOT want to stop our page's
// spinner / loading animation. This is because there might be additional work that is *still*
// happening in the background of the wrapped component after data has been drilled, such as a
// context reducer being mutated.




var pageWrapper = function (_a) {
    var Component = _a.Component, gqlString = _a.gqlString, _b = _a.setHydration, setHydration = _b === void 0 ? true : _b;
    // ----- NO DATA IS NEEDED ----- //
    if (!gqlString) {
        var NoDataPage = function () {
            var _a = Object(context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__["useHydrationContext"])(), isAnimationComplete = _a.isAnimationComplete, setHydrationStatus = _a.setHydrationStatus;
            // See *1 in `hydrationContext.tsx`
            react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
                if (setHydration) {
                    setHydrationStatus(true);
                }
            }, [setHydrationStatus]);
            // See *2 in `hydrationContext.tsx`
            if (isAnimationComplete) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, null);
            }
            return null;
        };
        return NoDataPage;
    }
    // ----- DATA IS NEEDED ----- //
    var resource = api_api__WEBPACK_IMPORTED_MODULE_2__["default"].query(gqlString);
    var Page = function () {
        var _a = Object(context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__["useHydrationContext"])(), isAnimationComplete = _a.isAnimationComplete, isHydrated = _a.isHydrated, setHydrationStatus = _a.setHydrationStatus;
        // See *1 notes in `hydrationContext.tsx` about why our fallback `Spinner` may not render unless
        // our app has been hydrated.
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: isHydrated && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageContent, { isAnimationComplete: isAnimationComplete, setHydrationStatus: setHydrationStatus })));
    };
    var PageContent = function (_a) {
        var isAnimationComplete = _a.isAnimationComplete, setHydrationStatus = _a.setHydrationStatus;
        var data = resource.data.read();
        // See *1 in `hydrationContext.tsx`
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
            if (setHydration) {
                setHydrationStatus(true);
            }
        }, [setHydrationStatus]);
        // See *2 in `hydrationContext.tsx`
        if (isAnimationComplete) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { data: data });
        }
        return null;
    };
    return Page;
};
/* harmony default export */ __webpack_exports__["default"] = (pageWrapper);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy9hYm91dERldlBhZ2UvYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvYWJvdXREZXZQYWdlL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzcz80OWJiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL2Fib3V0RGV2UGFnZS9hYm91dERldlBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDRFQUE0RSxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsa0JBQWtCLG1CQUFtQixzQkFBc0IsR0FBRyxVQUFVLHFKQUFxSixhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLDhGQUE4Rix3QkFBd0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEdBQUcsMENBQTBDLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHFCQUFxQixnQkFBZ0IsR0FBRyxZQUFZLGVBQWUsa0JBQWtCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUI7O0FBRXptQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDMEM7QUFPcEUsSUFB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O0lBRUYsSUFBTSxXQUFXLEdBQStCLFVBQUMsRUFBMkM7WUFBekMsNENBQW1CLEVBQUUsMENBQWtCO1FBQ3hGLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEMsbUNBQW1DO1FBQ25DLCtDQUFlLENBQUM7WUFDZCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekIsbUNBQW1DO1FBQ25DLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsT0FBTyxvREFBQyxTQUFTLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVhLDBFQUFXLEVBQUMiLCJmaWxlIjoiMTkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5wYXJlbnRTZWN0aW9uX19fMmdtek8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWN0aW9uX19fM1RDdm8ge1xcbiAgZmxleDogYXV0bztcXG4gIGhlaWdodDogMTByZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2FwcC9wYWdlcy9hYm91dERldlBhZ2UvYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQVd2QixzQkFBc0I7QUFDdEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkJcIixcImZpbGVcIjpcImFib3V0RGV2UGFnZS5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgY2FyZXRTaXplOiAwLjYyNXJlbTtcXG4gIGZvb3Rlckxpc3RNYXJnaW46IDNyZW07XFxuICBmb290ZXJMb2dvU2l6ZTogNXJlbTtcXG4gIGhlYWRlckhlaWdodDogM3JlbTtcXG4gIGhlYWRlck1hcmdpblRvcDogMi41cmVtO1xcbiAgbmF2V2lkdGg6IDVyZW07XFxuICBzdGFja0NhcmRTaXplOiA3cmVtO1xcbiAgdG9hc3RXaWR0aDogMjQuNXJlbTtcXG59XFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5wYXJlbnRTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VjdGlvbiB7XFxuICBmbGV4OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJldFNpemVcIjogXCIwLjYyNXJlbVwiLFxuXHRcImZvb3Rlckxpc3RNYXJnaW5cIjogXCIzcmVtXCIsXG5cdFwiZm9vdGVyTG9nb1NpemVcIjogXCI1cmVtXCIsXG5cdFwiaGVhZGVySGVpZ2h0XCI6IFwiM3JlbVwiLFxuXHRcImhlYWRlck1hcmdpblRvcFwiOiBcIjIuNXJlbVwiLFxuXHRcIm5hdldpZHRoXCI6IFwiNXJlbVwiLFxuXHRcInN0YWNrQ2FyZFNpemVcIjogXCI3cmVtXCIsXG5cdFwidG9hc3RXaWR0aFwiOiBcIjI0LjVyZW1cIixcblx0XCJwYXJlbnRTZWN0aW9uXCI6IFwicGFyZW50U2VjdGlvbl9fXzJnbXpPXCIsXG5cdFwic2VjdGlvblwiOiBcInNlY3Rpb25fX18zVEN2b1wiXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcHJvbWlzZVdyYXBwZXIsIHsgUHJvbWlzZVdyYXBwZXIgfSBmcm9tICdhcGkvcHJvbWlzZVdyYXBwZXInO1xuaW1wb3J0IHsgR3FsU3RyaW5nIH0gZnJvbSAndHlwZXMvZ3FsVHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcbiAgZGF0YTogUHJvbWlzZVdyYXBwZXI8VD47XG59XG5cbmNvbnN0IGdldCA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFByb21pc2U8YW55PiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogZ3FsU3RyaW5nLmxvYy5zb3VyY2UuYm9keSB9KTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdQUk9EJyA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHtwcm9jZXNzLmVudi5VUkl9YDtcblxuICBheGlvcy5wb3N0KHVybCwgYm9keSwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpKTtcbn0pO1xuXG5jb25zdCBxdWVyeSA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFJlc291cmNlPGFueT4gPT4ge1xuICBjb25zdCBwcm9taXNlID0gZ2V0KGdxbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcHJvbWlzZVdyYXBwZXIocHJvbWlzZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5LFxufTtcbiIsIi8vIFNvdXJjZTpcbi8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb25jdXJyZW50LW1vZGUtc3VzcGVuc2UuaHRtbCN3aGF0LWlzLXN1c3BlbnNlLWV4YWN0bHlcbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9mcm9zdHktaGVybWFubi1ienRycFxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VXcmFwcGVyPFQ+IHtcbiAgcmVhZCgpOiBUO1xufVxuXG5leHBvcnQgZGVmYXVsdCA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2VXcmFwcGVyPFQ+ID0+IHtcbiAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgbGV0IHJlc3VsdDogVDtcbiAgY29uc3Qgc3VzcGVuZGVyID0gcHJvbWlzZS50aGVuKFxuICAgIChyKSA9PiB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICByZXN1bHQgPSByO1xuICAgIH0sXG4gICAgKGUpID0+IHtcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICByZXN1bHQgPSBlO1xuICAgIH0sXG4gICk7XG4gIHJldHVybiB7XG4gICAgcmVhZCgpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aHJvdyBzdXNwZW5kZXI7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9hYm91dERldlBhZ2UubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHBhZ2VXcmFwcGVyIGZyb20gJ3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyJztcbmltcG9ydCBBYm91dEZvckRldnMgZnJvbSAnY29weS9hYm91dEZvckRldnMvYWJvdXRGb3JEZXZzJztcbmltcG9ydCBBYm91dFN0YWNrIGZyb20gJ2NvcHkvYWJvdXRTdGFjay9hYm91dFN0YWNrJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IEFib3V0RGV2UGFnZTogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudFNlY3Rpb259PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPEFib3V0Rm9yRGV2cyAvPlxuICAgICAgPEFib3V0U3RhY2sgLz5cbiAgICAgIDxGb290ZXIgaXNBcHAgLz5cbiAgICA8L3NlY3Rpb24+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VXcmFwcGVyKHsgQ29tcG9uZW50OiBBYm91dERldlBhZ2UgfSk7XG4iLCIvLyBUaGlzIG9iamVjdGl2ZSBvZiB0aGlzIHdyYXBwZXIgaXMgdG8gY3JlYXRlIGEgZ2VuZXJhbCBhcGkgdGhhdCB0YWtlcyBhIHBhZ2Ugb2Ygb3VyIGFwcFxuLy8gYWxvbmcgd2l0aCB0aGUgR1FMIHF1ZXJ5IHRoYXQgZGVyaXZlcyBhbGwgbmVjZXNzYXJ5IGRhdGEgZm9yIHNhaWQgcGFnZSBhbmQgcnVucyB0aGF0IHF1ZXJ5LlxuLy8gVGhlIGRhdGEgaXMgdGhlbiBwcm92aWRlZCB0byB0aGUgcGFnZSB0byByZW5kZXIgaXRzIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuXG4vLyB3aGVuIGBzZXRIeWRyYXRpb249ZmFsc2VgLCB0aGF0IG1lYW5zIHRoYXQgb25jZSBvdXIgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYmFja2VuZFxuLy8gYW5kIC8gb3Igb3VyIHdyYXBwZWQgY29tcG9uZW50IChgQ29tcG9uZW50YCkgaGFzIG1vdW50ZWQsIHdlIERPIE5PVCB3YW50IHRvIHN0b3Agb3VyIHBhZ2Unc1xuLy8gc3Bpbm5lciAvIGxvYWRpbmcgYW5pbWF0aW9uLiBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYWRkaXRpb25hbCB3b3JrIHRoYXQgaXMgKnN0aWxsKlxuLy8gaGFwcGVuaW5nIGluIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBhZnRlciBkYXRhIGhhcyBiZWVuIGRyaWxsZWQsIHN1Y2ggYXMgYVxuLy8gY29udGV4dCByZWR1Y2VyIGJlaW5nIG11dGF0ZWQuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ2ZhbGxiYWNrcy9zcGlubmVyL3NwaW5uZXInO1xuaW1wb3J0IGFwaSBmcm9tICdhcGkvYXBpJztcbmltcG9ydCB7IEdxbFN0cmluZyB9IGZyb20gJ3R5cGVzL2dxbFR5cGVzJztcbmltcG9ydCB7IHVzZUh5ZHJhdGlvbkNvbnRleHQgfSBmcm9tICdjb250ZXh0L2h5ZHJhdGlvbkNvbnRleHQvaHlkcmF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBQYWdlQ29udGVudFByb3BzIHtcbiAgaXNBbmltYXRpb25Db21wbGV0ZTogYm9vbGVhbjtcbiAgc2V0SHlkcmF0aW9uU3RhdHVzOiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBDb21wb25lbnQ6IFJlYWN0LkZDPFdyYXBwZWRDb21wb25lbnRQcm9wcz47XG4gIGdxbFN0cmluZz86IEdxbFN0cmluZztcbiAgc2V0SHlkcmF0aW9uPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFdyYXBwZWRDb21wb25lbnRQcm9wcyB7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IHBhZ2VXcmFwcGVyID0gKHtcbiAgQ29tcG9uZW50LFxuICBncWxTdHJpbmcsXG4gIHNldEh5ZHJhdGlvbiA9IHRydWUsXG59OiBQcm9wcyk6IFJlYWN0LkZDID0+IHtcbiAgLy8gLS0tLS0gTk8gREFUQSBJUyBORUVERUQgLS0tLS0gLy9cbiAgaWYgKCFncWxTdHJpbmcpIHtcbiAgICBjb25zdCBOb0RhdGFQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNBbmltYXRpb25Db21wbGV0ZSwgc2V0SHlkcmF0aW9uU3RhdHVzIH0gPSB1c2VIeWRyYXRpb25Db250ZXh0KCk7XG5cbiAgICAgIC8vIFNlZSAqMSBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0SHlkcmF0aW9uKSB7XG4gICAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBbc2V0SHlkcmF0aW9uU3RhdHVzXSk7XG5cbiAgICAgIC8vIFNlZSAqMiBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gTm9EYXRhUGFnZTtcbiAgfVxuXG4gIC8vIC0tLS0tIERBVEEgSVMgTkVFREVEIC0tLS0tIC8vXG4gIGNvbnN0IHJlc291cmNlID0gYXBpLnF1ZXJ5KGdxbFN0cmluZyk7XG5cbiAgY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBpc0h5ZHJhdGVkLCBzZXRIeWRyYXRpb25TdGF0dXMgfSA9IHVzZUh5ZHJhdGlvbkNvbnRleHQoKTtcbiAgICAvLyBTZWUgKjEgbm90ZXMgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YCBhYm91dCB3aHkgb3VyIGZhbGxiYWNrIGBTcGlubmVyYCBtYXkgbm90IHJlbmRlciB1bmxlc3NcbiAgICAvLyBvdXIgYXBwIGhhcyBiZWVuIGh5ZHJhdGVkLlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e2lzSHlkcmF0ZWQgJiYgPFNwaW5uZXIgLz59PlxuICAgICAgICA8UGFnZUNvbnRlbnRcbiAgICAgICAgICBpc0FuaW1hdGlvbkNvbXBsZXRlPXtpc0FuaW1hdGlvbkNvbXBsZXRlfVxuICAgICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cz17c2V0SHlkcmF0aW9uU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxQYWdlQ29udGVudFByb3BzPiA9ICh7IGlzQW5pbWF0aW9uQ29tcGxldGUsIHNldEh5ZHJhdGlvblN0YXR1cyB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlc291cmNlLmRhdGEucmVhZCgpO1xuXG4gICAgLy8gU2VlICoxIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHNldEh5ZHJhdGlvbikge1xuICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3NldEh5ZHJhdGlvblN0YXR1c10pO1xuXG4gICAgLy8gU2VlICoyIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgZGF0YT17ZGF0YX0gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQYWdlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9