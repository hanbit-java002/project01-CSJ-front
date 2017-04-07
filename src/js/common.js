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
		$("#main-right>li:first-child").on("click", function() {
			location.href = global.root + "/post/free-post.html";
		});
		$("#main-right>li:nth-child(2)").on("click", function() {
			location.href = global.root + "/contents/down-game.html";
		});
		$("#main-right>li:nth-child(3)").on("click", function() {
			location.href = global.root + "/customer-service/cus-serv-home.html";
		});
	}
	function hovermenu() {
		$("#main-left>li:first-child").hover(function() {
			$(".first-hover-menu").slideDown();
		},
			function() {
				$(".first-hover-menu").slideUp();
			}
		);
		$("#main-left>li:nth-child(2)").hover(function() {
				$(".second-hover-menu").slideDown();
			},
			function() {
				$(".second-hover-menu").slideUp();
			}
		);
		$("#main-left>li:nth-child(3)").hover(function() {
				$(".third-hover-menu").slideDown();
			},
			function() {
				$(".third-hover-menu").slideUp();
			}
		);
	}

	$(".sign-up").on("click", function() {
		location.href = global.root + "/login/sign-up.html";
	});
	$("#cp-user-id").focus();
	$(".cp-reset").on("click", function() {
		$("#cp-user-id").val("");
		$("#cp-user-pw").val("");
		$("#cp-user-pw-cfm").val("");

		$("#cp-user-id").focus();
	});
	$(".cp-popup-close").on("click", function() {
		location.href = "/";
	});
	hovermenu();
	movenotice();
});
