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

let winScore = 0;

function startGameCalc() {
  // проверка раунда
  if (winScore === ROUNDS) {
    console.log(`Congratulations, ${username}!`);
    return false;
  }

  // рандомно выбираем оператор для выражения
  const operations = ['+', '-', '*'];
  const selectOperation = operations[getRandomNumber(3)];
  const operandBefore = getRandomNumber();
  const operandAfter = getRandomNumber();
  let resultCorrect = null;

  // вычисляем выражение по типу операции
  switch (selectOperation) {
    case '+':
      resultCorrect = operandBefore + operandAfter;
      break;
    case '-':
      resultCorrect = Math.abs(operandBefore - operandAfter);
      break;
    case '*':
      resultCorrect = operandBefore * operandAfter;
      break;
    default:
      break;
  }

  // данные для вопроса
  const expression = `${operandBefore} ${selectOperation} ${operandAfter}`;
  // спрашиваем и получаем ответ
  const answer = handlerGetAnswer('calc', expression);
  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));
  startGameCalc();
  // продолжаем или завершаем игру
  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGameCalc();
  } else {
    console.log(msgFail(answer, resultCorrect, username));
  }

  return false;
}

export default startGameCalc;
