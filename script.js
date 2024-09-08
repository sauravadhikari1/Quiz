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

async function fetchQuizQuestion() {
    const response = await fetch("questions.json");
    const data = await response.json();
    quiz = data.quiz;
    // console.log(quiz);
  }
  fetchQuizQuestion();

  
  function deleteChild() {
    let e = document.querySelector("ul");

    //e.firstElementChild can be used. 
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
startBtn.addEventListener("click",()=>{
    welcomePage.style.display="none";
    popup.style.display="block"
  })
  let index=0;
continueBtn.addEventListener("click",()=>{
  main.style.display="none";
  quizSection.style.display="flex"
  startQuiz(index)
  })
  
  let optionList=document.querySelector(".option-list")
  function startQuiz(index){
    const questionText=document.querySelector(".question-text")
  
    questionText.textContent=`${quiz[index].question}`
    for(i of quiz[index].options){
      option=document.createElement('div');
      optionList.append(option)
      option.classList.add('option')
      let spa= document.createElement('span')
      option.append(spa)
      spa.textContent=`${i}`
      
    } 
    let questionTotal=document.querySelector('.question-total')
questionTotal.textContent=`${index+1} of 10`
      
  }
  function deleteChild() {
    //e.firstElementChild can be used. 
    let child = optionList.lastElementChild;
    while (child) {
        optionList.removeChild(child);
        child = optionList.lastElementChild;
    }
}
  const nextBtn=document.querySelector(".next-btn")
  nextBtn.addEventListener('click',()=>{
    if(index!=quiz.length-1){
      deleteChild()
      index+=1
    startQuiz(index)
    
  }

  })