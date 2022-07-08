// import readlineSync from 'readline-sync';
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

// let counterCorrectAnswers = 0;
// const winScore = 3;

// function generateNumber() {
//   return Math.floor(Math.random() * 1000);
// }

// function checkNumberIsEven(number) {
//   return number % 2 === 0;
// }

// function msgAnswer(answer) {
//   return `Your answer: ${answer}`;
// }

// function msgCorrect(answer) {
//   return `${msgAnswer(answer)}\n'Correct!'`;
// }

// function msgFail(isEven, answer, userName) {
//   return `'${answer}' is wrong answer ;(. Correct answer was '${
//     isEven ? 'yes' : 'no'
//   }'.\nLet's try again, ${userName}!`;
// }

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
        // handlerValid();
        console.log('Верный ответ');
        break;
      } else {
        resultCorrect = 'no';
        // handlerGameOver();
        console.log('НЕ верный ответ');
        break;
      }
    case 'no':
      if (!isEven) {
        resultCorrect = 'no';
        console.log('Верный ответ');
        // handlerValid();
        break;
      } else {
        resultCorrect = 'yes';
        console.log('НЕ верный ответ');
        // handlerGameOver();
        break;
      }
    default:
      // console.log(msgFail(answer, isEven ? 'yes' : 'no', username));
      break;
  }

  // проверяем ответ
  const isValidAnswer = handlerCompareAnswer(answer, resultCorrect);
  console.log(msgAnswer(answer));

  // const handlerValid = () => {
  //   winScore += 1;
  //   console.log(`${msgCorrect(answer)}`);
  //   startGameCheckEven(username);
  // };

  if (isValidAnswer) {
    winScore += 1;
    console.log('Correct!');
    startGameCheckEven();
  } else {
    console.log(msgFail(answer, isEven ? 'yes' : 'no', username));
    // console.log(msgFail(answer, resultCorrect, username));
  }

  return false;
  // if (counterCorrectAnswers === winScore) {
  //   console.log(`Congratulations, ${username}!`);
  //   return false;
  // }

  // const number = generateNumber();
  // const isEven = checkNumberIsEven(number);
  // const answer = readlineSync.question(`Question: ${number} `);
  // console.log('answer=', answer, typeof answer);
  // const handlerValid = () => {
  //   counterCorrectAnswers += 1;
  //   console.log(`${msgCorrect(answer)}`);
  //   startGameCheckEven(username);
  // };

  // const handlerGameOver = () => {
  //   console.log(`${msgAnswer(answer)}`);
  //   console.log(msgFail(isEven, answer, username));
  // };

  // switch (answer) {
  //   case 'yes':
  //     if (isEven) {
  //       handlerValid();
  //       break;
  //     } else {
  //       handlerGameOver();
  //       break;
  //     }
  //   case 'no':
  //     if (!isEven) {
  //       handlerValid();
  //       break;
  //     } else {
  //       handlerGameOver();
  //       break;
  //     }
  //   default:
  //     console.log(msgFail(isEven, answer, username));
  //     break;
  // }

  // return false;
}

export default startGameCheckEven;
