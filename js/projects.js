//Fullpage Js General Setting//
$(document).ready(function() {

  function orientation() {

    if ($(window).width() < 700 && window.innerHeight < window.innerWidth) {
      $('.orientation').addClass('landscape');
    } else {
      $('.orientation').removeClass('landscape');
    }

  }

  orientation();
  window.onresize = orientation;

  $('#fullpage').fullpage({
    navigation: false,
    continuousVertical: true,
    controlArrows: true,
    slidesNavigation: false,
    sectionsColor: ['none', 'none', 'none'],
    // anchors: ['section0', 'section1', 'section2'],
    css3: true,
    verticalCentered: false
  });

  //Open and Close Info Tabs//
  $('.work_headers h1').click(function() {

    $('.link').addClass('opened');
    $('.wrapper').addClass('opened');
    $('.info_intro').addClass('opened');
    $('.white').addClass('opened');
    $('.close').addClass('opened');
    $('.test').addClass('opened');

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

  });

  $('.close').click(function() {

    $('.link').removeClass('opened');

    setTimeout(function() {
      $('.wrapper').removeClass('opened');
    }, 500);

    $('.info_intro').addClass('leave');

    setTimeout(function() {
      $('.info_intro').removeClass('leave');
    }, 500);

    setTimeout(function() {
      $('.info_intro').removeClass('opened');
    }, 500);

    $('.white').removeClass('opened');
    $('.close').removeClass('opened');
    $('.test').removeClass('opened');

    setTimeout(function() {
      $('.test-wrapper').scrollTop(0);
    }, 500);

    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);

  });

  //Change Elements on Animation//
  var black = $('.black'),
    white = $('.white');

  //Stop Scrolling When Black Animation Begins//
  black.on('webkitAnimationStart oanimationstart msAnimationStart animationstart',
    function(e) {
      $.fn.fullpage.setMouseWheelScrolling(false);
      $.fn.fullpage.setAllowScrolling(false);
    });

  //Allow Scrolling When Black Animations Executes//
  black.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
      $.fn.fullpage.setMouseWheelScrolling(true);
      $.fn.fullpage.setAllowScrolling(true);
    });

  //On Page Transition Automatically Close Menu If Open//
  white.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      $('.button_text').removeClass('active');
      $('.info').removeClass('open');
      $('.work_headers').removeClass('active');
    });

  //About Page Open and Close//

  $('.one').addClass('shift');

  $('.one').click(function() {
    $('.one').addClass('shift');
    $('.two').removeClass('shift');
    $('.about').removeClass('shift');
    $('.about_intro').removeClass('opened');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);

    setTimeout(function() {
      $('.about_wrapper').scrollTop(0);
    }, 500);

  });

  $('.two').click(function() {
    $('.one').removeClass('shift');
    $('.two').addClass('shift');
    $('.about').addClass('shift');
    $('.about_intro').addClass('opened');
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  });

});