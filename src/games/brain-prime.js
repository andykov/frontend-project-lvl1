import {
  ROUNDS_MAX,
  GAME_PRIME,
  MSG_WINNER,
  MSG_WELCOME,
} from '../constants.js';
import {
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
  msgFail,
} from '../index.js';

console.log(MSG_WELCOME);
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrimeNumber(num) {
  let isPrime = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

let winScore = 0;

function startGamePrimeNumber() {
  if (winScore === ROUNDS_MAX) {
    // MSG_WINNER(userName);
    // console.log(`Congratulations, ${userName}!`);
    console.log(`${MSG_WINNER}, ${userName}!`);
    return false;
  }

  const randomNumber = getRandomNumber(0, 100);
  const expectedAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer(GAME_PRIME, randomNumber);

  if (isSameAnswer(userAnswer, expectedAnswer)) {
    winScore += 1;
    console.log('Correct!');
    startGamePrimeNumber();
  } else {
    console.log(msgFail(userAnswer, expectedAnswer, userName));
  }

  return false;
}

export default startGamePrimeNumber;
