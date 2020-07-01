const counterValue = document.querySelector("#value");
const increment = document.querySelector("button[data-action=increment]");
const decrement = document.querySelector("button[data-action=decrement]");

console.log(counterValue);

let value = 0;
increment.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

decrement.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});
