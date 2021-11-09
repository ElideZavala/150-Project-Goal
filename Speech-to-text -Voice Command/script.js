const searchForm   = document.querySelector("#search-form");
const searchInput  = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction  = document.querySelector(".instruction");

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

// Verificar la compativilidad con otros navegadores. 
if(speechRecognition) {
	console.log("Speech Recognition es soportado");

	const recognition = new speechRecognition();

	micBtn.addEventListener("click", micBtnClicked);
	function micBtnClicked(e) {
		e.preventDefault();
		if (micBtn.classList.contains("fa-microphone")) {
			recognition.start(); // Empezar 
		} else {
			recognition.stop(); 
		}
	}

	// Iniciar el reconociminto de voz
	recognition.addEventListener("start", () => {
		micBtn.classList.remove("fa-microphone");
		micBtn.classList.add("fa-microphone-slash");
		instruction.textContent = "Grabando... Presiona ctrl + m para parar.",
		searchInput.focus();
		console.log("Speech Recognition Enabled");
	});

	// Parar el reconociminto de voz
	recognition.addEventListener("end", () => {
		micBtn.classList.remove("fa-microphone-slash");
		micBtn.classList.add("fa-microphone");
		instruction.textContent = "Da click en el icono del microfono para comenzar",
		searchInput.focus();
		console.log("Speech Recognition Disabled");
	});

	// Ontener resultados del reconocimiento de voz. 
	recognition.continuous = true;
	// let content = "";
	recognition.addEventListener("result", (e) => {
		console.log(e)
		const current = e.resultIndex;
		const transcript = e.results[current][0].transcript;

		if (transcript.toLowerCase().trim() === "parar") {
			recognition.stop();
		} else if (!searchInput.value)  {
			searchInput.value = transcript;
		} else {
			if (transcript.toLowerCase().trim() === "buscar") {
				searchForm.submit();	
			} else if (transcript.toLowerCase().trim() === "restablecer formulario"){
				searchInput.value = "";
			} else {
				searchInput.value = transcript;
			}
		}
	}); 

	// Agregar evento de keyboard
	document.addEventListener("keydown", e => {
		if(e.ctrlKey && e.key === "x") { 
			// e.shiftKey
			recognition.start();	
		} 
		if(e.ctrlKey && e.key === "m") { 
			recognition.stop();	
		}
	});

} else {
	// Ocultamos el boton de voz en dado caso de que no sea soportado
	speechBtnDiv.style.visibility = "hidden";
 }