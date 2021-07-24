const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generarNumero = () => {
	// Generar numero btn de 1 a 10
	const randomNumber =  Math.floor(Math.random() * 10 + 1);
	number.innerHTML = randomNumber;
}

btn.addEventListener('click', generarNumero);

generarNumero();