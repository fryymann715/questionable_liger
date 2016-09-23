"use strict";

var reverse = function reverse(array) {
  if (array instanceof Array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  } else {
    return array;
  }
};

module.exports = reverse;