/* =========================
   SIDEBAR MENU TOGGLE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

/* OPEN & CLOSE MENU */

menuBtn.onclick = (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("active");

    /* SAVE MENU STATE IN HISTORY */

    if(sidebar.classList.contains("active")){

        history.pushState({menu:true}, "");

    }

};

/* =========================
   CLOSE MENU WHEN CLICKING
   OUTSIDE THE NAVBAR
========================= */

document.addEventListener("click", (e) => {

    if(
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){

        sidebar.classList.remove("active");

    }

});

/* =========================
   PREVENT MENU FROM CLOSING
   WHEN CLICKING INSIDE
========================= */

sidebar.addEventListener("click", (e) => {

    e.stopPropagation();

});

/* =========================
   PHONE BACK BUTTON CONTROL
========================= */

window.addEventListener("popstate", () => {

    if(sidebar.classList.contains("active")){

        sidebar.classList.remove("active");

    }

});

/* =========================
   OPTIONAL:
   CLOSE MENU AFTER CLICKING
   A MENU LINK
========================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

});
