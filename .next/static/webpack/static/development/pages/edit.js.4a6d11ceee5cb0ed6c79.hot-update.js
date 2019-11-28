webpackHotUpdate("static/development/pages/edit.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./src/components/Navbar/Navbar.tsx":
false,

/***/ "./src/components/Products/Edit/Edit.tsx":
/*!***********************************************!*\
  !*** ./src/components/Products/Edit/Edit.tsx ***!
  \***********************************************/
/*! exports provided: EditProduct, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProduct", function() { return EditProduct; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../axios-orders */ "./src/axios-orders.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var EditProduct = function EditProduct(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      brand = _useState2[0],
      setBrand = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      price = _useState3[0],
      setPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      description = _useState5[0],
      setDescription = _useState5[1];

  var handleNameChange = function handleNameChange(event) {
    return setName(event.target.value);
  };

  var handleBrandChange = function handleBrandChange(event) {
    return setBrand(event.target.value);
  };

  var handlePriceChange = function handlePriceChange(event) {
    return setPrice(event.target.value);
  };

  var handleImageChange = function handleImageChange(event) {
    return setImage(event.target.value);
  };

  var handleDescriptionChange = function handleDescriptionChange(event) {
    return setDescription(event.target.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios_orders__WEBPACK_IMPORTED_MODULE_3__["default"].get("/products/".concat(id));

              case 3:
                response = _context.sent;
                setName(response.data.name);
                setBrand(response.data.brand);
                setPrice(response.data.price);
                setImage(response.data.image);
                setDescription(response.data.description);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [props]);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var obj, token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              obj = {
                name: name,
                brand: brand,
                price: price,
                image: image,
                description: description
              };
              token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('jwtToken');
              _context2.next = 5;
              return _axios_orders__WEBPACK_IMPORTED_MODULE_3__["default"].patch("/products/".concat(id), obj, {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 5:
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/products");

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBContainer"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBRow"], {
    className: "justify-content-center mt-5"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCol"], {
    md: "6"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCard"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCardBody"], null, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("p", {
    className: "h4 text-center py-1"
  }, "Edit Product"), __jsx("div", {
    className: "grey-text"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
    label: "Name",
    icon: "user",
    group: true,
    type: "text",
    value: name,
    onChange: handleNameChange,
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
    label: "Brand",
    icon: "mobile",
    group: true,
    type: "text",
    value: brand,
    onChange: handleBrandChange,
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
    label: "Price",
    icon: "tag",
    group: true,
    type: "number",
    value: price,
    onChange: handlePriceChange,
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
    label: "Image",
    icon: "image",
    group: true,
    type: "text",
    value: image,
    onChange: handleImageChange,
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBInput"], {
    label: "Description",
    icon: "pencil-alt",
    group: true,
    type: "text",
    value: description,
    onChange: handleDescriptionChange,
    validate: true
  })), __jsx("div", {
    className: "text-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBBtn"], {
    color: "cyan",
    type: "submit"
  }, "Edit Product")))))))), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ })

})
//# sourceMappingURL=edit.js.4a6d11ceee5cb0ed6c79.hot-update.js.map