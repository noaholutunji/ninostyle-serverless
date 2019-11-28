webpackHotUpdate("static/development/pages/product.js",{

/***/ "./src/components/Products/Show/Show.tsx":
/*!***********************************************!*\
  !*** ./src/components/Products/Show/Show.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../axios-orders */ "./src/axios-orders.ts");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table/Table */ "./src/components/Products/Show/Table/Table.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Products = function Products(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      product = _useState[0],
      setProduct = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      user = _useState2[0],
      setUser = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var authUser = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('user');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    _axios_orders__WEBPACK_IMPORTED_MODULE_1__["default"].get("/product/".concat(id)).then(function (response) {
      setProduct(response.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);

  var tabRow = function tabRow() {
    // console.log(user.id);
    return product && __jsx(_Table_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      obj: product,
      userId: user && user.id,
      key: product.id
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "mt-5 container"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
    className: "justify-content-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCard"], {
    className: "m-2 mx-3 justify-content-center",
    style: {
      width: '20rem'
    },
    cascade: true,
    ecommerce: true
  }, tabRow()))));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=product.js.68683295e6cacd59ee53.hot-update.js.map