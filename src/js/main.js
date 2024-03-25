var wrappers = document.querySelectorAll(".jswrapper");

wrappers.forEach(function (wrapper) {
  var arrow = wrapper.querySelector(".arrow");
  var menu = wrapper.querySelector(".jscontent");
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle("is-active");
  };
  arrow.addEventListener("click", toggleMenu);
});
