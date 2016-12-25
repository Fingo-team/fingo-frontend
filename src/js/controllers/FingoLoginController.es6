/*! FingoLoginController.es6 © heoyunjee, 2016 */

'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .controller('FingoLoginController',
    ['$scope', 'FingoLoginService', ($scope, FingoLoginService)=>{
      $scope.email = 'heoyunjee@gmail.com',
      $scope.pw = '1234';
      $scope.share_data = FingoLoginService;
      $scope.Login = ()=> {
        $scope.share_data.fingoLogin($scope.email, $scope.pw);
      };

    }]);
