import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

Notiflix.Notify.init({
  timeout: 2000,
  clickToClose: true,
});

const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelecstor('input[name="amount"]'),
};

function onSubmit(evt) {
  evt.preventDefault();
  const options = {
    delayStart: refs.delayEl.value,
    //  amount: refs.amountEl.value,
    amount: 5,
    step: refs.stepEl.value,
  };
  createPromiseStack(options);
}

function createPromiseStack({ delayStart, amount, step }) {
  for (let position = 1; position <= amount; position += 1) {
    let delay = Number(delayStart) + Number(step) * (Number(position) - 1);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.formEl.addEventListener('submit', onSubmit);
