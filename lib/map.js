"use strict";

var map = function map(collection, iteratee) {
  var result = [];
  if (iteratee.constructor === Function) {

    if (collection.constructor === Array) {
      return iterateArray(collection, iteratee, result);
    } else if (collection.constructor === Object) {
      return iterateObjects(collection, iteratee, result);
    } else {
      return undefined;
    }
  } else {
    if (collection.length > 1) {
      for (var i = 0; i < collection.length; i++) {
        var collectionKeys = Object.keys(collection[i]);

        for (var x = 0; x < collectionKeys.length; x++) {
          if (collectionKeys[x] === iteratee) {
            result.push(collection[i][collectionKeys[x]]);
          }
        }
      }
    } else {
      var _collectionKeys = Object.keys(collection);

      for (var _x = 0; _x < _collectionKeys.length; _x++) {
        if (_collectionKeys[_x] === iteratee) {
          result.push(collection[_collectionKeys[_x]]);
        }
      }
    }
    return result;
  }
};

var iterateArray = function iterateArray(collection, iteratee, result) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;

      result.push(iteratee(x));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var iterateObjects = function iterateObjects(collection, iteratee, result) {
  var collectionKeys = Object.keys(collection);
  for (var x = 0; x < collectionKeys.length; x++) {
    result.push(iteratee(collection[collectionKeys[x]]));
  }
  return result;
};

module.exports = map;