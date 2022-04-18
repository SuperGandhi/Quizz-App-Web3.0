const quizData = [
    {
        question: "So this is?",
        a : '1',
        b : '2',
        c : '3',
        d : 'Mas de 4🐷',
        correct: 'a'
    }, {
        question: "Where is the Web3?",
        a: 'server',
        b: 'app',
        c: 'database',
        d: 'server',
        correct: 'a' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "How is the most important thing in the world?",
        a: 'the sun',
        b: 'island',
        c: 'ocean',
        d: 'quark',
        correct: 'c' 
    },
    {
        question: "Where do you live?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "Whats going to happen?",
        a: 'go to hell',
        b: 'to hell',
        c: 'will happen',
        d: 'all of the above',
        correct: 'c' 
    },
    {
        question: "When do you have?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "How did your spelling go?",
        a: 'did not go well',
        b: 'went well',
        c: 'just fine',
        d: 'lots of mistakes',
        correct: 'c' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "Where do you live?",
        a: 'New York',
        b: 'San Francisco',
        c: 'Chicago',
        d: 'Toronto',
        correct: 'c' 
    },
];


const quiz = document.getElementById("quiz")
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
//let answer = undefined;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innertext = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected (){
    let answer = undefined;
    answersEls.forEach((answersEl) =>{
        if(answersEl.checked){
            answer = answersEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers (){
    answersEls.forEach((answersEl) =>{
        answersEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    // console.log(answer);
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered</h2> correctly at ${score}/${quizData.length} questions.<h2><button onclick="location.reload();">Reload</button>`;
            alert('You finished! let yourself an orange lemonade')
        }
    }
});



