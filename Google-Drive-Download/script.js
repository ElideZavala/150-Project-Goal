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
				alert("Porfavor genera un link de descarga")
			}
		}
	}
}