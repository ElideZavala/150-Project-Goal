const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const descargarLink = document.getElementById('download-link');

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
				alert("Porfavor genera un enlace de descarga");
			} else {
				target.select();
				document.execCommand("copy");
				alert("Enlace ha sido copiado exitosamente!!")
			}
		}

		const copy = document.querySelector('.copy');
		copy.addEventListener('click', () => {
			return copyText(descargarLink);
		})
	}
}