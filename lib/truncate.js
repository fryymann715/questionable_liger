'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var DEFAULT_LENGTH = 24;

var truncate = function truncate(string, options) {

  var truncatedString = "";

  // Options = null
  if (options === undefined || options === null) {
    return trimAtLength(string, string.length);
  } else {
    switch (typeof options === 'undefined' ? 'undefined' : _typeof(options)) {
      case 'object':
        // Length is present without Separators
        if (options['length'] != null && options['separator'] == null) {

          var _limit = getLimit(options);
          return trimAtLength(string, _limit);

          // Separator is present without Length
        } else if (options['separator'] != null && options['length'] == null) {

          var _separatorArray = getSeparatorArray(options.separator);
          var _separatorIndex = getSeparatorIndex(string, _separatorArray);
          return trimAtSeparator(string, _separatorIndex);
        } else if (options['length'] != null && options['separator'] != null) {

          var _limit2 = getLimit(options);
          var _separatorArray2 = getSeparatorArray(options.separator);
          var _separatorIndex2 = getSeparatorIndex(string, _separatorArray2);
          if (isSeparatorFirst(_separatorIndex2, _limit2)) {
            return trimAtSeparator(string, _separatorIndex2);
          } else {
            return trimAtLength(string, _limit2);
          }
        }
        break;

      case 'string':
        // Separators are supplied in a String

        var separatorArray = getSeparatorArray(options);
        var separatorIndex = getSeparatorIndex(string, separatorArray);
        return trimAtSeparator(string, separatorIndex);
        break;

      case 'number':
        var limit = parseInt(options);
        return trimAtLength(string, limit);

    }
  }
};

// Get length
var getLimit = function getLimit(limitObj) {
  return limitObj.length;
};

var trimAtLength = function trimAtLength(string, limit) {
  var newString = string.substring(0, limit - 3);
  newString += '...';
  return newString;
};

var trimAtSeparator = function trimAtSeparator(string, sepIndex) {
  var newString = string.substring(0, sepIndex);
  newString += '...';
  return newString;
};

// Get separators
var getSeparatorArray = function getSeparatorArray(separatorObj) {
  var separatorArray = [];
  for (var i = 0; i < separatorObj.length; i++) {
    separatorArray.push(separatorObj[i]);
  }
  return separatorArray;
};

// Get Separator Index
var getSeparatorIndex = function getSeparatorIndex(string, sepArray) {
  for (var sep = 0; sep < sepArray.length; sep++) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === sepArray[sep]) {
        return i;
      }
    }
  }
};

// Does the separator occur in string befoere the length limit
var isSeparatorFirst = function isSeparatorFirst(separatorIndex, limit) {
  if (separatorIndex < limit) {
    return true;
  } else {
    return false;
  }
};

module.exports = truncate;