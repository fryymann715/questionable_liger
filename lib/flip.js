"use strict";

var flip = function flip(func) {
  var revFunc = func;
  var reversedResults = [];

  if (revFunc.length > 1) {
    if (revFunc.constructor === Array) {
      for (var x = revFunc.length - 1; x >= 0; x--) {

        reversedResults.push(revFunc[x]);
      }
      return reversedResults;
    } else if (revFunc.constructor === String) {
      var newString = "";
      for (var _x = revFunc.length - 1; _x >= 0; _x--) {
        newString += revFunc[_x];
      }
      return newString;
    }
  } else {
    return revFunc;
  }
};

module.exports = flip;