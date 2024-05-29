let interval;
let timerState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isVisible: true
}

const getTimeFormat = (time) => {
  return time < 10 ? `0${time}` : time;
}

const getVisibleTimer = (isVisible) => {
  timerState.isVisible = isVisible;
}

const startTimer = () => {
  if (timerState.isVisible) {
    timerState.seconds++;

    if (timerState.seconds > 59) {
      timerState.minutes++;
      timerState.seconds = 0;
    }

    if (timerState.minutes > 59) {
      timerState.hours++
      timerState.minutes = 0

    }
  }

}

const handleStartTimer = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
}

const clearTimer = () => {
  timerState.hours = 0;
  timerState.minutes = 0;
  timerState.seconds = 0;
  clearInterval(interval);
}

export {timerState, getTimeFormat, clearTimer, handleStartTimer, getVisibleTimer}
