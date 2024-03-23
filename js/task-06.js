const text = document.querySelector("#validation-input");

text.addEventListener("blur", (element) => {
  const conditon = parseInt(text.dataset.length)
  if(element.currentTarget.value.length === conditon){
    text.classList.remove("invalid");
    text.classList.add("valid");
  }
  else{
    text.classList.remove("valid");
    text.classList.add("invalid");
  }
});