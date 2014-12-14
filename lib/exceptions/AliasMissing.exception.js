'use strict';
var ElasticSearchException = require('./Elasticsearch.exception');

var ALIAS_MISSING_EXCEPTION = 'AliasMissingException';

/**
 * { [Error: AliasMissingException[[aliasbringr-20141211-20141212] missing]]
  message: 'AliasMissingException[[aliasbringr-20141211-20141212] missing]',
  body:
   { error: 'AliasMissingException[[aliasbringr-20141211-20141212] missing]',
     status: 404 },
  status: 404 }
 */

function AliasMissing(message, body, status) {
  ElasticSearchException.call(this, message, body, status);
}

AliasMissing.is = function (err) {
  if (!ElasticSearchException.is(err)) {
    return false;
  }

  return err.message.indexOf(ALIAS_MISSING_EXCEPTION) === 0;
};

module.exports = AliasMissing;
