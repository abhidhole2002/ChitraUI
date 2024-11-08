"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Button.jsx

var Button = exports.Button = function Button() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  }, "Updated ui");
};