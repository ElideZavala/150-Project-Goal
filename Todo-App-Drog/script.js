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

// Funcionalidad Drag


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
  console.log('columnEl:', columnEl);
  console.log('column:', column);
  console.log('item:', item);
  console.log('index:', index);
  // List Item
  const listEl = document.createElement('li');
  listEl.classList.add('drag-item');

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
	  createItemEl((backlogList, 0, backlogItem, index));
  });

  // Progress Column

  // Complete Column

  // On Hold Column

  // Run getSavedColumns only once, Update Local Storage


}
