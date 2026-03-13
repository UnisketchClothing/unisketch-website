document.addEventListener("DOMContentLoaded", function(){

const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p");
const heroImage = document.querySelector(".hero-image");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(20px)";

heroText.style.opacity = "0";
heroText.style.transform = "translateY(20px)";

heroImage.style.opacity = "0";
heroImage.style.transform = "translateY(30px)";

setTimeout(()=>{

heroTitle.style.transition = "all 0.8s ease";
heroTitle.style.opacity = "1";
heroTitle.style.transform = "translateY(0)";

},200);

setTimeout(()=>{

heroText.style.transition = "all 0.8s ease";
heroText.style.opacity = "1";
heroText.style.transform = "translateY(0)";

},400);

setTimeout(()=>{

heroImage.style.transition = "all 1s ease";
heroImage.style.opacity = "1";
heroImage.style.transform = "translateY(0)";

},600);

});