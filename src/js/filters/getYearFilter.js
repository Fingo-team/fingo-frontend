/*! readingZeroFilter.js © yamoo9.net, 2016 */

'use strict'

// let angular = require('angular');

angular.module('FingoApp').filter('getYear', function() {
  return function(input) {
    console.log(input.split('-')[0]);
    return input.split('-')[0];
  };
});
