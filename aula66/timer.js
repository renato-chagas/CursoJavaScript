const clock =  document.querySelector('.clock')
const pause =  document.querySelector('.pause');
const start =  document.querySelector('.start');
const reset =  document.querySelector('.reset');

//start clock
let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function startClock() {
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

// evento classe
/* document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('iniciar')){
        clearInterval(timer);
        startClock();
        clock.classList.remove('stoped');
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        clock.classList.add('pausado');
    }

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
    }
}) */

start.addEventListener('click', function(event) {
    clearInterval(timer);
    startClock();
    clock.classList.remove('stoped');
});

pause.addEventListener('click', function(event) {
    clearInterval(timer);
    clock.classList.add('stoped');
});

reset.addEventListener('click', function (event){
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
});