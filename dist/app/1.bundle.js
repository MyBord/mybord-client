(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/inputs/textInput/textInput.module.less":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/inputs/textInput/textInput.module.less ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.blue___3RjcG {\n  color: #565E5F;\n}\n.blue___3RjcG:focus {\n  border-color: #14A8F3;\n  box-shadow: 0 0 0 2px #14A8F333;\n}\n.red___110CF {\n  color: #E41245;\n}\n.red___110CF:focus {\n  border-color: #E41245;\n  box-shadow: 0 0 0 2px #E4124533;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/inputs/textInput/textInput.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAcvB,sBAAsB;AACtB;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gCAAgC;CACjC;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,gCAAgC;CACjC","file":"textInput.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  black: #565E5F;\n  blue: #14A8F3;\n  green: #7DCC93;\n  lightGrey: #A4AAAF;\n  orange: #F17D00;\n  purple: #31355A;\n  red: #E41245;\n  transparentBlack: #565E5fA6;\n  transparentWhite: #FFFFFFBF;\n  white: #FFF;\n  yellow: #FCC900;\n}\n/* stylelint-enable */\n.blue {\n  color: #565E5F;\n}\n.blue:focus {\n  border-color: #14A8F3;\n  box-shadow: 0 0 0 2px #14A8F333;\n}\n.red {\n  color: #E41245;\n}\n.red:focus {\n  border-color: #E41245;\n  box-shadow: 0 0 0 2px #E4124533;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"black": "#565E5F",
	"blue": "blue___3RjcG",
	"green": "#7DCC93",
	"lightGrey": "#A4AAAF",
	"orange": "#F17D00",
	"purple": "#31355A",
	"red": "red___110CF",
	"transparentBlack": "#565E5fA6",
	"transparentWhite": "#FFFFFFBF",
	"white": "#FFF",
	"yellow": "#FCC900"
};

/***/ }),

/***/ "./src/spa/shared/inputs/textInput/textInput.less":
/*!********************************************************!*\
  !*** ./src/spa/shared/inputs/textInput/textInput.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"caretSize":"0.625rem","footerListMargin":"3rem","footerLogoSize":"5rem","headerHeight":"3rem","headerMarginTop":"2.5rem","navWidth":"5rem","stackCardSize":"7rem","toastWidth":"24.5rem","black":"#565E5F","blue":"#14A8F3","green":"#7DCC93","lightGrey":"#A4AAAF","orange":"#F17D00","purple":"#31355A","red":"#E41245","transparentBlack":"#565E5fA6","transparentWhite":"#FFFFFFBF","white":"#FFF","yellow":"#FCC900"};

/***/ }),

/***/ "./src/spa/shared/inputs/textInput/textInput.module.less":
/*!***************************************************************!*\
  !*** ./src/spa/shared/inputs/textInput/textInput.module.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./textInput.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/inputs/textInput/textInput.module.less");

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

/***/ "./src/spa/shared/inputs/textInput/textInput.tsx":
/*!*******************************************************!*\
  !*** ./src/spa/shared/inputs/textInput/textInput.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _textInput_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textInput.module.less */ "./src/spa/shared/inputs/textInput/textInput.module.less");
/* harmony import */ var _textInput_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textInput_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textInput_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textInput.less */ "./src/spa/shared/inputs/textInput/textInput.less");
/* harmony import */ var _textInput_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textInput_less__WEBPACK_IMPORTED_MODULE_3__);




var TextInput = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'blue' : _b, _c = _a.defaultValue, defaultValue = _c === void 0 ? null : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _e = _a.overlayClassName, overlayClassName = _e === void 0 ? undefined : _e, _f = _a.placeholder, placeholder = _f === void 0 ? null : _f, _g = _a.type, type = _g === void 0 ? 'text' : _g, value = _a.value;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Input"], { className: [overlayClassName, _textInput_module_less__WEBPACK_IMPORTED_MODULE_2__[color]].join(' '), defaultValue: defaultValue, disabled: disabled, onChange: onChange, onPressEnter: onPressEnter, placeholder: placeholder, type: type, value: value }));
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9pbnB1dHMvdGV4dElucHV0L3RleHRJbnB1dC5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9pbnB1dHMvdGV4dElucHV0L3RleHRJbnB1dC5sZXNzPzNmZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQubW9kdWxlLmxlc3M/YmYyMSIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9pbnB1dHMvdGV4dElucHV0L3RleHRJbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxtRUFBbUUsbUJBQW1CLEdBQUcsdUJBQXVCLDBCQUEwQixvQ0FBb0MsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsc0JBQXNCLDBCQUEwQixvQ0FBb0MsR0FBRyxVQUFVLG1KQUFtSixhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsMkZBQTJGLG1CQUFtQixrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0Isb0JBQW9CLGlCQUFpQixnQ0FBZ0MsZ0NBQWdDLGdCQUFnQixvQkFBb0IsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsZUFBZSwwQkFBMEIsb0NBQW9DLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxjQUFjLDBCQUEwQixvQ0FBb0MsR0FBRyxxQkFBcUI7O0FBRS9xQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0Esa0JBQWtCLDRaOzs7Ozs7Ozs7Ozs7QUNBbEIsY0FBYyxtQkFBTyxDQUFDLDhXQUEyTTs7QUFFak8sNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDRjtBQUNxQjtBQUN4QjtBQWMxQixJQUFNLFNBQVMsR0FBb0IsVUFBQyxFQVVuQztRQVRDLGFBQWMsRUFBZCxtQ0FBYyxFQUNkLG9CQUFtQixFQUFuQix3Q0FBbUIsRUFDbkIsZ0JBQWdCLEVBQWhCLHFDQUFnQixFQUNoQixzQkFBUSxFQUNSLDhCQUFZLEVBQ1osd0JBQTRCLEVBQTVCLGlEQUE0QixFQUM1QixtQkFBa0IsRUFBbEIsdUNBQWtCLEVBQ2xCLFlBQWEsRUFBYixrQ0FBYSxFQUNiLGdCQUFLO0lBQ0QsUUFDSixvREFBQywwQ0FBSyxJQUNKLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1EQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3RELFlBQVksRUFBRSxZQUFZLEVBQzFCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFlBQVksRUFBRSxZQUFZLEVBQzFCLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssR0FDWixDQUNIO0FBWEssQ0FXTCxDQUFDO0FBRWEsd0VBQVMsRUFBQyIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXG4uYmx1ZV9fXzNSamNHIHtcXG4gIGNvbG9yOiAjNTY1RTVGO1xcbn1cXG4uYmx1ZV9fXzNSamNHOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzE0QThGMztcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMTRBOEYzMzM7XFxufVxcbi5yZWRfX18xMTBDRiB7XFxuICBjb2xvcjogI0U0MTI0NTtcXG59XFxuLnJlZF9fXzExMENGOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI0U0MTI0NTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjRTQxMjQ1MzM7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvc2hhcmVkL2lucHV0cy90ZXh0SW5wdXQvdGV4dElucHV0Lm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQWN2QixzQkFBc0I7QUFDdEI7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0NBQ2pDXCIsXCJmaWxlXCI6XCJ0ZXh0SW5wdXQubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG46ZXhwb3J0IHtcXG4gIGJsYWNrOiAjNTY1RTVGO1xcbiAgYmx1ZTogIzE0QThGMztcXG4gIGdyZWVuOiAjN0RDQzkzO1xcbiAgbGlnaHRHcmV5OiAjQTRBQUFGO1xcbiAgb3JhbmdlOiAjRjE3RDAwO1xcbiAgcHVycGxlOiAjMzEzNTVBO1xcbiAgcmVkOiAjRTQxMjQ1O1xcbiAgdHJhbnNwYXJlbnRCbGFjazogIzU2NUU1ZkE2O1xcbiAgdHJhbnNwYXJlbnRXaGl0ZTogI0ZGRkZGRkJGO1xcbiAgd2hpdGU6ICNGRkY7XFxuICB5ZWxsb3c6ICNGQ0M5MDA7XFxufVxcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXG4uYmx1ZSB7XFxuICBjb2xvcjogIzU2NUU1RjtcXG59XFxuLmJsdWU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTRBOEYzO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICMxNEE4RjMzMztcXG59XFxuLnJlZCB7XFxuICBjb2xvcjogI0U0MTI0NTtcXG59XFxuLnJlZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNFNDEyNDU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggI0U0MTI0NTMzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYmxhY2tcIjogXCIjNTY1RTVGXCIsXG5cdFwiYmx1ZVwiOiBcImJsdWVfX18zUmpjR1wiLFxuXHRcImdyZWVuXCI6IFwiIzdEQ0M5M1wiLFxuXHRcImxpZ2h0R3JleVwiOiBcIiNBNEFBQUZcIixcblx0XCJvcmFuZ2VcIjogXCIjRjE3RDAwXCIsXG5cdFwicHVycGxlXCI6IFwiIzMxMzU1QVwiLFxuXHRcInJlZFwiOiBcInJlZF9fXzExMENGXCIsXG5cdFwidHJhbnNwYXJlbnRCbGFja1wiOiBcIiM1NjVFNWZBNlwiLFxuXHRcInRyYW5zcGFyZW50V2hpdGVcIjogXCIjRkZGRkZGQkZcIixcblx0XCJ3aGl0ZVwiOiBcIiNGRkZcIixcblx0XCJ5ZWxsb3dcIjogXCIjRkNDOTAwXCJcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNhcmV0U2l6ZVwiOlwiMC42MjVyZW1cIixcImZvb3Rlckxpc3RNYXJnaW5cIjpcIjNyZW1cIixcImZvb3RlckxvZ29TaXplXCI6XCI1cmVtXCIsXCJoZWFkZXJIZWlnaHRcIjpcIjNyZW1cIixcImhlYWRlck1hcmdpblRvcFwiOlwiMi41cmVtXCIsXCJuYXZXaWR0aFwiOlwiNXJlbVwiLFwic3RhY2tDYXJkU2l6ZVwiOlwiN3JlbVwiLFwidG9hc3RXaWR0aFwiOlwiMjQuNXJlbVwiLFwiYmxhY2tcIjpcIiM1NjVFNUZcIixcImJsdWVcIjpcIiMxNEE4RjNcIixcImdyZWVuXCI6XCIjN0RDQzkzXCIsXCJsaWdodEdyZXlcIjpcIiNBNEFBQUZcIixcIm9yYW5nZVwiOlwiI0YxN0QwMFwiLFwicHVycGxlXCI6XCIjMzEzNTVBXCIsXCJyZWRcIjpcIiNFNDEyNDVcIixcInRyYW5zcGFyZW50QmxhY2tcIjpcIiM1NjVFNWZBNlwiLFwidHJhbnNwYXJlbnRXaGl0ZVwiOlwiI0ZGRkZGRkJGXCIsXCJ3aGl0ZVwiOlwiI0ZGRlwiLFwieWVsbG93XCI6XCIjRkNDOTAwXCJ9OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vdGV4dElucHV0Lm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vdGV4dElucHV0Lm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL3RleHRJbnB1dC5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi90ZXh0SW5wdXQubW9kdWxlLmxlc3MnO1xuaW1wb3J0ICcuL3RleHRJbnB1dC5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29sb3I/OiAnYmx1ZScgfCAncmVkJztcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcbiAgb25QcmVzc0VudGVyPzogKCkgPT4gdm9pZDtcbiAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5jb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNvbG9yID0gJ2JsdWUnLFxuICBkZWZhdWx0VmFsdWUgPSBudWxsLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBvbkNoYW5nZSxcbiAgb25QcmVzc0VudGVyLFxuICBvdmVybGF5Q2xhc3NOYW1lID0gdW5kZWZpbmVkLFxuICBwbGFjZWhvbGRlciA9IG51bGwsXG4gIHR5cGUgPSAndGV4dCcsXG4gIHZhbHVlLFxufSkgPT4gKFxuICA8SW5wdXRcbiAgICBjbGFzc05hbWU9e1tvdmVybGF5Q2xhc3NOYW1lLCBzdHlsZXNbY29sb3JdXS5qb2luKCcgJyl9XG4gICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICBvblByZXNzRW50ZXI9e29uUHJlc3NFbnRlcn1cbiAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgdHlwZT17dHlwZX1cbiAgICB2YWx1ZT17dmFsdWV9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9