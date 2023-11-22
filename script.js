let btnConvert = document.querySelector('[data-convert]');// this allows you to use the button
let seconds = document.getElementById('Sec'); // this displays to the input seconds
let min = document.getElementById('Min').value // this fetches data inputted into mintues


// this makes the button function when clicked
btnConvert.addEventListener('click', function() {
    let min = document.getElementById('Min').value

   minToSec(min);

})
// this does the sum to make that minutes converts to seconds
function minToSec(num) {
    let sum = num * 60 ;
seconds.value = sum
}