/*========== ELEMENTS ==========*/
const categoryBtns=document.querySelectorAll(".category-btn");
const difficultyBtns=document.querySelectorAll(".difficulty-btn");
const startBtn=document.getElementById("startQuiz");
const quizPage=document.querySelector(".quiz-page");
const quizContainer=document.getElementById("quizContainer");
const resultContainer=document.getElementById("resultContainer");

const questionText=document.getElementById("questionText");
const optionsContainer=document.getElementById("optionsContainer");
const questionCounter=document.getElementById("questionCounter");
const quizCategory=document.getElementById("quizCategory");
const progressBar=document.getElementById("progressBar");
const timer=document.getElementById("timer");

const explanationBox=document.getElementById("explanationBox");
const answerStatus=document.getElementById("answerStatus");
const answerExplanation=document.getElementById("answerExplanation");

let selectedCategory="";
let selectedDifficulty="";
let filteredQuestions=[];
let currentQuestion=0;
let score=0;
let answered=false;
let timeLeft=30;
let timerInterval;

/*========== THEME ==========*/
const themeBtn=document.getElementById("theme-btn");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){
document.body.classList.add("light-theme");
themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}else{
themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-theme");

if(document.body.classList.contains("light-theme")){
localStorage.setItem("theme","light");
themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}else{
localStorage.setItem("theme","dark");
themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}

});

/*========== CATEGORY ==========*/
categoryBtns.forEach(btn=>{
btn.addEventListener("click",()=>{
categoryBtns.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
selectedCategory=btn.dataset.category;
});
});

/*========== DIFFICULTY ==========*/
difficultyBtns.forEach(btn=>{
btn.addEventListener("click",()=>{
difficultyBtns.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
selectedDifficulty=btn.dataset.level;
});
});

/*========== START QUIZ ==========*/
startBtn.addEventListener("click",()=>{

if(selectedCategory===""){
alert("Please select a category.");
return;
}

if(selectedDifficulty===""){
alert("Please select a difficulty.");
return;
}

filteredQuestions=quizData.filter(question=>
question.category===selectedCategory&&
question.difficulty===selectedDifficulty
);

if(filteredQuestions.length===0){
alert("No questions found for this category.");
return;
}

quizPage.style.display="none";
quizContainer.style.display="block";

currentQuestion=0;
score=0;

loadQuestion();

});

/*========== LOAD QUESTION ==========*/
function loadQuestion(){

answered=false;

explanationBox.style.display="none";

clearInterval(timerInterval);

timeLeft=30;

timer.textContent=timeLeft;

startTimer();

const question=filteredQuestions[currentQuestion];

quizCategory.textContent=question.category;

questionCounter.textContent=`Question ${currentQuestion+1} / ${filteredQuestions.length}`;

questionText.textContent=question.question;

progressBar.style.width=((currentQuestion+1)/filteredQuestions.length)*100+"%";

optionsContainer.innerHTML="";

question.options.forEach((option,index)=>{

const button=document.createElement("button");

button.className="option-btn";

button.textContent=option;

button.onclick=()=>selectAnswer(index);

optionsContainer.appendChild(button);

});

}

/*========== TIMER ==========*/
function startTimer(){

timerInterval=setInterval(()=>{

timeLeft--;

timer.textContent=timeLeft;

if(timeLeft<=0){

clearInterval(timerInterval);

selectAnswer(-1);

}

},1000);

}

/*========== SELECT ANSWER ==========*/
function selectAnswer(selectedIndex){

if(answered) return;

answered=true;

clearInterval(timerInterval);

const question=filteredQuestions[currentQuestion];

const buttons=document.querySelectorAll(".option-btn");

buttons.forEach((button,index)=>{

button.classList.add("disabled");

if(index===question.answer){

button.classList.add("correct");

}

if(selectedIndex===index&&selectedIndex!==question.answer){

button.classList.add("wrong");

}

});

if(selectedIndex===question.answer){

score++;

answerStatus.textContent="✅ Correct!";

}else if(selectedIndex===-1){

answerStatus.textContent="⏰ Time's Up!";

}else{

answerStatus.textContent="❌ Incorrect!";

}

answerExplanation.textContent=question.explanation;

explanationBox.style.display="block";

}

/*========== NEXT QUESTION ==========*/
document.getElementById("nextQuestion").addEventListener("click",()=>{

if(!answered){

alert("Please answer the current question.");

return;

}

currentQuestion++;

if(currentQuestion>=filteredQuestions.length){

showResult();

}else{

loadQuestion();

}

});

/*========== PREVIOUS QUESTION ==========*/
document.getElementById("prevQuestion").addEventListener("click",()=>{

if(currentQuestion===0) return;

currentQuestion--;

loadQuestion();

});

/*========== SHOW RESULT ==========*/
function showResult(){

clearInterval(timerInterval);

quizContainer.style.display="none";

resultContainer.style.display="block";

const total=filteredQuestions.length;

const percentage=Math.round((score/total)*100);

document.getElementById("score").textContent=`${score} / ${total}`;

document.getElementById("percentage").textContent=`${percentage}%`;

document.getElementById("correctAnswers").textContent=score;

document.getElementById("wrongAnswers").textContent=total-score;

document.getElementById("timeTaken").textContent=`${total*30-timeLeft}s`;

const message=document.getElementById("resultMessage");

if(percentage===100){

message.textContent="Outstanding! You're a Git Master!";

}else if(percentage>=80){

message.textContent="Excellent work! You know Git really well.";

}else if(percentage>=60){

message.textContent="Good job! Keep practicing to improve.";

}else{

message.textContent="Don't worry. Practice makes perfect!";

}

localStorage.setItem("bestScore",Math.max(score,Number(localStorage.getItem("bestScore")||0)));

}

/*========== RESTART QUIZ ==========*/
document.getElementById("restartQuiz").addEventListener("click",()=>{

resultContainer.style.display="none";

quizPage.style.display="block";

categoryBtns.forEach(btn=>btn.classList.remove("active"));

difficultyBtns.forEach(btn=>btn.classList.remove("active"));

selectedCategory="";

selectedDifficulty="";

filteredQuestions=[];

currentQuestion=0;

score=0;

});