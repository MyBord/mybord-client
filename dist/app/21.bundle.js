(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.invalidUsernameDiv___1WdcG .ant-form-item {\n  margin-bottom: 4rem;\n  transition: 0.3s margin-bottom ease;\n}\n.loginPasswordDiv___2zSti .ant-form-item {\n  margin-bottom: 0.75rem;\n  transition: 0.3s margin-bottom ease;\n}\n.loginPasswordDiv___2zSti .ant-form-item-with-help {\n  margin-bottom: calc(0.75rem + 0.5rem);\n}\n.usernameDiv___1j5ZY .ant-form-item {\n  margin-bottom: 0.75rem;\n  transition: 0.3s margin-bottom ease;\n}\n.usernameDiv___1j5ZY .ant-form-item-with-help {\n  margin-bottom: calc(0.75rem + 0.5rem);\n}\n.weakLoginPasswordDiv___sA8BZ .ant-form-item {\n  margin-bottom: 9.25rem;\n  transition: 0.3s margin-bottom ease;\n}\n.weakPasswordDiv___2QXnE {\n  margin: 0 0 0.5rem 1rem;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,oBAAoB;EACpB,oCAAoC;CACrC;AACD;EACE,uBAAuB;EACvB,oCAAoC;CACrC;AACD;EACE,sCAAsC;CACvC;AACD;EACE,uBAAuB;EACvB,oCAAoC;CACrC;AACD;EACE,sCAAsC;CACvC;AACD;EACE,uBAAuB;EACvB,oCAAoC;CACrC;AACD;EACE,wBAAwB;CACzB","file":"loginFormInputs.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.invalidUsernameDiv :global .ant-form-item {\n  margin-bottom: 4rem;\n  transition: 0.3s margin-bottom ease;\n}\n.loginPasswordDiv :global .ant-form-item {\n  margin-bottom: 0.75rem;\n  transition: 0.3s margin-bottom ease;\n}\n.loginPasswordDiv :global .ant-form-item-with-help {\n  margin-bottom: calc(0.75rem + 0.5rem);\n}\n.usernameDiv :global .ant-form-item {\n  margin-bottom: 0.75rem;\n  transition: 0.3s margin-bottom ease;\n}\n.usernameDiv :global .ant-form-item-with-help {\n  margin-bottom: calc(0.75rem + 0.5rem);\n}\n.weakLoginPasswordDiv :global .ant-form-item {\n  margin-bottom: 9.25rem;\n  transition: 0.3s margin-bottom ease;\n}\n.weakPasswordDiv {\n  margin: 0 0 0.5rem 1rem;\n}\n"],"sourceRoot":""}]);

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
	"invalidUsernameDiv": "invalidUsernameDiv___1WdcG",
	"loginPasswordDiv": "loginPasswordDiv___2zSti",
	"usernameDiv": "usernameDiv___1j5ZY",
	"weakLoginPasswordDiv": "weakLoginPasswordDiv___sA8BZ",
	"weakPasswordDiv": "weakPasswordDiv___2QXnE"
};

/***/ }),

/***/ "./src/spa/components/atoms/inputs/passwordInput/passwordInput.tsx":
/*!*************************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/passwordInput/passwordInput.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../textInput/textInput.less */ "./src/spa/components/atoms/inputs/textInput/textInput.less");
/* harmony import */ var _textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2__);



var PasswordInput = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _c = _a.placeholder, placeholder = _c === void 0 ? null : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, { disabled: disabled, onChange: onChange, onPressEnter: onPressEnter, placeholder: placeholder }));
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordInput);


/***/ }),

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less":
/*!*****************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../../node_modules/postcss-loader/src!../../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./loginFormInputs.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less");

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

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormSignUpInputs.tsx":
/*!***************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormSignUpInputs.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formItem_formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formItem/formItem */ "./src/spa/components/atoms/formItem/formItem.tsx");
/* harmony import */ var inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputs/passwordInput/passwordInput */ "./src/spa/components/atoms/inputs/passwordInput/passwordInput.tsx");
/* harmony import */ var inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inputs/textInput/textInput */ "./src/spa/components/atoms/inputs/textInput/textInput.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typography/typography */ "./src/spa/components/atoms/typography/typography.tsx");
/* harmony import */ var context_loginContext_loginContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/loginContext/loginContext */ "./src/context/loginContext/loginContext.tsx");
/* harmony import */ var _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginFormInputs.module.less */ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormInputs.module.less");
/* harmony import */ var _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__);







var duplicateEmailMessage = 'That account already exists';
var duplicateUsernameMessage = 'That username is already taken';
var invalidUsernameMessage = 'The username can only contain letters (a-z), numbers (0-9), dashes,'
    + ' underscores and periods (-_.)';
var PasswordReactMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "red", text: "Your password must be:" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__["weakPasswordDiv"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "red", text: "\u2022 At least 8 characters long" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "red", text: "\u2022 Have at least one upper case character" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "red", text: "\u2022 Contain at least one number" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "red", text: "\u2022 Contain at least one special character (!@#$&*-)" }))));
var LoginFormSignUpInputs = function (_a) {
    var form = _a.form;
    var signUpStatus = Object(context_loginContext_loginContext__WEBPACK_IMPORTED_MODULE_5__["useLoginContext"])().signUpStatus;
    var _b = form.getFieldsValue(['confirmPassword', 'loginPassword']), confirmPassword = _b.confirmPassword, loginPassword = _b.loginPassword;
    var confirmPasswordIsSuccess = confirmPassword
        && confirmPassword.length > 0
        && confirmPassword === loginPassword;
    var validateConfirmPassword = function (rule, value, callback) {
        if (confirmPasswordIsSuccess) {
            return callback();
        }
        return callback('Passwords must match');
    };
    var getUsernameErrorMessage = function () {
        if (signUpStatus === 'invalid username') {
            return invalidUsernameMessage;
        }
        if (signUpStatus === 'duplicate username') {
            return duplicateUsernameMessage;
        }
        return null;
    };
    var usernameClassName = signUpStatus === 'invalid username'
        ? _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__["invalidUsernameDiv"]
        : _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__["usernameDiv"];
    var loginPasswordClassName = signUpStatus === 'weak password'
        ? _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__["weakLoginPasswordDiv"]
        : _loginFormInputs_module_less__WEBPACK_IMPORTED_MODULE_6__["loginPasswordDiv"];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { errorMessage: signUpStatus === 'duplicate email' && duplicateEmailMessage, fieldName: "loginEmail", form: form, required: true, requiredMessage: "Please enter your email address", type: "email", typeMessage: "You entered an invalid email address" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: "Email" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: usernameClassName },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { errorMessage: getUsernameErrorMessage(), fieldName: "loginUsername", form: form, required: true, requiredMessage: "Please enter a username" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: "Username" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: loginPasswordClassName },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { errorMessage: signUpStatus === 'weak password' && PasswordReactMessage, fieldName: "loginPassword", form: form, required: true, requiredMessage: "Please enter a password" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: "Password" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: "confirmPassword", form: form, isSuccess: confirmPasswordIsSuccess, required: true, requiredMessage: "Please confirm your password", validator: validateConfirmPassword },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: "Confirm Password" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFormSignUpInputs);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1JbnB1dHMvbG9naW5Gb3JtSW5wdXRzLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9hdG9tcy9pbnB1dHMvcGFzc3dvcmRJbnB1dC9wYXNzd29yZElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1JbnB1dHMvbG9naW5Gb3JtSW5wdXRzLm1vZHVsZS5sZXNzP2VlYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtSW5wdXRzL2xvZ2luRm9ybVNpZ25VcElucHV0cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsa0hBQWlFO0FBQ3BHOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxnR0FBZ0csd0JBQXdCLHdDQUF3QyxHQUFHLDRDQUE0QywyQkFBMkIsd0NBQXdDLEdBQUcsc0RBQXNELDBDQUEwQyxHQUFHLHVDQUF1QywyQkFBMkIsd0NBQXdDLEdBQUcsaURBQWlELDBDQUEwQyxHQUFHLGdEQUFnRCwyQkFBMkIsd0NBQXdDLEdBQUcsNEJBQTRCLDRCQUE0QixHQUFHLFVBQVUscU1BQXFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksaUdBQWlHLHdCQUF3QiwyQkFBMkIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsbUJBQW1C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RUFBYSxJQUFDLFdBQVcsRUFBQyxVQUFVLEdBQUcsQ0FDL0IsQ0FDUDtRQUNOLG9EQUFDLHlEQUFRLElBQ1AsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSx3QkFBd0IsRUFDbkMsUUFBUSxRQUNSLGVBQWUsRUFBQyw4QkFBOEIsRUFDOUMsU0FBUyxFQUFFLHVCQUF1QjtZQUVsQyxvREFBQywwRUFBYSxJQUFDLFdBQVcsRUFBQyxrQkFBa0IsR0FBRyxDQUN2QyxDQUNWLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVhLG9GQUFxQixFQUFDIiwiZmlsZSI6IjIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXG4uaW52YWxpZFVzZXJuYW1lRGl2X19fMVdkY0cgLmFudC1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luLWJvdHRvbSBlYXNlO1xcbn1cXG4ubG9naW5QYXNzd29yZERpdl9fXzJ6U3RpIC5hbnQtZm9ybS1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjNzIG1hcmdpbi1ib3R0b20gZWFzZTtcXG59XFxuLmxvZ2luUGFzc3dvcmREaXZfX18yelN0aSAuYW50LWZvcm0taXRlbS13aXRoLWhlbHAge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjc1cmVtICsgMC41cmVtKTtcXG59XFxuLnVzZXJuYW1lRGl2X19fMWo1WlkgLmFudC1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luLWJvdHRvbSBlYXNlO1xcbn1cXG4udXNlcm5hbWVEaXZfX18xajVaWSAuYW50LWZvcm0taXRlbS13aXRoLWhlbHAge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjc1cmVtICsgMC41cmVtKTtcXG59XFxuLndlYWtMb2dpblBhc3N3b3JkRGl2X19fc0E4QlogLmFudC1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogOS4yNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luLWJvdHRvbSBlYXNlO1xcbn1cXG4ud2Vha1Bhc3N3b3JkRGl2X19fMlFYbkUge1xcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDFyZW07XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvbGFuZGluZy9sYXlvdXQvbG9naW5QYWdlL2xvZ2luRm9ybS9sb2dpbkZvcm1Db250ZW50L2xvZ2luRm9ybUlucHV0cy9sb2dpbkZvcm1JbnB1dHMubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCO0FBV3ZCLHNCQUFzQjtBQUN0QjtFQUNFLG9CQUFvQjtFQUNwQixvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLHNDQUFzQztDQUN2QztBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztDQUNyQztBQUNEO0VBQ0Usc0NBQXNDO0NBQ3ZDO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsb0NBQW9DO0NBQ3JDO0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekJcIixcImZpbGVcIjpcImxvZ2luRm9ybUlucHV0cy5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgY2FyZXRTaXplOiAwLjYyNXJlbTtcXG4gIGZvb3Rlckxpc3RNYXJnaW46IDNyZW07XFxuICBmb290ZXJMb2dvU2l6ZTogNXJlbTtcXG4gIGhlYWRlckhlaWdodDogM3JlbTtcXG4gIGhlYWRlck1hcmdpblRvcDogMi41cmVtO1xcbiAgbmF2V2lkdGg6IDVyZW07XFxuICBzdGFja0NhcmRTaXplOiA3cmVtO1xcbiAgdG9hc3RXaWR0aDogMjQuNXJlbTtcXG59XFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5pbnZhbGlkVXNlcm5hbWVEaXYgOmdsb2JhbCAuYW50LWZvcm0taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4tYm90dG9tIGVhc2U7XFxufVxcbi5sb2dpblBhc3N3b3JkRGl2IDpnbG9iYWwgLmFudC1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3MgbWFyZ2luLWJvdHRvbSBlYXNlO1xcbn1cXG4ubG9naW5QYXNzd29yZERpdiA6Z2xvYmFsIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNzVyZW0gKyAwLjVyZW0pO1xcbn1cXG4udXNlcm5hbWVEaXYgOmdsb2JhbCAuYW50LWZvcm0taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4tYm90dG9tIGVhc2U7XFxufVxcbi51c2VybmFtZURpdiA6Z2xvYmFsIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNzVyZW0gKyAwLjVyZW0pO1xcbn1cXG4ud2Vha0xvZ2luUGFzc3dvcmREaXYgOmdsb2JhbCAuYW50LWZvcm0taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiA5LjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBtYXJnaW4tYm90dG9tIGVhc2U7XFxufVxcbi53ZWFrUGFzc3dvcmREaXYge1xcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJldFNpemVcIjogXCIwLjYyNXJlbVwiLFxuXHRcImZvb3Rlckxpc3RNYXJnaW5cIjogXCIzcmVtXCIsXG5cdFwiZm9vdGVyTG9nb1NpemVcIjogXCI1cmVtXCIsXG5cdFwiaGVhZGVySGVpZ2h0XCI6IFwiM3JlbVwiLFxuXHRcImhlYWRlck1hcmdpblRvcFwiOiBcIjIuNXJlbVwiLFxuXHRcIm5hdldpZHRoXCI6IFwiNXJlbVwiLFxuXHRcInN0YWNrQ2FyZFNpemVcIjogXCI3cmVtXCIsXG5cdFwidG9hc3RXaWR0aFwiOiBcIjI0LjVyZW1cIixcblx0XCJpbnZhbGlkVXNlcm5hbWVEaXZcIjogXCJpbnZhbGlkVXNlcm5hbWVEaXZfX18xV2RjR1wiLFxuXHRcImxvZ2luUGFzc3dvcmREaXZcIjogXCJsb2dpblBhc3N3b3JkRGl2X19fMnpTdGlcIixcblx0XCJ1c2VybmFtZURpdlwiOiBcInVzZXJuYW1lRGl2X19fMWo1WllcIixcblx0XCJ3ZWFrTG9naW5QYXNzd29yZERpdlwiOiBcIndlYWtMb2dpblBhc3N3b3JkRGl2X19fc0E4QlpcIixcblx0XCJ3ZWFrUGFzc3dvcmREaXZcIjogXCJ3ZWFrUGFzc3dvcmREaXZfX18yUVhuRVwiXG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgJy4uL3RleHRJbnB1dC90ZXh0SW5wdXQubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xuICBvblByZXNzRW50ZXI/OiAoKSA9PiB2b2lkO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgUGFzc3dvcmRJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgb25DaGFuZ2UsXG4gIG9uUHJlc3NFbnRlcixcbiAgcGxhY2Vob2xkZXIgPSBudWxsLFxufSkgPT4gKFxuICA8SW5wdXQuUGFzc3dvcmRcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkSW5wdXQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2xvZ2luRm9ybUlucHV0cy5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2xvZ2luRm9ybUlucHV0cy5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9sb2dpbkZvcm1JbnB1dHMubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnZm9ybUl0ZW0vZm9ybUl0ZW0nO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSAnaW5wdXRzL3Bhc3N3b3JkSW5wdXQvcGFzc3dvcmRJbnB1dCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2lucHV0cy90ZXh0SW5wdXQvdGV4dElucHV0JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBGb3JtUHJvcCwgVmFsaWRhdG9yIH0gZnJvbSAndHlwZXMvZm9ybVR5cGVzJztcbmltcG9ydCB7IHVzZUxvZ2luQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvbG9naW5Db250ZXh0L2xvZ2luQ29udGV4dCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9sb2dpbkZvcm1JbnB1dHMubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBkdXBsaWNhdGVFbWFpbE1lc3NhZ2UgPSAnVGhhdCBhY2NvdW50IGFscmVhZHkgZXhpc3RzJztcblxuY29uc3QgZHVwbGljYXRlVXNlcm5hbWVNZXNzYWdlID0gJ1RoYXQgdXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbic7XG5cbmNvbnN0IGludmFsaWRVc2VybmFtZU1lc3NhZ2UgPSAnVGhlIHVzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycyAoYS16KSwgbnVtYmVycyAoMC05KSwgZGFzaGVzLCdcbiAgKyAnIHVuZGVyc2NvcmVzIGFuZCBwZXJpb2RzICgtXy4pJztcblxuY29uc3QgUGFzc3dvcmRSZWFjdE1lc3NhZ2UgPSAoXG4gIDw+XG4gICAgPFR5cG9ncmFwaHlcbiAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgIHRleHQ9XCJZb3VyIHBhc3N3b3JkIG11c3QgYmU6XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2Vha1Bhc3N3b3JkRGl2fT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgdGV4dD1cIuKAoiBBdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZ1wiXG4gICAgICAvPlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICB0ZXh0PVwi4oCiIEhhdmUgYXQgbGVhc3Qgb25lIHVwcGVyIGNhc2UgY2hhcmFjdGVyXCJcbiAgICAgIC8+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgIHRleHQ9XCLigKIgQ29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyXCJcbiAgICAgIC8+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgIHRleHQ9XCLigKIgQ29udGFpbiBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIgKCFAIyQmKi0pXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybTogRm9ybVByb3A7XG59XG5cbmNvbnN0IExvZ2luRm9ybVNpZ25VcElucHV0czogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybSB9KSA9PiB7XG4gIGNvbnN0IHsgc2lnblVwU3RhdHVzIH0gPSB1c2VMb2dpbkNvbnRleHQoKTtcblxuICBjb25zdCB7IGNvbmZpcm1QYXNzd29yZCwgbG9naW5QYXNzd29yZCB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZShbJ2NvbmZpcm1QYXNzd29yZCcsICdsb2dpblBhc3N3b3JkJ10pO1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRJc1N1Y2Nlc3MgPSBjb25maXJtUGFzc3dvcmRcbiAgICAmJiBjb25maXJtUGFzc3dvcmQubGVuZ3RoID4gMFxuICAgICYmIGNvbmZpcm1QYXNzd29yZCA9PT0gbG9naW5QYXNzd29yZDtcblxuICBjb25zdCB2YWxpZGF0ZUNvbmZpcm1QYXNzd29yZDogVmFsaWRhdG9yID0gKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmIChjb25maXJtUGFzc3dvcmRJc1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaygnUGFzc3dvcmRzIG11c3QgbWF0Y2gnKTtcbiAgfTtcblxuICBjb25zdCBnZXRVc2VybmFtZUVycm9yTWVzc2FnZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChzaWduVXBTdGF0dXMgPT09ICdpbnZhbGlkIHVzZXJuYW1lJykge1xuICAgICAgcmV0dXJuIGludmFsaWRVc2VybmFtZU1lc3NhZ2U7XG4gICAgfVxuICAgIGlmIChzaWduVXBTdGF0dXMgPT09ICdkdXBsaWNhdGUgdXNlcm5hbWUnKSB7XG4gICAgICByZXR1cm4gZHVwbGljYXRlVXNlcm5hbWVNZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJuYW1lQ2xhc3NOYW1lID0gc2lnblVwU3RhdHVzID09PSAnaW52YWxpZCB1c2VybmFtZSdcbiAgICA/IHN0eWxlcy5pbnZhbGlkVXNlcm5hbWVEaXZcbiAgICA6IHN0eWxlcy51c2VybmFtZURpdjtcblxuICBjb25zdCBsb2dpblBhc3N3b3JkQ2xhc3NOYW1lID0gc2lnblVwU3RhdHVzID09PSAnd2VhayBwYXNzd29yZCdcbiAgICA/IHN0eWxlcy53ZWFrTG9naW5QYXNzd29yZERpdlxuICAgIDogc3R5bGVzLmxvZ2luUGFzc3dvcmREaXY7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1JdGVtXG4gICAgICAgIGVycm9yTWVzc2FnZT17c2lnblVwU3RhdHVzID09PSAnZHVwbGljYXRlIGVtYWlsJyAmJiBkdXBsaWNhdGVFbWFpbE1lc3NhZ2V9XG4gICAgICAgIGZpZWxkTmFtZT1cImxvZ2luRW1haWxcIlxuICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgICByZXF1aXJlZE1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdHlwZU1lc3NhZ2U9XCJZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgPlxuICAgICAgICA8VGV4dElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VybmFtZUNsYXNzTmFtZX0+XG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGVycm9yTWVzc2FnZT17Z2V0VXNlcm5hbWVFcnJvck1lc3NhZ2UoKX1cbiAgICAgICAgICBmaWVsZE5hbWU9XCJsb2dpblVzZXJuYW1lXCJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgcmVxdWlyZWRNZXNzYWdlPVwiUGxlYXNlIGVudGVyIGEgdXNlcm5hbWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2xvZ2luUGFzc3dvcmRDbGFzc05hbWV9PlxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e3NpZ25VcFN0YXR1cyA9PT0gJ3dlYWsgcGFzc3dvcmQnICYmIFBhc3N3b3JkUmVhY3RNZXNzYWdlfVxuICAgICAgICAgIGZpZWxkTmFtZT1cImxvZ2luUGFzc3dvcmRcIlxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICByZXF1aXJlZE1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgYSBwYXNzd29yZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm1JdGVtXG4gICAgICAgIGZpZWxkTmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgIGlzU3VjY2Vzcz17Y29uZmlybVBhc3N3b3JkSXNTdWNjZXNzfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgICByZXF1aXJlZE1lc3NhZ2U9XCJQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgdmFsaWRhdG9yPXt2YWxpZGF0ZUNvbmZpcm1QYXNzd29yZH1cbiAgICAgID5cbiAgICAgICAgPFBhc3N3b3JkSW5wdXQgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1TaWduVXBJbnB1dHM7XG4iXSwic291cmNlUm9vdCI6IiJ9