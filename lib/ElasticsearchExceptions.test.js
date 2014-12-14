'use strict';
var assert = require('better-assert');
var ElasticSearchExceptions = require('./');

describe('ElasticSearchExceptions', function () {
  describe('ElasticSearchExceptions.isIndexMissing(err)', function () {
    var INDEX_MISSING_ESERR = new ElasticSearchExceptions.IndexMissing("IndexMissingException[[aliasbringr-20141211-20141212] missing");
    var INDEX_MISSING_ERR = new Error('IndexMissingException[[aliasbringr-20141211-20141212] missing]]');

    it('should return false if this is not an alias missing error', function () {
      assert(ElasticSearchExceptions.isIndexMissing() === false);
      assert(ElasticSearchExceptions.isIndexMissing({}) === false);
      assert(ElasticSearchExceptions.isIndexMissing(new Error('plop')) === false);
    });

    it('should return true if this is an alias missing error', function () {
      assert(ElasticSearchExceptions.isIndexMissing(INDEX_MISSING_ERR) === true);
      assert(ElasticSearchExceptions.isIndexMissing(INDEX_MISSING_ESERR) === true);
    });
  });

  describe('ElasticSearchExceptions.isAliasMissing(err)', function () {
    var ALIAS_MISSING_ERR = new Error('AliasMissingException[[aliasbringr-20141211-20141212] missing]]');
    var ALIAS_MISSING_ESERR = new ElasticSearchExceptions.AliasMissing("AliasMissingException[[aliasbringr-20141211-20141212] missing]]");
    it('should return false if this is not an alias missing error', function () {
      assert(ElasticSearchExceptions.isAliasMissing() === false);
      assert(ElasticSearchExceptions.isAliasMissing({}) === false);
      assert(ElasticSearchExceptions.isAliasMissing(new Error('plop')) === false);
    });

    it('should return true if this is an alias missing error', function () {
      assert(ElasticSearchExceptions.isAliasMissing(ALIAS_MISSING_ERR) === true);
      assert(ElasticSearchExceptions.isAliasMissing(ALIAS_MISSING_ESERR) === true);
    });
  });
});
