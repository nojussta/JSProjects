const allQuestions = [
    {
        question: 'Kokiame Lietuvos mieste stovi Gedimino pilis?',
        a: 'Tytuvėnuose',
        b: 'Kaune',
        c: 'Vilniuje',
        d: 'Klaipėdoje',
        correct: 'c'
    }, {
        question: 'Kokio akmens vandenyje nėra?',
        a: 'Sauso',
        b: 'Geltono',
        c: 'Šlapio',
        d: 'Mėlyno',
        correct: 'a'
    }, {
        question: 'TEST Kokio akmens vandenyje nėra?',
        a: 'Sauso',
        b: 'Geltono',
        c: 'Šlapio',
        d: 'Mėlyno',
        correct: 'a'
    }
];

const answers = document.querySelectorAll(".answer");
const questionsEl = document.getElementById("question");
const a_question = document.getElementById("a_question");
const b_question = document.getElementById("b_question");
const c_question = document.getElementById("c_question");
const d_question = document.getElementById("d_question");
const brain = document.getElementById("brain");
const nextBTN = document.getElementById("next");

let thisQuestion = 0;
let score = 0;

loadContest();

function loadContest() {
    deselectAnswers();
    
    const questionData = allQuestions[thisQuestion];

    questionsEl.innerText = questionData.question;
    a_question.innerText = questionData.a;
    b_question.innerText = questionData.b;
    c_question.innerText = questionData.c;
    d_question.innerText = questionData.d;
}

function trackSelectedAnswers() {
    let thisAnswer = undefined;

    answers.forEach((answer) => {
        if (answer.checked) {
            thisAnswer = answer.id;
        }
    });
    return thisAnswer;
}

function deselectAnswers() {
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

nextBTN.addEventListener('click', () => {

    const answer = trackSelectedAnswers();

    console.log(answer);

    if (answer === allQuestions[thisQuestion].correct) {
        score++;
    }

    if (answer) {
        thisQuestion++;
        if (thisQuestion < allQuestions.length) {
            loadContest();
        } else {
            brain.innerHTML = `<h2>You got ${score}/${allQuestions.length} questions right</h2>`
        }
    }
})