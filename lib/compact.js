'use strict';

var compact = function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    switch (array[i]) {
      case null:
      case undefined:
      case '':
      case false:
      case 0:
        break;
      default:
        result.push(array[i]);
    }
  }
  return result;
};

module.exports = compact;