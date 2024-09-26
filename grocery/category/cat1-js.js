document.getElementById("sign-up").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
 })
 
 document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
 })
 
 
 document.getElementById("log-in-link").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-2").style.display = "flex";
 })
 
 document.getElementById("sign-up-link").addEventListener("click",function(){
    document.querySelector(".popup-2").style.display = "none";
    document.querySelector(".popup").style.display = "flex";
 })
 
 document.querySelector(".close-btn-2").addEventListener("click",function(){
    document.querySelector(".popup-2").style.display = "none";
 })
 
 document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
 })
 