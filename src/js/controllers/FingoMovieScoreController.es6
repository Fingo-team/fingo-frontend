/*! FingoLoginController.js © yamoo9.net, 2016 */
'use strict';
console.log('score on');

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoMovieScore', ['$resource', function($resource){

    // FingoWishMovie
    // let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/wish/'+ $scope.movie_id +'/';
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/score/10';
    // console.log($scope.movie_id);

    return $resource(url, {}, {
        'create': {
            method: 'POST',
            headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'}
        }
    });

  }])
  .controller('FingoMovieScoreController', ['$scope', 'FingoMovieScore' ,function($scope, FingoMovieScore) {

    $scope.MovieScore = function(Num,movie) {
      console.log('on2');
      // console.log();
      console.log(Num);
      var entry = new FingoMovieScore();
      // entry.wish_movie = $scope.boolean;
      // $scope.movie_id = id;
      // console.log('id값',$scope.movie_id);
      entry.score = Num;
      console.log('결과',entry.score);
      // 'background-color':'#be3c39';

      entry.$create().then(function(response) {
        console.log(response);
      }, function errorCallback(response) {
         console.log('error',response);
      });
    };

  }]);
