const inputRef = document.querySelector("#validation-input");
const inputLengthReg = document.querySelector("input[data-length]");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  event.target.value.length < 6
    ? this.classList.add("invalid")
    : this.classList.add("valid");
}
