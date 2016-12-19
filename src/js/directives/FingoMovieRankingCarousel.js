var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoMovieRankingCarousel', function() {
    return {
      'restrict': 'EA',
      'templateUrl': './views/FingoMovieRankingCarousel.html',
      // 'controller': 'FingoMovieRankingController',
      'link': function(scope, element, attrs) {
        var main_movie_ranking_carousel = {
          'height': {
            'desktop': 690,
            'tablet': 690
          },
          'count': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'col': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'row': {
            'desktop': 2,
            'tablet': 2,
            'mobile': 1
          },
          'margin': 20,
        };
        scope.repeatComplete = function() {
          var $carousel = element.find('#main-movie-ranking-carousel');
          $carousel.fingoCarousel(main_movie_ranking_carousel);
        };

      }
    };
  });
