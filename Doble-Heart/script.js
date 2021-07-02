const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// Realizamos nuestro propio dobleClick por tiempos
loveMe.addEventListener('click', (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime()
	} else {
		if ((new Date().getTime() - clickTime) < 800) {
			createHeart(e);
			clickTime = 0;
		} else {
			clickTime = new Date().getTime();
		}
	}
})

const createHeart = (e) => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	//-- Obtener la posición exacta del mouse dentro del elemento --
	const x = e.clientX; // ==> e -> Pertenece a toda la imagen 
	const y = e.clientY;
	const lefOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;
	const xInside = x - lefOffset; // ==> Logramos centrarnos en el objeto. 
	const yInside = y - topOffset;

	heart.style.top = `${yInside}px`
	heart.style.left = `${xInside}px`

	loveMe.appendChild(heart);

	times.innerHTML = ++timesClicked;
}