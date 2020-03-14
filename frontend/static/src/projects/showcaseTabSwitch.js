const desktopBox = document.getElementsByClassName("tab desktopTab")[0];
const desktopButton = desktopBox.children[0];
const websiteBox = document.getElementsByClassName("tab websiteTab")[0];
const websiteButton = websiteBox.children[0];
const mobileBox = document.getElementsByClassName("tab mobileTab")[0];
const mobileButton = mobileBox.children[0];
const showcase = document.getElementById("showcaseBox");
// 1 = website display
// 2 = desktop display
// 3 = mobile display
let currentActive = 1;

function setDomForActive(newActive){
  if(currentActive == 1){
    websiteButton.style.width = "var(--defaultTabWidth)";
    websiteButton.style.backgroundColor = "transparent";
    websiteButton.style.color = "white";
  }
  else if(currentActive == 2){
    desktopButton.style.width = "var(--defaultTabWidth)";
    desktopButton.style.backgroundColor = "transparent";
    desktopButton.style.color = "white";
  }
  else if(currentActive == 3){
    mobileButton.style.width = "var(--defaultTabWidth)";
    mobileButton.style.backgroundColor = "transparent";
    mobileButton.style.color = "white";
  }

  if(newActive == 1){
    websiteButton.style.width = "50%";
    websiteButton.style.backgroundColor = "white";
    websiteButton.style.color = "black";
    showcase.style.left = "0%";
  }
  else if(newActive == 2){
    desktopButton.style.width = "50%";
    desktopButton.style.backgroundColor = "white";
    desktopButton.style.color = "black";
    showcase.style.left = "-100%";
  }
  else{
    mobileButton.style.width = "50%";
    mobileButton.style.backgroundColor = "white";
    mobileButton.style.color = "black";
    showcase.style.left = "-200%";
  }

  currentActive = newActive;
}

websiteButton.addEventListener('click', () => {
  if(currentActive != 1)
    setDomForActive(1);
});

desktopButton.addEventListener('click', () => {
  if(currentActive != 2)
    setDomForActive(2);
});

mobileButton.addEventListener('click', () => {
  if(currentActive != 3)
    setDomForActive(3);
});

setDomForActive(2);
