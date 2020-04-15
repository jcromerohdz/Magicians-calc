import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const [firstNum, secondNum] = [Big(numberOne), Big(numberTwo)];

  switch (operation) {
    case '+':
      return firstNum.plus(secondNum).toString();
    case '-':
      return firstNum.minus(secondNum).toString();
    case '÷':
      if (secondNum.toString() === '0') {
        return 'INFINITY';
      // eslint-disable-next-line no-else-return
      } else {
        return firstNum.div(secondNum).toString();
      }
    case 'x':
      return firstNum.times(secondNum).toString();
    default:
      return '0';
  }
};

export default operate;
