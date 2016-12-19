/*! ui-carousel-refactoring.js © heoyunjee, 2016 */
// var $ = require('jquery')

/**
 * width: carousel width
 * height: carousel height
 * margin: tabpanel margin
 * count: how many tabpanels will move when you click button
 * col: how many columns in carousel mask
 * row: how many rows in carousel mask
 * infinite: infinite carousel or not(true or false)
 * index: index of active tabpanel
 */
// Default Options
var defaults = {
  'width': 1240,
  'height': 390,
  'margin': 0,
  'count': 1,
  'col': 1,
  'row': 1,
  'infinite': false,
  'index': 0
};

// Constructor Function
var Carousel = function(widget, options) {
  // Private
  // var settings = $.extend({}, defaults, options);

  // Public
  this.$widget = $(widget);
  this.settings = $.extend({}, defaults, options);

  // var settings = this.settings;
  this.carousel_infinite = false;
  this.carousel_row = 0;

  this.carousel_width                    = 0;
  this.carousel_height                   = 0;
  this.carousel_count                    = 0;
  this.carousel_col                      = 0;
  this.carousel_content_margin           = 0;
  this.active_index                      = 0;
  this.carousel_one_tab                  = 0;
  this.carousel_content_width = 0;
  this.carousel_content_height= 0;
  this.carousel_ratio = 0;

  this.$carousel                         = null;
  this.$carousel_headline                = null;
  this.$carousel_tablist                 = null;
  this.$carousel_tabs                    = null;
  this.$carousel_button_group            = null;
  this.$carousel_mask                    = null;
  this.$carousel_tabpanels               = null;
  this.$carousel_tabpanel_imgs   = null;
  this.$carousel_tabpanel_content_videos = null;

  this.start_tabpanel_index = 0;

  // Priviliged(특권을 주는 것)
  // this.getSettings = function () {
  //   return settings;
  // };

  // 초기 설정
  this.init();
  // 이벤트 연결
  this.events();
};

// Carousel 객체가 공통으로 가지는 부분 정의
// var carousel_ratio = null;

// Prototype Object
Carousel.prototype = {
  'init': function() {
    var $this = this;
    var $widget  = this.$widget;

    // 캐러셀 내부 구성 요소 참조
    this.$carousel          = $widget;
    this.$carousel_headline = this.$carousel.children(':header:first');
    this.$carousel_tablist  = this.$carousel.children('ul').wrap('<div/>').parent();
    this.$carousel_tabs     = this.$carousel_tablist.find('a');
    this.$carousel_tabpanels = this.$carousel.children().find('figure');
    this.$carousel_content = this.$carousel_tabpanels.children().parent();
    this.$carousel_tabpanel_imgs = this.$carousel.children().last().find('img').not('.icon');
    this.$carousel_tabpanel_content_videos = this.$carousel.children().last().find('iframe');

    // console.log('tabpanels',this.$carousel.html());

    this.setResponsive();

    this.carousel_width = this.settings.width;
    this.carousel_height = this.settings.height;

    this.carousel_infinite = this.settings.infinite;
    this.carousel_row = this.settings.row;

    this.carousel_count                  = this.settings.count;
    this.carousel_col                    = this.settings.col;
    this.carousel_content_margin         = this.settings.margin;
    this.start_tabpanel_index = this.settings.index;

    this.setCarouselRatio(this.$carousel.width(), this.carousel_height);
    this.carousel_ratio = this.getCarouselRatio();

    // 동적으로 캐러셀 구조 생성/추가
    this.createPrevNextButtons();
    this.createCarouselMask();
    // 역할별 스타일링 되는 클래스 설정
    this.settingClass();
    this.settingSliding();
  },

  'getCarouselRatio': function () {
    return this.carousel_ratio;
  },

  'setCarouselRatio': function(w, h) {
    var settings = this.settings;
    w = w || settings.width;
    h = h || settings.height;
    this.carousel_ratio =  h / w;
  },

  'createPrevNextButtons': function() {
    var button_group = ['<div>',
      '<button type="button"></button>',
      '<button type="button"></button>',
    '</div>'].join('');
    this.$carousel_button_group = $(button_group).insertAfter( this.$carousel_tablist );
  },

  'createCarouselMask': function() {
    this.$carousel_tabpanels.parent().closest('div').wrap('<div/>');
    this.$carousel_mask = this.$carousel.children().last();
  },

  'settingClass': function() {
    this.$carousel.addClass('ui-carousel');
    this.$carousel_headline.addClass('ui-carousel-headline');
    this.$carousel_tablist.addClass('ui-carousel-tablist');
    this.$carousel_tabs.addClass('ui-carousel-tab');
    this.$carousel_button_group.addClass('ui-carousel-button-group');
    this.$carousel_button_group.children().first().addClass('ui-carousel-prev-button');
    this.$carousel_button_group.children().last().addClass('ui-carousel-next-button');
    this.$carousel_tabpanels.addClass('ui-carousel-tabpanel');
    this.$carousel_tabpanels.parent().closest('div').addClass('ui-carousel-tabpanel-wrapper');
    this.$carousel_mask.addClass('ui-carousel-mask');
    this.$carousel_tabpanel_imgs.addClass('ui-carousel-image');
    this.$carousel_tabpanel_content_videos.addClass('ui-carousel-video');

    if(this.carousel_row === 2) {
      var j = 1;
      var j2 = 1;
      for(var i = 0, l = this.$carousel_tabpanels.length; i < l; i++) {
        if(i%2===1){
          this.$carousel_tabpanels.eq(i).addClass('top-2');
          this.$carousel_tabpanels.eq(i).addClass('left-' + j);
          j++;
        } else {
          this.$carousel_tabpanels.eq(i).addClass('top-1');
          this.$carousel_tabpanels.eq(i).addClass('left-' + j2);
          j2++;
        }
      }
    }
  },

  'settingSliding': function() {
    var $carousel = this.$carousel;

    var $tabpanel = this.$carousel_tabpanels;
    var $tabpanel_wrapper = $tabpanel.parent();
    var $carousel_mask = this.$carousel_mask;
    var carousel_tabpannel_width = ($carousel_mask.width() - (this.carousel_col - 1) * this.carousel_content_margin) / this.carousel_col;

    this.carousel_content_width = this.$carousel_tabpanel_imgs.eq(0).width();
    // this.carousel_content_height = this.$carousel_tabpanels.find('img').eq(0).height();

    // carousel 높이 설정
    $carousel.height(this.carousel_height);

    // Set carousel mask height
    // $carousel_mask.height( $carousel.height() );

    // Set carousel tabpanel(div or img) size and margin
    if(this.settings.col === 1) {
      $tabpanel.width($carousel.width());
      // $carousel.height($tabpanel.height() + 50);
    } else {
      $tabpanel
        .width(this.carousel_content_width)
        // .height(this.carousel_content_height)
        .css('margin-right', this.carousel_content_margin);
    }


    // Set carousel tabpanel wrapper width
    $tabpanel_wrapper.width(($tabpanel.width() + this.carousel_content_margin) * ($tabpanel.length + 1));

    // Set carousel one tab mask width
    this.carousel_one_tab = ($tabpanel.width() + this.carousel_content_margin) * this.carousel_count;

    if(this.start_tabpanel_index !== 0) {
      for(var i = 0, l = this.start_tabpanel_index + 1; i < l; i++) {
        this.$carousel_tabpanels.last().parent().prepend(this.$carousel_tabpanels.eq($tabpanel.length - (i + 1)));
      }
    }

    // Carousel 상태 초기화
    if(this.carousel_infinite === true) {
      // tabpanel active 상태 초기화
      this.$carousel_tabpanels.eq(this.active_index).radioClass('active');
      // tabpanel wrapper 위치 초기화
      $tabpanel_wrapper.css('left', -this.carousel_one_tab);
    } else if(this.carousel_col !== 1){
      // Infinite Carousel이 아닐때
      // prevBtn 비활성화
      this.prevBtnDisable();
    }

    // 인디케이터 active 상태 초기화
    this.$carousel_tabs.eq(this.active_index).parent().radioClass('active');
  },

  'prevBtnActive': function() {
    this.$carousel.find('.ui-carousel-prev-button')
      .attr('aria-disabled', 'false')
      .css({'opacity': 1, 'display': 'block'});

  },

  'prevBtnDisable': function() {
    this.$carousel.find('.ui-carousel-prev-button')
      .attr('aria-disabled', 'true')
      .css({'opacity': 0, 'display': 'none'});
  },

  'events': function() {
    var widget    = this;
    var $carousel = widget.$carousel;
    var $tabs     = widget.$carousel_tabs;
    var $buttons  = widget.$carousel_button_group.children();

    // buttons event
    $buttons.on('click', function() {
      if ( this.className === 'ui-carousel-prev-button' ) {
        widget.prevPanel();
      } else {
        widget.nextPanel();
      }
    });

    // tabs event
    $.each($tabs, function(index) {
      var $tab = $tabs.eq(index);
      $tab.on('click', $.proxy(widget.viewTabpanel, widget, index, null));
    });
  },

  'setActiveIndex': function(index) {
    // 활성화된 인덱스를 사용자가 클릭한 인덱스로 변경
    this.active_index = index;

    // tab 최대 개수
    var carousel_tabs_max = (this.$carousel_tabpanels.length / (this.carousel_count * this.carousel_row)) - 1;
    // 한 마스크 안에 패널이 다 채워지지 않을 경우
    if((this.$carousel_tabpanels.length % (this.carousel_count * this.carousel_row)) !== 0) {
      carousel_tabs_max = carousel_tabs_max + 1;
    }

    // 처음 또는 마지막 인덱스에 해당할 경우 마지막 또는 처음으로 변경하는 조건 처리
    if ( this.active_index < 0 ) {
      this.active_index = carousel_tabs_max;
    }
    if ( this.active_index > carousel_tabs_max ) {
      this.active_index = 0;
    }

    return this.active_index;
  },

  'nextPanel': function() {
    if(!this.$carousel_tabpanels.parent().is(':animated')) {
      var active_index = this.setActiveIndex(this.active_index + 1);
      this.viewTabpanel(active_index, 'next');
    }
  },

  'prevPanel': function() {
    if(!this.$carousel_tabpanels.parent().is(':animated')) {
      var active_index = this.setActiveIndex(this.active_index - 1);
      this.viewTabpanel(active_index, 'prev');
    }
  },

  'viewTabpanel': function(index, btn, e) {
    // 사용자가 클릭을 하는 행위가 발생하면 이벤트 객체를 받기 때문에
    // 조건 확인을 통해 브라우저의 기본 동작 차단
    if (e) { e.preventDefault(); }
    this.active_index = index;

    var $carousel_wrapper = this.$carousel_tabpanels.eq(index).parent();
    var one_width = this.carousel_one_tab;

    // Infinite Carousel
    if(this.carousel_infinite === true) {

      // index에 해당되는 탭패널 활성화
      this.$carousel_tabpanels.eq(index).radioClass('active');

      // When you click next btn
      if(btn === 'next') {
        $carousel_wrapper.stop().animate({
          'left': -one_width * 2
        }, 500, 'easeOutExpo', function() {
          $carousel_wrapper.append($carousel_wrapper.children().first());
          $carousel_wrapper.css('left', -one_width);
          this.animating = false;
        });

      // When you click prev btn
      } else if(btn === 'prev') {
        $carousel_wrapper.stop().animate({
          'left': 0
        }, 500, 'easeOutExpo', function() {
          $carousel_wrapper.prepend($carousel_wrapper.children().last());
          $carousel_wrapper.css('left', -one_width);
        });
      }

    } else if(this.carousel_infinite === false) {
      if(this.carousel_col !== 1) {
        if(index === 0) {
          this.prevBtnDisable();
        } else {
          this.prevBtnActive();
        }
      }

      $carousel_wrapper.stop().animate({
        'left': index * -this.carousel_one_tab
      }, 600, 'easeOutExpo');
    }


    // 인디케이터 라디오클래스 활성화
    this.$carousel_tabs.eq(index).parent().radioClass('active');
  },

  'setResponsive': function() {
    // console.log(this);
    if(global.innerWidth <= 750) {
      // console.log('mobile');
      this.settings.width = this.settings.width.mobile || this.settings.width;
      this.settings.height = this.settings.height.mobile || this.settings.height;
      this.settings.margin = this.settings.margin.mobile || this.settings.margin;
      this.settings.count = this.settings.count.mobile || this.settings.count;
      this.settings.col = this.settings.col.mobile || this.settings.col;
      this.settings.row = this.settings.row.mobile || this.settings.row;
      if(this.settings.infinite.mobile !== undefined) {
        this.settings.infinite = this.settings.infinite.mobile;
      }
      this.settings.index = 0;

      // console.log('width', this.settings.width = this.settings.width.mobile || this.settings.width);
      // console.log('height', this.settings.height = this.settings.height.mobile || this.settings.height);
      // console.log('margin', this.settings.margin = this.settings.margin.mobile || this.settings.margin);
      // console.log('count', this.settings.count = this.settings.count.mobile || this.settings.count);
      // console.log('col', this.settings.col = this.settings.col.mobile || this.settings.col);
      // console.log('row', this.settings.row = this.settings.row.mobile || this.settings.row);
      // console.log('infinite', this.settings.infinite = this.settings.infinite.mobile || this.settings.infinite);
      // console.log('index', this.settings.index = 0);

    } else if(global.innerWidth <= 1024) {
      // console.log('tablet');
      this.settings.width = this.settings.width.tablet || this.settings.width;
      this.settings.height = this.settings.height.tablet || this.settings.height;
      this.settings.margin = this.settings.margin.tablet || this.settings.margin;
      this.settings.count = this.settings.count.tablet || this.settings.count;
      this.settings.col = this.settings.col.tablet || this.settings.col;
      this.settings.row = this.settings.row.tablet || this.settings.row;
      if(this.settings.infinite.tablet !== undefined) {
        this.settings.infinite = this.settings.infinite.tablet;
      }
      this.settings.index = this.settings.index.tablet || this.settings.index;

      // // Height
      // header_carousel.height = header_carousel.height.tablet;
      // // Count
      // main_movie_ranking_carousel.count = main_movie_ranking_carousel.count.tablet;
      // main_movie_trailers_carousel.count = main_movie_trailers_carousel.count.tablet;
      // // Index
      // main_box_office_carousel.index = main_box_office_carousel.index.tablet;
    } else {
      // console.log('desktop');
      this.settings.width = this.settings.width.desktop || this.settings.width;
      this.settings.height = this.settings.height.desktop || this.settings.height;
      this.settings.margin = this.settings.margin.desktop || this.settings.margin;
      this.settings.count = this.settings.count.desktop || this.settings.count;
      this.settings.col = this.settings.col.desktop || this.settings.col;
      this.settings.row = this.settings.row.desktop || this.settings.row;
      if(this.settings.infinite.desktop !== undefined) {
        this.settings.infinite = this.settings.infinite.desktop;
      }
      this.settings.index = this.settings.index.desktop || this.settings.index;

      // Height
      // header_carousel.height = header_carousel.height.desktop;
      // // Count
      // main_movie_ranking_carousel.count = main_movie_ranking_carousel.count.desktop;
      // main_movie_trailers_carousel.count = main_movie_trailers_carousel.count.desktop;
      // // Index
      // main_box_office_carousel.index = main_box_office_carousel.index.desktop;
    }
  }
};

// jQuery Plugin
$.fn.fingoCarousel = function(options){
  var $collection = this; // jQuery {}
  return $.each($collection, function(idx){
    var $this = $collection.eq(idx);
    // new Carousel( this, options ); // 컴포넌트 화
    var _instance = new Carousel( this, options ); // 컴포넌트 화
    // $.data(this, 'fingoCarousel', _instance);
    $this.data('fingoCarousel', _instance);
  });
};
