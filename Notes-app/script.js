const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => addNewNote('Hola'));

function addNewNote(text = '') {
	const note = document.createElement('div')
	note.classList.add('note');

	note.innerHTML = `
	<div class="tools">
		<button class="edit"><i class="fas fa-edit"></i></button>
		<button class="delete"><i class="fas fa-trash-alt"></i></button>
	</div>

	<div class="main ${text ? "" : "hidden"}"></div>
	<textarea class="${text ? "hidden" : ""}"></textarea>
	`;

	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	textArea.value = text;
	main.innerHTML = marked(text);

	deleteBtn.addEventListener('click', () => {
		note.remove();
	})

	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	})

	textArea.addEventListener('input', (e) => {
		const {
			value
		} = e.target;

		main.innerHTML = marked(value);
	})

	document.body.appendChild(note);
}














{
	/* <div class="tools">
				<button class="edit"><i class="fas fa-edit"></i></button>
				<button class="delete"><i class="fas fa-trash-alt"></i></button>
			</div>

			<div class="main hidden"></div>
			<textarea></textarea> */
}

// 	<div class="note">
// 	<div class="tools">
// 		<button class="edit"><i class="fas fa-edit"></i></button>
// 		<button class="delete"><i class="fas fa-trash-alt"></i></button>
// 	</div>

// 	<div class="hidden"></div>
// 	<textarea></textarea>
// </div>