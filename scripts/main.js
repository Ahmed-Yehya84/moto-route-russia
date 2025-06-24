const toggle = document.getElementById("navToggle");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});

console.log("working");
