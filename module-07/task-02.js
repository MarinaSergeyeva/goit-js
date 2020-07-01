const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;

  fragment.appendChild(li);
});

list.appendChild(fragment);
