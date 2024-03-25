var arrow = document.querySelector(".arrow");
var menu = document.querySelector(".jscontent");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

arrow.addEventListener("click", toggleMenu);
