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

/***/ "./server/schema.graphql":
false,

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
/* harmony import */ var _rootResolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootResolvers */ "./server/rootResolvers.ts");





const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
    context: { db: _db__WEBPACK_IMPORTED_MODULE_3__["default"] },
    resolvers: _rootResolvers__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-import":
/*!*********************************!*\
  !*** external "graphql-import" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-import");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3Jvb3RSZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9jb21tZW50L2NvbW1lbnRNdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9jb21tZW50L2NvbW1lbnRRdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvY29tbWVudC9jb21tZW50UmVzb2x2ZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvbWUvbWVRdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvbXV0YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvcG9zdC9wb3N0TXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvcG9zdC9wb3N0UXVlcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3Bvc3QvcG9zdFJlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3F1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS9yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS91c2VyL3VzZXJNdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NjaGVtYS91c2VyL3VzZXJRdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zY2hlbWEvdXNlci91c2VyUmVzb2x2ZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtaW1wb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4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QSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJtYWluLjUwY2NiMDgzMzE1MmU1ZDQ1ODJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZW1vIERhdGFcbmNvbnN0IGNvbW1lbnRzID0gW1xuICB7XG4gICAgaWQ6ICcxMDEnLCBhdXRob3I6ICczMDMnLCBwb3N0OiAnMjAxJywgdGV4dDogJ2NvbW1lbnQgMScsXG4gIH0sXG4gIHtcbiAgICBpZDogJzEwMicsIGF1dGhvcjogJzMwMScsIHBvc3Q6ICcyMDMnLCB0ZXh0OiAnY29tbWVudCAyJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMTAzJywgYXV0aG9yOiAnMzAyJywgcG9zdDogJzIwMicsIHRleHQ6ICdjb21tZW50IDMnLFxuICB9LFxuXTtcblxuY29uc3QgcG9zdHMgPSBbXG4gIHtcbiAgICBpZDogJzIwMScsIGF1dGhvcjogJzMwMScsIGJvZHk6ICdib2R5IDEnLCBwdWJsaXNoZWQ6IHRydWUsIHRpdGxlOiAndGl0bGUgMScsXG4gIH0sXG4gIHtcbiAgICBpZDogJzIwMicsIGF1dGhvcjogJzMwMScsIGJvZHk6ICdib2R5IDInLCBwdWJsaXNoZWQ6IHRydWUsIHRpdGxlOiAndGl0bGUgMicsXG4gIH0sXG4gIHtcbiAgICBpZDogJzIwMycsIGF1dGhvcjogJzMwMicsIGJvZHk6ICdib2R5IDMnLCBwdWJsaXNoZWQ6IGZhbHNlLCB0aXRsZTogJ3RpdGxlIDMnLFxuICB9LFxuXTtcblxuY29uc3QgdXNlcnMgPSBbXG4gIHtcbiAgICBpZDogJzMwMScsIGFnZTogJzMwJywgZW1haWw6ICdqaW1teUBnbWFpbC5jb20nLCBuYW1lOiAnSmltbXknLFxuICB9LFxuICB7XG4gICAgaWQ6ICczMDInLCBhZ2U6ICc0MCcsIGVtYWlsOiAnYm9iQGdtYWlsLmNvbScsIG5hbWU6ICdCb2InLFxuICB9LFxuICB7XG4gICAgaWQ6ICczMDMnLCBhZ2U6ICc1MCcsIGVtYWlsOiAnam9obkBnbWFpbC5jb20nLCBuYW1lOiAnSm9obicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnRzLFxuICBwb3N0cyxcbiAgdXNlcnMsXG59O1xuIiwiaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL3NjaGVtYS9tdXRhdGlvbnMnO1xuaW1wb3J0IHF1ZXJpZXMgZnJvbSAnLi9zY2hlbWEvcXVlcmllcyc7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vc2NoZW1hL3Jlc29sdmVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTXV0YXRpb246IHtcbiAgICAuLi5tdXRhdGlvbnMsXG4gIH0sXG4gIFF1ZXJ5OiB7XG4gICAgLi4ucXVlcmllcyxcbiAgfSxcbiAgLi4ucmVzb2x2ZXJzLFxufTtcbiIsImltcG9ydCB1dWlkdjQgZnJvbSAndXVpZC92NCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlQ29tbWVudDogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiB7XG4gICAgY29uc3QgcG9zdEV4aXN0cyA9IGRiLnBvc3RzLnNvbWUoKHBvc3QpID0+IHBvc3QuaWQgPT09IGFyZ3MuZGF0YS5wb3N0ICYmIHBvc3QucHVibGlzaGVkKTtcbiAgICBjb25zdCB1c2VyRXhpc3RzID0gZGIudXNlcnMuc29tZSgodXNlcikgPT4gdXNlci5pZCA9PT0gYXJncy5kYXRhLmF1dGhvcik7XG5cbiAgICBpZiAoIXBvc3RFeGlzdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zdCBub3QgZm91bmQuJyk7XG4gICAgfVxuICAgIGlmICghdXNlckV4aXN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgLi4uYXJncy5kYXRhLFxuICAgIH07XG5cbiAgICBkYi5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbW1lbnQ7XG4gIH0sXG4gIGRlbGV0ZUNvbW1lbnQ6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRJbmRleCA9IGRiLmNvbW1lbnRzLmZpbmRJbmRleCgoY29tbWVudCkgPT4gY29tbWVudC5pZCA9PT0gYXJncy5pZCk7XG5cbiAgICBpZiAoY29tbWVudEluZGV4ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tZW50IG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVkQ29tbWVudCA9IGRiLmNvbW1lbnRzLnNwbGljZShjb21tZW50SW5kZXgsIDEpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRDb21tZW50WzBdO1xuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbWVudHM6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4gZGIuY29tbWVudHMsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRob3I6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4gKFxuICAgIGRiLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IHBhcmVudC5hdXRob3IpXG4gICksXG4gIHBvc3Q6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4gKFxuICAgIGRiLnBvc3RzLmZpbmQoKHBvc3QpID0+IHBvc3QuaWQgPT09IHBhcmVudC5wb3N0KVxuICApLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWU6ICgpID0+ICh7XG4gICAgYWdlOiAoKSA9PiAzMCxcbiAgICBlbWFpbDogKCkgPT4gJ2Zvb0BnbWFpbC5jb20nLFxuICAgIGlkOiAoKSA9PiAnYWJjMTIzJyxcbiAgICBuYW1lOiAoKSA9PiAnSmltbXknLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgY29tbWVudE11dGF0aW9ucyBmcm9tICcuL2NvbW1lbnQvY29tbWVudE11dGF0aW9ucyc7XG5pbXBvcnQgcG9zdE11dGF0aW9ucyBmcm9tICcuL3Bvc3QvcG9zdE11dGF0aW9ucyc7XG5pbXBvcnQgdXNlck11dGF0aW9ucyBmcm9tICcuL3VzZXIvdXNlck11dGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uY29tbWVudE11dGF0aW9ucyxcbiAgLi4ucG9zdE11dGF0aW9ucyxcbiAgLi4udXNlck11dGF0aW9ucyxcbn07XG4iLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVBvc3Q6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBkYi51c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmlkID09PSBhcmdzLmRhdGEuYXV0aG9yKTtcblxuICAgIGlmICghdXNlckV4aXN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3N0ID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgLi4uYXJncy5kYXRhLFxuICAgIH07XG5cbiAgICBkYi5wb3N0cy5wdXNoKHBvc3QpO1xuXG4gICAgcmV0dXJuIHBvc3Q7XG4gIH0sXG4gIGRlbGV0ZVBvc3Q6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHBvc3RJbmRleCA9IGRiLnBvc3RzLmZpbmRJbmRleCgocG9zdCkgPT4gcG9zdC5pZCA9PT0gYXJncy5pZCk7XG5cbiAgICBpZiAocG9zdEluZGV4ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3N0IG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVkUG9zdCA9IGRiLnBvc3RzLnNwbGljZShwb3N0SW5kZXgsIDEpO1xuXG4gICAgZGIuY29tbWVudHMgPSBkYi5jb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQucG9zdCAhPT0gYXJncy5pZCk7XG5cbiAgICByZXR1cm4gZGVsZXRlZFBvc3RbMF07XG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBwb3N0OiAoKSA9PiAoe1xuICAgIGJvZHk6ICgpID0+ICdUaGlzIGlzIHRoZSBib2R5JyxcbiAgICBpZDogKCkgPT4gJ2FiYzEyMycsXG4gICAgcHVibGlzaGVkOiAoKSA9PiB0cnVlLFxuICAgIHRpdGxlOiAoKSA9PiAnc2FtcGxlIHRpdGxlJyxcbiAgfSksXG4gIHBvc3RzOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBpZiAoIWFyZ3MucXVlcnkpIHtcbiAgICAgIHJldHVybiBkYi5wb3N0cztcbiAgICB9XG4gICAgcmV0dXJuIGRiLnBvc3RzLmZpbHRlcigocG9zdCkgPT4ge1xuICAgICAgY29uc3QgaXNCb2R5TWF0Y2ggPSBwb3N0LmJvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhcmdzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgY29uc3QgaXNUaXRsZU1hdGNoID0gcG9zdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFyZ3MucXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgICByZXR1cm4gaXNCb2R5TWF0Y2ggfHwgaXNUaXRsZU1hdGNoO1xuICAgIH0pO1xuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aG9yOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IChcbiAgICBkYi51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSBwYXJlbnQuYXV0aG9yKVxuICApLFxuICBjb21tZW50czogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiAoXG4gICAgZGIuY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnBvc3QgPT09IHBhcmVudC5pZClcbiAgKSxcbn07XG4iLCJpbXBvcnQgY29tbWVudFF1ZXJpZXMgZnJvbSAnLi9jb21tZW50L2NvbW1lbnRRdWVyaWVzJztcbmltcG9ydCBtZVF1ZXJpZXMgZnJvbSAnLi9tZS9tZVF1ZXJpZXMnO1xuaW1wb3J0IHBvc3RRdWVyaWVzIGZyb20gJy4vcG9zdC9wb3N0UXVlcmllcyc7XG5pbXBvcnQgdXNlclF1ZXJpZXMgZnJvbSAnLi91c2VyL3VzZXJRdWVyaWVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5jb21tZW50UXVlcmllcyxcbiAgLi4ubWVRdWVyaWVzLFxuICAuLi5wb3N0UXVlcmllcyxcbiAgLi4udXNlclF1ZXJpZXMsXG59O1xuIiwiaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21tZW50L2NvbW1lbnRSZXNvbHZlcnMnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9wb3N0L3Bvc3RSZXNvbHZlcnMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyL3VzZXJSZXNvbHZlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIENvbW1lbnQsXG4gIFBvc3QsXG4gIFVzZXIsXG59O1xuIiwiaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVVc2VyOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCBlbWFpbFRha2VuID0gZGIudXNlcnMuc29tZSgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gYXJncy5kYXRhLmVtYWlsKTtcblxuICAgIGlmIChlbWFpbFRha2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGlzIGFscmVhZHkgdGFrZW4uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIC4uLmFyZ3MuZGF0YSxcbiAgICB9O1xuXG4gICAgZGIudXNlcnMucHVzaCh1c2VyKTtcblxuICAgIHJldHVybiB1c2VyO1xuICB9LFxuICBkZWxldGVVc2VyOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCB1c2VySW5kZXggPSBkYi51c2Vycy5maW5kSW5kZXgoKHVzZXIpID0+IHVzZXIuaWQgPT09IGFyZ3MuaWQpO1xuXG4gICAgaWYgKHVzZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVkVXNlciA9IGRiLnVzZXJzLnNwbGljZSh1c2VySW5kZXgsIDEpO1xuXG4gICAgZGIucG9zdHMgPSBkYi5wb3N0cy5maWx0ZXIoKHBvc3QpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gcG9zdC5hdXRob3IgPT09IGFyZ3MuaWQ7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkYi5jb21tZW50cyA9IGRiLmNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC5wb3N0ICE9PSBwb3N0LmlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFtYXRjaDtcbiAgICB9KTtcblxuICAgIGRiLmNvbW1lbnRzID0gZGIuY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LmF1dGhvciAhPT0gYXJncy5pZCk7XG5cbiAgICByZXR1cm4gZGVsZXRlZFVzZXJbMF07XG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB1c2VyczogKHBhcmVudCwgYXJncywgeyBkYiB9LCBpbmZvKSA9PiB7XG4gICAgaWYgKCFhcmdzLnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gZGIudXNlcnM7XG4gICAgfVxuICAgIHJldHVybiBkYi51c2Vycy5maWx0ZXIoKHVzZXIpID0+IChcbiAgICAgIHVzZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFyZ3MucXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICApKTtcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnRzOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IChcbiAgICBkYi5jb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQuYXV0aG9yID09PSBwYXJlbnQuaWQpXG4gICksXG4gIHBvc3RzOiAocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pID0+IChcbiAgICBkYi5wb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuYXV0aG9yID09PSBwYXJlbnQuaWQpXG4gICksXG59O1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgaW1wb3J0U2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC1pbXBvcnQnO1xuaW1wb3J0IGRiIGZyb20gJy4vZGInO1xuaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3Jvb3RSZXNvbHZlcnMnO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgY29udGV4dDogeyBkYiB9LFxuICByZXNvbHZlcnMsXG4gIHR5cGVEZWZzOiBpbXBvcnRTY2hlbWEoJy4vc2VydmVyL3NjaGVtYS5ncmFwaHFsJyksXG59KTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcblxuY29uc3QgcG9ydCA9IDUwMDA7XG5cbmFwcC5saXN0ZW4oXG4gIHsgcG9ydCB9LFxuICAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fSR7c2VydmVyLmdyYXBocWxQYXRofWApLFxuKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHNlcnZlci5zdG9wKCkpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1pbXBvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9