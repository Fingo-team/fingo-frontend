/*! movieListController.js © yamoo9.net, 2016 */
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
  var dataObject = 1;

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
      // console.log(id);
      // console.log(boolean);
      $scope.popup_show_active = boolean
      $state.go($rootScope.previousState, {}, {notify: false});
    };
  });


  // $scope.popup_show_active = boolean;
  // $scope.selected_movie = movie;
  $scope.length_item = 3;
  // if(1){
  //
  // } else {
    $http({
      method: 'GET', //방식
      url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/', /* 통신할 URL */
      data: dataObject, /* 파라메터로 보낼 데이터 */
      headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'} //헤더
    })
    .success(function(data, status, headers, config) {
      if( data ) {
        /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
        // console.log(data.data[0].movie.title);
        $scope.fingo_movie_detail = data;
        console.log($scope.fingo_movie_detail);
      }
      else {
        /* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
        console.log(error);
      }
    });

    $http({
      method: 'GET', //방식
      // $scope.movie_id
      url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/comments/', /* 통신할 URL */
      //http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/
      //http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/1/comments/
      data: dataObject, /* 파라메터로 보낼 데이터 */
      headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'} //헤더
    })
    .success(function(data, status, headers, config) {
      if( data ) {
        $scope.fingo_movie_detail_comment = data;
        console.log($scope.fingo_movie_detail_comment);
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
  // }

// };


  // angular.forEach(fingo_movie_detail.actor, function(person){
  //     console.log(person.img);
  // });

  // Controller $scope 객체의 속성


  // Controller $scope 객체의 메소드
  // $scope.selectMovie = function(movie, index) {
  //   $scope.selected_index = index;
  //   $scope.selected_movie = movie;
  // };

}]);
