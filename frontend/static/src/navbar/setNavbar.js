/*The html result of running script:
  *navbar container*
    <link rel="stylesheet" href="../static/css/navbar.css" />
    <ul id="navList">
      <li class="navElement navDivider"><a href="/">Jacob Losco</a></li>
      <li class="navElement"><a href="/projects">Projects</a></li>
      <li class="navElement"><a href="#">Resume</a></li>
      <li class="navElement"><a href="/contact">Contact</a></li>
    </ul>
    <script type="text/javascript" src="../static/src/navbar/scrollCheck.js"></script>
*/

const navbarContainer = document.getElementById("navbarContainer");

let navbarStyleSheet = document.createElement("link");
navbarStyleSheet.rel = "stylesheet";
navbarStyleSheet.href = "../static/css/navbar.css";
navbarContainer.appendChild(navbarStyleSheet);

let navList = document.createElement("ul");
navList.id = "navList";
navbarContainer.appendChild(navList);

let indexNavElement = document.createElement("li");
indexNavElement.classList.add("navElement");
indexNavElement.classList.add("navDivider");
let indexLink = document.createElement("a");
indexLink.href = "/";
indexLink.innerHTML = "Jacob Losco";
indexNavElement.appendChild(indexLink);
navList.appendChild(indexNavElement);

let projectNavElement = document.createElement("li");
projectNavElement.classList.add("navElement");
let projectLink = document.createElement("a");
projectLink.href = "/projects";
projectLink.innerHTML = "Projects";
projectNavElement.appendChild(projectLink);
navList.appendChild(projectNavElement);

let resumeNavElement = document.createElement("li");
resumeNavElement.classList.add("navElement");
let resumeLink = document.createElement("a");
resumeLink.href = "/resume";
resumeLink.innerHTML = "Resume";
resumeNavElement.appendChild(resumeLink);
navList.appendChild(resumeNavElement);

let contactNavElement = document.createElement("li");
contactNavElement.classList.add("navElement");
let contactLink = document.createElement("a");
contactLink.href = "/contact";
contactLink.innerHTML = "Contact";
contactNavElement.appendChild(contactLink);
navList.appendChild(contactNavElement);

let scrollScript = document.createElement("script");
scrollScript.type = "text/javascript";
scrollScript.src = "../static/src/navbar/scrollCheck.js";
navbarContainer.appendChild(scrollScript);