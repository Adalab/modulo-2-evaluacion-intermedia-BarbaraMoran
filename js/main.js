'use strict';
const userNumberEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
const clueTextEl = document.querySelector(".js-clue");
const tryTextEl = document.querySelector(".js-try");

//Generar y consolear nº random
function generateRandomNumber() {
    const number = Math.round(     Math.random() * 100    );
    return number;
}

const randomNumber = generateRandomNumber();
document.addEventListener('load', generateRandomNumber, console.log(randomNumber));

//Generar respuesta al nº introducido por la usuaria
function play (){

    if (userNumberEl.value === randomNumber) {
    clueTextEl.innerHTML = 'Has ganado campeona';
    }
   
else if (userNumberEl.value > randomNumber && userNumberEl.value < 100) {
    clueTextEl.innerHTML = 'Demasiado alto';
}

else if (userNumberEl.value < randomNumber || userNumberEl.value !== 0) {
    clueTextEl.innerHTML = 'Demasiado bajo';
}

else if (userNumberEl.value >= 100 || userNumberEl.value === 0) {
    clueTextEl.innerHTML = 'El número debe estar entre 1 y 100';
}

}
buttonEl. addEventListener('click', play);




