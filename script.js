var startBtnEl = document.getElementById("startBtn");

var count=5;
function startQuiz () {
    console.log("hello");
timer();

}
function timer() {
    setInterval(displayHello, 1000);
    
function displayHello() {
  var timerEl = document.getElementById("timer");
  timerEl.textContent = count
  count = count - 1
  if (count <= 0) {
    console.log("Times Up")
   stopTimer() 
  }
}
}

function stopTimer() {
    clearInterval(timer)
}


startBtnEl.addEventListener("click", startQuiz);

