webpackHotUpdate("static/development/pages/products.js",{

/***/ "./src/components/Products/Body/Body.tsx":
/*!***********************************************!*\
  !*** ./src/components/Products/Body/Body.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/cartActions */ "./src/store/actions/cartActions.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Body = function Body(props) {
  var handleClick = function handleClick(product) {
    props.addToCart(product);
    alert('Item added to cart!');
  };

  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    className: "col-sm-12 col-lg-3 col-md-4 pb-1"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCard"], {
    className: "mb-lg-0 my-4",
    style: {
      maxHeight: '34rem'
    },
    cascade: true,
    ecommerce: true,
    wide: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCardImage"], {
    cascade: true,
    top: true,
    alt: "",
    src: props.obj.image,
    waves: true
  }), __jsx("hr", null), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCardBody"], {
    cascade: true,
    className: "text-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCardTitle"], null, __jsx("p", null, __jsx("strong", null, props.obj.name))), ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/product?id=".concat(props.obj.id),
    as: "/product/".concat(props.obj.id)
  }, __jsx("a", {
    className: "btn btn-primary mb-4"
  }, "More info")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], null, __jsx("span", {
    className: "float-left"
  }, "Price: \u20A6", ' ', props.obj.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')), __jsx("span", {
    className: "float-right"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    placement: "top"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBBtn"], {
    tag: "a",
    onClick: function onClick() {
      handleClick(props.obj);
    },
    size: "lg",
    className: "p-1 m-0 mr-2 z-depth-0"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBIcon"], {
    icon: "shopping-cart"
  }))))))));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(product) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(product));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Body)); // export default Body;

/***/ })

})
//# sourceMappingURL=products.js.b0990677c425df9aa13e.hot-update.js.map