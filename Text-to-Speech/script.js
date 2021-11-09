const searchForm   = document.querySelector("#search-form");
const input  = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction  = document.querySelector(".instruction");

const speechSynthesis = window.speechSynthesis;

// Verificar la compativilidad con otros navegadores. 

if (speechSynthesis) {
	console.log("Speech Synthesis es soportado");

	micBtn.addEventListener("click", speak);
	
	function speak(e) {
		e.preventDefault();
		const inputValue = input.value;
		const speech = new SpeechSynthesisUtterance();
		speech.lang = "es-MX";	 // Idioma.		
		speech.text = inputValue; // Texto.
		speech.volume = "1";      // velocidad de lectura.
		speech.pitch = "1";       // Entonación.

		// Activamos el parametro hablar con el metodo speak
		speech.voice = speechSynthesis.speak(speech);
	}

} else {
	// Ocultamos el boton de voz en dado caso de que no sea soportado
	console.log("Speech Synthesis no es soportado");
	speechBtnDiv.style.visibility = "hidden";
 }