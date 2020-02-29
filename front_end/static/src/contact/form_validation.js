const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector('.emailError');
const emailDot = document.getElementsByClassName("requiredDot")[0];

const message = document.getElementById("message");
const messageError = document.querySelector(".messageError");
const messageDot = document.getElementsByClassName("requiredDot")[1];


email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if(email.validity.valid){
    emailDot.style.color = "white";
  }
  else{
    emailDot.style.color = "red";
  }
});

function showEmailError() {
  if(email.validity.valueMissing) {
    emailError.style.opacity = 1;
    emailError.innerHTML = 'You need to enter an e-mail address.';
  }
  else if(email.validity.typeMismatch) {
    emailError.style.opacity = 1;
    emailError.innerHTML = 'Entered value needs to be an e-mail address.';
  }
}

message.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if(message.validity.valid){
    messageDot.style.color = "white";
  }
  else{
    messageDot.style.color = "red";
  }
});

function showMessageError() {
  if(message.validity.valueMissing) {
    messageError.style.opacity = 1;
    messageError.innerHTML = 'You need to enter a message.';
  }
}


form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    //prevent the form from being sent by canceling the event
    showEmailError();
    event.preventDefault();
  }
  else if(!message.validity.valid){
    //prevent the form from being sent by canceling the event
    showMessageError();
    event.preventDefault();
  }
  else {
    emailError.style.opacity = 0;
    messageError.style.opacity = 0;
  }
});
