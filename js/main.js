'use strict';

const btn = document.querySelector('.btn');
const results1 = document.querySelector('.results1');
const results2 = document.querySelector('.results2');
const results3 = document.querySelector('.results3');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const alterEgo = () => {
  const nameNumber = getRandomNumber(213)
  fetch(`https://www.anapioficeandfire.com/api/characters?page=${nameNumber}`)
  .then(response => response.json())
  .then(data => {
    const number = getRandomNumber(9);
    const splitName = data[number].name.split(' ');
    results1.innerHTML = `Your name is ${splitName[0]}, `;
  });
  const houseNumber = getRandomNumber(8)
  fetch(`https://www.anapioficeandfire.com/api/houses?pagesize=50&page=${houseNumber}`)
  .then(response => response.json())
  .then(data => {
    const number = getRandomNumber(49);
    const number2 = getRandomNumber(49);
    results2.innerHTML = `you belong in ${data[number].name},`
    results3.innerHTML = `and you were born in ${data[number2].region}.`
  })
}

const deadOrAlive = () => {
  const number = getRandomNumber(100);
  if (number % 3 === 0) {
    results1.innerHTML = `You're dead 💀`;
    results2.innerHTML = `I'm sorry`;
    results3.innerHTML = 'The Night is dark and full of terrors.'
  } else {
    alterEgo();
  }
}

btn.addEventListener('click', deadOrAlive);