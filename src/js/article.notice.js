/**
 * Created by hb5016 on 2017-01-23.
 */
require([
	"common",
], function() {
	$(".notice-menu>ul>li:first-child").on("click", function() {
		location.href = global.root + "/article/article.notice.html";
	});
	$(".notice-menu>ul>li:nth-child(2)").on("click", function() {
		location.href = global.root + "/article/update.html";
	});
	$(".notice-menu>ul>li:nth-child(3)").on("click", function() {
		location.href = global.root + "/page/eclipse.html";
	});
	$(".notice-menu>ul>li:nth-child(4)").on("click", function() {
		location.href = global.root + "/article/magazine.html";
	});
	$(".notice-menu>ul>li:nth-child(5)").on("click", function() {
		location.href = global.root + "/article/event/running.html";
	});
});
