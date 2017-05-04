/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);