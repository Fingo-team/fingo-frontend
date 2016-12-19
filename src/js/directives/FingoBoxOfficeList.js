var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoBoxOfficeList', function() {
    return {
      'restrict': 'EA',
      'templateUrl': './views/FingoBoxOfficeList.html',
      'link': function(scope, element, attrs) {

        var $box_office_list = element.find('.main-box-office-list');
        var $box_office_list_btn = $box_office_list.find('button');
        var $ul = $box_office_list.find('ul');

        var index = 1;
        var intervalID = null;
        var rolling_time = 2500;

        // Box Office List 버튼 이벤트 처리
        $box_office_list_btn.on('click', function() {
          $box_office_list.toggleClass('show');
            if($box_office_list.hasClass('show')) {
              clearInterval(intervalID);
              $ul.css('top', 0);
              for(var i = 0, l = index - 1; i < l; i++) {
                $ul.prepend($ul.children().last());
              }
            } else {
              index = 1;
              intervalID = window.setInterval(rollingList, rolling_time);
            }
        });

        // Box Office List 롤링 수행
        if(!$box_office_list.hasClass('show')) {
          intervalID = window.setInterval(rollingList, rolling_time);
        }

        // Box Office List 롤링 함수
        function rollingList() {
          var list_length = $ul.children().length;
          var list_height = $ul.children().eq(0).height();

          $ul.stop().animate({
            'top': -list_height
          }, 600, function() {
            $(this).append($(this).children().first());
            $(this).css('top', 0);
            index++;
          });
        }

        $box_office_list.mouseover(function() {
          clearInterval(intervalID);
        });

        $ul.mouseout(function() {
          if(!$box_office_list.hasClass('show')) {
            intervalID = window.setInterval(rollingList, rolling_time);
          }
        });

        // scope.repeatComplete = function() {
          // var box_office_list = document.querySelector('.main-box-office-list');
          // var box_office_list_btn = box_office_list.querySelector('button');
          // var ul = box_office_list.querySelector('ul');
          // box_office_list_btn.addEventListener('click', function() {
          //   box_office_list.classList.toggle('show');
          //   if($box_office_list.hasClass('show')) {
          //     // clearInterval(intervalID);
          //     $ul.css('top', 0);
          //     for(var i = 0, l = index - 1; i < l; i++) {
          //       $ul.prepend($ul.children().last());
          //     }
          //   } else {
          //     index = 1;
          //   }
          // });
          //
          // // Box Office List 롤링 수행
          // if($box_office_list.hasClass('show')) {
          //   clearInterval(intervalID);
          // } else if(!$box_office_list.hasClass('show')) {
          //   intervalID = window.setInterval(rollingList, rolling_time);
          // }
          //
          // // Box Office List 롤링 함수
          // function rollingList() {
          //   var list_length = $ul.children().length;
          //   var list_height = $ul.children().eq(0).height();
          //
          //   $ul.stop().animate({
          //     'top': -list_height
          //   }, 600, function() {
          //     $(this).append($(this).children().first());
          //     $(this).css('top', 0);
          //     index++;
          //   });
          // }
          //
          // box_office_list.addEventListener('mouseover', function() {
          //   clearInterval(intervalID);
          // });
          //
          // box_office_list.addEventListener('mouseout', function() {
          //   if(!$box_office_list.hasClass('show')) {
          //     intervalID = window.setInterval(rollingList, rolling_time);
          //   }
          // });
        // };
      }
    };
  });
