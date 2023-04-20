// MENU
var menucontainer = document.getElementById("menucontainer");
var menu = document.getElementById("menu");
var menuclosebtn = document.getElementById("menuclosebtn")

function openmenu(){
	menucontainer.style.visibility="visible";
	menucontainer.style.backgroundColor="rgb(0, 0, 0, 0.95)";
	menucontainer.style.transition= "background-color 0.2s, visibility 0s ease 0s";

	menuclosebtn.style.opacity="100%";
	
	menu.style.opacity= "100%";
}
function closemenu(){
	menucontainer.style.visibility="hidden";
	menucontainer.style.backgroundColor="rgb(0, 0, 0, 0)";
	menucontainer.style.transition= "background-color 0.2s, visibility 0s ease 1s";

	menuclosebtn.style.opacity="0";
	
	menu.style.opacity= "0";
}

// THEME
var themeswitch = document.getElementById("themeswitch");
var themecheckbox = document.getElementById("themecheckbox");
var body = document.getElementById("body");
var stylesheet = document.styleSheets[0];
var themeswitch = document.getElementById("themeswitch");

function switchtheme(){
  if (themecheckbox.checked == true){
    stylesheet.insertRule(':root{--body-color:white}');
  }
  else{
    stylesheet.insertRule(':root{--body-color:#2c2c2c}');
  }
}