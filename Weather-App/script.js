const search = document.querySelector('.input');
const btn = document.querySelector('.btn');
const api = {
	key : "7d55409dc2603538db966d3600124d25",
 	base: "https://api.openweathermap.org/data/2.5/"
 }
 
 btn.addEventListener('click', getInput);

 function getInput(e) {
	e.preventDefault();
	if (e.type == 'click') {
		getData(search.value);
	}
 }

 function getData() {
	 fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
	 	.then(data => {
			 return data.json();
		 }).then(displayData);		 
}


function displayData(data) {
	console.log(data);
	if (data.cod === '404') {
		const error = document.querySelector('.error'); 
		error.textContent = "Por favor escribe una ciudad válida";
		error.style.background = 'rgba(0, 0, 0, .5)';
		setTimeout(() => {
			error.remove()
		}, 3000);
		search.value = "";
	} else {
		const city = document.querySelector('.city');
		city.innerText = `${data.name}, ${data.sys.country}
		search.value = ""
	}
}