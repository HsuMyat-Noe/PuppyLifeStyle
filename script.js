var wakeupTime = 7;
var lunchTime = 12
var napTime = lunchTime + 2;
var evening = 18;
var noon = 12;
var partyTime;
var partition = "AM";

var clock = document.getElementById("clock");
var puppy_img = document.getElementById("puppy-img");
var btnParty = document.getElementById("btn-party");
var wakeup = document.getElementById('wakeup-time');
var lunch = document.getElementById('lunch-time');
var nap = document.getElementById('nap-time');


btnParty.addEventListener("click", party);
function party(){
    if(partyTime < 0){
        var time = new Date();
        partyTime = time.getHours();
        btnParty.innerText = "Party Time!";
        puppy_img.src = "img/puppy-party-over.jpg";
        quote.innerText = "Oh! party is over";

    }else{
            btnParty.innerText = "Party Over!";
            puppy_img.src = "img/puppy-party.jpg";
            quote.innerText = "Yay! It's party time";
            partyTime = -1;
        }
}
party();

function getClock(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(hour > noon){
        hour = hour - 12;
        partition = "PM";
    }

    if(hour > 12){
        hour = hour - 12;
    }

    if(hour < 10 ){
        hour = '0' + hour;
    }

    if(minute < 10){
        minute = '0' + minute;
    }

    if(second < 10){
        second = '0' + second;
    }

    clock.innerText = hour + ":" + minute + ":" + second + " " + partition;
    setInterval(getClock, 1);
}

function updateClock(){
    var d = new Date();
    var h = d.getHours();
    var quote = document.getElementById("quote");
    puppy_img.src = "img/puppy-normal.jpg";

    if(h == wakeupTime){
        puppy_img.src = "img/puppy-wakeup.jpg";
        quote.innerText = "Wake up Time!";      
    }else if(h == lunchTime){
        puppy_img.src = "img/puppy-lunch.jpg";
        quote.innerText = "I have a lunch";      
    }else if(h == napTime){
        puppy_img.src = "img/puppy-nap.jpg";
        quote.innerText = "It's a nap time";      
    }else if(h == partyTime){
        puppy_img.src = "img/puppy-party.jpg";
        quote.innerText = "It's a party time";  
    }else if(h < noon){
        puppy_img.src = "img/puppy-normal.jpg";
        quote.innerText = "Good Morning";  
    }else if(h >= evening){
        puppy_img.src = "img/puppy-normal.jpg";
        quote.innerText = "Good evening"; 
    }else {
        puppy_img.src = "img/puppy-normal.jpg";
        quote.innerText = "Good Afternoon"; 
    }
    getClock();
}

updateClock();
setInterval(updateClock, 1000);

var wTime = function(){
     wakeupTime = wakeup.value;
}

var lTime = function(){
     lunchTime = lunch.value;
}

var nTime = function(){
     napTime = nap.value;
}

wakeup.addEventListener('change', wTime);
lunch.addEventListener('change', lTime);
nap.addEventListener('change', nTime);







