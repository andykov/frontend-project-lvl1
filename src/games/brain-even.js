import {
  ROUNDS_COUNT,
  GAME_EVEN,
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
} from '../index.js';

function isEvenNumber(number) {
  return number % 2 === 0;
}

function startGameCheckEven() {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    if (round === ROUNDS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const randomNumber = getRandomNumber(0, 1000);
    const expectedAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
    const userAnswer = getUserAnswer(GAME_EVEN, randomNumber);

    const result = isSameAnswer(userAnswer, expectedAnswer, userName);
    if (!result) {
      return false;
    }
  }

  return false;
}

export default startGameCheckEven;
