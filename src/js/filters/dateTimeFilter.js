/*! dateTimeFilter.js © heoyunjee, 2016 */

'use strict'

angular.module('FingoApp').filter('dateTime', function() {
  return function(input) {
    var date = input.split(' ')[0];
    var time = input.split(' ')[1];

    date = date.split('-');
    time = time.split(':');

    var date_time = date[0] + '년 ' + date[1] + '월 ' + date[2] + '일';
    return date_time;
  };
});
