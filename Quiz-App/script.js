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
			this.score++;
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
		return this.answer === choice;
	}
}

// Mostra Pregunta
function displayQuestion() {
	if (quiz.isEnded()) {
		// mostrar scores si llegamos al final
		showScores()
	} else {
		// mostrar preguntas si no llegamos al final
		let questionElement = document.getElementById('question');
		questionElement.innerHTML = quiz.getQuestionIndex().text

		//mostrar opciones
		let choices = quiz.getQuestionIndex().choices;
		for (let i = 0; i < choices.length; i ++){
			let choiceElement = document.getElementById("choice" + i);
			choiceElement.innerHTML = `- ${choices[i]}`;
			guess("btn" + i, choices[i]);
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
	let progressElement = document.getElementById("progress");
	progressElement.innerHTML = `Pregunta ${currentQuestionNumber} de ${quiz.questions.length}`;
}

// Mostrar Score
function showScores() {
	let quizEndHTML = 
		`
			<h1>Examen Completado</h1>
			<h2 id="score">Tus respuestas correctas fueron: ${quiz.score} de ${quiz.questions.length}</h2>
			<div class="quiz-repeat">
				<a href="index.html">Repetir de nuevo el examen</a>
			</div>	
		`;
		let quizElement = document.getElementById('quiz');
		quizElement.innerHTML = quizEndHTML;
}

// Crear preguntas del cuestionario 
let question = [
	new Question(
		"Cuando queremos almacenar una lista de valores en Javascript lo m??s adecuado es usar...", ["Una constante tipo lista", "Una variable cualquiera", " Una instancia del objeto array", "Una variable cuyo nombre termine en un n??mero o ??ndice"], "Una instancia del objeto array"
	),
	new Question(
		"En Javascript, como en cualquier lenguaje de programaci??n, se utilizan variables, pero ??sabes que son las variables?", ["Los nombres de las funciones.", "Los nombres de los eventos.", "Los elementos usados para almacenar valores.", "Elementos que cambian adapt??ndose al entorno."], " Los elementos usados para almacenar valores."
	),
	new Question(
		"Cuando construimos una funci??n debemos", ["Return s??lo sirve para abortar la ejecuci??n de la funci??n.", "Su ??ltima instrucci??n debe ser siempre return", "La instrucci??n return no existe en Javascript", "Si devuelve un valor lo debe hacer mediante una instrucci??n return"], "Si devuelve un valor lo debe hacer mediante una instrucci??n return"
	),
	new Question(
		"En Javascript se utilizan operadores para", ["Realizar operaciones matem??ticas entre variables num??ricas.", "Realizar operaciones entre cadenas o strings.", "Es el nombre que se da a los m??todos definidos dentro de los objetos.", "Relacionar dos o m??s valores produciendo un resultado."], "Relacionar dos o m??s valores produciendo un resultado."
	),
	new Question(
		"Para identificar una variable, objeto o funci??n en Javascript se pueden usar may??sculas o min??sculas siempre que tengamos en cuenta que...", ["S??lo pueden usarse may??sculas", "Javascript diferencia entre may??sculas y min??sculas", "S??lo pueden usarse min??sculas", " Javascript no distingue entre may??sculas y min??sculas."], "Javascript diferencia entre may??sculas y min??sculas"
	),
	new Question(
		"De las siguientes palabras claves instrucciones una no se utiliza para construir bucles, se??ala cual es.", ["while", "for", "do", "if"], "if"
	),
	new Question(
		"Los bucles son un conjunto de instrucciones que se ejecutan de forma repetida y se detienen cuando:", ["S??lo se detiene con la instrucci??n break", "Se deje de cumplir una condici??n", "Se cumpla una cierta condici??n", "Se deje de cumplir una cierta condici??n o aparezca una instrucci??n break"], "Se deje de cumplir una cierta condici??n o aparezca una instrucci??n break"
	),
	new Question(
		"Si queremos que se ejecute una u otra instrucci??n en funci??n del resultado de una comparaci??n se utiliza la sentencia", ["while", "compare ... else...", "do...while", " if ... else ..."], " if ... else ..."
	),
	new Question(
  		"Para agrupar varias instrucciones de manera que se ejecuten como un bloque se encierran entre dos s??mbolos, estos s??mbolos son:", ["Corchetes [ ]", " Llaves { }", " Par??ntesis ( )", "??ngulos < >"], "Llaves { }"
	),
	new Question(
		"Cuando queremos que el cuerpo de un bucle se ejecute como m??nimo una vez utilizamos la sentencia:", ["execute...until", "do...while", "switch ... case", "while..."], "do...while"
	),
]	

let quiz = new Quiz(question);

// display question 
displayQuestion();

// Add un temporizador
let time = 8;
let quizTimeInMinutes = time * 60 * 60 ;  
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");
// counting.innerHTML = time;

function startCountdown(){
	let quizTimer = setInterval(function() {
		if (quizTime <= 0) {
			clearInterval(quizTimer)
			showScores();
		} else {
			quizTime--;
			let sec = Math.floor(quizTime % 60);
			let min = Math.floor(quizTime / 60) % 60;
			counting.innerHTML = `Tiempo: ${min} : ${sec < 10 ? '0'+sec : sec}`
			// -- Tiempo
			if (min < 1) {
				counting.innerHTML = `<i class="far fa-clock"></i> Tiempo:  ${min} : ${sec < 10 ? '0'+sec : sec}`;
				counting.style.background = "red";
				counting.style.color = "#fff";
				audio();
			}
		}
	}, 1000)
}

startCountdown();

// add alarma
function audio() {
	let sound = document.querySelector("audio");
	sound.play()
}