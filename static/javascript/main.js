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
      animateMenuItems()
    } else {
      menuItems.style.display = "none";
    }
});


function animateMenuItems() {
  var items = menuItems.getElementsByClassName("menu-item");
  var delay = 100; // Delay in milliseconds between each menu item

  for (var i = 0; i < items.length; i++) {
    (function(index) {
      setTimeout(function() {
        items[index].style.opacity = 1;
      }, delay * index);
    })(i);
  }
}