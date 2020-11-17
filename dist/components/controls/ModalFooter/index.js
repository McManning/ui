"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, children);
};

var _default = ModalFooter;
exports.default = _default;