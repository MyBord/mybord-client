(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
/* harmony import */ var lottiePlayer_lottiePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottiePlayer/lottiePlayer */ "./src/spa/components/neutrons/lottiePlayer/lottiePlayer.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/components/atoms/typography/typography.tsx");
/* harmony import */ var lotties_construction_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lotties/construction.json */ "./src/spa/components/neutrons/lotties/construction.json");
var lotties_construction_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! lotties/construction.json */ "./src/spa/components/neutrons/lotties/construction.json", 1);
/* harmony import */ var pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/pageWrapper/pageWrapper */ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx");
/* harmony import */ var _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorPage.module.less */ "./src/spa/app/pages/errorPage/errorPage.module.less");
/* harmony import */ var _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__);






var ErrorPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _errorPage_module_less__WEBPACK_IMPORTED_MODULE_5__["div"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](lottiePlayer_lottiePlayer__WEBPACK_IMPORTED_MODULE_1__["default"], { animationData: lotties_construction_json__WEBPACK_IMPORTED_MODULE_3__, autoplay: true, loop: true, size: 400 }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvZXJyb3JQYWdlL2Vycm9yUGFnZS5tb2R1bGUubGVzcz80OGJiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL2Vycm9yUGFnZS9lcnJvclBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHdJQUF3SSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSwrREFBK0Qsa0JBQWtCLDJCQUEyQixHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixHQUFHLHFCQUFxQjs7QUFFdGlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzBDO0FBT3BFLElBQU0sR0FBRyxHQUFHLFVBQUMsU0FBb0IsSUFBbUIsV0FBSSxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRSxJQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQyxlQUFl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QUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekIsbUNBQW1DO1FBQ25DLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsT0FBTyxvREFBQyxTQUFTLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVhLDBFQUFXLEVBQUMiLCJmaWxlIjoiMjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaXZfX19BME8xZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmRpdl9fX0EwTzFkID4gcCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2FwcC9wYWdlcy9lcnJvclBhZ2UvZXJyb3JQYWdlLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiZXJyb3JQYWdlLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kaXYgPiBwIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJkaXZcIjogXCJkaXZfX19BME8xZFwiXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcHJvbWlzZVdyYXBwZXIsIHsgUHJvbWlzZVdyYXBwZXIgfSBmcm9tICdhcGkvcHJvbWlzZVdyYXBwZXInO1xuaW1wb3J0IHsgR3FsU3RyaW5nIH0gZnJvbSAndHlwZXMvZ3FsVHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcbiAgZGF0YTogUHJvbWlzZVdyYXBwZXI8VD47XG59XG5cbmNvbnN0IGdldCA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFByb21pc2U8YW55PiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogZ3FsU3RyaW5nLmxvYy5zb3VyY2UuYm9keSB9KTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdQUk9EJyA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHtwcm9jZXNzLmVudi5VUkl9YDtcblxuICBheGlvcy5wb3N0KHVybCwgYm9keSwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpKTtcbn0pO1xuXG5jb25zdCBxdWVyeSA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFJlc291cmNlPGFueT4gPT4ge1xuICBjb25zdCBwcm9taXNlID0gZ2V0KGdxbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcHJvbWlzZVdyYXBwZXIocHJvbWlzZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5LFxufTtcbiIsIi8vIFNvdXJjZTpcbi8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb25jdXJyZW50LW1vZGUtc3VzcGVuc2UuaHRtbCN3aGF0LWlzLXN1c3BlbnNlLWV4YWN0bHlcbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9mcm9zdHktaGVybWFubi1ienRycFxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VXcmFwcGVyPFQ+IHtcbiAgcmVhZCgpOiBUO1xufVxuXG5leHBvcnQgZGVmYXVsdCA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2VXcmFwcGVyPFQ+ID0+IHtcbiAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgbGV0IHJlc3VsdDogVDtcbiAgY29uc3Qgc3VzcGVuZGVyID0gcHJvbWlzZS50aGVuKFxuICAgIChyKSA9PiB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICByZXN1bHQgPSByO1xuICAgIH0sXG4gICAgKGUpID0+IHtcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICByZXN1bHQgPSBlO1xuICAgIH0sXG4gICk7XG4gIHJldHVybiB7XG4gICAgcmVhZCgpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aHJvdyBzdXNwZW5kZXI7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Vycm9yUGFnZS5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Vycm9yUGFnZS5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9lcnJvclBhZ2UubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG90dGllUGxheWVyIGZyb20gJ2xvdHRpZVBsYXllci9sb3R0aWVQbGF5ZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbmltcG9ydCBjb25zdHJ1Y3Rpb25BbmltYXRpb24gZnJvbSAnbG90dGllcy9jb25zdHJ1Y3Rpb24uanNvbic7XG5pbXBvcnQgcGFnZVdyYXBwZXIgZnJvbSAncGFnZXMvcGFnZVdyYXBwZXIvcGFnZVdyYXBwZXInO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZXJyb3JQYWdlLm1vZHVsZS5sZXNzJztcblxuY29uc3QgRXJyb3JQYWdlOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxuICAgIDxMb3R0aWVQbGF5ZXJcbiAgICAgIGFuaW1hdGlvbkRhdGE9e2NvbnN0cnVjdGlvbkFuaW1hdGlvbn1cbiAgICAgIGF1dG9wbGF5XG4gICAgICBsb29wXG4gICAgICBzaXplPXs0MDB9XG4gICAgLz5cbiAgICA8VHlwb2dyYXBoeVxuICAgICAgc2l6ZT1cImZvdXJcIlxuICAgICAgdGV4dD1cIk9vcHMgLi4uIGl0IGxvb2tzIGxpa2Ugc29tZXRoaW5nIHdlbnQgd3JvbmcuXCJcbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VXcmFwcGVyKHsgQ29tcG9uZW50OiBFcnJvclBhZ2UgfSk7XG4iLCIvLyBUaGlzIG9iamVjdGl2ZSBvZiB0aGlzIHdyYXBwZXIgaXMgdG8gY3JlYXRlIGEgZ2VuZXJhbCBhcGkgdGhhdCB0YWtlcyBhIHBhZ2Ugb2Ygb3VyIGFwcFxuLy8gYWxvbmcgd2l0aCB0aGUgR1FMIHF1ZXJ5IHRoYXQgZGVyaXZlcyBhbGwgbmVjZXNzYXJ5IGRhdGEgZm9yIHNhaWQgcGFnZSBhbmQgcnVucyB0aGF0IHF1ZXJ5LlxuLy8gVGhlIGRhdGEgaXMgdGhlbiBwcm92aWRlZCB0byB0aGUgcGFnZSB0byByZW5kZXIgaXRzIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuXG4vLyB3aGVuIGBzZXRIeWRyYXRpb249ZmFsc2VgLCB0aGF0IG1lYW5zIHRoYXQgb25jZSBvdXIgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYmFja2VuZFxuLy8gYW5kIC8gb3Igb3VyIHdyYXBwZWQgY29tcG9uZW50IChgQ29tcG9uZW50YCkgaGFzIG1vdW50ZWQsIHdlIERPIE5PVCB3YW50IHRvIHN0b3Agb3VyIHBhZ2Unc1xuLy8gc3Bpbm5lciAvIGxvYWRpbmcgYW5pbWF0aW9uLiBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYWRkaXRpb25hbCB3b3JrIHRoYXQgaXMgKnN0aWxsKlxuLy8gaGFwcGVuaW5nIGluIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBhZnRlciBkYXRhIGhhcyBiZWVuIGRyaWxsZWQsIHN1Y2ggYXMgYVxuLy8gY29udGV4dCByZWR1Y2VyIGJlaW5nIG11dGF0ZWQuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ2ZhbGxiYWNrcy9zcGlubmVyL3NwaW5uZXInO1xuaW1wb3J0IGFwaSBmcm9tICdhcGkvYXBpJztcbmltcG9ydCB7IEdxbFN0cmluZyB9IGZyb20gJ3R5cGVzL2dxbFR5cGVzJztcbmltcG9ydCB7IHVzZUh5ZHJhdGlvbkNvbnRleHQgfSBmcm9tICdjb250ZXh0L2h5ZHJhdGlvbkNvbnRleHQvaHlkcmF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBQYWdlQ29udGVudFByb3BzIHtcbiAgaXNBbmltYXRpb25Db21wbGV0ZTogYm9vbGVhbjtcbiAgc2V0SHlkcmF0aW9uU3RhdHVzOiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBDb21wb25lbnQ6IFJlYWN0LkZDPFdyYXBwZWRDb21wb25lbnRQcm9wcz47XG4gIGdxbFN0cmluZz86IEdxbFN0cmluZztcbiAgc2V0SHlkcmF0aW9uPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFdyYXBwZWRDb21wb25lbnRQcm9wcyB7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IHBhZ2VXcmFwcGVyID0gKHtcbiAgQ29tcG9uZW50LFxuICBncWxTdHJpbmcsXG4gIHNldEh5ZHJhdGlvbiA9IHRydWUsXG59OiBQcm9wcyk6IFJlYWN0LkZDID0+IHtcbiAgLy8gLS0tLS0gTk8gREFUQSBJUyBORUVERUQgLS0tLS0gLy9cbiAgaWYgKCFncWxTdHJpbmcpIHtcbiAgICBjb25zdCBOb0RhdGFQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNBbmltYXRpb25Db21wbGV0ZSwgc2V0SHlkcmF0aW9uU3RhdHVzIH0gPSB1c2VIeWRyYXRpb25Db250ZXh0KCk7XG5cbiAgICAgIC8vIFNlZSAqMSBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0SHlkcmF0aW9uKSB7XG4gICAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBbc2V0SHlkcmF0aW9uU3RhdHVzXSk7XG5cbiAgICAgIC8vIFNlZSAqMiBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gTm9EYXRhUGFnZTtcbiAgfVxuXG4gIC8vIC0tLS0tIERBVEEgSVMgTkVFREVEIC0tLS0tIC8vXG4gIGNvbnN0IHJlc291cmNlID0gYXBpLnF1ZXJ5KGdxbFN0cmluZyk7XG5cbiAgY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBpc0h5ZHJhdGVkLCBzZXRIeWRyYXRpb25TdGF0dXMgfSA9IHVzZUh5ZHJhdGlvbkNvbnRleHQoKTtcbiAgICAvLyBTZWUgKjEgbm90ZXMgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YCBhYm91dCB3aHkgb3VyIGZhbGxiYWNrIGBTcGlubmVyYCBtYXkgbm90IHJlbmRlciB1bmxlc3NcbiAgICAvLyBvdXIgYXBwIGhhcyBiZWVuIGh5ZHJhdGVkLlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e2lzSHlkcmF0ZWQgJiYgPFNwaW5uZXIgLz59PlxuICAgICAgICA8UGFnZUNvbnRlbnRcbiAgICAgICAgICBpc0FuaW1hdGlvbkNvbXBsZXRlPXtpc0FuaW1hdGlvbkNvbXBsZXRlfVxuICAgICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cz17c2V0SHlkcmF0aW9uU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxQYWdlQ29udGVudFByb3BzPiA9ICh7IGlzQW5pbWF0aW9uQ29tcGxldGUsIHNldEh5ZHJhdGlvblN0YXR1cyB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlc291cmNlLmRhdGEucmVhZCgpO1xuXG4gICAgLy8gU2VlICoxIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHNldEh5ZHJhdGlvbikge1xuICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3NldEh5ZHJhdGlvblN0YXR1c10pO1xuXG4gICAgLy8gU2VlICoyIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgZGF0YT17ZGF0YX0gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQYWdlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9