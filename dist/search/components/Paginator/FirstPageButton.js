"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FirstPageButton;

var _react = _interopRequireDefault(require("react"));

function FirstPageButton(_ref) {
  var ctx = _ref.ctx;
  var noPreviousPage = ctx.offset === 0;

  var goToFirstPage = function goToFirstPage() {
    return ctx.setOffset(0);
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "page-item page-navigation ".concat(noPreviousPage ? 'disabled' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "page-link",
    "aria-label": "First",
    title: "First",
    onClick: goToFirstPage,
    disabled: noPreviousPage
  }, "\xAB"));
}