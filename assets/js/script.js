function myClock(){ 

    var display = document.querySelector('.display');
    var clock = new Date();
    var schedule = adjustTime(clock.getHours()) + ':' + adjustTime(clock.getMinutes()) + ':' + adjustTime(clock.getSeconds());
    display.textContent = schedule;

}

function adjustTime(numberSeconds){
    if (numberSeconds < 10){
        numberSeconds = '0' + numberSeconds;
    }
    return numberSeconds;
}

myClock();
setInterval(myClock, 1000);