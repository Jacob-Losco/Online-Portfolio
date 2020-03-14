window.addEventListener("scroll", function (event) {
    let root = document.documentElement;
    var scroll = this.scrollY;
    if(scroll > 100){
      root.style.setProperty("--navBackground", "white");
      root.style.setProperty("--navTextColor", "black");
      root.style.setProperty("--navLinkHighlightBackground", "black");
      root.style.setProperty("--navLinkHighlightTextColor", "white");
      document.getElementById("navbarContainer").style.height = "8%";
    }
    else{
      root.style.setProperty("--navBackground", "transparent");
      root.style.setProperty("--navTextColor", "white");
      root.style.setProperty("--navLinkHighlightBackground", "white");
      root.style.setProperty("--navLinkHighlightTextColor", "black");
      document.getElementById("navbarContainer").style.height = "15%";
    }
});
