// oilfield.js

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

/* ================= MOBILE NAVBAR ================= */

menuBtn.addEventListener("click", (e) => {

  e.stopPropagation();

  navbar.classList.toggle("active");

});

// Close navbar when clicking outside
document.addEventListener("click", (e) => {

  if(
    navbar.classList.contains("active") &&
    !navbar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ){
    navbar.classList.remove("active");
  }

});

// Prevent navbar closing inside click
navbar.addEventListener("click", (e)=>{
  e.stopPropagation();
});

// Close navbar after clicking links
document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", ()=>{

    if(window.innerWidth <= 900){
      navbar.classList.remove("active");
    }

  });

});

/* ================= COUNTER ================= */

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});
