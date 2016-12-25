/*! FingoAddCommentController.es6 © heoyunjee, 2016 */

'use strict'

angular.module('FingoApp')
  .controller('FingoAddCommentController',
    ['$scope', '$http', '$stateParams', '$state', '$rootScope', ($scope, $http, $stateParams, $state, $rootScope)=>{

      $rootScope.previousState = null;
      $rootScope.currentState = null;

      $scope.fingo_id = $stateParams.id;
      $scope.comment_url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/'+ $scope.fingo_id +'/comment/';
      $scope.fingo_comment = null;
      $scope.fingo_score = null;

      // 선택된 영화의 정보 가져오기
      $http({
        method: 'GET',
      	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+ $scope.fingo_id + '/',
        headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
      })
      .success(function(data, status, header, config) {
        if(data) {
          $scope.fingo_title = data.title;
          $scope.fingo_img = data.img;
        }
      });

      // 선택된 영화의 코멘트 가져오기
      $http({
      	method: 'GET',
      	url: $scope.comment_url,
        headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          $scope.fingo_comment = data.comment;
          $scope.fingo_score = data.score;

          if(data.score != 0 && data.score != undefined) {
            $scope.fingo_score = data.score;
            $scope.dim2_class = 'hide';
          } else {
            $scope.fingo_score = '';
          }
      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          $scope.fingo_comment = '';
          console.log(error);
      	}
      })
      .error(function(data, status, headers, config) {
      	/* 서버와의 연결이 정상적이지 않을 때 처리 */
        $scope.fingo_comment = '';
      	console.log(status);
      });

      // 이전 페이지 가져오기
      $scope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
        $rootScope.currentState = to.name;

        $scope.dim_show = function(cl) {
          $scope.dim_class = cl;
          $state.go($rootScope.previousState, {}, {notify: false});
        };

        // 코멘트 남기기
        $scope.addComment = function(comment) {

          $http.patch(
            $scope.comment_url,
            { comment: comment },
            { headers: {'Authorization': 'Token ' + window.localStorage['key1']} }
          )
          .success(function(data, status, headers, config) {
          	if( data ) {
          		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
              window.alert('코멘트가 성공적으로 등록되었습니다!');
              $state.go($rootScope.previousState, {}, {notify: false});
              $scope.dim_show('hide');
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

          if($scope.fingo_score == 0 || $scope.fingo_score == undefined ){
            window.alert('별점 평가를 먼저 해주세요!');
            $scope.dim2_show('show');
          }

        };

      });

      // comment 평가창
      $scope.dim2_show = function(cl) {
        console.log(cl);
        $scope.dim2_class = cl;
      };

  }]);
