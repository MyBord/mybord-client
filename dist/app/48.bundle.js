(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormLoginInputs.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormInputs/loginFormLoginInputs.tsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! forms/formItem/formItem */ "./src/spa/shared/forms/formItem/formItem.tsx");
/* harmony import */ var inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputs/passwordInput/passwordInput */ "./src/spa/shared/inputs/passwordInput/passwordInput.tsx");
/* harmony import */ var inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inputs/textInput/textInput */ "./src/spa/shared/inputs/textInput/textInput.tsx");




var LoginFormLoginInputs = function (_a) {
    var form = _a.form;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: "emailOrUsername", form: form, required: true, requiredMessage: "Please enter your email address or username" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: "Email or Username" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: "password", form: form, required: true, requiredMessage: "Please enter your password" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: "Password" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFormLoginInputs);


/***/ }),

/***/ "./src/spa/shared/inputs/passwordInput/passwordInput.tsx":
/*!***************************************************************!*\
  !*** ./src/spa/shared/inputs/passwordInput/passwordInput.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../textInput/textInput.less */ "./src/spa/shared/inputs/textInput/textInput.less");
/* harmony import */ var _textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textInput_textInput_less__WEBPACK_IMPORTED_MODULE_2__);



var PasswordInput = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _c = _a.placeholder, placeholder = _c === void 0 ? null : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, { disabled: disabled, onChange: onChange, onPressEnter: onPressEnter, placeholder: placeholder }));
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordInput);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2xhbmRpbmcvbGF5b3V0L2xvZ2luUGFnZS9sb2dpbkZvcm0vbG9naW5Gb3JtQ29udGVudC9sb2dpbkZvcm1JbnB1dHMvbG9naW5Gb3JtTG9naW5JbnB1dHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvc2hhcmVkL2lucHV0cy9wYXNzd29yZElucHV0L3Bhc3N3b3JkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDZ0I7QUFDZ0I7QUFDWjtBQU9uRCxJQUFNLG9CQUFvQixHQUFvQixVQUFDLEVBQVE7UUFBTixjQUFJO0lBQU8sUUFDMUQ7UUFDRSxvREFBQywrREFBUSxJQUNQLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLFFBQ1IsZUFBZSxFQUFDLDZDQUE2QztZQUU3RCxvREFBQyxrRUFBUyxJQUFDLFdBQVcsRUFBQyxtQkFBbUIsR0FBRyxDQUNwQztRQUNYLG9EQUFDLCtEQUFRLElBQ1AsU0FBUyxFQUFDLFVBQVUsRUFDcEIsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLFFBQ1IsZUFBZSxFQUFDLDRCQUE0QjtZQUU1QyxvREFBQywwRUFBYSxJQUFDLFdBQVcsRUFBQyxVQUFVLEdBQUcsQ0FDL0IsQ0FDVixDQUNKO0FBbkIyRCxDQW1CM0QsQ0FBQztBQUVhLG1GQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0JwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDRjtBQUNRO0FBU3JDLElBQU0sYUFBYSxHQUFvQixVQUFDLEVBS3ZDO1FBSkMsZ0JBQWdCLEVBQWhCLHFDQUFnQixFQUNoQixzQkFBUSxFQUNSLDhCQUFZLEVBQ1osbUJBQWtCLEVBQWxCLHVDQUFrQjtJQUNkLFFBQ0osb0RBQUMsMENBQUssQ0FBQyxRQUFRLElBQ2IsUUFBUSxFQUFFLFFBQVEsRUFDbEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsWUFBWSxFQUFFLFlBQVksRUFDMUIsV0FBVyxFQUFFLFdBQVcsR0FDeEIsQ0FDSDtBQVBLLENBT0wsQ0FBQztBQUVhLDRFQUFhLEVBQUMiLCJmaWxlIjoiNDguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJ2Zvcm1zL2Zvcm1JdGVtL2Zvcm1JdGVtJztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJ2lucHV0cy9wYXNzd29yZElucHV0L3Bhc3N3b3JkSW5wdXQnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdpbnB1dHMvdGV4dElucHV0L3RleHRJbnB1dCc7XG5pbXBvcnQgeyBGb3JtUHJvcCB9IGZyb20gJ3R5cGVzL2Zvcm1UeXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm06IEZvcm1Qcm9wO1xufVxuXG5jb25zdCBMb2dpbkZvcm1Mb2dpbklucHV0czogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybSB9KSA9PiAoXG4gIDw+XG4gICAgPEZvcm1JdGVtXG4gICAgICBmaWVsZE5hbWU9XCJlbWFpbE9yVXNlcm5hbWVcIlxuICAgICAgZm9ybT17Zm9ybX1cbiAgICAgIHJlcXVpcmVkXG4gICAgICByZXF1aXJlZE1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIG9yIHVzZXJuYW1lXCJcbiAgICA+XG4gICAgICA8VGV4dElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWwgb3IgVXNlcm5hbWVcIiAvPlxuICAgIDwvRm9ybUl0ZW0+XG4gICAgPEZvcm1JdGVtXG4gICAgICBmaWVsZE5hbWU9XCJwYXNzd29yZFwiXG4gICAgICBmb3JtPXtmb3JtfVxuICAgICAgcmVxdWlyZWRcbiAgICAgIHJlcXVpcmVkTWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICA+XG4gICAgICA8UGFzc3dvcmRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICA8L0Zvcm1JdGVtPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUxvZ2luSW5wdXRzO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCAnLi4vdGV4dElucHV0L3RleHRJbnB1dC5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XG4gIG9uUHJlc3NFbnRlcj86ICgpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBQYXNzd29yZElucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBvbkNoYW5nZSxcbiAgb25QcmVzc0VudGVyLFxuICBwbGFjZWhvbGRlciA9IG51bGwsXG59KSA9PiAoXG4gIDxJbnB1dC5QYXNzd29yZFxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgb25QcmVzc0VudGVyPXtvblByZXNzRW50ZXJ9XG4gICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=