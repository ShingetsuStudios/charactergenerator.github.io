var colorBox = document.querySelector("#colorBox");



function ranArray(arrayName) {
	var ranArNum = Math.floor(Math.random() * (arrayName.length)+1);
	var displayName = arrayName[0] + 'Display'
    if (arrayName[0] == "species") {
	  var myUrl = "https://www.google.com/search?hl=en&site=imghp&tbm=isch&source=hp&biw=950&bih=970&q=" + arrayName[ranArNum];
	  document.getElementById('speciesLinkId').href = myUrl
	}
	document.getElementById(displayName).innerHTML = arrayName[ranArNum];
}


function barGen(divName, backColor, progColor, var1, var2) {
  var elem = document.getElementById(divName+"2");
  var percent = Math.floor(Math.random() * 100);
  var width = 1
  elem.style.width = percent + '%';
  $("#"+divName+"1").css('background-color', backColor);
  $("#"+divName+"2").css('background-color', progColor);

  
  if (divName == "endowment") {
    greeting = percent.toString() + "% " + var1;
} else if (percent > 50) {
    greeting = percent.toString() + "% " + var1;
} else if (percent < 50) {
    greeting = (100-percent).toString() + "% " + var2;
} else {
	greeting = percent.toString() + "% "+ var1 + "/" + var2;
	}

document.getElementById(divName + "Text").innerHTML = greeting;
}
function genColorBox(num) {
  var cList = '<li class = "colorList"> ';
  var cBox = '<div id = "colorBox' + num + '" onclick="randomColor(' + num + ');"'
  var cClass = 'class = "colorBox">'
  var cName = '<p id="colorName' + num + '"></p>'
  var cButton = '</div>';
    var closeList = ' </li>';
  var appendBox = cList + cBox + cClass + cName + cButton + closeList;
  $(".colorBoxContainer").append(appendBox);
}
function randomColor(num) {
  var randColor = Math.floor(Math.random() * (256 * 256 * 256 - 1));
  var randColorHex = "#" + randColor.toString(16);
  var boxId = "#colorName"+num.toString();
  var boxDiv = "#colorBox" + num.toString();
  $(boxDiv).css("background-color", randColorHex);
}

function colorReset() {
  $('.colorBox').remove();
  $('.colorButton').remove();
  $('.colorList').remove();
  myNumber = document.getElementById("colorNum").value;
  for (i = 1; i-1 < myNumber; i++) {
	genColorBox(i)
	randomColor(i)
  }
}

function newGender() {
  barGen("gender","#ff66cc" ,"#33ccff","Masculine", "Feminine");
}
function newHight() {
  barGen("hight", "#00ca42", "#5e4bfe", "Short", "Tall");
}
function newWeight() {
  barGen("weight", "#7d4e3e", "#e4e1f7","Skinny", "Fat");
}
function newStrength() {
  barGen("strength", "#edea78", "#b75215", "Strong", "Weak");
}
function newEndowment() {
  barGen("endowment", "#ffffff", "#a4d314", "Endowed", "Not Endowed");
}
function newHairLength() {
  barGen("hair", "#fabc7e", "#4e3214", "Long", "Short");
}
function newBody() {
	newGender();
	newHight();
	newWeight();
	newStrength();
}
function generate() {
	genColorBox(1);
	randomColor(1);
	colorReset();
	ranArray(job);
	ranArray(species);
	newGender();
	newHight();
	newWeight();
	newStrength();
	newEndowment();
	newHairLength();
	ranArray(hair);
}
