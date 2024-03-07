const clock = document.querySelector('.clock');

function runClock(){
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var sec = time.getSeconds();
    var txt = "AM";
    if(hrs >12){
        hrs-=12;
        txt="PM";
    }else if(hrs==0){
        hrs ="12";
        txt="AM";
    }
    hrs = hrs < 10? '0'+ hrs:hrs;
    mins = mins < 10? '0'+ mins:mins;
    sec = sec < 10? '0'+ sec:sec;

    //---------------------------------------------
    
    const h = document.querySelectorAll('.h')
    const m = document.querySelectorAll('.m')
    const s = document.querySelectorAll('.s')
    const text = document.querySelector(".txt")

    hrs = hrs.toString();
    mins = mins.toString();
    sec = sec.toString();

    h[0].innerHTML=hrs[0];
    h[1].innerHTML=hrs[1];

    m[0].innerHTML=mins[0];
    m[1].innerHTML=mins[1];

    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];
    text.innerHTML = txt;    
}

runClock();
setInterval(runClock, 1000);