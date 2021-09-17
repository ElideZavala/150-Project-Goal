// Variables
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const contentEl = document.querySelector('header');

const apiURL = "https://api.lyrics.ovh";

// Obtener el valor delinput 
form.addEventListener('submit', e => {
	e.preventDefault();
	searchValue = search.value.trim();

	if(!searchValue) {
 		// alert("Nada que buscar")  // <== Crear Una funcion de mensajes 
		mensaje("Nada que buscar")
 	} else {
		beginSearch(searchValue)
	}
})
 
// Creamos la function de Busqueda 
async function beginSearch(searchValue) {
	const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
	const data = await searchResult.json();
	console.log(data);
	displayData(data);
}

// Mostrar Resultado de la Busqueda. 
function displayData(data) {
	result.innerHTML = `
		<ul class="songs">
			${data.data
				.map(song => `<li>
							<div>
								<strong> ${song.artist.name}</strong> - ${song.title}	
							</div>
								<span data-artist="${song.artist.name}"
								data-songtitle="${song.title}">Obtener Letra</span>
							</li>`
						)
				.join('')}
		</ul>
	`
}

// Obtener la Function de las Letras
result.addEventListener('click', e => {
	const clickedElement = e.target;

	// Boton para Obtener la Letra
	if(clickedElement.tagName === 'SPAN') {
		const artist = clickedElement.getAttribute('data-artist');
		const songTitle = clickedElement.getAttribute('data-songtitle');

		getLyrics(artist, songTitle);
	}
})

async function getLyrics(artist, songTitle) {
	const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
 
	const data = await response.json();

	try {
		console.log(data)
		const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
		result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle} </h2>
		<p>${lyrics}</p>`
	} catch (error) {
		console.log(error);
		mensaje('Letra no encontrada');
	}
}                

function mensaje(msg) {
	const parrafo = document.createElement('p')
	parrafo.innerText = msg;
	parrafo.classList = 'mesag'
	contentEl.appendChild(parrafo);

	setTimeout(() => {
		parrafo.remove();
	}, 3000);
}