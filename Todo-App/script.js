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

	// Eliminar Tarea
	delBtn.addEventListener('click', function() {
		// const del = confirm("Estas por eliminar esta tarea");
		// if (del == true) {
		// 	console.log(true)
		// }

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
			  const parent = this.parentNode
			  parent.remove();
			} 
		   });

	})
}

btn.addEventListener("click", addTask);

clear.addEventListener('click', () => {
	todoList.innerHTML = "";
	swal("Sin tareas!", "Tareas eliminadas corectamente...", "success");
})


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