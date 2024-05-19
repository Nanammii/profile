const timerElement = document.getElementById('timer');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const startButton = document.getElementById('open');
const updateButton = document.getElementById('update');
const closeButton = document.getElementById('close');

let hours = 0o0,
  minutes = 0o0,
  seconds = 0o0,
  interval

const handleStartTimer = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
}

const openTimer = () => {
  timerElement.classList.remove('d-none');
  handleStartTimer();
}

const clearTimer = () => {
  hours = 0o0;
  minutes = 0o0;
  seconds = 0o0;
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
}


window.addEventListener('DOMContentLoaded', handleStartTimer);
startButton.addEventListener('click', openTimer);

updateButton.addEventListener('click', () => {
  clearInterval(interval);
  clearTimer();
  interval = setInterval(startTimer, 1000)
})

closeButton.addEventListener('click', () => {
  clearInterval(interval);
  clearTimer();
  timerElement.classList.add('d-none');
})

function startTimer() {
  seconds++;
  if (seconds <= 9) {
    secondsElement.innerText = `0${seconds}`
  }
  if (seconds > 9) {
    secondsElement.innerText = seconds
  }
  if (seconds > 59) {
    minutes++;
    minutesElement.innerText = `0${minutes}`
    seconds = 0;
    secondsElement.innerText = `0${seconds}`
  }

  if (minutes < 9) {
    minutesElement.innerText = `0${minutes}`
  }
  if (minutes > 9) {
    minutesElement.innerText = minutes
  }
  if (minutes > 59) {
      hours++
      hoursElement.innerText = `0${hours}`
      minutes = 0
      minutesElement.innerText = `0${minutes}`
  }
}

