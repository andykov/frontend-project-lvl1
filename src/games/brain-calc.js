import {
  ROUNDS_MAX,
  GAME_CALC,
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
console.log('What is the result of the expression?');

let winScore = 0;

function startGameCalc() {
  if (winScore === ROUNDS_MAX) {
    // MSG_WINNER(userName);
    // console.log(`Congratulations, ${userName}!`);
    console.log(`${MSG_WINNER}, ${userName}!`);
    return false;
  }

  const operations = ['+', '-', '*'];
  const selectOperation = operations[getRandomNumber(0, 3)];
  const operandBefore = getRandomNumber(0, 50);
  const operandAfter = getRandomNumber(0, 50);
  let expectedAnswer = null;

  switch (selectOperation) {
    case '+':
      expectedAnswer = operandBefore + operandAfter;
      break;
    case '-':
      expectedAnswer = Math.abs(operandBefore - operandAfter);
      break;
    case '*':
      expectedAnswer = operandBefore * operandAfter;
      break;
    default:
      break;
  }

  const expression = `${operandBefore} ${selectOperation} ${operandAfter}`;
  const userAnswer = getUserAnswer(GAME_CALC, expression);

  if (isSameAnswer(userAnswer, expectedAnswer)) {
    winScore += 1;
    console.log('Correct!');
    startGameCalc();
  } else {
    console.log(msgFail(userAnswer, expectedAnswer, userName));
  }

  return false;
}

export default startGameCalc;
