import readlineSync from 'readline-sync';

let currentTurn = 1;
const gameTurns = 3;

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const toPlay = (gameCondition) => {
  if (currentTurn > gameTurns) return true;
  const condition = gameCondition();
  const question = condition[0];
  const rightAnswer = condition[1];

  console.log(`Question: ${question}`);
  const playersAnswer = readlineSync.question('Your answer: ');

  if (playersAnswer === rightAnswer) console.log('Correct!');
  else {
    console.log(`'${playersAnswer}' is wrong answer ;( Correct answer was '${rightAnswer}'`);
    return false;
  }
  currentTurn += 1;
  return toPlay(gameCondition);
};


const mainGame = (gameName, gameRule, gameCondition) => {
  console.log(`Welcome to the ${gameName}!`);
  console.log(gameRule);
  const playerName = getName();
  const isWin = toPlay(gameCondition);
  if (isWin) console.log(`Congratulations, ${playerName}!`);
  else console.log(`Let's try again, ${playerName}!`);
};

export default mainGame;
