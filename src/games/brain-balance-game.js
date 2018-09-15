import mainGame from '..';
import getNumber from '../generate-number';

const makeStringFromSameNumbers = (number, numberCount) => {
  if (numberCount === 0) {
    return '';
  }
  return `${number}${makeStringFromSameNumbers(number, numberCount - 1)}`;
};

const sum = (number) => {
  [...number.toString()].map(e => parseInt(e, 10)).reduce((a, b) => a + b);
};

const getBalance = (num) => {
  const numString = String(num); // '123';
  const lengthOfNumber = numString.toString().length;
  const sumOfNumerals = sum(num);
  const minNumeral = Math.floor(sumOfNumerals / lengthOfNumber);
  const maxNumeral = minNumeral + 1;
  const minNumeralCount = lengthOfNumber * maxNumeral - sumOfNumerals;
  const maxNumeralCount = lengthOfNumber - minNumeralCount;
  const minsPartOfNum = makeStringFromSameNumbers(minNumeral, minNumeralCount);
  const maxxPartOfNum = makeStringFromSameNumbers(maxNumeral, maxNumeralCount);
  return `${minsPartOfNum}${maxxPartOfNum}`;
};

const gameName = 'Brain Balance';
const gameRule = 'Balance the given number.';
const gameCondition = () => {
  const number = getNumber(1, 9999);
  const question = number;
  const rightAnswer = String(getBalance(number));
  const condition = [question, rightAnswer];
  return condition;
};

const brainEven = () => mainGame(gameName, gameRule, gameCondition);

export default brainEven;
