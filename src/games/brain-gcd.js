import getUserName from '../cli.js';
import {
  handlerGetAnswer,
  handlerCompareAnswer,
  getRandomNumber,
  msgAnswer,
  msgFail,
  ROUNDS,
} from '../index.js';

const username = getUserName();
console.log(`Hello, ${username}!`);
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
    console.log(`-----------`);
    console.log(`-----${min}-----`);
    console.log(`-----------`);
    return min;
  }
  return getGcd(b, result);
}

let winScore = 0;

function startGameGcd() {
  // проверка раунда
  if (winScore === ROUNDS) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  // рандомно выбираем оператор для выражения
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  // находим верный ответ
  const resultCorrect = getGcd(numberOne, numberTwo);

  // данные для вопроса
  const expression = `${numberOne} ${numberTwo}`;
  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer('gcd', expression);
  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));

  // продолжаем или завершаем игру
  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGameGcd();
  } else {
    console.log(msgFail(answer, resultCorrect, username));
  }

  return false;
}

export default startGameGcd;
