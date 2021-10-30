const cur1 = document.querySelector('.cur-1');
const cur2 = document.querySelector('.cur-2');
const cur1Input = document.querySelector('.cur-1-input');
const cur2Input = document.querySelector('.cur-2-input');

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
	{
		name: "MXN",
		flagURL: "./images/mexico.png"
	},
	{
		name: "USD",
		flagURL: "./images/estados-unidos.png"
	},
	{
		name: "EUR",
		flagURL: "./images/union-europea.png"
	},
	{
		name: "GBP",
		flagURL: "./images/reino-unido.png"
	},
	{
		name: "CAD",
		flagURL: "./images/canada.png"
	},
	{
		name: "BRL",
		flagURL: "./images/brasil.png"
	},
	{
		name: "PEN",
		flagURL: "./images/peru.png"
	},
	{
		name: "PEN",
		flagURL: "./images/peru.png"
	},
	{
		name: "ARS",
		flagURL: "./images/argentina.png"
	},
	{
		name: "AUD",
		flagURL: "./images/australia.png"
	},
	{
		name: "CNY",
		flagURL: "./images/porcelana.png"
	},
	{
		name: "CLP",
		flagURL: "./images/chile.png"
	},
	{
		name: "COP",
		flagURL: "./images/colombia.png"
	},
	{
		name: "CRC",
		flagURL: "./images/costa-rica.png"
	},
	{
		name: "JPY",
		flagURL: "./images/japon.png"
	},
	{
		name: "NZD",
		flagURL: "./images/nueva-zelanda.png"
	},
	{
		name: "RUB",
		flagURL: "./images/rusia.png"
	},
	{
		name: "SEK",
		flagURL: "./images/suecia.png"
	},
	{
		name: "CHF",
		flagURL: "./images/suiza.png"
	},
	{
		name: "UYU",
		flagURL: "./images/uruguay.png"
	},

]

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "1a95d122f8f26d493d0973bf"

//  Optener tipo de cambio
async function getExchangeRate() {
	const valueCur1 = cur1.value;
	const valueCur2 = cur2.value; 
	const response = await fetch(`${apiURL}${key}/latest/${valueCur1}`);
	const data = await response.json();
	// console.log(data);
	const rate = data.conversion_rates[valueCur2];
	// Mostramos el valor de la Moneda.
	baseRate.textContent = `1 ${valueCur1} = ${rate.toFixed(2)} ${valueCur2}`
	// Conversion de las monedas indicada. 
	cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

getExchangeRate();
cur1.addEventListener("change", () => {
	getExchangeRate();
	getFlag();
});
cur2.addEventListener("change", () => {
	getExchangeRate();
	getFlag();
});
cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

switchCur.addEventListener("click", () => {
	const valCur1 = cur1.value;
	cur1.value = cur2.value;
	cur2.value = valCur1;
	switchCur.classList.toggle("rotate");
	getExchangeRate();
	getFlag();
})

// Get flag
function getFlag() {
	countries.forEach( country => {
		// console.log(country.name)
		if (cur1.value == country.name) {
			const imgSrc = document.querySelector(".from img");
			imgSrc.setAttribute("src", country.flagURL)
		}
		if (cur2.value == country.name) {
			const imgSrc = document.querySelector(".to img");
			imgSrc.setAttribute("src", country.flagURL)
		}
	})
}
