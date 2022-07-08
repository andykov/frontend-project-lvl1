import getUserName from '../cli.js';
import {
  handlerGetAnswer,
  handlerCompareAnswer,
  getRandomNumber,
  msgAnswer,
  msgFail,
  ROUNDS,
  TYPE_PROGRESSION,
} from '../index.js';

const username = getUserName();
console.log(`Hello, ${username}!`);
console.log('What is the result of the expression?');

// Генерируем прогрессию
function defineProgression(start, distance, size = 5) {
  const result = [];
  let sum = start;

  for (let i = 0; i < size; i += 1) {
    result.push(sum);
    sum += distance;
  }

  return result;
}

// скрытие произвольного числа
function progressionWithHiddenNumber(progression, hide) {
  const copy = [...progression];
  if (hide >= 0) {
    copy[hide] = '..';
  }
  return copy;
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

  // рандомный размер прогрессии
  const randomSize = getRandomNumber(5, 10);
  // рандомный индекс для скрытия числа
  const randomHide = getRandomNumber(0, randomSize);
  // генерация прогрессии
  const progression = defineProgression(0, 2, randomSize);
  // скрытие числа
  const progressionHidden = progressionWithHiddenNumber(
    progression,
    randomHide
  );
  // находим дистанцию
  const distance = getDistanceOfProgression(progression);
  // находим скрытое число
  const resultCorrect = findNumberOfProgression(
    progression,
    distance,
    randomHide
  );
  // данные для вопроса
  const expression = `${progressionHidden.join(' ')}`;
  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer(TYPE_PROGRESSION, expression);
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
