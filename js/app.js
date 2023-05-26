$(document).ready(function () {
  // BURGER
  $('.header__burger').click(function(){
    $('.header__nav').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('overflow');
  })
  $('.header__item a').click(function(){
    $('.header__nav').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('overflow');
  })

  //APPEARING HEADER
  let scrollPos = 0;
  $(document).scroll(function(){
    if ($(this).scrollTop() > 800) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  })

  //WOW
  wow = new WOW().init();
})