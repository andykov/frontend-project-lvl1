import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;
const GAME_CALC = 'calc';
const GAME_EVEN = 'even';
const GAME_GCD = 'gcd';
const GAME_PROGRESSION = 'progression';
const GAME_PRIME = 'prime';

function getUserName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
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

function isSameAnswer(userAnswer, expectedAnswer, userName) {
  const result = userAnswer === expectedAnswer;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(msgFail(userAnswer, expectedAnswer, userName));
    // return false;
  }
  return result;
}

export {
  ROUNDS_COUNT,
  GAME_CALC,
  GAME_EVEN,
  GAME_GCD,
  GAME_PROGRESSION,
  GAME_PRIME,
  getUserName,
  sendUserQuestion,
  getUserAnswer,
  isSameAnswer,
  getRandomNumber,
  msgUserAnswer,
  msgFail,
};
