(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".buttonDiv___2RpvP {\n  display: flex;\n}\n.buttonDiv___2RpvP button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv___sOYry {\n  flex-direction: column;\n}\n.forgotButtonDiv___sOYry .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv___3Rq2g {\n  height: 0.5rem;\n}\n.loginDiv___34mt0 {\n  justify-content: space-between;\n}\n.rememberForgotDiv___5d6PS {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv___1_F4e {\n  justify-content: end;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less"],"names":[],"mappings":"AAAA;EACE,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;CACf;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,qBAAqB;CACtB","file":"loginFormButtons.module.less","sourcesContent":[".buttonDiv {\n  display: flex;\n}\n.buttonDiv button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv {\n  flex-direction: column;\n}\n.forgotButtonDiv :global .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv {\n  height: 0.5rem;\n}\n.loginDiv {\n  justify-content: space-between;\n}\n.rememberForgotDiv {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv {\n  justify-content: end;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"buttonDiv": "buttonDiv___2RpvP",
	"forgotButtonDiv": "forgotButtonDiv___sOYry",
	"forgotDiv": "forgotDiv___3Rq2g",
	"loginDiv": "loginDiv___34mt0",
	"rememberForgotDiv": "rememberForgotDiv___5d6PS",
	"signUpDiv": "signUpDiv___1_F4e"
};

/***/ }),

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less":
/*!*******************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../../node_modules/postcss-loader/src!../../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./loginFormButtons.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormForgotButtons.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormForgotButtons.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/components/atoms/buttons/button/button.tsx");
/* harmony import */ var formItem_formItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formItem/formItem */ "./src/spa/components/atoms/formItem/formItem.tsx");
/* harmony import */ var _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginFormButtons.module.less */ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less");
/* harmony import */ var _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3__);




var LoginFormForgotButtons = function (_a) {
    var form = _a.form;
    var handleReset = function () {
        console.log('resetting password');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: [_loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3__["buttonDiv"], _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3__["forgotButtonDiv"]].join(' ') },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_3__["forgotDiv"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_2__["default"], { fieldName: "reset-password", form: form },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { htmlType: "submit", label: "Reset Password", onClick: handleReset }))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFormForgotButtons);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1CdXR0b25zL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtQnV0dG9ucy9sb2dpbkZvcm1CdXR0b25zLm1vZHVsZS5sZXNzP2ZmNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtQnV0dG9ucy9sb2dpbkZvcm1Gb3Jnb3RCdXR0b25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxrSEFBaUU7QUFDcEc7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixrQkFBa0IsR0FBRyw2QkFBNkIsb0JBQW9CLDRCQUE0QixrQkFBa0IsR0FBRyw0QkFBNEIsMkJBQTJCLEdBQUcsMkNBQTJDLHFCQUFxQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxxQkFBcUIsbUNBQW1DLEdBQUcsOEJBQThCLGtCQUFrQixtQ0FBbUMsR0FBRyxzQkFBc0IseUJBQXlCLEdBQUcsVUFBVSxnTUFBZ00sVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSw0RUFBNEUsa0JBQWtCLEdBQUcscUJBQXFCLG9CQUFvQiw0QkFBNEIsa0JBQWtCLEdBQUcsb0JBQW9CLDJCQUEyQixHQUFHLDJDQUEyQyxxQkFBcUIsR0FBRyxjQUFjLG1CQUFtQixHQUFHLGFBQWEsbUNBQW1DLEdBQUcsc0JBQXNCLGtCQUFrQixtQ0FBbUMsR0FBRyxjQUFjLHlCQUF5QixHQUFHLHFCQUFxQjs7QUFFeDdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNkQSxjQUFjLG1CQUFPLENBQUMsb2NBQTZPOztBQUVuUSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsd0hBQXFFOztBQUUxRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDWTtBQUNGO0FBRWdCO0FBTXpELElBQU0sc0JBQXNCLEdBQW9CLFVBQUMsRUFBUTtRQUFOLGNBQUk7SUFDckQsSUFBTSxXQUFXLEdBQUc7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCw2REFBSyxTQUFTLEVBQUUsQ0FBQyx1RUFBZ0IsRUFBRSw2RUFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEUsNkRBQUssU0FBUyxFQUFFLHVFQUFnQixHQUFJO1FBQ3BDLG9EQUFDLHlEQUFRLElBQ1AsU0FBUyxFQUFDLGdCQUFnQixFQUMxQixJQUFJLEVBQUUsSUFBSTtZQUVWLG9EQUFDLDZEQUFNLElBQ0wsUUFBUSxFQUFDLFFBQVEsRUFDakIsS0FBSyxFQUFDLGdCQUFnQixFQUN0QixPQUFPLEVBQUUsV0FBVyxHQUNwQixDQUNPLENBQ1AsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEscUZBQXNCLEVBQUMiLCJmaWxlIjoiMjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b25EaXZfX18yUnB2UCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYnV0dG9uRGl2X19fMlJwdlAgYnV0dG9uIHtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDcuNXJlbTtcXG59XFxuLmZvcmdvdEJ1dHRvbkRpdl9fX3NPWXJ5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3Jnb3RCdXR0b25EaXZfX19zT1lyeSAuYW50LWZvcm0taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZm9yZ290RGl2X19fM1JxMmcge1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxufVxcbi5sb2dpbkRpdl9fXzM0bXQwIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnJlbWVtYmVyRm9yZ290RGl2X19fNWQ2UFMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNpZ25VcERpdl9fXzFfRjRlIHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1CdXR0b25zL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsY0FBYztDQUNmO0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEJcIixcImZpbGVcIjpcImxvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbkRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYnV0dG9uRGl2IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA3LjVyZW07XFxufVxcbi5mb3Jnb3RCdXR0b25EaXYge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcmdvdEJ1dHRvbkRpdiA6Z2xvYmFsIC5hbnQtZm9ybS1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5mb3Jnb3REaXYge1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxufVxcbi5sb2dpbkRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5yZW1lbWJlckZvcmdvdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2lnblVwRGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uRGl2XCI6IFwiYnV0dG9uRGl2X19fMlJwdlBcIixcblx0XCJmb3Jnb3RCdXR0b25EaXZcIjogXCJmb3Jnb3RCdXR0b25EaXZfX19zT1lyeVwiLFxuXHRcImZvcmdvdERpdlwiOiBcImZvcmdvdERpdl9fXzNScTJnXCIsXG5cdFwibG9naW5EaXZcIjogXCJsb2dpbkRpdl9fXzM0bXQwXCIsXG5cdFwicmVtZW1iZXJGb3Jnb3REaXZcIjogXCJyZW1lbWJlckZvcmdvdERpdl9fXzVkNlBTXCIsXG5cdFwic2lnblVwRGl2XCI6IFwic2lnblVwRGl2X19fMV9GNGVcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9sb2dpbkZvcm1CdXR0b25zLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2J1dHRvbnMvYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnZm9ybUl0ZW0vZm9ybUl0ZW0nO1xuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICd0eXBlcy9mb3JtVHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vbG9naW5Gb3JtQnV0dG9ucy5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm06IEZvcm1Qcm9wO1xufVxuXG5jb25zdCBMb2dpbkZvcm1Gb3Jnb3RCdXR0b25zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Jlc2V0dGluZyBwYXNzd29yZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuYnV0dG9uRGl2LCBzdHlsZXMuZm9yZ290QnV0dG9uRGl2XS5qb2luKCcgJyl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3REaXZ9IC8+XG4gICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgZmllbGROYW1lPVwicmVzZXQtcGFzc3dvcmRcIlxuICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGxhYmVsPVwiUmVzZXQgUGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUZvcmdvdEJ1dHRvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9