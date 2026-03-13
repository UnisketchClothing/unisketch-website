window.addEventListener("scroll", function(){

let nav = document.querySelector(".navbar");

if(window.scrollY > 50){

nav.style.boxShadow="0 5px 15px rgba(0,0,0,0.1)";

}

});