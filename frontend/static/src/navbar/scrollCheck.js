const toggler = document.querySelector(".navbar-toggler");
window.addEventListener("scroll", function (event) {
    let root = document.documentElement;
    var scroll = this.scrollY;
    if(scroll > 100){
      root.style.setProperty("--navBackground", "white");
      root.style.setProperty("--navTextColor", "black");
      toggler.classList.remove("navbar-dark");
      toggler.classList.add("navbar-light");
    }
    else{
      root.style.setProperty("--navBackground", "transparent");
      root.style.setProperty("--navTextColor", "white");
      toggler.classList.remove("navbar-light");
      toggler.classList.add("navbar-dark");   
    }
});
