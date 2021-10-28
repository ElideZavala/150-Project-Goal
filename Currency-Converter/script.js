const cur1 = document.querySelector('.cur-1');
const cur2 = document.querySelector('.cur-2');
const cur1Input = document.querySelector('.cur-1-input');
const cur2Input = document.querySelector('.cur-2-input');

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "1a95d122f8f26d493d0973bf"

//  Optener tipo de cambio
async function getExchangeRate() {
	const valueCur1 = cur1.value;
	const valueCur2 = cur2.value; 

	const response = await fetch(`${apiURL}${key}/latest/${valueCur1}`);
	const data = await response.json();
	console.log(data);
}

getExchangeRate();