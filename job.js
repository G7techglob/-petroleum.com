// jobs.js

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// CLOSE NAVBAR WHEN CLICK OUTSIDE

document.addEventListener("click", (e) => {
  if (
    !navbar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navbar.classList.remove("active");
  }
});

// POPUP

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// CLOSE POPUP OUTSIDE

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// FORM SUBMIT

const form = document.getElementById("applicationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Application submitted successfully!");

  popup.style.display = "none";

  form.reset();
});

// SEARCH JOBS

const searchInput = document.getElementById("searchInput");
const jobs = document.querySelectorAll(".job-box");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  jobs.forEach((job) => {

    const text = job.innerText.toLowerCase();

    if(text.includes(value)){
      job.style.display = "block";
    }else{
      job.style.display = "none";
    }

  });

});
