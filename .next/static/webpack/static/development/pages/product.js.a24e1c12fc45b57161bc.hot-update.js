webpackHotUpdate("static/development/pages/product.js",{

/***/ "./src/components/Products/Show/Table/Table.tsx":
/*!******************************************************!*\
  !*** ./src/components/Products/Show/Table/Table.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../axios-orders */ "./src/axios-orders.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Table = function Table(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var id = router.query.id;

  var deleted =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('jwtToken');
              _axios_orders__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"]("/product/".concat(id), {
                headers: {
                  Authorization: "".concat(token)
                }
              }).then(function () {
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/products');
              })["catch"](function (err) {
                return console.log(err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleted() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardImage"], {
    cascade: true,
    top: true,
    alt: "",
    src: props.obj.image,
    waves: true
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardBody"], {
    cascade: true,
    className: "text-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardTitle"], {
    tag: "h5"
  }, __jsx("strong", null, "Name: "), props.obj.name), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardTitle"], {
    tag: "h5"
  }, __jsx("strong", null, "Brand: "), props.obj.brand), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardTitle"], null, __jsx("span", {
    className: "float-left"
  }, __jsx("span", {
    className: "discount mx-2"
  }, "\u20A6 ", props.obj.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardText"], null, props.obj.description), props.userId === props.obj.owner && __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/edit?id=".concat(props.obj.id),
    as: "/edit/".concat(props.obj.id)
  }, __jsx("a", {
    className: "btn btn-primary btn-sm"
  }, "Edit")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBBtn"], {
    onClick: deleted,
    color: "danger btn-sm"
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=product.js.a24e1c12fc45b57161bc.hot-update.js.map