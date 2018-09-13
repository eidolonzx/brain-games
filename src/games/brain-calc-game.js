import mainGame from '..';
import getNumber from '../generate-number';

const gameName = 'Brain Calc';
const gameRule = 'What is the result of the expression?';
const gameCondition = () => {
  const number1 = getNumber(1, 9);
  const number2 = getNumber(1, 9);
  const typeOfExpression = getNumber(1, 3);
  let rightAnswer;
  let expression = '';
  switch (typeOfExpression) {
    case 1:
      rightAnswer = number1 + number2;
      expression = '+';
      break;
    case 2:
      rightAnswer = number1 - number2;
      expression = '-';
      break;
    case 3:
      rightAnswer = number1 * number2;
      expression = '*';
      break;
    default:
      break;
  }
  const question = `${number1} ${expression} ${number2}`;
  const condition = [question, String(rightAnswer)];
  return condition;
};

const brainCalc = () => mainGame(gameName, gameRule, gameCondition);

export default brainCalc;
