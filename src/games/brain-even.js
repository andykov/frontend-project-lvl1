import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const username = getUserName();
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counterCorrectAnswers = 0;
const winScore = 3;

function generateNumber() {
  return Math.floor(Math.random() * 1000);
}

function checkNumberIsEven(number) {
  return number % 2 === 0;
}

function msgAnswer(answer) {
  return `Your answer: ${answer}`;
}

function msgCorrect(answer) {
  return `${msgAnswer(answer)}\n'Correct!'`;
}

function msgFail(isEven, answer, userName) {
  return `'${answer}' is wrong answer ;(. Correct answer was '${
    isEven ? 'yes' : 'no'
  }'.\nLet's try again, ${userName}!`;
}

function startGameCheckEven() {
  if (counterCorrectAnswers === winScore) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  const number = generateNumber();
  const isEven = checkNumberIsEven(number);
  const answer = readlineSync.question(`Question: ${number} `);
  console.log('answer=', answer, typeof answer);
  const handlerValid = () => {
    counterCorrectAnswers += 1;
    console.log(`${msgCorrect(answer)}`);
    startGameCheckEven(username);
  };

  const handlerGameOver = () => {
    console.log(`${msgAnswer(answer)}`);
    console.log(msgFail(isEven, answer, username));
  };

  switch (answer) {
    case 'yes':
      if (isEven) {
        handlerValid();
        break;
      } else {
        handlerGameOver();
        break;
      }
    case 'no':
      if (!isEven) {
        handlerValid();
        break;
      } else {
        handlerGameOver();
        break;
      }
    default:
      console.log(msgFail(isEven, answer, username));
      break;
  }

  return false;
}

export default startGameCheckEven;
