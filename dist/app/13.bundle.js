(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.img___yLQ8B {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;KACpB,oBAAoB;CACxB","file":"gifCardContent.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.img {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n"],"sourceRoot":""}]);

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
	"img": "img___yLQ8B"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container___2rMfM {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer___1_viS {\n  display: flex;\n  justify-content: space-between;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC","file":"gifCardDescription.module.less","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "container___2rMfM",
	"footer": "footer___1_viS"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".img___1cCBx {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;CACjB","file":"gifCardModal.module.less","sourcesContent":[".img {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"img": "img___1cCBx"
};

/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCard.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var userCard_userCardTemplate_userCardTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userCard/userCardTemplate/userCardTemplate */ "./src/spa/components/organisms/userCard/userCardTemplate/userCardTemplate.tsx");
/* harmony import */ var _gifCardContent_gifCardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gifCardContent/gifCardContent */ "./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.tsx");
/* harmony import */ var _gifCardDescription_gifCardDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifCardDescription/gifCardDescription */ "./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.tsx");




var GifCard = function (_a) {
    var isPreview = _a.isPreview, userCardData = _a.userCardData;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](userCard_userCardTemplate_userCardTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], { Content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gifCardContent_gifCardContent__WEBPACK_IMPORTED_MODULE_2__["default"], { userCardData: userCardData }), Description: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gifCardDescription_gifCardDescription__WEBPACK_IMPORTED_MODULE_3__["default"], { isPreview: isPreview, userCardData: userCardData }), isPreview: isPreview, userCardData: userCardData }));
};
/* harmony default export */ __webpack_exports__["default"] = (GifCard);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less":
/*!*************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardContent.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifCardContent.module.less */ "./src/spa/components/organisms/userCard/gifCard/gifCardContent/gifCardContent.module.less");
/* harmony import */ var _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__);


var GifCardContent = function (_a) {
    var userCardData = _a.userCardData;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: userCardData.title, className: _gifCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__["img"], src: userCardData.cardData.gifCardData.gifUrl }));
};
/* harmony default export */ __webpack_exports__["default"] = (GifCardContent);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less":
/*!*********************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardDescription.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icon/icon */ "./src/spa/components/neutrons/icon/icon.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/components/atoms/typography/typography.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _gifCardModal_gifCardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gifCardModal/gifCardModal */ "./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.tsx");
/* harmony import */ var _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gifCardDescription.module.less */ "./src/spa/components/organisms/userCard/gifCard/gifCardDescription/gifCardDescription.module.less");
/* harmony import */ var _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__);






var GifCardDescription = function (_a) {
    var isPreview = _a.isPreview, userCardData = _a.userCardData;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () {
        setModalId(userCardData.id);
    };
    var ExpandIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'darkGrey' : 'blue', iconName: "expand", size: 18 })); };
    var LinkIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'darkGrey' : 'blue', iconName: "link", size: 18 })); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "two", text: userCardData.title, weight: "bold" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _gifCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["footer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: LinkIconContent, disabled: isPreview, link: userCardData.cardData.gifCardData.gifUrl, size: "two", text: "Link", weight: "bold" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: ExpandIconContent, disabled: isPreview, onClick: handleClick, size: "two", text: "Expand", weight: "bold" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gifCardModal_gifCardModal__WEBPACK_IMPORTED_MODULE_4__["default"], { id: userCardData.id, gifUrl: userCardData.cardData.gifCardData.gifUrl, title: userCardData.title })));
};
/* harmony default export */ __webpack_exports__["default"] = (GifCardDescription);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less":
/*!*********************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./gifCardModal.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.tsx":
/*!*************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gifCardModal.module.less */ "./src/spa/components/organisms/userCard/gifCard/gifCardModal/gifCardModal.module.less");
/* harmony import */ var _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__);



var ImageCardModal = function (_a) {
    var gifUrl = _a.gifUrl, id = _a.id, title = _a.title;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"], { id: id, title: title },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: title, className: _gifCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__["img"], src: gifUrl })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardModal);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2dpZkNhcmQvZ2lmQ2FyZENvbnRlbnQvZ2lmQ2FyZENvbnRlbnQubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmREZXNjcmlwdGlvbi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmRNb2RhbC9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvZ2lmQ2FyZC9naWZDYXJkQ29udGVudC9naWZDYXJkQ29udGVudC5tb2R1bGUubGVzcz9hNjU5Iiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvZ2lmQ2FyZC9naWZDYXJkQ29udGVudC9naWZDYXJkQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmREZXNjcmlwdGlvbi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3M/M2M5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2dpZkNhcmQvZ2lmQ2FyZERlc2NyaXB0aW9uL2dpZkNhcmREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmRNb2RhbC9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3M/ZmJmOCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2dpZkNhcmQvZ2lmQ2FyZE1vZGFsL2dpZkNhcmRNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsK0dBQThEO0FBQ2pHOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrRUFBa0UsaUJBQWlCLHFCQUFxQiwyQkFBMkIsMkJBQTJCLEdBQUcsVUFBVSxxTEFBcUwsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0dBQWdHLHdCQUF3QiwyQkFBMkIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLHdCQUF3Qix3QkFBd0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLHFCQUFxQiwyQkFBMkIsMkJBQTJCLEdBQUcscUJBQXFCOztBQUVuM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDbEJBLDJCQUEyQixtQkFBTyxDQUFDLCtHQUE4RDtBQUNqRzs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsdUJBQXVCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLG1DQUFtQyxHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsVUFBVSxzTEFBc0wsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLDhFQUE4RSxrQkFBa0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMsR0FBRyxXQUFXLGtCQUFrQixtQ0FBbUMsR0FBRyxxQkFBcUI7O0FBRXJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDWEEsMkJBQTJCLG1CQUFPLENBQUMsK0dBQThEO0FBQ2pHOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLFVBQVUsMEtBQTBLLFlBQVksYUFBYSxrRUFBa0UscUJBQXFCLG9C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O0FBRWEsNkVBQWMsRUFBQyIsImZpbGUiOiIxMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZ19fX3lMUThCIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9naWZDYXJkL2dpZkNhcmRDb250ZW50L2dpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQVd2QixzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtLQUNwQixvQkFBb0I7Q0FDeEJcIixcImZpbGVcIjpcImdpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuOmV4cG9ydCB7XFxuICBjYXJldFNpemU6IDAuNjI1cmVtO1xcbiAgZm9vdGVyTGlzdE1hcmdpbjogM3JlbTtcXG4gIGZvb3RlckxvZ29TaXplOiA1cmVtO1xcbiAgaGVhZGVySGVpZ2h0OiAzcmVtO1xcbiAgaGVhZGVyTWFyZ2luVG9wOiAyLjVyZW07XFxuICBuYXZXaWR0aDogNXJlbTtcXG4gIHN0YWNrQ2FyZFNpemU6IDdyZW07XFxuICB0b2FzdFdpZHRoOiAyNC41cmVtO1xcbn1cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJldFNpemVcIjogXCIwLjYyNXJlbVwiLFxuXHRcImZvb3Rlckxpc3RNYXJnaW5cIjogXCIzcmVtXCIsXG5cdFwiZm9vdGVyTG9nb1NpemVcIjogXCI1cmVtXCIsXG5cdFwiaGVhZGVySGVpZ2h0XCI6IFwiM3JlbVwiLFxuXHRcImhlYWRlck1hcmdpblRvcFwiOiBcIjIuNXJlbVwiLFxuXHRcIm5hdldpZHRoXCI6IFwiNXJlbVwiLFxuXHRcInN0YWNrQ2FyZFNpemVcIjogXCI3cmVtXCIsXG5cdFwidG9hc3RXaWR0aFwiOiBcIjI0LjVyZW1cIixcblx0XCJpbWdcIjogXCJpbWdfX195TFE4QlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyX19fMnJNZk0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXJfX18xX3ZpUyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2dpZkNhcmQvZ2lmQ2FyZERlc2NyaXB0aW9uL2dpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLCtCQUErQjtDQUNoQztBQUNEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtDQUNoQ1wiLFwiZmlsZVwiOlwiZ2lmQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl9fXzJyTWZNXCIsXG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX19fMV92aVNcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmltZ19fXzFjQ0J4IHtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBtYXgtd2lkdGg6IDgwdnc7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvZ2lmQ2FyZC9naWZDYXJkTW9kYWwvZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQlwiLFwiZmlsZVwiOlwiZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWcge1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIG1heC13aWR0aDogODB2dztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImltZ1wiOiBcImltZ19fXzFjQ0J4XCJcbn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlckNhcmREYXRhIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0IFVzZXJDYXJkVGVtcGxhdGUgZnJvbSAndXNlckNhcmQvdXNlckNhcmRUZW1wbGF0ZS91c2VyQ2FyZFRlbXBsYXRlJztcbmltcG9ydCBHaWZDYXJkQ29udGVudCBmcm9tICcuL2dpZkNhcmRDb250ZW50L2dpZkNhcmRDb250ZW50JztcbmltcG9ydCBHaWZDYXJkRGVzY3JpcHRpb24gZnJvbSAnLi9naWZDYXJkRGVzY3JpcHRpb24vZ2lmQ2FyZERlc2NyaXB0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNQcmV2aWV3OiBib29sZWFuO1xuICB1c2VyQ2FyZERhdGE6IFVzZXJDYXJkRGF0YTtcbn1cblxuY29uc3QgR2lmQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaXNQcmV2aWV3LCB1c2VyQ2FyZERhdGEgfSkgPT4gKFxuICA8VXNlckNhcmRUZW1wbGF0ZVxuICAgIENvbnRlbnQ9ezxHaWZDYXJkQ29udGVudCB1c2VyQ2FyZERhdGE9e3VzZXJDYXJkRGF0YX0gLz59XG4gICAgRGVzY3JpcHRpb249ezxHaWZDYXJkRGVzY3JpcHRpb24gaXNQcmV2aWV3PXtpc1ByZXZpZXd9IHVzZXJDYXJkRGF0YT17dXNlckNhcmREYXRhfSAvPn1cbiAgICBpc1ByZXZpZXc9e2lzUHJldmlld31cbiAgICB1c2VyQ2FyZERhdGE9e3VzZXJDYXJkRGF0YX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdpZkNhcmQ7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZENvbnRlbnQubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJDYXJkRGF0YSB9IGZyb20gJ3NjaGVtYS9jYXJkJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2dpZkNhcmRDb250ZW50Lm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlckNhcmREYXRhOiBVc2VyQ2FyZERhdGE7XG59XG5cbmNvbnN0IEdpZkNhcmRDb250ZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1c2VyQ2FyZERhdGEgfSkgPT4gKFxuICA8aW1nXG4gICAgYWx0PXt1c2VyQ2FyZERhdGEudGl0bGV9XG4gICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgIHNyYz17dXNlckNhcmREYXRhLmNhcmREYXRhLmdpZkNhcmREYXRhLmdpZlVybH1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdpZkNhcmRDb250ZW50O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnaWNvbi9pY29uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBVc2VyQ2FyZERhdGEgfSBmcm9tICdzY2hlbWEvY2FyZCc7XG5pbXBvcnQgeyB1c2VNb2RhbENvbnRleHQgfSBmcm9tICdjb250ZXh0L21vZGFsQ29udGV4dC9tb2RhbENvbnRleHQnO1xuaW1wb3J0IEdpZkNhcmRNb2RhbCBmcm9tICcuLi9naWZDYXJkTW9kYWwvZ2lmQ2FyZE1vZGFsJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2dpZkNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzUHJldmlldzogYm9vbGVhbjtcbiAgdXNlckNhcmREYXRhOiBVc2VyQ2FyZERhdGE7XG59XG5cbmNvbnN0IEdpZkNhcmREZXNjcmlwdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaXNQcmV2aWV3LCB1c2VyQ2FyZERhdGEgfSkgPT4ge1xuICBjb25zdCB7IHNldE1vZGFsSWQgfSA9IHVzZU1vZGFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldE1vZGFsSWQodXNlckNhcmREYXRhLmlkKTtcbiAgfTtcblxuICBjb25zdCBFeHBhbmRJY29uQ29udGVudDogUmVhY3QuRkMgPSAoKSA9PiAoXG4gICAgPEljb25cbiAgICAgIGNvbG9yPXtpc1ByZXZpZXcgPyAnZGFya0dyZXknIDogJ2JsdWUnfVxuICAgICAgaWNvbk5hbWU9XCJleHBhbmRcIlxuICAgICAgc2l6ZT17MTh9XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBMaW5rSWNvbkNvbnRlbnQ6IFJlYWN0LkZDID0gKCkgPT4gKFxuICAgIDxJY29uXG4gICAgICBjb2xvcj17aXNQcmV2aWV3ID8gJ2RhcmtHcmV5JyA6ICdibHVlJ31cbiAgICAgIGljb25OYW1lPVwibGlua1wiXG4gICAgICBzaXplPXsxOH1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgbWF4VGV4dExlbmd0aD17NjB9XG4gICAgICAgICAgICBzaXplPVwidHdvXCJcbiAgICAgICAgICAgIHRleHQ9e3VzZXJDYXJkRGF0YS50aXRsZX1cbiAgICAgICAgICAgIHdlaWdodD1cImJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIENvbnRlbnQ9e0xpbmtJY29uQ29udGVudH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpZXd9XG4gICAgICAgICAgICBsaW5rPXt1c2VyQ2FyZERhdGEuY2FyZERhdGEuZ2lmQ2FyZERhdGEuZ2lmVXJsfVxuICAgICAgICAgICAgc2l6ZT1cInR3b1wiXG4gICAgICAgICAgICB0ZXh0PVwiTGlua1wiXG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBDb250ZW50PXtFeHBhbmRJY29uQ29udGVudH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1ByZXZpZXd9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIHNpemU9XCJ0d29cIlxuICAgICAgICAgICAgdGV4dD1cIkV4cGFuZFwiXG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdpZkNhcmRNb2RhbFxuICAgICAgICBpZD17dXNlckNhcmREYXRhLmlkfVxuICAgICAgICBnaWZVcmw9e3VzZXJDYXJkRGF0YS5jYXJkRGF0YS5naWZDYXJkRGF0YS5naWZVcmx9XG4gICAgICAgIHRpdGxlPXt1c2VyQ2FyZERhdGEudGl0bGV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2lmQ2FyZERlc2NyaXB0aW9uO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZ2lmQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZGFscy9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgeyBVc2VyQ2FyZERhdGEgfSBmcm9tICdzY2hlbWEvY2FyZCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9naWZDYXJkTW9kYWwubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnaWZVcmw6IFVzZXJDYXJkRGF0YVsnY2FyZERhdGEnXVsnZ2lmQ2FyZERhdGEnXVsnZ2lmVXJsJ107XG4gIGlkOiBVc2VyQ2FyZERhdGFbJ2lkJ107XG4gIHRpdGxlOiBVc2VyQ2FyZERhdGFbJ3RpdGxlJ107XG59XG5cbmNvbnN0IEltYWdlQ2FyZE1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBnaWZVcmwsXG4gIGlkLFxuICB0aXRsZSxcbn0pID0+IChcbiAgPE1vZGFsIGlkPXtpZH0gdGl0bGU9e3RpdGxlfT5cbiAgICA8aW1nXG4gICAgICBhbHQ9e3RpdGxlfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgICAgc3JjPXtnaWZVcmx9XG4gICAgLz5cbiAgPC9Nb2RhbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2FyZE1vZGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==