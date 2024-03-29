"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var ReviewSchema = _mongoose["default"].Schema({
  food: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Foods"
  },
  restaurant: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Restaurants"
  },
  user: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Users"
  },
  rating: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  isRestaurantReview: Boolean,
  isFoodReview: Boolean,
  photos: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  }]
}, {
  timestamps: true
});

var ReviewModel = _mongoose["default"].model("Reviews", ReviewSchema);

exports.ReviewModel = ReviewModel;
