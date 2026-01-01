const quizData = [
    {
        question: "Which language is used for web styling?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "Python",
        correct: "b"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        a: "int",
        b: "string",
        c: "var",
        d: "float",
        correct: "c"
    },
    {
        question: "Which tag is used to add JavaScript in HTML?",
        a: "<js>",
        b: "<javascript>",
        c: "<script>",
        d: "<link>",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("nextBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;

    nextBtn.innerText =
        currentQuiz === quizData.length - 1 ? "Submit" : "Next";
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false);
}

function getSelected() {
    let selected;
    answers.forEach(answer => {
        if (answer.checked) {
            selected = answer.id;
        }
    });
    return selected;
}

nextBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (!answer) {
        alert("Please select an answer");
        return;
    }

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <div class="score">
                <h2>Your Score: ${score} / ${quizData.length}</h2>
                <button onclick="location.reload()">Restart Quiz</button>
            </div>
        `;
    }
});
