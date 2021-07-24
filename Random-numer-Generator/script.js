const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generarNumero = () => {
	const randomNumber =  Math.floor(Math.random() * 10 + 1);
	number.innerHTML = randomNumber;
}

btn.addEventListener('click', generarNumero);

generarNumero();