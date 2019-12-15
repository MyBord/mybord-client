exports.id = "main";
exports.modules = {

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
  updateUser: (parent, { id, data }, { db }, info) => {
    const user = db.users.find((u) => u.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some((u) => u.email === data.email);

      if (emailTaken) {
        throw new Error('Email taken');
      }

      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2NoZW1hL3VzZXIvdXNlck11dGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFZDtBQUNmLDhCQUE4QixLQUFLO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsOENBQU07QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEIsS0FBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsR0FBRztBQUNILHdCQUF3QixXQUFXLEdBQUcsS0FBSztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUMsRUFBQyIsImZpbGUiOiJtYWluLjQ3ZWZjNDU1MWQ3ODlmYTlkZGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVVzZXI6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IGVtYWlsVGFrZW4gPSBkYi51c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBhcmdzLmRhdGEuZW1haWwpO1xuXG4gICAgaWYgKGVtYWlsVGFrZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgaXMgYWxyZWFkeSB0YWtlbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgLi4uYXJncy5kYXRhLFxuICAgIH07XG5cbiAgICBkYi51c2Vycy5wdXNoKHVzZXIpO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH0sXG4gIGRlbGV0ZVVzZXI6IChwYXJlbnQsIGFyZ3MsIHsgZGIgfSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHVzZXJJbmRleCA9IGRiLnVzZXJzLmZpbmRJbmRleCgodXNlcikgPT4gdXNlci5pZCA9PT0gYXJncy5pZCk7XG5cbiAgICBpZiAodXNlckluZGV4ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZWRVc2VyID0gZGIudXNlcnMuc3BsaWNlKHVzZXJJbmRleCwgMSk7XG5cbiAgICBkYi5wb3N0cyA9IGRiLnBvc3RzLmZpbHRlcigocG9zdCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSBwb3N0LmF1dGhvciA9PT0gYXJncy5pZDtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGRiLmNvbW1lbnRzID0gZGIuY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnBvc3QgIT09IHBvc3QuaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIW1hdGNoO1xuICAgIH0pO1xuXG4gICAgZGIuY29tbWVudHMgPSBkYi5jb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQuYXV0aG9yICE9PSBhcmdzLmlkKTtcblxuICAgIHJldHVybiBkZWxldGVkVXNlclswXTtcbiAgfSxcbiAgdXBkYXRlVXNlcjogKHBhcmVudCwgeyBpZCwgZGF0YSB9LCB7IGRiIH0sIGluZm8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gZGIudXNlcnMuZmluZCgodSkgPT4gdS5pZCA9PT0gaWQpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhLmVtYWlsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgZW1haWxUYWtlbiA9IGRiLnVzZXJzLnNvbWUoKHUpID0+IHUuZW1haWwgPT09IGRhdGEuZW1haWwpO1xuXG4gICAgICBpZiAoZW1haWxUYWtlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIHRha2VuJyk7XG4gICAgICB9XG5cbiAgICAgIHVzZXIuZW1haWwgPSBkYXRhLmVtYWlsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YS5uYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdXNlci5uYW1lID0gZGF0YS5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YS5hZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB1c2VyLmFnZSA9IGRhdGEuYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=