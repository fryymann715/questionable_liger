'use strict';

var reduceRight = function reduceRight(collection, itaratee) {
  var acc = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

  if (acc === '') {
    var accumulator = collection[collection.length - 1];
    for (var i = collection.length - 2; i > -1; i--) {
      accumulator = itaratee(accumulator, collection[i]);
    }
    return accumulator;
  } else {
    var _accumulator = acc;
    for (var _i = collection.length - 1; _i > -1; _i--) {
      _accumulator = itaratee(_accumulator, collection[_i]);
    }
    return _accumulator;
  }
};
module.exports = reduceRight;