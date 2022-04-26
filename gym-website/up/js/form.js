// *-*-*-*-*-*-*-*-*-*-*-* Variables *-*-*-*-*-*-*-*-*-*-*-*-*
// First page
const slidePage = document.querySelector('.register__content--form__page');
const firstNextBtn = document.querySelector('.next-1');

// Second page
const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn = document.querySelector('.next-2');

// Third page
const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn = document.querySelector('.next-3');

// Forth page
const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');

// Progress Step
const progressStep = document.querySelectorAll('.register__progress--step');

// Progress Number (The Span Element)
const progressNumber = document.querySelectorAll('.register__progress--step span');

// Progress Tick Mark. 
const progressTick = document.querySelectorAll('.fa-check');

let max = 4;
let current = 1;

// *-*-*-*-*-*-*-*-*-*-*-* Next Btns Events *-*-*-*-*-*-*-*-*-*-*-*-*

// First Next Button Event Listener
firstNextBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-33%'
});

// Second Next Button Event Listener
secondNextBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-100%'
});

// Third Next Button Event Listener
thirdNextBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-200%'
});

// *-*-*-*-*-*-*-*-*-*-*-* Previous Btns Events *-*-*-*-*-*-*-*-*-*-*-*-*

// First Prev Button Event Listener
firstPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '0'
});

// Second Prev Button Event Listener
secondPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-33%'
});

// Submit Button Event Listener
submitBtn.addEventListener('click', () => {
	swal("Good job!", "Your registration has been successful!", "success");
})

// Second Prev Button Event Listener
thirdPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-100%'
});