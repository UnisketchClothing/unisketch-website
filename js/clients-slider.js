document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".logo-track");

if(!track) return;

const logos = track.innerHTML;

track.innerHTML += logos;

});