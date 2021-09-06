let pounds = document.querySelector('.pounds');
let kilgms = document.querySelector('.kilograms');
let miligm = document.querySelector('.miligrams');
let grams  = document.querySelector('.grams');
let ounces = document.querySelector('.ounces');
let form   = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
	if (e.target.classList.contains("pounds")) {
		let x = e.target.value;
		kilgms.value = (x / 2.2046).toFixed(2);
		grams.value  = (x / 0.0022046).toFixed(2);
		ounces.value = (x * 16).toFixed(2);
		miligm.value = (x / 453592.37);
	}
	if (e.target.classList.contains("kilograms")) {
		let x = e.target.value;
		pounds.value = (x * 2.2045).toFixed(2);
		grams.value  = (x * 1000).toFixed(2);
		ounces.value = (x * 35.274).toFixed(2);
		miligm.value = (x * 1000000);  
	}
	if (e.target.classList.contains("miligrams")) {
		let x = e.target.value;
		pounds.value = (x * 2.2045).toFixed(2);
		grams.value  = (x * 1000).toFixed(2);
		ounces.value = (x * 35.274).toFixed(2);
		kilgms.value = (x / 1000000);  
	}
	if (e.target.classList.contains("grams")) {
		let x = e.target.value;
		kilgms.value = (x / 1000).toFixed(2); 
		pounds.value = (x * 0.0022046).toFixed(2);
		ounces.value = (x * 0.035274).toFixed(2);
	}
	if (e.target.classList.contains("ounces")) {
		let x = e.target.value;
		kilgms.value = (x / 35.274).toFixed(2);
		grams.value  = (x / 0.035274).toFixed(2);
		pounds.value = (x / 0.0625).toFixed(2);
	}
}
                                                                           
// Convertidor de Libras
