"use strict";

var take = function take(array) {
    var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    var result = [];

    for (var i = 0; i < n; i++) {
        result.push(array[i]);
    }

    return result;
};
module.exports = take;