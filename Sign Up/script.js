const btn = document.querySelector('.banner-btn');
const banner = document.querySelector('.banner');
const formContainer = document.querySelector('.form-container');
const container = document.querySelector('.container');
const btnX = document.querySelector('.x-btn');
 
btn.addEventListener('click', mostrarForm);
btnX.addEventListener('click', cerrarForm);

function mostrarForm() {
	banner.style.display = 'none'; 
	formContainer.style.cssText = 'Opacity: 1; visibility: visible';
	container.style.background = 'linear-gradient(0, #ffffff 0, #fff9ff 10%, #ffebf9 20%, #f8dbf3 30%, #ebcbed 40%, #d9bae8 50%, #c4aae4 60%, #ab9ee2 70%, #9094e0 80%, #6f8ddf 90%, #4387dd 100%)'
}

function cerrarForm() {
	banner.style.display = 'flex';
	formContainer.style.cssText = 'opacity: 0; visibility: hidden';
	container.style.cssText = 'background:linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)),url(images/3.webp) center no-repeat; background-size: cover';
}