// Variables 
const input = document.querySelector('input');
const btn   = document.querySelector('button');
const todoList = document.querySelector('.todo-list');
const clear = document.querySelector('.clear');

// Add elementos a la lista

const addTask = () => {
	const newLi  = document.createElement("li");
	const delBtn = document.createElement("button"); 
	
	delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
	
	if (input.value !== "") {
		newLi.textContent = input.value;
		newLi.appendChild(delBtn);
		todoList.appendChild(newLi);
		input.value = "";
	} else {
		alert("Por favor escribe una nueva tarea")
	}
}

btn.addEventListener("click", addTask);