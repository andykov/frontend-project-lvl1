import {
  ROUNDS_COUNT,
  GAME_CALC,
  getUserName,
  getUserAnswer,
  getRandomNumber,
  isSameAnswer,
} from '../index.js';

function startGameCalc() {
  const userName = getUserName();
  console.log('What is the result of the expression?');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    if (round === ROUNDS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const operations = ['+', '-', '*'];
    const selectOperation = operations[getRandomNumber(0, 2)];
    const operandBefore = getRandomNumber(0, 50);
    const operandAfter = getRandomNumber(0, 50);
    let expectedAnswer = null;

    switch (selectOperation) {
      case '+':
        expectedAnswer = operandBefore + operandAfter;
        break;
      case '-':
        expectedAnswer = Math.abs(operandBefore - operandAfter);
        break;
      case '*':
        expectedAnswer = operandBefore * operandAfter;
        break;
      default:
        break;
    }

    const expression = `${operandBefore} ${selectOperation} ${operandAfter}`;
    const userAnswer = getUserAnswer(GAME_CALC, expression);

    const result = isSameAnswer(userAnswer, expectedAnswer, userName);
    if (!result) {
      return false;
    }
  }

  return false;
}

export default startGameCalc;
