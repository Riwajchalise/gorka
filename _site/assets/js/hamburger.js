document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
      navBar.classList.toggle("open"); // Toggle the nav-bar's open class
      hamburger.classList.toggle("opened"); // Optional for animation toggle
  });
});
