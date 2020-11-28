import checkSystem from './checkSystem';
import luhnaAlgorithm from './luhnaAlgorithm';

const text = document.createElement('p');

export const input = document.getElementById('input');
const form = document.getElementsByTagName('form')[0];

input.oninput = function() {  
    checkSystem();
}

form.onsubmit = function(e) {
    e.preventDefault();
    if (luhnaAlgorithm(input.value)) {
        text.textContent = 'Поздравляем, номер карты валиден!';
        document.body.appendChild(text);
    } else {
        text.textContent = 'Увы, карта невалидна :(';
        document.body.appendChild(text);
    }

}