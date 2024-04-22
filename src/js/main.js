var wrappers = document.querySelectorAll(".jswrapper");

wrappers.forEach(function (wrapper) {
  var arrow = wrapper.querySelector(".arrow");
  var menu = wrapper.querySelector(".jscontent");
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle("is-active");
    arrow.classList.toggle("is-active");
  };

  arrow.addEventListener("click", toggleMenu);
});

// var cross = document.querySelector(".cross");
// var menu = document.querySelector(".cards-chips");

// var toggleMenu = function toggleMenu() {
//   menu.classList.toggle("is-active");
// };

// cross.addEventListener("click", toggleMenu);

var chips = document.querySelectorAll(".cards-chips");
chips.forEach(function (chip) {
  var cross = chip.querySelector(".cross");
  var toggleChip = function toggleChip() {
    chip.classList.toggle("is-active");
  };
  cross.addEventListener("click", toggleChip);
});
