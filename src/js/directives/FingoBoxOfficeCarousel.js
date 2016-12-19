var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoBoxOfficeCarousel', function() {
    return {
      'restrict': 'EA',
      'templateUrl': './views/FingoBoxOfficeCarousel.html',
      // 'controller': 'FingoBoxofficeController',
      'link': function(scope, element, attrs) {
        var main_box_office_carousel = {
          'height': {
            'desktop': 530,
            'tablet': 530
          },
          'index': {
            'desktop': 2,
            'tablet': 1,
            'mobile': 0
          },
          'col': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'margin': 20,
          'infinite': {
            'desktop': true,
            'tablet': true,
            'mobile': false
          }
        };

        scope.repeatComplete = function() {
          var $carousel = element.find('#main-box-office-carousel');
          $carousel.fingoCarousel(main_box_office_carousel);

          // var radios = document.querySelectorAll('.star-rating-form input[type=radio]');
          // var output = document.querySelector('.star-rating-form output');
          // var star_rating_forms = document.querySelectorAll('.star-rating-form');
          // console.log('star실행');
          // var do_something = function(stars) {
          // 	// ajax
          // 	output.textContent = stars;
          // };
          //
          //
          // // 모든 라디오 버튼을 반복하고 클릭 추가
          // // 레이블에 이벤트 리스너
          // Array.prototype.forEach.call(radios, function(el, i){
          // 	var label = el.nextSibling.nextSibling; //다음 형제
          // 	label.addEventListener("click", function(event){
          //     event.preventDefault();
          // 		do_something(label.querySelector('span').textContent);
          // 	});
          // });
          //
          // //양식이 제출되면 do_something
          // document.querySelector('.star-rating-form').addEventListener('submit', function(event){
          // 	do_something(document.querySelector('.star-rating-form :checked ~ label span').textContent);
          // 	event.preventDefault();// 이벤트 기본값 방지
          // 	event.stopImmediatePropagation();
          // });
          //
          //
          // 	function cencelBtnEvent2() {
          // 		$('.star-rating-form > label >svg').on('click', function () {
          // 			console.log('label click');
          // 			// console.log(this);
          // 			// console.log();//index
          // 			if (this === $('.cancel-btn-active')) {
          // 				console.log('1');
          // 				$('.cancel-btn').removeClass("cancel-btn-active");
          // 			}else{
          // 				$('.cancel-btn').addClass("cancel-btn-active");
          // 			}
          //
          // 	});
          // 	$('.cancel-btn').on('click', function () {
          // 		$('.star-rating-form > label > svg').addClass("cancel-btn-color-active");
          // 		$('.star-rating-form > label > button').removeClass("cancel-btn-active");
          // 		$('.star-rating-form > label > svg').hover(function () {
          // 			$('.star-rating-form > label > svg').removeClass("cancel-btn-color-active");
          // 		});
          // 		console.log("취소");
          // 	});
          // }
          // console.log('star실행2');
          // cencelBtnEvent2();
          //
          // // })(this, this.jQuery);
          //
          //
          // // Add comment
          // var comment_dim_el = document.querySelector('.comment-dim-container');
          // var dim_1 = comment_dim_el.querySelector('.dim');
          // var dim_2 = comment_dim_el.querySelector('.dim2');
          // var modal_rank_contents = comment_dim_el.querySelector('.modal-rank-contents');
          //
          // var modal_rank_btn = comment_dim_el.querySelector('.modal-rank-btn');
          // var modal_close_btn = comment_dim_el.querySelector('.modal-close-button');
          // var modal_ok_button = comment_dim_el.querySelector('.modal-ok-button');
          //
          // var modal_rank_contents_left = 0;
          //
          // dim_1.addEventListener('click', hideDimModal);
          // dim_2.addEventListener('click', hideDimModal);
          //
          // modal_rank_btn.addEventListener('click', function() {
          //   dim_2.style.display = 'block';
          //   modal_rank_contents.style.display = 'block';
          // });
          //
          //
          // modal_close_btn.addEventListener('click', function() {
          //   comment_dim_el.style.display = 'none';
          // });
          //
          // modal_ok_button.addEventListener('click', function(e) {
          //   if(e) { e.preventDefault(); }
          //   comment_dim_el.style.display = 'none';
          //   // 서버로 코멘트 전송
          // });
          //
          //
          // function showDimModal() {
          //   var modals = document.querySelectorAll('.modal');
          //   dim = document.querySelector('.dim');
          //   dim_2 = document.querySelector('.dim2');
          //
          //   dim.style.display = 'block';
          //   dim_2.style.display = 'block';
          //   for(var i = 0, l = modals.length; i < l; i++) {
          //     modals[i].style.display = 'block';
          //   }
          //   modal_rank_contents.style.left = (modal_rank_btn.offsetLeft - 127) + 'px';
          // };
          //
          // function hideDimModal(){
          //   var modal = this.parentNode.querySelector('.modal');
          //
          //   this.style.display = 'none';
          //   modal.style.display = 'none';
          // };
          //
          // var tabpanels = document.querySelectorAll('.hover');
          //
          // tabpanels.forEach(function(tabpanel, index) {
          //   var tabpanel_btns = tabpanel.querySelectorAll('button');
          //
          //   tabpanel_btns.forEach(function(btn, index) {
          //
          //     if(index === 0) {
          //       btn.addEventListener('click', function(e) {
          //         if(e) { e.preventDefault(); }
          //       });
          //     } else if(index === 1) {
          //       btn.addEventListener('click', function(e) {
          //         if(e) { e.preventDefault(); e.stopPropagation();}
          //
          //         var title = this.parentNode.querySelector('h3').textContent;
          //         var poster_src = this.parentNode.parentNode.querySelector('img').getAttribute('src');
          //
          //         comment_dim_el.querySelector('.modal-headline').innerHTML = this.parentNode.querySelector('h3').textContent;
          //         comment_dim_el.querySelector('.modal-poster').setAttribute('src', poster_src);
          //
          //         showDimModal();
          //       });
          //     }
          //   });
          // });


        };

      }
    };

  });
