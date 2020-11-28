(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

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
/* harmony import */ var formItem_formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formItem/formItem */ "./src/spa/components/atoms/formItem/formItem.tsx");
/* harmony import */ var inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputs/passwordInput/passwordInput */ "./src/spa/components/atoms/inputs/passwordInput/passwordInput.tsx");
/* harmony import */ var inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inputs/textInput/textInput */ "./src/spa/components/atoms/inputs/textInput/textInput.tsx");




var LoginFormLoginInputs = function (_a) {
    var form = _a.form;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: "emailOrUsername", form: form, required: true, requiredMessage: "Please enter your email address or username" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: "Email or Username" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: "password", form: form, required: true, requiredMessage: "Please enter your password" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_passwordInput_passwordInput__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: "Password" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFormLoginInputs);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL3Bhc3N3b3JkSW5wdXQvcGFzc3dvcmRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9sYW5kaW5nL2xheW91dC9sb2dpblBhZ2UvbG9naW5Gb3JtL2xvZ2luRm9ybUNvbnRlbnQvbG9naW5Gb3JtSW5wdXRzL2xvZ2luRm9ybUxvZ2luSW5wdXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0Y7QUFDUTtBQVNyQyxJQUFNLGFBQWEsR0FBb0IsVUFBQyxFQUt2QztRQUpDLGdCQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsc0JBQVEsRUFDUiw4QkFBWSxFQUNaLG1CQUFrQixFQUFsQix1Q0FBa0I7SUFDZCxRQUNKLG9EQUFDLDBDQUFLLENBQUMsUUFBUSxJQUNiLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFlBQVksRUFBRSxZQUFZLEVBQzFCLFdBQVcsRUFBRSxXQUFXLEdBQ3hCLENBQ0g7QUFQSyxDQU9MLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDekI3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDVTtBQUNzQjtBQUNaO0FBT25ELElBQU0sb0JBQW9CLEdBQW9CLFVBQUMsRUFBUTtRQUFOLGNBQUk7SUFBTyxRQUMxRDtRQUNFLG9EQUFDLHlEQUFRLElBQ1AsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsUUFDUixlQUFlLEVBQUMsNkNBQTZDO1lBRTdELG9EQUFDLGtFQUFTLElBQUMsV0FBVyxFQUFDLG1CQUFtQixHQUFHLENBQ3BDO1FBQ1gsb0RBQUMseURBQVEsSUFDUCxTQUFTLEVBQUMsVUFBVSxFQUNwQixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsUUFDUixlQUFlLEVBQUMsNEJBQTRCO1lBRTVDLG9EQUFDLDBFQUFhLElBQUMsV0FBVyxFQUFDLFVBQVUsR0FBRyxDQUMvQixDQUNWLENBQ0o7QUFuQjJELENBbUIzRCxDQUFDO0FBRWEsbUZBQW9CLEVBQUMiLCJmaWxlIjoiNDcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCAnLi4vdGV4dElucHV0L3RleHRJbnB1dC5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XG4gIG9uUHJlc3NFbnRlcj86ICgpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBQYXNzd29yZElucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBvbkNoYW5nZSxcbiAgb25QcmVzc0VudGVyLFxuICBwbGFjZWhvbGRlciA9IG51bGwsXG59KSA9PiAoXG4gIDxJbnB1dC5QYXNzd29yZFxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgb25QcmVzc0VudGVyPXtvblByZXNzRW50ZXJ9XG4gICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICdmb3JtSXRlbS9mb3JtSXRlbSc7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tICdpbnB1dHMvcGFzc3dvcmRJbnB1dC9wYXNzd29yZElucHV0JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnaW5wdXRzL3RleHRJbnB1dC90ZXh0SW5wdXQnO1xuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICd0eXBlcy9mb3JtVHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmb3JtOiBGb3JtUHJvcDtcbn1cblxuY29uc3QgTG9naW5Gb3JtTG9naW5JbnB1dHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGZvcm0gfSkgPT4gKFxuICA8PlxuICAgIDxGb3JtSXRlbVxuICAgICAgZmllbGROYW1lPVwiZW1haWxPclVzZXJuYW1lXCJcbiAgICAgIGZvcm09e2Zvcm19XG4gICAgICByZXF1aXJlZFxuICAgICAgcmVxdWlyZWRNZXNzYWdlPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyBvciB1c2VybmFtZVwiXG4gICAgPlxuICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsIG9yIFVzZXJuYW1lXCIgLz5cbiAgICA8L0Zvcm1JdGVtPlxuICAgIDxGb3JtSXRlbVxuICAgICAgZmllbGROYW1lPVwicGFzc3dvcmRcIlxuICAgICAgZm9ybT17Zm9ybX1cbiAgICAgIHJlcXVpcmVkXG4gICAgICByZXF1aXJlZE1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgPlxuICAgICAgPFBhc3N3b3JkSW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Mb2dpbklucHV0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=