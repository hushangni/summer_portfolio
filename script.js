$(function () {
  $('a').smoothScroll();


  $('.top-nav ul #page').css('border-bottom-color', '#ffa85c');

  $('nav li').click((e) => {

    if (e.target.text != "projects") {

      $('nav li a').css('border-bottom-color', 'transparent')
      $(e.target).css('border-bottom-color', '#ffa85c');
    } else {
      $(e.target).css('border-bottom-color', 'transparent');
    }

  })
});