'use strict';
var ElasticSearchException = require('./Elasticsearch.exception');

var ALIAS_MISSING_EXCEPTION = 'AliasMissingException';

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
