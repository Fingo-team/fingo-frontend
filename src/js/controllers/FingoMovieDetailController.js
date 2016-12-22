/*! FingoMovieDetailController.js © joeun, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoMovieDetailController', ['$scope', '$http', '$state', '$stateParams', '$rootScope', function($scope, $http, $state, $stateParams, $rootScope) {
  $scope.selected_index = null;
  $scope.selected_movie = null;
  $scope.movie_id = $stateParams.id;
  $scope.selected_movie = null;
  $scope.popup_show_index = null;
  $scope.popup_show_active = false;
  $scope.length_item = 3;
  $scope.comment_length_item = 3;

  $rootScope.previousState = null;
  $rootScope.currentState = null;

  $scope.length_num = function(num){
    $scope.length_item += num;
  };
  $scope.comment_length_num = function(num){
    $scope.comment_length_item += num;
  };

  $scope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;

    $scope.popup_show = function(movie, id, boolean){
      $scope.popup_show_active = boolean
      $state.go($rootScope.previousState, {}, {notify: false});
    };
  });

  $http({
    method: 'GET', //방식
    url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/', /* 통신할 URL */
    headers: {'Authorization': 'Token ' + window.localStorage['key1']} //헤더
  })
  .success(function(data, status, headers, config) {
    if( data ) {
      /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      $scope.fingo_movie_detail = data;
      console.log('detail',$scope.fingo_movie_detail);
    }
    else {
      /* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
      console.log(error);
    }
  });

  $http({
    method: 'GET', //방식
    url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/comments/', /* 통신할 URL */
    headers: {'Authorization': 'Token ' + window.localStorage['key1']} //헤더
  })
  .success(function(data, status, headers, config) {
    if( data ) {
      $scope.fingo_movie_detail_comment = data;
      console.log('comment',$scope.fingo_movie_detail_comment);
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


}]);
