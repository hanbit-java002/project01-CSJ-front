require([
	"common",
], function() {
	var mainImgList = ["170320-bg1.png", "170320-bg2.png",
		"170320-bg3.png", "170320-bg4.png", "170320-bg5.png",
		"170320-bg6.png", "170320-bg7.png"];

	var timer;
	var currentIndex = 0;

	function rotateImg(index) {
		if (!index || index >= mainImgList.length) {
			index = 0;
		}
		else if (index < 0) {
			index = mainImgList.length - 1;
		}

		currentIndex = index;
		var imgIndex = mainImgList[index];

		$(".img-slide").css("background-image", "url('" +
			global.root + "/img/" + imgIndex + "')");

		clearTimeout(timer);
		var flag = true;
		timer = setTimeout(function() {
			rotateImg(++index);
		}, 3000);

		$(".pause-btn").on("click", function() {
			if(flag) {
				clearTimeout(timer);
				$(".pause-btn").css("background-position-y", "100%");
			}
			else{
				timer = setTimeout(function() {
					rotateImg(++index);
				}, 3000);
				$(".pause-btn").css("background-position-y", "0%");
			}
			flag = !flag;
		});
	}

	//$(".btn-box>li:first-child").prepend(rotateImg(currentIndex));

	$(".btn-box>li:nth-child(3)").append(mainImgList.length);

	$(".prev-btn").on("click", function() {
		rotateImg(currentIndex - 1);
	});

	$(".next-btn").on("click", function() {
		rotateImg(currentIndex + 1);
	});

	$(".toon-thum-block>li").on("mouseenter", function() {
		$(".selected-toon").css("left", $(this).index() * 51 + 5);
	});

	var eventimgList = ["main-left-bnr1.jpg", "main-left-bnr2.jpg",
		"main-left-bnr3.jpg", "main-left-bnr4.jpg"];

	function issueImg(index) {
		if (!index || index >= eventimgList.length) {
			index = 0;
		}
		else if (index < 0) {
			index = eventimgList.length - 1;
		}

		currentIndex = index;
		var imgIndex = eventimgList[index];

		$(".issue-img").css("background-image", "url('" +
			global.root + "/img/" + imgIndex + "')");
		}
		$(".prev-little-btn").on("click", function() {
			issueImg(currentIndex - 1);
		});

		$(".next-little-btn").on("click", function() {
			issueImg(currentIndex + 1);
		});
	rotateImg();
	issueImg();
});
