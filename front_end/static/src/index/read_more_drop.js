const openButton = document.getElementById("aboutOpenButton");
const dot = document.getElementById("aboutDot");
const text = document.getElementById("aboutText");
const closeButton = document.getElementById("aboutCloseButton");

openButton.addEventListener('click', () => {
  dot.id = "dotActive";
  openButton.style.opacity = 0;
  openButton.style.cursor = "default";
  text.style.opacity = 1;
  closeButton.style.opacity = 1;
  closeButton.style.cursor = "pointer";
});

closeButton.addEventListener('click', () => {
  dot.id = "aboutDot";
  openButton.style.opacity = 1;
  openButton.style.cursor = "pointer";
  text.style.opacity = 0;
  closeButton.style.opacity = 0;
  closeButton.style.cursor = "default";
});
