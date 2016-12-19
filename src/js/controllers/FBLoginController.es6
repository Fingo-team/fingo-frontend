/*! FBLoginController.es6 © heoyunjee, 2016 */

'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoFBLogin', ['$resource', function($resource){
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/fb_login/';
    return $resource(url, {}, {
        'save': {
            method: 'POST'
        }
    });
  }])
  .controller('FBLoginController', ['$scope', '$state', 'FingoFBLogin', function($scope, $state, FingoFBLogin) {
    $scope.name = 'Login';
    $scope.token = null;

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if(response.authResponse) {
          // console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            // console.log('Successful login for: ' + response.name);
            // console.log(response);

            $scope.token = FB.getAuthResponse().accessToken;
            // console.log($scope.token);

            var fb_login = new FingoFBLogin();

            fb_login.access_token = $scope.token;

            fb_login.$save(function(response) {
              // 로컬 스토리지에 토큰값 저장
              window.localStorage['key1'] = response.token;
              // main 페이지로 이동
              $state.go('main');

            }, function errorCallback(response) {
               console.log('e',response);
            });

          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
     });
    };
  }]);
