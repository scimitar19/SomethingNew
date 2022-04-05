webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react/cjs/react.production.min.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, DUMMY_MEETUPS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUMMY_MEETUPS", function() { return DUMMY_MEETUPS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList.js */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Sulejman\\Desktop\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";
// our-domain.com


var __N_SSG = true;
const DUMMY_MEETUPS = [{
  id: "m1",
  image: "https://www.thinkgeoenergy.com/wp-content/uploads/2017/09/LosAlamosNationalLab.jpg",
  title: "Los Alamaos",
  address: "1st NW avenue",
  description: "This is the first meeetup"
}, {
  id: "m2",
  image: "https://besthqwallpapers.com/Uploads/12-1-2021/151409/thumb2-los-santos-4k-modern-buildings-american-cities-los-angeles.jpg",
  title: "Los Santos",
  address: "3rd W avenue",
  description: "This is the second meeetup"
}, {
  id: "m3",
  image: "http://www.godominicanrepublic.com/wp-content/uploads/2017/11/boca-chica-slide-1.jpg",
  title: "Boka Chica",
  address: "Main highway",
  description: "This is the third meeetup"
}];

function MainPage(kleps) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "The Main Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: kleps.dummyMeetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_c = MainPage;
/* harmony default export */ __webpack_exports__["default"] = (MainPage); // export async function getServerSideProps() {
//   return {
//     props: {
//       dummyMeetups: DUMMY_MEETUPS,
//     },
//   };
// }

var _c;

$RefreshReg$(_c, "MainPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1haW5QYWdlIiwia2xlcHMiLCJkdW1teU1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdPLE1BQU1BLGFBQWEsR0FBRyxDQUMzQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQ0gsb0ZBSEo7QUFJRUMsT0FBSyxFQUFFLGFBSlQ7QUFLRUMsU0FBTyxFQUFFLGVBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEMkIsRUFTM0I7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUNILDZIQUhKO0FBSUVDLE9BQUssRUFBRSxZQUpUO0FBS0VDLFNBQU8sRUFBRSxjQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVDJCLEVBaUIzQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQ0gsc0ZBSEo7QUFJRUMsT0FBSyxFQUFFLFlBSlQ7QUFLRUMsU0FBTyxFQUFFLGNBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FqQjJCLENBQXRCOztBQTJCUCxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyx5RUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7S0FQUUYsUTtBQVNNQSx1RUFBZixFLENBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxNzk3ZTU3MWIzZWE0NDI0NTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvdXItZG9tYWluLmNvbVxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanNcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnRoaW5rZ2VvZW5lcmd5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9Mb3NBbGFtb3NOYXRpb25hbExhYi5qcGdcIixcclxuICAgIHRpdGxlOiBcIkxvcyBBbGFtYW9zXCIsXHJcbiAgICBhZGRyZXNzOiBcIjFzdCBOVyBhdmVudWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGZpcnN0IG1lZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2Jlc3RocXdhbGxwYXBlcnMuY29tL1VwbG9hZHMvMTItMS0yMDIxLzE1MTQwOS90aHVtYjItbG9zLXNhbnRvcy00ay1tb2Rlcm4tYnVpbGRpbmdzLWFtZXJpY2FuLWNpdGllcy1sb3MtYW5nZWxlcy5qcGdcIixcclxuICAgIHRpdGxlOiBcIkxvcyBTYW50b3NcIixcclxuICAgIGFkZHJlc3M6IFwiM3JkIFcgYXZlbnVlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBzZWNvbmQgbWVlZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTNcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHA6Ly93d3cuZ29kb21pbmljYW5yZXB1YmxpYy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTEvYm9jYS1jaGljYS1zbGlkZS0xLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiQm9rYSBDaGljYVwiLFxyXG4gICAgYWRkcmVzczogXCJNYWluIGhpZ2h3YXlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHRoaXJkIG1lZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTWFpblBhZ2Uoa2xlcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aDE+VGhlIE1haW4gUGFnZTwvaDE+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2tsZXBzLmR1bW15TWVldHVwc30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3NvbWVQYXNzd29yZDpzb21lUGFzc3dvcmRAY2x1c3RlcjAubmh3bmIubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVJlYWRzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IG1vbmdvQ2xpZW50LmRiKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAvLyBjb25zdCBhbGxEYXRhID0gYXdhaXQgY29sbGVjdGlvbnMuanNvbigpO1xyXG4gIGNvbnN0IGFsbERhdGEgPSBhd2FpdCBjb2xsZWN0aW9ucy5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBtb25nb0NsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZHVtbXlNZWV0dXBzOiBEVU1NWV9NRUVUVVBTIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgZHVtbXlNZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=