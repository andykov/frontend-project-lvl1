import {
  ROUNDS_COUNT,
  GAME_GCD,
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
} from '../index.js';

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

function startGameGcd() {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    if (round === ROUNDS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const randomNumberOne = getRandomNumber(100);
    const randomNumberTwo = getRandomNumber(100);
    const expectedAnswer = getGcd(randomNumberOne, randomNumberTwo);
    const expression = `${randomNumberOne} ${randomNumberTwo}`;
    const userAnswer = getUserAnswer(GAME_GCD, expression);

    const result = isSameAnswer(userAnswer, expectedAnswer, userName);
    if (!result) {
      return false;
    }
  }
  return false;
}

export default startGameGcd;
