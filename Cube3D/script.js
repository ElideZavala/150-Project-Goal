const leftArrow  = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const playsPause = document.querySelector('.play-pause');
const cubes = document.querySelectorAll('.cube');

let x = 0;
let bool = false;
let interval;

function cubesTurn() {
	Array.from(cubes).forEach( cube => {
		cube.style.transform = `rotateY(${x}deg)`
	})
} 
	
function changePlayPause() {
	const i = document.querySelector('.play-pause i');
	const clase = i.classList[2];
	if(clase === 'fa-caret-square-right') {
		i.classList.remove('fa-caret-square-right');
		i.classList.add('fa-pause-circle');
	} else {
		i.classList.remove('fa-pause-circle');
		i.classList.add('fa-caret-square-right');
	}
}

function playPause() {
		if(!bool) {
			interval = setInterval(() => {
				x -= 90;
				cubesTurn();	
			}, 2500)
			changePlayPause();
			bool = true;
		} else {
			clearInterval(interval)
			changePlayPause();
			bool = false;
		}
}

leftArrow.addEventListener('click', () => {
	x += 90;
	cubesTurn();
	if(bool) {
		playPause();
	}
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
	if(bool) {
		playPause();
	}
});

rightArrow.addEventListener('mouseover', () => {
	x -= 25;
	cubesTurn();
});

rightArrow.addEventListener('mouseout', () => {
	x += 25;
	cubesTurn();
});

playsPause.addEventListener('click', () => {
	playPause();
})