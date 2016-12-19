/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp').controller('ListController', ['$scope', '$http', function($scope, $http) {

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/',
  	headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'}
  })
  .success(function(data, status, headers, config) {
  	if( data ) {
  		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      // console.log(data.data[0].movie.title);
      $scope.movies = data.data;
      console.log($scope.movies);
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
  // Controller $scope 객체의 메소드


  // $scope.popup_show = function(movie, index){
  //   console.log(index);
  //
  //   $scope.popup_show_index = index;
  //   $scope.popup_show_active = true;
  // };
  //
  // $scope.selectMovie = function(movie, index) {
  //
  //   $scope.selected_index = index;
  //   $scope.selected_movie = movie;
  // };



  $scope.selectMovie = function(movie, index) {

    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };


}]);
