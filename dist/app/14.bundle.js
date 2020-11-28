(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.img___5bCt5 {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;KACpB,oBAAoB;CACxB","file":"imageCardContent.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.img {\n  height: 100%;\n  max-width: 15rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n"],"sourceRoot":""}]);

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
	"img": "img___5bCt5"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container___j25rJ {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer___i22vp {\n  display: flex;\n  justify-content: space-between;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC","file":"imageCardDescription.module.less","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.footer {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "container___j25rJ",
	"footer": "footer___i22vp"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".img___2Man6 {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;CACjB","file":"imageCardModal.module.less","sourcesContent":[".img {\n  max-height: 80vh;\n  max-width: 80vw;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"img": "img___2Man6"
};

/***/ }),

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCard.tsx":
/*!***********************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCard.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var userCard_userCardTemplate_userCardTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userCard/userCardTemplate/userCardTemplate */ "./src/spa/components/organisms/userCard/userCardTemplate/userCardTemplate.tsx");
/* harmony import */ var _imageCardContent_imageCardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCardContent/imageCardContent */ "./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.tsx");
/* harmony import */ var _imageCardDescription_imageCardDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCardDescription/imageCardDescription */ "./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.tsx");




var ImageCard = function (_a) {
    var isPreview = _a.isPreview, userCardData = _a.userCardData;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](userCard_userCardTemplate_userCardTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], { Content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_imageCardContent_imageCardContent__WEBPACK_IMPORTED_MODULE_2__["default"], { userCardData: userCardData }), Description: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_imageCardDescription_imageCardDescription__WEBPACK_IMPORTED_MODULE_3__["default"], { isPreview: isPreview, userCardData: userCardData }), isPreview: isPreview, userCardData: userCardData }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCard);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less":
/*!*******************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardContent.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less");

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

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCardContent.module.less */ "./src/spa/components/organisms/userCard/imageCard/imageCardContent/imageCardContent.module.less");
/* harmony import */ var _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__);


var ImageCardContent = function (_a) {
    var userCardData = _a.userCardData;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: userCardData.title, className: _imageCardContent_module_less__WEBPACK_IMPORTED_MODULE_1__["img"], src: userCardData.cardData.imageCardData.imageUrl }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardContent);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less":
/*!***************************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardDescription.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less");

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

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icon/icon */ "./src/spa/components/neutrons/icon/icon.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/components/atoms/typography/typography.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _imageCardModal_imageCardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imageCardModal/imageCardModal */ "./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.tsx");
/* harmony import */ var _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageCardDescription.module.less */ "./src/spa/components/organisms/userCard/imageCard/imageCardDescription/imageCardDescription.module.less");
/* harmony import */ var _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__);






var ImageCardDescription = function (_a) {
    var isPreview = _a.isPreview, userCardData = _a.userCardData;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () {
        setModalId(userCardData.id);
    };
    var ExpandIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'darkGrey' : 'blue', iconName: "expand", size: 18 })); };
    var LinkIconContent = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: isPreview ? 'darkGrey' : 'blue', iconName: "link", size: 18 })); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "two", text: userCardData.title, weight: "bold" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _imageCardDescription_module_less__WEBPACK_IMPORTED_MODULE_5__["footer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: LinkIconContent, disabled: isPreview, link: userCardData.cardData.imageCardData.imageUrl, size: "two", text: "Link", weight: "bold" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { Content: ExpandIconContent, disabled: isPreview, onClick: handleClick, size: "two", text: "Expand", weight: "bold" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_imageCardModal_imageCardModal__WEBPACK_IMPORTED_MODULE_4__["default"], { id: userCardData.id, imageUrl: userCardData.cardData.imageCardData.imageUrl, title: userCardData.title })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardDescription);


/***/ }),

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less":
/*!***************************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./imageCardModal.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less");

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

/***/ "./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCardModal.module.less */ "./src/spa/components/organisms/userCard/imageCard/imageCardModal/imageCardModal.module.less");
/* harmony import */ var _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__);



var ImageCardModal = function (_a) {
    var id = _a.id, imageUrl = _a.imageUrl, title = _a.title;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modals_modal_modal__WEBPACK_IMPORTED_MODULE_1__["default"], { id: id, title: title },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: title, className: _imageCardModal_module_less__WEBPACK_IMPORTED_MODULE_2__["img"], src: imageUrl })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardModal);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2ltYWdlQ2FyZC9pbWFnZUNhcmRDb250ZW50L2ltYWdlQ2FyZENvbnRlbnQubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkRGVzY3JpcHRpb24vaW1hZ2VDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkTW9kYWwvaW1hZ2VDYXJkTW9kYWwubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2ltYWdlQ2FyZC9pbWFnZUNhcmRDb250ZW50L2ltYWdlQ2FyZENvbnRlbnQubW9kdWxlLmxlc3M/MTdmMSIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2ltYWdlQ2FyZC9pbWFnZUNhcmRDb250ZW50L2ltYWdlQ2FyZENvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvaW1hZ2VDYXJkL2ltYWdlQ2FyZERlc2NyaXB0aW9uL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzPzMyMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkRGVzY3JpcHRpb24vaW1hZ2VDYXJkRGVzY3JpcHRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvaW1hZ2VDYXJkL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzPzU3ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkTW9kYWwvaW1hZ2VDYXJkTW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLCtHQUE4RDtBQUNqRzs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsa0VBQWtFLGlCQUFpQixxQkFBcUIsMkJBQTJCLDJCQUEyQixHQUFHLFVBQVUsMkxBQTJMLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGtHQUFrRyx3QkFBd0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEdBQUcsZ0NBQWdDLGlCQUFpQixxQkFBcUIsMkJBQTJCLDJCQUEyQixHQUFHLHFCQUFxQjs7QUFFMzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2xCQSwyQkFBMkIsbUJBQU8sQ0FBQywrR0FBOEQ7QUFDakc7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixrQkFBa0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLFVBQVUsNExBQTRMLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxnRkFBZ0Ysa0JBQWtCLDJCQUEyQixpQkFBaUIsbUNBQW1DLEdBQUcsV0FBVyxrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCOztBQUU3dkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ1hBLDJCQUEyQixtQkFBTyxDQUFDLCtHQUE4RDtBQUNqRzs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlC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UyxFQUFFLCtEQUFVLEVBQ3JCLEdBQUcsRUFBRSxRQUFRLEdBQ2IsQ0FDSSxDQUNUO0FBUkssQ0FRTCxDQUFDO0FBRWEsNkVBQWMsRUFBQyIsImZpbGUiOiIxNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmltZ19fXzViQ3Q1IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9jb21wb25lbnRzL29yZ2FuaXNtcy91c2VyQ2FyZC9pbWFnZUNhcmQvaW1hZ2VDYXJkQ29udGVudC9pbWFnZUNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQVd2QixzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtLQUNwQixvQkFBb0I7Q0FDeEJcIixcImZpbGVcIjpcImltYWdlQ2FyZENvbnRlbnQubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG46ZXhwb3J0IHtcXG4gIGNhcmV0U2l6ZTogMC42MjVyZW07XFxuICBmb290ZXJMaXN0TWFyZ2luOiAzcmVtO1xcbiAgZm9vdGVyTG9nb1NpemU6IDVyZW07XFxuICBoZWFkZXJIZWlnaHQ6IDNyZW07XFxuICBoZWFkZXJNYXJnaW5Ub3A6IDIuNXJlbTtcXG4gIG5hdldpZHRoOiA1cmVtO1xcbiAgc3RhY2tDYXJkU2l6ZTogN3JlbTtcXG4gIHRvYXN0V2lkdGg6IDI0LjVyZW07XFxufVxcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXG4uaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNhcmV0U2l6ZVwiOiBcIjAuNjI1cmVtXCIsXG5cdFwiZm9vdGVyTGlzdE1hcmdpblwiOiBcIjNyZW1cIixcblx0XCJmb290ZXJMb2dvU2l6ZVwiOiBcIjVyZW1cIixcblx0XCJoZWFkZXJIZWlnaHRcIjogXCIzcmVtXCIsXG5cdFwiaGVhZGVyTWFyZ2luVG9wXCI6IFwiMi41cmVtXCIsXG5cdFwibmF2V2lkdGhcIjogXCI1cmVtXCIsXG5cdFwic3RhY2tDYXJkU2l6ZVwiOiBcIjdyZW1cIixcblx0XCJ0b2FzdFdpZHRoXCI6IFwiMjQuNXJlbVwiLFxuXHRcImltZ1wiOiBcImltZ19fXzViQ3Q1XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXJfX19qMjVySiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3Rlcl9fX2kyMnZwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvY29tcG9uZW50cy9vcmdhbmlzbXMvdXNlckNhcmQvaW1hZ2VDYXJkL2ltYWdlQ2FyZERlc2NyaXB0aW9uL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDXCIsXCJmaWxlXCI6XCJpbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfX19qMjVySlwiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9fX2kyMnZwXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWdfX18yTWFuNiB7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2NvbXBvbmVudHMvb3JnYW5pc21zL3VzZXJDYXJkL2ltYWdlQ2FyZC9pbWFnZUNhcmRNb2RhbC9pbWFnZUNhcmRNb2RhbC5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakJcIixcImZpbGVcIjpcImltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWcge1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIG1heC13aWR0aDogODB2dztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImltZ1wiOiBcImltZ19fXzJNYW42XCJcbn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlckNhcmREYXRhIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0IFVzZXJDYXJkVGVtcGxhdGUgZnJvbSAndXNlckNhcmQvdXNlckNhcmRUZW1wbGF0ZS91c2VyQ2FyZFRlbXBsYXRlJztcbmltcG9ydCBJbWFnZUNhcmRDb250ZW50IGZyb20gJy4vaW1hZ2VDYXJkQ29udGVudC9pbWFnZUNhcmRDb250ZW50JztcbmltcG9ydCBJbWFnZUNhcmREZXNjcmlwdGlvbiBmcm9tICcuL2ltYWdlQ2FyZERlc2NyaXB0aW9uL2ltYWdlQ2FyZERlc2NyaXB0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNQcmV2aWV3OiBib29sZWFuO1xuICB1c2VyQ2FyZERhdGE6IFVzZXJDYXJkRGF0YTtcbn1cblxuY29uc3QgSW1hZ2VDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBpc1ByZXZpZXcsIHVzZXJDYXJkRGF0YSB9KSA9PiAoXG4gIDxVc2VyQ2FyZFRlbXBsYXRlXG4gICAgQ29udGVudD17PEltYWdlQ2FyZENvbnRlbnQgdXNlckNhcmREYXRhPXt1c2VyQ2FyZERhdGF9IC8+fVxuICAgIERlc2NyaXB0aW9uPXs8SW1hZ2VDYXJkRGVzY3JpcHRpb24gaXNQcmV2aWV3PXtpc1ByZXZpZXd9IHVzZXJDYXJkRGF0YT17dXNlckNhcmREYXRhfSAvPn1cbiAgICBpc1ByZXZpZXc9e2lzUHJldmlld31cbiAgICB1c2VyQ2FyZERhdGE9e3VzZXJDYXJkRGF0YX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2FyZDtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmRDb250ZW50Lm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlckNhcmREYXRhIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vaW1hZ2VDYXJkQ29udGVudC5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJDYXJkRGF0YTogVXNlckNhcmREYXRhO1xufVxuXG5jb25zdCBJbWFnZUNhcmRDb250ZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1c2VyQ2FyZERhdGEgfSkgPT4gKFxuICA8aW1nXG4gICAgYWx0PXt1c2VyQ2FyZERhdGEudGl0bGV9XG4gICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgIHNyYz17dXNlckNhcmREYXRhLmNhcmREYXRhLmltYWdlQ2FyZERhdGEuaW1hZ2VVcmx9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcmRDb250ZW50O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnaWNvbi9pY29uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBVc2VyQ2FyZERhdGEgfSBmcm9tICdzY2hlbWEvY2FyZCc7XG5pbXBvcnQgeyB1c2VNb2RhbENvbnRleHQgfSBmcm9tICdjb250ZXh0L21vZGFsQ29udGV4dC9tb2RhbENvbnRleHQnO1xuaW1wb3J0IEltYWdlQ2FyZE1vZGFsIGZyb20gJy4uL2ltYWdlQ2FyZE1vZGFsL2ltYWdlQ2FyZE1vZGFsJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2ltYWdlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNQcmV2aWV3OiBib29sZWFuO1xuICB1c2VyQ2FyZERhdGE6IFVzZXJDYXJkRGF0YTtcbn1cblxuY29uc3QgSW1hZ2VDYXJkRGVzY3JpcHRpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGlzUHJldmlldywgdXNlckNhcmREYXRhIH0pID0+IHtcbiAgY29uc3QgeyBzZXRNb2RhbElkIH0gPSB1c2VNb2RhbENvbnRleHQoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXRNb2RhbElkKHVzZXJDYXJkRGF0YS5pZCk7XG4gIH07XG5cbiAgY29uc3QgRXhwYW5kSWNvbkNvbnRlbnQ6IFJlYWN0LkZDID0gKCkgPT4gKFxuICAgIDxJY29uXG4gICAgICBjb2xvcj17aXNQcmV2aWV3ID8gJ2RhcmtHcmV5JyA6ICdibHVlJ31cbiAgICAgIGljb25OYW1lPVwiZXhwYW5kXCJcbiAgICAgIHNpemU9ezE4fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgTGlua0ljb25Db250ZW50OiBSZWFjdC5GQyA9ICgpID0+IChcbiAgICA8SWNvblxuICAgICAgY29sb3I9e2lzUHJldmlldyA/ICdkYXJrR3JleScgOiAnYmx1ZSd9XG4gICAgICBpY29uTmFtZT1cImxpbmtcIlxuICAgICAgc2l6ZT17MTh9XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIG1heFRleHRMZW5ndGg9ezYwfVxuICAgICAgICAgICAgc2l6ZT1cInR3b1wiXG4gICAgICAgICAgICB0ZXh0PXt1c2VyQ2FyZERhdGEudGl0bGV9XG4gICAgICAgICAgICB3ZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBDb250ZW50PXtMaW5rSWNvbkNvbnRlbnR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNQcmV2aWV3fVxuICAgICAgICAgICAgbGluaz17dXNlckNhcmREYXRhLmNhcmREYXRhLmltYWdlQ2FyZERhdGEuaW1hZ2VVcmx9XG4gICAgICAgICAgICBzaXplPVwidHdvXCJcbiAgICAgICAgICAgIHRleHQ9XCJMaW5rXCJcbiAgICAgICAgICAgIHdlaWdodD1cImJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIENvbnRlbnQ9e0V4cGFuZEljb25Db250ZW50fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJldmlld31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgc2l6ZT1cInR3b1wiXG4gICAgICAgICAgICB0ZXh0PVwiRXhwYW5kXCJcbiAgICAgICAgICAgIHdlaWdodD1cImJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8SW1hZ2VDYXJkTW9kYWxcbiAgICAgICAgaWQ9e3VzZXJDYXJkRGF0YS5pZH1cbiAgICAgICAgaW1hZ2VVcmw9e3VzZXJDYXJkRGF0YS5jYXJkRGF0YS5pbWFnZUNhcmREYXRhLmltYWdlVXJsfVxuICAgICAgICB0aXRsZT17dXNlckNhcmREYXRhLnRpdGxlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2FyZERlc2NyaXB0aW9uO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9pbWFnZUNhcmRNb2RhbC5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2ltYWdlQ2FyZE1vZGFsLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZGFscy9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgeyBVc2VyQ2FyZERhdGEgfSBmcm9tICdzY2hlbWEvY2FyZCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9pbWFnZUNhcmRNb2RhbC5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBVc2VyQ2FyZERhdGFbJ2lkJ107XG4gIGltYWdlVXJsOiBVc2VyQ2FyZERhdGFbJ2NhcmREYXRhJ11bJ2ltYWdlQ2FyZERhdGEnXVsnaW1hZ2VVcmwnXTtcbiAgdGl0bGU6IFVzZXJDYXJkRGF0YVsndGl0bGUnXTtcbn1cblxuY29uc3QgSW1hZ2VDYXJkTW9kYWw6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGlkLFxuICBpbWFnZVVybCxcbiAgdGl0bGUsXG59KSA9PiAoXG4gIDxNb2RhbCBpZD17aWR9IHRpdGxlPXt0aXRsZX0+XG4gICAgPGltZ1xuICAgICAgYWx0PXt0aXRsZX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cbiAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgLz5cbiAgPC9Nb2RhbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2FyZE1vZGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==