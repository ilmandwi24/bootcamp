// alert("aasasa")

let mainLogo = document.getElementById("menu-icon");
let faBars =  document.getElementById("fa-bars");
let faTimes =  document.getElementById("fa-times");
let menuMobile = document.getElementById("menu-mobile");




mainLogo.addEventListener("click", function(){ 
    faBars.classList.toggle('hidden');
    faTimes.classList.toggle('hidden');
    if (menuMobile.style.display === "none") {
        menuMobile.style.display = "flex";
      } else {
        menuMobile.style.display = "none";
      }
   
});
