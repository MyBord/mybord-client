(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
/* harmony import */ var fallbacks_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fallbacks/spinner/spinner */ "./src/spa/components/atoms/fallbacks/spinner/spinner.tsx");
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
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/components/atoms/buttons/button/button.tsx");
/* harmony import */ var form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form/form */ "./src/spa/components/atoms/form/form.tsx");
/* harmony import */ var modals_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modals/modal/modal */ "./src/spa/shared/modals/modal/modal.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typography/typography */ "./src/spa/components/atoms/typography/typography.tsx");
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](form_form__WEBPACK_IMPORTED_MODULE_3__["default"], null,
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
/* harmony import */ var formItem_formItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formItem/formItem */ "./src/spa/components/atoms/formItem/formItem.tsx");
/* harmony import */ var inputs_textInput_textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputs/textInput/textInput */ "./src/spa/components/atoms/inputs/textInput/textInput.tsx");



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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_1__["default"], { fieldName: fieldName, form: form },
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
/* harmony import */ var form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form/form */ "./src/spa/components/atoms/form/form.tsx");
/* harmony import */ var _userSettingsPageFormContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSettingsPageFormContent */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/userSettingsPageFormContent.tsx");



var UserSettingsPageForm = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](form_form__WEBPACK_IMPORTED_MODULE_1__["default"], { layout: "horizontal" },
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
/* harmony import */ var buttons_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buttons/button/button */ "./src/spa/components/atoms/buttons/button/button.tsx");
/* harmony import */ var formItem_formItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formItem/formItem */ "./src/spa/components/atoms/formItem/formItem.tsx");
/* harmony import */ var context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/modalContext/modalContext */ "./src/context/modalContext/modalContext.tsx");
/* harmony import */ var _deleteAccountModal_deleteAccountModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteAccountModal/deleteAccountModal */ "./src/spa/app/pages/userSettingsPage/userSettingsPageForm/deleteAccountModal/deleteAccountModal.tsx");





var UserSettingsPageFormContent = function (_a) {
    var form = _a.form;
    var setModalId = Object(context_modalContext_modalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])().setModalId;
    var handleClick = function () { return setModalId('user-settings-delete-account-modal'); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formItem_formItem__WEBPACK_IMPORTED_MODULE_2__["default"], { fieldName: "add-card-url-input", form: form, required: true, requiredMessage: "A url is required" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](buttons_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", label: "Delete Account", onClick: handleClick })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_deleteAccountModal_deleteAccountModal__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (UserSettingsPageFormContent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy91c2VyU2V0dGluZ3NQYWdlL3VzZXJTZXR0aW5nc1BhZ2UubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJvbWlzZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvcGFnZVdyYXBwZXIvcGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3VzZXJTZXR0aW5nc1BhZ2UvdXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzcz80ODBiIiwid2VicGFjazovLy8uL3NyYy9zcGEvYXBwL3BhZ2VzL3VzZXJTZXR0aW5nc1BhZ2UvdXNlclNldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzP2Y4MDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2FwcC9wYWdlcy91c2VyU2V0dGluZ3NQYWdlL3VzZXJTZXR0aW5nc1BhZ2VGb3JtL2RlbGV0ZUFjY291bnRNb2RhbC9kZWxldGVBY2NvdW50TW9kYWxGb3JtQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS91c2VyU2V0dGluZ3NQYWdlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlRm9ybS91c2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsc0VBQXNFLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHVDQUF1QyxnQkFBZ0IsR0FBRyxVQUFVLDZKQUE2SixhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGlHQUFpRyx3QkFBd0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHVDQUF1QyxnQkFBZ0IsR0FBRyxxQkFBcUI7O0FBRTk1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNsQkEsMkJBQTJCLG1CQUFPLENBQUMsK0dBQThEO0FBQ2pHOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIscUJBQXFCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxVQUFVLGdNQUFnTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLDhFQUE4RSxxQkFBcUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUI7O0FBRXZvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDMEM7QUFPcEUsSUFBTSxHQUFHLEdBQUcsVUFBQyxTQUFvQixJQUFtQixXQUFJ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REFBQyw4RUFBa0IsT0FBRyxDQUNyQixDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSwwRkFBMkIsRUFBQyIsImZpbGUiOiIxMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLnNlY3Rpb25fX18zcWUtOSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogNXJlbSAwIDAgY2FsYygxcmVtICsgMXJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9hcHAvcGFnZXMvdXNlclNldHRpbmdzUGFnZS91c2VyU2V0dGluZ3NQYWdlLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQVd2QixzQkFBc0I7QUFDdEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsWUFBWTtDQUNiXCIsXCJmaWxlXCI6XCJ1c2VyU2V0dGluZ3NQYWdlLm1vZHVsZS5sZXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuOmV4cG9ydCB7XFxuICBjYXJldFNpemU6IDAuNjI1cmVtO1xcbiAgZm9vdGVyTGlzdE1hcmdpbjogM3JlbTtcXG4gIGZvb3RlckxvZ29TaXplOiA1cmVtO1xcbiAgaGVhZGVySGVpZ2h0OiAzcmVtO1xcbiAgaGVhZGVyTWFyZ2luVG9wOiAyLjVyZW07XFxuICBuYXZXaWR0aDogNXJlbTtcXG4gIHN0YWNrQ2FyZFNpemU6IDdyZW07XFxuICB0b2FzdFdpZHRoOiAyNC41cmVtO1xcbn1cXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXFxuLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDVyZW0gMCAwIGNhbGMoMXJlbSArIDFyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJldFNpemVcIjogXCIwLjYyNXJlbVwiLFxuXHRcImZvb3Rlckxpc3RNYXJnaW5cIjogXCIzcmVtXCIsXG5cdFwiZm9vdGVyTG9nb1NpemVcIjogXCI1cmVtXCIsXG5cdFwiaGVhZGVySGVpZ2h0XCI6IFwiM3JlbVwiLFxuXHRcImhlYWRlck1hcmdpblRvcFwiOiBcIjIuNXJlbVwiLFxuXHRcIm5hdldpZHRoXCI6IFwiNXJlbVwiLFxuXHRcInN0YWNrQ2FyZFNpemVcIjogXCI3cmVtXCIsXG5cdFwidG9hc3RXaWR0aFwiOiBcIjI0LjVyZW1cIixcblx0XCJzZWN0aW9uXCI6IFwic2VjdGlvbl9fXzNxZS05XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b25EaXZfX18yWUtsbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uY29udGFpbmVyX19fM3pDZHAge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnR5cG9ncmFwaHlDb250YWluZXJfX18zdk9fZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2FwcC9wYWdlcy91c2VyU2V0dGluZ3NQYWdlL3VzZXJTZXR0aW5nc1BhZ2VGb3JtL2RlbGV0ZUFjY291bnRNb2RhbC9kZWxldGVBY2NvdW50TW9kYWwubW9kdWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCXCIsXCJmaWxlXCI6XCJkZWxldGVBY2NvdW50TW9kYWwubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbkRpdiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi50eXBvZ3JhcGh5Q29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJidXR0b25EaXZcIjogXCJidXR0b25EaXZfX18yWUtsblwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl9fXzN6Q2RwXCIsXG5cdFwidHlwb2dyYXBoeUNvbnRhaW5lclwiOiBcInR5cG9ncmFwaHlDb250YWluZXJfX18zdk9fZ1wiXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcHJvbWlzZVdyYXBwZXIsIHsgUHJvbWlzZVdyYXBwZXIgfSBmcm9tICdhcGkvcHJvbWlzZVdyYXBwZXInO1xuaW1wb3J0IHsgR3FsU3RyaW5nIH0gZnJvbSAndHlwZXMvZ3FsVHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcbiAgZGF0YTogUHJvbWlzZVdyYXBwZXI8VD47XG59XG5cbmNvbnN0IGdldCA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFByb21pc2U8YW55PiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogZ3FsU3RyaW5nLmxvYy5zb3VyY2UuYm9keSB9KTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdQUk9EJyA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHtwcm9jZXNzLmVudi5VUkl9YDtcblxuICBheGlvcy5wb3N0KHVybCwgYm9keSwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpKTtcbn0pO1xuXG5jb25zdCBxdWVyeSA9IChncWxTdHJpbmc6IEdxbFN0cmluZyk6IFJlc291cmNlPGFueT4gPT4ge1xuICBjb25zdCBwcm9taXNlID0gZ2V0KGdxbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogcHJvbWlzZVdyYXBwZXIocHJvbWlzZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5LFxufTtcbiIsIi8vIFNvdXJjZTpcbi8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb25jdXJyZW50LW1vZGUtc3VzcGVuc2UuaHRtbCN3aGF0LWlzLXN1c3BlbnNlLWV4YWN0bHlcbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9mcm9zdHktaGVybWFubi1ienRycFxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VXcmFwcGVyPFQ+IHtcbiAgcmVhZCgpOiBUO1xufVxuXG5leHBvcnQgZGVmYXVsdCA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2VXcmFwcGVyPFQ+ID0+IHtcbiAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgbGV0IHJlc3VsdDogVDtcbiAgY29uc3Qgc3VzcGVuZGVyID0gcHJvbWlzZS50aGVuKFxuICAgIChyKSA9PiB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICByZXN1bHQgPSByO1xuICAgIH0sXG4gICAgKGUpID0+IHtcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICByZXN1bHQgPSBlO1xuICAgIH0sXG4gICk7XG4gIHJldHVybiB7XG4gICAgcmVhZCgpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aHJvdyBzdXNwZW5kZXI7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCIvLyBUaGlzIG9iamVjdGl2ZSBvZiB0aGlzIHdyYXBwZXIgaXMgdG8gY3JlYXRlIGEgZ2VuZXJhbCBhcGkgdGhhdCB0YWtlcyBhIHBhZ2Ugb2Ygb3VyIGFwcFxuLy8gYWxvbmcgd2l0aCB0aGUgR1FMIHF1ZXJ5IHRoYXQgZGVyaXZlcyBhbGwgbmVjZXNzYXJ5IGRhdGEgZm9yIHNhaWQgcGFnZSBhbmQgcnVucyB0aGF0IHF1ZXJ5LlxuLy8gVGhlIGRhdGEgaXMgdGhlbiBwcm92aWRlZCB0byB0aGUgcGFnZSB0byByZW5kZXIgaXRzIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuXG4vLyB3aGVuIGBzZXRIeWRyYXRpb249ZmFsc2VgLCB0aGF0IG1lYW5zIHRoYXQgb25jZSBvdXIgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYmFja2VuZFxuLy8gYW5kIC8gb3Igb3VyIHdyYXBwZWQgY29tcG9uZW50IChgQ29tcG9uZW50YCkgaGFzIG1vdW50ZWQsIHdlIERPIE5PVCB3YW50IHRvIHN0b3Agb3VyIHBhZ2Unc1xuLy8gc3Bpbm5lciAvIGxvYWRpbmcgYW5pbWF0aW9uLiBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgYWRkaXRpb25hbCB3b3JrIHRoYXQgaXMgKnN0aWxsKlxuLy8gaGFwcGVuaW5nIGluIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBhZnRlciBkYXRhIGhhcyBiZWVuIGRyaWxsZWQsIHN1Y2ggYXMgYVxuLy8gY29udGV4dCByZWR1Y2VyIGJlaW5nIG11dGF0ZWQuXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ2ZhbGxiYWNrcy9zcGlubmVyL3NwaW5uZXInO1xuaW1wb3J0IGFwaSBmcm9tICdhcGkvYXBpJztcbmltcG9ydCB7IEdxbFN0cmluZyB9IGZyb20gJ3R5cGVzL2dxbFR5cGVzJztcbmltcG9ydCB7IHVzZUh5ZHJhdGlvbkNvbnRleHQgfSBmcm9tICdjb250ZXh0L2h5ZHJhdGlvbkNvbnRleHQvaHlkcmF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBQYWdlQ29udGVudFByb3BzIHtcbiAgaXNBbmltYXRpb25Db21wbGV0ZTogYm9vbGVhbjtcbiAgc2V0SHlkcmF0aW9uU3RhdHVzOiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBDb21wb25lbnQ6IFJlYWN0LkZDPFdyYXBwZWRDb21wb25lbnRQcm9wcz47XG4gIGdxbFN0cmluZz86IEdxbFN0cmluZztcbiAgc2V0SHlkcmF0aW9uPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFdyYXBwZWRDb21wb25lbnRQcm9wcyB7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IHBhZ2VXcmFwcGVyID0gKHtcbiAgQ29tcG9uZW50LFxuICBncWxTdHJpbmcsXG4gIHNldEh5ZHJhdGlvbiA9IHRydWUsXG59OiBQcm9wcyk6IFJlYWN0LkZDID0+IHtcbiAgLy8gLS0tLS0gTk8gREFUQSBJUyBORUVERUQgLS0tLS0gLy9cbiAgaWYgKCFncWxTdHJpbmcpIHtcbiAgICBjb25zdCBOb0RhdGFQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNBbmltYXRpb25Db21wbGV0ZSwgc2V0SHlkcmF0aW9uU3RhdHVzIH0gPSB1c2VIeWRyYXRpb25Db250ZXh0KCk7XG5cbiAgICAgIC8vIFNlZSAqMSBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0SHlkcmF0aW9uKSB7XG4gICAgICAgICAgc2V0SHlkcmF0aW9uU3RhdHVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBbc2V0SHlkcmF0aW9uU3RhdHVzXSk7XG5cbiAgICAgIC8vIFNlZSAqMiBpbiBgaHlkcmF0aW9uQ29udGV4dC50c3hgXG4gICAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gTm9EYXRhUGFnZTtcbiAgfVxuXG4gIC8vIC0tLS0tIERBVEEgSVMgTkVFREVEIC0tLS0tIC8vXG4gIGNvbnN0IHJlc291cmNlID0gYXBpLnF1ZXJ5KGdxbFN0cmluZyk7XG5cbiAgY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0FuaW1hdGlvbkNvbXBsZXRlLCBpc0h5ZHJhdGVkLCBzZXRIeWRyYXRpb25TdGF0dXMgfSA9IHVzZUh5ZHJhdGlvbkNvbnRleHQoKTtcbiAgICAvLyBTZWUgKjEgbm90ZXMgaW4gYGh5ZHJhdGlvbkNvbnRleHQudHN4YCBhYm91dCB3aHkgb3VyIGZhbGxiYWNrIGBTcGlubmVyYCBtYXkgbm90IHJlbmRlciB1bmxlc3NcbiAgICAvLyBvdXIgYXBwIGhhcyBiZWVuIGh5ZHJhdGVkLlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e2lzSHlkcmF0ZWQgJiYgPFNwaW5uZXIgLz59PlxuICAgICAgICA8UGFnZUNvbnRlbnRcbiAgICAgICAgICBpc0FuaW1hdGlvbkNvbXBsZXRlPXtpc0FuaW1hdGlvbkNvbXBsZXRlfVxuICAgICAgICAgIHNldEh5ZHJhdGlvblN0YXR1cz17c2V0SHlkcmF0aW9uU3RhdHVzfVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFBhZ2VDb250ZW50OiBSZWFjdC5GQzxQYWdlQ29udGVudFByb3BzPiA9ICh7IGlzQW5pbWF0aW9uQ29tcGxldGUsIHNldEh5ZHJhdGlvblN0YXR1cyB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlc291cmNlLmRhdGEucmVhZCgpO1xuXG4gICAgLy8gU2VlICoxIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHNldEh5ZHJhdGlvbikge1xuICAgICAgICBzZXRIeWRyYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3NldEh5ZHJhdGlvblN0YXR1c10pO1xuXG4gICAgLy8gU2VlICoyIGluIGBoeWRyYXRpb25Db250ZXh0LnRzeGBcbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZSkge1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgZGF0YT17ZGF0YX0gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQYWdlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL3VzZXJTZXR0aW5nc1BhZ2UubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi91c2VyU2V0dGluZ3NQYWdlLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL3VzZXJTZXR0aW5nc1BhZ2UubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcGFnZVdyYXBwZXIgZnJvbSAncGFnZXMvcGFnZVdyYXBwZXIvcGFnZVdyYXBwZXInO1xuaW1wb3J0IFVzZXJTZXR0aW5nc1BhZ2VGb3JtIGZyb20gJy4vdXNlclNldHRpbmdzUGFnZUZvcm0vdXNlclNldHRpbmdzUGFnZUZvcm0nO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vdXNlclNldHRpbmdzUGFnZS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IFVzZXJTZXR0aW5nc1BhZ2U6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICA8VXNlclNldHRpbmdzUGFnZUZvcm0gLz5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVdyYXBwZXIoeyBDb21wb25lbnQ6IFVzZXJTZXR0aW5nc1BhZ2UgfSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2RlbGV0ZUFjY291bnRNb2RhbC5tb2R1bGUubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2RlbGV0ZUFjY291bnRNb2RhbC5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9kZWxldGVBY2NvdW50TW9kYWwubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdidXR0b25zL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAnZm9ybS9mb3JtJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2RhbHMvbW9kYWwvbW9kYWwnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbmltcG9ydCB7IERFTEVURV9DVVJSRU5UX1VTRVJfTVVUQVRJT04gfSBmcm9tICdzY2hlbWEvdXNlcic7XG5pbXBvcnQgeyB1c2VNb2RhbENvbnRleHQgfSBmcm9tICdjb250ZXh0L21vZGFsQ29udGV4dC9tb2RhbENvbnRleHQnO1xuaW1wb3J0IERlbGV0ZUFjY291bnRNb2RhbEZvcm1Db250ZW50IGZyb20gJy4vZGVsZXRlQWNjb3VudE1vZGFsRm9ybUNvbnRlbnQnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZGVsZXRlQWNjb3VudE1vZGFsLm1vZHVsZS5sZXNzJztcblxuY29uc3QgRGVsZXRlQWNjb3VudE1vZGFsOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2RlbGV0ZUN1cnJlbnRVc2VyXSA9IHVzZU11dGF0aW9uKERFTEVURV9DVVJSRU5UX1VTRVJfTVVUQVRJT04pO1xuICBjb25zdCB7IHNldE1vZGFsSWQgfSA9IHVzZU1vZGFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IFtjYW5EZWxldGUsIHNldENhbkRlbGV0ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtoYXNEZWxldGluZ0JlZ3VuLCBzZXRIYXNEZWxldGluZ0JlZ3VuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2hhc0RlbGV0aW5nRmluaXNoZWQsIHNldEhhc0RlbGV0aW5nRmluaXNoZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzZXRIYXNEZWxldGluZ0JlZ3VuKHRydWUpO1xuXG4gICAgYXdhaXQgZGVsZXRlQ3VycmVudFVzZXIoKTtcblxuICAgIHNldEhhc0RlbGV0aW5nRmluaXNoZWQodHJ1ZSk7XG4gICAgc2V0TW9kYWxJZChudWxsKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlkPVwidXNlci1zZXR0aW5ncy1kZWxldGUtYWNjb3VudC1tb2RhbFwiIHRpdGxlPVwiRGVsZXRlIEFjY291bnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBvZ3JhcGh5Q29udGFpbmVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInJlZFwiIHRleHQ9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgYWNjb3VudD9cIiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwicmVkXCIgdGV4dD17J1BsZWFzZSB0eXBlIFwiZGVsZXRlXCIgdG8gY29uZmlybTonfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPERlbGV0ZUFjY291bnRNb2RhbEZvcm1Db250ZW50IHNldENhbkRlbGV0ZT17c2V0Q2FuRGVsZXRlfSAvPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRGl2fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNhbkRlbGV0ZX1cbiAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlIE15IEFjY291bnRcIlxuICAgICAgICAgICAgaXNXYWl0aW5nPXtoYXNEZWxldGluZ0JlZ3VuICYmICFoYXNEZWxldGluZ0ZpbmlzaGVkfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUFjY291bnRNb2RhbDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICdmb3JtSXRlbS9mb3JtSXRlbSc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2lucHV0cy90ZXh0SW5wdXQvdGV4dElucHV0JztcbmltcG9ydCB7IEZvcm1Qcm9wIH0gZnJvbSAndHlwZXMvZm9ybVR5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybT86IEZvcm1Qcm9wO1xuICBzZXRDYW5EZWxldGU6IChjYW5EZWxldGU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IERlbGV0ZUFjY291bnRNb2RhbEZvcm1Db250ZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmb3JtLCBzZXRDYW5EZWxldGUgfSkgPT4ge1xuICBjb25zdCBmaWVsZE5hbWUgPSAnZGVsZXRlLWFjY291bnQtaW5wdXQtY29uZmlybSc7XG4gIGNvbnN0IGZpZWxkVmFsdWU6IHN0cmluZyA9IGZvcm0uZ2V0RmllbGRWYWx1ZShmaWVsZE5hbWUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpZWxkVmFsdWUgJiYgZmllbGRWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZGVsZXRlJykge1xuICAgICAgc2V0Q2FuRGVsZXRlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDYW5EZWxldGUoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2ZpZWxkVmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtSXRlbSBmaWVsZE5hbWU9e2ZpZWxkTmFtZX0gZm9ybT17Zm9ybX0+XG4gICAgICA8VGV4dElucHV0IGNvbG9yPVwicmVkXCIgLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQWNjb3VudE1vZGFsRm9ybUNvbnRlbnQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdmb3JtL2Zvcm0nO1xuaW1wb3J0IFVzZXJTZXR0aW5nc1BhZ2VGb3JtQ29udGVudCBmcm9tICcuL3VzZXJTZXR0aW5nc1BhZ2VGb3JtQ29udGVudCc7XG5cbmNvbnN0IFVzZXJTZXR0aW5nc1BhZ2VGb3JtOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPEZvcm0gbGF5b3V0PVwiaG9yaXpvbnRhbFwiPlxuICAgIDxVc2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQgLz5cbiAgPC9Gb3JtPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclNldHRpbmdzUGFnZUZvcm07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2J1dHRvbnMvYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnZm9ybUl0ZW0vZm9ybUl0ZW0nO1xuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICd0eXBlcy9mb3JtVHlwZXMnO1xuaW1wb3J0IHsgdXNlTW9kYWxDb250ZXh0IH0gZnJvbSAnY29udGV4dC9tb2RhbENvbnRleHQvbW9kYWxDb250ZXh0JztcbmltcG9ydCBEZWxldGVBY2NvdW50TW9kYWwgZnJvbSAnLi9kZWxldGVBY2NvdW50TW9kYWwvZGVsZXRlQWNjb3VudE1vZGFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9ybT86IEZvcm1Qcm9wO1xufVxuXG5jb25zdCBVc2VyU2V0dGluZ3NQYWdlRm9ybUNvbnRlbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGZvcm0gfSkgPT4ge1xuICBjb25zdCB7IHNldE1vZGFsSWQgfSA9IHVzZU1vZGFsQ29udGV4dCgpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk6IHZvaWQgPT4gc2V0TW9kYWxJZCgndXNlci1zZXR0aW5ncy1kZWxldGUtYWNjb3VudC1tb2RhbCcpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtSXRlbVxuICAgICAgICBmaWVsZE5hbWU9XCJhZGQtY2FyZC11cmwtaW5wdXRcIlxuICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgICByZXF1aXJlZE1lc3NhZ2U9XCJBIHVybCBpcyByZXF1aXJlZFwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJyZWRcIiBsYWJlbD1cIkRlbGV0ZSBBY2NvdW50XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPERlbGV0ZUFjY291bnRNb2RhbCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclNldHRpbmdzUGFnZUZvcm1Db250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==