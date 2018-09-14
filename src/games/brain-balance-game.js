import mainGame from '..';
import getNumber from '../generate-number';

const makeString = (num, count) => {
  if (count === 0) {
    return '';
  }
  return `${num}${makeString(num, count - 1)}`;
};

const sum = (number) => {
  let count = 0;
  const str = number.toString();
  for (let i = 0; i < str.length; i += 1) {
    count += Number(str[i]);
  }
  return count;
};

const getBalance = (num) => {
  const numString = String(num); // '123';
  const lengthOfNumber = numString.toString().length;
  const sumOfNumerals = sum(num);
  const minNumeral = Math.floor(sumOfNumerals / lengthOfNumber);
  const maxNumeral = minNumeral + 1;
  const minNumeralCount = lengthOfNumber * maxNumeral - sumOfNumerals;
  const maxNumeralCount = lengthOfNumber - minNumeralCount;
  const minsPartOfNum = makeString(minNumeral, minNumeralCount);
  const maxxPartOfNum = makeString(maxNumeral, maxNumeralCount);
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
