import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')







const hamburger = document.querySelector('.hamburger--js');


hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;


const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    console.log(`wartosc entry: ${entry}`);
    result = entry;
}

const entryInput = document.querySelector('.entry--js');
entryInput.value = result;

const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
});