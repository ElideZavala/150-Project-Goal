const word   = document.querySelector('.input-text');
const btn    = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', contarVocal);

function contarVocal() {
	let vocalContar = 0;
	let wordVol= word.value.toLowerCase();

	for (let i = 0; i < wordVol.length; i++) {
		let letter = wordVol[i];
		if (letter.match(/([a,e,i,o,u])/)) {
			vocalContar++;
		}
	}

	console.log(vocalContar);
	result.innerHTML = `${word.value.toUpperCase()} tiene ${vocalContar} vocales`;
}
