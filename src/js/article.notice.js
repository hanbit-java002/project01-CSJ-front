/**
 * Created by hb5016 on 2017-01-23.
 */
require([
	"common",
], function() {
	function movenotice() {
		$("#main-left>li:first-child").on("click", function() {
			location.href = "article.notice.html";
		});
		$("#main-logo").on("click", function() {
			location.href = "index.html";
		});
	}
	movenotice();
});
