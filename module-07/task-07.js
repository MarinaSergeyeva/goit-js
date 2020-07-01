const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeChange = (event) => {
  console.log(fontSize.value);
  console.log(text.value);

  text.style.fontSize = fontSize.value + "px";
};

fontSize.addEventListener("input", fontSizeChange);
