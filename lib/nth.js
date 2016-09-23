"use strict";

var nth = function nth(array) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  if (index < 0) {
    return array[array.length + index];
  } else {
    return array[index];
  }
};

module.exports = nth;