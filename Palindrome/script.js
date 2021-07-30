const btn    = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindromo);

function palindromo() {
	const word   = document.querySelector('.input-text').value;
	let len = word.length;

	let start = word.substring(0);
}