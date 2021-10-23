let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let state;

let lowUpperCase = document.querySelector(".low-upper-case i"),
	number = document.querySelector(".number i"),
	specialChar = document.querySelector(".special-Char i"),
	eightChar = document.querySelector(".eight-char i"),
	showPassword = document.querySelector(".show-pass"),
	eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
// password.addEventListener("keyup", () => {
// 	let pass = password.value;
// 	checkStrength(pass);
// });

// Toggle visibilidad de password
function toggle() {
	if (state) {
		password.setAttribute("type", "password");
		state = false;
	} else {
		password.setAttribute("type", "text");
		state = true;
	}
}

// Alternar Icono de contraseña
function toggleEye() {
	eyeIcon.classList.toggle("fa-eye-slash");
}

// Checare