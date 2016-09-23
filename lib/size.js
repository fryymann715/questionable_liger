"use strict";

var size = function size(collection) {
  var count = 0;
  for (var item in collection) {
    count++;
  }
  return count;
};

module.exports = size;