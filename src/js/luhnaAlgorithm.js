export default function luhnAlgorithm(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      let cardNum = parseInt(numbers[i]);
  
      if ((numbers.length - i) % 2 === 0) {
        cardNum = cardNum * 2;
  
        if (cardNum > 9) {
          cardNum = cardNum - 9;
        }
      }
  
      sum += cardNum;
    }
  
    return sum % 10 === 0;
  }