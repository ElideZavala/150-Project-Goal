const searchForm   = document.querySelector("#search-form");
const searchInput  = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction  = document.querySelector(".instruction");

const speechSynthesis = window.speechSynthesis;

// Verificar la compativilidad con otros navegadores. 

if(speechSynthesis) {
	console.log("Speech Synthesis es soportado");

	// const recognition = new SpeechSynthesis();

	micBtn.addEventListener("click", speak);
	
	function speak(e) {
		e.preventDefault();

	}

} else {
	// Ocultamos el boton de voz en dado caso de que no sea soportado
	console.log("Speech Synthesis no es soportado");
	speechBtnDiv.style.visibility = "hidden";
 }