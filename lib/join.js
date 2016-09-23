'use strict';

var join = function join(array) {
  var separator = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var result = '';
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      result = result + separator + array[i];
    } else {
      result = result + array[i];
    }
  }
  return result;
};

module.exports = join;