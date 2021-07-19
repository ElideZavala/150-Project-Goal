const contar = document.querySelector(".count");
const add = document.querySelector(".add");
const resetear = document.querySelector(".resetear");
const sub = document.querySelector(".substract");
const botones = document.querySelector(".buttons");

add.addEventListener('click', () => {
	contar.innerHTML++; // <== sumara las veces que le demos click
});

sub.addEventListener('click', () => {
	contar.innerHTML--; // <== se contara de forma regresiva. 
});

resetear.addEventListener('click', () => {
	contar.innerHTML = 0;
})