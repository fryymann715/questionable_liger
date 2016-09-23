"use strict";

var indexOf = function indexOf(array, arg) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === arg) {
      return i;
    }
  }
};

module.exports = indexOf;