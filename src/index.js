import readlineSync from 'readline-sync';

const brainEven = () => {

  console.log('Welcome to the Brain Even!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const isEven = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
      console.log('Correct!');
      isEven(counter + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${number % 2 === 0 ? 'yes' : 'no'}'`);
      console.log(`Let's try again, ${name}!`);
    }
  };

  isEven(1);
}

export default brainEven;
