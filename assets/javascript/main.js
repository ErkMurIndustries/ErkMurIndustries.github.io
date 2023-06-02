var menuLink = document.getElementById("menu-link")
var menuImage = document.getElementById("menu-image");
var menuItems = document.getElementById("menuItems");
const rootPath = window.location.origin
const imagePath = "assets/images"


menuLink.addEventListener("mouseover", function() {
    menuImage.src = `${rootPath}/${imagePath}/menu_dark.png`;
});


menuLink.addEventListener("mouseout", function() {
    menuImage.src = `${rootPath}/${imagePath}/menu_light.png`;
});


menuLink.addEventListener("click", function() {
    if (menuItems.style.display === "none") {
      menuItems.style.display = "";
      animateMenuItems()
    } else {
      menuItems.style.display = "none";
      resetMenuItems()
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

function resetMenuItems() {
  var items = menuItems.getElementsByClassName("menu-item");
  var delay = 100; // Delay in milliseconds between each menu item

  for (var i = 0; i < items.length; i++) {
    (function(index) {
      setTimeout(function() {
        items[index].style.opacity = 0;
      }, delay * index);
    })(i);
  }
}

// TABLE OF CONTENTS ON BLOG PAGE
const generated_toc = document.getElementById("markdown-toc")
const move_to_div = document.getElementById('toc-div')

if (generated_toc) {
    gen_toc_parent = generated_toc.parentNode
    gen_toc_parent.removeChild(generated_toc)

    toc_header = document.createElement('h4')
    toc_header.textContent = "Table of Contents"
    move_to_div.appendChild(toc_header)
    move_to_div.appendChild(generated_toc)
}


// CLIPBOARD COPY URL
function copyUrl(url) {
  // TODO: Add transitions to make cleaner
  messageDiv = document.getElementById("copied-message")
  navigator.clipboard.writeText(url)
  messageDiv.innerText = "URL Copied"
  setTimeout(() => {
    messageDiv.innerText = "Copy URL"
  }, 3000)
}
