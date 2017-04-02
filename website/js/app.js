(function(){
	"use strict";

var content = document.getElementById("content");
var button = document.getElementById("hamburger");

button.onclick = function(e) {
e.preventDefault()
	if(content.className == "open"){
		content.className = "";
	} else {
		content.className = "open";
	}

};











})();
