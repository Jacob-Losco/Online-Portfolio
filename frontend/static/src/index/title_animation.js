const header = document.getElementById("headerTitle");
const subHeader = document.getElementById("headerSub");
const about = document.querySelector(".aboutButtonBox");
var i = 0;
var txt = "Hi, I'm Jacob Losco"; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

async function typeWriter() {
  if (i < txt.length) {
    header.innerHTML += txt.charAt(i);
    i++;
    if(i == 7 && screen.width <= 768)
      header.innerHTML += "<br>";
    setTimeout(typeWriter, speed);
  }
}
subHeader.style.opacity = 1;
about.style.opacity = 1;
typeWriter();