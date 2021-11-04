const searchForm   = document.getElementById("search-form");
const searchInput  = document.getElementById("search-input");
const speechBtnDiv = document.getElementById("speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction  = document.querySelector(".instruction");

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition

// Verificar la compativilidad con otros navegadores. 
if(speechRecognition) {
	console.log("Speech Recognition es soportado");
} else {
	// Ocultamos el boton de voz en dado caso de que no sea soportado
	speechBtnDiv.style.visibility = "hidden"
 }