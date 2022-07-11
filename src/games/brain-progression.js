import {
  ROUNDS_COUNT,
  GAME_PROGRESSION,
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
} from '../index.js';

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

// Скрытие произвольного числа прогрессии
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

function startGameProgression() {
  const userName = getUserName();
  console.log('What number is missing in the progression?');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    if (round === ROUNDS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    // рандомный размер прогрессии
    const randomSize = getRandomNumber(5, 10);
    // рандомный индекс для скрытия числа
    const randomHide = getRandomNumber(0, randomSize);
    // генерация прогрессии
    const progression = defineProgression(0, 2, randomSize);
    // скрытие и возврат числа
    const progressionHidden = progressionWithHiddenNumber(
      progression,
      randomHide
    );
    // находим дистанцию
    const distance = getDistanceOfProgression(progression);
    // Преобразуем в строку через пробел
    const expression = `${progressionHidden.join(' ')}`;
    // находим скрытое число
    const expectedAnswer = findNumberOfProgression(
      progression,
      distance,
      randomHide
    );
    // спрашиваем и получаем ответ
    const userAnswer = getUserAnswer(GAME_PROGRESSION, expression);

    const result = isSameAnswer(userAnswer, expectedAnswer, userName);
    if (!result) {
      return false;
    }
  }
  return false;
}

export default startGameProgression;
