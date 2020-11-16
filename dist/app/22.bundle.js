(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormLoginButtons.tsx":
/*!****************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormLoginButtons.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/shared/buttons/button/button.tsx");
/* harmony import */ var forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forms/formItem/formItem */ "./src/spa/shared/forms/formItem/formItem.tsx");
/* harmony import */ var context_loginContext_loginContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/loginContext/loginContext */ "./src/context/loginContext/loginContext.tsx");
/* harmony import */ var _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginFormButtons.module.less */ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less");
/* harmony import */ var _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4__);





var LoginFormLoginButtons = function (_a) {
    var form = _a.form;
    var _b = Object(context_loginContext_loginContext__WEBPACK_IMPORTED_MODULE_3__["useLoginContext"])(), isAuthenticationWaiting = _b.isAuthenticationWaiting, setFormStatus = _b.setFormStatus;
    var handleForgot = function () { return setFormStatus('forgot'); };
    var handleLogin = function () { return setFormStatus('login'); };
    var handleSignUp = function () { return setFormStatus('signUp'); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4__["rememberForgotDiv"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: [_loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4__["buttonDiv"], _loginFormButtons_module_less__WEBPACK_IMPORTED_MODULE_4__["loginDiv"]].join(' ') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_2__["default"], { fieldName: "login", form: form },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { htmlType: "submit", isWaiting: isAuthenticationWaiting, label: "Login", onClick: handleLogin })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_2__["default"], { fieldName: "sign-up", form: form },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { htmlType: "button", label: "Sign Up", onClick: handleSignUp, type: "secondary" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFormLoginButtons);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1CdXR0b25zL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtQnV0dG9ucy9sb2dpbkZvcm1CdXR0b25zLm1vZHVsZS5sZXNzP2ZmNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtQnV0dG9ucy9sb2dpbkZvcm1Mb2dpbkJ1dHRvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLGtIQUFpRTtBQUNwRzs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsdUJBQXVCLGtCQUFrQixHQUFHLDZCQUE2QixvQkFBb0IsNEJBQTRCLGtCQUFrQixHQUFHLDRCQUE0QiwyQkFBMkIsR0FBRywyQ0FBMkMscUJBQXFCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHFCQUFxQixtQ0FBbUMsR0FBRyw4QkFBOEIsa0JBQWtCLG1DQUFtQyxHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyxVQUFVLGdNQUFnTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLDRFQUE0RSxrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLDRCQUE0QixrQkFBa0IsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsMkNBQTJDLHFCQUFxQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsYUFBYSxtQ0FBbUMsR0FBRyxzQkFBc0Isa0JBQWtCLG1DQUFtQyxHQUFHLGNBQWMseUJBQXlCLEdBQUcscUJBQXFCOztBQUV4N0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2RBLGNBQWMsbUJBQU8sQ0FBQyxvY0FBNk87O0FBRW5RLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx3SEFBcUU7O0FBRTFGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1k7QUFFSTtBQUVxQjtBQUNYO0FBTXpELElBQU0scUJBQXFCLEdBQW9CLFVBQUMsRUFBUTtRQUFOLGNBQUk7SUFDOUMsb0dBQThELEVBQTVELG9EQUF1QixFQUFFLGdDQUFtQyxDQUFDO0lBRXJFLElBQU0sWUFBWSxHQUFHLGNBQVksb0JBQWEsQ0FBQyxRQUFRLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztJQUN6RCxJQUFNLFdBQVcsR0FBRyxjQUFZLG9CQUFhLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLENBQUM7SUFDdkQsSUFBTSxZQUFZLEdBQUcsY0FBWSxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUF2QixDQUF1QixDQUFDO0lBRXpELE9BQU8sQ0FDTDtRQUNFLDZEQUFLLFNBQVMsRUFBRSwrRUFBd0IsR0FhbEM7UUFDTiw2REFBSyxTQUFTLEVBQUUsQ0FBQyx1RUFBZ0IsRUFBRSxzRUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUMzRCxvREFBQywrREFBUSxJQUNQLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBRSxJQUFJO2dCQUVWLG9EQUFDLDZEQUFNLElBQ0wsUUFBUSxFQUFDLFFBQVEsRUFDakIsU0FBUyxFQUFFLHVCQUF1QixFQUNsQyxLQUFLLEVBQUMsT0FBTyxFQUNiLE9BQU8sRUFBRSxXQUFXLEdBQ3BCLENBQ087WUFDWCxvREFBQywrREFBUSxJQUNQLFNBQVMsRUFBQyxTQUFTLEVBQ25CLElBQUksRUFBRSxJQUFJO2dCQUVWLG9EQUFDLDZEQUFNLElBQ0wsUUFBUSxFQUFDLFFBQVEsRUFDakIsS0FBSyxFQUFDLFNBQVMsRUFDZixPQUFPLEVBQUUsWUFBWSxFQUNyQixJQUFJLEVBQUMsV0FBVyxHQUNoQixDQUNPLENBQ1AsQ0FDTCxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSxvRkFBcUIsRUFBQyIsImZpbGUiOiIyMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbkRpdl9fXzJScHZQIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5idXR0b25EaXZfX18yUnB2UCBidXR0b24ge1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNy41cmVtO1xcbn1cXG4uZm9yZ290QnV0dG9uRGl2X19fc09Zcnkge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcmdvdEJ1dHRvbkRpdl9fX3NPWXJ5IC5hbnQtZm9ybS1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5mb3Jnb3REaXZfX18zUnEyZyB7XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG59XFxuLmxvZ2luRGl2X19fMzRtdDAge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucmVtZW1iZXJGb3Jnb3REaXZfX181ZDZQUyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2lnblVwRGl2X19fMV9GNGUge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvbGFuZGluZy9sYXlvdXQvbG9naW5QYWdlL2xvZ2luRm9ybS9sb2dpbkZvcm1Db250ZW50L2xvZ2luRm9ybUJ1dHRvbnMvbG9naW5Gb3JtQnV0dG9ucy5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QlwiLFwiZmlsZVwiOlwibG9naW5Gb3JtQnV0dG9ucy5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnV0dG9uRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5idXR0b25EaXYgYnV0dG9uIHtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDcuNXJlbTtcXG59XFxuLmZvcmdvdEJ1dHRvbkRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9yZ290QnV0dG9uRGl2IDpnbG9iYWwgLmFudC1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmZvcmdvdERpdiB7XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG59XFxuLmxvZ2luRGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnJlbWVtYmVyRm9yZ290RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zaWduVXBEaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJidXR0b25EaXZcIjogXCJidXR0b25EaXZfX18yUnB2UFwiLFxuXHRcImZvcmdvdEJ1dHRvbkRpdlwiOiBcImZvcmdvdEJ1dHRvbkRpdl9fX3NPWXJ5XCIsXG5cdFwiZm9yZ290RGl2XCI6IFwiZm9yZ290RGl2X19fM1JxMmdcIixcblx0XCJsb2dpbkRpdlwiOiBcImxvZ2luRGl2X19fMzRtdDBcIixcblx0XCJyZW1lbWJlckZvcmdvdERpdlwiOiBcInJlbWVtYmVyRm9yZ290RGl2X19fNWQ2UFNcIixcblx0XCJzaWduVXBEaXZcIjogXCJzaWduVXBEaXZfX18xX0Y0ZVwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vbG9naW5Gb3JtQnV0dG9ucy5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2xvZ2luRm9ybUJ1dHRvbnMubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vbG9naW5Gb3JtQnV0dG9ucy5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnYnV0dG9ucy9idXR0b24vYnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdpbnB1dHMvY2hlY2tib3gvY2hlY2tib3gnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJ2Zvcm1zL2Zvcm1JdGVtL2Zvcm1JdGVtJztcbmltcG9ydCB7IEZvcm1Qcm9wIH0gZnJvbSAndHlwZXMvZm9ybVR5cGVzJztcbmltcG9ydCB7IHVzZUxvZ2luQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvbG9naW5Db250ZXh0L2xvZ2luQ29udGV4dCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9sb2dpbkZvcm1CdXR0b25zLm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybTogRm9ybVByb3A7XG59XG5cbmNvbnN0IExvZ2luRm9ybUxvZ2luQnV0dG9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGlvbldhaXRpbmcsIHNldEZvcm1TdGF0dXMgfSA9IHVzZUxvZ2luQ29udGV4dCgpO1xuXG4gIGNvbnN0IGhhbmRsZUZvcmdvdCA9ICgpOiB2b2lkID0+IHNldEZvcm1TdGF0dXMoJ2ZvcmdvdCcpO1xuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpOiB2b2lkID0+IHNldEZvcm1TdGF0dXMoJ2xvZ2luJyk7XG4gIGNvbnN0IGhhbmRsZVNpZ25VcCA9ICgpOiB2b2lkID0+IHNldEZvcm1TdGF0dXMoJ3NpZ25VcCcpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVtZW1iZXJGb3Jnb3REaXZ9PlxuICAgICAgICB7LyogPEZvcm1JdGVtICovfVxuICAgICAgICB7LyogIGZpZWxkTmFtZT1cInJlbWVtYmVyLW1lXCIgKi99XG4gICAgICAgIHsvKiAgZm9ybT17Zm9ybX0gKi99XG4gICAgICAgIHsvKiA+ICovfVxuICAgICAgICB7LyogIDxDaGVja2JveCBsYWJlbD1cIlJlbWVtYmVyIE1lXCIgLz4gKi99XG4gICAgICAgIHsvKiA8L0Zvcm1JdGVtPiAqL31cbiAgICAgICAgey8qIDxGb3JtSXRlbSAqL31cbiAgICAgICAgey8qICBmaWVsZE5hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIiAqL31cbiAgICAgICAgey8qICBmb3JtPXtmb3JtfSAqL31cbiAgICAgICAgey8qID4gKi99XG4gICAgICAgIHsvKiAgPEJ1dHRvbiBsYWJlbD1cIkZvcmdvdCBQYXNzd29yZD9cIiBvbkNsaWNrPXtoYW5kbGVGb3Jnb3R9IHR5cGU9XCJ0ZXJ0aWFyeVwiIC8+ICovfVxuICAgICAgICB7LyogPC9Gb3JtSXRlbT4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmJ1dHRvbkRpdiwgc3R5bGVzLmxvZ2luRGl2XS5qb2luKCcgJyl9PlxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBmaWVsZE5hbWU9XCJsb2dpblwiXG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGlzV2FpdGluZz17aXNBdXRoZW50aWNhdGlvbldhaXRpbmd9XG4gICAgICAgICAgICBsYWJlbD1cIkxvZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGZpZWxkTmFtZT1cInNpZ24tdXBcIlxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBsYWJlbD1cIlNpZ24gVXBcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnblVwfVxuICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtTG9naW5CdXR0b25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==