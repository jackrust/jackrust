$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var dScrolled = $(window).scrollTop();
  $('.foreground').css('top',-(dScrolled*0.9)+'px');
  $('.midground').css('top',-(dScrolled*0.6)+'px');
  $('.background').css('top',-(dScrolled*0.3)+'px');
}