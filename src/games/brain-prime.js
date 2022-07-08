import getUserName from '../cli.js';
import {
  handlerGetAnswer,
  handlerCompareAnswer,
  getRandomNumber,
  msgAnswer,
  msgFail,
  ROUNDS,
  TYPE_PRIME,
} from '../index.js';

const username = getUserName();
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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

let winScore = 0;

function startGamePrimeNumber() {
  // проверка раунда
  if (winScore === ROUNDS) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  // рандомное число в пределах 100
  const number = getRandomNumber(0, 100);
  console.log('number', number);
  // находим верный ответ
  const isPrime = isPrimeNumber(number);
  console.log(`-------------`);
  console.log(`----${isPrime ? 'yes' : 'no'}----`);
  console.log(`-------------`);
  // данные для вопроса
  const expression = `${number}`;
  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer(TYPE_PRIME, expression);

  let resultCorrect = null;
  switch (answer) {
    case 'yes':
      if (isPrime) {
        resultCorrect = 'yes';
        break;
      } else {
        resultCorrect = 'no';
        break;
      }
    case 'no':
      if (!isPrime) {
        resultCorrect = 'no';
        break;
      } else {
        resultCorrect = 'yes';
        break;
      }
    default:
      break;
  }

  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));

  // продолжаем или завершаем игру
  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGamePrimeNumber();
  } else {
    console.log(msgFail(answer, resultCorrect ? 'yes' : 'no', username));
  }

  return false;
}

export default startGamePrimeNumber;
