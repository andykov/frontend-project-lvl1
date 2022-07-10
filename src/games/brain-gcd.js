import { ROUNDS_MAX, GAME_GCD, MSG_WINNER, MSG_WELCOME } from '../constants.js';
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
console.log('Find the greatest common divisor of given numbers.');

/**
 * @getGcd - Нахождение наибольшего общего делителя - алгоритм Евклида.
 * Наибольшим общим делителем (далее НОД) двух целых чисел a и b, одновременно не равных нулю, называется такое
 * наибольшее целое число d, на которое a и b делятся без остатка. Этот факт обозначается так: d = НОД(a, b).
 * Если оба числа равны нулю, то положим НОД(0, 0) = 0.
 *
 * Рекурсивный способ
 */
function getGcd(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const result = max % min;

  if (result === 0) {
    return min;
  }
  return getGcd(b, result);
}

let winScore = 0;

function startGameGcd() {
  if (winScore === ROUNDS_MAX) {
    // MSG_WINNER(userName);
    // console.log(`Congratulations, ${userName}!`);
    console.log(`${MSG_WINNER}, ${userName}!`);
    return false;
  }

  const randomNumberOne = getRandomNumber(100);
  const randomNumberTwo = getRandomNumber(100);
  const expectedAnswer = getGcd(randomNumberOne, randomNumberTwo);
  const expression = `${randomNumberOne} ${randomNumberTwo}`;
  const userAnswer = getUserAnswer(GAME_GCD, expression);

  if (isSameAnswer(userAnswer, expectedAnswer)) {
    winScore += 1;
    console.log('Correct!');
    startGameGcd();
  } else {
    console.log(msgFail(userAnswer, expectedAnswer, userName));
  }

  return false;
}

export default startGameGcd;
