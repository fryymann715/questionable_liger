"use strict";

var difference = function difference(arr1) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var differenceArray = [];

  var matchCheck = function matchCheck(val, arr) {
    var match = false;
    for (var i = 0; i < arr.length; i++) {

      if (val === arr[i]) {
        match = true;
        return match;
      }
    }
    return match;
  };
  for (var i = 0; i < values.length; i++) {
    if (values[i].constructor === Array) {

      for (var k = 0; k < arr1.length; k++) {
        if (!matchCheck(arr1[k], values[i])) {
          if (!matchCheck(arr1[k], differenceArray)) {
            differenceArray.push(arr1[k]);
          }
        }
      }

      for (var j = 0; j < values[i].length; j++) {
        if (!matchCheck(values[i][j], arr1)) {
          if (!matchCheck(values[i][j], differenceArray)) {
            differenceArray.push(values[i][j]);
          }
        }
      }
    } else {

      for (var _k = 0; _k < arr1.length; _k++) {
        if (!matchCheck(arr1[_k], values[i])) {
          if (!matchCheck(arr1[_k], differenceArray)) {
            differenceArray.push(arr1[_k]);
          }
        }
      }
      if (!matchCheck(values[i], arr1)) {
        if (!matchCheck(values[i], differenceArray)) {
          differenceArray.push(values[i]);
        }
      }
    }
  }

  return differenceArray;
};

module.exports = difference;