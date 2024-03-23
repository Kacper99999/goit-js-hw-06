function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector("body");

const text_color = document.querySelector(".color");

const button = document.querySelector(".change-color"); 



button.addEventListener("click",() => {
  color.style.backgroundColor = getRandomHexColor();
  text_color.textContent = getRandomHexColor();
});
