/*The html result of running script:
*Container for navbar*

<link rel="stylesheet" href="../static/css/navbar.css" />
<div id="navbarLogoBox">
  <img id="navbarLogo" src="../static/images/Jacob_Losco_White.png"><a href="#"></a></img>
</div>
<div id="navbarLinksBox">
  <ul id="navList">
    <li class="navElement"><a href="#">Projects</a></li>
    <li class="navElement"><a href="#">Resume</a></li>
    <li class="navElement"><a href="#">Contact</a></li>
  </ul>
</div>
*/
const navbarContainer = document.getElementById("navbarContainer");

let navbarStyleSheet = document.createElement("link");
navbarStyleSheet.rel = "stylesheet";
navbarStyleSheet.href = "../static/css/navbar.css";
navbarContainer.appendChild(navbarStyleSheet);

let navbarLogoBox = document.createElement("div");
navbarLogoBox.id = "navbarLogoBox";
navbarContainer.appendChild(navbarLogoBox);

let navbarLogoLink = document.createElement("a");
navbarLogoLink.href = "/";
navbarLogoBox.appendChild(navbarLogoLink);
let navbarLogo = document.createElement("img");
navbarLogo.id = "navbarLogo";
navbarLogo.src = "../static/images/Jacob_Losco_White.png";
navbarLogoLink.appendChild(navbarLogo);

let navbarLinksBox = document.createElement("div");
navbarLinksBox.id = "navbarLinksBox";
navbarContainer.appendChild(navbarLinksBox);

let navList = document.createElement("ul");
navList.id = "navList";
navbarLinksBox.appendChild(navList);

let projectNavElement = document.createElement("li");
projectNavElement.id = "navElement";
let projectLink = document.createElement("a");
projectLink.href = "/projects";
projectLink.innerHTML = "Projects";
projectNavElement.appendChild(projectLink);
navList.appendChild(projectNavElement);

let resumeNavElement = document.createElement("li");
resumeNavElement.id = "navElement";
let resumeLink = document.createElement("a");
resumeLink.href = "#";
resumeLink.innerHTML = "Resume";
resumeNavElement.appendChild(resumeLink);
navList.appendChild(resumeNavElement);

let contactNavElement = document.createElement("li");
contactNavElement.id = "navElement";
let contactLink = document.createElement("a");
contactLink.href = "/contact";
contactLink.innerHTML = "Contact";
contactNavElement.appendChild(contactLink);
navList.appendChild(contactNavElement);
