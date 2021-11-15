import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    // Reject
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { delay, step, amount } = Object.fromEntries(new FormData(event.currentTarget));
  for (let index = 0; index < amount; index++) {
    let promiseDelay = delay;
    if (index > 0) {
      promiseDelay = parseInt(delay) + index * parseInt(step);
    }
    createPromise(index + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
