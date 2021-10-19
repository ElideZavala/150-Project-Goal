const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
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

// Mostrar Mensaje de exito 
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// GetFieldName 
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}