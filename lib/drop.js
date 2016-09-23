"use strict";

var drop = function drop(array) {
  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  var result = [];
  for (var i = n; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
module.exports = drop;