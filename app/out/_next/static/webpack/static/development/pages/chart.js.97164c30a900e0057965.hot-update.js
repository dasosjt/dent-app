webpackHotUpdate("static/development/pages/chart.js",{

/***/ "./pages/chart.jsx":
/*!*************************!*\
  !*** ./pages/chart.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_headerlayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/headerlayout */ "./components/headerlayout.jsx");
/* harmony import */ var _components_filterpie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/filterpie */ "./components/filterpie.jsx");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/css */ "./components/css.jsx");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");

var _jsxFileName = "/home/dsosa/Documents/dent-app/app/pages/chart.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var menuItems = [{
  title: 'Edad',
  filter: 'age'
}, {
  title: 'Género',
  filter: 'gender'
}, {
  title: 'Única-Multiple',
  filter: 'op1'
}, {
  title: 'Unilocular-Multilocular',
  filter: 'op2'
}, {
  title: 'Formas',
  filter: 'form'
}, {
  title: 'Bordes',
  filter: 'op3'
}, {
  title: 'Localización',
  filter: 'location_sub'
}, {
  title: 'Tipo Localización',
  filter: 'location_div'
}, {
  title: 'Localización Blando',
  filter: 'location_div_0'
}, {
  title: 'Localización Duro',
  filter: 'location_div_1'
}, {
  title: 'Localización Aeréo',
  filter: 'location_div_2'
}, {
  title: 'Prueba',
  filter: 'location_maxilar_position'
}, {
  title: 'Asociada',
  filter: 'op4'
}, {
  title: 'Asociada Pieza Dental',
  filter: 'op4_super'
}, {
  title: 'Reabsorción',
  filter: 'op5'
}, {
  title: 'Reabsorción Tipo',
  filter: 'op5_type'
}, {
  title: 'Desplazamiento',
  filter: 'op6'
}, {
  title: 'Expansión de Corticales',
  filter: 'op7'
}, {
  title: 'Pieza Incluida',
  filter: 'op8'
}, {
  title: 'Asociada Pieza Incluida',
  filter: 'op8_super'
}, {
  title: 'Desplazamiento Pieza Dental',
  filter: 'op6_super'
}, {
  title: 'Tipo de Registro',
  filter: 'register'
}, {
  title: 'Diagnóstico Diferencial 1',
  filter: 'dif1'
}, {
  title: 'Diagnóstico Diferencial 2',
  filter: 'dif2'
}, {
  title: 'Diagnóstico Diferencial 3',
  filter: 'dif3'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__["withAuthSync"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  var title = props.router.query.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(menuItems[0].filter),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var getData = function getData() {
    return fetch("http://127.0.0.1:5000/injury/".concat(title, "/").concat(filter)).then(function (response) {
      return response.json();
    }).then(function (data) {
      setData(data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getData();
  }, [filter]);

  var handleItemClick =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, _ref) {
      var name;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name;
              setFilter(name);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleItemClick(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_css__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headerlayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headerTitle: title.charAt(0).toUpperCase() + title.slice(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    inverted: true,
    color: "purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    pointing: true,
    secondary: true,
    vertical: true,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, menuItems && menuItems.length > 0 ? menuItems.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      key: key,
      name: item.filter,
      active: filter === item.filter,
      onClick: handleItemClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, item.title);
  }) : null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    stretched: true,
    width: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    inverted: true,
    color: "purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_filterpie__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Fuente: examen radiol\xF3gico, fase III Dx, FOUSAC")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })));
})));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/chart")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=chart.js.97164c30a900e0057965.hot-update.js.map