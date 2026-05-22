// shares.js

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

// Close navbar when clicking outside
window.addEventListener("click", (e) => {
  if (
    !menuBtn.contains(e.target) &&
    !navbar.contains(e.target)
  ) {
    navbar.classList.remove("active");
  }
});

// Simple button interaction
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("TPAO Investment Portal Coming Soon");
  });
});
