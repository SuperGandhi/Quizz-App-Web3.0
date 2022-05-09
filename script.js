const quizData = [
    {
        question: "What is web 3.0?",
        a : 'They are simple speculations',
        b : 'It is the next technological generation of the web',
        c : 'It is the evolution of web 2.0, characterized mainly by the decentralization of data, supported by blockchain technology.',
        d : 'It is the replacement of obsolete technologies related to web 2.0',
        correct: 'c'
    }, {
        question: "What are the main characteristics of web 3.0?",
        a: 'fun, fast, simple, multipurpose',
        b: 'problematic, restrictive, obsolete, dangerous',
        c: 'closed, without user participation, with permission, exclusive',
        d: 'open,trustless,permissionless,ubiquitous',
        correct: 'd' 
    },
    {
        question: "What is The Difference Between Web 1.0, Web 2.0, and Web 3.0?",
        a : 'Web 1.0:interact, Web 2.0:interact and share your information, Web 3.0: very difficult to use',
        b : 'Web 1.0:read only web, Web 2.0:read-write Web, Web 3.0: read,write and interact with websites including 3D visuals ',
        c : 'Web 1.0:read only web, Web 2.0:read-write Web, Web 3.0: read,write and interact with websites including 3D visuals ',
        d : 'Web 1.0:read only web, Web 2.0:read-write Web, Web 3.0: read,write and interact with websites including 3D visuals',
        correct: 'c'
    }, {
        question: "How do dapps work?",
        a: 'the sun',
        b: 'island',
        c: 'ocean',
        d: 'quark',
        correct: 'c' 
    },
    {
        question: "How does user authentication work?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "What is a token or NFT?",
        a: 'go to hell',
        b: 'to hell',
        c: 'will happen',
        d: 'all of the above',
        correct: 'c' 
    },
    {
        question: "How to build a Web3 Frontend?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "How to build a Web3 Backend?",
        a: 'did not go well',
        b: 'went well',
        c: 'just fine',
        d: 'lots of mistakes',
        correct: 'c' 
    },
    {
        question: "How do I test a dapp with Ethereum?",
        a : '10',
        b : '12',
        c : '13',
        d : '14',
        correct: 'd'
    }, {
        question: "How do I test a dapp with Ethereum?",
        a: 'New York',
        b: 'San Francisco',
        c: 'Chicago',
        d: 'Toronto',
        correct: 'c' 
    },
    {
        question: "Where to start?",
        a: 'New York',
        b: 'San Francisco',
        c: 'Chicago',
        d: 'Toronto',
        correct: 'c' 
    },
];


const quiz = document.getElementById("quiz")
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
//let answer = undefined;
loadQuiz();

function loadQuiz(){
    // deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
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
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload();">Reload</button>`;
        }
    }
});



