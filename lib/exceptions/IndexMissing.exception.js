'use strict';
var ElasticSearchException = require('./Elasticsearch.exception');

var INDEX_MISSING_EXCEPTION = 'IndexMissingException';

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
