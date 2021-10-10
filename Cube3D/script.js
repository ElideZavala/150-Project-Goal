const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cubes = document.querySelectorAll('.cube');

let x = 0;

function cubesTurn() {
	Array.from(cubes).forEach( cube => {
		cube.style.transform = `rotateY(${x}deg)`
		console.log(x)
	})
} 

leftArrow.addEventListener('click', () => {
	x += 90;
	cubesTurn();
});

leftArrow.addEventListener('mouseover', () => {
	x += 25;
	cubesTurn();
});

rightArrow.addEventListener('click', () => {
	x -= 90;
	cubesTurn();
});

