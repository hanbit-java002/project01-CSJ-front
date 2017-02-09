define([
	"bootstrap",
], function() {
	function movenotice() {
		$("#main-left>li:first-child").on("click", function() {
			location.href = global.root + "/article/article.notice.html";
		});
		$("#main-left>li:nth-child(2)").on("click", function() {
			location.href = global.root + "/game/game-info.html";
		});
		$("#main-left>li:nth-child(3)").on("click", function() {
			location.href = global.root + "/league-ranking/league-ranking.html";
		});
		$("#main-logo").on("click", function() {
			location.href = global.root + "/index.html";
		});
	}
	movenotice();
});
