const modal = document.querySelector(".modal");
const btn   = document.querySelector(".btn");
const close = document.querySelector(".close");

btn.addEventListener('click', abrirModal);
close.addEventListener('click', cerrarModal);
modal.addEventListener('click', cerrarModal);

function abrirModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

function cerrarModal() {
  modal.style.display = "none";
}