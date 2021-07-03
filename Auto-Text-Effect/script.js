const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "Nosotros amamos la programación";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
	textEl.innerHTML = text.slice(0, idx); //=> Empezamos desde el 0 y cantidades de idx
	idx++;
	idx > text.length ? idx = 1 : null;
	setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);