const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-wrapper');

menu.addEventListener('click', () => {
	nav.classList.toggle('change');
})