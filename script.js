let btnConvert = document.querySelector('[data-convert]');
let seconds = document.getElementById('Sec'); 
let min = document.getElementById('Min').value



btnConvert.addEventListener('click', function() {
    let min = document.getElementById('Min').value

   minToSec(min);

})

function minToSec(num) {
    let sum = num * 60 ;
seconds.value = sum
}