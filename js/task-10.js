function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numer = document.querySelector("input");

const create = document.querySelector("[data-create]");

const destroy = document.querySelector("[data-destroy]");

const box = document.querySelector("#boxes");



create.addEventListener("click", function() {
  createBoxes(parseInt(numer.value));
});

destroy.addEventListener("click", function() {
  destroyBoxes();
});

let sum = 0;

function createBoxes(numer){
  let element;
  if(numer <= 100 && sum + numer < 100){
    for(let i = 0; i < numer; i++){
      element = document.createElement("div");
      box.appendChild(element);
      element.style.width = `${30 + (sum *10)}px`;
      element.style.height = `${30 + (sum *10)}px`;
      element.style.backgroundColor = getRandomHexColor();
      sum++;
  }
}
  else{
    window.alert("Too large number");
  }
};


function destroyBoxes(){
  box.innerHTML = "";
};
