/* eslint import/no-cycle:0 */ // --> OFF
/* eslint import/prefer-default-export:0 */ // --> OFF
import checkSystem from './checkSystem';
import luhnaAlgorithm from './luhnaAlgorithm';

const text = document.createElement('p');

export const input = document.getElementById('input');
const form = document.getElementsByTagName('form')[0];

const mir = document.getElementsByClassName('mir')[0];
const dinersclub = document.getElementsByClassName('dinersclub')[0];
const jcb = document.getElementsByClassName('jcb')[0];
const ae = document.getElementsByClassName('ae')[0];
const visa = document.getElementsByClassName('visa')[0];
const maestro = document.getElementsByClassName('maestro')[0];
const mastercard = document.getElementsByClassName('mastercard')[0];
const discover = document.getElementsByClassName('discover')[0];
const unionpay = document.getElementsByClassName('unionpay')[0];

input.oninput = function () {
  if (checkSystem(input.value) === 'mir') {
    mir.style.opacity = '100%';
  } else {
    mir.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'dinersclub') {
    dinersclub.style.opacity = '100%';
  } else {
    dinersclub.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'jcb') {
    jcb.style.opacity = '100%';
  } else {
    jcb.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'ae') {
    ae.style.opacity = '100%';
  } else {
    ae.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'visa') {
    visa.style.opacity = '100%';
  } else {
    visa.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'maestro') {
    maestro.style.opacity = '100%';
  } else {
    maestro.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'mastercard') {
    mastercard.style.opacity = '100%';
  } else {
    mastercard.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'discover') {
    discover.style.opacity = '100%';
  } else {
    discover.style.opacity = '30%';
  }

  if (checkSystem(input.value) === 'unionpay') {
    unionpay.style.opacity = '100%';
  } else {
    unionpay.style.opacity = '30%';
  }
};

form.onsubmit = function (e) {
  e.preventDefault();
  if (luhnaAlgorithm(input.value)) {
    text.textContent = 'Поздравляем, номер карты валиден!';
    document.body.appendChild(text);
  } else {
    text.textContent = 'Увы, карта невалидна :(';
    document.body.appendChild(text);
  }
};
