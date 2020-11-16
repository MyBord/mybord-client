(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./src/spa/shared/typography/typographyLink/typographyLink.tsx":
/*!*********************************************************************!*\
  !*** ./src/spa/shared/typography/typographyLink/typographyLink.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _typography_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typography.module.less */ "./src/spa/shared/typography/typography.module.less");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BhL3NoYXJlZC90eXBvZ3JhcGh5L3R5cG9ncmFwaHlMaW5rL3R5cG9ncmFwaHlMaW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1M7QUFFWTtBQVVwRCxJQUFNLGNBQWMsR0FBb0IsVUFBQyxFQU14QztRQUxDLHNCQUFRLEVBQ1IsZ0JBQUssRUFDTCw4QkFBWSxFQUNaLGNBQUksRUFDSixvQkFBTztJQUVQLElBQU0sVUFBVSxHQUFHO1FBQ2pCLDREQUFXO1FBQ1gsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUVBQXNCLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDdEQsWUFBWTtLQUNiLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsSUFBSSxRQUFRLEVBQUU7UUFDWixPQUFPLENBQ0wsMkRBQ0UsU0FBUyxFQUFFLFVBQVUsRUFDckIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsT0FBTyxFQUNoQixHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUNqRCxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFFckMsUUFBUSxDQUNQLENBQ0wsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUNMLG9EQUFDLHFEQUFJLElBQ0gsU0FBUyxFQUFFLFVBQVUsRUFDckIsRUFBRSxFQUFFLElBQUksRUFDUixPQUFPLEVBQUUsT0FBTyxJQUVmLFFBQVEsQ0FDSixDQUNSLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSw2RUFBYyxFQUFDIiwiZmlsZSI6IjY2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFR5cG9ncmFwaHlQcm9wcyB9IGZyb20gJ3R5cGVzL3R5cG9ncmFwaHlUeXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi4vdHlwb2dyYXBoeS5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNvbG9yOiBUeXBvZ3JhcGh5UHJvcHNbJ2NvbG9yJ107XG4gIGNvbW1vblN0eWxlczogc3RyaW5nO1xuICBsaW5rOiBUeXBvZ3JhcGh5UHJvcHNbJ2xpbmsnXTtcbiAgb25DbGljaz86IFR5cG9ncmFwaHlQcm9wc1snb25DbGljayddO1xufVxuXG5jb25zdCBUeXBvZ3JhcGh5TGluazogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNvbG9yLFxuICBjb21tb25TdHlsZXMsXG4gIGxpbmssXG4gIG9uQ2xpY2ssXG59KSA9PiB7XG4gIGNvbnN0IGxpbmtTdHlsZXMgPSBbXG4gICAgc3R5bGVzLmxpbmssXG4gICAgY29sb3IgPT09ICd3aGl0ZScgPyBzdHlsZXMud2hpdGVCdXR0b25MaW5rIDogdW5kZWZpbmVkLFxuICAgIGNvbW1vblN0eWxlcyxcbiAgXS5qb2luKCcgJyk7XG4gIGNvbnN0IGlzQW5jaG9yID0gbGluay5zdGFydHNXaXRoKCdodHRwcycpIHx8IGxpbmsuc3RhcnRzV2l0aCgnbWFpbHRvJyk7XG4gIGNvbnN0IGlzTWFpbFRvID0gbGluay5zdGFydHNXaXRoKCdtYWlsdG8nKTtcblxuICBpZiAoaXNBbmNob3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtsaW5rU3R5bGVzfVxuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICByZWw9e2lzTWFpbFRvID8gdW5kZWZpbmVkIDogJ25vb3BlbmVyIG5vcmVmZXJyZXInfVxuICAgICAgICB0YXJnZXQ9e2lzTWFpbFRvID8gdW5kZWZpbmVkIDogJ2JsYW5rJ31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9e2xpbmtTdHlsZXN9XG4gICAgICB0bz17bGlua31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFR5cG9ncmFwaHlMaW5rO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==