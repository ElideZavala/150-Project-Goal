const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const playsPause = document.querySelector('.play-pause');
const cubes = document.querySelectorAll('.cube');

let x = 0, bool = false, interval ;

function cubesTurn() {
	Array.from(cubes).forEach( cube => {
		cube.style.transform = `rotateY(${x}deg)`
		console.log(x)
	})
} 
	
function playPause() {
		if(!bool) {
			interval = setInterval(() => {
				x -= 90;
				cubesTurn();	
			}, 1000)
			bool = true;
		} else {
			clearInterval(interval)
			bool = false;
		}
}

leftArrow.addEventListener('click', () => {
	x += 90;
	cubesTurn();
});

leftArrow.addEventListener('mouseover', () => {
	x += 25;
	cubesTurn();
});

leftArrow.addEventListener('mouseout', () => {
	x -= 25;
	cubesTurn();
});

rightArrow.addEventListener('click', () => {
	x -= 90;
	cubesTurn();
});

rightArrow.addEventListener('mouseover', () => {
	x -= 25;
	cubesTurn();
});

rightArrow.addEventListener('mouseout', () => {
	x += 25;
	cubesTurn();
});

playPause.addEventListener('click', {
	playsPause();
})