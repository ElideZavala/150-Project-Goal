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
password.addEventListener("keyup", () => {
	let pass = password.value;
	checkStrength(pass);
});

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

// Comprobar la seguridad de la contraseña
function checkStrength(password) {
	let strength = 0;

	// Checar minusculas y mayusculas
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
		strength += 1
		// lowUpperCase.classList.remove("fa-circle");
		// lowUpperCase.classList.add("fa-check");
		addCheck(lowUpperCase);
	} else {
		lowUpperCase.classList.add("fa-circle");
		lowUpperCase.classList.remove("fa-check");
	}
}

// Agregar Icono de Verificación
function addCheck(charRequired) {
	charRequired.classList.remove("fa-circle");
	charRequired.classList.add("fa-check");
}