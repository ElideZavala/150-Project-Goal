class Quiz {
	constructor(questions) {
		this.score = 0;
		this.questions = questions;
		this.questionIndex = 0;
	}

	getQuestionIndex() {
		return this.questions[this.questionIndex];
	}

	guess(answer) {
		if (this.getQuestionIndex().isCorrectAnswer(answer)) {
			this.score++
		}
		this.questionIndex++
	}

	isEnded() {
		return this.questionIndex === this.questions.length;
	}
}

// Clase de preguntas 
class Question {
	constructor(text, choices, answer) {
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}

	isCorrectAnswer(choice) {
		return this.answer === choice
	}
}


// const quiz = new Quiz();

// Mostra Pregunta
function displayQuestion() {
	if (quiz.isEnded()) {
		// mostrar scores si llegamos al final
		showScore()
	} else {
		// mostrar preguntas si no llegamos al final
		let questionElement = document.getElementById('question');
		questionElement.innerHTML = quiz.getQuestionIndex().text

		//mostrar opciones
		let choices = quiz.getQuestionIndex().choices;
		for (let i = 0; i < choices.length; i ++){
			let choiceElement = document.getElementById("choice" + i);
			choiceElement.innerHTML = choice[i];
			guess("btn" + i, choice[i]);
		}	
	}

	showProgress();
}

// Funcion de acertar la respuesta. 
function guess(id, guess) {
	let button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		displayQuestion();
	}
}

// Mostrar quiz progress
function showProgress() {
	let currentQuestionNumber = quiz.questionIndex + 1;
	let progressElement = document.getElementById('progress');
	progressElement.innerHTML = `Pregunta ${currentQuestionNumber} de ${quiz.question.length}`;
}

// Mostrar Score
