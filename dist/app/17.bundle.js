(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container___2LzU3 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer___3UXKI {\n  display: flex;\n  justify-content: space-between;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC","file":"gifCardDescription.module.less","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "container___2LzU3",
	"footer": "footer___3UXKI"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".img___2Z-3C {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;CACjB","file":"gifCardModal.module.less","sourcesContent":[".img {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"img": "img___2Z-3C"
};

/***/ }),

/***/ "./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less":
/*!****************************************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardDescription.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less");

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

/***/ "./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.tsx":
/*!********************************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icons/icon/icon */ "./src/spa/shared/icons/icon/icon.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/shared/typography/typography.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _gifCardModal_gifCardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gifCardModal/gifCardModal */ "./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.tsx");
/* harmony import */ var _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gifCardDescription.module.less */ "./src/spa/shared/cards/gifCard/gifCardDescription/gifCardDescription.module.less");
/* harmony import */ var _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__);






var GifCardDescription = function (_a) {
    var isPreview = _a.isPreview, userCard = _a.userCard;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () {
        setModalId(userCard.id);
    };
    var ExpandIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'lightGrey' : 'blue', iconName: "expand", size: 18 })); };
    var LinkIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'lightGrey' : 'blue', iconName: "link", size: 18 })); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "two", text: userCard.title, weight: "bold" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["footer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: LinkIconContent, disabled: isPreview, link: userCard.cardData.gifCardData.gifUrl, size: "two", text: "Link", weight: "bold" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: ExpandIconContent, disabled: isPreview, onClick: handleClick, size: "two", text: "Expand", weight: "bold" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gifCardModal_gifCardModal__WEBPACK_IMPORTED_MODULE_4__["default"], { id: userCard.id, gifUrl: userCard.cardData.gifCardData.gifUrl, title: userCard.title })));
};
/* harmony default export */ __webpack_exports__["default"] = (GifCardDescription);


/***/ }),

/***/ "./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less":
/*!****************************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardModal.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less");

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

/***/ "./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.tsx":
/*!********************************************************************!*\
  !*** ./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gifCardModal.module.less */ "./src/spa/shared/cards/gifCard/gifCardModal/gifCardModal.module.less");
/* harmony import */ var _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__);



var ImageCardModal = function (_a) {
    var gifUrl = _a.gifUrl, id = _a.id, title = _a.title;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"], { id: id, title: title },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: title, className: _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__["img"], src: gifUrl })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardModal);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy9naWZDYXJkL2dpZkNhcmREZXNjcmlwdGlvbi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvZ2lmQ2FyZC9naWZDYXJkTW9kYWwvZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2dpZkNhcmQvZ2lmQ2FyZERlc2NyaXB0aW9uL2dpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzcz8xMzU1Iiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2NhcmRzL2dpZkNhcmQvZ2lmQ2FyZERlc2NyaXB0aW9uL2dpZkNhcmREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvZ2lmQ2FyZC9naWZDYXJkTW9kYWwvZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzPzBlZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMvZ2lmQ2FyZC9naWZDYXJkTW9kYWwvZ2lmQ2FyZE1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixrQkFBa0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLFVBQVUscUtBQXFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSw4RUFBOEUsa0JBQWtCLDJCQUEyQixpQkFBaUIsbUNBQW1DLEdBQUcsV0FBVyxrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCOztBQUVwdUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ1hBLDJCQUEyQixtQkFBTyxDQUFDLDRHQUEyRDtBQUM5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RCxJQUFNLGNBQWMsR0FBb0IsVUFBQyxFQUl4QztRQUhDLGtCQUFNLEVBQ04sVUFBRSxFQUNGLGdCQUFLO0lBQ0QsUUFDSixvREFBQywwREFBSyxJQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUs7UUFDekIsNkRBQ0UsR0FBRyxFQUFFLEtBQUssRUFDVixTQUFTLEVBQUUsNkRBQVUsRUFDckIsR0FBRyxFQUFFLE1BQU0sR0FDWCxDQUNJLENBQ1Q7QUFSSyxDQVFMLENBQUM7QUFFYSw2RUFBYyxFQUFDIiwiZmlsZSI6IjE3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyX19fMkx6VTMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXJfX18zVVhLSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL3NoYXJlZC9jYXJkcy9naWZDYXJkL2dpZkNhcmREZXNjcmlwdGlvbi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaENcIixcImZpbGVcIjpcImdpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfX18yTHpVM1wiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9fXzNVWEtJXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWdfX18yWi0zQyB7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL3NoYXJlZC9jYXJkcy9naWZDYXJkL2dpZkNhcmRNb2RhbC9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCXCIsXCJmaWxlXCI6XCJnaWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmltZyB7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW1nXCI6IFwiaW1nX19fMlotM0NcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2dpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2dpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICdpY29ucy9pY29uL2ljb24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbmltcG9ydCB7IFVzZXJDYXJkIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0IHsgdXNlTW9kYWxDb250ZXh0IH0gZnJvbSAnY29udGV4dC9tb2RhbENvbnRleHQvbW9kYWxDb250ZXh0JztcbmltcG9ydCBHaWZDYXJkTW9kYWwgZnJvbSAnLi4vZ2lmQ2FyZE1vZGFsL2dpZkNhcmRNb2RhbCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc1ByZXZpZXc6IGJvb2xlYW47XG4gIHVzZXJDYXJkOiBVc2VyQ2FyZDtcbn1cblxuY29uc3QgR2lmQ2FyZERlc2NyaXB0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBpc1ByZXZpZXcsIHVzZXJDYXJkIH0pID0+IHtcbiAgY29uc3QgeyBzZXRNb2RhbElkIH0gPSB1c2VNb2RhbENvbnRleHQoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRNb2RhbElkKHVzZXJDYXJkLmlkKTtcbiAgfTtcblxuICBjb25zdCBFeHBhbmRJY29uQ29udGVudDogUmVhY3QuRkMgPSAoKSA9PiAoXG4gICAgPEljb25cbiAgICAgIGNvbG9yPXtpc1ByZXZpZXcgPyAnbGlnaHRHcmV5JyA6ICdibHVlJ31cbiAgICAgIGljb25OYW1lPVwiZXhwYW5kXCJcbiAgICAgIHNpemU9ezE4fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgTGlua0ljb25Db250ZW50OiBSZWFjdC5GQyA9ICgpID0+IChcbiAgICA8SWNvblxuICAgICAgY29sb3I9e2lzUHJldmlldyA/ICdsaWdodEdyZXknIDogJ2JsdWUnfVxuICAgICAgaWNvbk5hbWU9XCJsaW5rXCJcbiAgICAgIHNpemU9ezE4fVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBtYXhUZXh0TGVuZ3RoPXs2MH1cbiAgICAgICAgICAgIHNpemU9XCJ0d29cIlxuICAgICAgICAgICAgdGV4dD17dXNlckNhcmQudGl0bGV9XG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBDb250ZW50PXtMaW5rSWNvbkNvbnRlbnR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aWV3fVxuICAgICAgICAgICAgbGluaz17dXNlckNhcmQuY2FyZERhdGEuZ2lmQ2FyZERhdGEuZ2lmVXJsfVxuICAgICAgICAgICAgc2l6ZT1cInR3b1wiXG4gICAgICAgICAgICB0ZXh0PVwiTGlua1wiXG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBDb250ZW50PXtFeHBhbmRJY29uQ29udGVudH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpZXd9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIHNpemU9XCJ0d29cIlxuICAgICAgICAgICAgdGV4dD1cIkV4cGFuZFwiXG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdpZkNhcmRNb2RhbFxuICAgICAgICBpZD17dXNlckNhcmQuaWR9XG4gICAgICAgIGdpZlVybD17dXNlckNhcmQuY2FyZERhdGEuZ2lmQ2FyZERhdGEuZ2lmVXJsfVxuICAgICAgICB0aXRsZT17dXNlckNhcmQudGl0bGV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2lmQ2FyZERlc2NyaXB0aW9uO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZGFscy9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgeyBVc2VyQ2FyZCB9IGZyb20gJ3NjaGVtYS9jYXJkJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2dpZkNhcmRNb2RhbC5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGdpZlVybDogVXNlckNhcmRbJ2NhcmREYXRhJ11bJ2dpZkNhcmREYXRhJ11bJ2dpZlVybCddO1xuICBpZDogVXNlckNhcmRbJ2lkJ107XG4gIHRpdGxlOiBVc2VyQ2FyZFsndGl0bGUnXTtcbn1cblxuY29uc3QgSW1hZ2VDYXJkTW9kYWw6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGdpZlVybCxcbiAgaWQsXG4gIHRpdGxlLFxufSkgPT4gKFxuICA8TW9kYWwgaWQ9e2lkfSB0aXRsZT17dGl0bGV9PlxuICAgIDxpbWdcbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWd9XG4gICAgICBzcmM9e2dpZlVybH1cbiAgICAvPlxuICA8L01vZGFsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9