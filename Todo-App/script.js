// Variables 
const input = document.querySelector('input');
const btn   = document.querySelector('button');
const todoList = document.querySelector('.todo-list');
const clear = document.querySelector('.clear');
const mensg = document.querySelector('.msg');

// Add elementos a la lista

const addTask = (e) => {
	e.preventDefault();
	const newLi  = document.createElement("li");
	const delBtn = document.createElement("button"); 
	
	delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
	
	if (input.value !== "") {
		newLi.textContent = input.value;
		newLi.appendChild(delBtn);
		todoList.appendChild(newLi);
		input.value = "";
	} else {
		mensaje("Por favor escribe una nueva tarea")
	}
}

btn.addEventListener("click", addTask);

function mensaje(msg) {
	const parrafo = document.createElement('p')
	parrafo.innerText = msg;
	parrafo.style.textAlign = 'center';
	parrafo.style.background = '#2EE0AE';
	mensg.appendChild(parrafo);

	setTimeout(() => {
		parrafo.remove();
	}, 3000);
}