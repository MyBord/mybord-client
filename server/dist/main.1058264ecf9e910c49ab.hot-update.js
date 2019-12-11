exports.id = "main";
exports.modules = {

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-import */ "graphql-import");
/* harmony import */ var graphql_import__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_import__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./server/resolvers.ts");




const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
    context: { db },
    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__["default"],
    typeDefs: Object(graphql_import__WEBPACK_IMPORTED_MODULE_2__["importSchema"])('./server/schema.graphql'),
});
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
server.applyMiddleware({ app });
const port = 5000;
app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));
if (true) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}


/***/ }),

/***/ "./server/type-defs.ts":
false,

/***/ "graphql-import":
/*!*********************************!*\
  !*** external "graphql-import" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtaW1wb3J0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ3VCO0FBQ1A7QUFDVjtBQUVwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtFQUFZLENBQUM7SUFDOUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2YsNkRBQVM7SUFDVCxRQUFRLEVBQUUsbUVBQVksQ0FBQyx5QkFBeUIsQ0FBQztDQUNsRCxDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsR0FBRyw4Q0FBTyxFQUFFLENBQUM7QUFDdEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxNQUFNLENBQ1IsRUFBRSxJQUFJLEVBQUUsRUFDUixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ25GLENBQUM7QUFFRixJQUFJLElBQVUsRUFBRTtJQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDekM7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRCwyQyIsImZpbGUiOiJtYWluLjEwNTgyNjRlY2Y5ZTkxMGM0OWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBpbXBvcnRTY2hlbWEgfSBmcm9tICdncmFwaHFsLWltcG9ydCc7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vcmVzb2x2ZXJzJztcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIGNvbnRleHQ6IHsgZGIgfSxcbiAgcmVzb2x2ZXJzLFxuICB0eXBlRGVmczogaW1wb3J0U2NoZW1hKCcuL3NlcnZlci9zY2hlbWEuZ3JhcGhxbCcpLFxufSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmNvbnN0IHBvcnQgPSA1MDAwO1xuXG5hcHAubGlzdGVuKFxuICB7IHBvcnQgfSxcbiAgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0ke3NlcnZlci5ncmFwaHFsUGF0aH1gKSxcbik7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBzZXJ2ZXIuc3RvcCgpKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtaW1wb3J0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=