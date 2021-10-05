$(document).ready(() => {
  $('.tweet').mouseover(function() {
    $(this).css('box-shadow','5px 5px 5px lightblue');
    // console.log('hovering');
  });
  $('.tweet').mouseout(function() {
    $(this).css('box-shadow','none');
    // console.log('hovering');
  });
  $('.fa-solid').mouseover(function() {
    $(this).css('color','#C2983B');
    // console.log('hovering');
  });
  $('.fa-solid').mouseout(function() {
    $(this).css('color','black');
    // console.log('hovering');
  });
});