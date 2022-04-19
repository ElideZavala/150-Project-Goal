const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');

menu.addEventListener('click', () => {
	// Alternamos clases. 
	menu.classList.toggle("open");
	header.classList.toggle("open");
	overlay.classList.toggle("open")
})