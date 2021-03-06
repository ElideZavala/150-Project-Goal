const typedWord = document.querySelector(".typed-word");
const cursor    = document.querySelector(".cursor");

const wordArray = ["Amante de la tecnología", "Creador de Páginas Web", "FullStack Jr"];

let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

// Escribir Function
function type() {
	if(letterIndex < wordArray[wordArrayIndex].length) {

		if(!cursor.classList.contains("typing")) {
			cursor.classList.add("typing");
		}

		typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
		letterIndex++;

		// Ejecutar la function type en cierto tiempo.
		setTimeout(type, typingDelay);
	} else {
		cursor.classList.remove("typing");
		setTimeout(erase, newWordDelay);
	}
}

// Borrar Function
function erase() {
	if (letterIndex > 0) {
		typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex -1);
		letterIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		cursor.classList.remove("typing");
		wordArrayIndex++
		while (wordArrayIndex >= wordArray.length) {
			wordArrayIndex = 0;
		}
		setTimeout(type, typingDelay);
	} 
}

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(type, newWordDelay);
})

type();












// wordArray.forEach((word, index) => {
// 	console.log(`${index} => ${word}`);
// });

// const word = "Developer";
// const result = word.charAt(1);
// console.log(result);

// const word = "Developer";
// const result = word.substring(0, 3);
// console.log(result);

