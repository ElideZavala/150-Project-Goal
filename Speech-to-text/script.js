const searchForm   = document.getElementById("search-form");
const searchInput  = document.getElementById("search-input");
const speechBtnDiv = document.getElementById("speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction  = document.querySelector(".instruction");

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition

// Verificar la compativilidad con otros navegadores. 
if(speechRecognition) {
	console.log("Speech Recognition es soportado");

	const recognition = new speechRecognition();

	micBtn.addEventListener('click', micBtnClicked);

	function micBtnClicked(e) {
		e.preventDefault();
		if (micBtn.classList.contains("fa-microphone")) {
			recognition.start(); // Empezar 
		} else {
			recognition.stop(); // Parar
		}
	}

	recognition.addEventListener("start", () => {
		micBtn.classList.remove("fa-microphone");
		micBtn.classList.add("fa-microphone-slash");
		instruction.textContent = "Grabando...",
		searchInput.focus();
		console.log("Speech Recognition Enabled");
	})

	// recognition.onstart = function() {

	// }
} else {
	// Ocultamos el boton de voz en dado caso de que no sea soportado
	speechBtnDiv.style.visibility = "hidden";
 }