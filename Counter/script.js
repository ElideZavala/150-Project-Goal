const contar = document.querySelector(".count");
const botones = document.querySelector(".buttons");

botones.addEventListener("click", (e) => {
	if (e.target.classList.contains("add")) {
		contar.innerHTML++;
		setColor();
	}
	if (e.target.classList.contains("substract")) {
		contar.innerHTML--;
		setColor();	
	}
	if (e.target.classList.contains("resetear")) {
		contar.innerHTML = 0;
		setColor();
	}
}); 

function setColor() {
	if (contar.innerHTML > 0) {
		contar.style.color = "green";
	} else if (contar.innerHTML < 0 ) {
		contar.style.color = "orangered";
	} else {
		contar.style.color = "#fff";
	}
}
