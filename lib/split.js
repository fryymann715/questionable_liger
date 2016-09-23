"use strict";

var split = function split(string) {
  var letters = [];
  for (var i = 0; i < string.length; i++) {
    letters.push(string[i]);
  }

  return letters;
};
module.exports = split;