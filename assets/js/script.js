document.querySelector("#years").innerHTML = new Date().getFullYear();
let navbar = document.querySelector(".navbar");

window.onscroll = function () {
  navFixer();
};

function navFixer() {
  if (document.documentElement.scrollTop > 200) {
    navbar.classList.add("nav-fixed");
  } else {
    navbar.classList.remove("nav-fixed");
  }
}
