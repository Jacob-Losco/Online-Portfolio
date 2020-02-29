window.addEventListener("scroll", function (event) {
    let root = document.documentElement;
    var scroll = this.scrollY;
    if(scroll > 100){
      root.style.setProperty("--navBackground", "white");
      root.style.setProperty("--navTextColor", "black");
      root.style.setProperty("--navLinkHighlightBackground", "black");
      root.style.setProperty("--navLinkHighlightTextColor", "white");
      document.getElementById("navbarContainer").style.height = "10%";
      document.getElementById("navbarLogo").style.width = "10%"
      document.getElementById("navbarLogo").style.backgroundColor = "black";
      document.getElementById("navbarLogo").style.borderRadius = "10%";
    }
    else{
      root.style.setProperty("--navBackground", "transparent");
      root.style.setProperty("--navTextColor", "white");
      root.style.setProperty("--navLinkHighlightBackground", "white");
      root.style.setProperty("--navLinkHighlightTextColor", "black");
      document.getElementById("navbarContainer").style.height = "15%";
      document.getElementById("navbarLogo").style.width = "15%";
      document.getElementById("navbarLogo").style.backgroundColor = "transparent";
    }
});
