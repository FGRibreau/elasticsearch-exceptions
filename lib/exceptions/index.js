'use strict';
var ElasticsearchExceptionFactory = require('./ElasticsearchExceptionFactory');
var SUPPORTED_EXCEPTIONS = require('./SupportedExceptions');

module.exports.SUPPORTED = SUPPORTED_EXCEPTIONS;

SUPPORTED_EXCEPTIONS.forEach(function (exception_name) {
  module.exports[exception_name] = ElasticsearchExceptionFactory(exception_name);
});
