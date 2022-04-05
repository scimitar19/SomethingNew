webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId].js":
/*!*****************************!*\
  !*** ./pages/[meetupId].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Sulejman\\Desktop\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId].js",
    _s = $RefreshSig$();




 // our-domain.com/detail-meetup

function MeetupDetailing(props) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(props.meetupData.title);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(MeetupDetailing, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MeetupDetailing;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailing); // return {
//   props: {
//     id: "m1",
//     image:
//       "https://www.thinkgeoenergy.com/wp-content/uploads/2017/09/LosAlamosNationalLab.jpg",
//     title: "Los Alamaos",
//     address: "1st NW avenue",
//     description: "This is the first meeetup",
//   },
// };
// paths: [
//   {
//     params: {
//       meetupId: "m1",
//     },
//   },
//   {
//     params: {
//       meetupId: "m2",
//     },
//   },
// ],

var _c;

$RefreshReg$(_c, "MeetupDetailing");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxpbmciLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUM5QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNLLFVBQU4sQ0FBaUJDLEtBQTdCO0FBQ0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFOLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVOLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVQLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkcsS0FEMUI7QUFFRSxXQUFLLEVBQUVSLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkMsS0FGMUI7QUFHRSxhQUFPLEVBQUVOLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkksT0FINUI7QUFJRSxpQkFBVyxFQUFFVCxLQUFLLENBQUNLLFVBQU4sQ0FBaUJFO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWpCUVIsZTtVQUNRRyxxRDs7O0tBRFJILGU7O0FBa0JNQSw4RUFBZixFLENBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uNTA0MzU4NmI0NGYxNTIxZmIxZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIG91ci1kb21haW4uY29tL2RldGFpbC1tZWV0dXBcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbGluZyhwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLm1lZXR1cERhdGEudGl0bGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxpbmc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3NvbWVQYXNzd29yZDpzb21lUGFzc3dvcmRAY2x1c3RlcjAubmh3bmIubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVJlYWRzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBtb25nb0NsaWVudC5kYigpO1xyXG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIC8vIGNvbnN0IGFsbFBhdGhzID0gYXdhaXQgY29sbGVjdGlvbnMuZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGNvbGxlY3Rpb25zLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgodmFsdWUpID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogdmFsdWUuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBhZ2VJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG5cclxuICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vc29tZVBhc3N3b3JkOnNvbWVQYXNzd29yZEBjbHVzdGVyMC5uaHduYi5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5UmVhZHM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG5cclxuICBjb25zdCBkYiA9IG1vbmdvQ2xpZW50LmRiKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBjb2xsZWN0aW9ucy5maW5kT25lKHsgX2lkOiBPYmplY3RJZChwYWdlSWQpIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE1lZXR1cCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHtcclxuLy8gICBwcm9wczoge1xyXG4vLyAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vd3d3LnRoaW5rZ2VvZW5lcmd5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9Mb3NBbGFtb3NOYXRpb25hbExhYi5qcGdcIixcclxuLy8gICAgIHRpdGxlOiBcIkxvcyBBbGFtYW9zXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIjFzdCBOVyBhdmVudWVcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGZpcnN0IG1lZWV0dXBcIixcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gcGF0aHM6IFtcclxuLy8gICB7XHJcbi8vICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgbWVldHVwSWQ6IFwibTJcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gXSxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==