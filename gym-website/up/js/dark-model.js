let checkbox = document.querySelector('input[name="theme"');
let htmlElement = document.documentElement;
console.log(htmlElement.attributes[0].nodeValue	);

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		smoothTrans();
		htmlElement.setAttribute('data-theme', 'dark');
	} else { 
		htmlElement.setAttribute('data-theme', 'light');
	}
});

// Agregamos la transicion y despues de 1s la Eliminamos. 
let smoothTrans = () => {
	htmlElement.classList.add('transition');
	window.setTimeout(() => {
		htmlElement.classList.remove('transition');
	}, 1000)
}