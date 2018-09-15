import mainGame from '..';
import getNumber from '../generate-number';

const makeProgression = (firstNumber, step, unknownPosition, progressionLength) => {
  const iter = (counter, acc) => {
    if (counter > progressionLength - 1) return acc;
    let currentNumStr;
    switch (counter) {
      case unknownPosition:
        currentNumStr = '..';
        break;
      default:
        currentNumStr = String(firstNumber + counter * step);
        break;
    }
    return iter(counter + 1, `${acc} ${currentNumStr}`);
  };
  return iter(0, '');
};

const gameName = 'Brain Progression';
const gameRule = 'What number is missing in this progression?';
const gameCondition = () => {
  const progressionLength = 10;
  const step = getNumber(2, 5);
  const firstNumber = getNumber(1, 100);
  const unknownPosition = getNumber(1, 10);
  const question = makeProgression(firstNumber, step, unknownPosition, progressionLength);
  const rightAnswer = String(firstNumber + unknownPosition * step);
  const condition = [question, rightAnswer];
  return condition;
};

const brainProgression = () => mainGame(gameName, gameRule, gameCondition);

export default brainProgression;
