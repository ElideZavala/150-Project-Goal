const add = document.querySelector(".add");
const resetear = document.querySelector(".resetear");
const sub = document.querySelector(".substract");
const contar = document.querySelector(".count");
const botones = document.querySelector(".buttons");

function setColor() {
	if (contar.innerHTML > 0) {
		contar.style.color = "green";
	} else if (contar.innerHTML < 0 ) {
		contar.style.color = "orangered";
	} else {
		contar.style.color = "#fff";
	}
}

add.addEventListener('click', () => {
	contar.innerHTML++; // <== sumara las veces que le demos clicksetColor()v
	setColor() 
});

sub.addEventListener('click', () => {
	contar.innerHTML--; // <== se contara de forma regresiva. 
	setColor() 
});

resetear.addEventListener('click', () => {
	contar.innerHTML = 0;
	setColor() 
})