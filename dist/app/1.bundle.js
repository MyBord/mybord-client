(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/atoms/inputs/textInput/textInput.module.less":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/atoms/inputs/textInput/textInput.module.less ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.blue___3giZJ {\n  color: #565E5F;\n}\n.blue___3giZJ:focus {\n  border-color: #14A8F3;\n  box-shadow: 0 0 0 2px #14A8F333;\n}\n.red___2bJmu {\n  color: #E41245;\n}\n.red___2bJmu:focus {\n  border-color: #E41245;\n  box-shadow: 0 0 0 2px #E4124533;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/atoms/inputs/textInput/textInput.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAcvB,sBAAsB;AACtB;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gCAAgC;CACjC;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gCAAgC;CACjC","file":"textInput.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  black: #565E5F;\n  blue: #14A8F3;\n  green: #7DCC93;\n  darkGrey: #A4AAAF;\n  orange: #F17D00;\n  purple: #31355A;\n  red: #E41245;\n  transparentBlack: #565E5fA6;\n  transparentWhite: #FFFFFFBF;\n  white: #FFF;\n  yellow: #FCC900;\n}\n/* stylelint-enable */\n.blue {\n  color: #565E5F;\n}\n.blue:focus {\n  border-color: #14A8F3;\n  box-shadow: 0 0 0 2px #14A8F333;\n}\n.red {\n  color: #E41245;\n}\n.red:focus {\n  border-color: #E41245;\n  box-shadow: 0 0 0 2px #E4124533;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"black": "#565E5F",
	"blue": "blue___3giZJ",
	"green": "#7DCC93",
	"darkGrey": "#A4AAAF",
	"orange": "#F17D00",
	"purple": "#31355A",
	"red": "red___2bJmu",
	"transparentBlack": "#565E5fA6",
	"transparentWhite": "#FFFFFFBF",
	"white": "#FFF",
	"yellow": "#FCC900"
};

/***/ }),

/***/ "./src/spa/components/atoms/inputs/textInput/textInput.less":
/*!******************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/textInput/textInput.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"caretSize":"0.625rem","footerListMargin":"3rem","footerLogoSize":"5rem","headerHeight":"3rem","headerMarginTop":"2.5rem","navWidth":"5rem","stackCardSize":"7rem","toastWidth":"24.5rem","black":"#565E5F","blue":"#14A8F3","green":"#7DCC93","darkGrey":"#A4AAAF","orange":"#F17D00","purple":"#31355A","red":"#E41245","transparentBlack":"#565E5fA6","transparentWhite":"#FFFFFFBF","white":"#FFF","yellow":"#FCC900"};

/***/ }),

/***/ "./src/spa/components/atoms/inputs/textInput/textInput.module.less":
/*!*************************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/textInput/textInput.module.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./textInput.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/atoms/inputs/textInput/textInput.module.less");

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

/***/ "./src/spa/components/atoms/inputs/textInput/textInput.tsx":
/*!*****************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/textInput/textInput.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _textInput_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textInput.module.less */ "./src/spa/components/atoms/inputs/textInput/textInput.module.less");
/* harmony import */ var _textInput_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textInput_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textInput_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textInput.less */ "./src/spa/components/atoms/inputs/textInput/textInput.less");
/* harmony import */ var _textInput_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textInput_less__WEBPACK_IMPORTED_MODULE_3__);




var TextInput = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'blue' : _b, _c = _a.defaultValue, defaultValue = _c === void 0 ? null : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _e = _a.overlayClassName, overlayClassName = _e === void 0 ? undefined : _e, _f = _a.placeholder, placeholder = _f === void 0 ? null : _f, _g = _a.type, type = _g === void 0 ? 'text' : _g, value = _a.value;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Input"], { className: [overlayClassName, _textInput_module_less__WEBPACK_IMPORTED_MODULE_2__[color]].join(' '), defaultValue: defaultValue, disabled: disabled, onChange: onChange, onPressEnter: onPressEnter, placeholder: placeholder, type: type, value: value }));
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9jb21wb25lbnRzL2F0b21zL2lucHV0cy90ZXh0SW5wdXQvdGV4dElucHV0Lmxlc3M/Y2MxZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQubW9kdWxlLmxlc3M/OTQ5MyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDRHQUEyRDtBQUM5Rjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsbUVBQW1FLG1CQUFtQixHQUFHLHVCQUF1QiwwQkFBMEIsb0NBQW9DLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLHNCQUFzQiwwQkFBMEIsb0NBQW9DLEdBQUcsVUFBVSw2SkFBNkosYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLDJGQUEyRixtQkFBbUIsa0JBQWtCLG1CQUFtQixzQkFBc0Isb0JBQW9CLG9CQUFvQixpQkFBaUIsZ0NBQWdDLGdDQUFnQyxnQkFBZ0Isb0JBQW9CLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLGVBQWUsMEJBQTBCLG9DQUFvQyxHQUFHLFFBQVEsbUJBQW1CLEdBQUcsY0FBYywwQkFBMEIsb0NBQW9DLEdBQUcscUJBQXFCOztBQUV4ckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBLGtCQUFrQiwyWjs7Ozs7Ozs7Ozs7O0FDQWxCLGNBQWMsbUJBQU8sQ0FBQyxpWUFBb047O0FBRTFPLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrSEFBK0Q7O0FBRXBGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0Y7QUFDcUI7QUFDeEI7QUFjMUIsSUFBTSxTQUFTLEdBQW9CLFVBQUMsRUFVbkM7UUFUQyxhQUFjLEVBQWQsbUNBQWMsRUFDZCxvQkFBbUIsRUFBbkIsd0NBQW1CLEVBQ25CLGdCQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsc0JBQVEsRUFDUiw4QkFBWSxFQUNaLHdCQUE0QixFQUE1QixpREFBNEIsRUFDNUIsbUJBQWtCLEVBQWxCLHVDQUFrQixFQUNsQixZQUFhLEVBQWIsa0NBQWEsRUFDYixnQkFBSztJQUNELFFBQ0osb0RBQUMsMENBQUssSUFDSixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxtREFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN0RCxZQUFZLEVBQUUsWUFBWSxFQUMxQixRQUFRLEVBQUUsUUFBUSxFQUNsQixRQUFRLEVBQUUsUUFBUSxFQUNsQixZQUFZLEVBQUUsWUFBWSxFQUMxQixXQUFXLEVBQUUsV0FBVyxFQUN4QixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEdBQ1osQ0FDSDtBQVhLLENBV0wsQ0FBQztBQUVhLHdFQUFTLEVBQUMiLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmJsdWVfX18zZ2laSiB7XFxuICBjb2xvcjogIzU2NUU1RjtcXG59XFxuLmJsdWVfX18zZ2laSjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxNEE4RjM7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzE0QThGMzMzO1xcbn1cXG4ucmVkX19fMmJKbXUge1xcbiAgY29sb3I6ICNFNDEyNDU7XFxufVxcbi5yZWRfX18yYkptdTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNFNDEyNDU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggI0U0MTI0NTMzO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCO0FBY3ZCLHNCQUFzQjtBQUN0QjtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7Q0FDakM7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7Q0FDakNcIixcImZpbGVcIjpcInRleHRJbnB1dC5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgYmxhY2s6ICM1NjVFNUY7XFxuICBibHVlOiAjMTRBOEYzO1xcbiAgZ3JlZW46ICM3RENDOTM7XFxuICBkYXJrR3JleTogI0E0QUFBRjtcXG4gIG9yYW5nZTogI0YxN0QwMDtcXG4gIHB1cnBsZTogIzMxMzU1QTtcXG4gIHJlZDogI0U0MTI0NTtcXG4gIHRyYW5zcGFyZW50QmxhY2s6ICM1NjVFNWZBNjtcXG4gIHRyYW5zcGFyZW50V2hpdGU6ICNGRkZGRkZCRjtcXG4gIHdoaXRlOiAjRkZGO1xcbiAgeWVsbG93OiAjRkNDOTAwO1xcbn1cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLmJsdWUge1xcbiAgY29sb3I6ICM1NjVFNUY7XFxufVxcbi5ibHVlOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzE0QThGMztcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMTRBOEYzMzM7XFxufVxcbi5yZWQge1xcbiAgY29sb3I6ICNFNDEyNDU7XFxufVxcbi5yZWQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjRTQxMjQ1O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNFNDEyNDUzMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJsYWNrXCI6IFwiIzU2NUU1RlwiLFxuXHRcImJsdWVcIjogXCJibHVlX19fM2dpWkpcIixcblx0XCJncmVlblwiOiBcIiM3RENDOTNcIixcblx0XCJkYXJrR3JleVwiOiBcIiNBNEFBQUZcIixcblx0XCJvcmFuZ2VcIjogXCIjRjE3RDAwXCIsXG5cdFwicHVycGxlXCI6IFwiIzMxMzU1QVwiLFxuXHRcInJlZFwiOiBcInJlZF9fXzJiSm11XCIsXG5cdFwidHJhbnNwYXJlbnRCbGFja1wiOiBcIiM1NjVFNWZBNlwiLFxuXHRcInRyYW5zcGFyZW50V2hpdGVcIjogXCIjRkZGRkZGQkZcIixcblx0XCJ3aGl0ZVwiOiBcIiNGRkZcIixcblx0XCJ5ZWxsb3dcIjogXCIjRkNDOTAwXCJcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNhcmV0U2l6ZVwiOlwiMC42MjVyZW1cIixcImZvb3Rlckxpc3RNYXJnaW5cIjpcIjNyZW1cIixcImZvb3RlckxvZ29TaXplXCI6XCI1cmVtXCIsXCJoZWFkZXJIZWlnaHRcIjpcIjNyZW1cIixcImhlYWRlck1hcmdpblRvcFwiOlwiMi41cmVtXCIsXCJuYXZXaWR0aFwiOlwiNXJlbVwiLFwic3RhY2tDYXJkU2l6ZVwiOlwiN3JlbVwiLFwidG9hc3RXaWR0aFwiOlwiMjQuNXJlbVwiLFwiYmxhY2tcIjpcIiM1NjVFNUZcIixcImJsdWVcIjpcIiMxNEE4RjNcIixcImdyZWVuXCI6XCIjN0RDQzkzXCIsXCJkYXJrR3JleVwiOlwiI0E0QUFBRlwiLFwib3JhbmdlXCI6XCIjRjE3RDAwXCIsXCJwdXJwbGVcIjpcIiMzMTM1NUFcIixcInJlZFwiOlwiI0U0MTI0NVwiLFwidHJhbnNwYXJlbnRCbGFja1wiOlwiIzU2NUU1ZkE2XCIsXCJ0cmFuc3BhcmVudFdoaXRlXCI6XCIjRkZGRkZGQkZcIixcIndoaXRlXCI6XCIjRkZGXCIsXCJ5ZWxsb3dcIjpcIiNGQ0M5MDBcIn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi90ZXh0SW5wdXQubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi90ZXh0SW5wdXQubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vdGV4dElucHV0Lm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3RleHRJbnB1dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgJy4vdGV4dElucHV0Lmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb2xvcj86ICdibHVlJyB8ICdyZWQnO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xuICBvblByZXNzRW50ZXI/OiAoKSA9PiB2b2lkO1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY29sb3IgPSAnYmx1ZScsXG4gIGRlZmF1bHRWYWx1ZSA9IG51bGwsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIG9uQ2hhbmdlLFxuICBvblByZXNzRW50ZXIsXG4gIG92ZXJsYXlDbGFzc05hbWUgPSB1bmRlZmluZWQsXG4gIHBsYWNlaG9sZGVyID0gbnVsbCxcbiAgdHlwZSA9ICd0ZXh0JyxcbiAgdmFsdWUsXG59KSA9PiAoXG4gIDxJbnB1dFxuICAgIGNsYXNzTmFtZT17W292ZXJsYXlDbGFzc05hbWUsIHN0eWxlc1tjb2xvcl1dLmpvaW4oJyAnKX1cbiAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICB0eXBlPXt0eXBlfVxuICAgIHZhbHVlPXt2YWx1ZX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=