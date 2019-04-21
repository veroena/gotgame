'use strict';

const btn = document.querySelector('.btn');
const results1 = document.querySelector('.results1');
const results2 = document.querySelector('.results2');
const results3 = document.querySelector('.results3');
const imgResults = document.querySelector('.results-image');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const alterEgo = () => {
  fetch('https://www.anapioficeandfire.com/api/characters?page=3')
  .then(response => response.json())
  .then(data => {
    const number = getRandomNumber(9);
    console.log(number);
    results1.innerHTML = `Your name is ${data[number].name}, `;
  });
  fetch('https://www.anapioficeandfire.com/api/houses')
  .then(response => response.json())
  .then(data => {
    const number = getRandomNumber(9);
    const number2 = getRandomNumber(9);
    console.log(number);
    console.log(number2);
    results2.innerHTML = `you belong in ${data[number].name},`
    results3.innerHTML = `and you were born in ${data[number2].region}.`
  })
}

const deadOrAlive = () => {
  const number = getRandomNumber(100);
  console.log(number);
  if (number % 3 === 0) {
    results1.innerHTML = `You're dead 💀`;
    results2.innerHTML = `I'm sorry`;
    results3.innerHTML = 'The Night is dark and full of terrors.'
  } else {
    alterEgo();
  }
}

btn.addEventListener('click', deadOrAlive);