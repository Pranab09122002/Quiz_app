const questions = [
    {
        questions: "Which is large animal in the world?",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        questions: "Which is the Pm of India?",
        answer:[
            {text: "Amit Shah", correct: false},
            {text: "Narandra modi", correct: true},
            {text: "Mamata Banerjee", correct: false},
            {text: "Rahul gandhi", correct: false},
        ]
    },
    {
        questions: "Which was the 1st non Test playing country to beat India in an international match?",
        answer:[
            {text: "Canada", correct: false},
            {text: "Sri Lanka", correct: true},
            {text: "Zimbabwe", correct: false},
            {text: "East Africa", correct: false},
        ]
    },
    {
        questions: "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
        answer:[
            {text: "Two", correct: false},
            {text: "Three", correct: false},
            {text: "Four", correct: true},
            {text: "Six", correct: false},
        ]
    },
    {
        questions: "Which country has most population",
        answer:[
            {text: "china", correct: false},
            {text: "Pakistan", correct: false},
            {text: "India", correct: true},
            {text: "UAE", correct: false},
        ]
    },
    {
        questions: "Who is known as Father of Indian Constitution?",
        answer:[
            {text: "Modna", correct: false},
            {text: "Modi", correct: false},
            {text: "Dr Bhimrao Ambedkar", correct: true},
            {text: "Ambani", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answerbuttton");
const nextBtn = document.getElementById("next-button");
let currentQuestionIndex = 0;
score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " +currentQuestion.questions;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
    const selecteBtn = e.target;
    const isCorrect = selecteBtn.dataset.correct === "true";
    if(isCorrect){
        selecteBtn.classList.add("correct");
    } 
    else{
        selecteBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            score++;
        }
        button.disabled = true;

    });
    nextBtn.style.display = "block";
}

function showquiz(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNestButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showquiz();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNestButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();