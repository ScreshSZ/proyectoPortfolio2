const mobile = document.querySelector(".btnMobile")
const navLinks = document.querySelector(".navLinks")

const band = true

mobile.addEventListener("click", ()=>{
    navLinks.classList.toggle("show")
})

