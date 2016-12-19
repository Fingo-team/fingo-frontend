/*! FingoSignupController.js © heoyunjee, 2016 */
'use strict';

angular
  .module('FingoApp')
  .controller('FingoSignupController',
    ['$scope', 'FingoSignupService', ($scope, FingoSignupService)=>{

      $scope.share_data = FingoSignupService;
      $scope.Signup = ()=> {
        $scope.share_data.fingoSignup($scope.email, $scope.pw, $scope.nickname);
      };

  }]);
