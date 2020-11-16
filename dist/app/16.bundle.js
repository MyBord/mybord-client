(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/errorPage/errorPage.module.less":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/app/pages/errorPage/errorPage.module.less ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".div___A0O1d {\n  display: flex;\n  flex-direction: column;\n}\n.div___A0O1d > p {\n  margin-top: 2rem;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/app/pages/errorPage/errorPage.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB","file":"errorPage.module.less","sourcesContent":[".div {\n  display: flex;\n  flex-direction: column;\n}\n.div > p {\n  margin-top: 2rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"div": "div___A0O1d"
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

/***/ "./src/spa/app/pages/errorPage/errorPage.module.less":
/*!***********************************************************!*\
  !*** ./src/spa/app/pages/errorPage/errorPage.module.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./errorPage.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/errorPage/errorPage.module.less");

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

/***/ "./src/spa/app/pages/errorPage/errorPage.tsx":
/*!***************************************************!*\
  !*** ./src/spa/app/pages/errorPage/errorPage.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lotty_lottiePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lotty/lottiePlayer */ "./src/thirdParty/lotty/lottiePlayer.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/shared/typography/typography.tsx");
/* harmony import */ var lotty_lotties_construction_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lotty/lotties/construction.json */ "./src/thirdParty/lotty/lotties/construction.json");
var lotty_lotties_construction_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! lotty/lotties/construction.json */ "./src/thirdParty/lotty/lotties/construction.json", 1);
/* harmony import */ var pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/pageWrapper/pageWrapper */ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx");
/* harmony import */ var _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorPage.module.less */ "./src/spa/app/pages/errorPage/errorPage.module.less");
/* harmony import */ var _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__);






var ErrorPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__["div"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](lotty_lottiePlayer__WEBPACK_IMPORTED_MODULE_1__["default"], { animationData: lotty_lotties_construction_json__WEBPACK_IMPORTED_MODULE_3__, autoplay: true, loop: true, size: 400 }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "four", text: "Oops ... it looks like something went wrong." }))); };
/* harmony default export */ __webpack_exports__["default"] = (Object(pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])({ Component: ErrorPage }));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvZXJyb3JQYWdlL2Vycm9yUGFnZS5tb2R1bGUubGVzcz80OGJiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL2Vycm9yUGFnZS9lcnJvclBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHdJQUF3SSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSwrREFBK0Qsa0JBQWtCLDJCQUEyQixHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixHQUFHLHFCQUFxQjs7QUFFdGlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzBDO0FBT3BFLElBQU0sR0FBRyxHQUFHLFVBQUMsU0FBb0IsSUFBbUIsV0FBSSxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRSxJQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQyxlQUFl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QUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekIsbUNBQW1DO1FBQ25DLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsT0FBTyxvREFBQyxTQUFTLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVhLDBFQUFXLEVBQUMiLCJmaWxlIjoiMTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaXZfX19BME8xZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmRpdl9fX0EwTzFkID4gcCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2FwcC9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiZXJyb3JQYWdlLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kaXYgPiBwIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJkaXZcIjogXCJkaXZfX19BME8xZFwiXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcHJvbWlzZVdyYXBwZXIsIHsgUHJvbWlzZVdyYXBwZXIgfSBmcm9tICdhcGkvcHJvbWlzZVdyYXBwZXInO1xuaW1wb3J0IHsgR3FsU3RyaW5nIH0gZnJvbSAndHlwZXMvZ3FsVHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcbiAgZGF0YTogUHJvbWlzZVdyYXBwZXI8VD47XG59XG5cbmNvbnN0IGdldCA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFByb21pc2U8YW55PiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogZ3FsU3RyaW5nLmxvYy5zb3VyY2UuYm9keSB9KTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdQUk9EJyA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHtwcm9jZXNzLmVudi5VUkl9YDtcblxuICBheGlvcy5wb3N0KHVybCwgYm9keSwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpKTtcbn0pO1xuXG5jb25zdCBxdWVyeSA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFJlc291cmNlPGFueT4gPT4ge1xuICBjb25zdCBwcm9taXNlID0gZ2V0KGdxbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcHJvbWlzZVdyYXBwZXIocHJvbWlzZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5LFxufTtcbiIsIi8vIFNvdXJjZTpcbi8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb25jdXJyZW50LW1vZGUtc3VzcGVuc2UuaHRtbCN3aGF0LWlzLXN1c3BlbnNlLWV4YWN0bHlcbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9mcm9zdHktaGVybWFubi1ienRycFxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VXcmFwcGVyPFQ+IHtcbiAgcmVhZCgpOiBUO1xufVxuXG5leHBvcnQgZGVmYXVsdCA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2VXcmFwcGVyPFQ+ID0+IHtcbiAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgbGV0IHJlc3VsdDogVDtcbiAgY29uc3Qgc3VzcGVuZGVyID0gcHJvbWlzZS50aGVuKFxuICAgIChyKSA9PiB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICByZXN1bHQgPSByO1xuICAgIH0sXG4gICAgKGUpID0+IHtcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICByZXN1bHQgPSBlO1xuICAgIH0sXG4gICk7XG4gIHJldHVybiB7XG4gICAgcmVhZCgpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aHJvdyBzdXNwZW5kZXI7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Vycm9yUGFnZS5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Vycm9yUGFnZS5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9lcnJvclBhZ2UubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG90dGllUGxheWVyIGZyb20gJ2xvdHR5L2xvdHRpZVBsYXllcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICd0eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuaW1wb3J0IGNvbnN0cnVjdGlvbkFuaW1hdGlvbiBmcm9tICdsb3R0eS9sb3R0aWVzL2NvbnN0cnVjdGlvbi5qc29uJztcbmltcG9ydCBwYWdlV3JhcHBlciBmcm9tICdwYWdlcy9wYWdlV3JhcHBlci9wYWdlV3JhcHBlcic7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2UubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBFcnJvclBhZ2U6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdn0+XG4gICAgPExvdHRpZVBsYXllclxuICAgICAgYW5pbWF0aW9uRGF0YT17Y29uc3RydWN0aW9uQW5pbWF0aW9ufVxuICAgICAgYXV0b3BsYXlcbiAgICAgIGxvb3BcbiAgICAgIHNpemU9ezQwMH1cbiAgICAvPlxuICAgIDxUeXBvZ3JhcGh5XG4gICAgICBzaXplPVwiZm91clwiXG4gICAgICB0ZXh0PVwiT29wcyAuLi4gaXQgbG9va3MgbGlrZSBzb21ldGhpbmcgd2VudCB3cm9uZy5cIlxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXIoeyBDb21wb25lbnQ6IEVycm9yUGFnZSB9KTtcbiIsIi8vIFRoaXMgb2JqZWN0aXZlIG9mIHRoaXMgd3JhcHBlciBpcyB0byBjcmVhdGUgYSBnZW5lcmFsIGFwaSB0aGF0IHRha2VzIGEgcGFnZSBvZiBvdXIgYXBwXG4vLyBhbG9uZyB3aXRoIHRoZSBHUUwgcXVlcnkgdGhhdCBkZXJpdmVzIGFsbCBuZWNlc3NhcnkgZGF0YSBmb3Igc2FpZCBwYWdlIGFuZCBydW5zIHRoYXQgcXVlcnkuXG4vLyBUaGUgZGF0YSBpcyB0aGVuIHByb3ZpZGVkIHRvIHRoZSBwYWdlIHRvIHJlbmRlciBpdHMgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG5cbi8vIHdoZW4gYHNldEh5ZHJhdGlvbj1mYWxzZWAsIHRoYXQgbWVhbnMgdGhhdCBvbmNlIG91ciBkYXRhIGhhcyBiZWVuIHJldHJpZXZlZCBmcm9tIHRoZSBiYWNrZW5kXG4vLyBhbmQgLyBvciBvdXIgd3JhcHBlZCBjb21wb25lbnQgKGBDb21wb25lbnRgKSBoYXMgbW91bnRlZCwgd2UgRE8gTk9UIHdhbnQgdG8gc3RvcCBvdXIgcGFnZSdzXG4vLyBzcGlubmVyIC8gbG9hZGluZyBhbmltYXRpb24uIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBhZGRpdGlvbmFsIHdvcmsgdGhhdCBpcyAqc3RpbGwqXG4vLyBoYXBwZW5pbmcgaW4gdGhlIGJhY2tncm91bmQgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IGFmdGVyIGRhdGEgaGFzIGJlZW4gZHJpbGxlZCwgc3VjaCBhcyBhXG4vLyBjb250ZXh0IHJlZHVjZXIgYmVpbmcgbXV0YXRlZC5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnZmFsbGJhY2tzL3NwaW5uZXIvc3Bpbm5lcic7XG5pbXBvcnQgYXBpIGZyb20gJ2FwaS9hcGknO1xuaW1wb3J0IHsgR3FsU3RyaW5nIH0gZnJvbSAndHlwZXMvZ3FsVHlwZXMnO1xuaW1wb3J0IHsgdXNlSHlkcmF0aW9uQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvaHlkcmF0aW9uQ29udGV4dC9oeWRyYXRpb25Db250ZXh0JztcblxuaW50ZXJmYWNlIFBhZ2VDb250ZW50UHJvcHMge1xuICBpc0FuaW1hdGlvbkNvbXBsZXRlOiBib29sZWFuO1xuICBzZXRIeWRyYXRpb25TdGF0dXM6IChzdGF0dXM6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIENvbXBvbmVudDogUmVhY3QuRkM8V3JhcHBlZENvbXBvbmVudFByb3BzPjtcbiAgZ3FsU3RyaW5nPzogR3FsU3RyaW5nO1xuICBzZXRIeWRyYXRpb24/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgV3JhcHBlZENvbXBvbmVudFByb3BzIHtcbiAgZGF0YT86IGFueTtcbn1cblxuY29uc3QgcGFnZVdyYXBwZXIgPSAoe1xuICBDb21wb25lbnQsXG4gIGdxbFN0cmluZyxcbiAgc2V0SHlkcmF0aW9uID0gdHJ1ZSxcbn06IFByb3BzKTogUmVhY3QuRkMgPT4ge1xuICAvLyAtLS0tLSBOTyBEQVRBIElTIE5FRURFRCAtLS0tLSAvL1xuICBpZiAoIWdxbFN0cmluZykge1xuICAgIGNvbnN0IE5vRGF0YVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBzZXRIeWRyYXRpb25TdGF0dXMgfSA9IHVzZUh5ZHJhdGlvbkNvbnRleHQoKTtcblxuICAgICAgLy8gU2VlICoxIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXRIeWRyYXRpb24pIHtcbiAgICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFtzZXRIeWRyYXRpb25TdGF0dXNdKTtcblxuICAgICAgLy8gU2VlICoyIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICAgIGlmIChpc0FuaW1hdGlvbkNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBOb0RhdGFQYWdlO1xuICB9XG5cbiAgLy8gLS0tLS0gREFUQSBJUyBORUVERUQgLS0tLS0gLy9cbiAgY29uc3QgcmVzb3VyY2UgPSBhcGkucXVlcnkoZ3FsU3RyaW5nKTtcblxuICBjb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzQW5pbWF0aW9uQ29tcGxldGUsIGlzSHlkcmF0ZWQsIHNldEh5ZHJhdGlvblN0YXR1cyB9ID0gdXNlSHlkcmF0aW9uQ29udGV4dCgpO1xuICAgIC8vIFNlZSAqMSBub3RlcyBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgIGFib3V0IHdoeSBvdXIgZmFsbGJhY2sgYFNwaW5uZXJgIG1heSBub3QgcmVuZGVyIHVubGVzc1xuICAgIC8vIG91ciBhcHAgaGFzIGJlZW4gaHlkcmF0ZWQuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17aXNIeWRyYXRlZCAmJiA8U3Bpbm5lciAvPn0+XG4gICAgICAgIDxQYWdlQ29udGVudFxuICAgICAgICAgIGlzQW5pbWF0aW9uQ29tcGxldGU9e2lzQW5pbWF0aW9uQ29tcGxldGV9XG4gICAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzPXtzZXRIeWRyYXRpb25TdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LlN1c3BlbnNlPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUGFnZUNvbnRlbnQ6IFJlYWN0LkZDPFBhZ2VDb250ZW50UHJvcHM+ID0gKHsgaXNBbmltYXRpb25Db21wbGV0ZSwgc2V0SHlkcmF0aW9uU3RhdHVzIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVzb3VyY2UuZGF0YS5yZWFkKCk7XG5cbiAgICAvLyBTZWUgKjEgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YFxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2V0SHlkcmF0aW9uKSB7XG4gICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9LCBbc2V0SHlkcmF0aW9uU3RhdHVzXSk7XG5cbiAgICAvLyBTZWUgKjIgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YFxuICAgIGlmIChpc0FuaW1hdGlvbkNvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gPENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFBhZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=