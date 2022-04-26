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
	slidePage.style.marginLeft = '-33%';
	progressStep[current - 1].classList.add('active');
	progressNumber[current - 1].classList.add('active');
	progressTick[current - 1].classList.add('active');
	current += 1;
});

// Second Next Button Event Listener
secondNextBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-100%'
	// progressStep[current - 1].classList.add('active');
});

// Third Next Button Event Listener
thirdNextBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-200%'
});

// Submit Button Event Listener
submitBtn.addEventListener('click', () => {
	swal("Good done!", "Your registration has been successful!", "success");
	setTimeout(() => {
		location.reload();
	}, 1500);
})

// *-*-*-*-*-*-*-*-*-*-*-* Previous Btns Events *-*-*-*-*-*-*-*-*-*-*-*-*

// First Prev Button Event Listener
firstPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '0';
	progressStep[current - 2].classList.remove('active');
	progressNumber[current - 2].classList.remove('active');
	progressTick[current - 2].classList.remove('active');
	current -= 1;
});

// Second Prev Button Event Listener
secondPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-33%'
	progressStep[current - 3].classList.remove('active');
	progressNumber[current - 3].classList.remove('active');
	progressTick[current - 3].classList.remove('active');
	current += 2;
});

// Second Prev Button Event Listener
thirdPrevBtn.addEventListener('click', () => {
	slidePage.style.marginLeft = '-100%'
});