require([
	"common",
], function() {
	function movenotice() {
		$("#main-left>li:first-child").on("click", function() {
			location.href = "article.notice.html";
		});
		$("#main-left>li:nth-child(2)").on("click", function() {
			location.href = "game-info.html";
		});
		$("#main-left>li:nth-child(3)").on("click", function() {
			location.href = "league-ranking.html";
		});
		$("#main-logo").on("click", function() {
			location.href = "index.html";
		});
	}
	movenotice();
});
