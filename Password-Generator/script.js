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
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());