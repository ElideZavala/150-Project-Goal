const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product'); //Ojo

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function (e) {
		const current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active"; 
		 //TODO: Se deja espacio en  blanco en la clase active para evitar que se peque con las otras clases del elemento.
		
		// Switch 
		const filter = e.target.dataset.filter;
		// console.log(filter);
		storeProducts.forEach((product) => {
			if (filter === "all") {
				product.style.display = "block";
			} else if (product.classList.contains(filter)) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		})
	});
}

// Filtrar Busqueda 
const search = document.getElementById('search');
const productName = document.querySelectorAll('.product-details h2');
const noResult = document.querySelector('.no-result');


const filterProducts = (e) => {
	const text = e.target.value.toLowerCase();

	productName.forEach( product => {
		const item = product.textContent;
			
		//Convertimos el item en minuscula y verificamos si el metodo a verificar coincide con el nomre del producto
		if (item.toLowerCase().indexOf(text) != -1) {
			product.parentElement.parentElement.style.display = "block";
			noResult.style.display = "none"
		} else {
			product.parentElement.parentElement.style.display = "none";
			noResult.style.display = "block"
		}
	})
}

search.addEventListener("keyup", filterProducts);

// Tema Oscuro
const toggleDarkMode = document.querySelector('.toggle-darkmode');
const toggleText = document.querySelector('.toggle-text');

let darkMode = localStorage.getItem('darkMode');

// Modo oscuro
const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	toggleText.textContent = 'Tema Normal';
	localStorage.setItem("darkMode", "enabled");
}

// Eliminar el Dark Mode
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	toggleText.textContent = 'Tema Oscuro';
	localStorage.setItem("darkMode", null);
}

// Guardar el DarkMode History 
if (darkMode === "enabled") {
	enableDarkMode();
}

// Add Event Listener
toggleDarkMode.addEventListener('click', () => {
	let darkMode = localStorage.getItem('darkMode');

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
})