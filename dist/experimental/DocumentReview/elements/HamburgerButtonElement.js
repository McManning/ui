"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Render a hamburger button that fires toggle events.
 * 
 * DOM based on https://jonsuh.com/hamburgers
 */
var HamburgerButtonElement = /*#__PURE__*/function () {
  function HamburgerButtonElement(document) {
    (0, _classCallCheck2.default)(this, HamburgerButtonElement);
    this.active = false; // Mmmm, hamburgers

    var button = document.createElement('button');
    button.classList.add('hamburger');
    button.classList.add('hamburger--arrow');
    button.type = 'button';
    button.setAttribute('aria-label', 'Menu');
    button.innerHTML = "\n            <span class=\"hamburger-box\">\n                <span class=\"hamburger-inner\"></span>\n            </span>\n        ";
    button.addEventListener('click', this.onToggle.bind(this));
    this.el = button;
  }

  (0, _createClass2.default)(HamburgerButtonElement, [{
    key: "onToggle",
    value: function onToggle() {
      this.isOpen = !this.isOpen;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.el.remove();
    }
  }, {
    key: "isOpen",
    set: function set(value) {
      this.active = value;

      if (value) {
        this.onOpen && this.onOpen();
        this.el.classList.add('is-active');
      } else {
        this.onClose && this.onClose();
        this.el.classList.remove('is-active');
      }
    },
    get: function get() {
      return this.active;
    }
  }]);
  return HamburgerButtonElement;
}();

exports.default = HamburgerButtonElement;