import mainGame from '..';
import getNumber from '../generate-number';

const gameName = 'Brain Calc';
const gameRule = 'What is the result of the expression?';
const gameCondition = () => {
  const number1 = getNumber(1, 9);
  const number2 = getNumber(1, 9);
  const typeOfExpression = getNumber(1, 3);
  switch (typeOfExpression) {
    case 1:
      return [`${number1} + ${number2}`, String(number1 + number2)];
    case 2:
      return [`${number1} - ${number2}`, String(number1 - number2)];
    case 3:
      return [`${number1} * ${number2}`, String(number1 * number2)];
    default:
      break;
  }
  return ['default return', '42'];
};

const brainCalc = () => mainGame(gameName, gameRule, gameCondition);

export default brainCalc;
