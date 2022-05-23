let startingDate = new Date('May 13, 2022 15:53').getTime();
let counter1 = document.querySelector('.countup-timer1');
let counter2 = document.querySelector('.countup-timer2');
let counter3 = document.querySelector('.countup-timer3');
let counter4 = document.querySelector('.countup-timer4');

setInterval(function() {
    let newDate = new Date().getTime();
    let finalDate = newDate - startingDate;

    let days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((finalDate % (1000 * 60 *60)) / (1000 * 60));
    let seconds = Math.floor((finalDate % (1000 * 60)) / 1000);

    counter1.innerHTML = days+" days";
    counter2.innerHTML = hours+" hours";
    counter3.innerHTML = minutes+" minutes";
    counter4.innerHTML = seconds+" seconds";
}, 1000) 
