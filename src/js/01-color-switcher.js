/*
HTML містить кнопки «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);

stopButtonRef.disabled = true;

let intervalId = null;

function onStartButtonClick(event) {
  event.target.disabled = true;
  stopButtonRef.disabled = false;
  intervalId = setInterval(() => {
    let currentBackgroundColor = getRandomHexColor();
    bodyRef.style.backgroundColor = currentBackgroundColor;
  }, 1000);
}

function onStopButtonClick(event) {
  event.target.disabled = true;
  startButtonRef.disabled = false;
  clearInterval(intervalId);
  bodyRef.style.backgroundColor = '';
}
