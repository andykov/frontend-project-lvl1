import {
  ROUNDS_MAX,
  GAME_EVEN,
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
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function isEvenNumber(number) {
  return number % 2 === 0;
}

let winScore = 0;

function startGameCheckEven() {
  if (winScore === ROUNDS_MAX) {
    // MSG_WINNER(userName);
    // console.log(`Congratulations, ${userName}!`);
    console.log(`${MSG_WINNER}, ${userName}!`);
    return false;
  }

  const randomNumber = getRandomNumber(0, 1000);
  const expectedAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer(GAME_EVEN, randomNumber);

  if (isSameAnswer(userAnswer, expectedAnswer)) {
    winScore += 1;
    console.log('Correct!');
    startGameCheckEven();
  } else {
    console.log(msgFail(userAnswer, expectedAnswer, userName));
  }

  return false;
}

export default startGameCheckEven;
