const scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
	// la activamos cuando el scroll sea mayor a 200
	scroll.classList.toggle('active', window.scrollY > 200);
});

function scrollToTop () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

scroll.addEventListener('click', () => {
	scrollToTop();
});
