var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoNavDirective', function() {
    return {
      'restrict': 'EA',
      'templateUrl': './views/navbar.html',
      'controller': 'FingoSearchController',
      'link': function(scope, element, attrs) {
        var menu_btn = element.find('.main-menu-btn');
        var menu = element.find('.main-menu');

        menu_btn.on('click', function() {
          menu.toggleClass('main-menu-active','main-menu-btn-active', 600);
          menu_btn.toggleClass('main-menu-btn-active', 600);
        });
      }
    };
  });
