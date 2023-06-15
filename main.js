const counter = document.querySelector('.counter');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const recetButton = document.querySelector('.recet');
const tenButton = document.querySelector('.ten');
const fiftyButton = document.querySelector('.fifty');
const handredButton = document.querySelector('.handred');

let counterValue;
let value = localStorage.getItem('counterValue');
if(value == null) {
  counterValue = 0;
}
else {
    counterValue = Number(value);
}

counterValue.textContent = value; 

function updateLocalStorage() {
    localStorage.setItem('counterValue', String(counterValue));
}

function plus() {
    counterValue++;
    counter.textContent = counterValue;
    updateLocalStorage()
}
function minus() {
    counterValue--;
    counter.textContent = counterValue;
    updateLocalStorage()
}
function recet() {
    counterValue = 0;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function ten() {
    counterValue += 10;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function fifty() {
    counterValue += 50;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function handred() {
    counterValue += 100;
    counter.textContent = counterValue;
    updateLocalStorage();
}


plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
recetButton.addEventListener('click', recet);
tenButton.addEventListener('click', ten);
fiftyButton.addEventListener('click', fifty);
handredButton.addEventListener('click', handred);