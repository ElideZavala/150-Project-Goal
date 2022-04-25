const slides = document.querySelector('.testimonials__content--slider').children;
const indicatorImgs = document.querySelector('.testimonials__content--indicator').children;

// console.log(slides)
// console.log(indicatorImgs[2]);

for (let i = 0; i < indicatorImgs.length; i++) {
	indicatorImgs[i].addEventListener('click', function () {
		// console.log(this.getAttribute('data-id'));

		// Getting The Slide Imgas
		for (let j = 0; j < indicatorImgs.length; j++) {
			indicatorImgs[j].classList.remove('active');
		}
		
		this.classList.add('active');

		// getting the next slide.
		const id = this.getAttribute('data-id');
		for (let k = 0; k < slides.length; k++ ) {
			slides[k].classList.remove('active');
		}

		slides[id].classList.add("active");
	});
	
}