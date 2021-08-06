const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const descargarLink = document.getElementById('download-link');
const copy = document.querySelector('.copy');
const contentEl = document.querySelector('.msg');

btn.addEventListener('click', generarLink);

function generarLink(e) {
	e.preventDefault();

	const gLinkValue  = gLink.value;
	const id = 'https://drive.google.com/file/d/'
	
	const confirmLink = gLink.value.includes(id);

	if (confirmLink == true) {
		const getDownloadLink = gLink.value.replace(id,'https://drive.google.com/uc?export=download&id=').replace('/view?usp=sharing','')
		
		descargarLink.value = getDownloadLink;

		function copyText(target) {
			if (target.value == "") {
				mensaje("Porfavor genera un enlace de descarga"); 
			} else {
				target.select();
				document.execCommand("copy");
				mensaje("Enlace ha sido copiado exitosamente!!"); 
			}
		}

		copy.addEventListener('click', () => {
			return copyText(descargarLink);
		})
	}
}

//Embed Audio function
	const audioOne = '<audio width="300" height="32" controls="controls" src=""';
	const audioTwo = '" type="audio/mp3></audio>';
	const embedAudio = document.getElementById("embed-audio");

	
// Mensaje
function mensaje(msg) {
	const parrafo = document.createElement('p');
	parrafo.innerText = msg;
	parrafo.style.textAlign = 'center';
	contentEl.appendChild(parrafo);

	setTimeout(() => {
		parrafo.remove();
		contentEl.appendChild('');
	}, 3000);
}