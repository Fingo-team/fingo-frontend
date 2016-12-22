/*! FingoMovieScoreController.es6 © heoyunjee, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoMovieScoreController', ['$scope', '$http', ($scope, $http)=>{


    $scope.getScore = function(event, id) {

      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/score/'+ id +'/';

      $http({
        'method': 'GET',
        'url': $scope.url,
        'headers': {'Authorization': 'Token ' + window.localStorage['key1'] }
      })
      .success(function(data, status, headers, config) {
        if( data ) {
          /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          $scope.currentScore = data.score * 2;

          angular.element(event.currentTarget.querySelectorAll('label')).css('color', '#999');
          if($scope.currentScore != 0) {
            for(let i = 1, l = $scope.currentScore; i <= l; i++) {
              angular.element(event.currentTarget.querySelector('.star' + i)).css('color', '#e7ae5a');
            }
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


    $scope.addScore = function(event, id, score, current) {

      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/score/' + id + '/';

      if((score * 2) === current) {
        console.log('same');
        score = 0;
      }

      $http.post($scope.url, { score: score },
        {
          headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
        }
      )
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log(data);
          window.alert('별점이 등록되었습니다!');
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
