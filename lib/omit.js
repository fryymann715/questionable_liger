"use strict";

var omit = function omit(thing, properties) {
  for (var i = 0; i < properties.length; i++) {
    delete thing[properties[i]];
  }
  return thing;
};

module.exports = omit;