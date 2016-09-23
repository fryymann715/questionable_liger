"use strict";

var concat = function concat(first) {
  for (var _len = arguments.length, second = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    second[_key - 1] = arguments[_key];
  }

  var result = [];

  if (first.constructor === Array) {
    for (var i = 0; i < first.length; i++) {
      result.push(first[i]);
    }
  } else {
    result.push(first);
  }

  if (second.constructor === Array) {
    for (var j = 0; j < second.length; j++) {
      result.push(second[j]);
    }
  } else {
    result.push(second);
  }
  return result;
};

module.exports = concat;