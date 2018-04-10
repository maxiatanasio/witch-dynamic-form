"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicForm = function (_React$Component) {
  _inherits(DynamicForm, _React$Component);

  function DynamicForm(props) {
    _classCallCheck(this, DynamicForm);

    var _this = _possibleConstructorReturn(this, (DynamicForm.__proto__ || Object.getPrototypeOf(DynamicForm)).call(this, props));

    _this.state = {};
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(DynamicForm, [{
    key: "onInputChange",
    value: function onInputChange(e) {
      console.log(e.target.name);
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      if (this.props.onFormSubmit) this.props.onFormSubmit(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "form",
        { onSubmit: this.onSubmit },
        this.props.model.map(function (inputItem) {
          return _react2.default.createElement(
            "div",
            { key: inputItem.name, className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              inputItem.name
            ),
            _react2.default.createElement("input", {
              type: inputItem.type,
              name: inputItem.name,
              onChange: _this2.onInputChange,
              placeholder: inputItem.name
            })
          );
        }),
        _react2.default.createElement(
          "div",
          { className: "form-group" },
          _react2.default.createElement(
            "button",
            null,
            "Confirm"
          )
        )
      );
    }
  }]);

  return DynamicForm;
}(_react2.default.Component);

exports.default = DynamicForm;