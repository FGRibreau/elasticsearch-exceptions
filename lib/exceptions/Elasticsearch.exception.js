'use strict';
var _ = require('lodash');

function ElasticsearchException(message, body, status) {
  Error.call(this);
  this.message = message;
  this.body = body;
  this.status = status;
}

/**
 * @param  {Mixed}  err
 * @return {Boolean} true if `err` seems to be a an error
 */
ElasticsearchException.is = function (err) {
  return _.isObject(err) && _.isString(err.message);
};

module.exports = ElasticsearchException;
