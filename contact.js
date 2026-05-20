

// MOBILE Navbar 
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("active");

});

// CLOSE NAVBAR WHEN CLICKING OUTSIDE

document.addEventListener("click", (e) => {

  if(
    !navbar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ){

    navbar.classList.remove("active");

  }

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  successMessage.innerHTML =
  "Message sent successfully.";

  contactForm.reset();

});
