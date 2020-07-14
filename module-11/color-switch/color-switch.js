// ====================== не получилось достучаться через динамическую разметку ==============
// const task1 = document.querySelector(".color-switch");
// console.log(task1);

// const markup = `<button type="button" data-action="start">Start</button>
//     <button type="button" data-action="stop">Stop</button>`;

// const start = document.querySelector("body > div > button:nth-child(1)");
// const stop = document.querySelector("button[data-action=stop]");
// console.dir(start);
// console.log(stop);

// task1.insertAdjacentHTML("beforeend", markup);
// ============================================================================================

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector("button[data-action=start]");
const stop = document.querySelector("button[data-action=stop]");

let timerId;

const click = function () {
  timerId = setInterval(function () {
    // console.log(randomIntegerFromInterval(0, 5));
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
    console.log(colors[randomIntegerFromInterval(0, 5)]);
  }, 1000);
  start.removeEventListener("click", click);
  stop.addEventListener("click", click);
};

stop.addEventListener("click", function () {
  clearInterval(timerId);
  start.addEventListener("click", click);
  stop.removeEventListener("click", click);
});

start.addEventListener("click", click);
