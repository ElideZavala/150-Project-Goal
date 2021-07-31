const btn    = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindromo);

function palindromo() {
	const word   = document.querySelector('.input-text').value;
	let len = word.length;

	let inicio = word.substring(0, Math.floor(len / 2)).toLowerCase();
	let final  = word.substring(len - Math.floor(len / 2)).toLowerCase();

	// TODO: Dividir, dar vuelta y unir
	// let rever   = final.split("").reverse().join("");
	let rever   = [...final].reverse().join("");
	
	if(inicio == rever ) {
		result.innerHTML = `${word.toUpperCase()} es un palíndromo`
	} else {
		result.innerHTML = `${word.toUpperCase()} No es un palíndromo`
	}
}	