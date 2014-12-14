'use strict';
var ElasticSearchException = require('./Elasticsearch.exception');

var INDEX_MISSING_EXCEPTION = 'IndexMissingException';

/**
 * { [Error: IndexMissingException[[aliasbringr-20141211-20141212] missing]]
  message: 'IndexMissingException[[aliasbringr-20141211-20141212] missing]',
  body:
   { error: 'IndexMissingException[[aliasbringr-20141211-20141212] missing]',
     status: 404 },
  status: 404 }
 */

function IndexMissing(message, body, status) {
  ElasticSearchException.call(this, message, body, status);
}

IndexMissing.is = function (err) {
  if (!ElasticSearchException.is(err)) {
    return false;
  }

  return err.message.indexOf(INDEX_MISSING_EXCEPTION) === 0;
};

module.exports = IndexMissing;
