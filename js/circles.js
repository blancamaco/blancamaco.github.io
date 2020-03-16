(function($){
    'use strict';   




   jQuery(document).ready(function($){
    
 
    // skill circle progress bar
    // var skillLevel1 = $('.skill-item .first').data('skill-level');
    // var skillLevel2 = $('.skill-item .second').data('skill-level');
    // var skillLevel3 = $('.skill-item .third').data('skill-level');
    // var skillLevel4 = $('.skill-item .fourth').data('skill-level');
    //first.circle


$(window).scroll(function() {
   var hT = $('#circles').offset().top,
       hH = $('#circles').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
    $('.first.circle').circleProgress({
      value: '0.' + 90,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#F57346"
      }
    })/*.on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(95 * progress) + '<span>%</span>');
    });*/

    //second.circle
    $('.second.circle').circleProgress({
      value: '0.' + 80,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#578BFF"
      }
    })/*.on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(skillLevel2 * progress) + '<i>%</i>');
    });*/

    //third.circle
    $('.third.circle').circleProgress({
      value: '0.' + 70,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#F23D91"
      }
    })/*.on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(70 * progress) + '<span>%</span>');
    });*/

    //fourth.circle
    $('.fourth.circle').circleProgress({
      value: '0.' + 80,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#66E8A9"
      }
    })/*.on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(90 * progress) + '<span>%</span>');
    });*/

    $('.fifth.circle').circleProgress({
      value: '0.' + 50,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#7DFFE5"
      }
    })

    $('.sixth.circle').circleProgress({
      value: '0.' + 80,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#FFB13A"
      }
    })

    $('.seventh.circle').circleProgress({
      value: '0.' + 60,
      size: 110,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#EB7075"
      }
    })

  $(window).off('scroll');

   }
});
    


   });


  
})(jQuery);	 