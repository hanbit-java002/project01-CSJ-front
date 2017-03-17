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
	function charcterthum() {
		var charname = ["loras", "huton", "louis", "tara", "trivia", "cain",
			"rena", "drexler", "doyle", "thomas", "niobe", "shiva", "wesley",
			"stella", "alicia", "clare", "deimus", "eagle", "marlene", "charlotte",
			"willard", "lleyton", "michelle", "rin", "viktor", "carlos",
			"hotaru", "trixie", "ricardo", "camille", "jannette", "peter", "issac",
			"rebecca", "ellie", "martin", "bruce", "mia", "denise",
			"gereon", "lucy", "tian", "harang", "j", "belzer", "stormshadow",
			"richel", "risa", "rick", "jekiel", "tanya", "carol",
			"lysander", "ludwig", "melvin", "diana", "clive", "helena", "eva",
			"empty", "empty", "empty", "empty", "empty", "empty"];

		for(var i=0; i<charname.length; i++) {
			var char = charname[i];
			var imgHTML = "<li>";
			imgHTML += "<a href='#'>";
			imgHTML += "<img src='../img/thum_name_on_" + char + ".jpg'>";
			imgHTML += "</a>";
			imgHTML += "</li>";

			$(".char-list-thum>ul").append(imgHTML);
		}
	}

	charcterthum();
});
