const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value; //leer el numero 
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
})

function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;

	// Obtenemos los valores que esten en true 
	const typesArr = [{
		lower
	}, {
		upper
	}, {
		number
	}, {
		symbol
	}].filter(item => Object.values(item)[0]);

	// Si las casillas de checked estan vacias
	if (typesCount === 0) {
		return '';
	}

	// leer el length y repetir hasta acompletar la peticion de elementos
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0]
			// Insertamos un indice cualquiera y llamamos a la función 
			generatedPassword += randomFunc[funcName]();
		})
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;

}


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*()[]=<>/,.{}';
	return symbols[Math.floor(Math.random() * symbols.length)];
}