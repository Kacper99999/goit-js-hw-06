const text_name = document.querySelector("#name-input");

const text = document.querySelector("#name-output");

text_name.addEventListener("input", (element) => {
  text.textContent = element.currentTarget.value;
});