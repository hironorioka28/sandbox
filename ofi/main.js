var $ = require("jquery");

$(function(){
  $('a[href^="#"]').click(function() {
     var speed = 1000;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });


});

$(function() {
  if ($("#js-toggleHeader").length) {
    var navListPosBottom = $("#js-navList").offset().top + $("#js-navList").height();
    var windowTop = $(window).scrollTop();

    if (windowTop > navListPosBottom) {
      $("#js-toggleHeader").addClass("show");
    }

    $(window).scroll(function() {
      var wScrollTop = $(window).scrollTop();

      if (wScrollTop > navListPosBottom) {
        $("#js-toggleHeader").addClass("show");
      } else {
        $("#js-toggleHeader").removeClass("show");
      }
    });
  }
});

$(function() {
  $(window).on("load", function() {
    //$(".js-videoWrapper").addClass("show");
    //$("#video").css({
    //  "opacity": 1
    //});
  });
    $(".js-videoWrapper").addClass("show");
    $("#video").css({
      "opacity": 1
    });

  var $video = $("#video").get(0);
  var time = 320;

  $video.currentTime = time * Math.random();
});


