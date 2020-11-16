(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--9-3!./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n.channelDiv___2RPWu {\n  align-items: center;\n  display: flex;\n  margin-bottom: 0.75rem;\n}\n.channelIcon___2IE_r {\n  border-radius: 50%;\n  width: 1.25rem;\n}\n.channelTitle___3isWk {\n  margin-left: 0.25rem;\n}\n.container___28-mk {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.statsContainer___34eJf {\n  display: flex;\n  justify-content: space-between;\n}\n.statsContainer___34eJf :first-child > p {\n  margin-top: 0.125rem;\n}\n.statsDiv___2SDnI {\n  align-items: center;\n  display: flex;\n}\n.statsDiv___2SDnI > svg {\n  margin-right: 0.5rem;\n}\n", "", {"version":3,"sources":["/Users/jemery/dev/mybord-client/src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less"],"names":[],"mappings":"AAAA,uBAAuB;AAWvB,sBAAsB;AACtB;EACE,oBAAoB;EACpB,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;EACpB,cAAc;CACf;AACD;EACE,qBAAqB;CACtB","file":"youtubeCardDescription.module.less","sourcesContent":["/* stylelint-disable */\n:export {\n  caretSize: 0.625rem;\n  footerListMargin: 3rem;\n  footerLogoSize: 5rem;\n  headerHeight: 3rem;\n  headerMarginTop: 2.5rem;\n  navWidth: 5rem;\n  stackCardSize: 7rem;\n  toastWidth: 24.5rem;\n}\n/* stylelint-enable */\n.channelDiv {\n  align-items: center;\n  display: flex;\n  margin-bottom: 0.75rem;\n}\n.channelIcon {\n  border-radius: 50%;\n  width: 1.25rem;\n}\n.channelTitle {\n  margin-left: 0.25rem;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.statsContainer {\n  display: flex;\n  justify-content: space-between;\n}\n.statsContainer :first-child > p {\n  margin-top: 0.125rem;\n}\n.statsDiv {\n  align-items: center;\n  display: flex;\n}\n.statsDiv > svg {\n  margin-right: 0.5rem;\n}\n"],"sourceRoot":""}]);

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
	"channelDiv": "channelDiv___2RPWu",
	"channelIcon": "channelIcon___2IE_r",
	"channelTitle": "channelTitle___3isWk",
	"container": "container___28-mk",
	"statsContainer": "statsContainer___34eJf",
	"statsDiv": "statsDiv___2SDnI"
};

/***/ }),

/***/ "./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less":
/*!****************************************************************************************************!*\
  !*** ./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--9-1!../../../../../../node_modules/postcss-loader/src!../../../../../../node_modules/less-loader/dist/cjs.js??ref--9-3!./youtubeCardDescription.module.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less");

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

/***/ "./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.tsx":
/*!********************************************************************************************!*\
  !*** ./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icons/icon/icon */ "./src/spa/shared/icons/icon/icon.tsx");
/* harmony import */ var typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typography/typography */ "./src/spa/shared/typography/typography.tsx");
/* harmony import */ var _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtubeCardDescription.module.less */ "./src/spa/shared/cards/youtubeCard/youtubeCardDescription/youtubeCardDescription.module.less");
/* harmony import */ var _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__);




var YoutubeCardDescription = function (_a) {
    var userCard = _a.userCard;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["container"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "two", text: userCard.title, weight: "bold" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["channelDiv"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: "channel icon", className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["channelIcon"], src: userCard.cardData.youtubeCardData.channelThumbnail }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["channelTitle"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { maxTextLength: 60, size: "one", text: userCard.cardData.youtubeCardData.channelTitle }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["statsContainer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["statsDiv"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { iconName: "thumbsUp", size: 16 }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "one", text: userCard.cardData.youtubeCardData.likes })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["statsDiv"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { iconName: "eye", size: 16 }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "one", text: userCard.cardData.youtubeCardData.views })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _youtubeCardDescription_module_less__WEBPACK_IMPORTED_MODULE_3__["statsDiv"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](icons_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { iconName: "calendar", size: 16 }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](typography_typography__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "one", text: userCard.cardData.youtubeCardData.publishedAt }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (YoutubeCardDescription);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC9jYXJkcy95b3V0dWJlQ2FyZC95b3V0dWJlQ2FyZERlc2NyaXB0aW9uL3lvdXR1YmVDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMveW91dHViZUNhcmQveW91dHViZUNhcmREZXNjcmlwdGlvbi95b3V0dWJlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzPzU0NjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYS9zaGFyZWQvY2FyZHMveW91dHViZUNhcmQveW91dHViZUNhcmREZXNjcmlwdGlvbi95b3V0dWJlQ2FyZERlc2NyaXB0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBMkQ7QUFDOUY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHlFQUF5RSx3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLHdCQUF3Qix1QkFBdUIsbUJBQW1CLEdBQUcseUJBQXlCLHlCQUF5QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMsR0FBRywyQkFBMkIsa0JBQWtCLG1DQUFtQyxHQUFHLDRDQUE0Qyx5QkFBeUIsR0FBRyxxQkFBcUIsd0JBQXdCLGtCQUFrQixHQUFHLDJCQUEyQix5QkFBeUIsR0FBRyxVQUFVLHdMQUF3TCxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksd0dBQXdHLHdCQUF3QiwyQkFBMkIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLHdCQUF3Qix3QkFBd0IsR0FBRyx1Q0FBdUMsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxnQkFBZ0IsdUJBQXVCLG1CQUFtQixHQUFHLGlCQUFpQix5QkFBeUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsaUJBQWlCLG1DQUFtQyxHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsb0NBQW9DLHlCQUF5QixHQUFHLGFBQWEsd0JBQXdCLGtCQUFrQixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyxxQkFBcUI7O0FBRTFnRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ3RCQSxjQUFjLG1CQUFPLENBQUMseWFBQWlPOztBQUV2UCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsa0hBQStEOztBQUVwRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDSTtBQUNZO0FBRWdCO0FBTS9ELElBQU0sc0JBQXNCLEdBQW9CLFVBQUMsRUFBWTtRQUFWLHNCQUFRO0lBQU8sUUFDaEUsNkRBQUssU0FBUyxFQUFFLDZFQUFnQjtRQUM5QjtZQUNFLG9EQUFDLDZEQUFVLElBQ1QsYUFBYSxFQUFFLEVBQUUsRUFDakIsSUFBSSxFQUFDLEtBQUssRUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFDcEIsTUFBTSxFQUFDLE1BQU0sR0FDYixDQUNFO1FBQ047WUFDRSw2REFBSyxTQUFTLEVBQUUsOEVBQWlCO2dCQUMvQiw2REFDRSxHQUFHLEVBQUMsY0FBYyxFQUNsQixTQUFTLEVBQUUsK0VBQWtCLEVBQzdCLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsR0FDdkQ7Z0JBQ0YsNkRBQUssU0FBUyxFQUFFLGdGQUFtQjtvQkFDakMsb0RBQUMsNkRBQVUsSUFDVCxhQUFhLEVBQUUsRUFBRSxFQUNqQixJQUFJLEVBQUMsS0FBSyxFQUNWLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQ3BELENBQ0UsQ0FDRjtZQUNOLDZEQUFLLFNBQVMsRUFBRSxrRkFBcUI7Z0JBQ25DLDZEQUFLLFNBQVMsRUFBRSw0RUFBZTtvQkFDN0Isb0RBQUMsdURBQUksSUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxFQUFFLEdBQUk7b0JBQ3RDLG9EQUFDLDZEQUFVLElBQ1QsSUFBSSxFQUFDLEtBQUssRUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUM3QyxDQUNFO2dCQUNOLDZEQUFLLFNBQVMsRUFBRSw0RUFBZTtvQkFDN0Isb0RBQUMsdURBQUksSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBRSxFQUFFLEdBQUk7b0JBQ2pDLG9EQUFDLDZEQUFVLElBQ1QsSUFBSSxFQUFDLEtBQUssRUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUM3QyxDQUNFO2dCQUNOLDZEQUFLLFNBQVMsRUFBRSw0RUFBZTtvQkFDN0Isb0RBQUMsdURBQUksSUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxFQUFFLEdBQUk7b0JBQ3RDLG9EQUFDLDZEQUFVLElBQ1QsSUFBSSxFQUFDLEtBQUssRUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUNuRCxDQUNFLENBQ0YsQ0FDRixDQUNGLENBQ1A7QUFsRGlFLENBa0RqRSxDQUFDO0FBRWEscUZBQXNCLEVBQUMiLCJmaWxlIjoiMjcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5jaGFubmVsRGl2X19fMlJQV3Uge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4uY2hhbm5lbEljb25fX18ySUVfciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMS4yNXJlbTtcXG59XFxuLmNoYW5uZWxUaXRsZV9fXzNpc1drIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4uY29udGFpbmVyX19fMjgtbWsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zdGF0c0NvbnRhaW5lcl9fXzM0ZUpmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zdGF0c0NvbnRhaW5lcl9fXzM0ZUpmIDpmaXJzdC1jaGlsZCA+IHAge1xcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XFxufVxcbi5zdGF0c0Rpdl9fXzJTRG5JIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RhdHNEaXZfX18yU0RuSSA+IHN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qZW1lcnkvZGV2L215Ym9yZC1jbGllbnQvc3JjL3NwYS9zaGFyZWQvY2FyZHMveW91dHViZUNhcmQveW91dHViZUNhcmREZXNjcmlwdGlvbi95b3V0dWJlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQVd2QixzQkFBc0I7QUFDdEI7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QlwiLFwiZmlsZVwiOlwieW91dHViZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbjpleHBvcnQge1xcbiAgY2FyZXRTaXplOiAwLjYyNXJlbTtcXG4gIGZvb3Rlckxpc3RNYXJnaW46IDNyZW07XFxuICBmb290ZXJMb2dvU2l6ZTogNXJlbTtcXG4gIGhlYWRlckhlaWdodDogM3JlbTtcXG4gIGhlYWRlck1hcmdpblRvcDogMi41cmVtO1xcbiAgbmF2V2lkdGg6IDVyZW07XFxuICBzdGFja0NhcmRTaXplOiA3cmVtO1xcbiAgdG9hc3RXaWR0aDogMjQuNXJlbTtcXG59XFxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xcbi5jaGFubmVsRGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLmNoYW5uZWxJY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbn1cXG4uY2hhbm5lbFRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3RhdHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0YXRzQ29udGFpbmVyIDpmaXJzdC1jaGlsZCA+IHAge1xcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XFxufVxcbi5zdGF0c0RpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnN0YXRzRGl2ID4gc3ZnIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2FyZXRTaXplXCI6IFwiMC42MjVyZW1cIixcblx0XCJmb290ZXJMaXN0TWFyZ2luXCI6IFwiM3JlbVwiLFxuXHRcImZvb3RlckxvZ29TaXplXCI6IFwiNXJlbVwiLFxuXHRcImhlYWRlckhlaWdodFwiOiBcIjNyZW1cIixcblx0XCJoZWFkZXJNYXJnaW5Ub3BcIjogXCIyLjVyZW1cIixcblx0XCJuYXZXaWR0aFwiOiBcIjVyZW1cIixcblx0XCJzdGFja0NhcmRTaXplXCI6IFwiN3JlbVwiLFxuXHRcInRvYXN0V2lkdGhcIjogXCIyNC41cmVtXCIsXG5cdFwiY2hhbm5lbERpdlwiOiBcImNoYW5uZWxEaXZfX18yUlBXdVwiLFxuXHRcImNoYW5uZWxJY29uXCI6IFwiY2hhbm5lbEljb25fX18ySUVfclwiLFxuXHRcImNoYW5uZWxUaXRsZVwiOiBcImNoYW5uZWxUaXRsZV9fXzNpc1drXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyX19fMjgtbWtcIixcblx0XCJzdGF0c0NvbnRhaW5lclwiOiBcInN0YXRzQ29udGFpbmVyX19fMzRlSmZcIixcblx0XCJzdGF0c0RpdlwiOiBcInN0YXRzRGl2X19fMlNEbklcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL3lvdXR1YmVDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi95b3V0dWJlQ2FyZERlc2NyaXB0aW9uLm1vZHVsZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuL3lvdXR1YmVDYXJkRGVzY3JpcHRpb24ubW9kdWxlLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICdpY29ucy9pY29uL2ljb24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbmltcG9ydCB7IFVzZXJDYXJkIH0gZnJvbSAnc2NoZW1hL2NhcmQnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4veW91dHViZUNhcmREZXNjcmlwdGlvbi5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJDYXJkOiBVc2VyQ2FyZDtcbn1cblxuY29uc3QgWW91dHViZUNhcmREZXNjcmlwdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXNlckNhcmQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIG1heFRleHRMZW5ndGg9ezYwfVxuICAgICAgICBzaXplPVwidHdvXCJcbiAgICAgICAgdGV4dD17dXNlckNhcmQudGl0bGV9XG4gICAgICAgIHdlaWdodD1cImJvbGRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFubmVsRGl2fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD1cImNoYW5uZWwgaWNvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbm5lbEljb259XG4gICAgICAgICAgc3JjPXt1c2VyQ2FyZC5jYXJkRGF0YS55b3V0dWJlQ2FyZERhdGEuY2hhbm5lbFRodW1ibmFpbH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFubmVsVGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBtYXhUZXh0TGVuZ3RoPXs2MH1cbiAgICAgICAgICAgIHNpemU9XCJvbmVcIlxuICAgICAgICAgICAgdGV4dD17dXNlckNhcmQuY2FyZERhdGEueW91dHViZUNhcmREYXRhLmNoYW5uZWxUaXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNEaXZ9PlxuICAgICAgICAgIDxJY29uIGljb25OYW1lPVwidGh1bWJzVXBcIiBzaXplPXsxNn0gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgc2l6ZT1cIm9uZVwiXG4gICAgICAgICAgICB0ZXh0PXt1c2VyQ2FyZC5jYXJkRGF0YS55b3V0dWJlQ2FyZERhdGEubGlrZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNEaXZ9PlxuICAgICAgICAgIDxJY29uIGljb25OYW1lPVwiZXllXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHNpemU9XCJvbmVcIlxuICAgICAgICAgICAgdGV4dD17dXNlckNhcmQuY2FyZERhdGEueW91dHViZUNhcmREYXRhLnZpZXdzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzRGl2fT5cbiAgICAgICAgICA8SWNvbiBpY29uTmFtZT1cImNhbGVuZGFyXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHNpemU9XCJvbmVcIlxuICAgICAgICAgICAgdGV4dD17dXNlckNhcmQuY2FyZERhdGEueW91dHViZUNhcmREYXRhLnB1Ymxpc2hlZEF0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgWW91dHViZUNhcmREZXNjcmlwdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=