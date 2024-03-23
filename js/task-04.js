let counterValue = 0;

const decrement = document.querySelector("[data-action = 'decrement']");

const inctement = document.querySelector("[data-action = 'increment']");

const value = document.querySelector("#value");

decrement.addEventListener("click",() => {
  counterValue -= 1;
  value.textContent = counterValue;
});

inctement.addEventListener("click",() => {
  counterValue += 1;
  value.textContent = counterValue;
});