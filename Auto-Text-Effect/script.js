const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const texto = "Sé la energía que quieres atraer";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
	textEl.innerHTML = texto.slice(0, idx);
	idx++;
	idx > texto.length ? idx = 1 : null;
	setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);