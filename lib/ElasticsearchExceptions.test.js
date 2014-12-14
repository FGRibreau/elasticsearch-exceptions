'use strict';
var assert = require('better-assert');
var Exceptions = require('./');

describe('Exceptions', function () {
  describe('Exceptions.isAggregationExecutionException(err)', function () {
    var INDEX_MISSING_ESERR = new Exceptions.AggregationExecutionException("AggregationExecutionException[[qsdoijqspodij-20141211-20141212] missing");
    var INDEX_MISSING_ERR = new Error('AggregationExecutionException[[qsdoijqspodij-20141211-20141212] missing]]');

    it('should return false if this is not an alias missing error', function () {
      assert(Exceptions.isAggregationExecutionException() === false);
      assert(Exceptions.isAggregationExecutionException({}) === false);
      assert(Exceptions.isAggregationExecutionException(new Error('plop')) === false);
    });

    it('should return true if this is an alias missing error', function () {
      assert(Exceptions.isAggregationExecutionException(INDEX_MISSING_ERR) === true);
      assert(Exceptions.isAggregationExecutionException(INDEX_MISSING_ESERR) === true);
    });
  });
  describe('Exceptions.isAliasesMissingException(err)', function () {
    var ALIAS_MISSING_ERR = new Error('AliasesMissingException[[qsdoijqspodij-20141211-20141212] missing]]');
    var ALIAS_MISSING_ESERR = new Exceptions.AliasesMissingException("AliasesMissingException[[qsdoijqspodij-20141211-20141212] missing]]");
    it('should return false if this is not an alias missing error', function () {
      assert(Exceptions.isAliasesMissingException() === false);
      assert(Exceptions.isAliasesMissingException({}) === false);
      assert(Exceptions.isAliasesMissingException(new Error('plop')) === false);
    });

    it('should return true if this is an alias missing error', function () {
      assert(Exceptions.isAliasesMissingException(ALIAS_MISSING_ERR) === true);
      assert(Exceptions.isAliasesMissingException(ALIAS_MISSING_ESERR) === true);
    });
  });
});
