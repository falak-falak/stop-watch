let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let milSec = document.querySelector(".mili-sec");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

let miliSeconds = 0;
let seconds = 0;
let mins = 0;
let start = true;
function startTimer() {
  miliSeconds++;
  if (miliSeconds === 100) {
    miliSeconds = 0;
    seconds++;
    if (seconds === 60) {
      mins++;
      seconds = 0;
    }
  }
  milSec.innerText = miliSeconds < 10 ? `0${miliSeconds}` : miliSeconds;
  sec.innerText = seconds < 10 ? `0${seconds}` : seconds;
  min.innerText = mins < 10 ? `0${mins}` : mins;
}


startBtn.addEventListener("click", () => {
  stopId = setInterval(startTimer, 10);
  startBtn.disabled = true;
  console.log("started");
});

stopBtn.addEventListener("click", () => {
    clearInterval(stopId);
    startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(stopId);
  miliSeconds = seconds = mins = 0;
  milSec.innerText = `0${miliSeconds}`;
  sec.innerText = `0${seconds}`;
  min.innerText = `0${mins}`;
  startBtn.disabled = false;
});

