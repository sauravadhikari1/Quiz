const startBtn = document.querySelector('.start-btn');
const welcomePage=document.querySelector('.welcome-page');
const popup = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

const QUIZ_TIME = 50;
const QUIZ_QUESTION_POINTS = 1;
const PASS_PERCENT = 50;

// Global variables
let setIntervalId;
let quiz = [];
let timer = 0;

startBtn.addEventListener("click",()=>{
    welcomePage.style.display="none";
    popup.style.display="block"
})
continueBtn.addEventListener("click",()=>{
    main.style.display="none";
    quizSection.style.display="flex"
})
async function fetchQuizQuestion() {
    const response = await fetch("questions.json");
    const data = await response.json();
    quiz = data.quiz;
    console.log(quiz);
  }
  fetchQuizQuestion();

  const startQuiz=()=>{
    Question=document.getElementById("question-text")


   
  }
  startQuiz()