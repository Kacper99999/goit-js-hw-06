let counterValue = 0;

const decrement = document.querySelector("[data-action = 'decrement']");

const inctement = document.querySelector("[data-action = 'increment']");

const value = document.querySelector("#value");

decrement.addEventListener("click",() => {
  counterValue -= 1;
  value.innerHTML = `<span id='value'>${counterValue}</span>`
});

inctement.addEventListener("click",() => {
  counterValue += 1;
  value.innerHTML = `<span id='value'>${counterValue}</span>`;
}); 