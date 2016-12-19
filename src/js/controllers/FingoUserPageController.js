/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp').controller('FingoUserCommentController', ['$scope', '$http', function($scope, $http) {

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/comments/',
  	headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'}
  })
  .success(function(data, status, headers, config) {
  	if( data ) {
  		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      // console.log(data.data[0].movie.title);
      $scope.user_comment = data;
      console.log($scope.user_comment);
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

  // Controller $scope 객체의 속성
  $scope.movies = null;
  $scope.selected_index = null;
  $scope.selected_movie = null;
  $scope.popup_show_index = null;
  $scope.popup_show_active = false;


  $scope.selectMovie = function(movie, index) {

    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };


}]);

angular.module('FingoApp').controller('FingoUserWishMoviesController', ['$scope', '$http', function($scope, $http) {

  $http({
    method: 'GET', //방식
    url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/wish/movies/', /* 통신할 URL */

    // data: dataObject, /* 파라메터로 보낼 데이터 */
    headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'} //헤더
  })
  .success(function(data, status, headers, config) {
     if( data ) {
      $scope.wish_movie = data;
      console.log($scope.wish_movie);
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

  // Controller $scope 객체의 속성
  $scope.movies = null;
  $scope.selected_index = null;
  $scope.selected_movie = null;
  $scope.popup_show_index = null;
  $scope.popup_show_active = false;

  $scope.selectMovie = function(movie, index) {
    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };


}]);
