/*! FingoTokenService.js © heoyunjee, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .value('signup_token', null)
  // 팩토리 모듈 설정
  .factory('FingoSignup', ['$resource', function($resource){
    // Back-End API
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/signup/';
    return $resource(url);
  }])
  // 서비스 모듈 설정
  .service('FingoSignupService', ['FingoSignup', '$state', (FingoSignup, $state)=>{

    let signup = new FingoSignup();
    let _service = {
      'token': null,

      'fingoSignup': (email, pw, name)=> {
        signup.email = email;
        signup.password = pw;
        signup.nickname = name;

        signup.$save().then(()=> {
          console.log('인증 메일이 발송되었습니다.');
          $state.go('login');
        });
      }
    };


    return _service;

  }]);
