document.getElementById("button").addEventListener("click",function(){
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

// deal start

// let countDate = new Date('february 15, 2024 00:00:00').getTime();


// function CountDown(){

//    let now = new Date().getTime();
//    gap = countDate - now;

//    let second = 1000;
//    let minute = second * 60;
//    let hour = minute * 60;
//    let day = hour * 24;

//    let d = Math.floor(gap / (day));
//    let h = Math.floor((gap % (day)) / (hour));
//    let m = Math.floor((gap % (hour)) / (minute));
//    let s = Math.floor((gap % (minute)) / (second));

//    document.getElementById('days').innerText = d;
//    document.getElementById('hour').innerText = h;
//    document.getElementById('minute').innerText = m;
//    document.getElementById('second').innerText = s;

// }

// setInterval(function(){
//    CountDown();
// },1000)


// deal end


