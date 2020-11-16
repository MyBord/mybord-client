(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.section___3qe-9 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 5rem 0 0 calc(1rem + 1rem);\n  width: 100%;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/app/pages/userSettingsPage/userSettingsPage.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,mCAAmC;EACnC,YAAY;CACb","file":"userSettingsPage.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 5rem 0 0 calc(1rem + 1rem);\n  width: 100%;\n}\n"],"sourceRoot":""}]);

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
	"section": "section___3qe-9"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".buttonDiv___2YKln {\n  margin-top: 1rem;\n}\n.container___3zCdp {\n  margin-top: 1rem;\n}\n.typographyContainer___3vO_g {\n  margin-bottom: 1rem;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,oBAAoB;CACrB","file":"deleteAccountModal.module.less","sourcesContent":[".buttonDiv {\n  margin-top: 1rem;\n}\n.container {\n  margin-top: 1rem;\n}\n.typographyContainer {\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"buttonDiv": "buttonDiv___2YKln",
	"container": "container___3zCdp",
	"typographyContainer": "typographyContainer___3vO_g"
};

/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_promiseWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/promiseWrapper */ "./src/api/promiseWrapper.ts");


var get = function (gqlString) { return new Promise(function (resolve) {
    var body = JSON.stringify({ query: gqlString.loc.source.body });
    var config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    var url = ( false ? undefined : 'http') + "://" + "mbh-server-dev-jimmy.herokuapp.com/graphql";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, body, config).then(function (response) { return resolve(response.data.data); });
}); };
var query = function (gqlString) {
    var promise = get(gqlString);
    return {
        data: Object(api_promiseWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(promise),
    };
};
/* harmony default export */ __webpack_exports__["default"] = ({
    query: query,
});


/***/ }),

/***/ "./src/api/promiseWrapper.ts":
/*!***********************************!*\
  !*** ./src/api/promiseWrapper.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Source:
// https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// https://codesandbox.io/s/frosty-hermann-bztrp
/* harmony default export */ __webpack_exports__["default"] = (function (promise) {
    var status = 'pending';
    var result;
    var suspender = promise.then(function (r) {
        status = 'success';
        result = r;
    }, function (e) {
        status = 'error';
        result = e;
    });
    return {
        read: function () {
            if (status === 'pending') {
                throw suspender;
            }
            else if (status === 'error') {
                throw result;
            }
            else if (status === 'success') {
                return result;
            }
        },
    };
});


/***/ }),

/***/ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx":
/*!*******************************************************!*\
  !*** ./src/spa/app/pages/pageWrapper/pageWrapper.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fallbacks/spinner/spinner */ "./src/spa/shared/fallbacks/spinner/spinner.tsx");
/* harmony import */ var api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api/api */ "./src/api/api.ts");
/* harmony import */ var context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/hydrationContext/hydrationContext */ "./src/context/hydrationContext/hydrationContext.tsx");
// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.
// when `setHydration=false`, that means that once our data has been retrieved from the backend
// and / or our wrapped component (`Component`) has mounted, we DO NOT want to stop our page's
// spinner / loading animation. This is because there might be additional work that is *still*
// happening in the background of the wrapped component after data has been drilled, such as a
// context reducer being mutated.




var pageWrapper = function (_a) {
    var Component = _a.Component, gqlString = _a.gqlString, _b = _a.setHydration, setHydration = _b === void 0 ? true : _b;
    // ----- NO DATA IS NEEDED ----- //
    if (!gqlString) {
        var NoDataPage = function () {
            var _a = Object(context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__["useHydrationContext"])(), isAnimationComplete = _a.isAnimationComplete, setHydrationStatus = _a.setHydrationStatus;
            // See *1 in `hydrationContext.tsx`
            react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
                if (setHydration) {
                    setHydrationStatus(true);
                }
            }, [setHydrationStatus]);
            // See *2 in `hydrationContext.tsx`
            if (isAnimationComplete) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, null);
            }
            return null;
        };
        return NoDataPage;
    }
    // ----- DATA IS NEEDED ----- //
    var resource = api_api__WEBPACK_IMPORTED_MODULE_2__["default"].query(gqlString);
    var Page = function () {
        var _a = Object(context_hydrationContext_hydrationContext__WEBPACK_IMPORTED_MODULE_3__["useHydrationContext"])(), isAnimationComplete = _a.isAnimationComplete, isHydrated = _a.isHydrated, setHydrationStatus = _a.setHydrationStatus;
        // See *1 notes in `hydrationContext.tsx` about why our fallback `Spinner` may not render unless
        // our app has been hydrated.
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: isHydrated && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageContent, { isAnimationComplete: isAnimationComplete, setHydrationStatus: setHydrationStatus })));
    };
    var PageContent = function (_a) {
        var isAnimationComplete = _a.isAnimationComplete, setHydrationStatus = _a.setHydrationStatus;
        var data = resource.data.read();
        // See *1 in `hydrationContext.tsx`
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
            if (setHydration) {
                setHydrationStatus(true);
            }
        }, [setHydrationStatus]);
        // See *2 in `hydrationContext.tsx`
        if (isAnimationComplete) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { data: data });
        }
        return null;
    };
    return Page;
};
/* harmony default export */ __webpack_exports__["default"] = (pageWrapper);


/***/ }),

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less":
/*!*************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./userSettingsPage.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less");

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

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPage.tsx":
/*!*****************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPage.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/pageWrapper/pageWrapper */ "./src/spa/app/pages/pageWrapper/pageWrapper.tsx");
/* harmony import */ var _userSettingsPageForm_userSettingsPageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSettingsPageForm/userSettingsPageForm */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageForm.tsx");
/* harmony import */ var _userSettingsPage_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userSettingsPage.module.less */ "./src/spa/app/pages/userSettingsPage/userSettingsPage.module.less");
/* harmony import */ var _userSettingsPage_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_userSettingsPage_module_less__WEBPACK_IMPORTED_MODULE_3__);




var UserSettingsPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: _userSettingsPage_module_less__WEBPACK_IMPORTED_MODULE_3__["section"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_userSettingsPageForm_userSettingsPageForm__WEBPACK_IMPORTED_MODULE_2__["default"], null))); };
/* harmony default export */ __webpack_exports__["default"] = (Object(pages_pageWrapper_pageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])({ Component: UserSettingsPage }));


/***/ }),

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less":
/*!*******************************************************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--9-1!../../../../../../../node_modules/postcss-loader/src!../../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./deleteAccountModal.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less");

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

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/shared/buttons/button/button.tsx");
/* harmony import */ var forms_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! forms/form/form */ "./src/spa/shared/forms/form/form.tsx");
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typography/typography */ "./src/spa/shared/typography/typography.tsx");
/* harmony import */ var schema_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! schema/user */ "./src/server/schema/user.ts");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _deleteAccountModalFormContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deleteAccountModalFormContent */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModalFormContent.tsx");
/* harmony import */ var _deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deleteAccountModal.module.less */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.module.less");
/* harmony import */ var _deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var DeleteAccountModal = function () {
    var deleteCurrentUser = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(schema_user__WEBPACK_IMPORTED_MODULE_6__["DELETE_CURRENT_USER_MUTATION"])[0];
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_7__["useModalContext"])().setModalId;
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), canDelete = _a[0], setCanDelete = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), hasDeletingBegun = _b[0], setHasDeletingBegun = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), hasDeletingFinished = _c[0], setHasDeletingFinished = _c[1];
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setHasDeletingBegun(true);
                    return [4 /*yield*/, deleteCurrentUser()];
                case 1:
                    _a.sent();
                    setHasDeletingFinished(true);
                    setModalId(null);
                    window.location.href = '/';
                    return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modals_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "user-settings-delete-account-modal", title: "Delete Account" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9__["typographyContainer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_5__["default"], { color: "red", text: "Are you sure you want to delete your account?" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_5__["default"], { color: "red", text: 'Please type "delete" to confirm:' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_form_form__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_deleteAccountModalFormContent__WEBPACK_IMPORTED_MODULE_8__["default"], { setCanDelete: setCanDelete })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _deleteAccountModal_module_less__WEBPACK_IMPORTED_MODULE_9__["buttonDiv"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "red", disabled: !canDelete, label: "Delete My Account", isWaiting: hasDeletingBegun && !hasDeletingFinished, onClick: handleDelete })))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteAccountModal);


/***/ }),

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModalFormContent.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModalFormContent.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! forms/formItem/formItem */ "./src/spa/shared/forms/formItem/formItem.tsx");
/* harmony import */ var inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputs/textInput/textInput */ "./src/spa/shared/inputs/textInput/textInput.tsx");



var DeleteAccountModalFormContent = function (_a) {
    var form = _a.form, setCanDelete = _a.setCanDelete;
    var fieldName = 'delete-account-input-confirm';
    var fieldValue = form.getFieldValue(fieldName);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (fieldValue && fieldValue.toLowerCase() === 'delete') {
            setCanDelete(true);
        }
        else {
            setCanDelete(false);
        }
    }, [fieldValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: fieldName, form: form },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "red" })));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteAccountModalFormContent);


/***/ }),

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageForm.tsx":
/*!******************************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageForm.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var forms_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! forms/form/form */ "./src/spa/shared/forms/form/form.tsx");
/* harmony import */ var _userSettingsPageFormContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSettingsPageFormContent */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageFormContent.tsx");



var UserSettingsPageForm = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_form_form__WEBPACK_IMPORTED_MODULE_1__["default"], { layout: "horizontal" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_userSettingsPageFormContent__WEBPACK_IMPORTED_MODULE_2__["default"], null))); };
/* harmony default export */ __webpack_exports__["default"] = (UserSettingsPageForm);


/***/ }),

/***/ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageFormContent.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageFormContent.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/shared/buttons/button/button.tsx");
/* harmony import */ var forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forms/formItem/formItem */ "./src/spa/shared/forms/formItem/formItem.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _deleteAccountModal_deleteAccountModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteAccountModal/deleteAccountModal */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.tsx");





var UserSettingsPageFormContent = function (_a) {
    var form = _a.form;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () { return setModalId('user-settings-delete-account-modal'); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](forms_formItem_formItem__WEBPACK_IMPORTED_MODULE_2__["default"], { fieldName: "add-card-url-input", form: form, required: true, requiredMessage: "A url is required" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", label: "Delete Account", onClick: handleClick })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_deleteAccountModal_deleteAccountModal__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (UserSettingsPageFormContent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy91c2VyU2V0dGluZ3NQYWdlL3VzZXJTZXR0aW5nc1BhZ2UubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvcGFnZVdyYXBwZXIvcGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3VzZXJTZXR0aW5nc1BhZ2UvdXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzcz80ODBiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3VzZXJTZXR0aW5nc1BhZ2UvdXNlclNldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzP2Y4MDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy91c2VyU2V0dGluZ3NQYWdlL3VzZXJTZXR0aW5nc1BhZ2VGb3JtL2RlbGV0ZUFjY291bnRNb2RhbC9kZWxldGVBY2NvdW50TW9kYWxGb3JtQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS91c2VyU2V0dGluZ3NQYWdlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS91c2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsc0VBQXNFLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHVDQUF1QyxnQkFBZ0IsR0FBRyxVQUFVLDZKQUE2SixhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGlHQUFpRyx3QkFBd0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHVDQUF1QyxnQkFBZ0IsR0FBRyxxQkFBcUI7O0FBRTk1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNsQkEsMkJBQTJCLG1CQUFPLENBQUMsK0dBQThEO0FBQ2pHOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIscUJBQXFCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxVQUFVLGdNQUFnTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLDhFQUE4RSxxQkFBcUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUI7O0FBRXZvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDMEM7QUFPcEUsSUFBTSxHQUFHLEdBQUcsVUFBQyxTQUFvQixJQUFtQixXQUFJ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b0RBQUMsOEVBQWtCLE9BQUcsQ0FDckIsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEsMEZBQTJCLEVBQUMiLCJmaWxlIjoiMTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5zZWN0aW9uX19fM3FlLTkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDVyZW0gMCAwIGNhbGMoMXJlbSArIDFyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvamVtZXJ5L2Rldi9teWJvcmQtY2xpZW50L3NyYy9zcGEvYXBwL3BhZ2VzL3VzZXJTZXR0aW5nc1BhZ2UvdXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7QUFXdkIsc0JBQXNCO0FBQ3RCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLFlBQVk7Q0FDYlwiLFwiZmlsZVwiOlwidXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgY2FyZXRTaXplOiAwLjYyNXJlbTtcXG4gIGZvb3Rlckxpc3RNYXJnaW46IDNyZW07XFxuICBmb290ZXJMb2dvU2l6ZTogNXJlbTtcXG4gIGhlYWRlckhlaWdodDogM3JlbTtcXG4gIGhlYWRlck1hcmdpblRvcDogMi41cmVtO1xcbiAgbmF2V2lkdGg6IDVyZW07XFxuICBzdGFja0NhcmRTaXplOiA3cmVtO1xcbiAgdG9hc3RXaWR0aDogMjQuNXJlbTtcXG59XFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiA1cmVtIDAgMCBjYWxjKDFyZW0gKyAxcmVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2FyZXRTaXplXCI6IFwiMC42MjVyZW1cIixcblx0XCJmb290ZXJMaXN0TWFyZ2luXCI6IFwiM3JlbVwiLFxuXHRcImZvb3RlckxvZ29TaXplXCI6IFwiNXJlbVwiLFxuXHRcImhlYWRlckhlaWdodFwiOiBcIjNyZW1cIixcblx0XCJoZWFkZXJNYXJnaW5Ub3BcIjogXCIyLjVyZW1cIixcblx0XCJuYXZXaWR0aFwiOiBcIjVyZW1cIixcblx0XCJzdGFja0NhcmRTaXplXCI6IFwiN3JlbVwiLFxuXHRcInRvYXN0V2lkdGhcIjogXCIyNC41cmVtXCIsXG5cdFwic2VjdGlvblwiOiBcInNlY3Rpb25fX18zcWUtOVwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uRGl2X19fMllLbG4ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLmNvbnRhaW5lcl9fXzN6Q2RwIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi50eXBvZ3JhcGh5Q29udGFpbmVyX19fM3ZPX2cge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQlwiLFwiZmlsZVwiOlwiZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idXR0b25EaXYge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4udHlwb2dyYXBoeUNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uRGl2XCI6IFwiYnV0dG9uRGl2X19fMllLbG5cIixcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfX18zekNkcFwiLFxuXHRcInR5cG9ncmFwaHlDb250YWluZXJcIjogXCJ0eXBvZ3JhcGh5Q29udGFpbmVyX19fM3ZPX2dcIlxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHByb21pc2VXcmFwcGVyLCB7IFByb21pc2VXcmFwcGVyIH0gZnJvbSAnYXBpL3Byb21pc2VXcmFwcGVyJztcbmltcG9ydCB7IEdxbFN0cmluZyB9IGZyb20gJ3R5cGVzL2dxbFR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZTxUPiB7XG4gIGRhdGE6IFByb21pc2VXcmFwcGVyPFQ+O1xufVxuXG5jb25zdCBnZXQgPSAoZ3FsU3RyaW5nOiBHcWxTdHJpbmcpOiBQcm9taXNlPGFueT4gPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IGdxbFN0cmluZy5sb2Muc291cmNlLmJvZHkgfSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIH07XG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnUFJPRCcgPyAnaHR0cHMnIDogJ2h0dHAnfTovLyR7cHJvY2Vzcy5lbnYuVVJJfWA7XG5cbiAgYXhpb3MucG9zdCh1cmwsIGJvZHksIGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UuZGF0YS5kYXRhKSk7XG59KTtcblxuY29uc3QgcXVlcnkgPSAoZ3FsU3RyaW5nOiBHcWxTdHJpbmcpOiBSZXNvdXJjZTxhbnk+ID0+IHtcbiAgY29uc3QgcHJvbWlzZSA9IGdldChncWxTdHJpbmcpO1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHByb21pc2VXcmFwcGVyKHByb21pc2UpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeSxcbn07XG4iLCIvLyBTb3VyY2U6XG4vLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29uY3VycmVudC1tb2RlLXN1c3BlbnNlLmh0bWwjd2hhdC1pcy1zdXNwZW5zZS1leGFjdGx5XG4vLyBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvZnJvc3R5LWhlcm1hbm4tYnp0cnBcblxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlV3JhcHBlcjxUPiB7XG4gIHJlYWQoKTogVDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiBQcm9taXNlV3JhcHBlcjxUPiA9PiB7XG4gIGxldCBzdGF0dXMgPSAncGVuZGluZyc7XG4gIGxldCByZXN1bHQ6IFQ7XG4gIGNvbnN0IHN1c3BlbmRlciA9IHByb21pc2UudGhlbihcbiAgICAocikgPT4ge1xuICAgICAgc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgcmVzdWx0ID0gcjtcbiAgICB9LFxuICAgIChlKSA9PiB7XG4gICAgICBzdGF0dXMgPSAnZXJyb3InO1xuICAgICAgcmVzdWx0ID0gZTtcbiAgICB9LFxuICApO1xuICByZXR1cm4ge1xuICAgIHJlYWQoKSB7XG4gICAgICBpZiAoc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgdGhyb3cgc3VzcGVuZGVyO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0O1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuIiwiLy8gVGhpcyBvYmplY3RpdmUgb2YgdGhpcyB3cmFwcGVyIGlzIHRvIGNyZWF0ZSBhIGdlbmVyYWwgYXBpIHRoYXQgdGFrZXMgYSBwYWdlIG9mIG91ciBhcHBcbi8vIGFsb25nIHdpdGggdGhlIEdRTCBxdWVyeSB0aGF0IGRlcml2ZXMgYWxsIG5lY2Vzc2FyeSBkYXRhIGZvciBzYWlkIHBhZ2UgYW5kIHJ1bnMgdGhhdCBxdWVyeS5cbi8vIFRoZSBkYXRhIGlzIHRoZW4gcHJvdmlkZWQgdG8gdGhlIHBhZ2UgdG8gcmVuZGVyIGl0cyBuZWNlc3NhcnkgY29tcG9uZW50cy5cblxuLy8gd2hlbiBgc2V0SHlkcmF0aW9uPWZhbHNlYCwgdGhhdCBtZWFucyB0aGF0IG9uY2Ugb3VyIGRhdGEgaGFzIGJlZW4gcmV0cmlldmVkIGZyb20gdGhlIGJhY2tlbmRcbi8vIGFuZCAvIG9yIG91ciB3cmFwcGVkIGNvbXBvbmVudCAoYENvbXBvbmVudGApIGhhcyBtb3VudGVkLCB3ZSBETyBOT1Qgd2FudCB0byBzdG9wIG91ciBwYWdlJ3Ncbi8vIHNwaW5uZXIgLyBsb2FkaW5nIGFuaW1hdGlvbi4gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIGFkZGl0aW9uYWwgd29yayB0aGF0IGlzICpzdGlsbCpcbi8vIGhhcHBlbmluZyBpbiB0aGUgYmFja2dyb3VuZCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgYWZ0ZXIgZGF0YSBoYXMgYmVlbiBkcmlsbGVkLCBzdWNoIGFzIGFcbi8vIGNvbnRleHQgcmVkdWNlciBiZWluZyBtdXRhdGVkLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdmYWxsYmFja3Mvc3Bpbm5lci9zcGlubmVyJztcbmltcG9ydCBhcGkgZnJvbSAnYXBpL2FwaSc7XG5pbXBvcnQgeyBHcWxTdHJpbmcgfSBmcm9tICd0eXBlcy9ncWxUeXBlcyc7XG5pbXBvcnQgeyB1c2VIeWRyYXRpb25Db250ZXh0IH0gZnJvbSAnY29udGV4dC9oeWRyYXRpb25Db250ZXh0L2h5ZHJhdGlvbkNvbnRleHQnO1xuXG5pbnRlcmZhY2UgUGFnZUNvbnRlbnRQcm9wcyB7XG4gIGlzQW5pbWF0aW9uQ29tcGxldGU6IGJvb2xlYW47XG4gIHNldEh5ZHJhdGlvblN0YXR1czogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgQ29tcG9uZW50OiBSZWFjdC5GQzxXcmFwcGVkQ29tcG9uZW50UHJvcHM+O1xuICBncWxTdHJpbmc/OiBHcWxTdHJpbmc7XG4gIHNldEh5ZHJhdGlvbj86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBXcmFwcGVkQ29tcG9uZW50UHJvcHMge1xuICBkYXRhPzogYW55O1xufVxuXG5jb25zdCBwYWdlV3JhcHBlciA9ICh7XG4gIENvbXBvbmVudCxcbiAgZ3FsU3RyaW5nLFxuICBzZXRIeWRyYXRpb24gPSB0cnVlLFxufTogUHJvcHMpOiBSZWFjdC5GQyA9PiB7XG4gIC8vIC0tLS0tIE5PIERBVEEgSVMgTkVFREVEIC0tLS0tIC8vXG4gIGlmICghZ3FsU3RyaW5nKSB7XG4gICAgY29uc3QgTm9EYXRhUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlzQW5pbWF0aW9uQ29tcGxldGUsIHNldEh5ZHJhdGlvblN0YXR1cyB9ID0gdXNlSHlkcmF0aW9uQ29udGV4dCgpO1xuXG4gICAgICAvLyBTZWUgKjEgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YFxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNldEh5ZHJhdGlvbikge1xuICAgICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgW3NldEh5ZHJhdGlvblN0YXR1c10pO1xuXG4gICAgICAvLyBTZWUgKjIgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YFxuICAgICAgaWYgKGlzQW5pbWF0aW9uQ29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5vRGF0YVBhZ2U7XG4gIH1cblxuICAvLyAtLS0tLSBEQVRBIElTIE5FRURFRCAtLS0tLSAvL1xuICBjb25zdCByZXNvdXJjZSA9IGFwaS5xdWVyeShncWxTdHJpbmcpO1xuXG4gIGNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNBbmltYXRpb25Db21wbGV0ZSwgaXNIeWRyYXRlZCwgc2V0SHlkcmF0aW9uU3RhdHVzIH0gPSB1c2VIeWRyYXRpb25Db250ZXh0KCk7XG4gICAgLy8gU2VlICoxIG5vdGVzIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGAgYWJvdXQgd2h5IG91ciBmYWxsYmFjayBgU3Bpbm5lcmAgbWF5IG5vdCByZW5kZXIgdW5sZXNzXG4gICAgLy8gb3VyIGFwcCBoYXMgYmVlbiBoeWRyYXRlZC5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXtpc0h5ZHJhdGVkICYmIDxTcGlubmVyIC8+fT5cbiAgICAgICAgPFBhZ2VDb250ZW50XG4gICAgICAgICAgaXNBbmltYXRpb25Db21wbGV0ZT17aXNBbmltYXRpb25Db21wbGV0ZX1cbiAgICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXM9e3NldEh5ZHJhdGlvblN0YXR1c31cbiAgICAgICAgLz5cbiAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBQYWdlQ29udGVudDogUmVhY3QuRkM8UGFnZUNvbnRlbnRQcm9wcz4gPSAoeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBzZXRIeWRyYXRpb25TdGF0dXMgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXNvdXJjZS5kYXRhLnJlYWQoKTtcblxuICAgIC8vIFNlZSAqMSBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzZXRIeWRyYXRpb24pIHtcbiAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgfVxuICAgIH0sIFtzZXRIeWRyYXRpb25TdGF0dXNdKTtcblxuICAgIC8vIFNlZSAqMiBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgaWYgKGlzQW5pbWF0aW9uQ29tcGxldGUpIHtcbiAgICAgIHJldHVybiA8Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VXcmFwcGVyO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi91c2VyU2V0dGluZ3NQYWdlLm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vdXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi91c2VyU2V0dGluZ3NQYWdlLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBhZ2VXcmFwcGVyIGZyb20gJ3BhZ2VzL3BhZ2VXcmFwcGVyL3BhZ2VXcmFwcGVyJztcbmltcG9ydCBVc2VyU2V0dGluZ3NQYWdlRm9ybSBmcm9tICcuL3VzZXJTZXR0aW5nc1BhZ2VGb3JtL3VzZXJTZXR0aW5nc1BhZ2VGb3JtJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3VzZXJTZXR0aW5nc1BhZ2UubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBVc2VyU2V0dGluZ3NQYWdlOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgPFVzZXJTZXR0aW5nc1BhZ2VGb3JtIC8+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VXcmFwcGVyKHsgQ29tcG9uZW50OiBVc2VyU2V0dGluZ3NQYWdlIH0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9kZWxldGVBY2NvdW50TW9kYWwubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9kZWxldGVBY2NvdW50TW9kYWwubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnYnV0dG9ucy9idXR0b24vYnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJ2Zvcm1zL2Zvcm0vZm9ybSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kYWxzL21vZGFsL21vZGFsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBERUxFVEVfQ1VSUkVOVF9VU0VSX01VVEFUSU9OIH0gZnJvbSAnc2NoZW1hL3VzZXInO1xuaW1wb3J0IHsgdXNlTW9kYWxDb250ZXh0IH0gZnJvbSAnY29udGV4dC9tb2RhbENvbnRleHQvbW9kYWxDb250ZXh0JztcbmltcG9ydCBEZWxldGVBY2NvdW50TW9kYWxGb3JtQ29udGVudCBmcm9tICcuL2RlbGV0ZUFjY291bnRNb2RhbEZvcm1Db250ZW50JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2RlbGV0ZUFjY291bnRNb2RhbC5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IERlbGV0ZUFjY291bnRNb2RhbDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkZWxldGVDdXJyZW50VXNlcl0gPSB1c2VNdXRhdGlvbihERUxFVEVfQ1VSUkVOVF9VU0VSX01VVEFUSU9OKTtcbiAgY29uc3QgeyBzZXRNb2RhbElkIH0gPSB1c2VNb2RhbENvbnRleHQoKTtcblxuICBjb25zdCBbY2FuRGVsZXRlLCBzZXRDYW5EZWxldGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaGFzRGVsZXRpbmdCZWd1biwgc2V0SGFzRGVsZXRpbmdCZWd1bl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtoYXNEZWxldGluZ0ZpbmlzaGVkLCBzZXRIYXNEZWxldGluZ0ZpbmlzaGVkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc2V0SGFzRGVsZXRpbmdCZWd1bih0cnVlKTtcblxuICAgIGF3YWl0IGRlbGV0ZUN1cnJlbnRVc2VyKCk7XG5cbiAgICBzZXRIYXNEZWxldGluZ0ZpbmlzaGVkKHRydWUpO1xuICAgIHNldE1vZGFsSWQobnVsbCk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpZD1cInVzZXItc2V0dGluZ3MtZGVsZXRlLWFjY291bnQtbW9kYWxcIiB0aXRsZT1cIkRlbGV0ZSBBY2NvdW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwb2dyYXBoeUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJyZWRcIiB0ZXh0PVwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyIGFjY291bnQ/XCIgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInJlZFwiIHRleHQ9eydQbGVhc2UgdHlwZSBcImRlbGV0ZVwiIHRvIGNvbmZpcm06J30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxEZWxldGVBY2NvdW50TW9kYWxGb3JtQ29udGVudCBzZXRDYW5EZWxldGU9e3NldENhbkRlbGV0ZX0gLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkRpdn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGV9XG4gICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZSBNeSBBY2NvdW50XCJcbiAgICAgICAgICAgIGlzV2FpdGluZz17aGFzRGVsZXRpbmdCZWd1biAmJiAhaGFzRGVsZXRpbmdGaW5pc2hlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVBY2NvdW50TW9kYWw7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnZm9ybXMvZm9ybUl0ZW0vZm9ybUl0ZW0nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdpbnB1dHMvdGV4dElucHV0L3RleHRJbnB1dCc7XG5pbXBvcnQgeyBGb3JtUHJvcCB9IGZyb20gJ3R5cGVzL2Zvcm1UeXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm0/OiBGb3JtUHJvcDtcbiAgc2V0Q2FuRGVsZXRlOiAoY2FuRGVsZXRlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBEZWxldGVBY2NvdW50TW9kYWxGb3JtQ29udGVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZm9ybSwgc2V0Q2FuRGVsZXRlIH0pID0+IHtcbiAgY29uc3QgZmllbGROYW1lID0gJ2RlbGV0ZS1hY2NvdW50LWlucHV0LWNvbmZpcm0nO1xuICBjb25zdCBmaWVsZFZhbHVlOiBzdHJpbmcgPSBmb3JtLmdldEZpZWxkVmFsdWUoZmllbGROYW1lKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIHNldENhbkRlbGV0ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2FuRGVsZXRlKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmaWVsZFZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUl0ZW0gZmllbGROYW1lPXtmaWVsZE5hbWV9IGZvcm09e2Zvcm19PlxuICAgICAgPFRleHRJbnB1dCBjb2xvcj1cInJlZFwiIC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUFjY291bnRNb2RhbEZvcm1Db250ZW50O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnZm9ybXMvZm9ybS9mb3JtJztcbmltcG9ydCBVc2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQgZnJvbSAnLi91c2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQnO1xuXG5jb25zdCBVc2VyU2V0dGluZ3NQYWdlRm9ybTogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxGb3JtIGxheW91dD1cImhvcml6b250YWxcIj5cbiAgICA8VXNlclNldHRpbmdzUGFnZUZvcm1Db250ZW50IC8+XG4gIDwvRm9ybT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXR0aW5nc1BhZ2VGb3JtO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdidXR0b25zL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJ2Zvcm1zL2Zvcm1JdGVtL2Zvcm1JdGVtJztcbmltcG9ydCB7IEZvcm1Qcm9wIH0gZnJvbSAndHlwZXMvZm9ybVR5cGVzJztcbmltcG9ydCB7IHVzZU1vZGFsQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvbW9kYWxDb250ZXh0L21vZGFsQ29udGV4dCc7XG5pbXBvcnQgRGVsZXRlQWNjb3VudE1vZGFsIGZyb20gJy4vZGVsZXRlQWNjb3VudE1vZGFsL2RlbGV0ZUFjY291bnRNb2RhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcm0/OiBGb3JtUHJvcDtcbn1cblxuY29uc3QgVXNlclNldHRpbmdzUGFnZUZvcm1Db250ZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtIH0pID0+IHtcbiAgY29uc3QgeyBzZXRNb2RhbElkIH0gPSB1c2VNb2RhbENvbnRleHQoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpOiB2b2lkID0+IHNldE1vZGFsSWQoJ3VzZXItc2V0dGluZ3MtZGVsZXRlLWFjY291bnQtbW9kYWwnKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgZmllbGROYW1lPVwiYWRkLWNhcmQtdXJsLWlucHV0XCJcbiAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgcmVxdWlyZWRNZXNzYWdlPVwiQSB1cmwgaXMgcmVxdWlyZWRcIlxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCIgbGFiZWw9XCJEZWxldGUgQWNjb3VudFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDxEZWxldGVBY2NvdW50TW9kYWwgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXR0aW5nc1BhZ2VGb3JtQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=