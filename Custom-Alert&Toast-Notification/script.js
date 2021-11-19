const main = document.querySelector(".main");
const alertBox = document.querySelector(".alert");
const exclamationIcon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-time");

// Mostrar classes de alerta. 
class ShowAlert {
	constructor(state, borderColor, color) {
		this.state = state;
		this.borderColor = borderColor;
		this.color = color;
	} 

	trigger(menssage) {
		alertBox.style.background = this.state; 
		alertBox.style.borderColor = this.borderColor; 
		msg.textContent = message;
		msg.style.color = this.color;
		exclamationIcon.style.color = this.color;
		msg.style.color = this.color;
		closeIcon.style.color = this.color;

		alertBox.classList.add("show";)
	}
}