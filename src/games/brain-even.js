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
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let winScore = 0;

function startGameCheckEven() {
  // проверка раунда
  if (winScore === ROUNDS) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  // let isEven = null;
  // данные для вопроса
  const number = getRandomNumber();

  // узнает правильный ответ
  const isEven = number % 2 === 0;

  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer('even', number);
  let resultCorrect = null;

  switch (answer) {
    case 'yes':
      if (isEven) {
        resultCorrect = 'yes';
        console.log('Верный ответ');
        break;
      } else {
        resultCorrect = 'no';
        console.log('НЕ верный ответ');
        break;
      }
    case 'no':
      if (!isEven) {
        resultCorrect = 'no';
        console.log('Верный ответ');
        break;
      } else {
        resultCorrect = 'yes';
        console.log('НЕ верный ответ');
        break;
      }
    default:
      break;
  }

  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));

  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGameCheckEven();
  } else {
    console.log(msgFail(answer, isEven ? 'yes' : 'no', username));
  }

  return false;
}

export default startGameCheckEven;
