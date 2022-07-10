import readlineSync from 'readline-sync';
import {
  GAME_CALC,
  GAME_EVEN,
  GAME_GCD,
  GAME_PROGRESSION,
  GAME_PRIME,
  MSG_GET_USERNAME,
} from './constants.js';

function getUserName() {
  const username = readlineSync.question(MSG_GET_USERNAME);
  return username;
}

function getRandomNumber(min = 0, max = 1000) {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

function msgUserAnswer(userAnswer) {
  return `Your answer: ${userAnswer}`;
}

function msgFail(userAnswer, expectedAnswer, userName) {
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`;
}

function sendUserQuestion(type, questionData) {
  if (!type) {
    return false;
  }
  const message = `Question: ${questionData} `;

  // задаем вопрос по типу и возвращаем ответ
  return () => {
    switch (type) {
      case GAME_CALC:
        return readlineSync.questionInt(message);
      case GAME_EVEN:
        return readlineSync.question(message).toLowerCase();
      case GAME_GCD:
        return readlineSync.questionInt(message);
      case GAME_PROGRESSION:
        return readlineSync.questionInt(message);
      case GAME_PRIME:
        return readlineSync.question(message).toLowerCase();
      default:
        return false;
    }
  };
}

function getUserAnswer(type, questionData) {
  const answer = sendUserQuestion(type, questionData);
  return answer();
}

function isSameAnswer(userAnswer, expectedAnswer) {
  return userAnswer === expectedAnswer;
}

export {
  getUserName,
  sendUserQuestion,
  getUserAnswer,
  isSameAnswer,
  getRandomNumber,
  msgUserAnswer,
  msgFail,
};
