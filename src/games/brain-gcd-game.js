import mainGame from '..';
import getNumber from '../generate-number';

const getGcd = (firstNum, secondNum) => {
  if (firstNum === secondNum) return firstNum;
  if (firstNum > secondNum) return getGcd(firstNum - secondNum, secondNum);
  return getGcd(firstNum, secondNum - firstNum);
};

const gameName = 'Brain GCD';
const gameRule = 'Find the greatest common divisor of given numbers.';
const gameCondition = () => {
  const number1 = getNumber(1, 100);
  const number2 = getNumber(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  const condition = [question, rightAnswer];
  return condition;
};

const brainGcd = () => mainGame(gameName, gameRule, gameCondition);

export default brainGcd;
