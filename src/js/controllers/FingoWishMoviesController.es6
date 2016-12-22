/*! FingoWishMoviesontroller.js © yamoo9.net, 2016 */
'use strict';
let angular = require('angular');

angular
  .module('FingoApp')
  .controller('FingoWishMoviesController', ['$scope', '$http', function($scope, $http) {

    $scope.WishMovies = function(id) {
      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/wish/' + id + '/';

      $http.get(
        $scope.url,
        { headers: {'Authorization': 'Token ' + window.localStorage['key1'] } }
      )
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log('get',data.wish_movie);
          if(data.wish_movie == true) {
            $scope.sendWish($scope.url, 'False');
            $scope.wish_active = '';
          } else if(data.wish_movie == false){
            $scope.sendWish($scope.url, 'True');
            $scope.wish_active = 'active';
          }
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

    $scope.sendWish = function(url, bool) {
      $http.post(
        url,
        { wish_movie: bool },
        { headers: {'Authorization': 'Token ' + window.localStorage['key1'] } }
      )
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log('post',data);
          if(bool == 'True') {
            window.alert('저장되었습니다.');
          } else {
            window.alert('취소되었습니다.');
          }
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
