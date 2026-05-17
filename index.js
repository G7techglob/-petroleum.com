const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

/* TOGGLE MENU */
menuBtn.onclick = (e) => {
e.stopPropagation();
sidebar.classList.toggle("active");

/* HISTORY STEP SYSTEM */
if(sidebar.classList.contains("active")){
history.pushState({menu:true},"");
}
else{
history.back();
}
};

/* CLOSE ON OUTSIDE CLICK */
document.addEventListener("click",(e)=>{
if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)){
sidebar.classList.remove("active");
}
});

/* CLOSE ON BACK BUTTON */
window.addEventListener("popstate",()=>{
sidebar.classList.remove("active");
});

/* CLOSE ON LINK CLICK */
document.querySelectorAll(".menu a").forEach(a=>{
a.addEventListener("click",()=>{
sidebar.classList.remove("active");
});
});

/* ESC KEY */
document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
sidebar.classList.remove("active");
}
});
