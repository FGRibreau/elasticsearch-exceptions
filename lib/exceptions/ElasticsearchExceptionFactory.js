'use strict';
var _ = require('lodash');

module.exports = function (exception_name) {
  var Ex = function (message, body, status) {
    Error.call(this);
    this.message = message;
    this.body = body;
    this.status = status;
  };

  Ex.name = exception_name;

  /**
   * @param  {Mixed}  err
   * @return {Boolean} true if `err` seems to be a an error
   */
  Ex.is = function (err) {
    return _.isObject(err) && _.isString(err.message) && err.message.indexOf(exception_name) === 0;
  };

  return Ex;
};
