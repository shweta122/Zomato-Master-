"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var MenuSchema = new _mongoose["default"].Schema({
  menus: [{
    name: {
      type: String,
      required: true
    },
    items: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Foods"
    }]
  }],
  recommended: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Foods",
    unique: true
  }]
}, {
  timestamps: true
});

var MenuModel = _mongoose["default"].model("Menu", MenuSchema);

exports.MenuModel = MenuModel;
