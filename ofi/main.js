(function($) {
  $('a[href^="#"]').click(function() {
     var speed = 1000;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });

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

  resizeYoutube();
  $(window).resize(function() {
    resizeYoutube();
  });

  function resizeYoutube() {
    var wWidth = $(window).width(),
        wHeight = $(window).height() + 48,
        baseRatio = 16 / 9,
        targetRatio = wWidth / wHeight;
    if (targetRatio < baseRatio) {
      $("#js-youtube").width(wHeight / 9 * 16).height(wHeight);
    } else {
      $("#js-youtube").width(wWidth).height(wWidth / 16 * 9);
    }
  }
})(jQuery);
