$(document).ready(() => {
  // Counter for input tweets
  $('#tweet-text').keyup(function() {
    let disCount = $(this).parent().children('.undertweet').children('.counter');
    let currlen = $(this).val().length;
    disCount.text(140 - currlen);
    if ((140 - currlen) < 0) {
      disCount.css('color', '#FF0000');
    } else {
      disCount.css('color', '#000000');
    }
  });

  // Click on new tweet
  $('.fa-angle-double-down').click(function(event) {
    if ($('.new-tweet').css('display') !== 'none') {
      $('.new-tweet').css('display','none');
      return;
    } else {
      $('.new-tweet').slideDown('slow');
      return;
    }
  });

  // click on 'totop'
  $('.totop').click(function(event) {
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1000);
  });
});

// Scroll reveals
$(window).scroll(function(event) {
  const mainOff = $('.maintweets').offset().top;
  if (mainOff > $(window).scrollTop()) {
    $('.totop').css('display', 'none');
    $('nav').css('display', 'flex');
    return;
  } else {
    $('.totop').css('display', 'flex');
    $('nav').css('display', 'none');
    return;
  }
});