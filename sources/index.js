alert("welcome")

const navLists = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click",()=>{
    console.log("clicked");
    hamburger.classList.toggle("active")
    navLists.classList.toggle("active")
})


console.log("welcome home")
// document.querySelectorAll(".nav-links").forEach(n => n.addEventListener('click',()=>{
//     // console.log(n);
//     hamburger.classList.remove("active");
//     navLists.classList.remove("active");
// }))
