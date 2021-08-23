window.onload = function() {
	displayTask();
}


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
		todoList.innerHTML = "";
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

	tasks.forEach((task, index) => {
		const newLi  = document.createElement("li");
		const delBtn = document.createElement("button");
		delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `; 

		newLi.appendChild(document.createTextNode(task));
		newLi.appendChild(delBtn);
		todoList.appendChild(newLi);
	});
}

//Eliminar Tareas
function deleteTask(index) {
	swal({
		title: "Estas por eliminar esta tarea",
		buttons: true,
		dangerMode: true,
	   })
	   .then((willDelete) => {
		if (willDelete) {
		  swal("Esta Tarea ha sido eliminada!", {
		    icon: "success",
		  });
		  getTask();		
		  tasks.splice(index, 1);
		  localStorage.setItem("tasks", JSON.stringify(tasks)); 	 
		  todoList.innerHTML = "";
		  displayTask();
		} 
	});
}

// Limpiar las tareas. 
clear.addEventListener('click', () => {
	if(todoList.innerHTML !== "") {
		clearTask();
	} else {
		return null;
	}
});

function clearTask() {
	swal({
		title: "Deseas eliminar todas las Tareas",
		buttons: true,
		dangerMode: true,
	   })
	   .then((willDelete) => {
		if (willDelete) {
		  swal("Todas las Tareas fuerón eliminadas!", {
		    icon: "success",
		  });
		  localStorage.clear();  // <== Eliminamos todo el localStorage 
		  todoList.innerHTML = "";
		  displayTask();
		} 
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