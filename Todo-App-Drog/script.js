const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Lista
const itemLists = document.querySelectorAll('.drag-item-list');
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

let draggedItem;


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

}

// Cuando el elemento esta siendo arrastrado
function drag(e) {
	draggedItem = e.target;
}

// Permitir que los elementos caigan en la columna
function allowDrop(e) {
	e.preventDefault();
}

// Soltar elementos en la columna
function drop(e) {
	e.preventDefault()
	
}

// On Load 
updateDOM();
