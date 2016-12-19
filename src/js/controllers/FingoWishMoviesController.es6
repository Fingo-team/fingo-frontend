/*! FingoLoginController.js © yamoo9.net, 2016 */
'use strict';
console.log('on');
let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoWishMovies', ['$resource','$stateParams', function($resource, $stateParams){
    // let index = $stateParams.id;
    // console.log('$stateParams.id',$stateParams.id);
    // console.log('id :',$stateParams.id);
    // FingoWishMovie
    // let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/wish/'+ $scope.movie_id +'/';
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/wish/2/';
    // console.log($scope.movie_id);

    return $resource(url, {}, {
        'create': {
            method: 'POST',
            headers: {'Authorization': 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291'}
        }
    });

  }])
  .controller('FingoWishMoviesController', ['$scope', 'FingoWishMovies', function($scope, FingoWishMovies) {

    $scope.WishMovies = function(bool,movie, id) {
      console.log('on2');
      // console.log();
      console.log(bool);
      var entry = new FingoWishMovies();
      // entry.wish_movie = $scope.boolean;
      // $scope.movie_id = id;
      // console.log('id값',$scope.movie_id);
      entry.wish_movie = bool;
      console.log('결과',entry.wish_movie);
      // 'background-color':'#be3c39';

      entry.$create().then(function(response) {
        console.log(response);
      }, function errorCallback(response) {
         console.log('error',response);
      });
    };

  }]);
