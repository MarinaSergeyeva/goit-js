const amountBoxes = document.querySelector("input[type=number]");
const create = document.querySelector('button[data-action="render"]');
const delBoxes = document.querySelector('button[data-action="destroy"]');

const boxes = document.querySelector("#boxes");

console.dir(amountBoxes);
console.dir(create);
// console.dir(destroyBoxes);
console.dir(Number(amountBoxes.value));

let x = 30;

const getBoxes = function createBoxes(amount) {
  //   console.log(amountBoxes.value);
  amount = amountBoxes.value;

  for (let i = 1; i <= amount; i += 1) {
    x += 10;
    const div = document.createElement("div");
    div.classList.add("box");

    div.style.width = x + "px";
    div.style.height = x + "px";
    div.style.border = "2px solid red";

    console.log(div);
    console.dir(div);

    boxes.append(div);

    function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);

      div.style.background = bgColor;
    }

    random_bg_color();
  }
};

console.dir(boxes);
console.dir(boxes.childNodes);

//---------- var-1 ----------//

// const destroyBoxes = () => {
//   boxes.innerHTML = " ";
// };

//---------- var-2 ----------//
const destroyBoxes = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  x = 30;
};

create.addEventListener("click", getBoxes);
delBoxes.addEventListener("click", destroyBoxes);
