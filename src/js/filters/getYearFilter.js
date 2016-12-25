/*! getYearFilter.js © heoyunjee, 2016 */

'use strict'

angular.module('FingoApp').filter('getYear', function() {
  return function(input) {
    return input.split('-')[0];
  };
});
