const categories = document.querySelector("#categories");

const main_caount = categories.children.length;

console.log(`Number of categories: ${main_caount}`);

//----------------------------------------------------

const animals = categories.firstElementChild;

const animals_firstChild = animals.firstElementChild;

const animals_lastChild = animals.lastElementChild;

console.log(`Category: ${animals_firstChild.textContent}\nElemenst: ${animals_lastChild.childElementCount}`);

//----------------------------------------------------

const products = animals.nextElementSibling;

const products_firstChild = products.firstElementChild;

const products_lastChild = products.lastElementChild;

console.log(`Category: ${products_firstChild.textContent}\nElemenst: ${products_lastChild.childElementCount}`);

//----------------------------------------------------

const technologies = products.nextElementSibling;

const technologies_firstChild = technologies.firstElementChild;

const technologies_lastChild = technologies.lastElementChild;

console.log(`Category: ${technologies_firstChild.textContent}\nElemenst: ${technologies_lastChild.childElementCount}`);