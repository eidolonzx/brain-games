import mainGame from '..';
import getNumber from '../generate-number';

const gameName = 'Brain Even';
const gameRule = 'Answer "yes" if number even otherwise answer "no"';
const gameCondition = () => {
  const number = getNumber(1, 100);
  const question = number;
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const condition = [question, rightAnswer];
  return condition;
};

const brainEven = () => mainGame(gameName, gameRule, gameCondition);

export default brainEven;
