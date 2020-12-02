(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".button___f3GD5 {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  outline: none;\n  position: relative;\n}\n.lottieDiv___3bKrZ {\n  position: absolute;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,wBAAwB;EACxB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB","file":"favoriteButton.module.less","sourcesContent":[".button {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  outline: none;\n  position: relative;\n}\n.lottieDiv {\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"button": "button___f3GD5",
	"lottieDiv": "lottieDiv___3bKrZ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".div___3lCsY {\n  position: absolute;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB","file":"favoriteButtonAnimation.module.less","sourcesContent":[".div {\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"div": "div___3lCsY"
};

/***/ }),

/***/ "./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less":
/*!************************************************************************************!*\
  !*** ./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./favoriteButton.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less");

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

/***/ "./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.tsx":
/*!****************************************************************************!*\
  !*** ./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icon/icon */ "./src/spa/components/neutrons/icon/icon.tsx");
/* harmony import */ var animations_favoriteButtonAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animations/favoriteButtonAnimation */ "./src/spa/components/neutrons/animations/favoriteButtonAnimation.tsx");
/* harmony import */ var lottiePlayer_lottiePlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottiePlayer/lottiePlayer */ "./src/spa/components/neutrons/lottiePlayer/lottiePlayer.tsx");
/* harmony import */ var lotties_fireworks_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lotties/fireworks.json */ "./src/spa/components/neutrons/lotties/fireworks.json");
var lotties_fireworks_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! lotties/fireworks.json */ "./src/spa/components/neutrons/lotties/fireworks.json", 1);
/* harmony import */ var _favoriteButton_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favoriteButton.module.less */ "./src/spa/components/atoms/buttons/favoriteButton/favoriteButton.module.less");
/* harmony import */ var _favoriteButton_module_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_favoriteButton_module_less__WEBPACK_IMPORTED_MODULE_5__);






var FavoriteButton = function (_a) {
    var isFavorite = _a.isFavorite, _b = _a.onChange, onChange = _b === void 0 ? null : _b, _c = _a.onClick, onClick = _c === void 0 ? null : _c, size = _a.size, value = _a.value;
    // `hasBeenClicked` indicates if the LikeButton has been clicked. We need to know this so that
    // when we first mount the Like button, its initial opacity is set to 1, but all future
    // animations have an initial opacity set to 0.
    var _d = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), hasBeenClicked = _d[0], setHasBeenClicked = _d[1];
    var handleClick = function () {
        setHasBeenClicked(true);
        if (onChange) {
            onChange(!value);
        }
        if (onClick) {
            onClick();
        }
    };
    var isFavoriteFinal = isFavorite || value;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "like-button" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: _favoriteButton_module_less__WEBPACK_IMPORTED_MODULE_5__["button"], onClick: handleClick, style: { height: size + "px", width: size + "px" }, type: "button" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _favoriteButton_module_less__WEBPACK_IMPORTED_MODULE_5__["lottieDiv"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](lottiePlayer_lottiePlayer__WEBPACK_IMPORTED_MODULE_3__["default"], { animationData: lotties_fireworks_json__WEBPACK_IMPORTED_MODULE_4__, isStopped: !isFavoriteFinal, size: size * 2 })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](animations_favoriteButtonAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], { hasBeenClicked: hasBeenClicked, isFavorite: isFavoriteFinal },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "transparentWhite", fill: "red", iconName: "heart", size: size }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "transparentWhite", fill: "transparentBlack", iconName: "heart", size: size })))));
};
/* harmony default export */ __webpack_exports__["default"] = (FavoriteButton);


/***/ }),

/***/ "./src/spa/components/atoms/inputs/checkbox/checkbox.less":
/*!****************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/checkbox/checkbox.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"black":"#565E5F","blue":"#14A8F3","green":"#7DCC93","darkGrey":"#A4AAAF","orange":"#F17D00","purple":"#31355A","red":"#E41245","transparentBlack":"#565E5fA6","transparentWhite":"#FFFFFFBF","white":"#FFF","yellow":"#FCC900"};

/***/ }),

/***/ "./src/spa/components/atoms/inputs/checkbox/checkbox.tsx":
/*!***************************************************************!*\
  !*** ./src/spa/components/atoms/inputs/checkbox/checkbox.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _checkbox_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.less */ "./src/spa/components/atoms/inputs/checkbox/checkbox.less");
/* harmony import */ var _checkbox_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkbox_less__WEBPACK_IMPORTED_MODULE_2__);



var Checkbox = function (_a) {
    var checked = _a.checked, _b = _a.label, label = _b === void 0 ? null : _b, onChange = _a.onChange;
    if (label) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { checked: checked, onChange: onChange }, label));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { checked: checked, onChange: onChange }));
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);


/***/ }),

/***/ "./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less":
/*!************************************************************************************!*\
  !*** ./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./favoriteButtonAnimation.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less");

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

/***/ "./src/spa/components/neutrons/animations/favoriteButtonAnimation.tsx":
/*!****************************************************************************!*\
  !*** ./src/spa/components/neutrons/animations/favoriteButtonAnimation.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _favoriteButtonAnimation_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favoriteButtonAnimation.module.less */ "./src/spa/components/neutrons/animations/favoriteButtonAnimation.module.less");
/* harmony import */ var _favoriteButtonAnimation_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_favoriteButtonAnimation_module_less__WEBPACK_IMPORTED_MODULE_2__);



var variants = {
    firstAnimation: {
        initial: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: { ease: 'easeOut', duration: 0.3 },
        },
    },
    subsequentAnimations: {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: { ease: 'easeOut', duration: 0.3 },
        },
        exit: {
            opacity: 0,
            transition: { ease: 'easeOut', duration: 0.3 },
        },
    },
};
var FavoriteButtonAnimation = function (_a) {
    var children = _a.children, hasBeenClicked = _a.hasBeenClicked, isFavorite = _a.isFavorite;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, isFavorite ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, { animate: "enter", className: _favoriteButtonAnimation_module_less__WEBPACK_IMPORTED_MODULE_2__["div"], exit: "exit", initial: "initial", key: "favorited", variants: !hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations }, children[0])) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, { animate: "enter", className: _favoriteButtonAnimation_module_less__WEBPACK_IMPORTED_MODULE_2__["div"], exit: "exit", initial: "initial", key: "notFavorited", variants: !hasBeenClicked ? variants.firstAnimation : variants.subsequentAnimations }, children[1]))));
};
/* harmony default export */ __webpack_exports__["default"] = (FavoriteButtonAnimation);


/***/ }),

/***/ "./src/spa/components/neutrons/lotties/fireworks.json":
/*!************************************************************!*\
  !*** ./src/spa/components/neutrons/lotties/fireworks.json ***!
  \************************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"fr\":24,\"ip\":0,\"op\":17,\"w\":500,\"h\":500,\"nm\":\"363-animated-background-14\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"NULL\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[450,450,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 17\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":225,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 16\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":135,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 15\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":45,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shape Layer 14\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-45,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shape Layer 21\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":270,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Shape Layer 20\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Shape Layer 19\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":90,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Shape Layer 18\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[73,73,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,-0.5],[51.25,-51.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-3,\"s\":[0]},{\"t\":16,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":-5,\"s\":[0]},{\"t\":14,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.37254901960784315,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":-8,\"s\":[17]},{\"t\":14,\"s\":[0]}],\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.33725490196078434,0.3686274509803922,0.3764705882352941,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":16,\"st\":-8,\"bm\":0}],\"markers\":[]}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9ucy9mYXZvcml0ZUJ1dHRvbi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvbmV1dHJvbnMvYW5pbWF0aW9ucy9mYXZvcml0ZUJ1dHRvbkFuaW1hdGlvbi5tb2R1bGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9ucy9mYXZvcml0ZUJ1dHRvbi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzcz85NjYwIiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9hdG9tcy9idXR0b25zL2Zhdm9yaXRlQnV0dG9uL2Zhdm9yaXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL2NoZWNrYm94L2NoZWNrYm94Lmxlc3M/ZDA4NCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvaW5wdXRzL2NoZWNrYm94L2NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvbmV1dHJvbnMvYW5pbWF0aW9ucy9mYXZvcml0ZUJ1dHRvbkFuaW1hdGlvbi5tb2R1bGUubGVzcz9lNDE5Iiwid2VicGFjazovLy8uL3NyYy9zcGEvY29tcG9uZW50cy9uZXV0cm9ucy9hbmltYXRpb25zL2Zhdm9yaXRlQnV0dG9uQW5pbWF0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQix3QkFBd0IscUJBQXFCLGlCQUFpQixvQkFBb0Isa0JBQWtCLDRCQUE0QixrQkFBa0IsdUJBQXVCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLFVBQVUsaUtBQWlLLFlBQVksYUFB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QUVGLElBQU0sdUJBQXVCLEdBQW9CLFVBQUMsRUFJakQ7UUFIQyxzQkFBUSxFQUNSLGtDQUFjLEVBQ2QsMEJBQVU7SUFDTixRQUNKLG9EQUFDLDZEQUFlLFFBRVosVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNYLG9EQUFDLG9EQUFNLENBQUMsR0FBRyxJQUNULE9BQU8sRUFBQyxPQUFPLEVBQ2YsU0FBUyxFQUFFLHdFQUFVLEVBQ3JCLElBQUksRUFBQyxNQUFNLEVBQ1gsT0FBTyxFQUFDLFNBQVMsRUFDakIsR0FBRyxFQUFDLFdBQVcsRUFDZixRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsSUFFbEYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNELENBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FDRixvREFBQyxvREFBTSxDQUFDLEdBQUcsSUFDVCxPQUFPLEVBQUMsT0FBTyxFQUNmLFNBQVMsRUFBRSx3RUFBVSxFQUNyQixJQUFJLEVBQUMsTUFBTSxFQUNYLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLEdBQUcsRUFBQyxjQUFjLEVBQ2xCLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixJQUVsRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ0QsQ0FDZCxDQUVhLENBQ25CO0FBNUJLLENBNEJMLENBQUM7QUFFYSxzRkFBdUIsRUFBQyIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uX19fZjNHRDUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG90dGllRGl2X19fM2JLcloge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9ucy9mYXZvcml0ZUJ1dHRvbi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiZmF2b3JpdGVCdXR0b24ubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sb3R0aWVEaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX19fZjNHRDVcIixcblx0XCJsb3R0aWVEaXZcIjogXCJsb3R0aWVEaXZfX18zYktyWlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZGl2X19fM2xDc1kge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2plbWVyeS9kZXYvbXlib3JkLWNsaWVudC9zcmMvc3BhL2NvbXBvbmVudHMvbmV1dHJvbnMvYW5pbWF0aW9ucy9mYXZvcml0ZUJ1dHRvbkFuaW1hdGlvbi5tb2R1bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiZmF2b3JpdGVCdXR0b25BbmltYXRpb24ubW9kdWxlLmxlc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJkaXZcIjogXCJkaXZfX18zbENzWVwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZmF2b3JpdGVCdXR0b24ubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJ2ljb24vaWNvbic7XG5pbXBvcnQgRmF2b3JpdGVCdXR0b25BbmltYXRpb24gZnJvbSAnYW5pbWF0aW9ucy9mYXZvcml0ZUJ1dHRvbkFuaW1hdGlvbic7XG5pbXBvcnQgTG90dGllUGxheWVyIGZyb20gJ2xvdHRpZVBsYXllci9sb3R0aWVQbGF5ZXInO1xuaW1wb3J0IGFuaW1hdGlvbkRhdGEgZnJvbSAnbG90dGllcy9maXJld29ya3MuanNvbic7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9mYXZvcml0ZUJ1dHRvbi5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzRmF2b3JpdGU/OiBib29sZWFuO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIHNpemU6IG51bWJlcjtcbiAgdmFsdWU/OiBib29sZWFuO1xufVxuXG5jb25zdCBGYXZvcml0ZUJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgaXNGYXZvcml0ZSxcbiAgb25DaGFuZ2UgPSBudWxsLFxuICBvbkNsaWNrID0gbnVsbCxcbiAgc2l6ZSxcbiAgdmFsdWUsXG59KSA9PiB7XG4gIC8vIGBoYXNCZWVuQ2xpY2tlZGAgaW5kaWNhdGVzIGlmIHRoZSBMaWtlQnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuIFdlIG5lZWQgdG8ga25vdyB0aGlzIHNvIHRoYXRcbiAgLy8gd2hlbiB3ZSBmaXJzdCBtb3VudCB0aGUgTGlrZSBidXR0b24sIGl0cyBpbml0aWFsIG9wYWNpdHkgaXMgc2V0IHRvIDEsIGJ1dCBhbGwgZnV0dXJlXG4gIC8vIGFuaW1hdGlvbnMgaGF2ZSBhbiBpbml0aWFsIG9wYWNpdHkgc2V0IHRvIDAuXG4gIGNvbnN0IFtoYXNCZWVuQ2xpY2tlZCwgc2V0SGFzQmVlbkNsaWNrZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldEhhc0JlZW5DbGlja2VkKHRydWUpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSghdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzRmF2b3JpdGVGaW5hbCA9IGlzRmF2b3JpdGUgfHwgdmFsdWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2UtYnV0dG9uXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7c2l6ZX1weGAsIHdpZHRoOiBgJHtzaXplfXB4YCB9fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb3R0aWVEaXZ9PlxuICAgICAgICAgIDxMb3R0aWVQbGF5ZXJcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbkRhdGF9XG4gICAgICAgICAgICBpc1N0b3BwZWQ9eyFpc0Zhdm9yaXRlRmluYWx9XG4gICAgICAgICAgICBzaXplPXtzaXplICogMn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZhdm9yaXRlQnV0dG9uQW5pbWF0aW9uXG4gICAgICAgICAgaGFzQmVlbkNsaWNrZWQ9e2hhc0JlZW5DbGlja2VkfVxuICAgICAgICAgIGlzRmF2b3JpdGU9e2lzRmF2b3JpdGVGaW5hbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50V2hpdGVcIlxuICAgICAgICAgICAgZmlsbD1cInJlZFwiXG4gICAgICAgICAgICBpY29uTmFtZT1cImhlYXJ0XCJcbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFdoaXRlXCJcbiAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudEJsYWNrXCJcbiAgICAgICAgICAgIGljb25OYW1lPVwiaGVhcnRcIlxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zhdm9yaXRlQnV0dG9uQW5pbWF0aW9uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZUJ1dHRvbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJibGFja1wiOlwiIzU2NUU1RlwiLFwiYmx1ZVwiOlwiIzE0QThGM1wiLFwiZ3JlZW5cIjpcIiM3RENDOTNcIixcImRhcmtHcmV5XCI6XCIjQTRBQUFGXCIsXCJvcmFuZ2VcIjpcIiNGMTdEMDBcIixcInB1cnBsZVwiOlwiIzMxMzU1QVwiLFwicmVkXCI6XCIjRTQxMjQ1XCIsXCJ0cmFuc3BhcmVudEJsYWNrXCI6XCIjNTY1RTVmQTZcIixcInRyYW5zcGFyZW50V2hpdGVcIjpcIiNGRkZGRkZCRlwiLFwid2hpdGVcIjpcIiNGRkZcIixcInllbGxvd1wiOlwiI0ZDQzkwMFwifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCBhcyBBbnRDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0ICcuL2NoZWNrYm94Lmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2hlY2tib3g6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNoZWNrZWQsXG4gIGxhYmVsID0gbnVsbCxcbiAgb25DaGFuZ2UsXG59KSA9PiB7XG4gIGlmIChsYWJlbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QW50Q2hlY2tib3hcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0FudENoZWNrYm94PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbnRDaGVja2JveFxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL2Zhdm9yaXRlQnV0dG9uQW5pbWF0aW9uLm1vZHVsZS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZmF2b3JpdGVCdXR0b25BbmltYXRpb24ubW9kdWxlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4vZmF2b3JpdGVCdXR0b25BbmltYXRpb24ubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZmF2b3JpdGVCdXR0b25BbmltYXRpb24ubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlQXJyYXk7XG4gIGhhc0JlZW5DbGlja2VkOiBib29sZWFuO1xuICBpc0Zhdm9yaXRlOiBib29sZWFuO1xufVxuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgZmlyc3RBbmltYXRpb246IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogJ2Vhc2VPdXQnLCBkdXJhdGlvbjogMC4zIH0sXG4gICAgfSxcbiAgfSxcbiAgc3Vic2VxdWVudEFuaW1hdGlvbnM6IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgZW50ZXI6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7IGVhc2U6ICdlYXNlT3V0JywgZHVyYXRpb246IDAuMyB9LFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogJ2Vhc2VPdXQnLCBkdXJhdGlvbjogMC4zIH0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IEZhdm9yaXRlQnV0dG9uQW5pbWF0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgaGFzQmVlbkNsaWNrZWQsXG4gIGlzRmF2b3JpdGUsXG59KSA9PiAoXG4gIDxBbmltYXRlUHJlc2VuY2U+XG4gICAge1xuICAgICAgaXNGYXZvcml0ZSA/IChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpdn1cbiAgICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgIGtleT1cImZhdm9yaXRlZFwiXG4gICAgICAgICAgdmFyaWFudHM9eyFoYXNCZWVuQ2xpY2tlZCA/IHZhcmlhbnRzLmZpcnN0QW5pbWF0aW9uIDogdmFyaWFudHMuc3Vic2VxdWVudEFuaW1hdGlvbnN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW5bMF19XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9XG4gICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICBrZXk9XCJub3RGYXZvcml0ZWRcIlxuICAgICAgICAgIHZhcmlhbnRzPXshaGFzQmVlbkNsaWNrZWQgPyB2YXJpYW50cy5maXJzdEFuaW1hdGlvbiA6IHZhcmlhbnRzLnN1YnNlcXVlbnRBbmltYXRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVuWzFdfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApXG4gICAgfVxuICA8L0FuaW1hdGVQcmVzZW5jZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlQnV0dG9uQW5pbWF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==