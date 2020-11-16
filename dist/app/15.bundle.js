(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
/* harmony import */ var shared_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/footer/footer */ "./src/spa/shared/footer/footer.tsx");
/* harmony import */ var pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/pageWrapper/pageWrapper */ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx");
/* harmony import */ var about_aboutForDevs_aboutForDevs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! about/aboutForDevs/aboutForDevs */ "./src/spa/shared/about/aboutForDevs/aboutForDevs.tsx");
/* harmony import */ var _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutDevPage.module.less */ "./src/spa/app/pages/aboutDevPage/aboutDevPage.module.less");
/* harmony import */ var _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_4__);





var AboutDevPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_4__["parentSection"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _aboutDevPage_module_less__WEBPACK_IMPORTED_MODULE_4__["section"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](about_aboutForDevs_aboutForDevs__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](shared_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"], { isApp: true })))); };
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
/* harmony import */ var fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fallbacks/spinner/spinner */ "./src/spa/shared/fallbacks/spinner/spinner.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy9hYm91dERldlBhZ2UvYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvYWJvdXREZXZQYWdlL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzcz80OWJiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL2Fib3V0RGV2UGFnZS9hYm91dERldlBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDRFQUE0RSxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsa0JBQWtCLG1CQUFtQixzQkFBc0IsR0FBRyxVQUFVLHFKQUFxSixhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLDhGQUE4Rix3QkFBd0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEdBQUcsMENBQTBDLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHFCQUFxQixnQkFBZ0IsR0FBRyxZQUFZLGVBQWUsa0JBQWtCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUI7O0FBRXptQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDMEM7QUFPcEUsSUFB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QUF6Qyw0Q0FBbUIsRUFBRSwwQ0FBa0I7UUFDeEYsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxtQ0FBbUM7UUFDbkMsK0NBQWUsQ0FBQztZQUNkLElBQUksWUFBWSxFQUFFO2dCQUNoQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUV6QixtQ0FBbUM7UUFDbkMsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixPQUFPLG9EQUFDLFNBQVMsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRWEsMEVBQVcsRUFBQyIsImZpbGUiOiIxNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLnBhcmVudFNlY3Rpb25fX18yZ216TyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNlY3Rpb25fX18zVEN2byB7XFxuICBmbGV4OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvYXBwL3BhZ2VzL2Fib3V0RGV2UGFnZS9hYm91dERldlBhZ2UubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCO0FBV3ZCLHNCQUFzQjtBQUN0QjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFDRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQlwiLFwiZmlsZVwiOlwiYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuOmV4cG9ydCB7XFxuICBjYXJldFNpemU6IDAuNjI1cmVtO1xcbiAgZm9vdGVyTGlzdE1hcmdpbjogM3JlbTtcXG4gIGZvb3RlckxvZ29TaXplOiA1cmVtO1xcbiAgaGVhZGVySGVpZ2h0OiAzcmVtO1xcbiAgaGVhZGVyTWFyZ2luVG9wOiAyLjVyZW07XFxuICBuYXZXaWR0aDogNXJlbTtcXG4gIHN0YWNrQ2FyZFNpemU6IDdyZW07XFxuICB0b2FzdFdpZHRoOiAyNC41cmVtO1xcbn1cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLnBhcmVudFNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWN0aW9uIHtcXG4gIGZsZXg6IGF1dG87XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNhcmV0U2l6ZVwiOiBcIjAuNjI1cmVtXCIsXG5cdFwiZm9vdGVyTGlzdE1hcmdpblwiOiBcIjNyZW1cIixcblx0XCJmb290ZXJMb2dvU2l6ZVwiOiBcIjVyZW1cIixcblx0XCJoZWFkZXJIZWlnaHRcIjogXCIzcmVtXCIsXG5cdFwiaGVhZGVyTWFyZ2luVG9wXCI6IFwiMi41cmVtXCIsXG5cdFwibmF2V2lkdGhcIjogXCI1cmVtXCIsXG5cdFwic3RhY2tDYXJkU2l6ZVwiOiBcIjdyZW1cIixcblx0XCJ0b2FzdFdpZHRoXCI6IFwiMjQuNXJlbVwiLFxuXHRcInBhcmVudFNlY3Rpb25cIjogXCJwYXJlbnRTZWN0aW9uX19fMmdtek9cIixcblx0XCJzZWN0aW9uXCI6IFwic2VjdGlvbl9fXzNUQ3ZvXCJcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBwcm9taXNlV3JhcHBlciwgeyBQcm9taXNlV3JhcHBlciB9IGZyb20gJ2FwaS9wcm9taXNlV3JhcHBlcic7XG5pbXBvcnQgeyBHcWxTdHJpbmcgfSBmcm9tICd0eXBlcy9ncWxUeXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2U8VD4ge1xuICBkYXRhOiBQcm9taXNlV3JhcHBlcjxUPjtcbn1cblxuY29uc3QgZ2V0ID0gKGdxbFN0cmluZzogR3FsU3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiBncWxTdHJpbmcubG9jLnNvdXJjZS5ib2R5IH0pO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICB9O1xuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ1BST0QnID8gJ2h0dHBzJyA6ICdodHRwJ306Ly8ke3Byb2Nlc3MuZW52LlVSSX1gO1xuXG4gIGF4aW9zLnBvc3QodXJsLCBib2R5LCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlLmRhdGEuZGF0YSkpO1xufSk7XG5cbmNvbnN0IHF1ZXJ5ID0gKGdxbFN0cmluZzogR3FsU3RyaW5nKTogUmVzb3VyY2U8YW55PiA9PiB7XG4gIGNvbnN0IHByb21pc2UgPSBnZXQoZ3FsU3RyaW5nKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBwcm9taXNlV3JhcHBlcihwcm9taXNlKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnksXG59O1xuIiwiLy8gU291cmNlOlxuLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2NvbmN1cnJlbnQtbW9kZS1zdXNwZW5zZS5odG1sI3doYXQtaXMtc3VzcGVuc2UtZXhhY3RseVxuLy8gaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2Zyb3N0eS1oZXJtYW5uLWJ6dHJwXG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbWlzZVdyYXBwZXI8VD4ge1xuICByZWFkKCk6IFQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IDxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogUHJvbWlzZVdyYXBwZXI8VD4gPT4ge1xuICBsZXQgc3RhdHVzID0gJ3BlbmRpbmcnO1xuICBsZXQgcmVzdWx0OiBUO1xuICBjb25zdCBzdXNwZW5kZXIgPSBwcm9taXNlLnRoZW4oXG4gICAgKHIpID0+IHtcbiAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgIHJlc3VsdCA9IHI7XG4gICAgfSxcbiAgICAoZSkgPT4ge1xuICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgIHJlc3VsdCA9IGU7XG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICByZWFkKCkge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgIHRocm93IHN1c3BlbmRlcjtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IHJlc3VsdDtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vYWJvdXREZXZQYWdlLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Fib3V0RGV2UGFnZS5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnc2hhcmVkL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHBhZ2VXcmFwcGVyIGZyb20gJ3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyJztcbmltcG9ydCBBYm91dEZvckRldnMgZnJvbSAnYWJvdXQvYWJvdXRGb3JEZXZzL2Fib3V0Rm9yRGV2cyc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9hYm91dERldlBhZ2UubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBBYm91dERldlBhZ2U6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRTZWN0aW9ufT5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxBYm91dEZvckRldnMgLz5cbiAgICAgIDxGb290ZXIgaXNBcHAgLz5cbiAgICA8L3NlY3Rpb24+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VXcmFwcGVyKHsgQ29tcG9uZW50OiBBYm91dERldlBhZ2UgfSk7XG4iLCIvLyBUaGlzIG9iamVjdGl2ZSBvZiB0aGlzIHdyYXBwZXIgaXMgdG8gY3JlYXRlIGEgZ2VuZXJhbCBhcGkgdGhhdCB0YWtlcyBhIHBhZ2Ugb2Ygb3VyIGFwcFxuLy8gYWxvbmcgd2l0aCB0aGUgR1FMIHF1ZXJ5IHRoYXQgZGVyaXZlcyBhbGwgbmVjZXNzYXJ5IGRhdGEgZm9yIHNhaWQgcGFnZSBhbmQgcnVucyB0aGF0IHF1ZXJ5LlxuLy8gVGhlIGRhdGEgaXMgdGhlbiBwcm92aWRlZCB0byB0aGUgcGFnZSB0byByZW5kZXIgaXRzIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuXG4vLyB3aGVuIGBzZXRIeWRyYXRpb249ZmFsc2VgLCB0aGF0IG1lYW5zIHRoYXQgb25jZSBvdXIgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYmFja2VuZFxuLy8gYW5kIC8gb3Igb3VyIHdyYXBwZWQgY29tcG9uZW50IChgQ29tcG9uZW50YCkgaGFzIG1vdW50ZWQsIHdlIERPIE5PVCB3YW50IHRvIHN0b3Agb3VyIHBhZ2Unc1xuLy8gc3Bpbm5lciAvIGxvYWRpbmcgYW5pbWF0aW9uLiBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYWRkaXRpb25hbCB3b3JrIHRoYXQgaXMgKnN0aWxsKlxuLy8gaGFwcGVuaW5nIGluIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBhZnRlciBkYXRhIGhhcyBiZWVuIGRyaWxsZWQsIHN1Y2ggYXMgYVxuLy8gY29udGV4dCByZWR1Y2VyIGJlaW5nIG11dGF0ZWQuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ2ZhbGxiYWNrcy9zcGlubmVyL3NwaW5uZXInO1xuaW1wb3J0IGFwaSBmcm9tICdhcGkvYXBpJztcbmltcG9ydCB7IEdxbFN0cmluZyB9IGZyb20gJ3R5cGVzL2dxbFR5cGVzJztcbmltcG9ydCB7IHVzZUh5ZHJhdGlvbkNvbnRleHQgfSBmcm9tICdjb250ZXh0L2h5ZHJhdGlvbkNvbnRleHQvaHlkcmF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBQYWdlQ29udGVudFByb3BzIHtcbiAgaXNBbmltYXRpb25Db21wbGV0ZTogYm9vbGVhbjtcbiAgc2V0SHlkcmF0aW9uU3RhdHVzOiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBDb21wb25lbnQ6IFJlYWN0LkZDPFdyYXBwZWRDb21wb25lbnRQcm9wcz47XG4gIGdxbFN0cmluZz86IEdxbFN0cmluZztcbiAgc2V0SHlkcmF0aW9uPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFdyYXBwZWRDb21wb25lbnRQcm9wcyB7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IHBhZ2VXcmFwcGVyID0gKHtcbiAgQ29tcG9uZW50LFxuICBncWxTdHJpbmcsXG4gIHNldEh5ZHJhdGlvbiA9IHRydWUsXG59OiBQcm9wcyk6IFJlYWN0LkZDID0+IHtcbiAgLy8gLS0tLS0gTk8gREFUQSBJUyBORUVERUQgLS0tLS0gLy9cbiAgaWYgKCFncWxTdHJpbmcpIHtcbiAgICBjb25zdCBOb0RhdGFQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNBbmltYXRpb25Db21wbGV0ZSwgc2V0SHlkcmF0aW9uU3RhdHVzIH0gPSB1c2VIeWRyYXRpb25Db250ZXh0KCk7XG5cbiAgICAgIC8vIFNlZSAqMSBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0SHlkcmF0aW9uKSB7XG4gICAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBbc2V0SHlkcmF0aW9uU3RhdHVzXSk7XG5cbiAgICAgIC8vIFNlZSAqMiBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gTm9EYXRhUGFnZTtcbiAgfVxuXG4gIC8vIC0tLS0tIERBVEEgSVMgTkVFREVEIC0tLS0tIC8vXG4gIGNvbnN0IHJlc291cmNlID0gYXBpLnF1ZXJ5KGdxbFN0cmluZyk7XG5cbiAgY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBpc0h5ZHJhdGVkLCBzZXRIeWRyYXRpb25TdGF0dXMgfSA9IHVzZUh5ZHJhdGlvbkNvbnRleHQoKTtcbiAgICAvLyBTZWUgKjEgbm90ZXMgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YCBhYm91dCB3aHkgb3VyIGZhbGxiYWNrIGBTcGlubmVyYCBtYXkgbm90IHJlbmRlciB1bmxlc3NcbiAgICAvLyBvdXIgYXBwIGhhcyBiZWVuIGh5ZHJhdGVkLlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e2lzSHlkcmF0ZWQgJiYgPFNwaW5uZXIgLz59PlxuICAgICAgICA8UGFnZUNvbnRlbnRcbiAgICAgICAgICBpc0FuaW1hdGlvbkNvbXBsZXRlPXtpc0FuaW1hdGlvbkNvbXBsZXRlfVxuICAgICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cz17c2V0SHlkcmF0aW9uU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxQYWdlQ29udGVudFByb3BzPiA9ICh7IGlzQW5pbWF0aW9uQ29tcGxldGUsIHNldEh5ZHJhdGlvblN0YXR1cyB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlc291cmNlLmRhdGEucmVhZCgpO1xuXG4gICAgLy8gU2VlICoxIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHNldEh5ZHJhdGlvbikge1xuICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3NldEh5ZHJhdGlvblN0YXR1c10pO1xuXG4gICAgLy8gU2VlICoyIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgZGF0YT17ZGF0YX0gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQYWdlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9