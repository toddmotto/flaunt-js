/*
	Flaunt.js v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/flaunt-js
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	Flaunt JS, stylish responsive navigations with nested click to reveal.
*/
;(function(e){e(function(){e(".nav").append(e('<div class="nav-mobile"></div>'));e(".nav-item").has("ul").prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');e(".nav-mobile").click(function(){e(".nav-list").toggle()});e(".nav-list").on("click",".nav-click",function(){e(this).siblings(".nav-submenu").toggle();e(this).children(".nav-arrow").toggleClass("nav-rotate")})})})(jQuery);