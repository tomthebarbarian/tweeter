$(document).ready(() => {
  $('#tweet-text').keyup(() => {
    // console.log($('.counter').text());
    let currlen = $('#tweet-text').val().length;

    $('.counter').text(140 - currlen);
    if ((140 - currlen) < 0) {
      $('.counter').css('color', '#FF0000');
    } else {
      $('.counter').css('color', '#000000');
    }

  });

});
