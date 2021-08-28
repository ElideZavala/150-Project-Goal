const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');

// Lista
const listColumns = document.querySelectorAll('.drag-item-list');
const backlogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const onHoldList = document.getElementById('on-hold-list');

// Elementos
let updateOnLoad = false;

// Iniciando Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Funcionalidad de Drag
let draggedItem;
let currentColumn; 


//Obtener los arrays desde el LocalStorage si se encuentra disponibles
function getSavedColumns() {
  if (localStorage.getItem('backlogItems')) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ['Release the course', 'Sit back and relax'];
    progressListArray = ['Work on projects', 'Listen to music'];
    completeListArray = ['Being cool', 'Getting stuff done'];
    onHoldListArray = ['Being uncool'];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
	listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray];
	const arraysNames = ['backlog', 'progress', 'complete', 'onHold'];
	arraysNames.forEach((arraysName, index) => {
		localStorage.setItem(`${arraysName}Items`, JSON.stringify(listArrays[index]));
	});
}

// Crear un elemento DOM para cada lista
function createItemEl(columnEl, column, item, index) {
  // List Item
  const listEl = document.createElement('li');
  listEl.classList.add('drag-item');
  listEl.textContent = item;
  listEl.draggable = true;   // Aplicamos el arrastrar y soltar al elemento
  listEl.setAttribute('ondragstart', 'drag(event)'); // Le pasamos el evento a la funcion. 
  listEl.contentEditable = true;
  listEl.id = index;
  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);
  // Append 
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
	if (!updateOnLoad) {
		getSavedColumns();
	}
  // Backlog Column
  backlogList.textContent = '';
  backlogListArray.forEach((backlogItem, index) => {
	  createItemEl(backlogList, 0, backlogItem, index);
  });

  // Progress Column
  progressList.textContent = '';
  progressListArray.forEach((progressItem, index) => {
	  createItemEl(progressList, 0, progressItem, index);
  });

  // Complete Column
  completeList.textContent = '';
  completeListArray.forEach((completeItem, index) => {
	  createItemEl(completeList, 0, completeItem, index);
  });

  // On Hold Column
  onHoldList.textContent = '';
  onHoldListArray.forEach((onHoldItem, index) => {
	  createItemEl(onHoldList, 0, onHoldItem, index);
  });

  // Run getSavedColumns only once, Update Local Storage}
  updateOnLoad = true;
  updateSavedColumns();
}

// Actualizara el elemento - Lo eliminara si es necesario, o actualizara el valor del array.


// Anexar a la columna u restear el Texbox
function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText); 
  addItems[column].textContent = '';
  updateDOM();
}

// Mostrar  el cuadro de entrada de agregar elemento
function showInputBox(column) {
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';
}

// Ocultar el cuadro de entrada
function hideInputBox(column) {
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column);
}
 
//   permitir que las matrices reflejen elementos de arrastrar y soltar
function rebuildArrays() {
  backlogListArray = [];
  for (let i = 0; i < backlogList.children.length; i++) {
    backlogListArray.push(backlogList.children[i].textContent);
  };
  progressListArray = [];
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent);
  };
  completeListArray = [];
  for (let i = 0; i < completeList.children.length; i++) {
    completeListArray.push(completeList.children[i].textContent);
  };
  onHoldListArray = [];
  for (let i = 0; i < onHoldList.children.length; i++) {
    onHoldListArray.push(onHoldList.children[i].textContent);
  };
  updateDOM();
}

// Cuando el elemento esta siendo arrastrado
function drag(e) {
	draggedItem = e.target;
}
// Permitir que los elementos caigan en la columna
function allowDrop(e) {
	e.preventDefault();
}

// Cuando el elemento ingresa al area de la columna
function dragEnter(column) {    // <== Mientas la este moviendo
	listColumns[column].classList.add('over');
	currentColumn = column;
}

// Soltar elementos en la columna
function drop(e) {      // <== al momento de soltar el elemento 
	e.preventDefault()
	//Eliminar el background Color/Padding
	listColumns.forEach((column) => {
		column.classList.remove('over');
	});

	// Añadir elemento a la columna
  const parent = listColumns[currentColumn];
  parent.appendChild(draggedItem);
  rebuildArrays();
}

// On Load 
updateDOM();   