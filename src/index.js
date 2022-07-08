import readlineSync from 'readline-sync';

const ROUNDS = 3;
const TYPE_CALC = 'calc';
const TYPE_EVEN = 'even';
const TYPE_GCD = 'gcd';
const TYPE_PROGRESSION = 'progression';

// рандмное число от 0 до max
function getRandomNumber(min = 0, max = 1000) {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

function handlerAskQuestion(type, data) {
  if (!type) {
    console.log('Type question is not defined');
    return false;
  }
  const message = `Question: ${data} `;

  // задаем вопрос по типу и возвращаем ответ
  return () => {
    if (type === TYPE_CALC) {
      return readlineSync.questionInt(message);
    }
    if (type === TYPE_EVEN) {
      return readlineSync.question(message).toLowerCase();
    }
    if (type === TYPE_GCD) {
      return readlineSync.questionInt(message);
    }
    if (type === TYPE_PROGRESSION) {
      return readlineSync.questionInt(message);
    }
    return false;
  };
}

function handlerGetAnswer(type, data) {
  const answer = handlerAskQuestion(type, data);
  return answer();
}

function handlerCompareAnswer(answer, correct) {
  return answer === correct;
}

function msgAnswer(answer) {
  return `Your answer: ${answer}`;
}

function msgFail(answer, correct, userName) {
  return `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`;
}

function counter() {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
}

export {
  ROUNDS,
  TYPE_CALC,
  TYPE_EVEN,
  TYPE_GCD,
  TYPE_PROGRESSION,
  handlerAskQuestion,
  handlerGetAnswer,
  handlerCompareAnswer,
  getRandomNumber,
  msgAnswer,
  msgFail,
  counter,
};
