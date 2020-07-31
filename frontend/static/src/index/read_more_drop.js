const openButton = document.getElementById("aboutButton");
const dot = document.getElementById("aboutDot");
const textBox = document.getElementById("textBox");
const text = document.getElementById("aboutText");
const navButtonsBox = document.getElementById("indexNavButtonBox");
let opened = false;

openButton.addEventListener('click', () => {
  if(openButton.innerHTML == "Read more about me"){
    dot.id = "dotActive";
    openButton.innerHTML = "Collapse"
    textBox.style.height = "60%";
    text.style.opacity = 1;
    text.style.transition = "1s ease-in";
    navButtonsBox.style.zIndex = "-1";
    navButtonsBox.style.opacity = "0";
  }
  
  else if(openButton.innerHTML == "Collapse"){
    dot.id = "aboutDot";
    openButton.innerHTML = "Read more about me";
    textBox.style.height = "10%"; 
    text.style.opacity = 0;
    text.style.transition = ".1s ease-in";
    navButtonsBox.style.zIndex = "1";
    navButtonsBox.style.opacity = "1";
  }
});


  

