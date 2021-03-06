let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let state;

let lowUpperCase = document.querySelector(".low-upper-case i"),
	number = document.querySelector(".number i"),
	specialChar = document.querySelector(".special-char i"),
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
		addCheck(lowUpperCase);
	} else {
		removeCheck(lowUpperCase);
	}
	// Corprobar los números
	if (password.match(/([0-9])/)) {
		strength += 1
		addCheck(number);
	} else {
		removeCheck(number);
	}
	// Corprobar los caracteres especiales
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
		strength += 1
		addCheck(specialChar);
	} else {
		removeCheck(specialChar);
	}
	// Checar si la contraseña es > 8.
	if (password.length > 7) {
		strength += 1
		addCheck(eightChar);
	} else {
		removeCheck(eightChar);
	}

	// passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
	// passwordStrength.classList.add("")
	// Actualizar progreso de la barra
	if (strength == 1) {
		removePassStrength()
		passwordStrength.classList.add("pb-danger");
		passwordStrength.style = "width: 25%";
	} else if (strength == 2) {
		removePassStrength()
		passwordStrength.classList.add("pb-warning");
		passwordStrength.style = "width: 50%";
	} else if (strength == 3) {
		removePassStrength()
		passwordStrength.classList.add("pb-primary");
		passwordStrength.style = "width: 75%";
	} else if (strength == 4) {
		removePassStrength()
		passwordStrength.classList.add("pb-success");
		passwordStrength.style = "width: 100%";
	} else {
		removePassStrength()
		passwordStrength.style = "width: 5%";
	}
}

// Eliminar clases del password
function removePassStrength() {
	passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
}

// Agregar Icono de Verificación
function addCheck(charRequired) {
	charRequired.classList.remove("fa-circle");
	charRequired.classList.add("fa-check");
}

// Eliminar Icono de Verificación
function removeCheck(charRequired) {
	charRequired.classList.add("fa-circle");
	charRequired.classList.remove("fa-check");
}