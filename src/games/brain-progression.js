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
console.log('What is the result of the expression?');

// Генерируем прогрессию
function defineProgression(start, distance, size = 5, hide = -1) {
  const result = [];
  let sum = start;

  for (let i = 0; i < size; i += 1) {
    result.push(sum);
    sum += distance;
  }

  if (hide >= 0) {
    result[hide] = '..';
  }

  return result;
}

// Находим дистанцию между числами
function getDistanceOfProgression(progression, start = 0, target = 1) {
  return (progression[target] - progression[start]) / target;
}

// Находим число по индексу
function findNumberOfProgression(progression, distance, target) {
  return progression[0] + distance * target;
}

let winScore = 0;

function startGameProgression() {
  // проверка раунда
  if (winScore === ROUNDS) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  // рандомно выбираем оператор для выражения
  const randomSize = getRandomNumber(5, 10);
  const randomHide = getRandomNumber(0, randomSize);
  const progression = defineProgression(0, 2, randomSize, randomHide);
  const progressionString = progression.join(' ');

  const distance = getDistanceOfProgression(progression);
  // находим верный ответ
  const resultCorrect = findNumberOfProgression(
    progression,
    distance,
    randomHide
  );
  // данные для вопроса
  const expression = `${progressionString}`;
  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer('progression', expression);
  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));

  // продолжаем или завершаем игру
  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGameProgression();
  } else {
    console.log(msgFail(answer, resultCorrect, username));
  }

  return false;
}

export default startGameProgression;
