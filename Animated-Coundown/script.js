const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
	counter.classList.remove('hide');
	finalMessage.classList.remove('show');

	nums.forEach((num) => {
		num.classList.value = ''
	})

	nums[0].classList.add('in');
}

function runAnimation() {
	nums.forEach((numer, index) => {
		const nextToLast = nums.length - 1;

		numer.addEventListener('animationend', (e) => {
			if (e.animationName === 'goIn' && index !== nextToLast) {
				numer.classList.remove('in');
				numer.classList.add('out');
			} else if (e.animationName === 'goOut' && numer.nextElementSibling) {
				numer.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				finalMessage.classList.add('show')
			}
		})
	});
}

replay.addEventListener('click', () => {
	resetDOM();
	runAnimation();
});