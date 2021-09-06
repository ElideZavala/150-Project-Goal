const celcius = document.querySelector('.celcius');
const fahrenheit = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const form = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
	if(e.target.classList.contains("celsius")) {
		let x = e.target.value;
		console.log(x);
	}
}