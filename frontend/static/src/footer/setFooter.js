/*The html result of running script:
*Container for footer*
<link rel="stylesheet" href="../static/css/footer.css" />
<div id="footerBox">
  <p id="footerTitle">Connect With Me</p>
  <ul id = "footerLinkList">
    <li>
      <a href="https://github.com/Jacob-Losco" class="footerLink"><img class="footerLinkIcon" src="../static/images/Website_Github_Icon.png" /></a>
    </li>
    <li>
      <a href= "https://www.youtube.com/channel/UCHIsk5F9xZsk7i3WLQNGiWw/?guided_help_flow=5" class="footerLink"><img class="footerLinkIcon" src="../static/images/Website_Youtube_Icon.png" /></a>
    </li>
    <li>
      <a href= "=https://www.linkedin.com/in/jacob-losco-976150192/" class="footerLink"><img class="footerLinkIcon" src="../static/images/Website_LinkedIn_Icon.png" /></a>
    </li>
    <li>
      <a href="https://leetcode.com/jacob-losco/" class="footerLink"><img class="footerLinkIcon" src="../static/images/Website_Leetcode_Icon.png" /></a>
    </li>
    <li>
      <a href="https://stackoverflow.com/users/11704042/jacob-losco" class="footerLink"><img class="footerLinkIcon" src="../static/images/Website_Stack_Icon.png" /></a>
    </li>
  </ul>
</div>
*/

const footerContainer = document.getElementsByTagName("footer")[0];

let footerStyleSheet = document.createElement("link");
footerStyleSheet.rel = "stylesheet";
footerStyleSheet.href = "../static/css/footer.css";
footerContainer.appendChild(footerStyleSheet);

let footerBox = document.createElement("div");
footerBox.id = "footerBox";
footerContainer.appendChild(footerBox);

let footerTitle = document.createElement("p");
footerTitle.id = "footerTitle";
footerTitle.innerHTML = "Connect With Me";
footerBox.appendChild(footerTitle);

let footerLinkList = document.createElement("ul");
footerLinkList.id = "footerLinkList";
footerBox.appendChild(footerLinkList);

let githubListElement = document.createElement("li");
footerLinkList.appendChild(githubListElement);
let githubLink = document.createElement("a");
githubLink.href = "https://github.com/Jacob-Losco";
githubLink.classList.add("footerLink");
githubListElement.appendChild(githubLink);
let githubIcon = document.createElement("img");
githubIcon.src = "../static/images/Website_Github_Icon.png";
githubIcon.classList.add("footerLinkIcon");
githubLink.appendChild(githubIcon);

let youtubeListElement = document.createElement("li");
footerLinkList.appendChild(youtubeListElement);
let youtubeLink = document.createElement("a");
youtubeLink.href = "https://www.youtube.com/channel/UCHIsk5F9xZsk7i3WLQNGiWw/?guided_help_flow=5";
youtubeLink.classList.add("footerLink");
youtubeListElement.appendChild(youtubeLink);
let youtubeIcon = document.createElement("img");
youtubeIcon.src = "../static/images/Website_Youtube_Icon.png";
youtubeIcon.classList.add("footerLinkIcon");
youtubeLink.appendChild(youtubeIcon);

let linkedListElement = document.createElement("li");
footerLinkList.appendChild(linkedListElement);
let linkedLink = document.createElement("a");
linkedLink.href = "https://www.linkedin.com/in/jacob-losco-976150192/";
linkedLink.classList.add("footerLink");
linkedListElement.appendChild(linkedLink);
let linkedIcon = document.createElement("img");
linkedIcon.src = "../static/images/Website_LinkedIn_Icon.png";
linkedIcon.classList.add("footerLinkIcon");
linkedLink.appendChild(linkedIcon);

let leetListElement = document.createElement("li");
footerLinkList.appendChild(leetListElement);
let leetLink = document.createElement("a");
leetLink.href = "https://leetcode.com/jacob-losco/";
leetLink.classList.add("footerLink");
leetListElement.appendChild(leetLink);
let leetIcon = document.createElement("img");
leetIcon.src = "../static/images/Website_Leetcode_Icon.png";
leetIcon.classList.add("footerLinkIcon");
leetLink.appendChild(leetIcon);

let stackListElement = document.createElement("li");
footerLinkList.appendChild(stackListElement);
let stackLink = document.createElement("a");
stackLink.href = "https://stackoverflow.com/users/11704042/jacob-losco";
stackLink.classList.add("footerLink");
stackListElement.appendChild(stackLink);
let stackIcon = document.createElement("img");
stackIcon.src = "../static/images/Website_Stack_Icon.png";
stackIcon.classList.add("footerLinkIcon");
stackLink.appendChild(stackIcon);