const TimeView = {
  render: () => {
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

    <div class="d-flex justify-content-center align-items-center padding-inline pb-3"  id="timer">
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
  }
}

export default TimeView;
