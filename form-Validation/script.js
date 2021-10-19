const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formControl = input.parentElement;

form.addEventListener("submit", (e) => {

});

// Checar los campos requeridos
function checkRequired(inputAll) {
	inputAll.forEach( input => {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName}Nombre del Usuario es requerido`);
		} else {
			showSuccess(input);
		}
	});
}

// Mostrar Mensaje de error
function showError(input, message) {
	formControl.className = "form-control error";
	const small = document.querySelector('small'); 
	small.innerText = message;
}

// Mostrar Mensaje de exito
function showSuccess() {
	formControl.className = "form-control success";
}