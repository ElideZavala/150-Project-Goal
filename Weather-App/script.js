const search = document.querySelector('.input');
const btn = document.querySelector('.btn');
const date = document.querySelector('.date');
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
	// console.log(data);
	if (data.cod === '404') {
		const error = document.querySelector('.error'); 
		error.textContent = "Por favor escribe una ciudad válida";
		error.style.background = 'rgba(0, 0, 0, .5)';
		setTimeout(() => {
			error.textContent = '';
		}, 2000);
		search.value = "";
	} else {
		const city = document.querySelector('.city');
		city.innerText = `${data.name}, ${data.sys.country}`;
		search.value = ""

		const today = new Date();
		// const date = document.querySelector('.date');
		date.innerText = dateFuntion(today);

		const temp = document.querySelector('.temp');
		temp.innerHTML = `
			Temp: ${Math.round(data.main.temp)} 
			<span>°C</span>
			`
		const weather = document.querySelector('.weather');
		weather.innerText = `Clima: ${weathers(data.weather[0].main)}`;

		const tempRange = document.querySelector('.temp-range');
		tempRange.innerHTML = `
			Temp Rango: ${Math.round(data.main.temp_min)}
			 <span>°C</span></div> / ${Math.round(data.main.temp_max)}
			 <span>°C</span></div>
		`;

		const weatherIcon = document.querySelector('.weather-icon');
		const iconURL = "https://api.openweathermap.org/img/w/";
		weatherIcon.src = iconURL + data.weather[0].icon + ".png"

		const humidity = document.querySelector('.humidity');
		humidity.innerText = `Humedad: ${data.main.humidity}%`

		const speedWind = document.querySelector('.wind-speed');
		speedWind.innerText = `Vel. del Viento: ${data.wind.speed}m/s`

		search.value = ""
	}
}

const hoy = new Date();
dateFuntion(hoy);
date.innerText = dateFuntion(hoy);

function dateFuntion(d) {
	let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	let days =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

	let day   = days[d.getDay()];     // Obtenemos el dia. 
	let date  = d.getDay();		    // dia actual en numero	 	
	let month = months[d.getMonth()]; // Obtenemos el mes. 
	let year  = d.getFullYear();      // Obtenemos el año.

	return `${day} ${date} de ${month}, ${year}`
}


function weathers(clima) {
	if (clima == 'Clouds') {
		return 'Nublado'
	} else if (clima == 'Sunny') {
		return 'Soleado'
	} else if (clima == 'Rain') {
		return 'LLuvioso'
	} else if (clima == 'Clear') {
		return 'Despejado'
	} else if (clima == 'Thunderstorm') {
		return 'Tormenta'
	} else if (clima == 'Drizzle') {
		return 'LLovizna'
	} else if (clima == 'Snow') {
		return 'Nieve'
	} else if (clima == 'Clouds') {
		return 'Nubes'
	} else if (clima == 'Mist' | 'Smoke' | 'Haze' | 'Dust') {
		return 'Neblina'
	} else if (clima == 'Fog') {
		return 'Bruma'
	} else if (clima == 'Squall') {
		return 'Chubasco'
	}  else {
		return clima
	} 
}

function setTime() {
	const time = new Date();
	const horas = time.getHours();
	background(horas);
	console.log(horas)
}

function background(hours) {
	if( hours >= 05 && hours <= 06) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/2.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if( hours >= 07 &&  hours <= 08) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/1.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if( hours >= 09 &&  hours <= 16) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/5.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if ( hours >= 17 &&  hours <= 18) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/8.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if ( hours == 19) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/4.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if( hours >= 20 &&  hours <= 23) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/6.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';
	} else if ( hours >= 00 &&  hours <= 04) {
		const body = document.querySelector('.main-container');
		body.style.background = 'url(./images/7.jpg) no-repeat center';
		body.style.backgroundSize = 'cover';

	}

	console.log(hours)

	return hours
}

setTime();