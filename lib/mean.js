"use strict";

var mean = function mean(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};
module.exports = mean;