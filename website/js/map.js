$(document).foundation();

(function(){
	"use strict";

	var circles = document.querySelectorAll(".circle");
	var infoBoxes =  document.querySelectorAll(".boxes");

	TweenMax.to(circles[0], 1, {left: "60%", ease: Bounce.easeOut});
	TweenMax.to(circles[1], 1, {delay: .5, left: "28%", ease: Bounce.easeOut});

	function showInfo(e) {
		//console.log("showin' it");
		//console.log(e.currentTarget.dataset.box);
		var boxNum = e.currentTarget.dataset.box;
		TweenMax.to(infoBoxes[boxNum],.5, {autoAlpha:1});
	}

	function hideInfo(e) {
		//console.log("hidn' it");
		var boxNum = e.currentTarget.dataset.box;
		TweenMax.to(infoBoxes[boxNum],1, {autoAlpha:0});
	}

	for(var i = 0; i < circles.length; i++) {
		circles[i].addEventListener("mouseover", showInfo, false);
		circles[i].addEventListener("mouseout", hideInfo, false);
	}

})();
