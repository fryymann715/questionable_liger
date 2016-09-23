"use strict";

var fromPairs = function fromPairs(pairs) {

  var result = new Object();
  for (var pair = 0; pair < pairs.length; pair++) {
    var array = pairs[pair];
    var key = array[0];
    var value = array[1];

    result[key] = value;
  }
  return result;
};

module.exports = fromPairs;