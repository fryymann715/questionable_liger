'use strict';

var camelCase = function camelCase(string) {
  var capital = false;
  var stringArray = [];
  stringArray.push(string[0]);
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      if (string[i - 1] === string[i - 1].toLowerCase()) {
        stringArray.push(' ' + string[i]);
      } else {
        stringArray.push(string[i]);
      }
    } else {
      stringArray.push(string[i]);
    }
  }
  string = stringArray.join('');

  string = string.toLowerCase();
  var wordCheck = new RegExp(/[\s-_]([a-zA-Z])/g);
  var spaceCheck = new RegExp(/([\s-_])/g);
  var camelCase = string.replace(wordCheck, function (match) {
    return match.toUpperCase();
  });
  camelCase = camelCase.replace(spaceCheck, '');
  return camelCase;
};
module.exports = camelCase;