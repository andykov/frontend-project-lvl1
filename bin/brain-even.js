#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

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
  const answer = readlineSync.question(`Question: ${number} `).toLowerCase();
  const msgAnswer = 'Your answer:';
  const msgCorrect = 'Correct!';

  switch (answer) {
    case 'yes':
      if (isEven) {
        counterCorrectAnswers += 1;
        console.log(`${msgAnswer} ${answer}\n${msgCorrect}`);
        startGameCheckEven(username);
        break;
      } else {
        console.log(`${msgAnswer} ${answer}`);
        console.log(msgFail(isEven, answer, username));
        break;
      }
    case 'no':
      if (!isEven) {
        counterCorrectAnswers += 1;
        console.log(`${msgAnswer} ${answer}\n${msgCorrect}`);
        startGameEven(username);
        break;
      } else {
        console.log(`${msgAnswer} ${answer}`);
        console.log(msgFail(isEven, answer, username));
        break;
      }
    default:
      console.log(msgFail(isEven, answer, username));
      break;
  }

  return false;
}

startGameCheckEven();

// const start = startGameCheckEven();
// start();
// export default () => startGameCheckEven;
