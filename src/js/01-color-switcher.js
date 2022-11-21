refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let idInterval = null;

refs.stopBtn.disabled = true;

function changeBodyColor() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  idInterval = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 2000);
}

function stopChangeBodyColor() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  clearInterval(idInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', changeBodyColor);
refs.stopBtn.addEventListener('click', stopChangeBodyColor);
