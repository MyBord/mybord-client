exports.id = "main";
exports.modules = {

/***/ "./server/rootResolvers.ts":
/*!*********************************!*\
  !*** ./server/rootResolvers.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema/mutations */ "./server/schema/mutations.ts");
/* harmony import */ var _schema_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema/queries */ "./server/schema/queries.ts");
/* harmony import */ var _schema_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema/resolvers */ "./server/schema/resolvers.ts");



/* harmony default export */ __webpack_exports__["default"] = ({
    Mutation: {
        ..._schema_mutations__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    Query: {
        ..._schema_queries__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
    ..._schema_resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
});


/***/ }),

/***/ "./server/schema/comment/commentMutations.js":
/*!***************************************************!*\
  !*** ./server/schema/comment/commentMutations.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  createComment: (parent, args, { db }, info) => {
    const postExists = db.posts.some((post) => post.id === args.data.post && post.published);
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!postExists) {
      throw new Error('Post not found.');
    }
    if (!userExists) {
      throw new Error('User not found.');
    }

    const comment = {
      id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
      ...args.data,
    };

    db.comments.push(comment);

    return comment;
  },
  deleteComment: (parent, args, { db }, info) => {
    const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);

    if (commentIndex === -1) {
      throw new Error('Comment not found.');
    }

    const deletedComment = db.comments.splice(commentIndex, 1);

    return deletedComment[0];
  },
});


/***/ }),

/***/ "./server/schema/comment/commentQueries.js":
/*!*************************************************!*\
  !*** ./server/schema/comment/commentQueries.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  comments: (parent, args, { db }, info) => db.comments,
});


/***/ }),

/***/ "./server/schema/comment/commentResolvers.js":
/*!***************************************************!*\
  !*** ./server/schema/comment/commentResolvers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  author: (parent, args, { db }, info) => (
    db.users.find((user) => user.id === parent.author)
  ),
  post: (parent, args, { db }, info) => (
    db.posts.find((post) => post.id === parent.post)
  ),
});


/***/ }),

/***/ "./server/schema/me/meQueries.js":
/*!***************************************!*\
  !*** ./server/schema/me/meQueries.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  me: () => ({
    age: () => 30,
    email: () => 'foo@gmail.com',
    id: () => 'abc123',
    name: () => 'Jimmy',
  }),
});


/***/ }),

/***/ "./server/schema/mutations.ts":
/*!************************************!*\
  !*** ./server/schema/mutations.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_commentMutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/commentMutations */ "./server/schema/comment/commentMutations.js");
/* harmony import */ var _post_postMutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/postMutations */ "./server/schema/post/postMutations.js");
/* harmony import */ var _user_userMutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/userMutations */ "./server/schema/user/userMutations.js");



/* harmony default export */ __webpack_exports__["default"] = ({
    ..._comment_commentMutations__WEBPACK_IMPORTED_MODULE_0__["default"],
    ..._post_postMutations__WEBPACK_IMPORTED_MODULE_1__["default"],
    ..._user_userMutations__WEBPACK_IMPORTED_MODULE_2__["default"],
});


/***/ }),

/***/ "./server/schema/post/postMutations.js":
/*!*********************************************!*\
  !*** ./server/schema/post/postMutations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  createPost: (parent, args, { db }, info) => {
    const userExists = db.users.some((user) => user.id === args.data.author);

    if (!userExists) {
      throw new Error('User not found.');
    }

    const post = {
      id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
      ...args.data,
    };

    db.posts.push(post);

    return post;
  },
  deletePost: (parent, args, { db }, info) => {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);

    if (postIndex === -1) {
      throw new Error('Post not found.');
    }

    const deletedPost = db.posts.splice(postIndex, 1);

    db.comments = db.comments.filter((comment) => comment.post !== args.id);

    return deletedPost[0];
  },
});


/***/ }),

/***/ "./server/schema/post/postQueries.js":
/*!*******************************************!*\
  !*** ./server/schema/post/postQueries.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  post: () => ({
    body: () => 'This is the body',
    id: () => 'abc123',
    published: () => true,
    title: () => 'sample title',
  }),
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      return isBodyMatch || isTitleMatch;
    });
  },
});


/***/ }),

/***/ "./server/schema/post/postResolvers.js":
/*!*********************************************!*\
  !*** ./server/schema/post/postResolvers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  author: (parent, args, { db }, info) => (
    db.users.find((user) => user.id === parent.author)
  ),
  comments: (parent, args, { db }, info) => (
    db.comments.filter((comment) => comment.post === parent.id)
  ),
});


/***/ }),

/***/ "./server/schema/queries.ts":
/*!**********************************!*\
  !*** ./server/schema/queries.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_commentQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/commentQueries */ "./server/schema/comment/commentQueries.js");
/* harmony import */ var _me_meQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me/meQueries */ "./server/schema/me/meQueries.js");
/* harmony import */ var _post_postQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/postQueries */ "./server/schema/post/postQueries.js");
/* harmony import */ var _user_userQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/userQueries */ "./server/schema/user/userQueries.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    ..._comment_commentQueries__WEBPACK_IMPORTED_MODULE_0__["default"],
    ..._me_meQueries__WEBPACK_IMPORTED_MODULE_1__["default"],
    ..._post_postQueries__WEBPACK_IMPORTED_MODULE_2__["default"],
    ..._user_userQueries__WEBPACK_IMPORTED_MODULE_3__["default"],
});


/***/ }),

/***/ "./server/schema/resolvers.ts":
/*!************************************!*\
  !*** ./server/schema/resolvers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_commentResolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/commentResolvers */ "./server/schema/comment/commentResolvers.js");
/* harmony import */ var _post_postResolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/postResolvers */ "./server/schema/post/postResolvers.js");
/* harmony import */ var _user_userResolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/userResolvers */ "./server/schema/user/userResolvers.js");



/* harmony default export */ __webpack_exports__["default"] = ({
    Comment: _comment_commentResolvers__WEBPACK_IMPORTED_MODULE_0__["default"],
    Post: _post_postResolvers__WEBPACK_IMPORTED_MODULE_1__["default"],
    User: _user_userResolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
});


/***/ }),

/***/ "./server/schema/user/userMutations.js":
/*!*********************************************!*\
  !*** ./server/schema/user/userMutations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  createUser: (parent, args, { db }, info) => {
    const emailTaken = db.users.some((user) => user.email === args.data.email);

    if (emailTaken) {
      throw new Error('Email is already taken.');
    }

    const user = {
      id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
      ...args.data,
    };

    db.users.push(user);

    return user;
  },
  deleteUser: (parent, args, { db }, info) => {
    const userIndex = db.users.findIndex((user) => user.id === args.id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const deletedUser = db.users.splice(userIndex, 1);

    db.posts = db.posts.filter((post) => {
      const match = post.author === args.id;

      if (match) {
        db.comments = db.comments.filter((comment) => comment.post !== post.id);
      }

      return !match;
    });

    db.comments = db.comments.filter((comment) => comment.author !== args.id);

    return deletedUser[0];
  },
});


/***/ }),

/***/ "./server/schema/user/userQueries.js":
/*!*******************************************!*\
  !*** ./server/schema/user/userQueries.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => (
      user.name.toLowerCase().includes(args.query.toLowerCase())
    ));
  },
});


/***/ }),

/***/ "./server/schema/user/userResolvers.js":
/*!*********************************************!*\
  !*** ./server/schema/user/userResolvers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  comments: (parent, args, { db }, info) => (
    db.comments.filter((comment) => comment.author === parent.id)
  ),
  posts: (parent, args, { db }, info) => (
    db.posts.filter((post) => post.author === parent.id)
  ),
});


/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm9vdFJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL2NvbW1lbnQvY29tbWVudE11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL2NvbW1lbnQvY29tbWVudFF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9jb21tZW50L2NvbW1lbnRSZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9tZS9tZVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9tdXRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9wb3N0L3Bvc3RNdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9wb3N0L3Bvc3RRdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvcG9zdC9wb3N0UmVzb2x2ZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvcXVlcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3Jlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3VzZXIvdXNlck11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3VzZXIvdXNlclF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS91c2VyL3VzZXJSZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDSjtBQUNJO0FBRTVCO0lBQ2IsUUFBUSxFQUFFO1FBQ1IsR0FBRyx5REFBUztLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyx1REFBTztLQUNYO0lBQ0QsR0FBRyx5REFBUztDQUNiLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNaRjtBQUFBO0FBQUE7QUFBNkI7O0FBRWQ7QUFDZixpQ0FBaUMsS0FBSztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsOENBQU07QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbENGO0FBQWU7QUFDZiw0QkFBNEIsS0FBSztBQUNqQyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNGRjtBQUFlO0FBQ2YsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQRjtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQRjtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNUO0FBQ0E7QUFFbEM7SUFDYixHQUFHLGlFQUFnQjtJQUNuQixHQUFHLDJEQUFhO0lBQ2hCLEdBQUcsMkRBQWE7Q0FDakIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1JGO0FBQUE7QUFBQTtBQUE2Qjs7QUFFZDtBQUNmLDhCQUE4QixLQUFLO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsOENBQU07QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEIsS0FBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaENGO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkY7QUFBZTtBQUNmLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNmO0FBQ007QUFDQTtBQUU5QjtJQUNiLEdBQUcsK0RBQWM7SUFDakIsR0FBRyxxREFBUztJQUNaLEdBQUcseURBQVc7SUFDZCxHQUFHLHlEQUFXO0NBQ2YsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1ZGO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ1Q7QUFDQTtBQUV6QjtJQUNiLDBFQUFPO0lBQ1AsaUVBQUk7SUFDSixpRUFBSTtDQUNMLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUFBO0FBQUE7QUFBNkI7O0FBRWQ7QUFDZiw4QkFBOEIsS0FBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDhDQUFNO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsOEJBQThCLEtBQUs7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMxQ0Y7QUFBZTtBQUNmLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNURjtBQUFlO0FBQ2YsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7OztBQ1BGLG9DIiwiZmlsZSI6Im1haW4uYjQyM2QyNTA4ZmY0MTA1ZTliNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdXRhdGlvbnMgZnJvbSAnLi9zY2hlbWEvbXV0YXRpb25zJztcbmltcG9ydCBxdWVyaWVzIGZyb20gJy4vc2NoZW1hL3F1ZXJpZXMnO1xuaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3NjaGVtYS9yZXNvbHZlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE11dGF0aW9uOiB7XG4gICAgLi4ubXV0YXRpb25zLFxuICB9LFxuICBRdWVyeToge1xuICAgIC4uLnF1ZXJpZXMsXG4gIH0sXG4gIC4uLnJlc29sdmVycyxcbn07XG4iLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUNvbW1lbnQ6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHBvc3RFeGlzdHMgPSBkYi5wb3N0cy5zb21lKChwb3N0KSA9PiBwb3N0LmlkID09PSBhcmdzLmRhdGEucG9zdCAmJiBwb3N0LnB1Ymxpc2hlZCk7XG4gICAgY29uc3QgdXNlckV4aXN0cyA9IGRiLnVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIuaWQgPT09IGFyZ3MuZGF0YS5hdXRob3IpO1xuXG4gICAgaWYgKCFwb3N0RXhpc3RzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kLicpO1xuICAgIH1cbiAgICBpZiAoIXVzZXJFeGlzdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tbWVudCA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIC4uLmFyZ3MuZGF0YSxcbiAgICB9O1xuXG4gICAgZGIuY29tbWVudHMucHVzaChjb21tZW50KTtcblxuICAgIHJldHVybiBjb21tZW50O1xuICB9LFxuICBkZWxldGVDb21tZW50OiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCBjb21tZW50SW5kZXggPSBkYi5jb21tZW50cy5maW5kSW5kZXgoKGNvbW1lbnQpID0+IGNvbW1lbnQuaWQgPT09IGFyZ3MuaWQpO1xuXG4gICAgaWYgKGNvbW1lbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbWVudCBub3QgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlZENvbW1lbnQgPSBkYi5jb21tZW50cy5zcGxpY2UoY29tbWVudEluZGV4LCAxKTtcblxuICAgIHJldHVybiBkZWxldGVkQ29tbWVudFswXTtcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnRzOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IGRiLmNvbW1lbnRzLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aG9yOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IChcbiAgICBkYi51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSBwYXJlbnQuYXV0aG9yKVxuICApLFxuICBwb3N0OiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IChcbiAgICBkYi5wb3N0cy5maW5kKChwb3N0KSA9PiBwb3N0LmlkID09PSBwYXJlbnQucG9zdClcbiAgKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1lOiAoKSA9PiAoe1xuICAgIGFnZTogKCkgPT4gMzAsXG4gICAgZW1haWw6ICgpID0+ICdmb29AZ21haWwuY29tJyxcbiAgICBpZDogKCkgPT4gJ2FiYzEyMycsXG4gICAgbmFtZTogKCkgPT4gJ0ppbW15JyxcbiAgfSksXG59O1xuIiwiaW1wb3J0IGNvbW1lbnRNdXRhdGlvbnMgZnJvbSAnLi9jb21tZW50L2NvbW1lbnRNdXRhdGlvbnMnO1xuaW1wb3J0IHBvc3RNdXRhdGlvbnMgZnJvbSAnLi9wb3N0L3Bvc3RNdXRhdGlvbnMnO1xuaW1wb3J0IHVzZXJNdXRhdGlvbnMgZnJvbSAnLi91c2VyL3VzZXJNdXRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmNvbW1lbnRNdXRhdGlvbnMsXG4gIC4uLnBvc3RNdXRhdGlvbnMsXG4gIC4uLnVzZXJNdXRhdGlvbnMsXG59O1xuIiwiaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVQb3N0OiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCB1c2VyRXhpc3RzID0gZGIudXNlcnMuc29tZSgodXNlcikgPT4gdXNlci5pZCA9PT0gYXJncy5kYXRhLmF1dGhvcik7XG5cbiAgICBpZiAoIXVzZXJFeGlzdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zdCA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIC4uLmFyZ3MuZGF0YSxcbiAgICB9O1xuXG4gICAgZGIucG9zdHMucHVzaChwb3N0KTtcblxuICAgIHJldHVybiBwb3N0O1xuICB9LFxuICBkZWxldGVQb3N0OiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCBwb3N0SW5kZXggPSBkYi5wb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QuaWQgPT09IGFyZ3MuaWQpO1xuXG4gICAgaWYgKHBvc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zdCBub3QgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlZFBvc3QgPSBkYi5wb3N0cy5zcGxpY2UocG9zdEluZGV4LCAxKTtcblxuICAgIGRiLmNvbW1lbnRzID0gZGIuY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnBvc3QgIT09IGFyZ3MuaWQpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRQb3N0WzBdO1xuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcG9zdDogKCkgPT4gKHtcbiAgICBib2R5OiAoKSA9PiAnVGhpcyBpcyB0aGUgYm9keScsXG4gICAgaWQ6ICgpID0+ICdhYmMxMjMnLFxuICAgIHB1Ymxpc2hlZDogKCkgPT4gdHJ1ZSxcbiAgICB0aXRsZTogKCkgPT4gJ3NhbXBsZSB0aXRsZScsXG4gIH0pLFxuICBwb3N0czogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiB7XG4gICAgaWYgKCFhcmdzLnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gZGIucG9zdHM7XG4gICAgfVxuICAgIHJldHVybiBkYi5wb3N0cy5maWx0ZXIoKHBvc3QpID0+IHtcbiAgICAgIGNvbnN0IGlzQm9keU1hdGNoID0gcG9zdC5ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXJncy5xdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGNvbnN0IGlzVGl0bGVNYXRjaCA9IHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhcmdzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgcmV0dXJuIGlzQm9keU1hdGNoIHx8IGlzVGl0bGVNYXRjaDtcbiAgICB9KTtcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGhvcjogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiAoXG4gICAgZGIudXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gcGFyZW50LmF1dGhvcilcbiAgKSxcbiAgY29tbWVudHM6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4gKFxuICAgIGRiLmNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC5wb3N0ID09PSBwYXJlbnQuaWQpXG4gICksXG59O1xuIiwiaW1wb3J0IGNvbW1lbnRRdWVyaWVzIGZyb20gJy4vY29tbWVudC9jb21tZW50UXVlcmllcyc7XG5pbXBvcnQgbWVRdWVyaWVzIGZyb20gJy4vbWUvbWVRdWVyaWVzJztcbmltcG9ydCBwb3N0UXVlcmllcyBmcm9tICcuL3Bvc3QvcG9zdFF1ZXJpZXMnO1xuaW1wb3J0IHVzZXJRdWVyaWVzIGZyb20gJy4vdXNlci91c2VyUXVlcmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uY29tbWVudFF1ZXJpZXMsXG4gIC4uLm1lUXVlcmllcyxcbiAgLi4ucG9zdFF1ZXJpZXMsXG4gIC4uLnVzZXJRdWVyaWVzLFxufTtcbiIsImltcG9ydCBDb21tZW50IGZyb20gJy4vY29tbWVudC9jb21tZW50UmVzb2x2ZXJzJztcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdC9wb3N0UmVzb2x2ZXJzJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlci91c2VyUmVzb2x2ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDb21tZW50LFxuICBQb3N0LFxuICBVc2VyLFxufTtcbiIsImltcG9ydCB1dWlkdjQgZnJvbSAndXVpZC92NCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVXNlcjogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiB7XG4gICAgY29uc3QgZW1haWxUYWtlbiA9IGRiLnVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGFyZ3MuZGF0YS5lbWFpbCk7XG5cbiAgICBpZiAoZW1haWxUYWtlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBpcyBhbHJlYWR5IHRha2VuLicpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICAuLi5hcmdzLmRhdGEsXG4gICAgfTtcblxuICAgIGRiLnVzZXJzLnB1c2godXNlcik7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSxcbiAgZGVsZXRlVXNlcjogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiB7XG4gICAgY29uc3QgdXNlckluZGV4ID0gZGIudXNlcnMuZmluZEluZGV4KCh1c2VyKSA9PiB1c2VyLmlkID09PSBhcmdzLmlkKTtcblxuICAgIGlmICh1c2VySW5kZXggPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlZFVzZXIgPSBkYi51c2Vycy5zcGxpY2UodXNlckluZGV4LCAxKTtcblxuICAgIGRiLnBvc3RzID0gZGIucG9zdHMuZmlsdGVyKChwb3N0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHBvc3QuYXV0aG9yID09PSBhcmdzLmlkO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZGIuY29tbWVudHMgPSBkYi5jb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQucG9zdCAhPT0gcG9zdC5pZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhbWF0Y2g7XG4gICAgfSk7XG5cbiAgICBkYi5jb21tZW50cyA9IGRiLmNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC5hdXRob3IgIT09IGFyZ3MuaWQpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRVc2VyWzBdO1xuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdXNlcnM6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGlmICghYXJncy5xdWVyeSkge1xuICAgICAgcmV0dXJuIGRiLnVzZXJzO1xuICAgIH1cbiAgICByZXR1cm4gZGIudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAoXG4gICAgICB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhcmdzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKSk7XG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb21tZW50czogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiAoXG4gICAgZGIuY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LmF1dGhvciA9PT0gcGFyZW50LmlkKVxuICApLFxuICBwb3N0czogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiAoXG4gICAgZGIucG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmF1dGhvciA9PT0gcGFyZW50LmlkKVxuICApLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==