function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector("input");

const create = document.querySelector("[data-create]");

const destroy = document.querySelector("[data-destroy]");

const box = document.querySelector("#boxes");



create.addEventListener("click", function() {
  createBoxes(parseInt(amount.value));
});

destroy.addEventListener("click", function() {
  destroyBoxes();
});


function createBoxes(amount){
  let element;
    for(let i = 0; i < amount; i++){
      element = document.createElement("div");
      box.appendChild(element);
      element.style.width = `${30 + (i *10)}px`;
      element.style.height = `${30 + (i *10)}px`;
      element.style.backgroundColor = getRandomHexColor();
}};

function destroyBoxes(){
  box.innerHTML = "";
};
