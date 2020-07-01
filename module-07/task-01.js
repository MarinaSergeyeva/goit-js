// const categories = document.getElementsByClassName("item");
// console.log(`В списке ${categories.length} категории.`);

const categories = document.querySelector("#categories");
console.log(`В списке ${categories.children.length} категории.`);

const arrayList = document.querySelectorAll(".item");
console.log(arrayList);

const newArrayList = Array.from(arrayList);
console.log(newArrayList);

for (let i = 0; i < newArrayList.length; i += 1) {
  const category = newArrayList[i].children[0].textContent;
  console.log(`Категория: ${category}`);
  const value = newArrayList[i].children[1].children.length;
  console.log(`Количество элементов: ${value}`);
}
