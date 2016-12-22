/*! FingoUserDetailController.js © joeun, 2016 */
'use strict'

// let angular = require('angular');
angular.module('FingoApp').controller('FingoUserDetailController', ['$scope', '$http', function($scope, $http) {

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/detail/',
  	headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
  })
  .success(function(data, status, headers, config) {
  	if( data ) {
  		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      // console.log(data.data[0].movie.title);
      $scope.user_detail = data;
      console.log($scope.user_detail);
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


angular.module('FingoApp').controller('FingoUserCommentController', ['$scope', '$http', function($scope, $http) {

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/comments/',
  	headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
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

  $scope.movePage = function(next) {
    $http({
      method: 'GET', //방식
      url: next,
      headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
    })
    .success(function(data, status, headers, config) {
       if( data ) {
        $scope.watched_movie = data;
        $scope.next_page = data.next;
        $scope.prev_page = data.previous;
        console.log($scope.watched_movie);
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

angular.module('FingoApp').controller('FingoUserWishMoviesController', ['$scope', '$http', function($scope, $http) {

  $http({
    method: 'GET', //방식
    url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/wish/movies/', /* 통신할 URL */

    // data: dataObject, /* 파라메터로 보낼 데이터 */
    headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
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

  $scope.movePage = function(next) {
    $http({
      method: 'GET', //방식
      url: next,
      headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
    })
    .success(function(data, status, headers, config) {
       if( data ) {
        $scope.watched_movie = data;
        $scope.next_page = data.next;
        $scope.prev_page = data.previous;
        console.log($scope.watched_movie);
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

angular.module('FingoApp').controller('FingoUserWatchedMoviesController', ['$scope', '$http', function($scope, $http) {

  $http({
    method: 'GET', //방식
    url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/activity/user/watched/movies/', /* 통신할 URL */

    // data: dataObject, /* 파라메터로 보낼 데이터 */
    headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
    // headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
  })
  .success(function(data, status, headers, config) {
     if( data ) {
      $scope.watched_movie = data;
      $scope.next_page = data.next;
      $scope.prev_page = data.previous;
      console.log($scope.watched_movie);
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

  $scope.movePage = function(next) {
    $http({
      method: 'GET', //방식
      url: next,
      headers: {'Authorization': 'Token ' + window.localStorage['key1'] } //헤더
    })
    .success(function(data, status, headers, config) {
       if( data ) {
        $scope.watched_movie = data;
        $scope.next_page = data.next;
        $scope.prev_page = data.previous;
        console.log($scope.watched_movie);
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
