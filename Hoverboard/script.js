const container = document.getElementById('container');
const cuadrados = 1000;

for(let i = 0; i < cuadrados; i++) {
	const cuadrado = document.createElement('div');
	cuadrado.classList.add('square');
	
	cuadrado.addEventListener('mouseover', () => setColor(cuadrado));
	cuadrado.addEventListener('mouseout', () => removeColor(cuadrado));
	
	container.appendChild(cuadrado);
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
   }

function setColor(element) {
	// const color = getRandomColor()
	element.style.background = getRandomColor();
	element.style.transition = "0s";
}

function removeColor(element) {
	element.style = '';
}
