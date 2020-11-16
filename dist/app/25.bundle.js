(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.img___16Ubp {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;KACpB,oBAAoB;CACxB","file":"gifCardContent.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.img {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n"],"sourceRoot":""}]);

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
	"img": "img___16Ubp"
};

/***/ }),

/***/ "./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less":
/*!********************************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardContent.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less");

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

/***/ "./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.tsx":
/*!************************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifCardContent.module.less */ "./src/spa/shared/cards/gifCard/gifCardContent/gifCardContent.module.less");
/* harmony import */ var _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__);


var GifCardContent = function (_a) {
    var userCard = _a.userCard;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: userCard.title, className: _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__["img"], src: userCard.cardData.gifCardData.gifUrl }));
};
/* harmony default export */ __webpack_exports__["default"] = (GifCardContent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9naWZDYXJkL2dpZkNhcmRDb250ZW50L2dpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2dpZkNhcmQvZ2lmQ2FyZENvbnRlbnQvZ2lmQ2FyZENvbnRlbnQubW9kdWxlLmxlc3M/MzI5OCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9naWZDYXJkL2dpZkNhcmRDb250ZW50L2dpZkNhcmRDb250ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtFQUFrRSxpQkFBaUIscUJBQXFCLDJCQUEyQiwyQkFBMkIsR0FBRyxVQUFVLG9LQUFvSyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxnR0FBZ0csd0JBQXdCLDJCQUEyQix5QkFBeUIsdUJBQXVCLDRCQUE0QixtQkFBbUIsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyxpQkFBaUIscUJBQXFCLDJCQUEyQiwyQkFBMkIsR0FBRyxxQkFBcUI7O0FBRWwyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakJBLGNBQWMsbUJBQU8sQ0FBQyw2WUFBeU47O0FBRS9PLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrSEFBK0Q7O0FBRXBGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRXdCO0FBTXZELElBQU0sY0FBYyxHQUFvQixVQUFDLEVBQVk7UUFBVixzQkFBUTtJQUFPLFFBQ3hELDZEQUNFLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUNuQixTQUFTLEVBQUUsK0RBQVUsRUFDckIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FDekMsQ0FDSDtBQU55RCxDQU16RCxDQUFDO0FBRWEsNkVBQWMsRUFBQyIsImZpbGUiOiIyNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZ19fXzE2VWJwIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9zaGFyZWQvY2FyZHMvZ2lmQ2FyZC9naWZDYXJkQ29udGVudC9naWZDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7QUFXdkIsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7S0FDcEIsb0JBQW9CO0NBQ3hCXCIsXCJmaWxlXCI6XCJnaWZDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgY2FyZXRTaXplOiAwLjYyNXJlbTtcXG4gIGZvb3Rlckxpc3RNYXJnaW46IDNyZW07XFxuICBmb290ZXJMb2dvU2l6ZTogNXJlbTtcXG4gIGhlYWRlckhlaWdodDogM3JlbTtcXG4gIGhlYWRlck1hcmdpblRvcDogMi41cmVtO1xcbiAgbmF2V2lkdGg6IDVyZW07XFxuICBzdGFja0NhcmRTaXplOiA3cmVtO1xcbiAgdG9hc3RXaWR0aDogMjQuNXJlbTtcXG59XFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2FyZXRTaXplXCI6IFwiMC42MjVyZW1cIixcblx0XCJmb290ZXJMaXN0TWFyZ2luXCI6IFwiM3JlbVwiLFxuXHRcImZvb3RlckxvZ29TaXplXCI6IFwiNXJlbVwiLFxuXHRcImhlYWRlckhlaWdodFwiOiBcIjNyZW1cIixcblx0XCJoZWFkZXJNYXJnaW5Ub3BcIjogXCIyLjVyZW1cIixcblx0XCJuYXZXaWR0aFwiOiBcIjVyZW1cIixcblx0XCJzdGFja0NhcmRTaXplXCI6IFwiN3JlbVwiLFxuXHRcInRvYXN0V2lkdGhcIjogXCIyNC41cmVtXCIsXG5cdFwiaW1nXCI6IFwiaW1nX19fMTZVYnBcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2dpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZENvbnRlbnQubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZENvbnRlbnQubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyQ2FyZCB9IGZyb20gJ3NjaGVtYS9jYXJkJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2dpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlckNhcmQ6IFVzZXJDYXJkO1xufVxuXG5jb25zdCBHaWZDYXJkQ29udGVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXNlckNhcmQgfSkgPT4gKFxuICA8aW1nXG4gICAgYWx0PXt1c2VyQ2FyZC50aXRsZX1cbiAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XG4gICAgc3JjPXt1c2VyQ2FyZC5jYXJkRGF0YS5naWZDYXJkRGF0YS5naWZVcmx9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHaWZDYXJkQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=