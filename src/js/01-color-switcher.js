function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');

let timerId = null;

buttonStartEl.addEventListener('click', () => {
  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;
  setRandomColor();
});

const setRandomColor = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

buttonStopEl.addEventListener('click', () => {
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
  clearTimeout(timerId);
});
