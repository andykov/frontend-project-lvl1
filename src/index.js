import readlineSync from 'readline-sync';

const ROUNDS = 3;

// рандмное число от 0 до max
function getRandomNumber(max = 1000) {
  return Math.floor(Math.random() * max);
}

function handlerAskQuestion(type, data) {
  if (!type) {
    console.log('Type question is not defined');
    return false;
  }
  const message = `Question: ${data} `;

  return () => {
    if (type === 'calc') {
      // задаем вопрос
      return readlineSync.questionInt(message);
    }
    if (type === 'even') {
      // задаем вопрос
      return readlineSync.question(message);
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
  handlerAskQuestion,
  handlerGetAnswer,
  handlerCompareAnswer,
  getRandomNumber,
  msgAnswer,
  msgFail,
  counter,
};
