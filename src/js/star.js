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
