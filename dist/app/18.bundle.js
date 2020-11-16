(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container___JvBuS {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer___2meX1 {\n  display: flex;\n  justify-content: space-between;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC","file":"imageCardDescription.module.less","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "container___JvBuS",
	"footer": "footer___2meX1"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".img___JtkLk {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;CACjB","file":"imageCardModal.module.less","sourcesContent":[".img {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"img": "img___JtkLk"
};

/***/ }),

/***/ "./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less":
/*!**********************************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardDescription.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less");

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

/***/ "./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.tsx":
/*!**************************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icons/icon/icon */ "./src/spa/shared/icons/icon/icon.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/shared/typography/typography.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _imageCardModal_imageCardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imageCardModal/imageCardModal */ "./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.tsx");
/* harmony import */ var _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageCardDescription.module.less */ "./src/spa/shared/cards/imageCard/imageCardDescription/imageCardDescription.module.less");
/* harmony import */ var _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__);






var ImageCardDescription = function (_a) {
    var isPreview = _a.isPreview, userCard = _a.userCard;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () {
        setModalId(userCard.id);
    };
    var ExpandIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'lightGrey' : 'blue', iconName: "expand", size: 18 })); };
    var LinkIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'lightGrey' : 'blue', iconName: "link", size: 18 })); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "two", text: userCard.title, weight: "bold" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["footer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: LinkIconContent, disabled: isPreview, link: userCard.cardData.imageCardData.imageUrl, size: "two", text: "Link", weight: "bold" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: ExpandIconContent, disabled: isPreview, onClick: handleClick, size: "two", text: "Expand", weight: "bold" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_imageCardModal_imageCardModal__WEBPACK_IMPORTED_MODULE_4__["default"], { id: userCard.id, imageUrl: userCard.cardData.imageCardData.imageUrl, title: userCard.title })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardDescription);


/***/ }),

/***/ "./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less":
/*!**********************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardModal.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less");

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

/***/ "./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.tsx":
/*!**************************************************************************!*\
  !*** ./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCardModal.module.less */ "./src/spa/shared/cards/imageCard/imageCardModal/imageCardModal.module.less");
/* harmony import */ var _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__);



var ImageCardModal = function (_a) {
    var id = _a.id, imageUrl = _a.imageUrl, title = _a.title;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"], { id: id, title: title },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: title, className: _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__["img"], src: imageUrl })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardModal);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9pbWFnZUNhcmQvaW1hZ2VDYXJkRGVzY3JpcHRpb24vaW1hZ2VDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvaW1hZ2VDYXJkL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2ltYWdlQ2FyZC9pbWFnZUNhcmREZXNjcmlwdGlvbi9pbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzcz9hYWU3Iiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2ltYWdlQ2FyZC9pbWFnZUNhcmREZXNjcmlwdGlvbi9pbWFnZUNhcmREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvaW1hZ2VDYXJkL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzP2RhNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvaW1hZ2VDYXJkL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixrQkFBa0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLFVBQVUsMktBQTJLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxnRkFBZ0Ysa0JBQWtCLDJCQUEyQixpQkFBaUIsbUNBQW1DLEdBQUcsV0FBVyxrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCOztBQUU1dUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1E7QUFFZ0I7QUFRdkQsSUFBTSxjQUFjLEdBQW9CLFVBQUMsRUFJeEM7UUFIQyxVQUFFLEVBQ0Ysc0JBQVEsRUFDUixnQkFBSztJQUNELFFBQ0osb0RBQUMsMERBQUssSUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLO1FBQ3pCLDZEQUNFLEdBQUcsRUFBRSxLQUFLLEVBQ1YsU0FBUyxFQUFFLCtEQUFVLEVBQ3JCLEdBQUcsRUFBRSxRQUFRLEdBQ2IsQ0FDSSxDQUNUO0FBUkssQ0FRTCxDQUFDO0FBRWEsNkVBQWMsRUFBQyIsImZpbGUiOiIxOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lcl9fX0p2QnVTIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyX19fMm1lWDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9zaGFyZWQvY2FyZHMvaW1hZ2VDYXJkL2ltYWdlQ2FyZERlc2NyaXB0aW9uL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDXCIsXCJmaWxlXCI6XCJpbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfX19KdkJ1U1wiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9fXzJtZVgxXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWdfX19KdGtMayB7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL3NoYXJlZC9jYXJkcy9pbWFnZUNhcmQvaW1hZ2VDYXJkTW9kYWwvaW1hZ2VDYXJkTW9kYWwubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCXCIsXCJmaWxlXCI6XCJpbWFnZUNhcmRNb2RhbC5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBtYXgtd2lkdGg6IDgwdnc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbWdcIjogXCJpbWdfX19KdGtMa1wiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJ2ljb25zL2ljb24vaWNvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICd0eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgVXNlckNhcmQgfSBmcm9tICdzY2hlbWEvY2FyZCc7XG5pbXBvcnQgeyB1c2VNb2RhbENvbnRleHQgfSBmcm9tICdjb250ZXh0L21vZGFsQ29udGV4dC9tb2RhbENvbnRleHQnO1xuaW1wb3J0IEltYWdlQ2FyZE1vZGFsIGZyb20gJy4uL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNQcmV2aWV3OiBib29sZWFuO1xuICB1c2VyQ2FyZDogVXNlckNhcmQ7XG59XG5cbmNvbnN0IEltYWdlQ2FyZERlc2NyaXB0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBpc1ByZXZpZXcsIHVzZXJDYXJkIH0pID0+IHtcbiAgY29uc3QgeyBzZXRNb2RhbElkIH0gPSB1c2VNb2RhbENvbnRleHQoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRNb2RhbElkKHVzZXJDYXJkLmlkKTtcbiAgfTtcblxuICBjb25zdCBFeHBhbmRJY29uQ29udGVudDogUmVhY3QuRkMgPSAoKSA9PiAoXG4gICAgPEljb25cbiAgICAgIGNvbG9yPXtpc1ByZXZpZXcgPyAnbGlnaHRHcmV5JyA6ICdibHVlJ31cbiAgICAgIGljb25OYW1lPVwiZXhwYW5kXCJcbiAgICAgIHNpemU9ezE4fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgTGlua0ljb25Db250ZW50OiBSZWFjdC5GQyA9ICgpID0+IChcbiAgICA8SWNvblxuICAgICAgY29sb3I9e2lzUHJldmlldyA/ICdsaWdodEdyZXknIDogJ2JsdWUnfVxuICAgICAgaWNvbk5hbWU9XCJsaW5rXCJcbiAgICAgIHNpemU9ezE4fVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBtYXhUZXh0TGVuZ3RoPXs2MH1cbiAgICAgICAgICAgIHNpemU9XCJ0d29cIlxuICAgICAgICAgICAgdGV4dD17dXNlckNhcmQudGl0bGV9XG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBDb250ZW50PXtMaW5rSWNvbkNvbnRlbnR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aWV3fVxuICAgICAgICAgICAgbGluaz17dXNlckNhcmQuY2FyZERhdGEuaW1hZ2VDYXJkRGF0YS5pbWFnZVVybH1cbiAgICAgICAgICAgIHNpemU9XCJ0d29cIlxuICAgICAgICAgICAgdGV4dD1cIkxpbmtcIlxuICAgICAgICAgICAgd2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgQ29udGVudD17RXhwYW5kSWNvbkNvbnRlbnR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aWV3fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBzaXplPVwidHdvXCJcbiAgICAgICAgICAgIHRleHQ9XCJFeHBhbmRcIlxuICAgICAgICAgICAgd2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZUNhcmRNb2RhbFxuICAgICAgICBpZD17dXNlckNhcmQuaWR9XG4gICAgICAgIGltYWdlVXJsPXt1c2VyQ2FyZC5jYXJkRGF0YS5pbWFnZUNhcmREYXRhLmltYWdlVXJsfVxuICAgICAgICB0aXRsZT17dXNlckNhcmQudGl0bGV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkRGVzY3JpcHRpb247XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkTW9kYWwubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkTW9kYWwubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kYWxzL21vZGFsL21vZGFsJztcbmltcG9ydCB7IFVzZXJDYXJkIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vaW1hZ2VDYXJkTW9kYWwubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogVXNlckNhcmRbJ2lkJ107XG4gIGltYWdlVXJsOiBVc2VyQ2FyZFsnY2FyZERhdGEnXVsnaW1hZ2VDYXJkRGF0YSddWydpbWFnZVVybCddO1xuICB0aXRsZTogVXNlckNhcmRbJ3RpdGxlJ107XG59XG5cbmNvbnN0IEltYWdlQ2FyZE1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpZCxcbiAgaW1hZ2VVcmwsXG4gIHRpdGxlLFxufSkgPT4gKFxuICA8TW9kYWwgaWQ9e2lkfSB0aXRsZT17dGl0bGV9PlxuICAgIDxpbWdcbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XG4gICAgICBzcmM9e2ltYWdlVXJsfVxuICAgIC8+XG4gIDwvTW9kYWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcmRNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=