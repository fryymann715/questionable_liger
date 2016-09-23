"use strict";

var zip = function zip() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var result = [];
  var max = maxLength(arrays);

  for (var index = 0; index < max; index++) {

    var temp = [];

    for (var arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++) {
      if (arrays[arrayIndex] instanceof Array) {
        temp.push(arrays[arrayIndex][index]);
      }
    }
    result.push(temp);
  }
  return result;
};

var maxLength = function maxLength(arrays) {
  var max = arrays[0].length || 0;
  for (var index = 1; index < arrays.length; index++) {
    if (arrays[index].length > max) {
      max = arrays[index].length;
    }
  }
  return max;
};

module.exports = zip;