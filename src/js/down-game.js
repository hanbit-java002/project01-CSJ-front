/**
 * Created by hb5016 on 2017-02-15.
 */
require([
	"common",
], function() {
	$(".notice-menu>ul>li:first-child").on("click", function() {
		location.href = global.root + "/contents/down-game.html";
	});
	$(".notice-menu>ul>li:nth-child(2)").on("click", function() {
		location.href = global.root + "/contents/video.html";
	});
	$(".notice-menu>ul>li:nth-child(3)").on("click", function() {
		location.href = global.root + "/contents/gallery/fankit.html";
	});
	$(".notice-menu>ul>li:nth-child(4)").on("click", function() {
		location.href = global.root + "/contents/voice/eva.html";
	});
	$(".notice-menu>ul>li:nth-child(5)").on("click", function() {
		location.href = global.root + "/contents/bgmbox.html";
	});
	$(".notice-menu>ul>li:nth-child(6)").on("click", function() {
		location.href = global.root + "/contents/app.html";
	});
});
