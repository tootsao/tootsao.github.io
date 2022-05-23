let startingDate = new Date('May 13, 2022 15:53').getTime();
let counter = document.querySelector('.countup-timer');

setInterval(function() {
    let newDate = new Date().getTime();
    let finalDate = newDate - startingDate;

    let days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((finalDate % (1000 * 60 *60)) / (1000 * 60));
    let seconds = Math.floor((finalDate % (1000 * 60)) / 1000);

    counter.innerHTML = days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds";
}, 1000) 
