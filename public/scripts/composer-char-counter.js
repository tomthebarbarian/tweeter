$(document).ready(() => {
  // console.log(this);
  $('#tweet-text').keyup(function() {
    // console.log($('.counter').text());
    let disCount = $(this).parent().children('.undertweet').children('.counter');
    console.log(disCount.text());
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

});
