const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const buttons = document.querySelector("button");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkRequired([username, email, password, password2]);
	checkLength(username, 5, 16);
	checkLength(password, 8, 16);
	checkEmail(email);
	matchPassword(password, password2);
	// correct();
});

// Checar los campos requeridos
function checkRequired(inputAll) {
	inputAll.forEach( input => {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} es requerido`);
		} else {
			showSuccess(input);
		}
	});
}

// Mostrar Mensaje de error
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector('small'); 
	small.innerText = message;
}

// Longitud
function checkLength(input, min, max) {
	if(input.value.length < min ) {
		showError(input, `${getFieldName(input)} debe tener mínimo ${min} caracteres`);
	} else if (input.value.length > max ) {
		showError(input, `${getFieldName(input)} debe ser menos que ${max} caracteres`);
	} else {
		showSuccess(input);
	}
}

// Validar Email
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, "El correo no es valido");
	}
}

// Checar Contraseña
function matchPassword(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, "Contraseñas no coinciden");
	}
}


// Mostrar Mensaje de exito 
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// GetFieldName 
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function correct() {
	const msg = buttons.parentElement;
	msg.innerText = "Has Completado tu Registro Correctamente"
	msg.classList.add("login");
}