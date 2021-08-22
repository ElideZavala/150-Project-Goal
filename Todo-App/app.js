// Variables 
const input = document.querySelector('input');
const btn   = document.querySelector('button');
const todoList = document.querySelector('.todo-list');
const clear = document.querySelector('.clear');
const mensg = document.querySelector('.msg');
let tasks;

btn.addEventListener('click', addTask);

// Obtener la tarea desde el localStorage
function getTask() {
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
}

function addTask() {
	if (input.value !== "") {
		addTaskToLS();
		displayTask();
	} else {
		mensaje("Por favor escribe una nueva tarea")
	}
}

// Guardar Tarea en local Storage.
function addTaskToLS() {
	getTask();
	tasks.push(input.value);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	input.value = "";
}

// Mostrar la tarea a la pantalla
function displayTask() {
	getTask();
	task.forEach((task, index) => {
		const newLi  = document.createElement("li");
		const delBtn = document.createElement("button");
		delBtn.innerHTML = `<i class="fas fa-trash-alt"></i> id="${index}" onclick="deleteTask(this.id)"`; 

		newLi.appendChild(document.createTextNode(task));
	});
}

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