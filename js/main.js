"use strict";
const userNumberEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
const clueTextEl = document.querySelector(".js-clue");
const tryTextEl = document.querySelector(".js-try");
const formEl = document.querySelector(".js-form");

//Prevent Default
function submitPrevent(event) {
  event.preventDefault();
}

formEl.addEventListener("submit", submitPrevent);

//Generar y consolear nº random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Función para escribir en Inner.html
function writeOnInner(string) {
  clueTextEl.innerHTML = string;
}

//Generar respuesta al nº introducido por la usuaria
function play() {
  const userNumber = parseInt(userNumberEl.value);
  if (userNumber === randomNumber) {
    writeOnInner("Has ganado campeona");
  } else if (userNumber > randomNumber && userNumber < 101) {
    writeOnInner("Demasiado alto");
  } else if (userNumber < randomNumber && userNumber !== 0) {
    writeOnInner("Demasiado bajo");
  } else if (userNumber >= 101 || userNumber <= 0) {
    writeOnInner("El número debe estar entre cero y 100");
  }
}

//Generar texto con nº de intentos
let counter = 0;

function writeTryNumber() {
  counter++;
  tryTextEl.innerHTML = `Número de intentos: ${counter}`;
}

//Función manejadora del botón
function handleButton() {
  play();
  writeTryNumber();
}

buttonEl.addEventListener("click", handleButton);
