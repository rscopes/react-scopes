/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ReactHocs.js":
/*!**************************!*\
  !*** ./src/ReactHocs.js ***!
  \**************************/
/*! exports provided: default, RS, reScope, withScope, scopeToState, toState, scopeToProps, toProps, connect, propsToScope, fromProps, propsToStore, Store, Scope, asStore, asScope, asRef, withStateMap, store, scope, ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RS", function() { return reScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reScope", function() { return reScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return reScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeToState", function() { return scopeToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return scopeToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeToProps", function() { return scopeToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toProps", function() { return scopeToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return scopeToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsToScope", function() { return propsToScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromProps", function() { return propsToScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsToStore", function() { return propsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStore", function() { return asStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asScope", function() { return asScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRef", function() { return asRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateMap", function() { return withStateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return asStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return asScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return asRef; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "undefined?e4e5");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "undefined?56eb");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "undefined?df9b");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rescope */ "undefined?8e7d");
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rescope__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return rescope__WEBPACK_IMPORTED_MODULE_12__["Store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"]; });

/* harmony import */ var rescope_spells__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rescope-spells */ "undefined?20be");
/* harmony import */ var rescope_spells__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rescope_spells__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./src/utils.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */





var SimpleObjectProto = {}.constructor;

var _createContext = Object(react__WEBPACK_IMPORTED_MODULE_11__["createContext"])(rescope__WEBPACK_IMPORTED_MODULE_12__["Store"].staticScope),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var classIcons = {
  toProps: String.fromCharCode(0x26A1),
  fromProps: '',
  //String.fromCharCode(0x270D),
  rs: String.fromCharCode(0xD83D, 0xDD17)
};
/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the
 * instances props.
 *  - Propag (scope) in the returned React Component context
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
 *     searched ( default : the default ReScope::Scope::scopes.static scope )
 * @param use {array} the list of stores to inject from the current scope
 * @returns {ReScopeProvider}
 */

function scopeToProps() {
  var _class, _temp;

  for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
    argz[_key] = arguments[_key];
  }

  var BaseComponent = (!argz[0] || Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isReactRenderable"])(argz[0])) && argz.shift(),
      scope = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift(),
      use = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_10___default.a.array(argz[0]) || argz[0] instanceof SimpleObjectProto) && argz.shift();

  if (!use) {
    use = [];

    while (is__WEBPACK_IMPORTED_MODULE_10___default.a.string(argz[0])) {
      use.push(argz.shift());
    }
  }

  if (!BaseComponent) {
    return function (BaseComponent) {
      return scopeToProps(BaseComponent, scope, use);
    };
  }

  var compName = BaseComponent.displayName || BaseComponent.name;
  var PropsProvider = scopeToState((_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(scopeToPropsProvider, _React$Component);

    function scopeToPropsProvider() {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, scopeToPropsProvider);

      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(scopeToPropsProvider).apply(this, arguments));
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(scopeToPropsProvider, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(BaseComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, this.props, this.state, {
          ref: this.props.forwardedRef,
          $dispatch: this.$dispatch,
          $actions: this.$actions,
          $scope: this.$scope,
          $stores: this.$stores
        }));
      }
    }]);

    return scopeToPropsProvider;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component), _class._originComponent = BaseComponent._originComponent || BaseComponent, _class.displayName = classIcons.toProps + compName, _temp), is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope) && scope, use);
  var withRef = react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(PropsProvider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
      forwardedRef: ref
    }));
  });
  withRef.displayName = classIcons.toProps + compName;
  withRef._originComponent = BaseComponent;
  withRef = (scope || !BaseComponent._originComponent) && reScope(!is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope) && scope)(withRef) || withRef;
  return withRef;
}
/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inherit BaseComponent,
 *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances
 * state.
 *  - Propag (scope) in the returned React Component context
 *
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
 *     searched
 * @param use {array} the list of stores injected from the current scope
 * @param additionalContext {Object} context to be propagated
 * @returns {ReScopeProvider}
 */


function scopeToState() {
  for (var _len2 = arguments.length, argz = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    argz[_key2] = arguments[_key2];
  }

  var BaseComponent = (!argz[0] || Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isReactRenderable"])(argz[0])) && argz.shift(),
      scope = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift(),
      use = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_10___default.a.array(argz[0])) && argz.shift(),
      stateMap = !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
      initialState = {};

  if (!use && is__WEBPACK_IMPORTED_MODULE_10___default.a.string(argz[0])) {
    use = [];

    while (is__WEBPACK_IMPORTED_MODULE_10___default.a.string(argz[0])) {
      use.push(argz.shift());
    }
  }

  if (!BaseComponent) {
    return function (BaseComponent) {
      return scopeToState(BaseComponent, scope, use, stateMap);
    };
  }

  var compName = BaseComponent.displayName || BaseComponent.name;
  use = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(BaseComponent.use || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(use || []));
  stateMap && rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].stateMapToRefList(stateMap, initialState, use);

  var ReScopeProvider =
  /*#__PURE__*/
  function (_BaseComponent) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ReScopeProvider, _BaseComponent);

    function ReScopeProvider(p, ctx, q) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ReScopeProvider);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ReScopeProvider).call(this, p, ctx, q));

      _this._scopeWillUpdate = function (state) {
        // trigger update hook
        _this.scopeWillUpdate && _this.scopeWillUpdate(state, _this.$stores);
        if (_this.applyScopeUpdate) state = _this.applyScopeUpdate(state, _this.$stores);

        _this.setState(state);
      };

      if (is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope)) {
        _this.$scope = scope(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), _this.props, {
          rescope: p.$scope
        });
      } else _this.$scope = p.$scope;

      if (_this.$scope && _this.$scope.dead) {
        console.error("ReScoping using dead scope !");
        _this.$scope = null;
      }

      debugger;
      _this.$stores = _this.$scope && _this.$scope.stores;
      _this.$actions = _this.$scope && _this.$scope.actions;

      if (_this.$scope && use.length) {
        _this.state = _objectSpread({}, _this.state, {}, initialState, {}, _this.$scope.map(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), use, false));
      } else if (!_this.$scope) console.warn("No Scope found in ".concat(compName));

      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ReScopeProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (use.length) {
          this.$scope && this.$scope.bind(this._scopeWillUpdate, use, false);
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ReScopeProvider.prototype), "componentDidMount", this) && _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ReScopeProvider.prototype), "componentDidMount", this).call(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(props) {
        var nScope = props.$scope;

        if (nScope !== this.$scope) {
          if (is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope)) nScope = scope(this, this.props, {
            rescope: nScope
          });
          use.length && this.$scope.unBind(this._scopeWillUpdate, use);
          this.$scope = nScope;

          if (this.$scope && this.$scope.dead) {
            console.error("ReScoping using dead scope");
            this.$actions = this.$stores = this.$scope = null;
          } else {
            this.$actions = this.$scope.actions;
            this.$stores = this.$scope.stores;
            use.length && nScope.bind(this._scopeWillUpdate, use);
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ReScopeProvider.prototype), "componentWillUnmount", this) && _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ReScopeProvider.prototype), "componentWillUnmount", this).call(this);

        if (this.$scope && !this.$scope.dead) {
          use.length && this.$scope.unBind(this._scopeWillUpdate, use);
        }
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var nScope = props.$scope;

        if (nScope) {
          if (use.length) return nScope.map(this, use, false);
        }

        return null;
      }
    }]);

    return ReScopeProvider;
  }(BaseComponent);

  ReScopeProvider._originComponent = BaseComponent._originComponent || BaseComponent;
  ReScopeProvider.defaultProps = _objectSpread({}, BaseComponent.defaultProps || {});
  ReScopeProvider.displayName = compName;
  ;
  return (scope || !BaseComponent._originComponent) && reScope(!is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope) && scope)(ReScopeProvider) || ReScopeProvider;
}
/**
 * Return a React "HOC" (High Order Component) that :
 *  - Render BaseComponent with new scope that inherit the given scope or context scope
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */


function reScope() {
  for (var _len3 = arguments.length, argz = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    argz[_key3] = arguments[_key3];
  }

  var BaseComponent = (!argz[0] || Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isReactRenderable"])(argz[0])) && argz.shift(),
      scope = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift(),
      scoped = (!argz[0] || argz[0] instanceof SimpleObjectProto && !rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift(),
      scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};

  if (!BaseComponent) {
    return function (BaseComponent) {
      return reScope(BaseComponent, scope, scoped, scopeCfg);
    };
  }

  var compName = BaseComponent.displayName || BaseComponent.name;

  var ScopeProvider =
  /*#__PURE__*/
  function (_React$Component2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ScopeProvider, _React$Component2);

    function ScopeProvider() {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ScopeProvider);

      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ScopeProvider).apply(this, arguments));
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ScopeProvider, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.$scope && this.$scope.dispose("hoc");
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var forcedScope = scope || this.props.$scope;

        if (forcedScope) {
          if (!this.$scope || forcedScope !== this.$scope.parent) {
            this.$scope && this.$scope.dispose("hoc");
            this.$scope = forcedScope;
            this.$scope && this.$scope.retain("hoc");
          }

          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Provider, {
            value: this.$scope
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(BaseComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, this.props, {
            ref: this.props.forwardedRef,
            $actions: this.$scope.actions,
            $scope: this.$scope,
            $stores: this.$scope.stores
          })));
        }

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Consumer, null, function (nScope) {
          nScope = nScope || rescope__WEBPACK_IMPORTED_MODULE_12__["Store"].staticScope;

          if (nScope && (!_this2.$scope || nScope !== _this2.$scope.parent)) {
            _this2.$scope && _this2.$scope.dispose("hoc");
            nScope = new rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"](scoped || {}, _objectSpread({
              autoDestroy: 'inherit',
              key: compName,
              parent: nScope
            }, scopeCfg));
            _this2.$scope = nScope;
            _this2.$scope && _this2.$scope.retain("hoc");
          }

          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Provider, {
            value: _this2.$scope
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(BaseComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, _this2.props, {
            ref: _this2.props.forwardedRef,
            $actions: _this2.$scope.actions,
            $scope: _this2.$scope,
            $stores: _this2.$scope.stores
          })));
        });
      }
    }]);

    return ScopeProvider;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

  ScopeProvider._originComponent = BaseComponent._originComponent || BaseComponent;
  ScopeProvider.displayName = classIcons.rs + compName;
  var withRef = react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScopeProvider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
      forwardedRef: ref
    }));
  });
  withRef.displayName = classIcons.rs + compName;
  withRef._originComponent = BaseComponent;
  return withRef;
}
/**
 * Map specified props to
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */


function propsToScope() {
  for (var _len4 = arguments.length, argz = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    argz[_key4] = arguments[_key4];
  }

  var BaseComponent = (!argz[0] || Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isReactRenderable"])(argz[0])) && argz.shift(),
      scopedProps = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_10___default.a.array(argz[0])) && argz.shift() || [];

  if (!scopedProps.length) {
    scopedProps = [];

    while (is__WEBPACK_IMPORTED_MODULE_10___default.a.string(argz[0])) {
      scopedProps.push(argz.shift());
    }
  }

  var scope = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift(),
      scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};

  if (!BaseComponent) {
    return function (BaseComponent) {
      return propsToScope(BaseComponent, scopedProps, scope, scopeCfg);
    };
  }

  var compName = BaseComponent.displayName || BaseComponent.name,
      refList = scopedProps.map(_utils__WEBPACK_IMPORTED_MODULE_14__["parseRef"]);

  var ScopeProvider =
  /*#__PURE__*/
  function (_React$Component3) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ScopeProvider, _React$Component3);

    function ScopeProvider(props) {
      var _this3;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ScopeProvider);

      _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ScopeProvider).apply(this, arguments));

      if (props.$scope) {
        props.$scope.wait("Comp init");
      } else {
        console.error("RS.fromProps without $scope");
      }

      return _this3;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ScopeProvider, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return shallowCompare(nextProps, this.props); // todo: why the fuck it's required ?
      }
    }, {
      key: "render",
      value: function render() {
        var props = this.props;
        refList.forEach(function (ref) {
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_14__["walknGet"])(props, ref.pathFrom) !== Object(_utils__WEBPACK_IMPORTED_MODULE_14__["walknGet"])(props.$scope.state, ref.pathTo)) props.$scope.state[ref.pathTo[0]] = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["walknSet"])({}, ref.pathTo.slice(1), Object(_utils__WEBPACK_IMPORTED_MODULE_14__["walknGet"])(props, ref.pathFrom));
        });

        if (!this._firstRender) {
          this._firstRender = true;
          props.$scope.release("Comp init");
        }

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(BaseComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
          ref: props.forwardedRef
        }));
      }
    }]);

    return ScopeProvider;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

  ScopeProvider._originComponent = BaseComponent._originComponent || BaseComponent;
  ScopeProvider.defaultProps = _objectSpread({}, BaseComponent.defaultProps || {});
  ScopeProvider.displayName = classIcons.fromProps + compName;
  var withRef = react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScopeProvider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
      forwardedRef: ref
    }));
  });
  withRef.displayName = classIcons.fromProps + compName;
  withRef._originComponent = BaseComponent;
  withRef = (scope || !BaseComponent._originComponent) && reScope(!is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope) && scope)(withRef) || withRef;
  return withRef;
}
/**
 * Bind a component props to the specified store,
 * render with the specified store result data
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */


function propsToStore() {
  for (var _len5 = arguments.length, argz = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    argz[_key5] = arguments[_key5];
  }

  var BaseComponent = (!argz[0] || Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isReactRenderable"])(argz[0])) && argz.shift(),
      storeComp = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Store"].isStore(argz[0])) && argz.shift() || rescope__WEBPACK_IMPORTED_MODULE_12__["Store"],
      storeName = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_10___default.a.string(argz[0])) && argz.shift() || storeComp.displayName || "props",
      scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {},
      scope = (!argz[0] || rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].isScope(argz[0])) && argz.shift();

  if (!BaseComponent) {
    return function (BaseComponent) {
      return propsToStore(BaseComponent, storeComp, storeName, scopeCfg, scope);
    };
  }

  var compName = BaseComponent.displayName || BaseComponent.name;

  var ScopeProvider =
  /*#__PURE__*/
  function (_React$Component4) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ScopeProvider, _React$Component4);

    function ScopeProvider() {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ScopeProvider);

      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ScopeProvider).apply(this, arguments));
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ScopeProvider, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.$scope && this.$scope.dispose("hoc");
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Consumer, null, function (nScope) {
          nScope = scope || _this4.props.$scope || nScope || rescope__WEBPACK_IMPORTED_MODULE_12__["Store"].staticScope;

          if (nScope && (!_this4.$scope || nScope !== _this4.$scope.parent)) {
            _this4.$scope && _this4.$scope.dispose("hoc");
            nScope = new rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"](_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, storeName, storeComp), _objectSpread({
              autoDestroy: 'inherit',
              key: compName,
              parent: nScope
            }, scopeCfg));
            _this4.$scope = nScope;
            _this4.$scope && _this4.$scope.retain("hoc");
          }

          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Provider, {
            value: _this4.$scope
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(BaseComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, _this4.props, {
            ref: _this4.props.forwardedRef,
            $dispatch: _this4.$scope.dispatch,
            $actions: _this4.$scope.actions,
            $scope: _this4.$scope,
            $stores: _this4.$scope.stores
          })));
        });
      }
    }]);

    return ScopeProvider;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

  ScopeProvider._originComponent = BaseComponent._originComponent || BaseComponent;
  ScopeProvider.displayName = classIcons.fromProps + compName;
  var withRef = react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScopeProvider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
      forwardedRef: ref
    }));
  });
  withRef.displayName = classIcons.fromProps + compName;
  withRef._originComponent = BaseComponent;
  withRef = (scope || !BaseComponent._originComponent) && reScope(!is__WEBPACK_IMPORTED_MODULE_10___default.a.fn(scope) && scope)(withRef) || withRef;
  return withRef;
}

reScope.withScope = reScope;
reScope.toState = scopeToState;
reScope.scopeToState = scopeToState;
reScope.scopeToProps = scopeToProps;
reScope.toProps = scopeToProps;
reScope.connect = scopeToProps;
reScope.propsToScope = propsToScope;
reScope.fromProps = propsToScope;
reScope.propsToStore = propsToStore;
reScope.Store = rescope__WEBPACK_IMPORTED_MODULE_12__["Store"];
reScope.Scope = rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"];
var asStore = rescope_spells__WEBPACK_IMPORTED_MODULE_13___default.a.asStore,
    asScope = rescope_spells__WEBPACK_IMPORTED_MODULE_13___default.a.asScope,
    asRef = rescope_spells__WEBPACK_IMPORTED_MODULE_13___default.a.asRef,
    withStateMap = rescope_spells__WEBPACK_IMPORTED_MODULE_13___default.a.withStateMap;
reScope.store = asStore;
reScope.scope = asScope;
reScope.ref = asRef;
reScope.asStore = asStore;
reScope.asScope = asScope;
reScope.asRef = asRef;
reScope.withStateMap = withStateMap;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescope */ "undefined?8e7d");
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rescope__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in rescope__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return rescope__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ReactHocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactHocs */ "./src/ReactHocs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RS", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["RS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reScope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["reScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopeToState", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["scopeToState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["toState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopeToProps", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["scopeToProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toProps", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["toProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["connect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propsToScope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["propsToScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromProps", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["fromProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propsToStore", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["propsToStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["Store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asStore", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["asStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asScope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["asScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asRef", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["asRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStateMap", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["withStateMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _ReactHocs__WEBPACK_IMPORTED_MODULE_1__["ref"]; });

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */



/* harmony default export */ __webpack_exports__["default"] = (_ReactHocs__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: walknSet, walknGet, parseRef, isReactRenderable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walknSet", function() { return walknSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walknGet", function() { return walknGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRef", function() { return parseRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactRenderable", function() { return isReactRenderable; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function walknSet(obj, path, value, stack) {
  if (is__WEBPACK_IMPORTED_MODULE_1___default.a.string(path)) path = path.split('.');
  if (!path.length) return value;else if (path.length == 1) {
    obj[path[0]] = stack ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj[path[0]] || []), [value]) : value;
    return obj;
  } else return walknSet(obj[path[0]] = obj[path[0]] || {}, path.slice(1), value, stack) && obj || obj;
}
function walknGet(obj, path, isKey) {
  if (is__WEBPACK_IMPORTED_MODULE_1___default.a.string(path)) path = path.split('.');
  return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
}
function parseRef(_ref) {
  var ref = _ref.split(':');

  ref[0] = ref[0].split('.');
  ref[1] = ref[1] && ref[1].split('.');
  return {
    pathFrom: ref[0],
    pathTo: ref[1] || [ref[0][ref[0].length - 1]]
  };
}
function isReactRenderable(obj) {
  return obj.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || obj === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || obj.$$typeof || is__WEBPACK_IMPORTED_MODULE_1___default.a.fn(obj);
}

function shallowCompare(partialState, state) {
  return !!Object.keys(partialState).find(function (key) {
    return partialState[key] !== state[key];
  });
}

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi react-scopes/index ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! react-scopes/index */"./src/index.js");


/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?188d":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?20be":
/*!*********************************!*\
  !*** external "rescope-spells" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rescope-spells");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?56eb":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/get" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?8e7d":
/*!**************************!*\
  !*** external "rescope" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rescope");

/***/ }),

/***/ "undefined?df9b":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "undefined?e4e5":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ })

/******/ });
//# sourceMappingURL=react-scopes.js.map