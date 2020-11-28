(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./src/spa/components/atoms/typography/typographyLink/typographyLink.tsx":
/*!*******************************************************************************!*\
  !*** ./src/spa/components/atoms/typography/typographyLink/typographyLink.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _typography_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typography.module.less */ "./src/spa/components/atoms/typography/typography.module.less");
/* harmony import */ var _typography_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typography_module_less__WEBPACK_IMPORTED_MODULE_2__);



var TypographyLink = function (_a) {
    var children = _a.children, color = _a.color, commonStyles = _a.commonStyles, link = _a.link, onClick = _a.onClick;
    var linkStyles = [
        _typography_module_less__WEBPACK_IMPORTED_MODULE_2__["link"],
        color === 'white' ? _typography_module_less__WEBPACK_IMPORTED_MODULE_2__["whiteButtonLink"] : undefined,
        commonStyles,
    ].join(' ');
    var isAnchor = link.startsWith('https') || link.startsWith('mailto');
    var isMailTo = link.startsWith('mailto');
    if (isAnchor) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: linkStyles, href: link, onClick: onClick, rel: isMailTo ? undefined : 'noopener noreferrer', target: isMailTo ? undefined : 'blank' }, children));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: linkStyles, to: link, onClick: onClick }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (TypographyLink);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL2NvbXBvbmVudHMvYXRvbXMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5TGluay90eXBvZ3JhcGh5TGluay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNTO0FBRVk7QUFVcEQsSUFBTSxjQUFjLEdBQW9CLFVBQUMsRUFNeEM7UUFMQyxzQkFBUSxFQUNSLGdCQUFLLEVBQ0wsOEJBQVksRUFDWixjQUFJLEVBQ0osb0JBQU87SUFFUCxJQUFNLFVBQVUsR0FBRztRQUNqQiw0REFBVztRQUNYLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVFQUFzQixDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3RELFlBQVk7S0FDYixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTNDLElBQUksUUFBUSxFQUFFO1FBQ1osT0FBTyxDQUNMLDJEQUNFLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLE9BQU8sRUFDaEIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFDakQsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBRXJDLFFBQVEsQ0FDUCxDQUNMLENBQUM7S0FDSDtJQUVELE9BQU8sQ0FDTCxvREFBQyxxREFBSSxJQUNILFNBQVMsRUFBRSxVQUFVLEVBQ3JCLEVBQUUsRUFBRSxJQUFJLEVBQ1IsT0FBTyxFQUFFLE9BQU8sSUFFZixRQUFRLENBQ0osQ0FDUixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEsNkVBQWMsRUFBQyIsImZpbGUiOiI0OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5UHJvcHMgfSBmcm9tICd0eXBlcy90eXBvZ3JhcGh5VHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4uL3R5cG9ncmFwaHkubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjb2xvcjogVHlwb2dyYXBoeVByb3BzWydjb2xvciddO1xuICBjb21tb25TdHlsZXM6IHN0cmluZztcbiAgbGluazogVHlwb2dyYXBoeVByb3BzWydsaW5rJ107XG4gIG9uQ2xpY2s/OiBUeXBvZ3JhcGh5UHJvcHNbJ29uQ2xpY2snXTtcbn1cblxuY29uc3QgVHlwb2dyYXBoeUxpbms6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjb2xvcixcbiAgY29tbW9uU3R5bGVzLFxuICBsaW5rLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICBjb25zdCBsaW5rU3R5bGVzID0gW1xuICAgIHN0eWxlcy5saW5rLFxuICAgIGNvbG9yID09PSAnd2hpdGUnID8gc3R5bGVzLndoaXRlQnV0dG9uTGluayA6IHVuZGVmaW5lZCxcbiAgICBjb21tb25TdHlsZXMsXG4gIF0uam9pbignICcpO1xuICBjb25zdCBpc0FuY2hvciA9IGxpbmsuc3RhcnRzV2l0aCgnaHR0cHMnKSB8fCBsaW5rLnN0YXJ0c1dpdGgoJ21haWx0bycpO1xuICBjb25zdCBpc01haWxUbyA9IGxpbmsuc3RhcnRzV2l0aCgnbWFpbHRvJyk7XG5cbiAgaWYgKGlzQW5jaG9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17bGlua1N0eWxlc31cbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgcmVsPXtpc01haWxUbyA/IHVuZGVmaW5lZCA6ICdub29wZW5lciBub3JlZmVycmVyJ31cbiAgICAgICAgdGFyZ2V0PXtpc01haWxUbyA/IHVuZGVmaW5lZCA6ICdibGFuayd9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPXtsaW5rU3R5bGVzfVxuICAgICAgdG89e2xpbmt9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBvZ3JhcGh5TGluaztcbiJdLCJzb3VyY2VSb290IjoiIn0=