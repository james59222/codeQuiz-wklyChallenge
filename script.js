const startBtnEl = document.getElementById("startBtn");
const questionElement = document.getElementById
('questions')
startBtnEl.addEventListener("click", startQuiz);
//var count=5;
function startQuiz () {
    console.log("Quiz Started");
    startBtnEl.classList.add()
    questionContainerElement.classList
//timer();

}
//function timer() {
    setInterval(displayHello, 1000);
    
//function displayTimesUp() {
// var timerEl = document.getElementById("timer");
//  timerEl.textContent = count
//  count = count - 1
//  if (count <= 0) {
//    console.log("Times Up")
//   stopTimer() 
//  }
//}
//}

//function stopTimer() {
//    clearInterval(timer)
//}


function answerSelect(){

}
const questions = {
  question: "1 question",
  answers: [
    {text: '1', correct: true},
    {text: '2', correct: false}
  ]
}