/*! FingoBoxOfficeDetailController.es6 © heoyunjee, 2016 */

'use strict'

let angular = require('angular');

angular.module('FingoApp')
  .factory('FingoBoxofficeDetail', ['$resource', ($resource)=>{
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/detail/';
    return $resource(url, {}, {
      get: {
        method: 'GET',
        headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
      }
    });
  }])
  .controller('FingoBoxOfficeDetailController', ($scope, FingoBoxofficeDetail)=>{

    FingoBoxofficeDetail.get(function(data) {
      $scope.fingo_boxoffice_detail = data.data;
    }, function errorCallback(data) {
       console.log('e',data);
    });

  });
