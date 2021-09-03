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
let height = document.querySelector('.height').value;
let weight = document.querySelector('.weight').value;

btn.addEventListener('click', calcularIMC);

function calcularIMC(e) {
	e.preventDefault()
	
	// Validate Input
	if (height === "" || isNaN(height)) {
		return (result.innerHTML = "Favor de escribir un altura valida &#128591" );
	} else if (weight === "" || isNaN(weight)) {
		weight === ""
		return (result.innerHTML = "Favor de escribir un peso valido &#128591" );
	} else {
		height = height / 100;
		let imc = weight / Math.pow(height, 2);
		console.log(imc);
	}	
}
