$(document).bind('DOMSubtreeModified',() => {
  $('.tweet').mouseover(function(event) {
    $(this).css('box-shadow','5px 5px 5px lightblue');
  });
  $('.tweet').mouseout(function(event) {
    $(this).css('box-shadow','none');
  });
  $('.fa-solid').mouseover(function(event) {
    $(this).css('color','#C2983B');
  });
  $('.fa-solid').mouseout(function(event) {
    $(this).css('color','black');
  });
});