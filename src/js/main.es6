/*! main.es6 © heoyunjee, 2016 */

let angular = require('angular');

// 의존 모듈 로드
require('angular-resource');
require('angular-ui-router');
require('angular-css');

// require('angular-route');

// App 모듈 정의 (의존 모듈 주입)
let fingo = angular.module('FingoApp', [
  'ngResource',
  'ui.router',
  'angularCSS'
]);

// 모듈 환경 설정
fingo.config([
  '$httpProvider',
  '$resourceProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $httpProvider,
    $resourceProvider,
    $stateProvider,
    $urlRouterProvider
  )=> {

    // $stateProvider
    $stateProvider
      .state('first', {
        'url'         : '/',
        'templateUrl' : 'views/first.html',
        'css' : 'css/first.css'
      })
      .state('login', {
        'url'         : '/login',
        'templateUrl' : 'views/login.html',
        'controller'  : 'FingoLoginController',
        'css' : 'css/login.css'
      })
      .state('signup', {
        'url'         : '/signup',
        'templateUrl' : 'views/signup.html',
        'controller'  : 'FingoLoginController',
        'css' : 'css/signup.css'
      })
      .state('main', {
        'url'         : '/main',
        'templateUrl' : 'views/main.html',
        'css' : 'css/main.css'
      })
      .state('main.comment', {
        'url'         : '/comment/:id',
        'templateUrl' : 'views/FingoAddComment.html',
        'controller'  : 'FingoAddCommentController',
        'css' : ['css/add-comment.css', 'css/main.css']
      })
      .state('search', {
        'url'         : '/search',
        'templateUrl' : 'views/search.html',
        'css' : 'css/search.css'
      })
      .state('wish', {
        'url'         : '/wish',
        'templateUrl' : 'views/wish.html',
        'css' : 'css/wish.css'
      })
      .state('movies', {
        'url'         : '/movies',
        'templateUrl' : 'views/movies.html',
        'css' : 'css/movies.css'
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub moviespage
      })
      .state('movies.comment', {
        'url'         : '/comment/:id',
        'templateUrl' : 'views/FingoAddComment.html',
        'controller'  : 'FingoAddCommentController',
        'css' : ['css/add-comment.css', 'css/movies.css']
      })
      .state('comments', {
        'url'         : '/comments',
        'templateUrl' : 'views/comments.html',
        'css' : 'css/comments.css'
      })
      .state('movies.movie_detail', {
        'url'         : '/movie_detail/:id',
        'templateUrl' : 'views/FingoMovieDetail.html',
        'controller'  : 'FingoMovieDetailController',
        'css' : ['css/movie-info.css', 'css/movies.css']
      })
      .state('wish.movie_detail', {
        'url'         : '/movie_detail/:id',
        'templateUrl' : 'views/FingoMovieDetail.html',
        'controller'  : 'FingoMovieDetailController',
        'css' : ['css/movie-info.css', 'css/wish.css']
      });

      // .state('comment.rank', {
      //   'url'         : '/comment/:id/rank',
      //   'templateUrl' : 'views/comment-dim2.html',
      //   'controller'  : 'FingoAddCommentController'
      // });

    $urlRouterProvider.otherwise('/');

    // let token = 'Token ' + window.localStorage['key1'];
    // $httpProvider.defaults.headers.common['Authorization'] = token;
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);

// Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '638541519685008',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Directives
require('./directives/FingoHeaderCarousel');
require('./directives/FingoBoxOfficeList');
require('./directives/FingoBoxOfficeCarousel');
require('./directives/FingoMovieRankingCarousel');
// require('./directives/FingoAddCommentDirective');

// Services
require('./services/FingoSignupService');
require('./services/FingoLoginService');
// require('./services/FingoCommentService');

// Filters
require('./filters/getYearFilter');

// Controllers
require('./controllers/FingoSignupController');
require('./controllers/FingoLoginController');
require('./controllers/FBLoginController');
require('./controllers/FingoBoxOfficeDetailController');
require('./controllers/FingoBoxOfficeController');
require('./controllers/FingoMovieRankingController');
require('./controllers/FingoAddCommentController');
require('./controllers/FingoSearchController');
require('./controllers/FingoWishMoviesController');
require('./controllers/FingoUserPageController');
require('./controllers/FingoMovieDetailController');
require('./controllers/FingoMovieScoreController');
require('./controllers/ListController');



// require('./controllers/FingoCommentController');


/**
 * --------------------------------
 * jQuery
 * ----------------------------- */
require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');

require('./ui-carousel-refactoring');
require('./nav-scroll-event');
require('./nav-toggle-menu');
require('./star');

// require('./comment-dim');
require('./main-page');
// require('./main-add-comment');
// require('./checkbox');
