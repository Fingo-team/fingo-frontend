// (function (global) {
var $ = require('jquery');

$('.main-menu-btn').on('click', function() {
  $('.main-menu').toggleClass('main-menu-active','main-menu-btn-active', 600);
  $('.main-menu-btn').toggleClass('main-menu-btn-active', 600);

});

// })(this , jQuery.this);
