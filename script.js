// const startBtn = document.querySelector('.start-btn');
// const welcomePage=document.querySelector('.welcome-page');
// const popup = document.querySelector('.popup');
// const exitBtn = document.querySelector('.exit-btn');
// const main = document.querySelector('.main');
// const continueBtn = document.querySelector('.continue');
// const quizSection = document.querySelector('.quiz-section');
// const quizBox = document.querySelector('.quiz-box');
// const nextBtn=document.querySelector(".next-btn")
// let arr=[]


// let score=0;
// const QUIZ_TIME = 50;
// const QUIZ_QUESTION_POINTS = 1;
// const PASS_PERCENT = 50;

// // Global variables
// let setIntervalId;
// let quiz = [];
// let timer = 0;

// async function fetchQuizQuestion() {
//     const response = await fetch("questions.json");
//     const data = await response.json();
//     quiz = data.quiz;
//     // console.log(quiz);
//   }
//   fetchQuizQuestion();

  
//   function deleteChild() {
//     let e = document.querySelector("ul");

//     //e.firstElementChild can be used. 
//     let child = e.lastElementChild;
//     while (child) {
//         e.removeChild(child);
//         child = e.lastElementChild;
//     }
// }
// startBtn.addEventListener("click",()=>{
//     welcomePage.style.display="none";
//     popup.style.display="block"
//   })
//   let index=0;
// continueBtn.addEventListener("click",()=>{
//   main.style.display="none";
//   quizSection.style.display="flex"
//   startQuiz(index)
//   })
  
//   let optionList=document.querySelector(".option-list")
//   // opList=document.querySelectorAll(".option-list")
//   async function startQuiz(index){
//     let option;
//     const questionText=document.querySelector(".question-text")
//     questionText.textContent=`${quiz[index].question}`
//     for(i of quiz[index].options){
//       option=document.createElement('div');
//       optionList.append(option)
//       option.classList.add('option')
//       let spa= document.createElement('span')
//       option.append(spa)
//       spa.textContent=`${i}`
      
//     }
//    oplist=document.getElementsByClassName("option")
//    for(i of oplist){
//       i.setAttribute('onClick', 'optionSelected(this)')
//     }

//     ;
  
//     let questionTotal=document.querySelector('.question-total')
// questionTotal.textContent=`${index+1} of 10`
  
      
//   }
//     function optionSelected(answer){
//     let userAnswer=answer.textContent
//     let correctAnswer=quiz[index].answer
//     let allOptions=optionList.children.length
//     if(userAnswer===correctAnswer){
  
//       answer.classList.add("correct")

    
    
//     }
//     else{
//       answer.classList.add("incorrect")
      
//     }
//     for(i =0; i < allOptions;i++){
//       optionList.children[i].classList.add('disabled');
//     }
    
//   }
  
 
//   function deleteChild() {
//     //e.firstElementChild can be used. 
//     let child = optionList.lastElementChild;
//     while (child) {
//       optionList.removeChild(child);
//       child = optionList.lastElementChild;
//     }
//   }
//   nextBtn.addEventListener('click',()=>{
    
//     if(index<quiz.length-1){
//       deleteChild()
//       index+=1
//       startQuiz(index)
      
//     }
//     else{
//   quizSection.style.display="none"
 
//     }
//     if(index==9){
//       nextBtn.classList.add("finish")
//       nextBtn.textContent="View result"
      

//     }
//   })

//    // Change this to dynamically update the result

//   // Update the progress bar and feedback based on the score
//   document.getElementById('score-percent').innerText = score + '%';
//   document.getElementById('progress').style.width =score + '%';
  
//   let feedbackMessage = document.getElementById('feedback-message');
//   if (score >= 80) {
//       feedbackMessage.innerHTML = '<p>Great job! You’ve answered most of the questions correctly.</p>';
//   } else if (score >= 50) {
//       feedbackMessage.innerHTML = '<p>Good effort! There’s room for improvement.</p>';
//   } else {
//       feedbackMessage.innerHTML = '<p>Keep practicing! You’ll get better next time.</p>';
//   }
  
//   // Function for "Try Again" button
//   function retryQuiz() {
//       window.location.reload(); // This will reload the quiz or page
//   }
  
//   // Function for "Home" button
//   function goHome() {
//       window.location.href = 'index.html'; // Replace with your homepage URL
//   }
  

  

/////updated

const startBtn = document.querySelector('.start-btn');
const welcomePage = document.querySelector('.welcome-page');
const popup = document.querySelector('.popup');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue');
const quizSection = document.querySelector('.quiz-section');
const optionList = document.querySelector('.option-list');
const nextBtn = document.querySelector(".next-btn");
const resultContainer = document.querySelector('.result');
const scorePercent = document.getElementById('score-percent');
const progressBar = document.getElementById('progress');
const feedbackMessage = document.getElementById('feedback-message');

let quiz = [];
let score = 0;
let index = 0;

async function fetchQuizQuestion() {
    const response = await fetch("questions.json");
    const data = await response.json();
    quiz = data.quiz;
}

fetchQuizQuestion();

startBtn.addEventListener("click", () => {
    welcomePage.style.display = "none";
    popup.style.display = "block";
});

continueBtn.addEventListener("click", () => {
    main.style.display = "none";
    quizSection.style.display = "flex";
    startQuiz(index);
});

function startQuiz(index) {
    deleteOptions();  // Clear previous question's options
    const questionText = document.querySelector(".question-text");
    questionText.textContent = `${quiz[index].question}`;

    quiz[index].options.forEach(optionText => {
        let option = document.createElement('div');
        option.classList.add('option');
        option.innerHTML = `<span>${optionText}</span>`;
        optionList.append(option);

        // Add onClick event to check the answer
        option.setAttribute('onClick', 'optionSelected(this)');
    });

    // Update question number
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index + 1} of ${quiz.length}`;
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = quiz[index].answer;

    if (userAnswer === correctAnswer) {
        answer.classList.add("correct");
        score += 1;  // Increment score for the correct answer
    } else {
        answer.classList.add("incorrect");
    }

    // Disable all options after selection
    Array.from(optionList.children).forEach(option => {
        option.classList.add('disabled');
    });

    // Enable the "Next" button after selecting an option
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.backgroundColor = '#c40094';  // Highlight the button for clarity
}

nextBtn.addEventListener('click', () => {
    if (index < quiz.length - 1) {
        index += 1;
        startQuiz(index);
        nextBtn.style.pointerEvents = 'none'; // Disable the button until an option is selected
        nextBtn.style.backgroundColor = 'rgba(255, 255, 255, .1)'; // Reset the button color
    } else {
        showResult();
    }

    // On the last question, change the button text to "View Result"
    if (index === quiz.length - 1) {
        nextBtn.textContent = "View Result";
    }
});

function deleteOptions() {
    // Remove all child elements from the option list (previous question options)
    while (optionList.firstChild) {
        optionList.removeChild(optionList.firstChild);
    }
}

function showResult() {
    quizSection.style.display = "none";
    resultContainer.style.display = "flex";

    // Calculate percentage score
    let percentScore = (score / quiz.length) * 100;
    scorePercent.innerText = `${Math.round(percentScore)}%`;
    progressBar.style.width = `${Math.round(percentScore)}%`;

    // Provide feedback based on the score
    if (percentScore >= 80) {
        feedbackMessage.innerHTML = '<p>Great job! You’ve answered most of the questions correctly.</p>';
    } else if (percentScore >= 50) {
        feedbackMessage.innerHTML = '<p>Good effort! There’s room for improvement.</p>';
    } else {
        feedbackMessage.innerHTML = '<p>Keep practicing! You’ll get better next time.</p>';
    }
}

// Function for "Try Again" button
function retryQuiz() {
    window.location.reload(); // This will reload the quiz or page
}

// Function for "Home" button
function goHome() {
    window.location.href = 'index.html'; // Replace with your homepage URL
}
