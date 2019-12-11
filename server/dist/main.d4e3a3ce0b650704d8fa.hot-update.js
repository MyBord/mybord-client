exports.id = "main";
exports.modules = {

/***/ "./server/db.ts":
/*!**********************!*\
  !*** ./server/db.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Demo Data
const comments = [
    {
        id: '101', author: '303', post: '201', text: 'comment 1',
    },
    {
        id: '102', author: '301', post: '203', text: 'comment 2',
    },
    {
        id: '103', author: '302', post: '202', text: 'comment 3',
    },
];
const posts = [
    {
        id: '201', author: '301', body: 'body 1', published: true, title: 'title 1',
    },
    {
        id: '202', author: '301', body: 'body 2', published: true, title: 'title 2',
    },
    {
        id: '203', author: '302', body: 'body 3', published: false, title: 'title 3',
    },
];
const users = [
    {
        id: '301', age: '30', email: 'jimmy@gmail.com', name: 'Jimmy',
    },
    {
        id: '302', age: '40', email: 'bob@gmail.com', name: 'Bob',
    },
    {
        id: '303', age: '50', email: 'john@gmail.com', name: 'John',
    },
];
/* harmony default export */ __webpack_exports__["default"] = ({
    comments,
    posts,
    users,
});


/***/ }),

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
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./server/db.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./server/resolvers.ts");





const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
    context: { db: _db__WEBPACK_IMPORTED_MODULE_3__["default"] },
    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"],
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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUEsWUFBWTtBQUNaLE1BQU0sUUFBUSxHQUFHO0lBQ2Y7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVztLQUN6RDtJQUNEO1FBQ0UsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVc7S0FDekQ7SUFDRDtRQUNFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXO0tBQ3pEO0NBQ0YsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHO0lBQ1o7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTO0tBQzVFO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTO0tBQzVFO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTO0tBQzdFO0NBQ0YsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHO0lBQ1o7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxPQUFPO0tBQzlEO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSztLQUMxRDtJQUNEO1FBQ0UsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTTtLQUM1RDtDQUNGLENBQUM7QUFFYTtJQUNiLFFBQVE7SUFDUixLQUFLO0lBQ0wsS0FBSztDQUNOLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ3VCO0FBQ1A7QUFDeEI7QUFDYztBQUVwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtFQUFZLENBQUM7SUFDOUIsT0FBTyxFQUFFLEVBQUUsK0NBQUUsRUFBRTtJQUNmLDZEQUFTO0lBQ1QsUUFBUSxFQUFFLG1FQUFZLENBQUMseUJBQXlCLENBQUM7Q0FDbEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsOENBQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsTUFBTSxDQUNSLEVBQUUsSUFBSSxFQUFFLEVBQ1IsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNuRixDQUFDO0FBRUYsSUFBSSxJQUFVLEVBQUU7SUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ3pDIiwiZmlsZSI6Im1haW4uZDRlM2EzY2UwYjY1MDcwNGQ4ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlbW8gRGF0YVxuY29uc3QgY29tbWVudHMgPSBbXG4gIHtcbiAgICBpZDogJzEwMScsIGF1dGhvcjogJzMwMycsIHBvc3Q6ICcyMDEnLCB0ZXh0OiAnY29tbWVudCAxJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMTAyJywgYXV0aG9yOiAnMzAxJywgcG9zdDogJzIwMycsIHRleHQ6ICdjb21tZW50IDInLFxuICB9LFxuICB7XG4gICAgaWQ6ICcxMDMnLCBhdXRob3I6ICczMDInLCBwb3N0OiAnMjAyJywgdGV4dDogJ2NvbW1lbnQgMycsXG4gIH0sXG5dO1xuXG5jb25zdCBwb3N0cyA9IFtcbiAge1xuICAgIGlkOiAnMjAxJywgYXV0aG9yOiAnMzAxJywgYm9keTogJ2JvZHkgMScsIHB1Ymxpc2hlZDogdHJ1ZSwgdGl0bGU6ICd0aXRsZSAxJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMjAyJywgYXV0aG9yOiAnMzAxJywgYm9keTogJ2JvZHkgMicsIHB1Ymxpc2hlZDogdHJ1ZSwgdGl0bGU6ICd0aXRsZSAyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMjAzJywgYXV0aG9yOiAnMzAyJywgYm9keTogJ2JvZHkgMycsIHB1Ymxpc2hlZDogZmFsc2UsIHRpdGxlOiAndGl0bGUgMycsXG4gIH0sXG5dO1xuXG5jb25zdCB1c2VycyA9IFtcbiAge1xuICAgIGlkOiAnMzAxJywgYWdlOiAnMzAnLCBlbWFpbDogJ2ppbW15QGdtYWlsLmNvbScsIG5hbWU6ICdKaW1teScsXG4gIH0sXG4gIHtcbiAgICBpZDogJzMwMicsIGFnZTogJzQwJywgZW1haWw6ICdib2JAZ21haWwuY29tJywgbmFtZTogJ0JvYicsXG4gIH0sXG4gIHtcbiAgICBpZDogJzMwMycsIGFnZTogJzUwJywgZW1haWw6ICdqb2huQGdtYWlsLmNvbScsIG5hbWU6ICdKb2huJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbWVudHMsXG4gIHBvc3RzLFxuICB1c2Vycyxcbn07XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBpbXBvcnRTY2hlbWEgfSBmcm9tICdncmFwaHFsLWltcG9ydCc7XG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vcmVzb2x2ZXJzJztcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIGNvbnRleHQ6IHsgZGIgfSxcbiAgcmVzb2x2ZXJzLFxuICB0eXBlRGVmczogaW1wb3J0U2NoZW1hKCcuL3NlcnZlci9zY2hlbWEuZ3JhcGhxbCcpLFxufSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmNvbnN0IHBvcnQgPSA1MDAwO1xuXG5hcHAubGlzdGVuKFxuICB7IHBvcnQgfSxcbiAgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0ke3NlcnZlci5ncmFwaHFsUGF0aH1gKSxcbik7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBzZXJ2ZXIuc3RvcCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=