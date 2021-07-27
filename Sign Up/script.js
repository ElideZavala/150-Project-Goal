const btn = document.querySelector('.banner-btn');
const banner = document.querySelector('.banner');
const formContainer = document.querySelector('.form-container');
 
btn.addEventListener('click', mostrarFormulario);

function mostrarFormulario() {
	banner.style.display = 'none'; 
	formContainer.style.cssText = 'Opacity: 1; visibility: visible';
}