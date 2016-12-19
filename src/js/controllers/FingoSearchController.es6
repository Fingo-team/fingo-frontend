/*! FingoBoxofficeController.es6 © heoyunjee, 2016 */

'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoSearchController', ['$scope', '$http', '$state', ($scope, $http, $state)=>{

    $scope.fingo_search = (keyword)=>{
      $http({
      	method: 'GET',
      	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/search/',
        params: { q: keyword },
        headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log(data);
          $state.go('search');
      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          console.log(error);
      	}
      })
      .error(function(data, status, headers, config) {
      	/* 서버와의 연결이 정상적이지 않을 때 처리 */
      	console.log(status);
      });
    };



}]);
