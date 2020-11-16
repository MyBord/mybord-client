(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.img___sjNLy {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;KACpB,oBAAoB;CACxB","file":"imageCardContent.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.img {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n"],"sourceRoot":""}]);

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
	"img": "img___sjNLy"
};

/***/ }),

/***/ "./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less":
/*!**************************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardContent.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.tsx":
/*!******************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCardContent.module.less */ "./src/spa/shared/cards/imageCard/imageCardContent/imageCardContent.module.less");
/* harmony import */ var _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__);


var ImageCardContent = function (_a) {
    var userCard = _a.userCard;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: userCard.title, className: _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__["img"], src: userCard.cardData.imageCardData.imageUrl }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardContent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9pbWFnZUNhcmQvaW1hZ2VDYXJkQ29udGVudC9pbWFnZUNhcmRDb250ZW50Lm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2ltYWdlQ2FyZC9pbWFnZUNhcmRDb250ZW50L2ltYWdlQ2FyZENvbnRlbnQubW9kdWxlLmxlc3M/NzczZCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9pbWFnZUNhcmQvaW1hZ2VDYXJkQ29udGVudC9pbWFnZUNhcmRDb250ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtFQUFrRSxpQkFBaUIscUJBQXFCLDJCQUEyQiwyQkFBMkIsR0FBRyxVQUFVLDBLQUEwSyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxrR0FBa0csd0JBQXdCLDJCQUEyQix5QkFBeUIsdUJBQXVCLDRCQUE0QixtQkFBbUIsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyxpQkFBaUIscUJBQXFCLDJCQUEyQiwyQkFBMkIsR0FBRyxxQkFBcUI7O0FBRTEyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakJBLGNBQWMsbUJBQU8sQ0FBQyxxWkFBMk47O0FBRWpQLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrSEFBK0Q7O0FBRXBGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRTBCO0FBTXpELElBQU0sZ0JBQWdCLEdBQW9CLFVBQUMsRUFBWTtRQUFWLHNCQUFRO0lBQU8sUUFDMUQsNkRBQ0UsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQ25CLFNBQVMsRUFBRSxpRUFBVSxFQUNyQixHQUFHLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUM3QyxDQUNIO0FBTjJELENBTTNELENBQUM7QUFFYSwrRUFBZ0IsRUFBQyIsImZpbGUiOiIyNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZ19fX3NqTkx5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9zaGFyZWQvY2FyZHMvaW1hZ2VDYXJkL2ltYWdlQ2FyZENvbnRlbnQvaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7QUFXdkIsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7S0FDcEIsb0JBQW9CO0NBQ3hCXCIsXCJmaWxlXCI6XCJpbWFnZUNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuOmV4cG9ydCB7XFxuICBjYXJldFNpemU6IDAuNjI1cmVtO1xcbiAgZm9vdGVyTGlzdE1hcmdpbjogM3JlbTtcXG4gIGZvb3RlckxvZ29TaXplOiA1cmVtO1xcbiAgaGVhZGVySGVpZ2h0OiAzcmVtO1xcbiAgaGVhZGVyTWFyZ2luVG9wOiAyLjVyZW07XFxuICBuYXZXaWR0aDogNXJlbTtcXG4gIHN0YWNrQ2FyZFNpemU6IDdyZW07XFxuICB0b2FzdFdpZHRoOiAyNC41cmVtO1xcbn1cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJldFNpemVcIjogXCIwLjYyNXJlbVwiLFxuXHRcImZvb3Rlckxpc3RNYXJnaW5cIjogXCIzcmVtXCIsXG5cdFwiZm9vdGVyTG9nb1NpemVcIjogXCI1cmVtXCIsXG5cdFwiaGVhZGVySGVpZ2h0XCI6IFwiM3JlbVwiLFxuXHRcImhlYWRlck1hcmdpblRvcFwiOiBcIjIuNXJlbVwiLFxuXHRcIm5hdldpZHRoXCI6IFwiNXJlbVwiLFxuXHRcInN0YWNrQ2FyZFNpemVcIjogXCI3cmVtXCIsXG5cdFwidG9hc3RXaWR0aFwiOiBcIjI0LjVyZW1cIixcblx0XCJpbWdcIjogXCJpbWdfX19zak5MeVwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZENvbnRlbnQubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJDYXJkIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJDYXJkOiBVc2VyQ2FyZDtcbn1cblxuY29uc3QgSW1hZ2VDYXJkQ29udGVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXNlckNhcmQgfSkgPT4gKFxuICA8aW1nXG4gICAgYWx0PXt1c2VyQ2FyZC50aXRsZX1cbiAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XG4gICAgc3JjPXt1c2VyQ2FyZC5jYXJkRGF0YS5pbWFnZUNhcmREYXRhLmltYWdlVXJsfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=