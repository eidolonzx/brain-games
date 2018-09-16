import mainGame from '..';
import getNumber from '../generate-number';

const isPrime = (number) => {
  const iter = (counter) => {
    if (number === counter) return true;
    if (number % counter === 0) return false;
    return iter(counter + 1);
  };
  return iter(2);
};

const gameName = 'Brain Prime';
const gameRule = 'Number is prime or not?';
const gameCondition = () => {
  const number = getNumber(1, 100);
  const question = `Is this number prime? ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const condition = [question, rightAnswer];
  return condition;
};

const brainPrime = () => mainGame(gameName, gameRule, gameCondition);

export default brainPrime;
