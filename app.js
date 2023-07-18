let showMenu = document.getElementById("show-hidden");
let hiden = document.getElementById("hidden-menu");

showMenu.onclick = () => {
  hiden.classList.add("active");
};

document.addEventListener("click", function (event) {
  var isClickInside = showMenu.contains(event.target);
  console.log(isClickInside);
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hiden.classList.remove("active");
      // your code here
    }
  });
  if (!isClickInside) {
    hiden.classList.remove("active");
    // your code here
  }
});
