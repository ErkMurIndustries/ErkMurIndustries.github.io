var menuLink = document.getElementById("menu-link")
var menuImage = document.getElementById("menu-image");
var menuItems = document.getElementById("menuItems");


menuLink.addEventListener("mouseover", function() {
    menuImage.src = "static/images/menu_dark.png";
});


menuLink.addEventListener("mouseout", function() {
    menuImage.src = "static/images/menu_light.png";
});


menuLink.addEventListener("click", function() {
    if (menuItems.style.display === "none") {
      menuItems.style.display = "";
      menuLink.classList.add("active"); 
    } else {
      menuItems.style.display = "none";
      menuLink.classList.remove("active"); 
    }
});