let state    = document.getElementById("password");
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");

let lowUpperCase = document.querySelector(".low-upper-case i"),
	number = document.querySelector(".number i"),
	specialChar = document.querySelector(".special-Char i"),
	eightChar = document.querySelector(".eight-char i"),
	showPassword = document.querySelector(".show-pass"),
	eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
	let pass = password.value;
	checkStrength(pass);
});

function toggle() {
	
}