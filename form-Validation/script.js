const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

// Checar los campos requeridos
function checkRequired(inputAll) {
	inputAll.forEach( input => {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)}Nombre del Usuario es requerido`);
		} else {
			showSuccess(input);
		}
	});
}

// Mostrar Mensaje de error
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = document.querySelector('small'); 
	small.innerText = message;
}

// Mostrar Mensaje de exito 
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// GetFieldName 
function GetFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}