Elasticsearch-exceptions
========================

[![NPM version](https://badge.fury.io/js/elasticsearch-exceptions.svg)](http://badge.fury.io/js/winston-logentries-transport-with-rewriter)
[![Build Status](https://drone.io/github.com/FGRibreau/elasticsearch-exceptions/status.png)](https://drone.io/github.com/FGRibreau/elasticsearch-exceptions/latest)
[![Coverage Status](https://coveralls.io/repos/FGRibreau/elasticsearch-exceptions/badge.png)](https://coveralls.io/r/FGRibreau/elasticsearch-exceptions)

Parse Elasticsearch exception responses and transform them into JavaScript Errors


```
var ElasticsearchExceptions = require('elasticsearch-exceptions');

someRequestToElasticSearchOrUsingANodeJSClient(function(err, ok){
    if(ElasticsearchExceptions.isIndexMissing(err)){
        // do something
    }

    if(ElasticsearchExceptions.isAliasMissing(err)){
        // do something else
    }

    if(err){
        // do something
    }

    // etc...
});
