/*! FingoLoginService.js © heoyunjee, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .value('login_token', null)
  // 팩토리 모듈 설정
  .factory('FingoLogin', ['$resource', function($resource){
    // Back-End API
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
    return $resource(url);
  }])
  // 서비스 모듈 설정
  .service('FingoLoginService', ['FingoLogin', '$state', (FingoLogin, $state)=>{

    let login = new FingoLogin();
    let _service = {
      'token': null,

      'fingoLogin': (email, pw)=> {
        login.email = email;
        login.password = pw;

        login.$save().then(()=> {
          // 로컬 스토리지에 토큰값 저장
          window.localStorage.clear();
          window.localStorage['key1'] = login.token;
          // main으로 이동
          $state.go('main',{},{reload:true});
        });
      }
    };


    return _service;

  }]);
