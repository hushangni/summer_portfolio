$(function () {
  $('a').smoothScroll();


  $('.top-nav ul #page').css('border-bottom-color', '#ffa85c');

  $('nav li').click((e) => {
    $('nav li a').css('border-bottom-color', 'transparent')
    $(e.target).css('border-bottom-color', '#ffa85c');

  })
});