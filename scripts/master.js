var card1 = document.getElementById("card1");
var cardBg1 = document.getElementById("cardBg1");
card1.addEventListener("mouseover", function() { displayBg("cardBg1"); });
cardBg1.addEventListener("mouseout", function() { disappearBg("cardBg1"); });

var card2 = document.getElementById("card2");
var cardBg2 = document.getElementById("cardBg2");
card2.addEventListener("mouseover", function() { displayBg("cardBg2"); });
cardBg2.addEventListener("mouseout", function() { disappearBg("cardBg2"); });

var displayBg = function(elementName){
	document.getElementById(elementName).style.visibility = "visible";
}
var disappearBg = function(elementName){
  document.getElementById(elementName).style.visibility = "hidden";
}
