var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoMovieScoreDirective', function() {
    return {
      'restrict': 'EA',
      'templateUrl': 'views/FingoMovieScore.html',
      'controller': 'FingoMovieScoreController',
      'replace': true,
      'scope': {
        'movieId': '=',
        'movieScore': '='
      },
      'link': function(scope, element, attrs) {
        // var star_label = element.find('label');
        // console.log(star_label);
      }
    };
  });
