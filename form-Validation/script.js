const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {

});

// Checar los campos requeridos
function checkRequired(inputAll) {
	inputAll.forEach( input => {
		if (input.value.trim() === "") {
			showError()
		} else {
			showSuccess();
		}
	});
}

// Mostrar Mensaje de error
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
}