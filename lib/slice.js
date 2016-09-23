"use strict";

var slice = function slice(array) {
  var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var end = arguments.length <= 2 || arguments[2] === undefined ? array.length : arguments[2];

  var sliceArray = [];
  for (var i = start; i < end; i++) {
    sliceArray.push(array[i]);
  }
  return sliceArray;
};
module.exports = slice;