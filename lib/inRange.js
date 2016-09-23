"use strict";

var inRange = function inRange(number, start) {
  var end = arguments.length <= 2 || arguments[2] === undefined ? start : arguments[2];


  if (start < 0 && end > 0) {
    var newStart = Math.abs(start);
    return compareNumbers(number, start, end);
  } else if (end < 0 && start > 0) {
    var _newStart = Math.abs(end);
    var newEnd = start;
    return compareNumbers(number, start, end);
  } else if (start < 0 && end < 0 && number < 0) {
    var _newStart2 = Math.abs(start);
    var _newEnd = Math.abs(end);
    var newNumber = Math.abs(number);
    return compareNumbers(newNumber, _newStart2, _newEnd);
  } else if (start < 0 && end < 0 && number > 0) {
    return false;
  } else if (start === end) {

    start = 0;
    return compareNumbers(number, start, end);
  } else if (start > end) {

    var _newStart3 = end;
    var _newEnd2 = start;
    return compareNumbers(number, start, end);
  } else {
    return compareNumbers(number, start, end);
  }

  if (start < number < end) {
    return true;
  }
};

var compareNumbers = function compareNumbers(number, start, end) {
  if (start < number && number < end) {
    return true;
  } else {
    return false;
  }
};

module.exports = inRange;