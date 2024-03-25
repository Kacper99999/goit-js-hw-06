const categories = document.querySelector("#categories");

const main_caount = categories.children.length;

console.log(`Number of categories: ${main_caount}`);

//----------------------------------------------------

const listElement = categories.firstElementChild;
let listElementNext = listElement.nextElementSibling;

for(let i = 0; i < main_caount; i++){
  if(i === 0){
    const listElement_firstChild = listElement.firstElementChild;
    const listElement_lastChild = listElement.lastElementChild;
    console.log(`Category: ${listElement_firstChild.textContent}\nElemenst: ${listElement_lastChild.childElementCount}`);
  }
  else{
    const listElementNext_firstChild = listElementNext.firstElementChild;
    const listElementNext_lastChild = listElementNext.lastElementChild;
    console.log(`Category: ${listElementNext_firstChild.textContent}\nElemenst: ${listElementNext_lastChild.childElementCount}`);
    listElementNext = listElementNext.nextElementSibling;
  }
};