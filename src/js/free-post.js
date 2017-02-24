/**
 * Created by hb5016 on 2017-02-15.
 */
require([
	"common",
], function() {
	$("#best-art").on("click", function() {
		location.href = global.root + "/post/best/bestart.html";
	});
	$(".notice-menu>ul>li:nth-child(2)").on("click", function() {
		location.href = global.root + "/post/balance.html";
	});
	$(".notice-menu>ul>li:nth-child(3)").on("click", function() {
		location.href = global.root + "/post/promote.html";
	});
	$(".notice-menu>ul>li:nth-child(4)").on("click", function() {
		location.href = global.root + "/post/tip.html";
	});
	$(".notice-menu>ul>li:nth-child(5)").on("click", function() {
		location.href = global.root + "/post/free-post.html";
	});
	$(".notice-menu>ul>li:nth-child(6)").on("click", function() {
		location.href = global.root + "/post/art.html";
	});
	$(".notice-menu>ul>li:nth-child(7)").on("click", function() {
		location.href = global.root + "/post/image.html";
	});
	$(".notice-menu>ul>li:nth-child(8)").on("click", function() {
		location.href = global.root + "/post/market.html";
	});
	$(".notice-menu>ul>li:nth-child(9)").on("click", function() {
		location.href = global.root + "/post/dual.html";
	});
	$("#af").on("click", function() {
		location.href = global.root + "/post/afreeca/new.html";
	});
	$("#best-tip").on("click", function() {
		location.href = global.root + "/post/best/besttip.html";
	});
});
