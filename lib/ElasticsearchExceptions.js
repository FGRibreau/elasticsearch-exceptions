'use strict';
var p = require('path');
var _ = require('lodash');
var assert = require('better-assert');

// create factory helper
module.exports = function createExceptionfromError(err) {

};

['AliasMissing', 'IndexMissing'].forEach(function (moduleName) {
  // append
  var exception = require(getModuleFile(moduleName));
  module.exports[moduleName] = exception;
  // create "is{ExceptionName}" helper
  module.exports['is' + moduleName] = createIsGetter(exception, moduleName);
});

function getModuleFile(moduleName) {
  return p.resolve(__dirname, './exceptions', moduleName + '.exception');
}

function createIsGetter(module) {
  assert(_.isFunction(module.is)); // module should implement is(err) -> boolean
  return module.is;
}
