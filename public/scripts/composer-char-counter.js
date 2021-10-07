$(document).ready(() => {
  // console.log(this);
  $('#tweet-text').keyup(function() {
    // console.log($('.counter').text());
    let disCount = $(this).parent().children('.undertweet').children('.counter');
    // console.log(disCount.text());
    // console.log($('.counter').text());
    let currlen = $(this).val().length;
    // console.log(currlen);

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

  // click on to top
  $('.totop').click(function(event) {
    // console.log('clicked on double up');
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1000);
  });
});

// Scroll reveals
$(window).scroll(function(event) {
  // console.log('scrolling');
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