import {clearTimer, getTimeFormat, getVisibleTimer, handleStartTimer, timerState} from "../timer.js";

const TimeView = {
  render: () => {
    const displayTimer = timerState.isVisible ? 'd-flex' : 'd-none';
    return (
      `<section class="d-flex flex-column bg-white pb-3">
    <div class="d-flex justify-content-between align-items-center padding-inline py-3 fs-6">
      <span>Timer</span>
      <div class="d-flex gap-2">
        <button class="btn p-0 border-0" id="open">
          <img src="./img/icons/arrow-down.svg" alt="Open timer" width="24" height="24"/>
        </button>
        <button class="btn p-0 border-0" id="update">
          <img src="./img/icons/update-icon.svg" alt="Update timer" width="24" height="24"/>
        </button>
        <button class="btn p-0 border-0" id="close">
          <img src="./img/icons/close-icon.svg" alt="Close timer" width="24" height="24"/>
        </button>
      </div>
    </div>

    <div class=" justify-content-center align-items-center padding-inline pb-3 ${displayTimer}"  id="timer">
      <div class="w-100 pt-3">
        <span id="hours">00</span>
        :
        <span id="minutes">00</span>
        :
        <span id="seconds">00</span>
      </div>
    </div>
  </section>`
    );
  },
  afterRender: () => {
    const timerElement = document.getElementById('timer');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const startButton = document.getElementById('open');
    const updateButton = document.getElementById('update');
    const closeButton = document.getElementById('close');

    const updateTimerDisplay = () => {
      hoursElement.textContent = getTimeFormat(timerState.hours);
      minutesElement.textContent = getTimeFormat(timerState.minutes);
      secondsElement.textContent = getTimeFormat(timerState.seconds);
    }

    const openTimer = () => {
      timerElement.classList.remove('d-none');
      timerElement.classList.add('d-flex');
      handleStartTimer();
      updateTimerDisplay();
      getVisibleTimer(true)
    }

    startButton.addEventListener('click', openTimer);

    updateButton.addEventListener('click', () => {
      clearTimer();
      handleStartTimer();
      updateTimerDisplay();
    })

    closeButton.addEventListener('click', () => {
      clearTimer();
      timerElement.classList.add('d-none');
      timerElement.classList.remove('d-flex');
      getVisibleTimer(false);
    });

    const setTimerInterval = () => {
      updateTimerDisplay();
      setInterval(updateTimerDisplay, 1000);
    }
    setTimerInterval();

  }
}

export default TimeView;
