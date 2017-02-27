/**
 * Created by hb5016 on 2017-01-23.
 */
require([
	"common",
], function() {
	$(".notice-menu>ul>li:first-child").on("click", function() {
		location.href = global.root + "/page/story/home.html";
	});
	$(".notice-menu>ul>li:nth-child(2)").on("click", function() {
		location.href = global.root + "/game/game-info.html";
	});
	$(".notice-menu>ul>li:nth-child(3)").on("click", function() {
		location.href = global.root + "/game/game-guide.html";
	});
	$(".notice-menu>ul>li:last-child").on("click", function() {
		location.href = global.root + "/game/item-box.html";
	});
});
