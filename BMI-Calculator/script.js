// IMC - Kg/m2
// Normal -18.5 -24.9 
// Underweight(Desnutrido) - < 18.5 - 24.9
// Overweight(Sobrepeso) 25 - 29.9 
// Obese - 30  and above
// Que es el IMC? 
// El índice de masa corporal (IMC) es un método utilizado para estimar la cantidad de grasa corporal que tiene una persona, y determinar por tanto si el peso está dentro del rango normal, o por el contrario, se tiene sobrepeso o delgadez. El índice de masa corporal (IMC) es un método utilizado para estimar la cantidad de grasa corporal que tiene una persona, y determinar por tanto si el peso está dentro del rango normal, o por el contrario, se tiene sobrepeso o delgadez. 

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener('click', calcularIMC);
reset.addEventListener("click", resetForm);

function calcularIMC(e) {
	e.preventDefault()
	let height = document.querySelector('.height').value;
	let weight = document.querySelector('.weight').value;	
	
	// Validar el Input
	if (height === "" || isNaN(height)) {
		return (result.innerHTML = "Favor de escribir un altura valida &#128591" );
	} else if (weight === "" || isNaN(weight)) {
		weight === ""
		return (result.innerHTML = "Favor de escribir un peso valido &#128591" );
	} else {
		height = height / 100;
		let imc = (weight / Math.pow(height, 2)).toFixed(2); // Redondeamos a dos decimales. 
		console.log(imc);

		if (imc < 18.5) {
			showResult(`Bajo Peso: <span>${imc}</span>`, "orange", "black");
		} else if (imc >= 18.5 && imc < 24.9) {
			showResult(`Normal: <span>${imc}</span>`, "green", "white");
		} else if (imc >= 25.0 && imc < 29.9) {
			showResult(`Sobre Peso: <span>${imc}</span>`, "blue", "white");
		} else {
			showResult(`Obesidad: <span>${imc}</span>`, "red", "white");
		}		
	}
	result.style.display = "block";
	reset.style.display = "block"		
}

function showResult(val, color, textColor) {
	result.style.backgroundColor = color;
	result.style.color = textColor;
	return (result.innerHTML = val);
}

function resetForm() {
	const form = document.querySelector("form");
	form.reset();
	reset.style.display = "none";
	result.style.display = "none";
}