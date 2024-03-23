const form = document.querySelector(".login-form");

function handleSubmit(event){
  event.preventDefault();

  const obj = {};

  const target = event.target;

  const valueEmail = target.elements.email.value;
  const valuePassword = target.elements.password.value;

  obj.email = valueEmail;
  obj.password = valuePassword;

  if(valueEmail === "" || valuePassword === ""){
    alert("Please fill in all the fields!");
  }

  console.log(obj);
  form.reset();
};

form.addEventListener("submit",handleSubmit);
