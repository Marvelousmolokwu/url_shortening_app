const menu = document.querySelector(".menu-bar");
const NavBar = document.getElementById("nav");
menu.addEventListener("click", () => {
  NavBar.classList.toggle("hidden");
});
