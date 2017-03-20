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
			if(flag === true) {
				clearTimeout(timer);
				flag = !flag;
			}
			else if(flag ===false) {
				timer = setTimeout(function() {
					rotateImg(++index);
				}, 3000);
				flag = !flag;
			}
		});
	}

	$(".prev-btn").on("click", function() {
		rotateImg(currentIndex - 1);
	});

	$(".next-btn").on("click", function() {
		rotateImg(currentIndex + 1);
	});
	rotateImg();
});
