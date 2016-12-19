var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoHeaderCarousel', function() {
    return {
      'restrict': 'EA',
      'templateUrl': './views/FingoHeaderCarousel.html',
      'link': function(scope, element, attrs) {
        var header_carousel = {
          'width': 1640,
          'height': {
            'desktop': 750,
            'tablet': 650,
            'mobile': 600
          }
        };
        scope.repeatComplete = function() {
          var $carousel = element.find('#main-header-carousel');
          $carousel.fingoCarousel(header_carousel);
        };
      }
    };
  });
