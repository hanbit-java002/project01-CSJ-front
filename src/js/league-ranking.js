/**
 * Created by hb5016 on 2017-02-06.
 */
require([
	"common",
], function() {
	$(".notice-menu>ul>li:nth-child(2)").on("click", function() {
		location.href = global.root + "/league-ranking/league-ranking.html";
	});
	$(".notice-menu>ul>li:nth-child(3)").on("click", function() {
		location.href = global.root + "/league-ranking/character/play.html";
	});
	$(".notice-menu>ul>li:last-child").on("click", function() {
		location.href = global.root + "/league-ranking/op.gg.html";
	});
});
