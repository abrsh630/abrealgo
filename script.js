// Script for navigation bar
let bar = document.getElementById("bar");
let navbar = document.getElementById("navbar");
let close = document.getElementById("close");
let nav = document.getElementsByClassName("nav");

bar.onclick = function(){
  navbar.style.right = nav.style.right;
}
  if(close){
    close.addEventListener("click",()=>{
      navbar[0].style.right = "-300px";
    })
  }