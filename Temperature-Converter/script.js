const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const form = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
	if(e.target.classList.contains("celsius")) {
		let x = e.target.value;
		fahrenheit.value = (x * 1.8 + 32).toFixed(2);
		kelvin.value = (x + 273.15);
	}
	if(e.target.classList.contains("fahrenheit")) {
		let x = e.target.value;
		celsius.value = ((x - 32) / 1.8).toFixed(2);
		kelvin.value = ((x -32) / 1.8 + 273.15).toFixed(2);
	}
	if(e.target.classList.contains("kelvin")) {
		let x = e.target.value;
		fahrenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
		celsius.value = (parseFloat(x) - 273.15).toFixed(2);
	}
}