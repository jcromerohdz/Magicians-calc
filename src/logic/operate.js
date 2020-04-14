import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [firstNum, secondNum] = [Big(numberOne), Big(numberTwo)];

  switch (operation) {
    case '+':
      return firstNum.plus(secondNum).toString();
    case '-':
      return firstNum.minus(secondNum).toString();
    case '/':
      if (secondNum === '0') return '0';
      return firstNum.div(secondNum).toString();
    case 'x':
      return firstNum.times(secondNum).toString();
    default:
      return '0';
  }
};

export default operate;
