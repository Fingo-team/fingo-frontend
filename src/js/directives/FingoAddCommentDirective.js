var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoAddCommentDirective', function() {
    return {
      'restrict': 'EAC',
      'controller': 'FingoAddCommentController',
      'link': function(scope, element, attrs) {

        var $modal_window = element.find('.modal-window');
        var $modal_rank_contents = element.find('.modal-rank-contents');
        var $modal_rank_btn = element.find('.modal-rank-btn');

        console.log($modal_rank_btn);
        console.log($modal_window.offset());

        // $modal_rank_contents.css('left', ($modal_rank_btn.offset().left - 127) + 'px');

      }
    };
  });
