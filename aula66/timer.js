const relogio =  document.querySelector('.relogio')

//buttons
const pause =  document.querySelector('.pause');
const start =  document.querySelector('.start');
const reset =  document.querySelector('.reset');

start.addEventListener('click', function (event){
    alert("cliquei no iniciar")
})

pause.addEventListener('click', function (event){
    alert("cliquei no pause")
})

reset.addEventListener('click', function (event){
    alert("cliquei no reset")
});