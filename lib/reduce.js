'use strict';

var reduce = function reduce(collection, itaratee) {
  var acc = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

  if (acc === '') {
    var accumulator = collection[0];
    for (var i = 1; i < collection.length; i++) {
      accumulator = itaratee(accumulator, collection[i]);
    }
    return accumulator;
  } else {
    var _accumulator = acc;
    for (var _i = 0; _i < collection.length; _i++) {
      _accumulator = itaratee(_accumulator, collection[_i]);
    }
    return _accumulator;
  }
};
module.exports = reduce;