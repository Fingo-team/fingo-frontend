/*! FingoAddCommentController.es6 © heoyunjee, 2016 */

'use strict'

angular.module('FingoApp')
  .controller('FingoAddCommentController',
    ['$scope', '$http', '$stateParams', '$state', ($scope, $http, $stateParams, $state)=>{

      let index = $stateParams.id;
      // let token = 'Token ' + window.localStorage['key1'];
      $scope.fingo_comment = null;
      $scope.fingo_score = null;
      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/'+index+'/comment/';

      // 선택된 영화의 정보 가져오기
      $http({
        method: 'GET',
      	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+ index + '/',
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
      	url: $scope.url,
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


      // 코멘트 남기기
      $scope.addComment = function(comment) {
        console.log(comment);
        if($scope.fingo_comment === null) {
          $http.post($scope.url, { comment: comment }, {
            headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
          })
            .success(function(data, status, headers, config) {
            	if( data ) {
            		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
                window.alert('코멘트가 성공적으로 등록되었습니다!');
                $state.go('main');
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

        } else if($scope.fingo_score == 0 || $scope.fingo_score == undefined ){
          window.alert('별점 평가를 먼저 해주세요!');
        } else {
          // 코멘트 수정하기
          $http.patch($scope.url, { comment: comment }, {
            headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
          })
            .success(function(data, status, headers, config) {
            	if( data ) {
            		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
                // console.log('success');
                window.alert('코멘트가 수정되었습니다!');
                $state.go('main');

            	}
            	else {
            		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
                console.log(error);
            	}
            })
            .error(function(data, status, headers, config) {
            	/* 서버와의 연결이 정상적이지 않을 때 처리 */
            	console.log(status);
              // if(status === 500) {
              // }
            });
        }

      };

      $scope.dim_show = function(cl) {
        console.log(cl);
        $scope.dim_class = cl;
      };

      $scope.dim2_show = function(cl) {
        console.log(cl);
        $scope.dim2_class = cl;
      };

  }]);
