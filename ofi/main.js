var $ = require("jquery");

$("#js-loopSlider").each(function() {
  var loopSliderWidth = $(this).width(),
      loopSliderHeight = $(this).height();
  $(this).children("ul").wrapAll('<div id="js-loopSliderWrap"></div>');

  var $wrap = $("#js-loopSliderWrap"),
      listWidth = $wrap.children('ul').children('li').width(),
      listCount = $wrap.children('ul').children('li').length,
      loopWidth = listWidth * listCount,
      speed = 25000;

  $wrap.css({
    top: 0,
    left: 0,
    width: loopWidth * 2,
    height: loopSliderHeight,
    overflow: "hidden",
    position: "absolute",
    display: "flex"
  });

  $wrap.children("ul").css({
    width: loopWidth
  });

  loopSliderPosition();

  function loopSliderPosition() {
    $wrap.css({"left": 0});
    $wrap.stop().animate({left: "-" + loopWidth + "px"}, speed, "linear");
    setTimeout(function() {
      loopSliderPosition();
    }, speed);
  };

  $wrap.children("ul").clone().appendTo($wrap);
});
