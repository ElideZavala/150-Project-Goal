let pounds = document.querySelector('.pounds');
let kilgms = document.querySelector('.kilograms');
let grams  = document.querySelector('.grams');
let ounces = document.querySelector('.ounces');
let form   = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
	if (e.target.classList.contains("pounds")) {
		let x = e.target.value;
		kilograms.value = 
		grams.value =  
		ounces.value = 
	}
	if (e.target.classList.contains("kilograms")) {
		let x = e.target.value;
		console.log(x)
	}
	if (e.target.classList.contains("grams")) {
		let x = e.target.value;
		console.log(x)
	}
	if (e.target.classList.contains("ounces")) {
		let x = e.target.value;
		console.log(x)
	}
}

// Convertidor de Libras
