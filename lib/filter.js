'use strict';

var identity = function identity(a) {
  return a;
};

var filter = function filter(collection) {
  var predicate = arguments.length <= 1 || arguments[1] === undefined ? identity : arguments[1];

  if (collection === null || collection === undefined) {
    return undefined;
  }

  var fn = normalizePredicate(predicate);

  return filterObject(collection, fn);
};

var filterObject = function filterObject(object, predicate) {
  var result = [];

  for (var key in object) {
    if (predicate(object[key], key, object)) {
      result.push(object[key]);
    }
  }

  return result;
};

var arrayPredicate = function arrayPredicate(predicate) {
  return function (object) {
    return object[predicate[0]] === predicate[1];
  };
};

var objectPredicate = function objectPredicate(predicate) {
  return function (object) {
    return Object.keys(predicate).reduce(function (memo, key) {
      return memo && object[key] === predicate[key];
    }, true);
  };
};

var stringPredicate = function stringPredicate(predicate) {
  return function (object) {
    return object[predicate] === true;
  };
};

var normalizePredicate = function normalizePredicate(predicate) {
  if (typeof predicate === 'function') {
    return predicate;
  } else if (predicate instanceof Array) {
    return arrayPredicate(predicate);
  } else if (typeof predicate === 'string') {
    return stringPredicate(predicate);
  } else {
    return objectPredicate(predicate);
  }
};

module.exports = filter;