'use strict';
var p = require('path');
var _ = require('lodash');
var assert = require('better-assert');

var exceptions = require('./exceptions');

// create factory helper
module.exports = function createExceptionfromError(err) {
  // @todo
};

exceptions.SUPPORTED.forEach(function (exception_name) {
  module.exports[exception_name] = exceptions[exception_name];
  // create "is{ExceptionName}" helper
  module.exports['is' + exception_name] = createIsGetter(exceptions[exception_name]);
});

function createIsGetter(module) {
  assert(_.isFunction(module.is)); // module should implement is(err) -> boolean
  return module.is;
}
