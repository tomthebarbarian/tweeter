$(document).bind('DOMSubtreeModified',() => {
  $('.tweet').mouseover(function(event) {
    $(this).css('box-shadow','5px 5px 5px lightblue');
    // console.log('hovering');
  });
  $('.tweet').mouseout(function(event) {
    $(this).css('box-shadow','none');
    // console.log('hovering');
  });
  $('.fa-solid').mouseover(function(event) {
    $(this).css('color','#C2983B');
    // console.log('hovering');
  });
  $('.fa-solid').mouseout(function(event) {
    $(this).css('color','black');
    // console.log('hovering');
  });
});