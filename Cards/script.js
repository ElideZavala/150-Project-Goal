textEl = document.querySelector('.heading');
const heading = 'Porfavor Conoce nuestro Equipo de Trabajo';
let i = 0;

const writeText = () => {
	if (i < heading.length) {
		textEl.innerHTML += heading.charAt(i); 
		i++;

		setTimeout(writeText, 150); 
	} 
}

writeText()







