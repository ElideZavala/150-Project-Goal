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

		if (item.toLowerCase().indexOf) {

		}
	})
}

search.addEventListener("keyup", filterProducts);

