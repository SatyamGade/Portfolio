const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}))

const textArea = document.querySelector("#text");
const email = document.querySelector("#email");
const fullname = document.querySelector("#name");

const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    alert("Message sent successfully!");
    textArea = "";
    email = "";
    fullname = "";
});


function scrollTo() {
    console.log("occured!")
    var anchorlink = document.getElementById("education");
    anchorlink.scrollIntoView();
}
