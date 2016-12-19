/*! FingoLoginController.es6 © heoyunjee, 2016 */

'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .controller('FingoLoginController',
    ['$scope', 'FingoLoginService', ($scope, FingoLoginService)=>{
      $scope.share_data = FingoLoginService;
      $scope.Login = ()=> {
        $scope.share_data.fingoLogin($scope.email, $scope.pw);
      };

    }]);

// angular
//   .module('FingoApp')
//   .factory('FingoLogin', ['$resource', function($resource){
//     return {
//       'get': (params= {}, success, error)=> {
//         let les = $resource('http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/', {}, {
//                 'create': {
//                     'method': 'POST',
//                     'headers': {'Authorization': `Token ${params.token}`}
//                 }
//             });
//         return les.create(params, success, error);
//       }
//     };
//   }])
//   .controller('FingoLoginController', function($scope, FingoLogin) {
//
//     $scope.token = '';
//
//     // 초기 로그인 시
//     $scope.Login = function() {
//
//       FingoLogin.get({
//         email: $scope.email,
//         password: $scope.pw
//       }, (response)=> {
//         $scope.token = response.token;
//       });
//
//     };
//
//     // token 사용하여 통신할 경우
//     FingoLogin.get({
//       'email'    : $scope.email,
//       'password' : $scope.pw,
//       'token'    : $scope.token,
//     }, (response)=> {
//
//     });
//
//   });


  // .factory('FingoLogin', ['$resource', function($resource){
  //   let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
  //   let token;
  //   return $resource(url);
  // }])
  // .controller('FingoLoginController', function($scope, FingoLogin) {
  //
  //   $scope.Login = function() {
  //
  //     var entry = new FingoLogin();
  //
  //     entry.email = $scope.email;
  //     entry.password = $scope.pw;
  //
  //     entry.$save().then(function(response) {
  //       console.log(response.token);
  //       window.location.href = '/main.html';
  //     }, function errorCallback(response) {
  //        console.log('error',response);
  //     });
  //   };
  //
  // });
