import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';
import 'flatpickr/dist/themes/dark.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  dateTimeEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

let dateFinish = null;
let idInterval = null;

refs.startBtn.disabled = true;

Notiflix.Notify.init({
  timeout: 2000,
  clickToClose: true,
});

const options = {
  enableTime: true,
  plugins: [
    new confirmDatePlugin({
      confirmIcon: "<i class='fa fa-check'></i>",
      confirmText: 'OK ',
      showAlways: false,
      theme: 'dark',
    }),
  ],
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate || refs.dateTimeEl.value === ''
      ? (Notiflix.Notify.failure('Please choose a date in the future'),
        (refs.startBtn.disabled = true))
      : (Notiflix.Notify.info('Push the start button!'),
        (refs.startBtn.disabled = false));
    dateFinish = selectedDates[0];
  },
};

const fp = flatpickr(refs.dateTimeEl, options);

function startTimer() {
  refs.startBtn.disabled = true;

  if (dateFinish <= Date.now()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  Notiflix.Notify.success('Timer started successfully!');
  idInterval = setInterval(() => {
    let timer = dateFinish - Date.now();
    if (timer > 0) {
      timerMarkUp(timer);
    } else {
      Notiflix.Notify.info('Timer passed!');
      clearInterval(idInterval);
      defaultTimerMarkUp();
    }
  }, 1000);
}

function timerMarkUp(timer) {
  const { days, hours, minutes, seconds } = convertMs(timer);
  refs.secondsEl.textContent = addLeadingZero(seconds);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.daysEl.textContent = days;
  refs.dateTimeEl.disabled = true;
}

function defaultTimerMarkUp() {
  refs.secondsEl.textContent = '00';
  refs.minutesEl.textContent = '00';
  refs.hoursEl.textContent = '00';
  refs.daysEl.textContent = '00';
  refs.dateTimeEl.disabled = false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.startBtn.addEventListener('click', startTimer);
