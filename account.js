// ACCOUNT POPUP
var accbtn = document.getElementById("accbtn")
var accpopup = document.getElementById("accpopup");
var accpopupc = document.getElementById("accpopupc")

if (window.matchMedia("(min-width:700px)").matches){
accbtn.addEventListener("mouseover", accopopup);
accbtn.addEventListener("mouseout", accpopdown);
accpopup.addEventListener("mouseover", accopopup);
accpopup.addEventListener("mouseout", accpopdown);
}

function accopopup() {
	accpopup.style.visibility="visible";
  accpopup.style.zIndex="2";
	accpopup.style.transition="visibility 0s 0s";

	accbtn.style.zIndex="3";

	accpopupc.style.opacity="100%";
};
function accpopdown() {
	accpopup.style.visibility="hidden";
	accpopup.style.zIndex="1";
	accpopup.style.transition="visibility 0s 0.2s";

	accpopupc.style.opacity="0";
}

// SIGNUP & LOGIN POPUP
var accbtns = document.getElementById("accbtns");
var signupform = document.getElementById("signupform");
var acchovercss = document.getElementsByClassName("accpopup")
var signupbtn = document.getElementById("signupbtn");
var account = document.getElementById("account");
var signupformc = document.getElementById("signupformc");
var body = document.getElementById("body");

var loginform = document.getElementById("loginform");
var loginbtn = document.getElementById("loginbtn");
var loginformc = document.getElementById("loginformc");

signupbtn.addEventListener("mousedown",signuppopup);
signupbtn.addEventListener("mousedown",accpopdown);

loginbtn.addEventListener("mousedown",loginpopup);
loginbtn.addEventListener("mousedown",accpopdown);

function signuppopup() {
  body.style.overflow="hidden";

  signupclosebtn.style.opacity="100%";

	signupformc.style.opacity="100%";

	signupbackground.style.visibility="visible";
	signupbackground.style.backgroundColor="rgb(0, 0, 0, 0.95)";
	signupbackground.style.transition= "background-color 0.2s,visibility 0s ease 0s";
}
function loginpopup() {
  body.style.overflow="hidden";

  loginclosebtn.style.opacity="100%";

  loginformc.style.opacity="100%";

	loginbackground.style.visibility="visible";
	loginbackground.style.backgroundColor="rgb(0, 0, 0, 0.9)";
	loginbackground.style.transition= "background-color 0.2s,visibility 0s ease 0s";
}

accbtn.addEventListener("mousedown",accclick);

function accclick() {
	
}

var signupclosebtn = document.getElementById("signupclosebtn");
var signupbackground = document.getElementById("signupbackground");

signupclosebtn.addEventListener("mousedown",signuppopdown);

var loginclosebtn = document.getElementById("loginclosebtn");
var loginbackground = document.getElementById("loginbackground");

loginclosebtn.addEventListener("mousedown",loginpopdown);

function signuppopdown() {
  body.style.overflowY="scroll";

  signupclosebtn.style.opacity="0";

  signupformc.style.opacity="0";

	signupbackground.style.visibility="hidden";
	signupbackground.style.backgroundColor="rgb(0, 0, 0, 0)";
	signupbackground.style.transition= "background-color 0.2s,visibility 0s ease 0.2s";
}
function loginpopdown() {
  body.style.overflowY="scroll";

  loginclosebtn.style.opacity="0";

  loginformc.style.opacity="0";

	loginbackground.style.visibility="hidden";
	loginbackground.style.backgroundColor="rgb(0, 0, 0, 0)";
	loginbackground.style.transition= "background-color 0.2s,visibility 0s ease 0.2s";
}