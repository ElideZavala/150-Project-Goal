const leftArrow = document.querySelector('.left-arrow');
const cubes = document.querySelectorAll('.cube');

leftArrow.addEventListener('click', () => {
	
	Array.from(cubes).forEach(cube => {
		cube.style.transform = 'rotateY(90deg)'
	})
	
});