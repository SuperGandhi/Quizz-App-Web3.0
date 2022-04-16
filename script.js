const quizData = [
    {
        question: "What is the most used programming language today?",
        a : 'Javascript',
        b : 'Python',
        c : 'Java',
        d : 'Rust',
        correct: 'a'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    },
    {
        question: "How old is Florias?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "",
        a: '',
        b: '',
        c: '',
        d: '',
        correct: '' 
    }

]


const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuizz();

function loadQuizz(){
    const currentQuizData = quizData;
    [currentQuiz];

    questionEL.innertext = currentQuizData.question;
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuestion++;
}