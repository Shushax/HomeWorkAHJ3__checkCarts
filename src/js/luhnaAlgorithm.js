/* eslint radix:0 */ // --> OFF

export default function luhnAlgorithm(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    let cardNum = parseInt(numbers[i]);

    if ((numbers.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return sum % 10 === 0;
}
