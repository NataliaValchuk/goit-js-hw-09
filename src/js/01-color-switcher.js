

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function startColorSwitcher() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startColorSwitcher);
stopBtn.addEventListener('click', stopColorSwitcher);


