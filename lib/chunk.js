"use strict";

var chunk = function chunk(array) {
  var length = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  var resultArray = [];
  for (var i = 0; i < array.length; i = i + length) {
    var newArr = [];
    for (var j = 0; j < length; j++) {
      if (i + j < array.length) {
        newArr.push(array[i + j]);
      }
    }
    resultArray.push(newArr);
  }
  return resultArray;
};
module.exports = chunk;