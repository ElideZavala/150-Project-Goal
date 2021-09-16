// Variables
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');

const apiURL = "http://api.lyrics.ovh";

// Obtener el valor delinput 
form.addEventListener('submit', e => {
	e.preventDefault();
	searchValue = search.value.trim();

	if(!searchValue) {
 		alert("Nada que buscar")  // <== Crear Una funcion de mensajes 
 	} else {
		beginSearch(searchValue)
	}
})
 
// Creamos la function de Busqueda 
async function beginSearch(searchValue) {
	const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
	const data = await searchResult.json;
	console.log(data);
	// displayData(data);
}

// Mostrar Resultado de la Busqueda. 
// function displayData(data) {
// 	result.innerHTML = `
// 		<ul class="songs">
		
// 		</ul>
// 	`
// }