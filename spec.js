var testsContext;

require('./vendor/angular.src');
require('angular-mocks');

testsContext = require.context('./src', true, /_spec\.js$/);
testsContext.keys().forEach(testsContext);
