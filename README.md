Elasticsearch-exceptions
========================

[![NPM version](https://badge.fury.io/js/elasticsearch-exceptions.svg)](http://badge.fury.io/js/winston-logentries-transport-with-rewriter)
[![Build Status](https://drone.io/github.com/FGRibreau/elasticsearch-exceptions/status.png)](https://drone.io/github.com/FGRibreau/elasticsearch-exceptions/latest)
[![Coverage Status](https://coveralls.io/repos/FGRibreau/elasticsearch-exceptions/badge.png)](https://coveralls.io/r/FGRibreau/elasticsearch-exceptions)

Parse Elasticsearch exception responses and transform them into JavaScript Errors


```
var EsEx = require('elasticsearch-exceptions');

someRequestToElasticSearchOrUsingANodeJSClient(function(err, ok){
    if(EsEx.isAliasesMissingException(err)){
        // do something else
    }

    if(err){
        // do something
    }

    // etc...
});
```

# Supported exceptions (Elasticsearch v1.4.0)

```javascript
[
  'AggregationExecutionException',
  'AggregationInitializationException',
  'AliasesMissingException',
  'AlreadyExpiredException',
  'BlobStoreException',
  'CircuitBreakingException',
  'ClusterBlockException',
  'DelayRecoveryException',
  'DiscoveryException',
  'ElasticsearchException.WithRestHeaders',
  'ElasticsearchGenerationException',
  'ElasticsearchIllegalArgumentException',
  'ElasticsearchIllegalStateException',
  'ElasticsearchNullPointerException',
  'ElasticsearchParseException',
  'ElasticsearchTimeoutException',
  'EsRejectedExecutionException',
  'ExpressionScriptCompilationException',
  'ExpressionScriptExecutionException',
  'FacetPhaseExecutionException',
  'FailedNodeException',
  'FailedToResolveConfigException',
  'GatewayException',
  'GroovyScriptCompilationException',
  'GroovyScriptExecutionException',
  'HttpException',
  'IgnoreRecoveryException',
  'IndexException',
  'IndexShardAlreadyExistsException',
  'IndexTemplateAlreadyExistsException',
  'IndexTemplateMissingException',
  'IndexMissingException',
  'IndexWarmerMissingException',
  'InvalidIndexTemplateException',
  'Lucene.EarlyTerminationException',
  'MapperException',
  'MasterNotDiscoveredException',
  'NodeClosedException',
  'NoNodeAvailableException',
  'PercolateException',
  'PrimaryMissingActionException',
  'ProcessClusterEventTimeoutException',
  'RecoveryFailedException',
  'RepositoryException',
  'RiverException',
  'RoutingException',
  'RoutingMissingException',
  'ScriptException',
  'SearchContextMissingException',
  'SearchException',
  'SearchPhaseExecutionException',
  'SearchSourceBuilderException',
  'SettingsException',
  'SnapshotException',
  'SuggestBuilderException',
  'TimestampParsingException',
  'TranslogCorruptedException',
  'TransportException',
  'UnavailableShardsException',
  'UncategorizedExecutionException'
]
```

# Todo

- transform elasticsearch client errors to elasticsearch-exceptions
- parse exception body
