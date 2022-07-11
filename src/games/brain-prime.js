import {
  ROUNDS_COUNT,
  GAME_PRIME,
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
} from '../index.js';

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

function startGamePrimeNumber() {
  const userName = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    if (round === ROUNDS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const randomNumber = getRandomNumber(0, 100);
    const expectedAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
    const userAnswer = getUserAnswer(GAME_PRIME, randomNumber);

    const result = isSameAnswer(userAnswer, expectedAnswer, userName);
    if (!result) {
      return false;
    }
  }
  return false;
}

export default startGamePrimeNumber;
